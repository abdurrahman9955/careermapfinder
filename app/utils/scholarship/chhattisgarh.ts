
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
// 4. CHHATTISGARH SCHOLARSHIPS
// ==========================================
export const chhattisgarhScholarships: ScholarshipBatch = {
  id: "chhattisgarh_scholarships",
  country: "India",
  state: "Chhattisgarh",
  scholarships: [
    {
      id: "cg-post-matric-sc-st-obc-2026",
      title: "Chhattisgarh Post-Matric Scholarship (SC/ST/OBC)",
      provider: "Tribal Welfare & Scheduled Caste Development Department, Govt of Chhattisgarh",
      description: "State scholarship providing maintenance grants and fee support for resident students of SC, ST, and OBC communities.",
      type: "Government",
      eligibility: {
        minPercentage: 45.0,
        eligibleCourses: ["Class 11", "Class 12", "ITI", "Polytechnic", "Engineering", "Medical", "Degree", "Postgraduate"],
        eligibleCategories: ["SC", "ST", "OBC"],
        maxFamilyIncome: { min: null, max: 250000, currency: "INR" },
        genderCriteria: "All"
      },
      financials: {
        coverageType: "Partial Tuition",
        amountValue: { min: 2000, max: 20000, currency: "INR" },
        durationYears: 1
      },
      deadline: "2026-12-30",
      applicationUrl: "https://schoolscholarship.cg.nic.in/",
      documentsRequired: [
        "Chhattisgarh Domicile Certificate",
        "Caste Certificate",
        "Income Certificate",
        "Previous Exam Marksheet",
        "Bank Passbook linked with Aadhaar"
      ],
      isNationwide: false
    },
    {
      id: "cg-gyan-protsahan-2026",
      title: "Mukhyamantri Gyan Protsahan Yojana",
      provider: "Government of Chhattisgarh",
      description: "One-time financial incentive provided to meritorious students of reserved categories who successfully pass secondary and higher secondary board examinations.",
      type: "Merit-Based",
      eligibility: {
        minPercentage: 70.0,
        eligibleCourses: ["Class 11 Entry", "Undergraduate Entry"],
        eligibleCategories: ["SC", "ST"],
        maxFamilyIncome: null,
        genderCriteria: "All"
      },
      financials: {
        coverageType: "One-Time Grant",
        amountValue: { min: 15000, max: 15000, currency: "INR" },
        durationYears: 1
      },
      deadline: "2026-12-30",
      applicationUrl: "https://schoolscholarship.cg.nic.in/",
      documentsRequired: [
        "Board Exam Marksheet",
        "Caste Certificate",
        "Chhattisgarh Residence Proof",
        "Bank Account Details"
      ],
      isNationwide: false
    }
  ]
};