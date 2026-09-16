
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


export const arunachalPradeshScholarships: ScholarshipBatch = {
  id: "arunachal_pradesh_scholarships",
  country: "India",
  state: "Arunachal Pradesh",
  scholarships: [
    {
      id: "arunachal-state-stipend-2026",
      title: "Arunachal Pradesh State Stipend Scheme",
      provider: "Directorate of Higher and Technical Education, Govt of Arunachal Pradesh",
      description: "Provides monthly stipends and annual book grants to permanent resident ST students pursuing recognized higher education courses.",
      type: "Government",
      eligibility: {
        minPercentage: 50.0,
        eligibleCourses: ["B.A.", "B.Sc.", "B.Com.", "B.E./B.Tech", "Diploma", "Postgraduate", "Ph.D."],
        eligibleCategories: ["ST", "APST Resident"],
        maxFamilyIncome: null,
        genderCriteria: "All"
      },
      financials: {
        coverageType: "Stipend",
        amountValue: { min: 12000, max: 20000, currency: "INR" },
        durationYears: 1
      },
      deadline: "2026-10-16",
      applicationUrl: "https://scholarships.gov.in/",
      documentsRequired: [
        "APST Certificate",
        "Permanent Resident Certificate (PRC)",
        "Previous examination mark sheet",
        "Institution Bonafide Certificate",
        "Aadhaar-seeded Bank Passbook"
      ],
      isNationwide: false
    },
    {
      id: "arunachal-golden-jubilee-2026",
      title: "Golden Jubilee Merit Award",
      provider: "Govt of Arunachal Pradesh",
      description: "Merit-based financial reward for top-performing students in state and central board examinations (Class 10 and 12) to incentivize academic excellence.",
      type: "Merit-Based",
      eligibility: {
        minPercentage: 80.0,
        eligibleCourses: ["Class 11 Entry", "Undergraduate Entry"],
        eligibleCategories: ["APST Resident"],
        maxFamilyIncome: null,
        genderCriteria: "All"
      },
      financials: {
        coverageType: "One-Time Grant",
        amountValue: { min: 10000, max: 50000, currency: "INR" },
        durationYears: 1
      },
      deadline: "2026-11-30",
      applicationUrl: "https://apdhte.nic.in/",
      documentsRequired: [
        "Board Exam Marksheet",
        "APST Certificate",
        "Bank Passbook Details",
        "Passport Size Photograph"
      ],
      isNationwide: false
    },
    {
      id: "arunachal-academic-excellence-2026",
      title: "Arunachal Pradesh Academic Excellence Scheme",
      provider: "Department of Education, Govt of Arunachal Pradesh",
      description: "Specialized financial grants for students clearing competitive national exams or pursuing high-end professional qualifications like Commercial Pilot License.",
      type: "Merit-Based",
      eligibility: {
        minPercentage: 75.0,
        eligibleCourses: ["Professional Degree", "Commercial Pilot License", "UPSC Qualified"],
        eligibleCategories: ["APST Resident"],
        maxFamilyIncome: null,
        genderCriteria: "All"
      },
      financials: {
        coverageType: "Full Tuition",
        amountValue: { min: 50000, max: 500000, currency: "INR" },
        durationYears: 1
      },
      deadline: "2026-11-30",
      applicationUrl: "https://apdhte.nic.in/",
      documentsRequired: [
        "Entrance Examination Scorecard / Qualification Proof",
        "Institution Fee Structure",
        "APST Certificate",
        "Bank Account Details"
      ],
      isNationwide: false
    }
  ]
};