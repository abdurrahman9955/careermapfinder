export interface CounselingFormData {

  fullName: string;
  email: string;
  phone: string;
  country: string;
  city: string;

  academicStatus: 'school_student' | 'college_student' | 'graduated' | 'working_professional';
  targetUniversity?: string;
  targetFieldOfStudy?: string;
  currentCollegeName?: string;
  currentDegree?: string;
  graduationYear?: string;

  primaryGoal: 'university_admissions' | 'career_transition' | 'mentorship_skills' | 'exam_guidance';
  biggestChallenge: string;
  specificQuestions: string;
  preferredSessionMode: 'online_video' | 'one_on_one_chat';
  preferredTimeSlot: 'morning' | 'afternoon' | 'evening';
}

export const INDIAN_STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam",
  "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana",
  "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala",
  "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya",
  "Mizoram", "Nagaland", "Odisha", "Punjab","Rajasthan", "Sikkim",
  "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh",
  "Uttarakhand", "West Bengal",
];

export const INITIAL_FORM_DATA: CounselingFormData = {
  fullName: '',
  email: '',
  phone: '',
  country: '',
  city: '',
  academicStatus: 'school_student',
  targetUniversity: '',
  targetFieldOfStudy: '',
  currentCollegeName: '',
  currentDegree: '',
  graduationYear: '',
  primaryGoal: 'university_admissions',
  biggestChallenge: '',
  specificQuestions: '',
  preferredSessionMode: 'online_video',
  preferredTimeSlot: 'morning',
};