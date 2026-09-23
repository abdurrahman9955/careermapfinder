export type ExamCategory = 'ACADEMIC' | 'PROFESSIONAL';

export type ExamFormat = 
  | 'OBJECTIVE_ONLY'
  | 'THEORY_ONLY'
  | 'HYBRID'
  | 'PRACTICAL_CODING';

export type QuestionType = 
  | 'MULTIPLE_CHOICE'
  | 'MULTIPLE_SELECT'
  | 'SHORT_INPUT'
  | 'ESSAY_LONG_TEXT'
  | 'CODE_EXECUTION';

export type QuestionVisualType = 
  | 'TEXT'
  | 'MARKDOWN'
  | 'CODE'
  | 'TABLE'
  | 'IMAGE';

export type DifficultyLevel = 
  | 'FOUNDATIONAL'
  | 'STANDARD'
  | 'HIGH_DISTINCTION';

export interface QuestionOption {
  label: 'A' | 'B' | 'C' | 'D' | 'E' | string;
  text: string;
}

export interface QuestionRubric {
  keyPoints: string[];
  sampleAnswer?: string;
  scoringCriteria?: Record<string, string>;
}

export interface ExamQuestion {
  id: string;
  questionNumber: number;
  sectionTitle?: string;
  questionType: QuestionType;
  visualType: QuestionVisualType;
  prompt: string;
  supplementaryData?: {
    codeLanguage?: string;
    codeSnippet?: string;
    tableHeaders?: string[];
    tableData?: string[][];
    imageUrl?: string;
    markdownText?: string;
  };
  options?: QuestionOption[];
  maxMarks: number;
  correctAnswer?: string;
  rubric?: QuestionRubric;
}

export interface AcademicExamInput {
  category: 'ACADEMIC';
  country: string;
  state?: string;
  examName: string;
  stream?: string;
  subject: string;
  targetProgram: string;
  targetCareer: string;
  primaryObjective: 
    | 'class 11 to 12 exam'
    | 'university admission'
    | 'scholarship qualification'
    | 'general practice'
    | 'professional license';
  difficulty: DifficultyLevel;
  targetScore: number;
  academicBackground: string;
  examDescription: string;
}

export interface ProfessionalExamInput {
  category: 'PROFESSIONAL';
  country?: string;
  industry: string;
  certVendor: string;
  examName: string;
  subject: string;
  targetCareer: string;
  academicBackground: string;
  difficulty: DifficultyLevel;
  targetScore: number;
  examDescription: string;
}

export type ExamGenerationPayload = AcademicExamInput | ProfessionalExamInput;

export interface ExamSession {
  id: string;
  userId: string;
  config: ExamGenerationPayload;
  timeLimitMinutes: number;
  questions: ExamQuestion[];
  createdAt: string;
}

// User Submission & Analytics Types
export interface UserResponseSubmission {
  questionId: string;
  answerText?: string;
  selectedOptions?: string[];
  timeSpentSeconds: number;
}

export interface QuestionEvaluation {
  questionId: string;
  questionNumber: number;
  userAnswer: string | string[];
  correctAnswer?: string;
  isCorrect?: boolean;
  marksAwarded: number;
  maxMarks: number;
  feedback: string;
  modelAnswer?: string;
}

export interface CategoryPerformance {
  categoryName: string;
  score: number;
  maxScore: number;
  percentage: number;
  status: 'Strong' | 'Needs Improvement' | 'Critical Focus';
}

export interface ComprehensiveEvaluationReport {
  sessionId: string;
  examName: string;
  subject: string;
  totalMarksObtained: number;
  totalMaxMarks: number;
  percentage: number;
  grade?: string;
  overallFeedback: string;
  strengths: string[];
  improvementAreas: string[];
  categoryBreakdown: CategoryPerformance[];
  questionEvaluations: QuestionEvaluation[];
  generatedAt: string;
}