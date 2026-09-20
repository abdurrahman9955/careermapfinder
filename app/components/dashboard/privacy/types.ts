import { LucideIcon } from 'lucide-react';

export interface PrivacySection {
  id: string;
  title: string;
  icon: LucideIcon;
  summary: string;
  content: {
    intro?: string;
    bulletPoints?: string[];
    subsections?: {
      title: string;
      body: string;
      list?: string[];
    }[];
    callout?: {
      title: string;
      text: string;
      type: 'info' | 'warning' | 'security';
    };
  };
}

export interface PrivacyMetaData {
  lastUpdated: string;
  effectiveDate: string;
  version: string;
  jurisdictions: string[];
}