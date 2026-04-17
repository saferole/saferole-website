"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease },
  };
}

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section style={{ backgroundColor: "var(--color-bg)" }}>
      <div
        className="section-container grid grid-cols-1 lg:grid-cols-12 items-center gap-12"
        style={{
          paddingTop: "var(--space-4xl)",
          paddingBottom: "var(--space-3xl)",
        }}
      >
        {/* Left column — text */}
        <div className="lg:col-span-7">
          {/* Small label */}
          <motion.p
            {...fadeUp(0)}
            className="text-xs font-semibold uppercase mb-6"
            style={{
              color: "var(--color-text-muted)",
              letterSpacing: "0.15em",
            }}
          >
            Career Insurance
          </motion.p>

          {/* H1 */}
          <motion.h1
            {...fadeUp(0.08)}
            className="font-bold leading-[1.15] max-w-[18ch]"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-text)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
            }}
          >
            Forget everything you know about job security.
          </motion.h1>

          {/* Body */}
          <motion.p
            {...fadeUp(0.16)}
            className="text-lg max-w-[55ch] mt-6 leading-relaxed"
            style={{ color: "var(--color-text-secondary)" }}
          >
            SafeRole protects your salary when your employer can&apos;t. Cover
            rent, EMIs, and essentials from &#8377;1,500/month.
          </motion.p>

          {/* CTA row */}
          <motion.div
            {...fadeUp(0.24)}
            className="mt-10 flex flex-wrap gap-4"
          >
            <button
              onClick={() => scrollTo("calculator")}
              className="px-7 py-3.5 text-base font-semibold text-white rounded-lg transition-all duration-200 cursor-pointer"
              style={{ backgroundColor: "var(--color-accent)" }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "var(--color-accent-hover)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "var(--color-accent)"; }}
            >
              Check Your Price
            </button>
            <button
              onClick={() => scrollTo("how-it-works")}
              className="px-7 py-3.5 text-base font-semibold rounded-lg transition-all duration-200 cursor-pointer"
              style={{
                border: "2px solid var(--color-border-strong)",
                color: "var(--color-text)",
                backgroundColor: "transparent",
              }}
            >
              Learn More
            </button>
          </motion.div>

          {/* Trust line */}
          <motion.p
            {...fadeUp(0.32)}
            className="mt-10 text-sm"
            style={{ color: "var(--color-text-muted)" }}
          >
            50% salary coverage &middot; Up to 9 months &middot; Free upskilling
          </motion.p>
        </div>

        {/* Right column — decorative */}
        <div className="hidden lg:flex lg:col-span-5 items-center justify-center">
          <div
            className="relative flex items-center justify-center"
            style={{
              width: 300,
              height: 400,
              backgroundColor: "var(--color-accent-light)",
              border: "1px solid var(--color-accent-border)",
              borderRadius: "1.5rem",
            }}
          >
            {/* Shield SVG */}
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-32 h-32"
              style={{ color: "var(--color-accent)", opacity: 0.4 }}
            >
              <path
                fillRule="evenodd"
                d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
