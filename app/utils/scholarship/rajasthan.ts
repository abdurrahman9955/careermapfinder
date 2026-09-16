
export type ScholarshipType = 'Government' | 'Institutional' | 'Private' | 'Merit-Based' | 'Need-Based';

export type ScholarshipCoverageType = 'Full Tuition' | 'Partial Tuition' | 'Stipend' | 'One-Time Grant' | 'Tuition & Hostel';

export interface RangeValue {
  min: number | null;
  max: number | null;
  currency?: string;
}

export interface ScholarshipEligibility {
  minPercentage: number | null;
  eligibleCourses: string[];
  eligibleCategories: string[]; 
  maxFamilyIncome: RangeValue | null;
  genderCriteria: 'All' | 'Female' | 'Male' | 'Transgender';
}

export interface ScholarshipFinancials {
  coverageType: ScholarshipCoverageType;
  amountValue: RangeValue; 
  durationYears: number | null;
}

export interface Scholarship {
  id: string;
  title: string;
  provider: string; 
  description: string;
  type: ScholarshipType;
  eligibility: ScholarshipEligibility;
  financials: ScholarshipFinancials;
  deadline: string; 
  applicationUrl: string;
  documentsRequired: string[];
  isNationwide: boolean;
}

export interface ScholarshipBatch {
  id: string;
  country: string;
  state: string; 
  scholarships: Scholarship[];
}

// ==========================================
// 20. RAJASTHAN SCHOLARSHIPS
// ==========================================
export const rajasthanScholarships: ScholarshipBatch = {
  id: "rajasthan_scholarships",
  country: "India",
  state: "Rajasthan",
  scholarships: [
    {
      id: "rajasthan-sje-post-matric-2026",
      title: "Rajasthan Social Justice and Empowerment Post-Matric Scholarship",
      provider: "Social Justice and Empowerment Department, Govt of Rajasthan",
      description: "Covers tuition fees, enrollment charges, and maintenance allowances for SC, ST, OBC, SBC, EBC, and DNT resident students pursuing education past matriculation.",
      type: "Government",
      eligibility: {
        minPercentage: 45.0,
        eligibleCourses: ["Class 11", "Class 12", "Undergraduate Degree", "Postgraduate", "Technical/Professional Diploma"],
        eligibleCategories: ["SC", "ST", "OBC", "SBC", "EBC", "DNT"],
        maxFamilyIncome: { min: null, max: 250000, currency: "INR" },
        genderCriteria: "All"
      },
      financials: {
        coverageType: "Full Tuition",
        amountValue: { min: 3000, max: 50000, currency: "INR" },
        durationYears: 1
      },
      deadline: "2026-10-31",
      applicationUrl: "https://sso.rajasthan.gov.in/",
      documentsRequired: [
        "Jan Aadhar / Bhamashah ID Card",
        "Aadhaar Card",
        "Rajasthan Domicile/Residence Certificate",
        "Income Declaration Letter",
        "Fee Receipt & Last Exam Marksheet",
        "Caste Certificate & Bank Passbook"
      ],
      isNationwide: false
    },
    {
      id: "rajasthan-cm-sarvajan-higher-edu-2026",
      title: "Chief Minister Sarvajan Higher Education Scholarship Scheme",
      provider: "Government of Rajasthan",
      description: "Provides financial aid and tuition concessions to general category and economically vulnerable students enrolled in recognized higher education courses.",
      type: "Need-Based",
      eligibility: {
        minPercentage: 60.0,
        eligibleCourses: ["Undergraduate Degree", "Professional Courses", "Postgraduate"],
        eligibleCategories: ["General", "EWS"],
        maxFamilyIncome: { min: null, max: 250000, currency: "INR" },
        genderCriteria: "All"
      },
      financials: {
        coverageType: "Partial Tuition",
        amountValue: { min: 5000, max: 20000, currency: "INR" },
        durationYears: 1
      },
      deadline: "2026-10-31",
      applicationUrl: "https://sso.rajasthan.gov.in/",
      documentsRequired: [
        "Jan Aadhar Card",
        "Class 12 Marksheet",
        "Income Certificate",
        "Institution Fee Receipt",
        "Aadhaar-seeded Bank Passbook"
      ],
      isNationwide: false
    }
  ]
};