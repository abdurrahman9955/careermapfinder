
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
// 25. UTTAR PRADESH SCHOLARSHIPS
// ==========================================
export const uttarPradeshScholarships: ScholarshipBatch = {
  id: "uttar_pradesh_scholarships",
  country: "India",
  state: "Uttar Pradesh",
  scholarships: [
    {
      id: "up-scholarship-portal-postmat-2026",
      title: "Uttar Pradesh Samaj Kalyan Post-Matric Scholarship",
      provider: "Social Welfare Department, Government of Uttar Pradesh",
      description: "Massive state portal scheme providing 100% tuition reimbursement and maintenance allowances for SC, ST, OBC, Minority, and General EWS students across UP.",
      type: "Government",
      eligibility: {
        minPercentage: 45.0,
        eligibleCourses: ["Intermediate", "ITI", "Polytechnic", "Undergraduate", "Postgraduate", "Medical", "Engineering"],
        eligibleCategories: ["SC", "ST", "OBC", "Minority", "General (EWS)"],
        maxFamilyIncome: { min: null, max: 200000, currency: "INR" }, // 2L for general/OBC, 2.5L for SC/ST
        genderCriteria: "All"
      },
      financials: {
        coverageType: "Full Tuition",
        amountValue: { min: 3000, max: 50000, currency: "INR" },
        durationYears: 1
      },
      deadline: "2026-11-30",
      applicationUrl: "https://scholarship.up.gov.in/",
      documentsRequired: [
        "Aadhaar Card linked to mobile number and bank account",
        "UP Domicile/Residence Certificate",
        "Caste Certificate (online verified number)",
        "Income Certificate with unique certificate serial ID",
        "Current Academic Year Fee Receipt & Enrollment Number",
        "Bank Passbook"
      ],
      isNationwide: false
    }
  ]
};