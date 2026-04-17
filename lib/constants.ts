export const INDUSTRY_OPTIONS = [
  { value: 'it-services', label: 'IT Services (TCS, Infosys, Wipro...)' },
  { value: 'it-startup', label: 'IT Startup / Product Company' },
  { value: 'edtech', label: 'Edtech' },
  { value: 'bfsi', label: 'BFSI (Banking, Finance, Insurance)' },
  { value: 'manufacturing', label: 'Manufacturing' },
  { value: 'healthcare', label: 'Healthcare / Pharma' },
  { value: 'other', label: 'Other' },
] as const;

export const ROLE_OPTIONS = [
  { value: 'engineering', label: 'Engineering / Development' },
  { value: 'devops-sre', label: 'DevOps / SRE / Security' },
  { value: 'product', label: 'Product Management' },
  { value: 'qa-testing', label: 'QA / Testing' },
  { value: 'sales-marketing', label: 'Sales / Marketing' },
  { value: 'hr-recruitment', label: 'HR / Recruitment' },
  { value: 'other', label: 'Other' },
] as const;

export const EXPERIENCE_OPTIONS = [
  { value: '0-2', label: '0–2 years' },
  { value: '2-7', label: '2–7 years' },
  { value: '7-15', label: '7–15 years' },
  { value: '15+', label: '15+ years' },
] as const;

export const INDUSTRY_RISK: Record<string, number> = {
  'edtech': 2.5,
  'it-startup': 2.0,
  'it-services': 1.2,
  'bfsi': 1.0,
  'manufacturing': 0.8,
  'healthcare': 0.7,
  'other': 1.0,
};

export const ROLE_RISK: Record<string, number> = {
  'hr-recruitment': 2.0,
  'sales-marketing': 1.8,
  'qa-testing': 1.5,
  'product': 1.3,
  'engineering': 1.0,
  'devops-sre': 0.8,
  'other': 1.0,
};

export const EXPERIENCE_RISK: Record<string, number> = {
  '0-2': 1.3,
  '2-7': 0.9,
  '7-15': 1.1,
  '15+': 1.4,
};

export const PLANS = {
  starter: {
    name: 'Starter',
    rate: 0.02,
    months: 3,
    payoutPercent: 0.5,
    upskilling: 'Limited access',
    placement: '—',
    noClaim: '—',
  },
  standard: {
    name: 'Standard',
    rate: 0.03,
    months: 6,
    payoutPercent: 0.5,
    upskilling: 'Full access to courses & coaching',
    placement: 'Basic placement assistance',
    noClaim: 'After 3 years',
    popular: true,
  },
  premium: {
    name: 'Premium',
    rate: 0.06,
    months: 9,
    payoutPercent: 0.5,
    upskilling: 'Full access + certification funding',
    placement: 'Priority placement with top partners',
    noClaim: 'After 2 years',
  },
} as const;

export type PlanKey = keyof typeof PLANS;

export const STATS = [
  { value: 264000, suffix: '+', label: 'Tech layoffs globally in 2023' },
  { value: 0, suffix: '', label: "Government safety nets for India's private sector", displayValue: 'Zero' },
  { value: 5.4, suffix: 'M', label: 'Tech workers with no income protection' },
] as const;

export const FAQ_ITEMS = [
  {
    category: 'General',
    question: 'What is SafeRole?',
    answer: "SafeRole is India's first salary protection plan. We provide financial coverage if you lose your job due to layoffs or valid termination — not voluntary resignation. Think of it as health insurance, but for your career.",
  },
  {
    category: 'General',
    question: 'How is this different from a regular savings account?',
    answer: 'A savings account depletes. SafeRole provides structured monthly payouts at 50% of your salary for 3–9 months, plus upskilling, certifications, and placement assistance to get you hired faster. Your premium also buys access to our hiring partner network.',
  },
  {
    category: 'Eligibility',
    question: 'Who is eligible?',
    answer: 'Any salaried professional in India with 1+ year of work experience at an MNC or established company. You must complete a 6-month lock-in period before you can file a claim.',
  },
  {
    category: 'Eligibility',
    question: 'What if I resign voluntarily?',
    answer: 'Voluntary resignation is not covered. SafeRole only activates when you are laid off or validly terminated by your employer. This keeps premiums affordable for everyone.',
  },
  {
    category: 'Claims',
    question: 'When do payouts start?',
    answer: "Payouts begin after your employer's severance package ends (if any). If there's no severance, payouts start immediately after claim verification — typically within 7 working days.",
  },
  {
    category: 'Claims',
    question: 'How long do payouts last?',
    answer: 'Depends on your plan: Starter (3 months), Standard (6 months), Premium (9 months). Payouts stop when you get a new job or when your coverage period ends — whichever comes first.',
  },
  {
    category: 'Pricing',
    question: 'How is my premium calculated?',
    answer: 'Your premium is based on your monthly salary, industry risk level, job role, and years of experience. Higher-risk profiles (e.g., edtech, sales roles) pay slightly more. Use our calculator to get your exact estimate.',
  },
  {
    category: 'Benefits',
    question: 'What upskilling do I get?',
    answer: 'Standard and Premium plans include free access to courses on Coursera, Udemy, and specialized platforms. Premium plans additionally fund one industry certification (AWS, CKA, NVIDIA GenAI, etc.) — certifications that actually help you get hired.',
  },
  {
    category: 'Benefits',
    question: 'What if I never file a claim?',
    answer: 'Great news — you get rewarded. After 2–5 years without a claim, you unlock free upskilling access, placement assistance for job switches, brand vouchers, and premium discounts.',
  },
  {
    category: 'Benefits',
    question: 'What is the Career Break add-on?',
    answer: "After 5 years of premiums with no/limited claims, you can opt for a Career Break add-on. This provides financial support for starting a business, pursuing higher studies, or taking a personal sabbatical. Payments stop if you resume employment.",
  },
] as const;

export const BENEFITS = [
  {
    icon: 'graduation-cap',
    title: 'Upskilling Support',
    description: 'Free access to Coursera, Udemy, and career coaching. Premium plans fund industry certifications — AWS, NVIDIA GenAI, Kubernetes, and more.',
  },
  {
    icon: 'handshake',
    title: 'Hiring Partnerships',
    description: 'Direct placement assistance through Careernet, Cutshort, Preplaced, and 15+ hiring partners. Priority access for Premium plan holders.',
  },
  {
    icon: 'gift',
    title: 'No-Claim Rewards',
    description: 'Never filed a claim? Get rewarded with brand vouchers, premium discounts, free upskilling, and placement assistance for your next job switch.',
  },
  {
    icon: 'rocket',
    title: 'Career Break Add-on',
    description: 'After 5 years, unlock support for starting a business, higher studies, or a world tour. Your career, your terms.',
  },
] as const;
