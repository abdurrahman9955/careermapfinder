
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
// 15. MEGHALAYA SCHOLARSHIPS
// ==========================================
export const meghalayaScholarships: ScholarshipBatch = {
  id: "meghalaya_scholarships",
  country: "India",
  state: "Meghalaya",
  scholarships: [
    {
      id: "meghalaya-umbrella-st-postmat-2026",
      title: "Meghalaya Post-Matric Scholarship for ST Students",
      provider: "Directorate of Higher and Technical Education, Govt of Meghalaya",
      description: "Financial support covering non-refundable academic fees and living allowances for permanent resident Scheduled Tribe students of Meghalaya.",
      type: "Government",
      eligibility: {
        minPercentage: 45.0,
        eligibleCourses: ["Higher Secondary", "Diploma", "Undergraduate Degree", "Postgraduate", "Technical Programs"],
        eligibleCategories: ["ST", "Meghalaya Resident"],
        maxFamilyIncome: { min: null, max: 250000, currency: "INR" },
        genderCriteria: "All"
      },
      financials: {
        coverageType: "Full Tuition",
        amountValue: { min: 5000, max: 45000, currency: "INR" },
        durationYears: 1
      },
      deadline: "2026-11-15",
      applicationUrl: "https://scholarships.gov.in/",
      documentsRequired: [
        "Scheduled Tribe Certificate of Meghalaya",
        "Permanent Resident Certificate (PRC)",
        "Income Certificate",
        "Institution Fee Receipt & Bonafide Letter",
        "Aadhaar Passbook Copy"
      ],
      isNationwide: false
    },
    {
      id: "meghalaya-smrit-merit-2026",
      title: "Meghalaya State Merit Scholarship",
      provider: "Education Department, Government of Meghalaya",
      description: "Merit-based award for high-achieving local students passing matriculation and higher secondary board examinations.",
      type: "Merit-Based",
      eligibility: {
        minPercentage: 75.0,
        eligibleCourses: ["Class 11 Entry", "Undergraduate Entry"],
        eligibleCategories: ["Meghalaya Resident"],
        maxFamilyIncome: null,
        genderCriteria: "All"
      },
      financials: {
        coverageType: "One-Time Grant",
        amountValue: { min: 5000, max: 15000, currency: "INR" },
        durationYears: 1
      },
      deadline: "2026-10-30",
      applicationUrl: "https://megeducation.gov.in/",
      documentsRequired: [
        "Board Examination Marksheet",
        "Residence / Domicile Certificate",
        "Bank Details"
      ],
      isNationwide: false
    }
  ]
};