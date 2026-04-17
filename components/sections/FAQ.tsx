"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQ_ITEMS } from "@/lib/constants";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { cn } from "@/lib/utils";

const CATEGORIES = ["All", "General", "Eligibility", "Claims", "Pricing", "Benefits"] as const;

function PlusMinusIcon({ open }: { open: boolean }) {
  return (
    <motion.div
      className="flex h-6 w-6 items-center justify-center text-slate-400"
      animate={{ rotate: open ? 45 : 0 }}
      transition={{ duration: 0.2 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="h-5 w-5"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    </motion.div>
  );
}

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
    <section id="faq" className="bg-white">
      <div className="section-padding">
        {/* Section Header */}
        <AnimatedSection className="mx-auto mb-16 max-w-2xl text-center sm:mb-20">
          <h2
            className="text-3xl font-bold leading-tight text-slate-800 sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Got questions?
          </h2>
          <p className="mt-4 text-base text-slate-500 sm:text-lg">
            Everything you need to know about SafeRole.
          </p>
        </AnimatedSection>

        {/* Category Tabs */}
        <AnimatedSection className="mx-auto mb-10 flex max-w-3xl flex-wrap justify-center gap-2">
          <div className="flex flex-wrap justify-center gap-2 rounded-full bg-slate-100 p-1">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setOpenIndex(null);
                }}
                className={cn(
                  "cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
                  activeCategory === cat
                    ? "bg-slate-900 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Accordion */}
        <AnimatedSection className="mx-auto max-w-3xl">
          <div className="flex flex-col">
            {filtered.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={item.question}
                  className={cn(
                    "border-b border-slate-100 transition-colors duration-200",
                    isOpen && "bg-slate-50 rounded-2xl border-l-4 border-l-blue-500 my-2"
                  )}
                >
                  <button
                    onClick={() => toggle(i)}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-sm font-semibold text-slate-800 sm:text-base">
                      {item.question}
                    </span>
                    <PlusMinusIcon open={isOpen} />
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
                        <div className="px-6 pb-5">
                          <p className="text-sm leading-relaxed text-slate-500">
                            {item.answer}
                          </p>
                        </div>
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
