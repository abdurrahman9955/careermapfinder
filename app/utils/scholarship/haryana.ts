
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
// 7. HARYANA SCHOLARSHIPS
// ==========================================
export const haryanaScholarships: ScholarshipBatch = {
  id: "haryana_scholarships",
  country: "India",
  state: "Haryana",
  scholarships: [
    {
      id: "haryana-post-matric-sc-2026",
      title: "Post Matric Scholarship Scheme for Scheduled Caste Students",
      provider: "Welfare of Scheduled Castes and Backward Classes Department, Govt of Haryana",
      description: "Provides full maintenance allowances, fee reimbursements, and compulsory non-refundable fees for SC students studying at the post-matriculation level.",
      type: "Government",
      eligibility: {
        minPercentage: 40.0,
        eligibleCourses: ["Class 11", "Class 12", "ITI", "Diploma", "Undergraduate", "Postgraduate", "Medical", "Engineering"],
        eligibleCategories: ["SC"],
        maxFamilyIncome: { min: null, max: 250000, currency: "INR" },
        genderCriteria: "All"
      },
      financials: {
        coverageType: "Full Tuition",
        amountValue: { min: 5000, max: 50000, currency: "INR" },
        durationYears: 1
      },
      deadline: "2026-10-31",
      applicationUrl: "https://harchhatravratti.highereduhry.ac.in/",
      documentsRequired: [
        "Parivar Pehchan Patra (PPP) Family ID",
        "Haryana Domicile Certificate",
        "SC Caste Certificate",
        "Income Certificate",
        "Fee Receipt & Bonafide Certificate",
        "Aadhaar-seeded Bank Account"
      ],
      isNationwide: false
    },
    {
      id: "haryana-post-matric-bc-2026",
      title: "Post Matric Scholarship for Other Backward Classes (OBC/BC) Students",
      provider: "Welfare of Scheduled Castes and Backward Classes Department, Govt of Haryana",
      description: "Financial assistance and maintenance grants for Backward Class students pursuing post-matric studies within or outside Haryana.",
      type: "Government",
      eligibility: {
        minPercentage: 45.0,
        eligibleCourses: ["Class 11", "Class 12", "ITI", "Diploma", "Undergraduate", "Postgraduate"],
        eligibleCategories: ["BC", "OBC"],
        maxFamilyIncome: { min: null, max: 180000, currency: "INR" },
        genderCriteria: "All"
      },
      financials: {
        coverageType: "Partial Tuition",
        amountValue: { min: 3000, max: 30000, currency: "INR" },
        durationYears: 1
      },
      deadline: "2026-10-31",
      applicationUrl: "https://harchhatravratti.highereduhry.ac.in/",
      documentsRequired: [
        "Parivar Pehchan Patra (PPP) Family ID",
        "BC Caste Certificate",
        "Income Certificate",
        "Haryana Residence Proof",
        "Bank Passbook"
      ],
      isNationwide: false
    },
    {
      id: "haryana-kalpana-chawla-2026",
      title: "Kalpana Chawla Chhatravratti Yojna for Girls",
      provider: "Department of Higher Education, Govt of Haryana",
      description: "Merit scholarship intended to encourage girl students to pursue higher technical education, specifically engineering degree streams.",
      type: "Merit-Based",
      eligibility: {
        minPercentage: 75.0,
        eligibleCourses: ["B.E./B.Tech", "Engineering Diploma"],
        eligibleCategories: ["Haryana Resident"],
        maxFamilyIncome: null,
        genderCriteria: "Female"
      },
      financials: {
        coverageType: "One-Time Grant",
        amountValue: { min: 15000, max: 51000, currency: "INR" },
        durationYears: 1
      },
      deadline: "2026-08-10",
      applicationUrl: "https://harchhatravratti.highereduhry.ac.in/",
      documentsRequired: [
        "Parivar Pehchan Patra (PPP)",
        "Class 12 Marksheet",
        "Engineering Admission Slip/Bonafide Certificate",
        "Bank Account Details"
      ],
      isNationwide: false
    },
    {
      id: "haryana-ambedkar-medhavi-2026",
      title: "Dr. Ambedkar Medhavi Chhatra Sanshodit Yojana",
      provider: "Welfare of Scheduled Castes and Backward Classes Department, Govt of Haryana",
      description: "Incentive cash awards for meritorious students from SC, BC, and EWS backgrounds achieving high marks in matriculation and intermediate levels.",
      type: "Merit-Based",
      eligibility: {
        minPercentage: 70.0,
        eligibleCourses: ["Class 11 Entry", "Undergraduate Entry", "Polytechnic"],
        eligibleCategories: ["SC", "BC", "EWS"],
        maxFamilyIncome: { min: null, max: 400000, currency: "INR" },
        genderCriteria: "All"
      },
      financials: {
        coverageType: "One-Time Grant",
        amountValue: { min: 8000, max: 12000, currency: "INR" },
        durationYears: 1
      },
      deadline: "2026-11-15",
      applicationUrl: "https://harchhatravratti.highereduhry.ac.in/",
      documentsRequired: [
        "Parivar Pehchan Patra (PPP)",
        "Board Exam Marksheet",
        "Caste/Income Certificate",
        "Aadhaar-linked Bank Passbook"
      ],
      isNationwide: false
    },
    {
      id: "haryana-pose-scholarship-2026",
      title: "Promotion of Science Education (POSE) Scholarship Scheme",
      provider: "Department of Science and Technology, Govt of Haryana",
      description: "Encourages brilliant youth to pursue basic science courses (B.Sc./M.Sc.) by offering regular annual stipends during their degree tenure.",
      type: "Merit-Based",
      eligibility: {
        minPercentage: 85.0,
        eligibleCourses: ["B.Sc. (Basic Sciences)", "M.Sc. (Integrated/Postgraduate Science)"],
        eligibleCategories: ["Haryana Resident"],
        maxFamilyIncome: null,
        genderCriteria: "All"
      },
      financials: {
        coverageType: "Stipend",
        amountValue: { min: 12000, max: 60000, currency: "INR" },
        durationYears: 3
      },
      deadline: "2026-09-30",
      applicationUrl: "https://dst.hry.gov.in/",
      documentsRequired: [
        "Class 12 Science Stream Marksheet",
        "Admission Proof in B.Sc/M.Sc Basic Science course",
        "Bonafide Student Certificate",
        "Bank Details"
      ],
      isNationwide: false
    }
  ]
};