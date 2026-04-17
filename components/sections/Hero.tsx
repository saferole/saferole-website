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
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0F172A]">
      {/* === Background gradient blobs === */}
      <div className="pointer-events-none absolute inset-0">
        {/* Emerald blob — top right */}
        <div
          className="absolute -top-32 -right-32 h-[600px] w-[600px] rounded-full blur-3xl"
          style={{ background: "rgba(16, 185, 129, 0.15)" }}
        />
        {/* Blue blob — bottom left */}
        <div
          className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full blur-3xl"
          style={{ background: "rgba(59, 130, 246, 0.10)" }}
        />
      </div>

      {/* === Content === */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 pt-24 pb-16 text-center sm:px-6 lg:px-8">
        {/* Pill badge */}
        <motion.div
          {...fadeIn(0)}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="text-sm font-medium text-white/80">
            India&apos;s First Career Insurance
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.1)}
          className="mx-auto max-w-4xl text-5xl font-extrabold leading-[1.05] text-white sm:text-6xl lg:text-7xl"
          style={{
            fontFamily: "var(--font-display)",
            letterSpacing: "-0.02em",
          }}
        >
          Your Career.
          <br />
          <span className="text-emerald-400">Your Safety Net.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          {...fadeUp(0.2)}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl"
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
            onClick={() => scrollTo("waitlist")}
          >
            Join the Waitlist
          </Button>
          <button
            onClick={() => scrollTo("calculator")}
            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white border border-white/20 rounded-full hover:bg-white/10 transition-all duration-200"
          >
            Calculate Your Premium &rarr;
          </button>
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
          ].map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-2 text-sm text-gray-400"
            >
              <svg
                className="h-4 w-4 flex-shrink-0 text-emerald-400"
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
