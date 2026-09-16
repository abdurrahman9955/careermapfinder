
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
// 6. GUJARAT SCHOLARSHIPS
// ==========================================
export const gujaratScholarships: ScholarshipBatch = {
  id: "gujarat_scholarships",
  country: "India",
  state: "Gujarat",
  scholarships: [
    {
      id: "gujarat-digital-gujarat-post-matric-2026",
      title: "Digital Gujarat Post-Matric Scholarship (SC/ST/SEBC)",
      provider: "Social Justice and Empowerment Department, Govt of Gujarat",
      description: "Comprehensive financial assistance covering tuition fees, enrollment costs, and maintenance allowances for backward class students in Gujarat.",
      type: "Government",
      eligibility: {
        minPercentage: 50.0,
        eligibleCourses: ["Diploma", "Undergraduate", "Postgraduate", "Medical", "Engineering", "ITI"],
        eligibleCategories: ["SC", "ST", "SEBC", "OBC"],
        maxFamilyIncome: { min: null, max: 250000, currency: "INR" },
        genderCriteria: "All"
      },
      financials: {
        coverageType: "Full Tuition",
        amountValue: { min: 3000, max: 50000, currency: "INR" },
        durationYears: 1
      },
      deadline: "2026-11-30",
      applicationUrl: "https://www.digitalgujarat.gov.in/",
      documentsRequired: [
        "Digital Gujarat Portal Registration Copy",
        "Income Certificate",
        "Caste Certificate",
        "Fee Receipt & Bonafide Certificate",
        "Aadhaar Card linked to Bank Account"
      ],
      isNationwide: false
    },
    {
      id: "gujarat-mukhyamantri-yuva-swavalamban-2026",
      title: "Mukhyamantri Yuva Swavalamban Yojana (MYSY)",
      provider: "Government of Gujarat",
      description: "Provides 50% tuition fee waivers and hostel/book grants for economically weaker students (EWS) pursuing professional degree programs like Engineering, Medicine, and Pharmacy.",
      type: "Merit-Based",
      eligibility: {
        minPercentage: 80.0,
        eligibleCourses: ["B.E./B.Tech", "MBBS/BDS", "Diploma to Degree Engineering", "Pharmacy"],
        eligibleCategories: ["EWS", "General (Low Income)"],
        maxFamilyIncome: { min: null, max: 600000, currency: "INR" },
        genderCriteria: "All"
      },
      financials: {
        coverageType: "Partial Tuition",
        amountValue: { min: 25000, max: 200000, currency: "INR" },
        durationYears: 1
      },
      deadline: "2026-10-31",
      applicationUrl: "https://mysy.guj.nic.in/",
      documentsRequired: [
        "EWS Certificate issued by Gujarat Authorities",
        "Class 10 and 12 Marksheets",
        "Common Entrance Test (GUJCET/NEET) Scorecard",
        "Fee Receipt issued by Admission Committee",
        "Bank Account Details"
      ],
      isNationwide: false
    }
  ]
};