
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


export const biharScholarships: ScholarshipBatch = {
  id: "bihar_scholarships",
  country: "India",
  state: "Bihar",
  scholarships: [
    {
      id: "bihar-pms-bc-ebc-2026",
      title: "Bihar Post-Matric Scholarship for BC and EBC Students",
      provider: "Education Department, Government of Bihar",
      description: "Covers 100% of actual tuition fees and compulsory non-refundable fees along with a monthly maintenance allowance for Backward Classes and Extremely Backward Classes.",
      type: "Government",
      eligibility: {
        minPercentage: 45.0,
        eligibleCourses: ["Intermediate", "Diploma", "ITI", "Undergraduate", "Postgraduate", "Professional Degree"],
        eligibleCategories: ["BC", "EBC"],
        maxFamilyIncome: { min: null, max: 300000, currency: "INR" },
        genderCriteria: "All"
      },
      financials: {
        coverageType: "Full Tuition",
        amountValue: { min: 5000, max: 50000, currency: "INR" },
        durationYears: 1
      },
      deadline: "2026-09-15",
      applicationUrl: "https://pmsonline.bihar.gov.in/",
      documentsRequired: [
        "Bihar Residential Certificate",
        "BC/EBC Caste Certificate",
        "Income Certificate issued on or after April 1, 2026",
        "Bonafide Certificate & Fee Receipt",
        "Aadhaar-seeded Bank Account Passbook"
      ],
      isNationwide: false
    },
    {
      id: "bihar-pms-sc-st-2026",
      title: "Bihar Post-Matric Scholarship for SC and ST Students",
      provider: "Scheduled Caste & Scheduled Tribe Welfare Department, Govt of Bihar",
      description: "Full tuition fee reimbursement and maintenance allowances for SC and ST students pursuing education beyond matriculation inside Bihar.",
      type: "Government",
      eligibility: {
        minPercentage: 40.0,
        eligibleCourses: ["Intermediate", "Diploma", "ITI", "Undergraduate", "Postgraduate", "Professional Degree"],
        eligibleCategories: ["SC", "ST"],
        maxFamilyIncome: { min: null, max: 300000, currency: "INR" },
        genderCriteria: "All"
      },
      financials: {
        coverageType: "Full Tuition",
        amountValue: { min: 5000, max: 60000, currency: "INR" },
        durationYears: 1
      },
      deadline: "2026-09-15",
      applicationUrl: "https://scstpmsonline.bihar.gov.in/",
      documentsRequired: [
        "Bihar Residential Certificate",
        "SC/ST Caste Certificate",
        "Income Certificate",
        "Bonafide Certificate and Fee Structure",
        "Aadhaar-seeded Bank Passbook"
      ],
      isNationwide: false
    }
  ]
};