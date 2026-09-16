
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

export const assamScholarships: ScholarshipBatch = {
  id: "assam_scholarships",
  country: "India",
  state: "Assam",
  scholarships: [
    {
      id: "assam-combined-merit-2026",
      title: "Combined Merit Scholarship Scheme Assam",
      provider: "Directorate of Higher Education, Govt of Assam",
      description: "Merit-based financial assistance awarded to students pursuing general undergraduate degrees and master's programs in recognized institutions.",
      type: "Merit-Based",
      eligibility: {
        minPercentage: 60.0,
        eligibleCourses: ["B.A.", "B.Sc.", "B.Com.", "M.A.", "M.Sc.", "M.Com."],
        eligibleCategories: ["Assam Resident"],
        maxFamilyIncome: { min: null, max: 600000, currency: "INR" },
        genderCriteria: "All"
      },
      financials: {
        coverageType: "Stipend",
        amountValue: { min: 3600, max: 6000, currency: "INR" },
        durationYears: 1
      },
      deadline: "2026-10-31",
      applicationUrl: "https://site.assam.gov.in/",
      documentsRequired: [
        "Permanent Resident Certificate (PRC) of Assam",
        "Qualifying Marksheet",
        "Admission Receipt / Bonafide Certificate",
        "Bank Account Details (preferably SBI)"
      ],
      isNationwide: false
    },
    {
      id: "assam-nijut-moina-2026",
      title: "Nijut Moina Scheme",
      provider: "Government of Assam",
      description: "Monthly financial grants provided to girl students enrolled in higher secondary, graduation, and postgraduate courses to encourage higher education retention.",
      type: "Government",
      eligibility: {
        minPercentage: 50.0,
        eligibleCourses: ["Higher Secondary", "Undergraduate Degree", "Postgraduate"],
        eligibleCategories: ["All Categories"],
        maxFamilyIncome: { min: null, max: 200000, currency: "INR" },
        genderCriteria: "Female"
      },
      financials: {
        coverageType: "Stipend",
        amountValue: { min: 10000, max: 25000, currency: "INR" },
        durationYears: 1
      },
      deadline: "2026-10-10",
      applicationUrl: "https://site.assam.gov.in/",
      documentsRequired: [
        "Institution Enrolment Proof",
        "Bank Account Details",
        "Aadhaar Card",
        "Attendance Declaration"
      ],
      isNationwide: false
    },
    {
      id: "assam-simon-sing-horo-2026",
      title: "Simon Sing Horo Special Post-Matric Scholarship",
      provider: "Government of Assam",
      description: "One-time financial incentive for students of the Tea Tribes and Adivasi Community who successfully clear high school or higher secondary examinations.",
      type: "Government",
      eligibility: {
        minPercentage: 45.0,
        eligibleCourses: ["Class 11 Entry", "Undergraduate Entry"],
        eligibleCategories: ["Tea Tribes", "Adivasi Community"],
        maxFamilyIncome: { min: null, max: 300000, currency: "INR" },
        genderCriteria: "All"
      },
      financials: {
        coverageType: "One-Time Grant",
        amountValue: { min: 10000, max: 10000, currency: "INR" },
        durationYears: 1
      },
      deadline: "2026-10-30",
      applicationUrl: "https://scholarships.gov.in/",
      documentsRequired: [
        "Community / Tribe Certificate",
        "HSLC or HSSLC Marksheet",
        "Bank Passbook Copy",
        "Aadhaar Card"
      ],
      isNationwide: false
    }
  ]
};