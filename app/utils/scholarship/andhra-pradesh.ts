
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
    {
      id: "ap-vasathi-deevena-2026",
      title: "Jagananna Vasathi Deevena (MTF)",
      provider: "Government of Andhra Pradesh",
      description: "Financial assistance for food, hostel, and pocket expenses disbursed directly to the mother's bank account of eligible students.",
      type: "Government",
      eligibility: {
        minPercentage: 50.0,
        eligibleCourses: ["ITI", "Polytechnic", "B.Tech", "B.Pharmacy", "Degree", "PG"],
        eligibleCategories: ["SC", "ST", "BC", "Kapu", "EBC", "Minority"],
        maxFamilyIncome: { min: null, max: 250000, currency: "INR" },
        genderCriteria: "All"
      },
      financials: {
        coverageType: "Stipend",
        amountValue: { min: 10000, max: 20000, currency: "INR" },
        durationYears: 1
      },
      deadline: "2026-10-31",
      applicationUrl: "https://jnanabhumi.ap.gov.in/",
      documentsRequired: [
        "Mother's Bank Account Passbook",
        "Income & Caste Certificate",
        "Aadhaar Card of Student and Mother",
        "Bonafide Certificate"
      ],
      isNationwide: false
    },
    {
      id: "ap-videshi-vidya-deevena-2026",
      title: "Jagananna / NTR Videshi Vidya Deevena",
      provider: "Social Welfare Department, Govt of Andhra Pradesh",
      description: "Grants up to INR 1.25 Crore for marginalized and backward class students pursuing Master's, Ph.D., or MBBS programs in top 200 global universities.",
      type: "Merit-Based",
      eligibility: {
        minPercentage: 60.0,
        eligibleCourses: ["Postgraduate", "Ph.D.", "MBBS"],
        eligibleCategories: ["SC", "ST", "BC", "Minority", "EBC", "Kapu"],
        maxFamilyIncome: { min: null, max: 800000, currency: "INR" },
        genderCriteria: "All"
      },
      financials: {
        coverageType: "Full Tuition",
        amountValue: { min: 10000000, max: 12500000, currency: "INR" },
        durationYears: 2
      },
      deadline: "2026-11-15",
      applicationUrl: "https://jnanabhumi.ap.gov.in/",
      documentsRequired: [
        "Unconditional Offer Letter from Top 200 QS University",
        "IELTS/TOEFL/GRE Scorecard",
        "Income & Caste Certificate",
        "Valid Passport and Visa"
      ],
      isNationwide: false
    },
    {
      id: "ap-ntr-vidyonnathi-2026",
      title: "NTR Vidyonnathi Scheme",
      provider: "AP Backward Classes Cooperative Finance Corporation",
      description: "Provides fully funded professional coaching for students targeting All-India Civil Services (UPSC) and APPSC Group examinations.",
      type: "Merit-Based",
      eligibility: {
        minPercentage: 60.0,
        eligibleCourses: ["Undergraduate Degree", "Postgraduate"],
        eligibleCategories: ["SC", "ST", "BC", "EBC", "Brahmin", "Kapu"],
        maxFamilyIncome: { min: null, max: 600000, currency: "INR" },
        genderCriteria: "All"
      },
      financials: {
        coverageType: "Stipend",
        amountValue: { min: 50000, max: 100000, currency: "INR" },
        durationYears: 1
      },
      deadline: "2026-09-30",
      applicationUrl: "https://jnanabhumi.ap.gov.in/",
      documentsRequired: [
        "Graduation Degree Certificate",
        "Income & Caste Certificate",
        "Aadhaar Card",
        "Bank Passbook"
      ],
      isNationwide: false
    },
    {
      id: "ap-veda-vyasa-2026",
      title: "Veda Vyasa Scheme for Vedic Education",
      provider: "Andhra Pradesh Brahmin Welfare Corporation",
      description: "Financial support for students pursuing traditional Vedic studies, Sanskrit, and Shastras in recognized institutions across the state.",
      type: "Government",
      eligibility: {
        minPercentage: 50.0,
        eligibleCourses: ["Vedic Certification", "Sanskrit Degree", "Diploma in Vedic Studies"],
        eligibleCategories: ["Brahmin", "Economically Weaker Section"],
        maxFamilyIncome: { min: null, max: 300000, currency: "INR" },
        genderCriteria: "All"
      },
      financials: {
        coverageType: "Partial Tuition",
        amountValue: { min: 10000, max: 25000, currency: "INR" },
        durationYears: 1
      },
      deadline: "2026-10-15",
      applicationUrl: "https://andhrabrahmin.ap.gov.in/",
      documentsRequired: [
        "Income Certificate",
        "Brahmin Community Certificate",
        "Institution Enrollment Proof",
        "Aadhaar Card"
      ],
      isNationwide: false
    },
    {
      id: "ap-gayathri-scheme-2026",
      title: "Gayathri Scheme for Academic Excellence",
      provider: "Andhra Pradesh Brahmin Welfare Corporation",
      description: "Financial assistance for meritorious Brahmin students pursuing professional postgraduate and professional graduate degrees.",
      type: "Merit-Based",
      eligibility: {
        minPercentage: 75.0,
        eligibleCourses: ["Engineering (B.Tech)", "Medicine (MBBS)", "Postgraduate Professional"],
        eligibleCategories: ["Brahmin"],
        maxFamilyIncome: { min: null, max: 300000, currency: "INR" },
        genderCriteria: "All"
      },
      financials: {
        coverageType: "Partial Tuition",
        amountValue: { min: 20000, max: 50000, currency: "INR" },
        durationYears: 1
      },
      deadline: "2026-10-15",
      applicationUrl: "https://andhrabrahmin.ap.gov.in/",
      documentsRequired: [
        "Qualifying Entrance Exam Scorecard (EAPCET/NEET/GATE)",
        "Income & Community Certificate",
        "Fee Receipt",
        "Bank Passbook"
      ],
      isNationwide: false
    }
  ]
};