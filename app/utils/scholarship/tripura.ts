
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
// 24. TRIPURA SCHOLARSHIPS
// ==========================================
export const tripuraScholarships: ScholarshipBatch = {
  id: "tripura_scholarships",
  country: "India",
  state: "Tripura",
  scholarships: [
    {
      id: "tripura-st-post-matric-2026",
      title: "Tripura Post-Matric Scholarship for ST Students",
      provider: "Tribal Welfare Department, Government of Tripura",
      description: "Financial grants, admission fee support, and monthly maintenance stipends for permanent resident Scheduled Tribe students of Tripura.",
      type: "Government",
      eligibility: {
        minPercentage: 40.0,
        eligibleCourses: ["Higher Secondary", "Undergraduate Degree", "Postgraduate", "Technical Diploma"],
        eligibleCategories: ["ST", "Tripura Permanent Resident"],
        maxFamilyIncome: { min: null, max: 250000, currency: "INR" },
        genderCriteria: "All"
      },
      financials: {
        coverageType: "Full Tuition",
        amountValue: { min: 5000, max: 40000, currency: "INR" },
        durationYears: 1
      },
      deadline: "2026-10-31",
      applicationUrl: "https://twd.tripura.gov.in/ or NSP",
      documentsRequired: [
        "PRTC (Permanent Resident of Tripura Certificate)",
        "Scheduled Tribe Certificate",
        "Income Certificate",
        "Institution Fee Receipt & Bonafide Proof",
        "Bank Passbook linked with Aadhaar"
      ],
      isNationwide: false
    },
    {
      id: "tripura-merit-scholarship-general-2026",
      title: "Tripura State Merit Scholarship for General Stream",
      provider: "Directorate of Higher Education, Govt of Tripura",
      description: "Merit scholarship to support high-scoring college and university students belonging to general and economically weaker sections.",
      type: "Merit-Based",
      eligibility: {
        minPercentage: 65.0,
        eligibleCourses: ["Undergraduate Degree Courses"],
        eligibleCategories: ["Tripura Resident"],
        maxFamilyIncome: { min: null, max: 300000, currency: "INR" },
        genderCriteria: "All"
      },
      financials: {
        coverageType: "Stipend",
        amountValue: { min: 4000, max: 12000, currency: "INR" },
        durationYears: 1
      },
      deadline: "2026-11-15",
      applicationUrl: "https://highereducation.tripura.gov.in/",
      documentsRequired: [
        "PRTC Certificate",
        "Qualifying Board Marksheet",
        "Bank Account Information"
      ],
      isNationwide: false
    }
  ]
};