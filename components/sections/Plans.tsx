"use client";

import { AnimatedSection, AnimatedItem } from "@/components/ui/AnimatedSection";
import { PLANS, type PlanKey } from "@/lib/constants";

const featureLabels = [
  { key: "months", label: "Payout duration" },
  { key: "upskilling", label: "Upskilling access" },
  { key: "placement", label: "Placement assistance" },
  { key: "noClaim", label: "No-claim rewards" },
] as const;

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
    <section
      id="plans"
      style={{
        backgroundColor: "var(--canvas)",
        paddingTop: "128px",
        paddingBottom: "128px",
      }}
    >
      <div className="section-container">
        {/* Section Header */}
        <AnimatedSection className="mb-16">
          <div className="flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "var(--signal)" }}
            />
            <span
              className="text-xs font-bold uppercase tracking-eyebrow"
              style={{ color: "var(--text-muted)" }}
            >
              Pricing
            </span>
          </div>
          <h2
            className="font-medium tracking-headline mt-4"
            style={{
              color: "var(--ink)",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
            }}
          >
            Simple, transparent pricing.
          </h2>
          <p className="mt-2" style={{ color: "var(--text-muted)" }}>
            No hidden fees. Cancel anytime.
          </p>
        </AnimatedSection>

        {/* Pricing Cards Grid */}
        <AnimatedSection
          stagger
          className="mt-16 grid max-w-5xl grid-cols-1 items-center gap-6 lg:grid-cols-3"
        >
          {(Object.entries(PLANS) as [PlanKey, (typeof PLANS)[PlanKey]][]).map(
            ([key, plan]) => {
              const isPopular = "popular" in plan && plan.popular;

              return (
                <AnimatedItem key={key} className={isPopular ? "lg:-my-6" : ""}>
                  <div
                    className="overflow-hidden"
                    style={{
                      backgroundColor: "var(--white)",
                      borderRadius: "var(--radius-card)",
                      border: isPopular
                        ? "2px solid var(--ink)"
                        : "1px solid var(--border)",
                      padding: isPopular ? "3rem 2.5rem" : "2.5rem",
                    }}
                  >
                    {/* Most popular eyebrow */}
                    {isPopular && (
                      <div className="flex items-center gap-2 mb-6">
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: "var(--signal)" }}
                        />
                        <span
                          className="text-xs font-bold uppercase tracking-eyebrow"
                          style={{ color: "var(--text-muted)" }}
                        >
                          Most Popular
                        </span>
                      </div>
                    )}

                    {/* Plan Name */}
                    <h3
                      className="text-lg font-semibold"
                      style={{ color: "var(--ink)" }}
                    >
                      {plan.name}
                    </h3>

                    {/* Rate */}
                    <p className="mt-4">
                      <span
                        className="font-medium tracking-headline"
                        style={{
                          fontSize: "2.5rem",
                          color: isPopular ? "var(--signal)" : "var(--ink)",
                        }}
                      >
                        {Math.round(plan.rate * 100)}%
                      </span>
                      <span
                        className="text-base ml-1"
                        style={{ color: "var(--text-muted)" }}
                      >
                        of salary
                      </span>
                    </p>

                    {/* Payout info */}
                    <p className="text-sm mt-2" style={{ color: "var(--text-muted)" }}>
                      {plan.months} months payout at 50% salary
                    </p>

                    {/* Features */}
                    <ul className="mt-8 space-y-4">
                      {featureLabels.map((feature) => {
                        const value = getFeatureValue(plan, feature.key);
                        const included = isIncluded(value);
                        return (
                          <li
                            key={feature.key}
                            className="flex items-center gap-3"
                          >
                            {included ? (
                              <span
                                className="font-bold text-sm"
                                style={{ color: "var(--signal)" }}
                              >
                                &#10003;
                              </span>
                            ) : (
                              <span
                                className="text-sm"
                                style={{ color: "var(--text-dust)" }}
                              >
                                &mdash;
                              </span>
                            )}
                            <span
                              className="text-sm"
                              style={{
                                color: included
                                  ? "var(--ink)"
                                  : "var(--text-dust)",
                              }}
                            >
                              {included ? value : feature.label}
                            </span>
                          </li>
                        );
                      })}
                    </ul>

                    {/* CTA Button */}
                    <button
                      onClick={scrollToCalculator}
                      className="mt-8 w-full py-3.5 font-medium tracking-headline transition-all duration-200 cursor-pointer"
                      style={
                        isPopular
                          ? {
                              backgroundColor: "var(--ink)",
                              color: "var(--canvas)",
                              borderRadius: "var(--radius-btn)",
                            }
                          : {
                              backgroundColor: "var(--white)",
                              border: "1.5px solid var(--ink)",
                              color: "var(--ink)",
                              borderRadius: "var(--radius-btn)",
                            }
                      }
                    >
                      Calculate My Premium
                    </button>
                  </div>
                </AnimatedItem>
              );
            }
          )}
        </AnimatedSection>
      </div>
    </section>
  );
}
