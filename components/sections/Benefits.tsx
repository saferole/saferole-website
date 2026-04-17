"use client";

import { BENEFITS } from "@/lib/constants";
import { AnimatedSection, AnimatedItem } from "@/components/ui/AnimatedSection";

const categoryLabels: Record<string, string> = {
  "graduation-cap": "Learning",
  handshake: "Placement",
  gift: "Rewards",
  rocket: "Freedom",
};

export default function Benefits() {
  return (
    <section
      id="benefits"
      style={{
        backgroundColor: "var(--color-bg-alt)",
        paddingTop: "var(--space-4xl)",
        paddingBottom: "var(--space-4xl)",
      }}
    >
      <div className="section-container">
        {/* Title — left-aligned */}
        <AnimatedSection className="mb-16">
          <h2
            className="font-bold"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-text)",
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
            }}
          >
            More than insurance.
          </h2>
        </AnimatedSection>

        {/* Staggered two-column layout */}
        <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
          {BENEFITS.map((benefit, i) => (
            <AnimatedItem
              key={benefit.title}
              className={`${i % 2 === 1 ? "md:col-start-2" : "md:col-start-1"}`}
            >
              <div className="py-8 max-w-md">
                {/* Small label */}
                <p
                  className="text-xs uppercase font-semibold"
                  style={{
                    color: "var(--color-accent)",
                    letterSpacing: "0.1em",
                  }}
                >
                  {categoryLabels[benefit.icon] || "Benefit"}
                </p>

                {/* Title */}
                <h3
                  className="text-xl mt-2"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--color-text)",
                  }}
                >
                  {benefit.title}
                </h3>

                {/* Description */}
                <p
                  className="mt-3 leading-relaxed"
                  style={{ color: "var(--color-text-secondary)" }}
                >
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
