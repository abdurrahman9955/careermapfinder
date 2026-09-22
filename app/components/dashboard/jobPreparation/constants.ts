import { ExperienceLevel, WorkArrangement, InterviewFocus, AiInterviewerPersona } from './types';

export const EXPERIENCE_LEVELS: { id: ExperienceLevel; label: string; description: string }[] = [
  { id: 'student_intern', label: 'Student / Intern', description: 'Looking for internship or co-op opportunities' },
  { id: 'recent_graduate', label: 'Recent Graduate', description: 'Graduated within the last 0-12 months' },
  { id: 'entry_level', label: 'Entry-Level (0-2 Yrs)', description: 'Early career with foundational skills' },
  { id: 'mid_level', label: 'Mid-Level (3-5 Yrs)', description: 'Proven experience and independent contributor' },
  { id: 'senior_lead', label: 'Senior / Lead (6+ Yrs)', description: 'Deep domain expertise, system architectural skills' },
  { id: 'executive', label: 'Manager / Executive', description: 'Leadership, strategy, and organizational impact' },
];

export const WORK_ARRANGEMENTS: { id: WorkArrangement; label: string; iconName: string }[] = [
  { id: 'remote_global', label: 'Remote (Anywhere)', iconName: 'Globe' },
  { id: 'hybrid', label: 'Hybrid', iconName: 'Building' },
  { id: 'onsite', label: 'On-Site', iconName: 'MapPin' },
  { id: 'relocation', label: 'Open to Relocation', iconName: 'Plane' },
];

export const INTERVIEW_FOCUS_OPTIONS: { id: InterviewFocus; label: string; description: string }[] = [
  { id: 'technical_coding', label: 'Technical & Live Coding', description: 'Algorithms, data structures, and live problem solving' },
  { id: 'system_design', label: 'System Design & Architecture', description: 'Scalability, microservices, and distributed architecture' },
  { id: 'behavioral_star', label: 'Behavioral & STAR Method', description: 'Past experiences, situational judgment, and conflict resolution' },
  { id: 'domain_knowledge', label: 'Domain Specific / Frameworks', description: 'In-depth domain questions (React, Node, AWS, Finance, etc.)' },
  { id: 'case_study', label: 'Case Study & Problem Solving', description: 'Business cases, trade-offs, and structured reasoning' },
  { id: 'hr_screening', label: 'HR & Recruiter Screening', description: 'Salary expectation, background verification, motivation' },
];

export const AI_PERSONAS: { id: AiInterviewerPersona; label: string; description: string; badge: string }[] = [
  { id: 'supportive_coach', label: 'Supportive Coach', description: 'Encouraging tone with constructive hints during mistakes', badge: 'Beginner Friendly' },
  { id: 'strict_technical_lead', label: 'Strict Tech Lead', description: 'Pokes holes in trade-offs, expects precise and clean answers', badge: 'Challenging' },
  { id: 'faang_style', label: 'Top-Tech Assessor', description: 'Focuses heavily on efficiency, edge cases, and scale', badge: 'FAANG Grade' },
  { id: 'hr_recruiter', label: 'Talent Acquisition Manager', description: 'Evaluates soft skills, culture fit, and career goals', badge: 'HR' },
];

export const SUGGESTED_SKILLS: Record<string, string[]> = {
  Software: ['TypeScript', 'Node.js', 'React', 'Next.js', 'PostgreSQL', 'Docker', 'AWS', 'System Design', 'GraphQL', 'Python'],
  Data: ['Python', 'SQL', 'Pandas', 'Machine Learning', 'Tableau', 'PowerBI', 'Data Modeling', 'Spark'],
  Management: ['Agile / Scrum', 'Roadmapping', 'Product Strategy', 'Stakeholder Management', 'OKRs', 'User Research'],
  General: ['Communication', 'Problem Solving', 'Leadership', 'Critical Thinking', 'Project Management'],
};