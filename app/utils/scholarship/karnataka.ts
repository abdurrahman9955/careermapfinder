
export type ScholarshipType = 'Government' | 'Institutional' | 'Private' | 'Merit-Based' | 'Need-Based' | 'Welfare-Based';

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
// 10. KARNATAKA SCHOLARSHIPS
// ==========================================
export const karnatakaScholarships: ScholarshipBatch = {
  id: "karnataka_scholarships",
  country: "India",
  state: "Karnataka",
  scholarships: [
    {
      id: "karnataka-ssp-post-matric-2026",
      title: "State Scholarship Portal (SSP) Post-Matric Scholarship",
      provider: "Government of Karnataka",
      description: "Single-window clearance platform handling post-matric fee reimbursements and maintenance stipends for SC, ST, OBC, and minority students in Karnataka.",
      type: "Government",
      eligibility: {
        minPercentage: 50.0,
        eligibleCourses: ["PUC", "ITI", "Polytechnic Diploma", "Undergraduate", "Postgraduate", "Professional Degree"],
        eligibleCategories: ["SC", "ST", "OBC", "Cat-1", "Minority"],
        maxFamilyIncome: { min: null, max: 250000, currency: "INR" },
        genderCriteria: "All"
      },
      financials: {
        coverageType: "Full Tuition",
        amountValue: { min: 3000, max: 45000, currency: "INR" },
        durationYears: 1
      },
      deadline: "2026-11-30",
      applicationUrl: "https://ssp.karnataka.gov.in/",
      documentsRequired: [
        "Karnataka e-Attestation ID",
        "Student Aadhaar Number linked with bank account",
        "Caste and Income Certificate (RD Number)",
        "Fee Receipt & College Registration ID",
        "Previous Year Marksheet"
      ],
      isNationwide: false
    },
    {
      id: "karnataka-freemanship-fee-concession-2026",
      title: "Chief Minister's Vidhyanidhi Scholarship Scheme",
      provider: "Government of Karnataka",
      description: "Special educational scholarship stipends provided to children of landless agricultural laborers, weavers, auto drivers, and construction workers for higher education.",
      type: "Welfare-Based",
      eligibility: {
        minPercentage: 45.0,
        eligibleCourses: ["PUC", "ITI", "Nursing", "Engineering", "Medical", "Degree Courses"],
        eligibleCategories: ["Children of Registered Workers", "Karnataka Resident"],
        maxFamilyIncome: null,
        genderCriteria: "All"
      },
      financials: {
        coverageType: "Stipend",
        amountValue: { min: 5000, max: 11000, currency: "INR" },
        durationYears: 1
      },
      deadline: "2026-10-31",
      applicationUrl: "https://ssp.karnataka.gov.in/",
      documentsRequired: [
        "Labor Board Registration Card / ID Proof",
        "Karnataka Domicile Certificate",
        "Bank Passbook Details",
        "College Admission Receipt"
      ],
      isNationwide: false
    }
  ]
};