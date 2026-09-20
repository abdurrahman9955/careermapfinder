
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

export const andhraPradeshScholarships: ScholarshipBatch = {
  id: "andhra_pradesh_scholarships",
  country: "India",
  state: "Andhra Pradesh",
  scholarships: [
    {
      id: "ap-vidya-deevena-2026",
      title: "Jagananna Vidya Deevena (RTF)",
      provider: "Government of Andhra Pradesh",
      description: "Full fee reimbursement scheme covering tuition fees for ITI, Polytechnic, Degree, Engineering, and Postgraduate students from low-income families.",
      type: "Government",
      eligibility: {
        minPercentage: 50.0,
        eligibleCourses: ["B.Tech", "B.Pharmacy", "ITI", "Polytechnic", "MCA", "MBA", "Degree", "PG"],
        eligibleCategories: ["SC", "ST", "BC", "Kapu", "EBC", "Minority"],
        maxFamilyIncome: { min: null, max: 250000, currency: "INR" },
        genderCriteria: "All"
      },
      financials: {
        coverageType: "Full Tuition",
        amountValue: { min: 15000, max: 120000, currency: "INR" },
        durationYears: 1
      },
      deadline: "2026-10-31",
      applicationUrl: "https://jnanabhumi.ap.gov.in/",
      documentsRequired: [
        "White Ration Card / BPL Certificate",
        "Income Certificate issued by MeeSeva",
        "Aadhaar Card",
        "Fee Receipt & College Admission Letter"
      ],
      isNationwide: false
    },
   
  ]
};