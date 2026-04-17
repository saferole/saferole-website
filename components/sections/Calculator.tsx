"use client";

import { useState, useMemo } from "react";
import { calculatePremium } from "@/lib/calculator";
import {
  INDUSTRY_OPTIONS,
  ROLE_OPTIONS,
  EXPERIENCE_OPTIONS,
  PLANS,
  type PlanKey,
} from "@/lib/constants";
import { formatCurrency } from "@/lib/utils";
import { SalarySlider } from "@/components/ui/SalarySlider";
import { Select } from "@/components/ui/Select";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const PLAN_KEYS: PlanKey[] = ["starter", "standard", "premium"];

function RiskBadge({ level }: { level: "low" | "medium" | "high" }) {
  const styles = {
    low: { bg: "rgba(6, 78, 59, 0.3)", color: "rgb(110, 231, 183)" },
    medium: { bg: "rgba(120, 53, 15, 0.3)", color: "rgb(252, 211, 77)" },
    high: { bg: "rgba(127, 29, 29, 0.3)", color: "rgb(252, 165, 165)" },
  };
  const s = styles[level];
  return (
    <span
      className="inline-flex items-center px-3 py-1 text-xs font-semibold uppercase tracking-wide"
      style={{
        backgroundColor: s.bg,
        color: s.color,
        borderRadius: "var(--radius-pill)",
      }}
    >
      {level} risk
    </span>
  );
}

export default function Calculator() {
  const [salary, setSalary] = useState(75000);
  const [industry, setIndustry] = useState("it-services");
  const [role, setRole] = useState("engineering");
  const [experience, setExperience] = useState("2-7");
  const [plan, setPlan] = useState<PlanKey>("standard");

  const result = useMemo(
    () =>
      calculatePremium({
        monthlySalary: salary,
        industry,
        role,
        experience,
        plan,
      }),
    [salary, industry, role, experience, plan]
  );

  return (
    <section
      id="calculator"
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
              Calculator
            </span>
          </div>
          <h2
            className="font-medium tracking-headline mt-4"
            style={{
              color: "var(--ink)",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
            }}
          >
            What would you pay?
          </h2>
        </AnimatedSection>

        {/* Two-column layout */}
        <AnimatedSection className="grid grid-cols-1 gap-8 lg:grid-cols-12 mt-12">
          {/* Inputs Side */}
          <div
            className="lg:col-span-7 p-10"
            style={{
              backgroundColor: "var(--white)",
              borderRadius: "var(--radius-card)",
              border: "1px solid var(--border)",
            }}
          >
            <div className="flex flex-col gap-6">
              {/* Salary Slider */}
              <SalarySlider
                value={salary}
                onChange={setSalary}
                min={20000}
                max={500000}
                step={5000}
                label="Monthly Salary"
              />

              {/* Dropdowns */}
              <Select
                options={[...INDUSTRY_OPTIONS]}
                value={industry}
                onChange={setIndustry}
                label="Industry"
              />

              <Select
                options={[...ROLE_OPTIONS]}
                value={role}
                onChange={setRole}
                label="Role"
              />

              <Select
                options={[...EXPERIENCE_OPTIONS]}
                value={experience}
                onChange={setExperience}
                label="Experience"
              />

              {/* Plan Toggle */}
              <div className="flex flex-col gap-1.5">
                <label
                  className="text-sm font-medium"
                  style={{ color: "var(--ink)" }}
                >
                  Plan
                </label>
                <div
                  className="flex overflow-hidden p-1"
                  style={{
                    backgroundColor: "var(--canvas)",
                    borderRadius: "var(--radius-pill)",
                  }}
                >
                  {PLAN_KEYS.map((key) => (
                    <button
                      key={key}
                      onClick={() => setPlan(key)}
                      className="flex-1 cursor-pointer px-4 py-2.5 text-sm font-medium transition-all duration-200"
                      style={{
                        backgroundColor:
                          plan === key ? "var(--ink)" : "transparent",
                        color:
                          plan === key ? "var(--canvas)" : "var(--text-muted)",
                        borderRadius: "var(--radius-pill)",
                      }}
                    >
                      {PLANS[key].name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Results Side */}
          <div
            className="lg:col-span-5 p-10"
            style={{
              backgroundColor: "var(--ink)",
              borderRadius: "var(--radius-card)",
              color: "white",
            }}
          >
            <div className="flex flex-col">
              {/* Eyebrow */}
              <div className="flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "var(--signal)" }}
                />
                <span
                  className="text-xs uppercase font-bold tracking-eyebrow"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  Your Estimate
                </span>
              </div>

              {/* Monthly Premium */}
              <p
                className="mt-3 font-medium tracking-headline text-white"
                style={{ fontSize: "2.5rem" }}
              >
                {formatCurrency(result.monthlyPremium)}
              </p>
              <p
                className="mt-1 text-sm"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                {formatCurrency(result.annualPremium)}/year
              </p>

              {/* Divider */}
              <div
                className="my-6"
                style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}
              />

              {/* Stats stacked */}
              <div className="flex flex-col gap-5">
                <div>
                  <p
                    className="text-xs uppercase font-medium tracking-eyebrow"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    Monthly Payout
                  </p>
                  <p className="text-lg font-medium mt-0.5 text-white">
                    {formatCurrency(result.monthlyPayout)}
                  </p>
                </div>

                <div>
                  <p
                    className="text-xs uppercase font-medium tracking-eyebrow"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    Coverage Duration
                  </p>
                  <p className="text-lg font-medium mt-0.5 text-white">
                    {result.coverageMonths} months
                  </p>
                </div>

                <div>
                  <p
                    className="text-xs uppercase font-medium tracking-eyebrow"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    Total Coverage
                  </p>
                  <p className="text-lg font-medium mt-0.5 text-white">
                    {formatCurrency(result.totalCoverage)}
                  </p>
                </div>

                <div>
                  <p
                    className="text-xs uppercase font-medium tracking-eyebrow mb-1"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    Risk Level
                  </p>
                  <RiskBadge level={result.riskLevel} />
                </div>
              </div>

              {/* CTA */}
              <a
                href="#waitlist"
                className="mt-6 flex items-center justify-center py-3.5 font-medium transition-all duration-200"
                style={{
                  backgroundColor: "var(--white)",
                  color: "var(--ink)",
                  borderRadius: "var(--radius-btn)",
                }}
              >
                Join Waitlist to Lock This Rate
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
