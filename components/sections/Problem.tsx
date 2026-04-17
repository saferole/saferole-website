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
      // ease-out cubic for smooth deceleration
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
      {/* Subtle top accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-16 bg-gradient-to-r from-transparent via-gold-500/60 to-transparent" />

      {/* Glow behind stat number */}
      <div
        className="pointer-events-none absolute top-4 left-1/2 -translate-x-1/2 h-20 w-40 rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(212,168,83,0.25), transparent 70%)",
        }}
      />

      {/* Stat number */}
      <p
        className="relative text-5xl font-extrabold tracking-tight text-white sm:text-6xl"
        style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.03em" }}
      >
        {displayValue ? (
          <span>{displayValue}</span>
        ) : (
          <>
            <span>{formattedCount}</span>
            {suffix && (
              <span className="text-gold-400">{suffix}</span>
            )}
          </>
        )}
      </p>

      {/* Label */}
      <p className="max-w-[220px] text-center text-sm leading-snug text-slate-400 sm:text-base">
        {label}
      </p>
    </div>
  );
}

export default function Problem() {
  return (
    <section className="relative bg-navy-900/50 border-y border-white/5">
      <div className="section-padding">
        {/* Headline */}
        <AnimatedSection className="mb-16 sm:mb-20">
          <h2
            className="mx-auto max-w-4xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl"
            style={{
              fontFamily: "var(--font-display)",
              letterSpacing: "-0.025em",
            }}
          >
            <span className="text-white">Layoffs Are Rising.</span>{" "}
            <span className="text-slate-400">
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
