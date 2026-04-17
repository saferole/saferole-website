"use client";

import { AnimatedSection, AnimatedItem } from "@/components/ui/AnimatedSection";

const steps = [
  {
    number: "01",
    title: "Choose Your Plan",
    description:
      "Pick coverage that fits your salary and risk profile. Three plans from 2% to 6% of your monthly salary.",
  },
  {
    number: "02",
    title: "Pay Monthly Premium",
    description:
      "Small monthly payment based on your risk profile. You're protected from day one after the lock-in period.",
  },
  {
    number: "03",
    title: "Get Protected",
    description:
      "If laid off, receive 50% of your salary for 3-9 months. Plus free upskilling, certifications, and placement assistance.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      style={{
        backgroundColor: "var(--color-bg)",
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
            How SafeRole works
          </h2>
        </AnimatedSection>

        {/* Vertical numbered list */}
        <AnimatedSection stagger className="max-w-2xl">
          {steps.map((step, i) => (
            <AnimatedItem key={step.number}>
              <div
                className="flex items-start gap-6 py-8"
                style={{
                  borderBottom: i < steps.length - 1 ? "1px solid var(--color-border)" : "none",
                }}
              >
                {/* Step number */}
                <span
                  className="text-[3.5rem] font-bold leading-none shrink-0 w-16"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--color-accent)",
                    opacity: 0.3,
                  }}
                >
                  {step.number}
                </span>

                {/* Content */}
                <div>
                  <h3
                    className="text-xl font-semibold"
                    style={{ color: "var(--color-text)" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="mt-2 max-w-[55ch] leading-relaxed"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
