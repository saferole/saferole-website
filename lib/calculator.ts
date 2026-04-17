import { INDUSTRY_RISK, ROLE_RISK, EXPERIENCE_RISK, PLANS, type PlanKey } from './constants';

export interface CalculatorInput {
  monthlySalary: number;
  industry: string;
  role: string;
  experience: string;
  plan: PlanKey;
}

export interface CalculatorResult {
  monthlyPremium: number;
  monthlyPayout: number;
  coverageMonths: number;
  totalCoverage: number;
  riskScore: number;
  riskLevel: 'low' | 'medium' | 'high';
  annualPremium: number;
}

export function calculatePremium(input: CalculatorInput): CalculatorResult {
  const plan = PLANS[input.plan];
  const basePremium = input.monthlySalary * plan.rate;

  const rawRisk =
    (INDUSTRY_RISK[input.industry] ?? 1.0) *
    (ROLE_RISK[input.role] ?? 1.0) *
    (EXPERIENCE_RISK[input.experience] ?? 1.0);

  const riskScore = Math.max(0.5, Math.min(3.0, rawRisk));

  const monthlyPremium = Math.round(basePremium * riskScore);
  const monthlyPayout = Math.round(input.monthlySalary * plan.payoutPercent);
  const totalCoverage = monthlyPayout * plan.months;

  const riskLevel: CalculatorResult['riskLevel'] =
    riskScore < 1.0 ? 'low' : riskScore < 1.8 ? 'medium' : 'high';

  return {
    monthlyPremium,
    monthlyPayout,
    coverageMonths: plan.months,
    totalCoverage,
    riskScore,
    riskLevel,
    annualPremium: monthlyPremium * 12,
  };
}
