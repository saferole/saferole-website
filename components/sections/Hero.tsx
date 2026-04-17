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
    <section className="relative min-h-[80vh] flex items-center justify-center bg-white">
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-4 pt-24 pb-16 text-center sm:px-6 lg:px-8">
        {/* Pill badge */}
        <motion.div
          {...fadeIn(0)}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5"
        >
          <span className="text-sm font-medium text-blue-700">
            India&apos;s First Career Insurance
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.1)}
          className="mx-auto max-w-3xl text-5xl font-bold leading-[1.1] text-slate-900 tracking-tight sm:text-6xl lg:text-7xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Forget everything you know about job security.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          {...fadeUp(0.2)}
          className="mx-auto mt-6 max-w-xl text-xl leading-relaxed text-slate-500"
        >
          SafeRole protects your salary when your employer can&apos;t. From &#8377;1,500/month.
        </motion.p>

        {/* Single CTA */}
        <motion.div
          {...fadeUp(0.3)}
          className="mt-10 flex flex-col items-center gap-4"
        >
          <Button
            size="lg"
            variant="primary"
            onClick={() => scrollTo("calculator")}
          >
            Check Your Price
          </Button>
          <span className="text-sm text-slate-400">
            Takes less than 60 seconds
          </span>
        </motion.div>

        {/* Trust highlights */}
        <motion.div
          {...fadeIn(0.5)}
          className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
        >
          {[
            "50% Salary Coverage",
            "Up to 9 Months",
            "Free Upskilling",
          ].map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-2 text-sm text-slate-400"
            >
              <svg
                className="h-4 w-4 flex-shrink-0 text-blue-600"
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
