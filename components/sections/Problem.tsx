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
    <div ref={ref} className="relative flex flex-col items-center gap-3 py-6">
      {/* Stat number */}
      <p
        className="relative text-5xl font-bold tracking-tighter text-slate-900 sm:text-6xl"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {displayValue ? (
          <span>{displayValue}</span>
        ) : (
          <>
            <span>{formattedCount}</span>
            {suffix && (
              <span className="text-blue-600">{suffix}</span>
            )}
          </>
        )}
      </p>

      {/* Blue accent line */}
      <div className="w-12 h-1 bg-blue-600 rounded-full mx-auto mt-3" />

      {/* Label */}
      <p className="mt-3 max-w-[220px] text-center text-sm leading-snug text-slate-500 sm:text-base">
        {label}
      </p>
    </div>
  );
}

export default function Problem() {
  return (
    <section className="bg-slate-50">
      <div className="section-padding py-24">
        {/* Headline */}
        <AnimatedSection className="mb-16 sm:mb-20">
          <h2
            className="mx-auto max-w-3xl text-center text-3xl font-bold leading-tight text-slate-800 sm:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The numbers don&apos;t lie.
          </h2>
        </AnimatedSection>

        {/* Stats */}
        <AnimatedSection stagger className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-12">
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
