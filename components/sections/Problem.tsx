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
        className="relative text-5xl font-extrabold tracking-tighter text-gray-900 sm:text-6xl"
        style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.03em" }}
      >
        {displayValue ? (
          <span>{displayValue}</span>
        ) : (
          <>
            <span>{formattedCount}</span>
            {suffix && (
              <span className="text-emerald-500">{suffix}</span>
            )}
          </>
        )}
      </p>

      {/* Thin emerald accent line */}
      <div className="h-0.5 w-8 bg-emerald-500" />

      {/* Label */}
      <p className="mt-3 max-w-[220px] text-center text-sm leading-snug text-gray-500 sm:text-base">
        {label}
      </p>
    </div>
  );
}

export default function Problem() {
  return (
    <section className="bg-white">
      <div className="section-padding">
        {/* Headline */}
        <AnimatedSection className="mb-16 sm:mb-20">
          <h2
            className="mx-auto max-w-4xl text-center text-4xl font-bold leading-tight sm:text-5xl"
            style={{
              fontFamily: "var(--font-display)",
              letterSpacing: "-0.025em",
            }}
          >
            <span className="text-gray-900">Layoffs Are Rising.</span>{" "}
            <span className="text-gray-400">
              Your Safety Net Shouldn&apos;t Depend on Your Employer.
            </span>
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
