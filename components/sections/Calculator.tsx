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
    low: "bg-emerald-500/10 text-emerald-400",
    medium: "bg-amber-500/10 text-amber-400",
    high: "bg-red-500/10 text-red-400",
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
    <section id="calculator" className="relative bg-zinc-900/50">
      <div className="section-padding">
        {/* Section Header */}
        <AnimatedSection className="mx-auto mb-16 max-w-2xl text-center sm:mb-20">
          <h2
            className="text-3xl font-bold leading-tight text-zinc-50 sm:text-4xl lg:text-5xl"
            style={{
              fontFamily: "var(--font-display)",
              letterSpacing: "-0.025em",
            }}
          >
            Premium{" "}
            <span className="gradient-text">Calculator</span>
          </h2>
          <p className="mt-4 text-base text-zinc-400 sm:text-lg">
            Get your personalized premium estimate in seconds. Adjust any
            parameter and see results update instantly.
          </p>
        </AnimatedSection>

        {/* Two-column asymmetric layout */}
        <AnimatedSection className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Inputs Side — 3 cols */}
          <div className="gradient-border p-8 lg:col-span-3">
            <div className="relative z-[2] flex flex-col gap-6">
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
                <label className="text-sm font-medium text-zinc-500">
                  Plan
                </label>
                <div className="flex gap-1 rounded-xl bg-zinc-800 p-1">
                  {PLAN_KEYS.map((key) => (
                    <button
                      key={key}
                      onClick={() => setPlan(key)}
                      className={`flex-1 cursor-pointer rounded-lg px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
                        plan === key
                          ? "bg-emerald-500 text-zinc-950 shadow-sm"
                          : "text-zinc-400 hover:text-zinc-200"
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
          <div className="rounded-2xl border border-emerald-500/20 bg-zinc-900 p-6 shadow-[0_0_40px_rgba(16,185,129,0.06)] sm:p-8 lg:col-span-2">
            <div className="flex flex-col gap-6">
              {/* Risk Level */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-zinc-500">
                  Risk Assessment
                </span>
                <RiskBadge level={result.riskLevel} />
              </div>

              {/* Divider */}
              <div className="h-px w-full bg-zinc-800" />

              {/* Monthly Premium - Hero number */}
              <div className="text-center">
                <p className="text-sm font-medium text-zinc-500">
                  Monthly Premium
                </p>
                <p
                  className="mt-1 text-4xl font-extrabold text-emerald-400"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {formatCurrency(result.monthlyPremium)}
                </p>
                <p className="mt-1 text-xs text-zinc-500">
                  {formatCurrency(result.annualPremium)}/year
                </p>
              </div>

              {/* Divider */}
              <div className="h-px w-full bg-zinc-800" />

              {/* Coverage Details Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-zinc-800 p-4">
                  <p className="text-xs font-medium text-zinc-500">
                    Monthly Payout
                  </p>
                  <p
                    className="mt-1 text-xl font-bold text-zinc-100 sm:text-2xl"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {formatCurrency(result.monthlyPayout)}
                  </p>
                </div>
                <div className="rounded-xl bg-zinc-800 p-4">
                  <p className="text-xs font-medium text-zinc-500">
                    Coverage Duration
                  </p>
                  <p
                    className="mt-1 text-xl font-bold text-zinc-100 sm:text-2xl"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {result.coverageMonths} months
                  </p>
                </div>
              </div>

              {/* Total Coverage */}
              <div className="rounded-xl bg-zinc-800 p-4 text-center">
                <p className="text-xs font-medium text-zinc-500">
                  Total Coverage Value
                </p>
                <p
                  className="mt-1 text-3xl font-bold text-zinc-100 sm:text-4xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {formatCurrency(result.totalCoverage)}
                </p>
              </div>

              {/* CTA */}
              <a href="#waitlist" className="block">
                <Button variant="primary" size="lg" glow className="w-full">
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
