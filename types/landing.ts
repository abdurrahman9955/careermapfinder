export type StreamType = 'Science (PCM)' | 'Science (PCB)' | 'Commerce' | 'Arts & Humanities' 
| 'Vocational' | 'STEM & Computer Science' | 'Business & Financial Sciences' | 'Pre-Med & Biological Sciences';

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