
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
// 22. TAMIL NADU SCHOLARSHIPS
// ==========================================
export const tamilNaduScholarships: ScholarshipBatch = {
  id: "tamil_nadu_scholarships",
  country: "India",
  state: "Tamil Nadu",
  scholarships: [
    {
      id: "tn-bc-mbc-postmatric-2026",
      title: "Tamil Nadu BC, MBC, and DNC Post-Matric Scholarship",
      provider: "Backward Classes, Most Backward Classes and Minorities Welfare Dept, Govt of TN",
      description: "Full tuition fee waivers and maintenance allowances for Backward Classes (BC), Most Backward Classes (MBC), and Denotified Communities (DNC) students in Tamil Nadu.",
      type: "Government",
      eligibility: {
        minPercentage: 45.0,
        eligibleCourses: ["Polytechnic Diploma", "Undergraduate Degree", "Postgraduate", "Professional Engineering/Medical"],
        eligibleCategories: ["BC", "MBC", "DNC", "Minorities"],
        maxFamilyIncome: { min: null, max: 250000, currency: "INR" },
        genderCriteria: "All"
      },
      financials: {
        coverageType: "Full Tuition",
        amountValue: { min: 3000, max: 50000, currency: "INR" },
        durationYears: 1
      },
      deadline: "2026-10-31",
      applicationUrl: "https://tndce.tn.gov.in/",
      documentsRequired: [
        "Community Certificate (BC/MBC/DNC)",
        "Income Certificate issued by Tahsildar",
        "Tamil Nadu Residence Proof",
        "College Admission Fee Receipt",
        "Bank Passbook linked with Aadhaar"
      ],
      isNationwide: false
    },
    {
      id: "tn-evr-nagammai-pg-girl-2026",
      title: "EVR Nagammai Free Education Scheme for Postgraduate Girls",
      provider: "Higher Education Department, Government of Tamil Nadu",
      description: "Waives tuition and admission fees completely for all women students pursuing postgraduate arts and science degree courses in recognized colleges across Tamil Nadu.",
      type: "Government",
      eligibility: {
        minPercentage: 50.0,
        eligibleCourses: ["Postgraduate Arts Stream", "Postgraduate Science Stream"],
        eligibleCategories: ["All Categories (Female Resident)"],
        maxFamilyIncome: null,
        genderCriteria: "Female"
      },
      financials: {
        coverageType: "Full Tuition",
        amountValue: { min: 10000, max: 25000, currency: "INR" },
        durationYears: 2
      },
      deadline: "2026-11-30",
      applicationUrl: "https://www.tn.gov.in/",
      documentsRequired: [
        "Undergraduate Degree Marksheet & Certificate",
        "College Postgraduate Admission Letter",
        "Nativity Certificate of Tamil Nadu",
        "Bank Account Details"
      ],
      isNationwide: false
    }
  ]
};