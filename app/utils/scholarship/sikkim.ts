
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
// 21. SIKKIM SCHOLARSHIPS
// ==========================================
export const sikkimScholarships: ScholarshipBatch = {
  id: "sikkim_scholarships",
  country: "India",
  state: "Sikkim",
  scholarships: [
    {
      id: "sikkim-hcm-merit-scholarship-2026",
      title: "Hon'ble Chief Minister's Merit Scholarship Scheme (HCMMSS)",
      provider: "Human Resource Development Department, Govt of Sikkim",
      description: "Prestigious merit scholarship providing comprehensive education financing for top-performing local students to study in premier public/private national boarding schools and colleges.",
      type: "Merit-Based",
      eligibility: {
        minPercentage: 85.0,
        eligibleCourses: ["School Level Board Grades", "Undergraduate Entry"],
        eligibleCategories: ["Sikkim Domicile (COI Holder)"],
        maxFamilyIncome: null,
        genderCriteria: "All"
      },
      financials: {
        coverageType: "Full Tuition",
        amountValue: { min: 50000, max: 150000, currency: "INR" },
        durationYears: 1
      },
      deadline: "2026-09-30",
      applicationUrl: "https://scholarships.sikkim.gov.in/",
      documentsRequired: [
        "Certificate of Identification (COI)",
        "Academic Merit Board Marksheet",
        "Institution Fee & Admission Structure",
        "Bank Details"
      ],
      isNationwide: false
    },
    {
      id: "sikkim-general-post-matric-2026",
      title: "Sikkim State General Post-Matric Scholarship",
      provider: "Education Department, Government of Sikkim",
      description: "State-funded merit-cum-means financial assistance for local students pursuing higher secondary and college degree paths inside or outside Sikkim.",
      type: "Merit-Based",
      eligibility: {
        minPercentage: 60.0,
        eligibleCourses: ["Class 11 & 12", "Undergraduate Degree", "Postgraduate Studies"],
        eligibleCategories: ["Sikkim Domicile"],
        maxFamilyIncome: { min: null, max: 150000, currency: "INR" },
        genderCriteria: "All"
      },
      financials: {
        coverageType: "Stipend",
        amountValue: { min: 3000, max: 15000, currency: "INR" },
        durationYears: 1
      },
      deadline: "2026-09-30",
      applicationUrl: "https://scholarships.sikkim.gov.in/",
      documentsRequired: [
        "COI (Certificate of Identification)",
        "Income Certificate issued by competent authority",
        "Previous class marksheets",
        "Bank Account Details"
      ],
      isNationwide: false
    }
  ]
};