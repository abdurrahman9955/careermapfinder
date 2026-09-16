
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
// 17. NAGALAND SCHOLARSHIPS
// ==========================================
export const nagalandScholarships: ScholarshipBatch = {
  id: "nagaland_scholarships",
  country: "India",
  state: "Nagaland",
  scholarships: [
    {
      id: "nagaland-common-portal-st-postmat-2026",
      title: "Nagaland Common Scholarship Portal Post-Matric (ST)",
      provider: "Department of Higher Education, Government of Nagaland",
      description: "Unified state portal providing maintenance grants and fee reimbursement for indigenous ST students of Nagaland pursuing higher studies.",
      type: "Government",
      eligibility: {
        minPercentage: 45.0,
        eligibleCourses: ["Higher Secondary", "Undergraduate", "Postgraduate", "Technical Professional Courses"],
        eligibleCategories: ["Indigenous Inhabitant ST", "Nagaland Resident"],
        maxFamilyIncome: { min: null, max: 250000, currency: "INR" },
        genderCriteria: "All"
      },
      financials: {
        coverageType: "Full Tuition",
        amountValue: { min: 5000, max: 45000, currency: "INR" },
        durationYears: 1
      },
      deadline: "2026-11-15",
      applicationUrl: "https://scholarship.nagaland.gov.in/",
      documentsRequired: [
        "Indigenous Inhabitant Certificate (IIC)",
        "Scheduled Tribe (ST) Certificate",
        "Income Certificate",
        "Fee Structure & Bonafide Letter",
        "Bank Account linked with Aadhaar"
      ],
      isNationwide: false
    },
    {
      id: "nagaland-merit-award-2026",
      title: "Nagaland State Merit Scholarship",
      provider: "Directorate of Higher Education, Govt of Nagaland",
      description: "Merit-based scholarships to honor high-scoring students in state board or university degree examinations.",
      type: "Merit-Based",
      eligibility: {
        minPercentage: 75.0,
        eligibleCourses: ["Undergraduate Degree", "Postgraduate Degree"],
        eligibleCategories: ["Nagaland Resident"],
        maxFamilyIncome: null,
        genderCriteria: "All"
      },
      financials: {
        coverageType: "Stipend",
        amountValue: { min: 4000, max: 10000, currency: "INR" },
        durationYears: 1
      },
      deadline: "2026-10-31",
      applicationUrl: "https://scholarship.nagaland.gov.in/",
      documentsRequired: [
        "Previous Marksheet showing high scores",
        "Indigenous Certificate",
        "Bank Passbook Details"
      ],
      isNationwide: false
    }
  ]
};