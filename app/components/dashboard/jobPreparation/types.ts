export type ExperienceLevel = 
  | 'student_intern' 
  | 'recent_graduate' 
  | 'entry_level' 
  | 'mid_level' 
  | 'senior_lead' 
  | 'executive';

export type WorkArrangement = 'remote_global' | 'hybrid' | 'onsite' | 'relocation';

export type InterviewFocus = 
  | 'technical_coding' 
  | 'system_design' 
  | 'behavioral_star' 
  | 'case_study' 
  | 'hr_screening' 
  | 'culture_fit'
  | 'domain_knowledge';

export type AiInterviewerPersona = 'supportive_coach' | 'strict_technical_lead' | 'hr_recruiter' | 'faang_style';

export interface JobPrepFormData {
  // Step 1: Role & Target Market
  targetRole: string;
  industryDomain: string;
  experienceLevel: ExperienceLevel;
  targetCountries: string[]; // ISO codes or 'global'
  workArrangement: WorkArrangement;

  // Step 2: Background & Skills (Dynamic based on level)
  educationDegree: string;
  fieldOfStudy: string;
  universitySchool: string;
  yearsOfExperience: number;
  currentPreviousTitle: string;
  keySkills: string[];
  projectsOrHighlights: string;
  resumeSummary: string;

  // Step 3: Interview Focus & AI Customization
  primaryFocus: InterviewFocus[];
  targetCompanyType: string; // e.g. FAANG, Early Startup, Enterprise
  aiPersona: AiInterviewerPersona;
  interviewDurationMinutes: number;
  includeCodingEnvironment: boolean;
  notesOrSpecificJobUrl: string;
}