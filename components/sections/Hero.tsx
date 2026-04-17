"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

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

/* Floating geometric shapes for depth */
const shapes = [
  { w: 120, h: 120, top: "12%", left: "8%", rotate: 15, border: "white" },
  { w: 80, h: 80, top: "22%", right: "10%", rotate: -20, border: "gold" },
  { w: 200, h: 60, bottom: "18%", left: "5%", rotate: 8, border: "gold" },
  { w: 60, h: 160, bottom: "25%", right: "7%", rotate: -12, border: "white" },
  { w: 100, h: 100, top: "55%", left: "15%", rotate: 45, border: "white" },
  { w: 140, h: 50, top: "8%", right: "25%", rotate: -6, border: "gold" },
];

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient">
      {/* Grid pattern */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Radial gold glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(212,168,83,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Noise overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* Floating geometric shapes */}
      {shapes.map((s, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute"
          style={{
            width: s.w,
            height: s.h,
            top: s.top,
            left: s.left,
            right: s.right,
            bottom: s.bottom,
            border: `1px solid ${s.border === "gold" ? "rgba(212,168,83,0.10)" : "rgba(255,255,255,0.08)"}`,
            borderRadius: 4,
            transform: `rotate(${s.rotate}deg)`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.4 + i * 0.12, ease }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 pt-20 pb-16 text-center sm:px-6 lg:px-8">
        {/* Badge */}
        <motion.div {...fadeIn(0)} className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-500 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-500" />
          </span>
          <span className="text-sm font-medium text-white/80">
            India&apos;s First Career Insurance
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.1)}
          className="mx-auto max-w-4xl text-5xl font-bold leading-[1.08] text-white sm:text-6xl lg:text-7xl"
          style={{
            fontFamily: "var(--font-outfit)",
            letterSpacing: "-0.03em",
          }}
        >
          Your Career.
          <br />
          <span className="bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 bg-clip-text text-transparent">
            Your Safety Net.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          {...fadeUp(0.2)}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60 sm:text-xl"
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
          <Button
            size="lg"
            variant="secondary"
            onClick={() => scrollTo("calculator")}
          >
            Calculate Your Premium &rarr;
          </Button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          {...fadeIn(0.6)}
          className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
        >
          {[
            "50% Salary Coverage",
            "Up to 9 Months",
            "Free Upskilling",
          ].map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-2 text-sm text-white/50"
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
