
export type ScholarshipType = 'Government' | 'Institutional' | 'Private' | 'Merit-Based' | 'Need-Based' | 'Welfare-Based';

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


export const nationalLevelScholarships: ScholarshipBatch = {
  id: "india_national_scholarships",
  country: "India",
  state: "Pan-India (All States)",
  scholarships: [
    {
      id: "central-sector-scheme-college-university-2026",
      title: "Central Sector Scheme of Scholarship for College and University Students",
      provider: "Department of Higher Education, Government of India",
      description: "Financial support to meritorious students from low-income families to meet a part of their day-to-day expenses while pursuing higher studies.",
      type: "Merit-Based",
      eligibility: {
        minPercentage: 80.0, 
        eligibleCourses: ["Undergraduate Degree", "Postgraduate Degree", "Professional Courses"],
        eligibleCategories: ["All Categories"],
        maxFamilyIncome: { min: null, max: 450000, currency: "INR" },
        genderCriteria: "All"
      },
      financials: {
        coverageType: "Stipend",
        amountValue: { min: 12000, max: 20000, currency: "INR" },
        durationYears: 3
      },
      deadline: "2026-10-31",
      applicationUrl: "https://scholarships.gov.in/",
      documentsRequired: [
        "Aadhaar Card linked with bank account",
        "Class 12 Board Marksheet",
        "Income Certificate issued by authorized govt official",
        "Bank Passbook with active IFSC",
        "Bonafide Student Certificate from institution"
      ],
      isNationwide: true
    },
    {
      id: "aicte-pragati-scholarship-girl-2026",
      title: "AICTE Pragati Scholarship Scheme for Girl Students (Technical Degree/Diploma)",
      provider: "All India Council for Technical Education (AICTE)",
      description: "Minds-and-means scholarship aiming to encourage female participation in technical education (Engineering/Diploma) by covering tuition allowances and contingencies.",
      type: "Government",
      eligibility: {
        minPercentage: 60.0,
        eligibleCourses: ["AICTE Approved Technical Degree (B.E/B.Tech)", "AICTE Approved Technical Diploma"],
        eligibleCategories: ["All Categories (Female Only)"],
        maxFamilyIncome: { min: null, max: 800000, currency: "INR" },
        genderCriteria: "Female"
      },
      financials: {
        coverageType: "Full Tuition",
        amountValue: { min: 50000, max: 50000, currency: "INR" },
        durationYears: 4
      },
      deadline: "2026-10-31",
      applicationUrl: "https://scholarships.gov.in/",
      documentsRequired: [
        "Class 10 and 12/Diploma Marksheets",
        "Admission letter issued by Central/Stateized Admission Authority",
        "Tuition Fee Receipt",
        "Family Income Certificate",
        "Bank Passbook in student's name (Aadhaar seeded)"
      ],
      isNationwide: true
    },
    {
      id: "aicte-saksham-scholarship-abled-2026",
      title: "AICTE Saksham Scholarship Scheme for Specially Abled Students",
      provider: "All India Council for Technical Education (AICTE)",
      description: "Provides financial backing to differently-abled students pursuing technical degree or diploma courses at recognized technical institutions.",
      type: "Welfare-Based",
      eligibility: {
        minPercentage: 60.0,
        eligibleCourses: ["Technical Degree", "Technical Diploma"],
        eligibleCategories: ["Differently Abled (Disability not less than 40%)"],
        maxFamilyIncome: { min: null, max: 800000, currency: "INR" },
        genderCriteria: "All"
      },
      financials: {
        coverageType: "Full Tuition",
        amountValue: { min: 50000, max: 50000, currency: "INR" },
        durationYears: 4
      },
      deadline: "2026-10-31",
      applicationUrl: "https://scholarships.gov.in/",
      documentsRequired: [
        "Disability Certificate issued by Competent Medical Authority",
        "Current Academic Year Fee Receipt",
        "Admission Letter",
        "Income Certificate",
        "Aadhaar Card and Bank Account Details"
      ],
      isNationwide: true
    },
    {
      id: "pm-yasasvi-top-class-education-obc-2026",
      title: "PM YASASVI Central Sector Scheme of Top Class Education in College for OBC, EBC and DNT",
      provider: "Department of Social Justice and Empowerment, Govt of India",
      description: "Full financial coverage for tuition and living expenses for OBC, EBC, and DNT students studying in designated top-tier national institutions (IITs, IIMs, AIIMS, etc.).",
      type: "Government",
      eligibility: {
        minPercentage: 60.0,
        eligibleCourses: ["Undergraduate/Postgraduate in Notified Top Class Institutions"],
        eligibleCategories: ["OBC", "EBC", "DNT"],
        maxFamilyIncome: { min: null, max: 2500000, currency: "INR" },
        genderCriteria: "All"
      },
      financials: {
        coverageType: "Full Tuition",
        amountValue: { min: 50000, max: 200000, currency: "INR" },
        durationYears: 1
      },
      deadline: "2026-10-31",
      applicationUrl: "https://scholarships.gov.in/",
      documentsRequired: [
        "OBC / EBC / DNT Category Certificate",
        "Income Certificate",
        "Fee structure certified by the Institute",
        "Entrance examination scorecard (JEE/NEET/CAT etc.)",
        "Aadhaar Card and Bank Passbook"
      ],
      isNationwide: true
    },
    {
      id: "national-means-cum-merit-scholarship-2026",
      title: "National Means-cum-Merit Scholarship Scheme (NMMSS)",
      provider: "Department of School Education and Literacy, Govt of India",
      description: "Awarded to meritorious students of economically weaker sections to arrest dropouts at class 8 level and encourage them to continue secondary schooling up to class 12.",
      type: "Merit-Based",
      eligibility: {
        minPercentage: 55.0, 
        eligibleCourses: ["Class 9", "Class 10", "Class 11", "Class 12"],
        eligibleCategories: ["Economically Weaker Section"],
        maxFamilyIncome: { min: null, max: 350000, currency: "INR" },
        genderCriteria: "All"
      },
      financials: {
        coverageType: "Stipend",
        amountValue: { min: 12000, max: 12000, currency: "INR" },
        durationYears: 1
      },
      deadline: "2026-10-31",
      applicationUrl: "https://scholarships.gov.in/",
      documentsRequired: [
        "Class 8 Marksheet",
        "Income Certificate",
        "Category Certificate (if applicable)",
        "Bank account details linked to Aadhaar"
      ],
      isNationwide: true
    },
    {
      id: "ugc-post-graduate-merit-scholarship-2026",
      title: "National Scholarship for Post Graduate Studies",
      provider: "University Grants Commission (UGC)",
      description: "Supports students who have secured admission to first-year postgraduate general courses in universities and colleges with recognized status.",
      type: "Merit-Based",
      eligibility: {
        minPercentage: 55.0, 
        eligibleCourses: ["Postgraduate General Streams (M.A., M.Sc., M.Com.)"],
        eligibleCategories: ["All Categories"],
        maxFamilyIncome: null,
        genderCriteria: "All"
      },
      financials: {
        coverageType: "Stipend",
        amountValue: { min: 180000, max: 180000, currency: "INR" }, 
        durationYears: 2
      },
      deadline: "2026-10-31",
      applicationUrl: "https://scholarships.gov.in/",
      documentsRequired: [
        "Undergraduate Degree Marksheet",
        "Postgraduate Admission Slip / Bonafide Certificate",
        "Aadhaar Number",
        "Bank Details"
      ],
      isNationwide: true
    },
    {
      id: "disabilities-top-class-education-2026",
      title: "Scholarship for Top Class Education for Students with Disabilities",
      provider: "Department of Empowerment of Persons with Disabilities, Govt of India",
      description: "Aims to recognize and promote quality education amongst students with disabilities by funding studies in premier notified institutions across India.",
      type: "Welfare-Based",
      eligibility: {
        minPercentage: 50.0,
        eligibleCourses: ["Degree and Post Graduate Diploma in Notified Institutes"],
        eligibleCategories: ["Persons with Benchmark Disabilities (40%+ disability)"],
        maxFamilyIncome: { min: null, max: 800000, currency: "INR" },
        genderCriteria: "All"
      },
      financials: {
        coverageType: "Full Tuition",
        amountValue: { min: 50000, max: 200000, currency: "INR" },
        durationYears: 1
      },
      deadline: "2026-10-31",
      applicationUrl: "https://scholarships.gov.in/",
      documentsRequired: [
        "Unique Disability ID (UDID) Card / Disability Certificate",
        "Fee Receipt & Non-refundable charges proof",
        "Income Certificate",
        "Previous Academic Marksheets"
      ],
      isNationwide: true
    },
    {
      id: "pmss-capf-assam-rifles-2026",
      title: "Prime Minister's Scholarship Scheme for Central Armed Police Forces and Assam Rifles",
      provider: "Ministry of Home Affairs, Government of India",
      description: "Encourages higher technical and professional education for the dependent wards of ex-paramilitary personnel, retired/serving CAPFs, and Assam Rifles members.",
      type: "Merit-Based",
      eligibility: {
        minPercentage: 60.0, 
        eligibleCourses: ["Professional Technical Degree Courses (Engineering, Medical, Dental, MBA, etc.)"],
        eligibleCategories: ["Wards of CAPFs / Assam Rifles / State Police Martyrs"],
        maxFamilyIncome: null,
        genderCriteria: "All"
      },
      financials: {
        coverageType: "Stipend",
        amountValue: { min: 30000, max: 36000, currency: "INR" }, // 3000/mo for girls, 2500/mo for boys (scaled annually)
        durationYears: 1
      },
      deadline: "2026-10-31",
      applicationUrl: "https://scholarships.gov.in/",
      documentsRequired: [
        "PPO / Service Certificate issued by the Commandant/Head of Office",
        "Certificate of Category (Wards of deceased/ex-servicemen)",
        "Qualifying exam mark sheet",
        "Bank account passbook linked with Aadhaar"
      ],
      isNationwide: true
    },
        {
      id: "idfc-first-bank-mba-scholarship-2026",
      title: "IDFC FIRST Bank MBA Scholarship",
      provider: "IDFC FIRST Bank",
      description: "Need-based corporate scholarship designed to assist meritorious students admitted into full-time MBA programs across premier Indian business schools who face financial barriers.",
      type: "Private",
      eligibility: {
        minPercentage: 50.0,
        eligibleCourses: ["2-Year Full-Time MBA Program", "PGDM Program Equivalent"],
        eligibleCategories: ["Indian Nationals"],
        maxFamilyIncome: { min: null, max: 600000, currency: "INR" },
        genderCriteria: "All"
      },
      financials: {
        coverageType: "Partial Tuition",
        amountValue: { min: 100000, max: 200000, currency: "INR" },
        durationYears: 2
      },
      deadline: "2026-08-08",
      applicationUrl: "https://www.idfcfirstbank.com/csr-activities/educational-initiatives/mba-scholarship",
      documentsRequired: [
        "Aadhaar-linked Mobile Number",
        "Official B-School Admission Offer Letter",
        "Gross Family Income Proof / ITR / Salary Certificate",
        "Academic Transcripts of Undergraduate Degree",
        "Fee Payment Receipts"
      ],
      isNationwide: true
    },
    {
      id: "iet-india-scholarship-award-2026",
      title: "IET India Scholarship Award",
      provider: "The Institution of Engineering and Technology (IET)",
      description: "Prestigious merit-based national competition rewarding tech innovation, academic brilliance, and leadership among undergraduate engineering students in India.",
      type: "Merit-Based",
      eligibility: {
        minPercentage: 60.0,
        eligibleCourses: ["B.E. / B.Tech (All AICTE/UGC Approved Engineering Branches)"],
        eligibleCategories: ["All Engineering Undergraduates in India"],
        maxFamilyIncome: null,
        genderCriteria: "All"
      },
      financials: {
        coverageType: "One-Time Grant",
        amountValue: { min: 60000, max: 600000, currency: "INR" },
        durationYears: 1
      },
      deadline: "2026-06-15",
      applicationUrl: "https://engb.theiet.in/india-scholarship/index.cfm",
      documentsRequired: [
        "College ID Card",
        "Semesters Grade Sheets / Transcripts (No active backlogs)",
        "Proof of AICTE/UGC Institution Recognition",
        "Co-curricular and Extracurricular Portfolio Certificates"
      ],
      isNationwide: true
    },
  ]
};