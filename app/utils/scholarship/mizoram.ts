
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
// 16. MIZORAM SCHOLARSHIPS
// ==========================================
export const mizoramScholarships: ScholarshipBatch = {
  id: "mizoram_scholarships",
  country: "India",
  state: "Mizoram",
  scholarships: [
    {
      id: "mizoram-st-post-matric-2026",
      title: "Mizoram Post-Matric Scholarship for ST Students",
      provider: "Social Welfare & Tribal Affairs Department, Govt of Mizoram",
      description: "Covers tuition fees and maintenance stipends for Scheduled Tribe students belonging to Mizoram pursuing higher education programs.",
      type: "Government",
      eligibility: {
        minPercentage: 45.0,
        eligibleCourses: ["Class 11", "Class 12", "Undergraduate", "Postgraduate", "Technical Professional Degrees"],
        eligibleCategories: ["ST", "Mizoram Resident"],
        maxFamilyIncome: { min: null, max: 250000, currency: "INR" },
        genderCriteria: "All"
      },
      financials: {
        coverageType: "Full Tuition",
        amountValue: { min: 5000, max: 40000, currency: "INR" },
        durationYears: 1
      },
      deadline: "2026-10-31",
      applicationUrl: "https://scholarships.gov.in/",
      documentsRequired: [
        "ST Certificate of Mizoram",
        "Income Certificate",
        "Bonafide Student Certificate",
        "Bank Passbook linked with Aadhaar"
      ],
      isNationwide: false
    },
    {
      id: "mizoram-merit-scholarship-2026",
      title: "Mizoram State Merit Scholarship Scheme",
      provider: "Department of Higher & Technical Education, Govt of Mizoram",
      description: "Financial awards for meritorious resident students pursuing college degrees and technical education paths.",
      type: "Merit-Based",
      eligibility: {
        minPercentage: 70.0,
        eligibleCourses: ["Undergraduate Degree", "Technical Diploma"],
        eligibleCategories: ["Mizoram Resident"],
        maxFamilyIncome: null,
        genderCriteria: "All"
      },
      financials: {
        coverageType: "Stipend",
        amountValue: { min: 5000, max: 15000, currency: "INR" },
        durationYears: 1
      },
      deadline: "2026-11-15",
      applicationUrl: "https://dhte.mizoram.gov.in/",
      documentsRequired: [
        "Qualifying Marksheet",
        "Mizoram Residential Certificate",
        "Bank Account Details"
      ],
      isNationwide: false
    }
  ]
};