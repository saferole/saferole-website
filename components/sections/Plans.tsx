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
        backgroundColor: "var(--color-bg-alt)",
        paddingTop: "var(--space-4xl)",
        paddingBottom: "var(--space-4xl)",
      }}
    >
      <div className="section-container">
        {/* Section Header */}
        <AnimatedSection className="mx-auto mb-16 max-w-2xl text-center">
          <h2
            className="font-bold"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-text)",
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
            }}
          >
            Simple, transparent pricing.
          </h2>
          <p
            className="mt-3"
            style={{ color: "var(--color-text-muted)" }}
          >
            No hidden fees. Cancel anytime.
          </p>
        </AnimatedSection>

        {/* Pricing Cards Grid */}
        <AnimatedSection
          stagger
          className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-6 lg:grid-cols-3 lg:gap-0"
        >
          {(Object.entries(PLANS) as [PlanKey, (typeof PLANS)[PlanKey]][]).map(
            ([key, plan]) => {
              const isPopular = "popular" in plan && plan.popular;

              return (
                <AnimatedItem key={key} className={isPopular ? "lg:-my-4" : ""}>
                  <div
                    className="rounded-2xl"
                    style={{
                      backgroundColor: "var(--color-surface)",
                      border: isPopular
                        ? "2px solid var(--color-accent)"
                        : "1px solid var(--color-border)",
                      padding: isPopular ? "2.5rem" : "2rem",
                    }}
                  >
                    {/* Most popular label */}
                    {isPopular && (
                      <p
                        className="text-xs uppercase font-semibold mb-6"
                        style={{
                          color: "var(--color-accent)",
                          letterSpacing: "0.1em",
                        }}
                      >
                        Most popular
                      </p>
                    )}

                    {/* Plan Name */}
                    <h3
                      className="text-lg font-bold"
                      style={{
                        fontFamily: "var(--font-display)",
                        color: "var(--color-text)",
                      }}
                    >
                      {plan.name}
                    </h3>

                    {/* Rate */}
                    <p className="mt-4">
                      <span
                        className="text-[2.5rem] font-bold"
                        style={{
                          fontFamily: "var(--font-display)",
                          color: isPopular ? "var(--color-accent)" : "var(--color-text)",
                        }}
                      >
                        {Math.round(plan.rate * 100)}%
                      </span>
                      <span
                        className="text-base ml-1"
                        style={{ color: "var(--color-text-muted)" }}
                      >
                        of salary
                      </span>
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
                                style={{ color: "var(--color-accent)" }}
                              >
                                &#10003;
                              </span>
                            ) : (
                              <span
                                className="text-sm"
                                style={{ color: "var(--color-text-muted)" }}
                              >
                                &mdash;
                              </span>
                            )}
                            <span
                              className="text-sm"
                              style={{
                                color: included
                                  ? "var(--color-text-secondary)"
                                  : "var(--color-text-muted)",
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
                      className="mt-8 w-full py-3 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer"
                      style={
                        isPopular
                          ? {
                              backgroundColor: "var(--color-accent)",
                              color: "white",
                            }
                          : {
                              backgroundColor: "transparent",
                              border: "1px solid var(--color-border-strong)",
                              color: "var(--color-text)",
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
