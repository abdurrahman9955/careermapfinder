export type UniversityType = 'Public' | 'Private' | 'Deemed' | 'Central' | 'State';

export interface LocationInfo {
  city: string;
  state: string;
  address: string;
}

export interface RankingInfo {
  indiaRank: number | null;
  globalRank: number | null;
  nirfRank: number | null;
}

export interface RangeValue {
  min: number | null;
  max: number | null;
  currency?: string;
}

export interface HostelInfo {
  available: boolean;
  costPerYear: number | null;
}

export interface FeeStructure {
  tuitionPerYear: RangeValue;
  hostel: HostelInfo;
}

export interface AdmissionProcess {
  undergraduate: string[];
  postgraduate: string[];
}

export interface RequirementsInfo {
  minPercentage: string;
  entranceExams: string[];
  documentsRequired: string[];
}

export interface AgeLimit {
  min: number | null;
  max: number | null;
}

export interface PlacementInfo {
  averageSalary: number | null; // Value in INR
  highestSalary: number | null; // Value in INR
  topRecruiters: string[];
}

export interface University {
  id: string;
  name: string;
  shortName: string;
  description: string;
  type: UniversityType;
  establishedYear: number;
  location: LocationInfo;
  website: string;
  affiliations: string[];
  ranking: RankingInfo;
  acceptanceRate: number | null;
  coursesOffered: string[];
  admissionProcess: AdmissionProcess;
  requirements: RequirementsInfo;
  ageLimit: AgeLimit;
  fees: FeeStructure;
  scholarships: string[];
  placements: PlacementInfo;
  facilities: string[];
  notablePoints: string[];
}

export interface StateUniversityBatch {
  id: string;
  country: string;
  state: string;
  totalInstitutionsInBatch: number;
  hasMoreBatches: boolean;
  universities: University[];
}
