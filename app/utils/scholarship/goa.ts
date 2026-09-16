
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
// 5. GOA SCHOLARSHIPS
// ==========================================
export const goaScholarships: ScholarshipBatch = {
  id: "goa_scholarships",
  country: "India",
  state: "Goa",
  scholarships: [
    {
      id: "goa-bursary-scheme-2026",
      title: "Goa Bursary Scheme for Higher Education",
      provider: "Goa Education Development Corporation (GEDC), Govt of Goa",
      description: "Financial assistance to students pursuing general and professional higher education courses to ease tuition and academic costs.",
      type: "Need-Based",
      eligibility: {
        minPercentage: 50.0,
        eligibleCourses: ["Undergraduate Degree", "Professional Degree", "Diploma"],
        eligibleCategories: ["Goa Resident"],
        maxFamilyIncome: { min: null, max: 300000, currency: "INR" },
        genderCriteria: "All"
      },
      financials: {
        coverageType: "Partial Tuition",
        amountValue: { min: 10000, max: 20000, currency: "INR" },
        durationYears: 1
      },
      deadline: "2026-11-30",
      applicationUrl: "https://cmscholarship.goa.gov.in/",
      documentsRequired: [
        "Goa Residence Certificate (15 years domicile)",
        "Income Certificate",
        "College Fee Receipt & Bonafide Letter",
        "Bank Passbook Copy"
      ],
      isNationwide: false
    },
    {
      id: "goa-gagan-bharari-2026",
      title: "Gagan Bharari Shiksha Yojana",
      provider: "Directorate of Higher Education, Govt of Goa",
      description: "Financial support and fee concessions for Scheduled Tribe (ST) students pursuing higher education and technical programs.",
      type: "Government",
      eligibility: {
        minPercentage: 45.0,
        eligibleCourses: ["Higher Secondary", "Undergraduate", "Postgraduate", "Technical Diploma"],
        eligibleCategories: ["ST"],
        maxFamilyIncome: null,
        genderCriteria: "All"
      },
      financials: {
        coverageType: "Stipend",
        amountValue: { min: 5000, max: 15000, currency: "INR" },
        durationYears: 1
      },
      deadline: "2026-11-15",
      applicationUrl: "https://cmscholarship.goa.gov.in/",
      documentsRequired: [
        "ST Certificate issued by competent authority",
        "Residence Certificate",
        "Previous Marksheet",
        "Institution Admission Receipt"
      ],
      isNationwide: false
    }
  ]
};