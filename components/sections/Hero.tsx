"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

const ease = [0.22, 1, 0.36, 1] as const;

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease },
  };
}

function fadeIn(delay: number) {
  return {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8, delay, ease },
  };
}

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950">
      {/* === Background Layers === */}

      {/* Aurora mesh — 3 drifting blurred circles */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/4 top-1/4 h-[600px] w-[600px] rounded-full blur-3xl"
          style={{
            background: "rgba(16, 185, 129, 0.15)",
            animation: "aurora 15s ease infinite",
          }}
        />
        <div
          className="absolute right-1/4 top-1/3 h-[500px] w-[500px] rounded-full blur-3xl"
          style={{
            background: "rgba(6, 182, 212, 0.10)",
            animation: "aurora 20s ease infinite 5s",
          }}
        />
        <div
          className="absolute left-1/3 bottom-1/4 h-[700px] w-[700px] rounded-full blur-3xl"
          style={{
            background: "rgba(16, 185, 129, 0.10)",
            animation: "aurora 25s ease infinite 10s",
          }}
        />
      </div>

      {/* Grid pattern — very subtle */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(161,161,170,1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(161,161,170,1) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Noise overlay */}
      <div className="noise pointer-events-none absolute inset-0" />

      {/* Radial vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, #09090B 70%)",
        }}
      />

      {/* === Content === */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 pt-24 pb-16 text-center sm:px-6 lg:px-8">
        {/* Pill badge */}
        <motion.div
          {...fadeIn(0)}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="text-sm font-medium text-emerald-400">
            India&apos;s First Career Insurance
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.1)}
          className="mx-auto max-w-4xl text-6xl font-extrabold leading-[1.05] text-zinc-50 sm:text-7xl lg:text-8xl"
          style={{
            fontFamily: "var(--font-display)",
            letterSpacing: "-0.04em",
          }}
        >
          Your Career.
          <br />
          <span className="gradient-text">Your Safety Net.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          {...fadeUp(0.2)}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl"
        >
          India&apos;s first salary protection plan. Get paid even when you lose
          your job. Cover your rent, EMIs, and essentials while you find your
          next opportunity.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.3)}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button
            size="lg"
            variant="primary"
            glow
            onClick={() => scrollTo("waitlist")}
          >
            Join the Waitlist
          </Button>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => scrollTo("calculator")}
          >
            Calculate Your Premium &rarr;
          </Button>
        </motion.div>

        {/* Trust bar */}
        <motion.div
          {...fadeIn(0.5)}
          className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
        >
          {[
            "50% Salary Coverage",
            "Up to 9 Months",
            "Free Upskilling",
          ].map((item, i) => (
            <span
              key={item}
              className="inline-flex items-center gap-2 text-sm text-zinc-500"
            >
              {i > 0 && (
                <span className="mr-6 hidden h-1 w-1 rounded-full bg-zinc-800 sm:inline-block" />
              )}
              <svg
                className="h-4 w-4 flex-shrink-0 text-emerald-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
