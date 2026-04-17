"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQ_ITEMS } from "@/lib/constants";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const CATEGORIES = ["All", "General", "Eligibility", "Claims", "Pricing", "Benefits"] as const;

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
        backgroundColor: "var(--color-bg)",
        paddingTop: "var(--space-4xl)",
        paddingBottom: "var(--space-4xl)",
      }}
    >
      <div className="section-container max-w-2xl">
        {/* Title — left-aligned */}
        <AnimatedSection className="mb-8">
          <h2
            className="font-bold"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-text)",
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
            }}
          >
            Common questions
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
              className="text-sm rounded-md px-3 py-1.5 transition-all duration-200 cursor-pointer"
              style={
                activeCategory === cat
                  ? {
                      backgroundColor: "var(--color-text)",
                      color: "white",
                    }
                  : {
                      backgroundColor: "var(--color-bg-alt)",
                      color: "var(--color-text-secondary)",
                      border: "1px solid var(--color-border)",
                    }
              }
              onMouseEnter={(e) => {
                if (activeCategory !== cat) {
                  e.currentTarget.style.borderColor = "var(--color-border-strong)";
                }
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== cat) {
                  e.currentTarget.style.borderColor = "var(--color-border)";
                }
              }}
            >
              {cat}
            </button>
          ))}
        </AnimatedSection>

        {/* Accordion */}
        <AnimatedSection className="mt-8">
          <div
            className="flex flex-col"
            style={{ borderTop: "1px solid var(--color-border)" }}
          >
            {filtered.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={item.question}
                  className="py-5"
                  style={{ borderBottom: "1px solid var(--color-border)" }}
                >
                  <button
                    onClick={() => toggle(i)}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 text-left"
                  >
                    <span
                      className="text-base font-semibold"
                      style={{ color: "var(--color-text)" }}
                    >
                      {item.question}
                    </span>
                    <span
                      className="text-lg shrink-0"
                      style={{ color: "var(--color-text-muted)" }}
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
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p
                          className="mt-3 text-[0.9375rem] leading-relaxed max-w-[65ch]"
                          style={{ color: "var(--color-text-secondary)" }}
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
