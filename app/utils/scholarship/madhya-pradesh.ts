
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
// 12. MADHYA PRADESH SCHOLARSHIPS
// ==========================================
export const madhyaPradeshScholarships: ScholarshipBatch = {
  id: "madhya_pradesh_scholarships",
  country: "India",
  state: "Madhya Pradesh",
  scholarships: [
    {
      id: "mp-post-matric-sc-st-obc-2026",
      title: "MP Scholarship Portal Post-Matric Scholarship (SC/ST/OBC)",
      provider: "Tribal Affairs & Scheduled Caste Welfare Department, Govt of MP",
      description: "Online tracking and disbursement platform covering complete tuition fee exemptions and monthly maintenance allowances for reserved group students in Madhya Pradesh.",
      type: "Government",
      eligibility: {
        minPercentage: 45.0,
        eligibleCourses: ["Polytechnic", "ITI", "Undergraduate Degree", "Postgraduate", "Medical", "Engineering"],
        eligibleCategories: ["SC", "ST", "OBC"],
        maxFamilyIncome: { min: null, max: 300000, currency: "INR" },
        genderCriteria: "All"
      },
      financials: {
        coverageType: "Full Tuition",
        amountValue: { min: 4000, max: 60000, currency: "INR" },
        durationYears: 1
      },
      deadline: "2026-12-31",
      applicationUrl: "http://www.scholarshipportal.mp.nic.in/",
      documentsRequired: [
        "Samagra ID / Family ID",
        "MP Domicile Certificate",
        "Caste Certificate issued online",
        "Income Certificate",
        "Fee Receipt & College Admission Code",
        "Aadhaar-seeded Bank Passbook"
      ],
      isNationwide: false
    },
    {
      id: "mp-gaon-ki-beti-2026",
      title: "Gaon Ki Beti Yojana",
      provider: "Government of Madhya Pradesh",
      description: "Financial assistance program encouraging rural girl students who pass Class 12 with good marks to pursue higher education streams.",
      type: "Merit-Based",
      eligibility: {
        minPercentage: 60.0,
        eligibleCourses: ["Undergraduate Degree", "Engineering/Medical/Polytechnic Diploma"],
        eligibleCategories: ["Rural Girl Student", "MP Resident"],
        maxFamilyIncome: null,
        genderCriteria: "Female"
      },
      financials: {
        coverageType: "Stipend",
        amountValue: { min: 5000, max: 5000, currency: "INR" },
        durationYears: 1
      },
      deadline: "2026-11-30",
      applicationUrl: "http://www.scholarshipportal.mp.nic.in/",
      documentsRequired: [
        "Village Panchayat Certificate proving rural residence",
        "Class 12 Marksheet",
        "Samagra ID",
        "College Admission Bonafide Letter",
        "Bank Details"
      ],
      isNationwide: false
    },
    {
      id: "mp-pratibha-kiran-2026",
      title: "Pratibha Kiran Scholarship Yojana",
      provider: "Higher Education Department, Government of MP",
      description: "Scholarship framework designed for meritorious urban girl students living below the poverty line (BPL) to pursue higher education programs.",
      type: "Need-Based",
      eligibility: {
        minPercentage: 60.0,
        eligibleCourses: ["Undergraduate Degree Courses", "Professional Technical Diplomas"],
        eligibleCategories: ["Urban BPL Girl Student"],
        maxFamilyIncome: null,
        genderCriteria: "Female"
      },
      financials: {
        coverageType: "Stipend",
        amountValue: { min: 5000, max: 5000, currency: "INR" },
        durationYears: 1
      },
      deadline: "2026-11-30",
      applicationUrl: "http://www.scholarshipportal.mp.nic.in/",
      documentsRequired: [
        "Urban BPL Card Proof",
        "Class 12 Marksheet",
        "Samagra ID",
        "College Fee Receipt & Bank Account"
      ],
      isNationwide: false
    }
  ]
};