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
    <div ref={ref} className="flex flex-col items-center gap-2 text-center">
      {/* Stat number */}
      <p
        className="font-bold tracking-tighter"
        style={{
          fontFamily: "var(--font-display)",
          color: "var(--color-text)",
          fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
        }}
      >
        {displayValue ? (
          <span>{displayValue}</span>
        ) : (
          <>
            <span>{formattedCount}</span>
            {suffix && (
              <span style={{ color: "var(--color-accent)" }}>{suffix}</span>
            )}
          </>
        )}
      </p>

      {/* Label */}
      <p
        className="mt-2 max-w-[25ch] mx-auto text-sm leading-snug"
        style={{ color: "var(--color-text-muted)" }}
      >
        {label}
      </p>
    </div>
  );
}

export default function Problem() {
  return (
    <section style={{ backgroundColor: "var(--color-bg-alt)", paddingTop: "var(--space-3xl)", paddingBottom: "var(--space-3xl)" }}>
      <div className="section-container">
        {/* Headline */}
        <AnimatedSection className="mb-16">
          <h2
            className="mx-auto max-w-[45ch] text-center font-bold"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-text)",
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
            }}
          >
            The numbers speak for themselves.
          </h2>
        </AnimatedSection>

        {/* Stats */}
        <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
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
