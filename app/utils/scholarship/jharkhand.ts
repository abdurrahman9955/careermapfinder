
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
// 9. JHARKHAND SCHOLARSHIPS
// ==========================================
export const jharkhandScholarships: ScholarshipBatch = {
  id: "jharkhand_scholarships",
  country: "India",
  state: "Jharkhand",
  scholarships: [
    {
      id: "jharkhand-ekalyan-post-matric-2026",
      title: "Jharkhand e-Kalyan Post-Matric Scholarship (SC/ST/BC)",
      provider: "Scheduled Caste, Minority, and Backward Class Welfare Department, Govt of Jharkhand",
      description: "Comprehensive reimbursement of tuition fees and maintenance allowances for eligible resident students belonging to SC, ST, and BC categories across Jharkhand.",
      type: "Government",
      eligibility: {
        minPercentage: 45.0,
        eligibleCourses: ["Intermediate", "ITI", "Diploma", "Engineering", "Medical", "General Graduation", "Postgraduate"],
        eligibleCategories: ["SC", "ST", "BC"],
        maxFamilyIncome: { min: null, max: 250000, currency: "INR" },
        genderCriteria: "All"
      },
      financials: {
        coverageType: "Full Tuition",
        amountValue: { min: 4000, max: 50000, currency: "INR" },
        durationYears: 1
      },
      deadline: "2026-12-15",
      applicationUrl: "https://ekalyan.cgg.gov.in/",
      documentsRequired: [
        "Jharkhand Residential / Domicile Certificate",
        "Valid Caste Certificate issued by competent authority",
        "Income Certificate",
        "Bonafide Certificate with fee details",
        "Scanned copy of Bank Passbook & Aadhaar Card"
      ],
      isNationwide: false
    },
    {
      id: "jharkhand- गुरु-जी-student-credit-2026",
      title: "Guru Ji Student Credit Card Scheme",
      provider: "Higher, Technical Education and Skill Department, Govt of Jharkhand",
      description: "Financial support providing education loans up to INR 15 Lakhs at nominal 1% interest rates for students pursuing professional and higher education courses.",
      type: "Need-Based",
      eligibility: {
        minPercentage: 50.0,
        eligibleCourses: ["Professional Degree", "Engineering", "Medical", "Management", "General Higher Education"],
        eligibleCategories: ["Jharkhand Resident"],
        maxFamilyIncome: null,
        genderCriteria: "All"
      },
      financials: {
        coverageType: "Full Tuition",
        amountValue: { min: 100000, max: 1500000, currency: "INR" },
        durationYears: 4
      },
      deadline: "2026-11-30",
      applicationUrl: "https://www.jharkhand.gov.in/",
      documentsRequired: [
        "Institutional Admission Offer Letter",
        "Fee Structure Breakdown",
        "Jharkhand Residence Certificate",
        "Academic Marksheets",
        "Aadhaar card of student and parents"
      ],
      isNationwide: false
    }
  ]
};