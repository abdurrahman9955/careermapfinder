
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
// 13. MAHARASHTRA SCHOLARSHIPS
// ==========================================
export const maharashtraScholarships: ScholarshipBatch = {
  id: "maharashtra_scholarships",
  country: "India",
  state: "Maharashtra",
  scholarships: [
    {
      id: "mh-mahadbt-post-matric-2026",
      title: "Government of Maharashtra Post-Matric Scholarship (Mahadbt)",
      provider: "Social Justice and Special Assistance Department, Govt of Maharashtra",
      description: "Comprehensive tuition and exam fee reimbursement for backward class students (SC, ST, VJNT, OBC, SBC) pursuing higher education in Maharashtra.",
      type: "Government",
      eligibility: {
        minPercentage: 50.0,
        eligibleCourses: ["Diploma", "Undergraduate Degree", "Postgraduate", "Medical", "Engineering", "Management"],
        eligibleCategories: ["SC", "ST", "VJNT", "OBC", "SBC"],
        maxFamilyIncome: { min: null, max: 800000, currency: "INR" },
        genderCriteria: "All"
      },
      financials: {
        coverageType: "Full Tuition",
        amountValue: { min: 5000, max: 100000, currency: "INR" },
        durationYears: 1
      },
      deadline: "2026-12-31",
      applicationUrl: "https://mahadbt.maharashtra.gov.in/",
      documentsRequired: [
        "Maharashtra Domicile Certificate",
        "Caste Certificate",
        "Income Certificate issued by Tahsildar",
        "Fee Receipt & Bonafide Certificate",
        "Aadhaar-seeded Bank Passbook"
      ],
      isNationwide: false
    },
    {
      id: "mh-punjabrao-deshmukh-2026",
      title: "Dr. Punjabrao Deshmukh Vastigruh Nirvah Bhatta Yojna (DTE)",
      provider: "Directorate of Technical Education, Govt of Maharashtra",
      description: "Maintenance allowance (hostel/lodging support) for children of registered laborers or small-scale agriculturists pursuing professional technical streams.",
      type: "Need-Based",
      eligibility: {
        minPercentage: 50.0,
        eligibleCourses: ["Engineering (B.E./B.Tech)", "Pharmacy", "Architecture", "MBA", "MCA"],
        eligibleCategories: ["Registered Labourer Family", "Registered Agriculturist", "Open/EBC"],
        maxFamilyIncome: { min: null, max: 800000, currency: "INR" },
        genderCriteria: "All"
      },
      financials: {
        coverageType: "Stipend",
        amountValue: { min: 30000, max: 60000, currency: "INR" },
        durationYears: 1
      },
      deadline: "2026-12-15",
      applicationUrl: "https://mahadbt.maharashtra.gov.in/",
      documentsRequired: [
        "Certificate of being child of Farmer (Shetkari) / Registered Laborer",
        "Hostel Admission / Rent Agreement Proof",
        "Income & Domicile Certificate",
        "Mahadbt Application Form"
      ],
      isNationwide: false
    }
  ]
};