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
    <section style={{ backgroundColor: "var(--canvas)", paddingTop: "128px", paddingBottom: "96px" }}>
      <div className="section-container grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left column — text */}
        <div className="lg:col-span-7">
          {/* Eyebrow */}
          <motion.div {...fadeUp(0)} className="flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "var(--signal)" }}
            />
            <span
              className="text-xs font-bold uppercase tracking-eyebrow"
              style={{ color: "var(--text-muted)" }}
            >
              Career Insurance
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            {...fadeUp(0.08)}
            className="font-medium tracking-headline mt-6"
            style={{
              color: "var(--ink)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              lineHeight: 1.0,
              maxWidth: "16ch",
            }}
          >
            Forget everything you know about job security.
          </motion.h1>

          {/* Body */}
          <motion.p
            {...fadeUp(0.16)}
            className="text-base mt-8"
            style={{
              color: "var(--ink)",
              fontWeight: 450,
              lineHeight: 1.4,
              maxWidth: "50ch",
            }}
          >
            SafeRole protects your salary when your employer can&apos;t. Cover
            rent, EMIs, and essentials &mdash; from &#8377;1,500/month.
          </motion.p>

          {/* CTA row */}
          <motion.div {...fadeUp(0.24)} className="mt-10 flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo("calculator")}
              className="px-7 py-3 text-base font-medium tracking-headline transition-all duration-200 cursor-pointer"
              style={{
                backgroundColor: "var(--ink)",
                color: "var(--canvas)",
                borderRadius: "var(--radius-btn)",
                border: "1.5px solid var(--ink)",
              }}
            >
              Check Your Price
            </button>
            <button
              onClick={() => scrollTo("how-it-works")}
              className="px-7 py-3 text-base font-medium tracking-headline transition-all duration-200 cursor-pointer"
              style={{
                backgroundColor: "var(--white)",
                color: "var(--ink)",
                border: "1.5px solid var(--ink)",
                borderRadius: "var(--radius-btn)",
              }}
            >
              Learn More
            </button>
          </motion.div>

          {/* Trust line */}
          <motion.p
            {...fadeUp(0.32)}
            className="mt-12 text-sm"
            style={{ color: "var(--text-muted)" }}
          >
            50% salary &middot; Up to 9 months &middot; Free upskilling
          </motion.p>
        </div>

        {/* Right column — decorative stadium shape */}
        <div className="hidden lg:flex lg:col-span-5 items-center justify-center">
          <div
            className="relative flex items-center justify-center"
            style={{
              width: "100%",
              aspectRatio: "4 / 5",
              backgroundColor: "var(--canvas-lifted)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-card)",
            }}
          >
            {/* Shield SVG */}
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-[120px] h-[120px]"
              style={{ color: "var(--signal)", opacity: 0.15 }}
            >
              <path
                fillRule="evenodd"
                d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                clipRule="evenodd"
              />
            </svg>

            {/* Satellite CTA button */}
            <div
              className="absolute -bottom-3 -right-3 flex items-center justify-center"
              style={{
                width: 56,
                height: 56,
                backgroundColor: "var(--white)",
                borderRadius: "9999px",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ color: "var(--ink)" }}
              >
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
