import { describe, it, expect } from 'vitest';
import { calculatePremium } from './calculator';

describe('calculatePremium', () => {
  it('calculates standard plan for mid-level engineer at IT services', () => {
    const result = calculatePremium({
      monthlySalary: 100000,
      industry: 'it-services',
      role: 'engineering',
      experience: '2-7',
      plan: 'standard',
    });
    expect(result.monthlyPremium).toBe(3240);
    expect(result.monthlyPayout).toBe(50000);
    expect(result.coverageMonths).toBe(6);
    expect(result.totalCoverage).toBe(300000);
    expect(result.riskLevel).toBe('medium');
    expect(result.annualPremium).toBe(38880);
  });

  it('calculates high risk for edtech HR role', () => {
    const result = calculatePremium({
      monthlySalary: 80000,
      industry: 'edtech',
      role: 'hr-recruitment',
      experience: '15+',
      plan: 'premium',
    });
    expect(result.riskScore).toBe(3.0);
    expect(result.riskLevel).toBe('high');
    expect(result.monthlyPremium).toBe(14400);
  });

  it('clamps low risk to minimum 0.5', () => {
    const result = calculatePremium({
      monthlySalary: 50000,
      industry: 'healthcare',
      role: 'devops-sre',
      experience: '2-7',
      plan: 'starter',
    });
    expect(result.riskScore).toBeCloseTo(0.504, 2);
    expect(result.riskLevel).toBe('low');
  });

  it('handles unknown industry/role gracefully with defaults', () => {
    const result = calculatePremium({
      monthlySalary: 100000,
      industry: 'unknown',
      role: 'unknown',
      experience: '2-7',
      plan: 'standard',
    });
    expect(result.riskScore).toBe(0.9);
  });

  it('calculates starter plan correctly', () => {
    const result = calculatePremium({
      monthlySalary: 50000,
      industry: 'bfsi',
      role: 'engineering',
      experience: '2-7',
      plan: 'starter',
    });
    expect(result.monthlyPremium).toBe(900);
    expect(result.coverageMonths).toBe(3);
    expect(result.monthlyPayout).toBe(25000);
    expect(result.totalCoverage).toBe(75000);
  });
});
