
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
// 27. WEST BENGAL SCHOLARSHIPS
// ==========================================
export const westBengalScholarships: ScholarshipBatch = {
  id: "west_bengal_scholarships",
  country: "India",
  state: "West Bengal",
  scholarships: [
    {
      id: "wb-swamy-vivekananda-merit-cum-means-2026",
      title: "Swami Vivekananda Merit-cum-Means Scholarship (SVMCM / Bikash Bhavan)",
      provider: "Higher Education Department, Government of West Bengal",
      description: "Prestigious financial grant for meritorious students belonging to economically weaker families in West Bengal pursuing higher secondary, undergraduate, and postgraduate programs.",
      type: "Merit-Based",
      eligibility: {
        minPercentage: 60.0,
        eligibleCourses: ["Higher Secondary (Class 11-12)", "Undergraduate General/Professional", "Postgraduate Streams", "Medical/Engineering"],
        eligibleCategories: ["West Bengal Domicile"],
        maxFamilyIncome: { min: null, max: 250000, currency: "INR" },
        genderCriteria: "All"
      },
      financials: {
        coverageType: "Stipend",
        amountValue: { min: 12000, max: 60000, currency: "INR" },
        durationYears: 1
      },
      deadline: "2026-11-30",
      applicationUrl: "https://svmcm.wbhed.gov.in/",
      documentsRequired: [
        "West Bengal Domicile Proof (Aadhaar/Voter ID)",
        "Qualifying board or university mark sheet (both semesters/sides where applicable)",
        "Income Certificate from competent authority (Gazetted Officer)",
        "Admission Receipt for current academic year",
        "Bank Passbook copy with IFSC code"
      ],
      isNationwide: false
    },
    {
      id: "wb-ikashree-scholarship-2026",
      title: "Aikyashree West Bengal Minority Scholarship",
      provider: "Backward Classes Welfare Department, Government of West Bengal",
      description: "Scholarship scheme providing financial support and fee assistance for students belonging to minority communities (Muslim, Christian, Buddhist, Sikh, Jain, Zoroastrian) across West Bengal.",
      type: "Government",
      eligibility: {
        minPercentage: 50.0,
        eligibleCourses: ["Class 1 to 10", "Higher Secondary", "Undergraduate", "Postgraduate", "Nursing/Technical Diploma"],
        eligibleCategories: ["Minority Communities", "West Bengal Resident"],
        maxFamilyIncome: { min: null, max: 200000, currency: "INR" },
        genderCriteria: "All"
      },
      financials: {
        coverageType: "Partial Tuition",
        amountValue: { min: 3000, max: 33000, currency: "INR" },
        durationYears: 1
      },
      deadline: "2026-10-31",
      applicationUrl: "https://wbmfg.gov.in/",
      documentsRequired: [
        "Self-declaration of minority community",
        "West Bengal Residence Proof",
        "Last qualifying examination mark sheet",
        "Bank Account details in student's name"
      ],
      isNationwide: false
    }
  ]
};