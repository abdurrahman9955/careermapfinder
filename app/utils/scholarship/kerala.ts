
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
// 11. KERALA SCHOLARSHIPS
// ==========================================
export const keralaScholarships: ScholarshipBatch = {
  id: "kerala_scholarships",
  country: "India",
  state: "Kerala",
  scholarships: [
    {
      id: "kerala-dcescholarships-el-2026",
      title: "State Merit Scholarship (SMS) Kerala",
      provider: "Directorate of Collegiate Education (DCE), Govt of Kerala",
      description: "Merit scholarship awarded to students pursuing first-year undergraduate degree programs in government or aided arts/science colleges across Kerala.",
      type: "Merit-Based",
      eligibility: {
        minPercentage: 60.0,
        eligibleCourses: ["Undergraduate Degree (B.A., B.Sc., B.Com.)"],
        eligibleCategories: ["Kerala Resident"],
        maxFamilyIncome: { min: null, max: 100000, currency: "INR" },
        genderCriteria: "All"
      },
      financials: {
        coverageType: "Stipend",
        amountValue: { min: 1250, max: 1250, currency: "INR" },
        durationYears: 1
      },
      deadline: "2026-10-31",
      applicationUrl: "http://www.dcescholarship.kerala.gov.in/",
      documentsRequired: [
        "Kerala Nativity Certificate",
        "Income Certificate from Village Officer",
        "Qualifying Marksheet (Class 12)",
        "Bank Passbook details of nationalized bank"
      ],
      isNationwide: false
    },
    {
      id: "kerala-echallan-ebc-anchal-2026",
      title: "Higher Education Scholarship (HES) Kerala",
      provider: "Higher Education Department, Government of Kerala",
      description: "Prestigious scholarship for meritorious students pursuing graduate and postgraduate studies in basic sciences, social sciences, humanities, and professional courses.",
      type: "Merit-Based",
      eligibility: {
        minPercentage: 75.0,
        eligibleCourses: ["B.Sc.", "B.A.", "B.Com.", "Postgraduate Streams"],
        eligibleCategories: ["Kerala Resident"],
        maxFamilyIncome: null,
        genderCriteria: "All"
      },
      financials: {
        coverageType: "Stipend",
        amountValue: { min: 12000, max: 25000, currency: "INR" },
        durationYears: 3
      },
      deadline: "2026-11-15",
      applicationUrl: "https://www.dcescholarship.kerala.gov.in/",
      documentsRequired: [
        "Nativity Certificate",
        "Plus Two Marksheet showing high aggregate",
        "Institution Bonafide Certificate",
        "Bank Account linked with Aadhaar"
      ],
      isNationwide: false
    }
  ]
};