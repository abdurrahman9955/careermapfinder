import { 
  NavItem, 
  HeroMetrics, 
  InteractiveCareerPath, 
  FeatureCard, 
  HowItWorksStep, 
  PricingTier 
} from '@/types/landing';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Send Feedback', href: '#feedback' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export const HERO_METRICS: HeroMetrics[] = [
  { label: 'Careers Mapped', value: '2,500+', subtext: 'Across 50+ Global Specializations' },
  { label: 'Regions & Jurisdictions', value: '120+', subtext: 'International & Regional Frameworks' },
  { label: 'Active Learners', value: '750,000+', subtext: 'Guided Globally in 2025–2026' },
  { label: 'AI Match Accuracy', value: '98.8%', subtext: 'Validated Aptitude & Market Alignment' },
];

export const HERO_CAREER_PATHS: InteractiveCareerPath[] = [
  {
    id: 'btech-cs',
    stream: 'STEM & Computer Science',
    title: 'Computer Science & Software Engineering Pathway',
    targetRole: 'Senior Software Engineer / Solutions Architect',
    averageStartingSalary: '$85K - $145K / year',
    tier1CityLifestyle: 'High earning ceiling in major tech hubs (SF, New York, London, Singapore) with competitive bonus structures.',
    tier2CityLifestyle: 'Elevated purchasing power and strong remote-work perks in emerging regional tech hubs.',
    steps: [
      { 
        stage: 'High School / Upper Secondary', 
        title: 'Advanced Mathematics & STEM Focus', 
        detail: 'Calculus, Physics, and Computer Science Fundamentals (AP / IB / A-Levels)', 
        duration: '2 Years' 
      },
      { 
        stage: 'Admissions & Prep', 
        title: 'Standardized Exams & Portfolio', 
        detail: 'SAT / ACT / University Entrance Exams & Coding Project Showcase', 
        duration: '6–12 Months' 
      },
      { 
        stage: 'Undergraduate Degree', 
        title: 'B.S. in Computer Science or Software Engineering', 
        detail: 'Algorithms, Distributed Systems, Contributions & Internships', 
        duration: '3–4 Years' 
      },
      { 
        stage: 'Career Start', 
        title: 'Software Development Engineer (SDE-I)', 
        detail: 'Entry-level engineering role at a global product firm or high-growth startup', 
        duration: 'Career Launch' 
      },
    ],
  },
  {
    id: 'ca-pathway',
    stream: 'Business & Financial Sciences',
    title: 'Global Accounting & Financial Advisory',
    targetRole: 'Certified Public Accountant (CPA / ACCA) / Financial Controller',
    averageStartingSalary: '$70K - $115K / year',
    tier1CityLifestyle: 'Direct corporate exposure in key financial capitals (New York, London, Frankfurt, Tokyo).',
    tier2CityLifestyle: 'Exceptional work-life balance and strong independent advisory opportunities with low overhead.',
    steps: [
      { 
        stage: 'High School / Upper Secondary', 
        title: 'Commerce & Mathematics Core', 
        detail: 'Financial Literacy, Accounting Fundamentals, Microeconomics, and Statistics', 
        duration: '2 Years' 
      },
      { 
        stage: 'Undergraduate Degree', 
        title: 'B.Sc. in Accounting, Finance, or Economics', 
        detail: 'Corporate Finance, Audit Frameworks, Taxation, and Analytics', 
        duration: '3–4 Years' 
      },
      { 
        stage: 'Professional Licensing', 
        title: 'CPA / ACCA / CFA Qualification', 
        detail: 'Professional exams paired with mandatory practical audit/accounting hours', 
        duration: '1–3 Years' 
      },
      { 
        stage: 'Career Start', 
        title: 'Associate Auditor / Financial Consultant', 
        detail: 'Advisory, Risk Compliance, Big 4 Professional Services or Private Practice', 
        duration: 'Career Launch' 
      },
    ],
  },
  {
    id: 'mbbs-pathway',
    stream: 'Pre-Med & Biological Sciences',
    title: 'Medical Sciences & Clinical Specialization',
    targetRole: 'Consultant Physician / Specialist Surgeon',
    averageStartingSalary: '$65K - $110K / year',
    tier1CityLifestyle: 'Fast-paced clinical environment across top research hospitals and multi-specialty medical centers.',
    tier2CityLifestyle: 'High community prestige and rapid progression to private practice or chief clinical roles.',
    steps: [
      { 
        stage: 'High School / Upper Secondary', 
        title: 'Biological & Physical Sciences', 
        detail: 'Advanced Biology, Chemistry, Physics, and Organic Fundamentals', 
        duration: '2 Years' 
      },
      { 
        stage: 'Undergrad / Pre-Med Entry', 
        title: 'B.S. in Biomedical Science or Direct MD Entry', 
        detail: 'MCAT / UCAT / BMAT exam preparation and prerequisite clinical shadowing', 
        duration: '1–4 Years' 
      },
      { 
        stage: 'Medical School', 
        title: 'Doctor of Medicine (MD / MBBS / DO) + Clinical Rotations', 
        detail: 'Core coursework followed by hands-on hospital rotations and internships', 
        duration: '4–6 Years' 
      },
      { 
        stage: 'Career Start', 
        title: 'Medical Resident / Clinical Specialist Track', 
        detail: 'Residency (Surgery, Cardiology, Pediatrics) or General Clinical Practice', 
        duration: 'Career Launch' 
      },
    ],
  },
];

export const KEY_SERVICES: FeatureCard[] = [
  {
    id: 'ai-roadmap',
    iconName: 'Compass',
    title: 'AI Career Roadmap Generator',
    description: 'Generates structured educational & milestone trajectories from Secondary School through your first 5 years in the global workforce.',
    badge: 'AI Powered',
    highlights: ['Specialization & elective guidance', 'Standardized exam timelines', 'Skill gap & competency analyzer'],
  },
  {
    id: 'regional-engine',
    iconName: 'MapPin',
    title: 'Jurisdiction & Residency Engine',
    description: 'Navigate regional admissions quotas, localized entrance score thresholds, state/provincial funding schemes, and regional job market growth.',
    highlights: ['Residency quota breakdowns', 'Localized prep pathways', 'Regional institution benchmarks'],
  },
  {
    id: 'side-by-side',
    iconName: 'GitCompare',
    title: '360° Career & Lifestyle Comparator',
    description: 'Compare 2 to 5 career pathways side-by-side across entry compensation, 10-year growth trajectories, work-life balance, and educational ROI.',
    highlights: ['Global compensation analytics', 'Workplace lifestyle index', 'Education cost vs. yield projection'],
  },
  {
    id: 'roi-calculator',
    iconName: 'Calculator',
    title: 'Metropolitan Cost & ROI Calculator',
    description: 'Model real net disposable income considering housing costs, local taxes, student debt repayments, and remote vs. relocation setups.',
    badge: 'Popular',
    highlights: ['Student loan amortization modeler', 'Cost of living index (COLI)', 'Net purchasing power preview'],
  },
  {
    id: 'parent-portal',
    iconName: 'Users',
    title: 'Dual Student & Guardian Dashboards',
    description: 'Unified views for families providing budget modeling, academic safety margins, and verified industry security benchmarks.',
    highlights: ['Financial feasibility insights', 'Academic stress monitoring', 'Advisor-verified pathways'],
  },
  {
    id: 'exam-tracker',
    iconName: 'CalendarCheck',
    title: 'Global & Regional Admission Tracker',
    description: 'Stay ahead of critical application windows, standardized entrance testing deadlines, and institutional bursary schedules.',
    highlights: ['Omnichannel deadline alerts', 'Prerequisite checker', 'Curriculum & pattern updates'],
  },
];

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    stepNumber: '01',
    title: 'Select State, Stream & Grade',
    description: 'Tell us your current academic standing, preferred streams, and your level of eligibility/domicile.',
    details: ['Personalized milestone dashboard', 'Direct mentor booking available', 'Financial breakdown & estimation'],
  },
  {
    stepNumber: '02',
    title: ' Aptitude & Interest Profiler',
    description: 'A 10-minute scientifically validated quiz mapping your analytical, creative, and administrative inclinations.',
    details: ['No prior preparation needed', 'Bilingual options (English & Regional)', 'Identifies hidden career fits'],
  },
  {
    stepNumber: '03',
    title: 'Explore Tailored Roadmaps & ROI',
    description: 'Get clear visual paths detailing every exam, fee structure, and expected lifestyle upon graduation.',
    details: ['Compare alternative backup paths', 'Calculates education loan viability', 'Clear entry vs peak salary metrics'],
  },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'free',
    name: 'Student Basic Tier',
    priceMonthly: 0,
    priceAnnual: 0,
    description: 'Essential career exploration for students starting their discovery journey.',
    features: [
      'Access to 1 Career Explorer Report',
      'Access to 1 Exams & Assessments',
      'Access to 1 Job Preparation Tools',
      'Basic Access to Career Map Finder AI',
      'Standard Mobile & Desktop View',
    ],
    ctaText: 'Start Student Basic Free',
  },
  {
    id: 'pro-student',
    name: 'Student Plus Tier',
    popular: true,
    priceMonthly: 499,
    priceAnnual: 2994,
    description: 'Complete personalized guidance package for serious applicants and exam takers.',
    features: [
      'Access to 10 Career Explorer Reports',
      'Access to 10 Exams & Assessments',
      'Access to 10 Job Preparation Tools',
      'Basic Access to Career Map Finder AI',
      'Downloadable PDF Career Map Reports',
    ],
    ctaText: 'Unlock Student Plus Pass',
  },
  {
    id: 'parent-mentor',
    name: 'Student Pro Tier',
    priceMonthly: 999,
    priceAnnual: 5994,
    description: 'Unlimited access to advanced personalized financial planning, and college safety metrics.',
    features: [
      'Unlimited access to Career Explorer',
      'Unlimited access to All Assessments',
      'Unlimited access to Job Preparation',
      'Unlimited access to Career Finder AI',
      'Downloadable PDF Career Map Reports',
    ],
    ctaText: 'Get Student Pro Suite',
  },
];

export const FOOTER_LINKS = {
  popularStreams: [
    { name: 'Computer Science & IT', href: '#' },
    { name: 'MBBS & Allied Health', href: '#' },
    { name: 'Law & Judiciary (CLAT)', href: '#' },
  ],
  statesCovered: [
    { name: 'Home Page', href: '#' },
    { name: 'Pricing Page', href: '#pricing' },
    { name: 'Contact page', href: '#contact' },
  ],
  tools: [
    { name: 'Key Services', href: '#services' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Send Feedback', href: '#feedback' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Create New Account', href: '/auth/signup' },
  ],
};