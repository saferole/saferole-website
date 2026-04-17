"use client";

import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
import { AnimatedSection, AnimatedItem } from "@/components/ui/AnimatedSection";
import { STATS } from "@/lib/constants";

function useCountUp(end: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!start) return;

    const startTime = performance.now();
    const isDecimal = end % 1 !== 0;
    const decimals = isDecimal ? 1 : 0;

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = parseFloat((eased * end).toFixed(decimals));
      setCount(current);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    }

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [end, duration, start]);

  return count;
}

function StatCounter({
  value,
  suffix,
  label,
  displayValue,
}: {
  value: number;
  suffix: string;
  label: string;
  displayValue?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const count = useCountUp(value, 2000, isInView);

  const formattedCount =
    value >= 1000 ? count.toLocaleString() : String(count);

  return (
    <div ref={ref} className="flex flex-col gap-2 text-left">
      {/* Stat number */}
      <p
        className="font-medium tracking-headline"
        style={{
          color: "var(--ink)",
          fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
        }}
      >
        {displayValue ? (
          <span>{displayValue}</span>
        ) : (
          <>
            <span>{formattedCount}</span>
            {suffix && (
              <span style={{ color: "var(--signal)" }}>{suffix}</span>
            )}
          </>
        )}
      </p>

      {/* Label */}
      <p
        className="mt-2 max-w-[25ch] text-sm"
        style={{ color: "var(--text-muted)" }}
      >
        {label}
      </p>
    </div>
  );
}

export default function Problem() {
  return (
    <section style={{ backgroundColor: "var(--canvas)", paddingTop: "96px", paddingBottom: "96px" }}>
      <div className="section-container relative">
        {/* Ghost watermark */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          aria-hidden="true"
        >
          <span
            className="font-medium tracking-headline"
            style={{
              fontSize: "8rem",
              color: "var(--text-dust)",
              opacity: 0.5,
            }}
          >
            264K+
          </span>
        </div>

        {/* Eyebrow */}
        <AnimatedSection className="mb-16 relative z-10">
          <div className="flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "var(--signal)" }}
            />
            <span
              className="text-xs font-bold uppercase tracking-eyebrow"
              style={{ color: "var(--text-muted)" }}
            >
              The Numbers
            </span>
          </div>
          <p
            className="text-lg mt-2"
            style={{ color: "var(--text-muted)", maxWidth: "45ch" }}
          >
            The numbers speak for themselves.
          </p>
        </AnimatedSection>

        {/* Stats */}
        <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-16 relative z-10">
          {STATS.map((stat) => (
            <AnimatedItem key={stat.label}>
              <StatCounter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                displayValue={"displayValue" in stat ? (stat as { displayValue: string }).displayValue : undefined}
              />
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
