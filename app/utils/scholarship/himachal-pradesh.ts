
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
// 8. HIMACHAL PRADESH SCHOLARSHIPS
// ==========================================
export const himachalPradeshScholarships: ScholarshipBatch = {
  id: "himachal_pradesh_scholarships",
  country: "India",
  state: "Himachal Pradesh",
  scholarships: [
    {
      id: "hp-post-matric-sc-2026",
      title: "Centrally Sponsored Post Matric Scholarship Scheme for SC Students - HP",
      provider: "Department of Higher Education, Govt of Himachal Pradesh",
      description: "Offers tuition fee coverage and monthly maintenance allowances for Scheduled Caste students studying in recognized post-matric institutions.",
      type: "Government",
      eligibility: {
        minPercentage: 40.0,
        eligibleCourses: ["Post-Matric Intermediate", "Undergraduate", "Postgraduate", "Professional Technical Courses"],
        eligibleCategories: ["SC"],
        maxFamilyIncome: { min: null, max: 250000, currency: "INR" },
        genderCriteria: "All"
      },
      financials: {
        coverageType: "Full Tuition",
        amountValue: { min: 3000, max: 40000, currency: "INR" },
        durationYears: 1
      },
      deadline: "2026-10-31",
      applicationUrl: "https://himbudget.hp.gov.in/ or NSP",
      documentsRequired: [
        "Himachali Bonafide Certificate",
        "SC Caste Certificate",
        "Income Certificate",
        "Fee Structure & Receipt",
        "Bank Passbook linked with Aadhaar"
      ],
      isNationwide: false
    },
    {
      id: "hp-maharishi-balmiki-2026",
      title: "Maharishi Balmiki Chatravriti Yojna",
      provider: "Government of Himachal Pradesh",
      description: "Dedicated scholarship grant to support girl students belonging specifically to the Balmiki community pursuing higher studies post-matric.",
      type: "Government",
      eligibility: {
        minPercentage: 40.0,
        eligibleCourses: ["Post-Matric High School", "Higher Secondary", "Undergraduate Degree Courses"],
        eligibleCategories: ["Balmiki Community"],
        maxFamilyIncome: null,
        genderCriteria: "Female"
      },
      financials: {
        coverageType: "One-Time Grant",
        amountValue: { min: 9000, max: 9000, currency: "INR" },
        durationYears: 1
      },
      deadline: "2026-11-30",
      applicationUrl: "https://scholarships.hp.gov.in/",
      documentsRequired: [
        "Bonafide Himachali Certificate",
        "Balmiki Community Proof Certificate",
        "Previous Class Marksheet",
        "Bank Account Details"
      ],
      isNationwide: false
    },
    {
      id: "hp-mukhya-mantri-vidyarthi-kalyan-2026",
      title: "Mukhya Mantri Vidyarthi Kalyan Yojana",
      provider: "Department of Education, Govt of Himachal Pradesh",
      description: "Financial assistance and annual stipends for students belonging to IRDP / BPL families enrolled in government or government-aided institutions.",
      type: "Need-Based",
      eligibility: {
        minPercentage: 40.0,
        eligibleCourses: ["Class 9 to 12", "Undergraduate College Courses", "University Level"],
        eligibleCategories: ["IRDP", "BPL"],
        maxFamilyIncome: null,
        genderCriteria: "All"
      },
      financials: {
        coverageType: "Stipend",
        amountValue: { min: 300, max: 2400, currency: "INR" },
        durationYears: 1
      },
      deadline: "2026-11-15",
      applicationUrl: "https://www.myscheme.gov.in/schemes/mvky",
      documentsRequired: [
        "IRDP / BPL Certificate issued by Panchayat/ autorités",
        "Himachali Bonafide Certificate",
        "School/College Identity Card & Bonafide Letter",
        "Bank Account Passbook"
      ],
      isNationwide: false
    },
    {
      id: "hp-kalpana-chawla-chatravriti-2026",
      title: "Kalpana Chawala Chatravriti Yojna HP",
      provider: "Department of Higher Education, Govt of Himachal Pradesh",
      description: "Merit-based scholarship scheme designed exclusively for top-ranking female students in the Himachal Pradesh Board 10+2 examinations to pursue higher education.",
      type: "Merit-Based",
      eligibility: {
        minPercentage: 80.0,
        eligibleCourses: ["Undergraduate Degree Professional / General Stream"],
        eligibleCategories: ["HP Board Student"],
        maxFamilyIncome: null,
        genderCriteria: "Female"
      },
      financials: {
        coverageType: "One-Time Grant",
        amountValue: { min: 15000, max: 15000, currency: "INR" },
        durationYears: 1
      },
      deadline: "2026-11-30",
      applicationUrl: "https://scholarships.hp.gov.in/",
      documentsRequired: [
        "HP Board Class 12 Merit Rank Proof / Marksheet",
        "Bonafide Himachali Certificate",
        "College Admission Confirmation Receipt",
        "Bank Passbook Details"
      ],
      isNationwide: false
    }
  ]
};