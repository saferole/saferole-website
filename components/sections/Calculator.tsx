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
    low: { bg: "rgb(236 253 245)", color: "rgb(21 128 61)" },
    medium: { bg: "rgb(255 251 235)", color: "rgb(161 98 7)" },
    high: { bg: "rgb(254 242 242)", color: "rgb(185 28 28)" },
  };
  const s = styles[level];
  return (
    <span
      className="inline-flex items-center rounded-md px-3 py-1 text-xs font-semibold uppercase tracking-wide"
      style={{ backgroundColor: s.bg, color: s.color }}
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
        backgroundColor: "var(--color-bg)",
        paddingTop: "var(--space-4xl)",
        paddingBottom: "var(--space-4xl)",
      }}
    >
      <div className="section-container">
        {/* Title — left-aligned */}
        <AnimatedSection className="mb-12">
          <h2
            className="font-bold"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-text)",
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
            }}
          >
            What would you pay?
          </h2>
        </AnimatedSection>

        {/* Two-column layout: 3 + 2 */}
        <AnimatedSection className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Inputs Side */}
          <div
            className="lg:col-span-3 rounded-2xl p-8"
            style={{
              backgroundColor: "var(--color-surface)",
              border: "1px solid var(--color-border)",
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
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  Plan
                </label>
                <div
                  className="flex rounded-lg overflow-hidden"
                  style={{ border: "1px solid var(--color-border)" }}
                >
                  {PLAN_KEYS.map((key) => (
                    <button
                      key={key}
                      onClick={() => setPlan(key)}
                      className="flex-1 cursor-pointer px-4 py-2.5 text-sm font-semibold transition-all duration-200"
                      style={{
                        backgroundColor: plan === key ? "var(--color-accent)" : "transparent",
                        color: plan === key ? "white" : "var(--color-text-secondary)",
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
            className="lg:col-span-2 rounded-2xl p-8"
            style={{
              backgroundColor: "var(--color-accent-light)",
              border: "1px solid var(--color-accent-border)",
            }}
          >
            <div className="flex flex-col">
              {/* Your estimate label */}
              <p
                className="text-xs uppercase font-semibold"
                style={{ color: "var(--color-text-muted)", letterSpacing: "0.1em" }}
              >
                Your estimate
              </p>

              {/* Monthly Premium */}
              <p
                className="mt-3 text-[2.5rem] font-bold"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--color-accent)",
                }}
              >
                {formatCurrency(result.monthlyPremium)}
              </p>
              <p
                className="mt-1 text-sm"
                style={{ color: "var(--color-text-muted)" }}
              >
                {formatCurrency(result.annualPremium)}/year
              </p>

              {/* Divider */}
              <div
                className="my-6"
                style={{ borderTop: "1px solid var(--color-accent-border)" }}
              />

              {/* Stats stacked */}
              <div className="flex flex-col gap-5">
                <div>
                  <p
                    className="text-xs uppercase font-medium"
                    style={{ color: "var(--color-text-muted)", letterSpacing: "0.05em" }}
                  >
                    Monthly Payout
                  </p>
                  <p
                    className="text-lg font-semibold mt-0.5"
                    style={{ color: "var(--color-text)" }}
                  >
                    {formatCurrency(result.monthlyPayout)}
                  </p>
                </div>

                <div>
                  <p
                    className="text-xs uppercase font-medium"
                    style={{ color: "var(--color-text-muted)", letterSpacing: "0.05em" }}
                  >
                    Coverage Duration
                  </p>
                  <p
                    className="text-lg font-semibold mt-0.5"
                    style={{ color: "var(--color-text)" }}
                  >
                    {result.coverageMonths} months
                  </p>
                </div>

                <div>
                  <p
                    className="text-xs uppercase font-medium"
                    style={{ color: "var(--color-text-muted)", letterSpacing: "0.05em" }}
                  >
                    Total Coverage
                  </p>
                  <p
                    className="text-lg font-semibold mt-0.5"
                    style={{ color: "var(--color-text)" }}
                  >
                    {formatCurrency(result.totalCoverage)}
                  </p>
                </div>

                <div>
                  <p
                    className="text-xs uppercase font-medium mb-1"
                    style={{ color: "var(--color-text-muted)", letterSpacing: "0.05em" }}
                  >
                    Risk Level
                  </p>
                  <RiskBadge level={result.riskLevel} />
                </div>
              </div>

              {/* CTA */}
              <a
                href="#waitlist"
                className="mt-6 flex items-center justify-center py-3 rounded-lg text-sm font-semibold text-white transition-all duration-200"
                style={{ backgroundColor: "var(--color-accent)" }}
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
