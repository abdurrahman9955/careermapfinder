
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
// 26. UTTARAKHAND SCHOLARSHIPS
// ==========================================
export const uttarakhandScholarships: ScholarshipBatch = {
  id: "uttarakhand_scholarships",
  country: "India",
  state: "Uttarakhand",
  scholarships: [
    {
      id: "uk-social-welfare-post-matric-2026",
      title: "Uttarakhand Social Welfare Post-Matric Scholarship Scheme",
      provider: "Social Welfare Department, Government of Uttarakhand",
      description: "State-managed reimbursement of non-refundable tuition fees and maintenance stipends for permanent resident students belonging to SC, ST, and OBC categories in Uttarakhand.",
      type: "Government",
      eligibility: {
        minPercentage: 45.0,
        eligibleCourses: ["Class 11 & 12", "Polytechnic", "Professional Degree", "Undergraduate", "Postgraduate"],
        eligibleCategories: ["SC", "ST", "OBC", "Uttarakhand Domicile"],
        maxFamilyIncome: { min: null, max: 250000, currency: "INR" },
        genderCriteria: "All"
      },
      financials: {
        coverageType: "Full Tuition",
        amountValue: { min: 4000, max: 45000, currency: "INR" },
        durationYears: 1
      },
      deadline: "2026-11-30",
      applicationUrl: "https://scholarships.gov.in/",
      documentsRequired: [
        "Uttarakhand Permanent Residence (Domicile) Certificate",
        "Caste Certificate",
        "Income Certificate issued by competent authority",
        "Fee Receipt & Bonafide Letter",
        "Aadhaar-seeded Bank Account Passbook"
      ],
      isNationwide: false
    }
  ]
};