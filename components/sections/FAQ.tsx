"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQ_ITEMS } from "@/lib/constants";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const CATEGORIES = [
  "All",
  "General",
  "Eligibility",
  "Claims",
  "Pricing",
  "Benefits",
] as const;

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? FAQ_ITEMS
      : FAQ_ITEMS.filter((item) => item.category === activeCategory);

  function toggle(i: number) {
    setOpenIndex((prev) => (prev === i ? null : i));
  }

  return (
    <section
      id="faq"
      style={{
        backgroundColor: "var(--canvas-lifted)",
        paddingTop: "96px",
        paddingBottom: "96px",
      }}
    >
      <div className="section-container max-w-2xl mx-auto">
        {/* Eyebrow + Title */}
        <AnimatedSection className="mb-8">
          <div className="flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "var(--signal)" }}
            />
            <span
              className="text-xs font-bold uppercase tracking-eyebrow"
              style={{ color: "var(--text-muted)" }}
            >
              FAQ
            </span>
          </div>
          <h2
            className="font-medium tracking-headline mt-4"
            style={{
              color: "var(--ink)",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
            }}
          >
            Common questions.
          </h2>
        </AnimatedSection>

        {/* Category filter */}
        <AnimatedSection className="mt-8 flex gap-2 flex-wrap">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setOpenIndex(null);
              }}
              className="text-sm font-medium transition-all duration-200 cursor-pointer"
              style={
                activeCategory === cat
                  ? {
                      backgroundColor: "var(--ink)",
                      color: "var(--canvas)",
                      borderRadius: "var(--radius-pill)",
                      padding: "0.5rem 1rem",
                    }
                  : {
                      backgroundColor: "var(--white)",
                      color: "var(--text-muted)",
                      border: "1px solid var(--border)",
                      borderRadius: "var(--radius-pill)",
                      padding: "0.5rem 1rem",
                    }
              }
            >
              {cat}
            </button>
          ))}
        </AnimatedSection>

        {/* Accordion */}
        <AnimatedSection className="mt-10">
          <div
            className="flex flex-col divide-y"
            style={{ borderColor: "var(--border)" }}
          >
            {filtered.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={item.question}
                  className="py-6"
                  style={{ borderColor: "var(--border)" }}
                >
                  <button
                    onClick={() => toggle(i)}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 text-left"
                  >
                    <span
                      className="text-base font-semibold"
                      style={{ color: "var(--ink)" }}
                    >
                      {item.question}
                    </span>
                    <span
                      className="text-lg shrink-0"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {isOpen ? "\u2212" : "+"}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.3,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <p
                          className="mt-4 max-w-[60ch] leading-relaxed"
                          style={{
                            color: "var(--text-muted)",
                            fontWeight: 450,
                          }}
                        >
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
