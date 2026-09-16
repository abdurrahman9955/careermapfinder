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
  stateOrigin?: string;
}

export interface ScholarshipBatch {
  id: string;
  country: string;
  state: string;
  scholarships: Scholarship[];
}