
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
// 14. MANIPUR SCHOLARSHIPS
// ==========================================
export const manipurScholarships: ScholarshipBatch = {
  id: "manipur_scholarships",
  country: "India",
  state: "Manipur",
  scholarships: [
    {
      id: "manipur-obc-post-matric-2026",
      title: "Manipur Post-Matric Scholarship for OBC Students",
      provider: "OBC and Other Backward Classes Department, Govt of Manipur",
      description: "Provides financial aid, maintenance allowances, and fee structures for post-matriculation OBC students studying inside or outside Manipur.",
      type: "Government",
      eligibility: {
        minPercentage: 45.0,
        eligibleCourses: ["Higher Secondary", "Undergraduate", "Postgraduate", "Technical Professional Diplomas"],
        eligibleCategories: ["OBC"],
        maxFamilyIncome: { min: null, max: 150000, currency: "INR" },
        genderCriteria: "All"
      },
      financials: {
        coverageType: "Partial Tuition",
        amountValue: { min: 3000, max: 20000, currency: "INR" },
        durationYears: 1
      },
      deadline: "2026-10-31",
      applicationUrl: "https://www.scholarships.gov.in/",
      documentsRequired: [
        "OBC Certificate of Manipur State",
        "Income Certificate",
        "Permanent Resident Certificate (PRC)",
        "Bank Account details linked with Aadhaar"
      ],
      isNationwide: false
    },
    {
      id: "manipur-st-post-matric-2026",
      title: "Post-Matric Scholarship for ST Students Manipur",
      provider: "Department of Tribal Affairs and Hills, Govt of Manipur",
      description: "Mandatory fee reimbursement and monthly stipends for Scheduled Tribe (ST) students of Manipur pursuing higher education courses.",
      type: "Government",
      eligibility: {
        minPercentage: 40.0,
        eligibleCourses: ["Class 11", "Class 12", "Degree", "Postgraduate", "Professional Engineering/Medical"],
        eligibleCategories: ["ST"],
        maxFamilyIncome: { min: null, max: 250000, currency: "INR" },
        genderCriteria: "All"
      },
      financials: {
        coverageType: "Full Tuition",
        amountValue: { min: 5000, max: 40000, currency: "INR" },
        durationYears: 1
      },
      deadline: "2026-10-31",
      applicationUrl: "https://www.scholarships.gov.in/",
      documentsRequired: [
        "Scheduled Tribe Certificate",
        "Income Certificate",
        "Bonafide Institution Certificate",
        "Aadhaar-linked Bank Passbook"
      ],
      isNationwide: false
    }
  ]
};