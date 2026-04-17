"use client";

import { AnimatedSection, AnimatedItem } from "@/components/ui/AnimatedSection";

const steps = [
  {
    number: 1,
    title: "Choose Your Plan",
    description:
      "Pick coverage that fits your salary and risk profile. Three plans from 2% to 6% of your monthly salary.",
  },
  {
    number: 2,
    title: "Pay Monthly Premium",
    description:
      "Small monthly payment based on your risk profile. You're protected from day one after the lock-in period.",
  },
  {
    number: 3,
    title: "Get Protected",
    description:
      "If laid off, receive 50% of your salary for 3-9 months. Plus free upskilling, certifications, and placement assistance.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white">
      <div className="section-padding">
        {/* Section Header */}
        <AnimatedSection className="mx-auto mb-16 max-w-2xl text-center sm:mb-20">
          <h2
            className="text-3xl font-bold leading-tight text-slate-800 sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            How SafeRole Works
          </h2>
          <p className="mt-4 text-base text-slate-500 sm:text-lg">
            Three simple steps to protect your income.
          </p>
        </AnimatedSection>

        {/* Steps */}
        <AnimatedSection stagger className="relative mx-auto max-w-4xl">
          {/* Horizontal dashed connector (desktop) */}
          <div className="pointer-events-none absolute top-8 left-[16.66%] hidden h-px w-[66.66%] md:block border-t-2 border-dashed border-slate-200" />

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
            {steps.map((step) => (
              <AnimatedItem key={step.number}>
                <div className="flex flex-col items-center text-center">
                  {/* Circled number */}
                  <div
                    className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-blue-600 text-2xl font-bold"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {step.number}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-slate-900">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-relaxed text-slate-500 sm:text-base">
                    {step.description}
                  </p>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
