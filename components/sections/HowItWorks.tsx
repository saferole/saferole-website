"use client";

import { AnimatedSection, AnimatedItem } from "@/components/ui/AnimatedSection";

const steps = [
  {
    number: "01",
    title: "Choose Your Plan",
    description:
      "Pick coverage that fits your salary and risk profile. Three plans from 2% to 6% of your monthly salary.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-7 w-7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Pay Monthly Premium",
    description:
      "Small monthly payment based on your risk profile. That's it — you're protected from day one after the lock-in period.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-7 w-7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Get Protected",
    description:
      "If laid off, receive 50% of your salary for 3\u20139 months. Plus free upskilling, certifications, and placement assistance.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-7 w-7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
        />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative">
      <div className="section-padding">
        {/* Section Header */}
        <AnimatedSection className="mx-auto mb-16 max-w-2xl text-center sm:mb-20">
          <h2
            className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl"
            style={{
              fontFamily: "var(--font-display)",
              letterSpacing: "-0.025em",
            }}
          >
            <span className="text-white">How It </span>
            <span className="text-gold-400">Works</span>
          </h2>
          <p className="mt-4 text-base text-slate-400 sm:text-lg">
            Three simple steps to protect your income.
          </p>
        </AnimatedSection>

        {/* Steps Grid */}
        <AnimatedSection stagger className="relative grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-0">
          {/* Connector lines (desktop only) */}
          <div
            className="pointer-events-none absolute top-1/2 left-[33.33%] hidden h-px w-[33.33%] -translate-y-1/2 md:block"
            style={{
              background:
                "linear-gradient(to right, rgba(255,255,255,0.1), transparent)",
            }}
          />
          <div
            className="pointer-events-none absolute top-1/2 left-[66.66%] hidden h-px w-[33.33%] -translate-y-1/2 md:block"
            style={{
              background:
                "linear-gradient(to left, rgba(255,255,255,0.1), transparent)",
            }}
          />

          {steps.map((step) => (
            <AnimatedItem key={step.number} className="px-4 md:px-6">
              <div className="glass-card-hover flex flex-col items-start gap-5 rounded-2xl p-7 sm:p-8">
                {/* Step Number */}
                <span
                  className="font-mono text-xs tracking-widest text-gold-500/60"
                  style={{ fontVariantNumeric: "tabular-nums" }}
                >
                  {step.number}
                </span>

                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-500/10 text-gold-400">
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white sm:text-xl">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
                  {step.description}
                </p>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
