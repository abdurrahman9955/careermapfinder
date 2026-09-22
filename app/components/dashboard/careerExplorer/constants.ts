import { EducationLevel, AcademicStream, CareerPriority } from './types';

export const EDUCATION_LEVELS: { id: EducationLevel; label: string; description: string; badge: string }[] = [
  {
    id: 'high_school',
    label: 'High School / Secondary',
    description: 'Grades 9–12 (SS1–SS3). Planning for university entrance and career choice.',
    badge: 'University Path',
  },
  {
    id: 'undergraduate',
    label: 'Undergraduate Student',
    description: 'Currently pursuing a diploma or degree in college/university.',
    badge: 'Specialization',
  },
  {
    id: 'recent_graduate',
    label: 'Recent Graduate',
    description: 'Graduated recently. Looking for optimal entry paths and early growth.',
    badge: 'Job Market focus',
  },
  {
    id: 'career_switcher',
    label: 'Career Switcher / Adult',
    description: 'Transitioning from another domain into a new, higher-value industry.',
    badge: 'Reskilling focus',
  },
];

export const ACADEMIC_STREAMS: { id: AcademicStream; label: string; icon: string }[] = [
  { id: 'sciences', label: 'Physical & Natural Sciences', icon: 'Atom' },
  { id: 'engineering_tech', label: 'Engineering & Technology', icon: 'Cpu' },
  { id: 'health_medical', label: 'Health & Medical Sciences', icon: 'Stethoscope' },
  { id: 'commercial_business', label: 'Commercial & Business', icon: 'TrendingUp' },
  { id: 'arts_humanities', label: 'Arts, Law & Humanities', icon: 'Palette' },
  { id: 'undecided', label: 'Undecided / Open to Guidance', icon: 'HelpCircle' },
];

export const CAREER_PRIORITIES: { id: CareerPriority; label: string; description: string }[] = [
  { id: 'high_salary', label: 'High Earning Potential', description: 'Top percentile lifetime compensation and wealth generation' },
  { id: 'work_life_balance', label: 'Work-Life Balance', description: 'Flexible hours, reasonable workloads, low burnout risk' },
  { id: 'global_mobility', label: 'Global Mobility & Visas', description: 'Ease of securing remote jobs or international work permits' },
  { id: 'social_impact', label: 'Social Impact & Purpose', description: 'Making a difference in community, environment, or health' },
  { id: 'job_security', label: 'High Demand & Stability', description: 'Resilient to recession and AI replacement automation' },
  { id: 'creative_freedom', label: 'Creative Autonomy', description: 'Freedom to innovate, design, build, or research independently' },
];

export const POPULAR_CAREER_DOMAINS = [
  'Artificial Intelligence & ML',
  'Software Engineering & Cloud Architecture',
  'Medicine & Surgical Specialties',
  'Biotechnology & Genetics',
  'Investment Banking & Quantitative Finance',
  'Cybersecurity & Defense',
  'Corporate Law & Intellectual Property',
  'Renewable Energy Engineering',
  'Data Science & Business Analytics',
  'Product Design & UX Leadership',
];