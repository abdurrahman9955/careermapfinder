
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
// 23. TELANGANA SCHOLARSHIPS
// ==========================================
export const telanganaScholarships: ScholarshipBatch = {
  id: "telangana_scholarships",
  country: "India",
  state: "Telangana",
  scholarships: [
    {
      id: "telangana-epass-post-matric-2026",
      title: "Telangana ePASS Post-Matric Scholarship (MTF & RTF)",
      provider: "Scheduled Castes, Scheduled Tribes, Backward Classes & Minority Welfare Dept, Govt of Telangana",
      description: "Reimbursement of Tuition Fees (RTF) and Maintenance/Food Charges (MTF) for eligible backward and minority students studying in post-matric courses in Telangana.",
      type: "Government",
      eligibility: {
        minPercentage: 45.0,
        eligibleCourses: ["Intermediate", "ITI", "Polytechnic", "Undergraduate Degree", "Postgraduate", "Engineering/Medicine"],
        eligibleCategories: ["SC", "ST", "BC", "EBC", "Minority"],
        maxFamilyIncome: { min: null, max: 200000, currency: "INR" },
        genderCriteria: "All"
      },
      financials: {
        coverageType: "Full Tuition",
        amountValue: { min: 5000, max: 100000, currency: "INR" },
        durationYears: 1
      },
      deadline: "2026-11-30",
      applicationUrl: "https://telanganaepass.cgg.gov.in/",
      documentsRequired: [
        "Telangana Residence / Nativity Certificate",
        "Integrated Caste Certificate with sub-caste code",
        "Income Certificate issued via MeeSeva",
        "Study / Bonafide Certificates for past 7 consecutive years",
        "Bank Account linked with Aadhaar number"
      ],
      isNationwide: false
    }
  ]
};