export type AcademicJourneyStage =
  | 'HIGH_SCHOOL'
  | 'UNDERGRADUATE'
  | 'RECENT_GRADUATE'
  | 'CAREER_SWITCHER';

export type AcademicStream =
  | 'PHYSICAL_NATURAL_SCIENCES'
  | 'ENGINEERING_TECHNOLOGY'
  | 'HEALTH_MEDICAL_SCIENCES'
  | 'COMMERCIAL_BUSINESS'
  | 'ARTS_LAW_HUMANITIES'
  | 'UNDECIDED_OPEN';

export type PrimaryCareerPriority =
  | 'HIGH_EARNING_POTENTIAL'
  | 'WORK_LIFE_BALANCE'
  | 'GLOBAL_MOBILITY_VISAS'
  | 'SOCIAL_IMPACT_PURPOSE'
  | 'HIGH_DEMAND_STABILITY'
  | 'CREATIVE_AUTONOMY';

export type PreferredWorkEnvironment =
  | 'REMOTE'
  | 'HYBRID'
  | 'ON_SITE'
  | 'FLEXIBLE';

export type WorkIntensityPreference =
  | 'STANDARD_40H'
  | 'MODERATE_50H'
  | 'HIGH_INTENSITY_60H_PLUS';

export type QualificationTarget =
  | 'DIPLOMA'
  | 'BACHELORS'
  | 'MASTERS'
  | 'DOCTORATE_PHD'
  | 'PROFESSIONAL_CERTIFICATION'
  | 'FELLOWSHIP_SPECIALIZATION';

// User Questionnaire Form Intake Shape
export interface CareerExplorerFormInput {
  journeyStage: AcademicJourneyStage;
  targetRoleOrField: string;
  academicStream: AcademicStream;
  homeCountry: string;
  stateCity: string;
  targetStudyCountry: string;
  
  // Student or Switcher Academic Baseline
  currentGradeLevel?: string;
  currentSchoolName?: string;
  keySubjectsMajor: string;
  estimatedGpaPerformance: string;
  preferredQualification: QualificationTarget;

  // Preferences & Priorities
  primaryPriority: PrimaryCareerPriority;
  preferredWorkEnv: PreferredWorkEnvironment;
  workIntensity: WorkIntensityPreference;

  // Qualitative Inputs
  personalBackground: string;
  specificQuestions?: string;
}

// Structural Data Types for JSON Salary Maps
export interface SalaryByExperiencePoint {
  stage: 'Entry-Level (0-2 yrs)' | 'Mid-Career (3-6 yrs)' | 'Senior (7-10 yrs)' | 'Principal / Executive (10+ yrs)';
  range: string;
}

export interface SalaryBySpecializationPoint {
  specialization: string;
  avgSalary: string;
}

export interface SalaryAbroadComparisonPoint {
  country: string;
  avgSalary: string;
  visaEase: 'Very High' | 'High' | 'Moderate' | 'Challenging' | 'Restricted';
}

// Complete 10-Page Generated Report Object
export interface ComprehensiveCareerReport {
  id: string;
  intakeId: string;
  
  // Page 1: Identity & Role Blueprint
  careerName: string;
  careerOverview: string;
  whatProfessionalDoes: string;
  whyChooseThisCareer: string;
  whoIsSuitableFor: string;
  requiredSkills: string[];
  importantSubjects: string[];
  workEnvironmentDesc: string;
  typicalDayLife: string;

  // Page 2: Education & Academic Eligibility
  class10Requirements: string;
  class11_12Stream: string;
  subjectsRequired: string[];
  minQualification: QualificationTarget;
  ageLimit?: string;
  nationalityEligibility?: string;
  medicalRequirements?: string;
  courseOptions: string[];
  courseDuration: string;
  degreeRequired: string;

  // Page 3: Entrance Examinations & Strategy
  entranceExams: string[];
  nationalExams: string[];
  stateExams: string[];
  universityExams: string[];
  examEligibility: string;
  examPattern: string;
  examSubjects: string[];
  numberOfQuestions?: number;
  markingScheme?: string;
  examFrequency?: string;
  applicationProcess: string;
  applicationFees?: string;
  importantDates?: string;
  prepStrategy: string;
  recommendedBooks: string[];
  prepTimeline: string;

  // Page 4: Admissions & College Guidance
  admissionProcess: string;
  counsellingProcess: string;
  quotaReservations?: string;
  topGovtColleges: string[];
  topPrivateColleges: string[];
  collegeSelectionGuide: string;
  expectedCutoffs?: string;
  feeStructure: string;
  availableScholarships: string[];

  // Page 5: Step-by-Step Career Journey
  stepByStepRoadmap: string;
  internshipRequirements: string;
  licensingRegistration?: string;
  entryLevelRoles: string[];
  midLevelRoles: string[];
  seniorLevelRoles: string[];
  specializations: string[];
  superSpecializations: string[];
  higherEducationPaths: string[];
  alternativeCareerPaths: string[];

  // Page 6: Employment Sectors & Hiring Markets
  govtJobOpportunities: string;
  privateJobOpportunities: string;
  selfEmploymentOptions: string;
  hiringIndustries: string[];
  topGlobalEmployers: string[];
  primeWorkLocations: string[];
  homeVsAbroadOverview: string;
  freelanceOpportunities?: string;

  // Page 7: Financial Trajectory & Compensation
  startingSalaryRange: string;
  averageSalary: string;
  experiencedSalary: string;
  highestPotentialEarnings: string;
  govtSalaryScale?: string;
  privateSectorSalary: string;
  selfEmploymentEarnings?: string;
  salaryByExperience: SalaryByExperiencePoint[];
  salaryBySpecialization: SalaryBySpecializationPoint[];
  keySalaryFactors: string[];

  // Page 8: Global Mobility & Practice Abroad
  topCountriesAbroad: string[];
  requiredExamsAbroad: string[];
  licensingAbroad: string;
  educationEquivalency: string;
  salaryAbroadComparison: SalaryAbroadComparisonPoint[];
  immigrationRelocationPath: string;

  // Page 9: Career Reality & Work-Life Balance
  advantages: string[];
  disadvantages: string[];
  keyChallenges: string[];
  workLifeBalanceRating: number; // 1 to 10
  typicalWorkingHours: string;
  stressLevel: string;
  jobSecurityRating: number; // 1 to 10
  competitionLevel: string;
  careerGrowthVelocity: string;

  // Page 10: Future Readiness & AI Resilience
  futureDemandOutlook: string;
  aiAutomationImpact: string;
  aiReplacementRiskLevel: string;
  emergingOpportunities: string[];
  emergingSpecializations: string[];

  createdAt: string;
  updatedAt: string;
}