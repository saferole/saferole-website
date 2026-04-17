"use client";

import { AnimatedSection, AnimatedItem } from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import GlassCard from "@/components/ui/GlassCard";
import { PLANS, type PlanKey } from "@/lib/constants";

const featureLabels = [
  { key: "months", label: "Payout duration" },
  { key: "upskilling", label: "Upskilling access" },
  { key: "placement", label: "Placement assistance" },
  { key: "noClaim", label: "No-claim rewards" },
] as const;

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-5 w-5 shrink-0 text-blue-600"
    >
      <path
        fillRule="evenodd"
        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function DashIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-5 w-5 shrink-0 text-slate-300"
    >
      <path
        fillRule="evenodd"
        d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function getFeatureValue(plan: (typeof PLANS)[PlanKey], key: string): string {
  switch (key) {
    case "months":
      return `${plan.months} months at 50% salary`;
    case "upskilling":
      return plan.upskilling;
    case "placement":
      return plan.placement;
    case "noClaim":
      return plan.noClaim;
    default:
      return "";
  }
}

function isIncluded(value: string): boolean {
  return value !== "\u2014" && value !== "";
}

function scrollToCalculator() {
  const el = document.getElementById("calculator");
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

export default function Plans() {
  return (
    <section id="plans" className="bg-slate-50">
      <div className="section-padding">
        {/* Section Header */}
        <AnimatedSection className="mx-auto mb-16 max-w-2xl text-center sm:mb-20">
          <h2
            className="text-3xl font-bold leading-tight text-slate-800 sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Simple, transparent pricing.
          </h2>
          <p className="mt-4 text-base text-slate-500 sm:text-lg">
            No hidden fees. Cancel anytime.
          </p>
        </AnimatedSection>

        {/* Pricing Cards Grid */}
        <AnimatedSection
          stagger
          className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-8 lg:grid-cols-3"
        >
          {(Object.entries(PLANS) as [PlanKey, (typeof PLANS)[PlanKey]][]).map(
            ([key, plan]) => {
              const isPopular = "popular" in plan && plan.popular;

              const cardContent = (
                <div className="flex flex-col items-center text-center">
                  {/* Plan Name */}
                  <h3
                    className="text-2xl font-bold text-slate-800"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {plan.name}
                  </h3>

                  {/* Rate */}
                  <p className="mt-4">
                    <span
                      className={`text-5xl font-bold ${
                        isPopular ? "text-blue-600" : "text-slate-900"
                      }`}
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {Math.round(plan.rate * 100)}%
                    </span>
                    <span className="ml-1 text-sm text-slate-500">
                      of salary
                    </span>
                  </p>

                  {/* Monthly Payout */}
                  <p className="mt-2 text-sm text-slate-500">
                    50% salary for {plan.months} months
                  </p>

                  {/* Divider */}
                  <div className="my-6 h-px w-full bg-slate-100" />

                  {/* Feature List */}
                  <ul className="w-full space-y-4 text-left">
                    {featureLabels.map((feature) => {
                      const value = getFeatureValue(plan, feature.key);
                      const included = isIncluded(value);
                      return (
                        <li
                          key={feature.key}
                          className="flex items-start gap-3"
                        >
                          {included ? <CheckIcon /> : <DashIcon />}
                          <div>
                            <span
                              className={`text-sm ${
                                included
                                  ? "text-slate-600"
                                  : "text-slate-400"
                              }`}
                            >
                              {feature.label}
                            </span>
                            {included && (
                              <p className="mt-0.5 text-xs text-slate-500">
                                {value}
                              </p>
                            )}
                          </div>
                        </li>
                      );
                    })}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    variant={isPopular ? "primary" : "secondary"}
                    className="mt-8 w-full"
                    onClick={scrollToCalculator}
                  >
                    Calculate My Premium
                  </Button>
                </div>
              );

              if (isPopular) {
                return (
                  <AnimatedItem key={key} className="lg:-my-4">
                    <GlassCard highlight hover>
                      {cardContent}
                    </GlassCard>
                  </AnimatedItem>
                );
              }

              return (
                <AnimatedItem key={key}>
                  <GlassCard hover>
                    {cardContent}
                  </GlassCard>
                </AnimatedItem>
              );
            }
          )}
        </AnimatedSection>
      </div>
    </section>
  );
}
