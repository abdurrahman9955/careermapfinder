export type ExamCategory = 'academic' | 'professional';

export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced' | 'adaptive';

export interface CountryOption {
  id: string;
  name: string;
  flag: string;
}

export interface ProfessionalDomain {
  id: string;
  label: string;
  icon: string;
  examples: string[];
}

export interface ExamFormPayload {
  category: ExamCategory;
  location: {
    country: string;
    state: string;
  };
  examDetails: {
    examName: string;
    stream?: string;
    subjects?: string[];
    domain?: string;
    certBody?: string;
  };
  config: {
    purpose: string;
    targetScore: string;
    difficultyLevel: DifficultyLevel;
    additionalNotes: string;
  };
}