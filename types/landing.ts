export type StreamType = 'Science (PCM)' | 'Science (PCB)' | 'Commerce' | 'Arts & Humanities' | 'Vocational';

export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export interface HeroMetrics {
  label: string;
  value: string;
  subtext: string;
}

export interface CareerPathStep {
  stage: string;
  title: string;
  detail: string;
  duration: string;
}

export interface InteractiveCareerPath {
  id: string;
  stream: StreamType;
  title: string;
  targetRole: string;
  averageStartingSalary: string;
  tier1CityLifestyle: string;
  tier2CityLifestyle: string;
  steps: CareerPathStep[];
}

export interface StateDiscoveryItem {
  id: string;
  stateName: string;
  code: string;
  isUnionTerritory: boolean;
  topEntranceExams: string[];
  keyColleges: string[];
  emergingHubs: string[];
  stateQuotaInsight: string;
  avgTuitionFeeRange: string;
}


export interface FeatureCard {
  id: string;
  iconName: string;
  title: string;
  description: string;
  badge?: string;
  highlights: string[];
}

export interface HowItWorksStep {
  stepNumber: string;
  title: string;
  description: string;
  details: string[];
}

export interface AudiencePersona {
  id: 'students-school' | 'students-ug' | 'parents' | 'counsellors';
  roleTitle: string;
  tagline: string;
  painPoints: string[];
  keySolutions: string[];
  ctaText: string;
}

export interface CareerComparisonData {
  id: string;
  careerName: string;
  stream: StreamType;
  avgPreparationTime: string;
  topExams: string[];
  avgTuitionCost: string;
  startingSalaryTier1: string;
  startingSalaryTier2: string;
  workLifeBalanceScore: number; // 1 to 10
  growthRate: string;
  lifestyleTier1: string;
}

export interface PricingTier {
  id: string;
  name: string;
  popular?: boolean;
  priceMonthly: number;
  priceAnnual: number;
  description: string;
  features: string[];
  ctaText: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  role: 'Student' | 'Parent' | 'School Administrator' | 'Counsellor';
  state: string;
  message: string;
}