
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
// 19. PUNJAB SCHOLARSHIPS
// ==========================================
export const punjabScholarships: ScholarshipBatch = {
  id: "punjab_scholarships",
  country: "India",
  state: "Punjab",
  scholarships: [
    {
      id: "punjab-dr-ambedkar-post-matric-sc-2026",
      title: "Dr. B.R. Ambedkar Post-Matric Scholarship Scheme Punjab",
      provider: "Department of Social Justice, Empowerment and Minorities, Govt of Punjab",
      description: "Centrally and state-backed scheme providing 100% tuition fee waivers and maintenance allowances for SC students studying across Punjab.",
      type: "Government",
      eligibility: {
        minPercentage: 40.0,
        eligibleCourses: ["Class 11", "Class 12", "ITI", "Diploma", "Undergraduate", "Postgraduate", "Medical", "Engineering"],
        eligibleCategories: ["SC"],
        maxFamilyIncome: { min: null, max: 250000, currency: "INR" },
        genderCriteria: "All"
      },
      financials: {
        coverageType: "Full Tuition",
        amountValue: { min: 5000, max: 60000, currency: "INR" },
        durationYears: 1
      },
      deadline: "2026-11-30",
      applicationUrl: "https://punjabscholarships.gov.in/",
      documentsRequired: [
        "Punjab Residence Certificate",
        "SC Caste Certificate",
        "Income Certificate issued by Competent Authority",
        "Fee Receipt & Institution Bonafide Proof",
        "Aadhaar-seeded Bank Passbook"
      ],
      isNationwide: false
    },
    {
      id: "punjab-ashirwad-scheme-2026",
      title: "Punjab Ashirwad Scheme (formerly Shagun)",
      provider: "Welfare Department, Government of Punjab",
      description: "Financial support grant provided to low-income families to assist with education or life milestones for young women.",
      type: "Need-Based",
      eligibility: {
        minPercentage: 35.0,
        eligibleCourses: ["Higher Secondary", "Undergraduate Level"],
        eligibleCategories: ["SC", "BC", "EWS", "Low Income Resident"],
        maxFamilyIncome: { min: null, max: 32790, currency: "INR" }, // Annual criteria benchmark
        genderCriteria: "Female"
      },
      financials: {
        coverageType: "One-Time Grant",
        amountValue: { min: 51000, max: 51000, currency: "INR" },
        durationYears: 1
      },
      deadline: "2026-12-31",
      applicationUrl: "https://punjab.gov.in/",
      documentsRequired: [
        "Residence Certificate of Punjab",
        "Caste Certificate",
        "Income Certificate",
        "Bank Details of Beneficiary"
      ],
      isNationwide: false
    }
  ]
};