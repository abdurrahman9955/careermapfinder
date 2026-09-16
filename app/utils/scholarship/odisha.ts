
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
// 18. ODISHA SCHOLARSHIPS
// ==========================================
export const odishaScholarships: ScholarshipBatch = {
  id: "odisha_scholarships",
  country: "India",
  state: "Odisha",
  scholarships: [
    {
      id: "odisha-state-scholarship-portal-postmat-2026",
      title: "Odisha State Scholarship Portal Post-Matric Scholarship",
      provider: "ST & SC Development, Minorities and Backward Classes Welfare Dept, Govt of Odisha",
      description: "Single window state portal scholarship providing full tuition fees and maintenance allowances for SC, ST, OBC, SEBC, and EBC students in Odisha.",
      type: "Government",
      eligibility: {
        minPercentage: 50.0,
        eligibleCourses: ["Higher Secondary", "ITI", "Diploma", "Engineering", "Medical", "General Graduation", "Postgraduate"],
        eligibleCategories: ["SC", "ST", "OBC", "SEBC", "EBC"],
        maxFamilyIncome: { min: null, max: 250000, currency: "INR" },
        genderCriteria: "All"
      },
      financials: {
        coverageType: "Full Tuition",
        amountValue: { min: 4000, max: 50000, currency: "INR" },
        durationYears: 1
      },
      deadline: "2026-11-30",
      applicationUrl: "https://scholarship.odisha.gov.in/",
      documentsRequired: [
        "Odisha Residence/Domicile Certificate",
        "Caste Certificate issued via e-Admission portal",
        "Income Certificate",
        "Valid College ID & Fee Receipt",
        "Bank Account Seeded with Aadhaar"
      ],
      isNationwide: false
    },
    {
      id: "odisha-kalinga-sikshya-sathi-2026",
      title: "Kalinga Sikshya Sathi Yojana (KSSY)",
      provider: "Higher Education Department, Government of Odisha",
      description: "Education loan scheme allowing students to secure higher education loans up to INR 10 Lakhs at a simple 1% interest rate for professional courses.",
      type: "Need-Based",
      eligibility: {
        minPercentage: 50.0,
        eligibleCourses: ["Professional Degree", "Medical", "Engineering", "Management", "Law"],
        eligibleCategories: ["Odisha Resident"],
        maxFamilyIncome: { min: null, max: 600000, currency: "INR" },
        genderCriteria: "All"
      },
      financials: {
        coverageType: "Full Tuition",
        amountValue: { min: 50000, max: 1000000, currency: "INR" },
        durationYears: 4
      },
      deadline: "2026-11-15",
      applicationUrl: "https://highereducation.odisha.gov.in/",
      documentsRequired: [
        "Institution Admission Offer Letter",
        "Fee Structure Certificate",
        "Odisha Resident Certificate",
        "Income Certificate",
        "Aadhaar card of student and co-borrower"
      ],
      isNationwide: false
    }
  ]
};