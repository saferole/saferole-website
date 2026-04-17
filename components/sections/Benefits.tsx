"use client";

import { BENEFITS } from "@/lib/constants";
import { AnimatedSection, AnimatedItem } from "@/components/ui/AnimatedSection";

const emojiMap: Record<string, string> = {
  "graduation-cap": "\uD83C\uDF93",
  handshake: "\uD83D\uDCCB",
  gift: "\uD83C\uDF81",
  rocket: "\uD83D\uDE80",
};

export default function Benefits() {
  return (
    <section className="bg-slate-50">
      <div className="section-padding">
        {/* Section Header */}
        <AnimatedSection className="mx-auto mb-16 max-w-2xl text-center sm:mb-20">
          <h2
            className="text-3xl font-bold leading-tight text-slate-800 sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            More than just insurance.
          </h2>
          <p className="mt-4 text-base text-slate-500 sm:text-lg">
            SafeRole goes beyond payouts. Get upskilling, placement support, and
            rewards for staying employed.
          </p>
        </AnimatedSection>

        {/* 2x2 Grid */}
        <AnimatedSection
          stagger
          className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2"
        >
          {BENEFITS.map((benefit) => (
            <AnimatedItem key={benefit.title}>
              <div className="flex h-full flex-col gap-4 bg-white rounded-3xl border border-slate-100 shadow-sm p-8 hover:shadow-md hover:border-blue-200 hover:-translate-y-1 transition-all duration-300">
                {/* Emoji */}
                <span className="text-4xl">
                  {emojiMap[benefit.icon] || "\uD83D\uDCE6"}
                </span>

                {/* Title */}
                <h3
                  className="text-xl font-semibold text-slate-800"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-slate-500 sm:text-base">
                  {benefit.description}
                </p>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
