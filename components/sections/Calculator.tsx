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
import Button from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const PLAN_KEYS: PlanKey[] = ["starter", "standard", "premium"];

function RiskBadge({ level }: { level: "low" | "medium" | "high" }) {
  const styles = {
    low: "bg-emerald-50 text-emerald-700",
    medium: "bg-amber-50 text-amber-700",
    high: "bg-red-50 text-red-700",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wide ${styles[level]}`}
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
    <section id="calculator" className="bg-gray-50">
      <div className="section-padding">
        {/* Section Header */}
        <AnimatedSection className="mx-auto mb-16 max-w-2xl text-center sm:mb-20">
          <h2
            className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl"
            style={{
              fontFamily: "var(--font-display)",
              letterSpacing: "-0.025em",
            }}
          >
            Premium{" "}
            <span className="text-emerald-500">Calculator</span>
          </h2>
          <p className="mt-4 text-base text-gray-500 sm:text-lg">
            Get your personalized premium estimate in seconds. Adjust any
            parameter and see results update instantly.
          </p>
        </AnimatedSection>

        {/* Two-column layout */}
        <AnimatedSection className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Inputs Side — 3 cols */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8 lg:col-span-3">
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
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-500">
                  Plan
                </label>
                <div className="flex gap-1 rounded-full bg-gray-100 p-1">
                  {PLAN_KEYS.map((key) => (
                    <button
                      key={key}
                      onClick={() => setPlan(key)}
                      className={`flex-1 cursor-pointer rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
                        plan === key
                          ? "bg-emerald-500 text-white shadow-sm"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      {PLANS[key].name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Results Side — 2 cols */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 sm:p-8 lg:col-span-2">
            <div className="flex flex-col gap-6">
              {/* Risk Level */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-500">
                  Risk Assessment
                </span>
                <RiskBadge level={result.riskLevel} />
              </div>

              {/* Divider */}
              <div className="h-px w-full bg-emerald-200" />

              {/* Monthly Premium - Hero number */}
              <div className="text-center">
                <p className="text-sm font-medium text-gray-500">
                  Monthly Premium
                </p>
                <p
                  className="mt-1 text-3xl font-bold text-emerald-600"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {formatCurrency(result.monthlyPremium)}
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  {formatCurrency(result.annualPremium)}/year
                </p>
              </div>

              {/* Divider */}
              <div className="h-px w-full bg-emerald-200" />

              {/* Coverage Details Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-white p-4">
                  <p className="text-xs font-medium text-gray-500">
                    Monthly Payout
                  </p>
                  <p
                    className="mt-1 text-xl font-bold text-gray-900 sm:text-2xl"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {formatCurrency(result.monthlyPayout)}
                  </p>
                </div>
                <div className="rounded-xl bg-white p-4">
                  <p className="text-xs font-medium text-gray-500">
                    Coverage Duration
                  </p>
                  <p
                    className="mt-1 text-xl font-bold text-gray-900 sm:text-2xl"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {result.coverageMonths} months
                  </p>
                </div>
              </div>

              {/* Total Coverage */}
              <div className="rounded-xl bg-white p-4 text-center">
                <p className="text-xs font-medium text-gray-500">
                  Total Coverage Value
                </p>
                <p
                  className="mt-1 text-3xl font-bold text-gray-900 sm:text-4xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {formatCurrency(result.totalCoverage)}
                </p>
              </div>

              {/* CTA */}
              <a href="#waitlist" className="block">
                <Button variant="primary" size="lg" className="w-full">
                  Join Waitlist to Lock This Rate
                </Button>
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
