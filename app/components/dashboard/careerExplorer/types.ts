export type EducationLevel = 
  | 'high_school'       // Secondary / High School (Grades 9-12 / SS1-SS3)
  | 'undergraduate'     // Currently in College / University
  | 'recent_graduate'   // Graduated within 0-2 years
  | 'career_switcher';  // Working professional transitioning careers

export type AcademicStream = 
  | 'sciences'
  | 'commercial_business'
  | 'arts_humanities'
  | 'engineering_tech'
  | 'health_medical'
  | 'undecided';

export type CareerPriority = 
  | 'high_salary'
  | 'work_life_balance'
  | 'global_mobility'
  | 'social_impact'
  | 'job_security'
  | 'creative_freedom';

export interface CareerExplorerFormData {
  // Step 1: User Profile & Target Aspirations
  educationLevel: EducationLevel;
  academicStream: AcademicStream;
  targetRoleOrDomain: string; // e.g. "AI Engineer", "Neurosurgeon", "Investment Banker"
  homeCountry: string;
  homeStateOrCity: string;
  targetCountries: string[]; // Preferred locations to study or work

  // Step 2: Educational Context & Level-Specific Details
  currentGradeOrYear: string; // e.g. "Grade 11 / SS2" or "3rd Year B.Sc"
  currentSchoolOrUniversity: string;
  majorOrSubjects: string[];
  gpaOrGradeEstimate: string;
  preferredDegreeType: string; // e.g., Bachelor's, Master's, Vocational, Self-Taught

  // Step 3: Aptitudes, Interests & Lifestyle Goals
  keyInterestsAndHobbies: string[];
  coreStrengths: string[];
  primaryCareerPriority: CareerPriority;
  targetWorkEnvironment: 'remote' | 'office' | 'hybrid' | 'field_outdoor' | 'flexible';
  desiredWorkHours: 'standard' | 'flexible' | 'high_intensity';

  // Step 4: AI Personalization & Context
  personalBioAndBackground: string;
  careerInspirationsOrQuestions: string; // Specific doubts (e.g. "Is medicine worth 8 years of study?")
}