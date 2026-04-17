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
        backgroundColor: "var(--canvas-lifted)",
        paddingTop: "128px",
        paddingBottom: "128px",
      }}
    >
      <div className="section-container">
        {/* Eyebrow + Title */}
        <AnimatedSection className="mb-12">
          <div className="flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "var(--signal)" }}
            />
            <span
              className="text-xs font-bold uppercase tracking-eyebrow"
              style={{ color: "var(--text-muted)" }}
            >
              How It Works
            </span>
          </div>
          <h2
            className="font-medium tracking-headline mt-4"
            style={{
              color: "var(--ink)",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
            }}
          >
            Three steps to protect your income.
          </h2>
        </AnimatedSection>

        {/* Stadium cards stacked vertically */}
        <AnimatedSection stagger className="max-w-2xl flex flex-col gap-8">
          {steps.map((step, i) => (
            <AnimatedItem key={step.number}>
              {/* Card */}
              <div
                className="relative flex items-start gap-8 p-10"
                style={{
                  backgroundColor: "var(--white)",
                  borderRadius: "var(--radius-card)",
                  border: "1px solid var(--border)",
                }}
              >
                {/* Step number watermark */}
                <span
                  className="shrink-0 font-medium tracking-headline"
                  style={{
                    fontSize: "3rem",
                    color: "var(--text-dust)",
                    lineHeight: 1,
                  }}
                >
                  {step.number}
                </span>

                {/* Content */}
                <div>
                  <h3
                    className="text-xl font-semibold"
                    style={{ color: "var(--ink)" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-base mt-2"
                    style={{
                      color: "var(--text-muted)",
                      fontWeight: 450,
                      maxWidth: "45ch",
                    }}
                  >
                    {step.description}
                  </p>
                </div>

                {/* Satellite CTA */}
                <div
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 flex items-center justify-center"
                  style={{
                    width: 48,
                    height: 48,
                    backgroundColor: "var(--white)",
                    borderRadius: "9999px",
                    boxShadow: "var(--shadow-sm)",
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ color: "var(--ink)" }}
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Dotted connector line between cards */}
              {i < steps.length - 1 && (
                <div
                  className="mx-auto h-8 w-px"
                  style={{
                    borderLeft: "2px dotted var(--signal)",
                    opacity: 0.2,
                  }}
                />
              )}
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
