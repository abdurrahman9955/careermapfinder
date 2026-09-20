'use client';

import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Database, 
  BrainCircuit, 
  Users, 
  Lock, 
  Share2, 
  Cookie, 
  UserCheck, 
  Mail,
  FileSpreadsheet
} from 'lucide-react';
import { useTheme } from '../../../context/ThemeContext';
import { PrivacySection, PrivacyMetaData } from './types';
import { PrivacyHeader, PrivacySidebar, PrivacySectionCard } from './PrivacyComponents';

const PRIVACY_META: PrivacyMetaData = {
  lastUpdated: 'September 20, 2026',
  effectiveDate: 'January 1, 2026',
  version: '2.4.0',
  jurisdictions: ['GDPR (EU/UK)', 'COPPA (US)', 'FERPA Compliant', 'NDPA (Nigeria)', 'DPDP (India)'],
};

const PRIVACY_SECTIONS: PrivacySection[] = [
  {
    id: 'information-collection',
    title: '1. Information We Collect',
    icon: Database,
    summary: 'Academic records, regional stream selections, and aptitude profiler data.',
    content: {
      intro: 'To construct accurate 5-year academic blueprints, cutoff analytics, and metropolitan lifestyle forecasts, CareerMapFinder processes distinct categories of personal and educational information.',
      subsections: [
        {
          title: 'Directly Provided Information',
          body: 'Information explicitly supplied when registering, generating reports, or taking exams:',
          list: [
            'Account Credentials: Full name, contact email address, age range, and state/province of residence.',
            'Academic Profile: Secondary school stream selections, grade level, entrance exam scores (SAT, ACT, regional entry tests), and target specializations.',
            'Financial Constraints & Budget Metrics: Student loan preferences, expected budget thresholds, and target study regions.',
            'Guardian Linkage: Parent or guardian email addresses provided to pair Dual Dashboards.'
          ]
        },
        {
          title: 'Automated Diagnostic & Behavioral Data',
          body: 'Data gathered during your interaction with our Career Discovery Services:',
          list: [
            'Aptitude & Quiz Profiler Responses: Analytical, creative, and administrative preference vectors generated during 10-minute diagnostic tests.',
            'Platform Interactions: Career map searches, salary comparator queries, cost-of-living calculations, and report downloads.',
            'Technical Metadata: IP address, device fingerprints, browser configurations, and session security logs.'
          ]
        }
      ],
      callout: {
        title: 'Zero High-Risk Personal Identifiers',
        text: 'CareerMapFinder never asks for or stores government ID numbers, detailed banking passwords, or raw biometric identifiers.',
        type: 'info'
      }
    }
  },
  {
    id: 'ai-processing',
    title: '2. AI & Algorithm Data Usage',
    icon: BrainCircuit,
    summary: 'How our AI engine evaluates aptitude and market trends without exposing identity.',
    content: {
      intro: 'Our AI Career Roadmap Generator and Match Engine convert user inputs into structured educational trajectories. We maintain strict ethical boundaries regarding AI processing.',
      subsections: [
        {
          title: 'Aptitude Mapping & Anonymization',
          body: 'When your profile is analyzed by our AI match models, all direct personal identifiers (such as email addresses and names) are stripped. The AI engine processes anonymized vectors consisting only of academic metrics, budget constraints, and region keys.'
        },
        {
          title: 'Model Training Policy',
          body: 'We do not sell, leak, or expose your private career exam answers or financial inputs to third-party public AI providers. Internal model updates rely on aggregated, de-identified cohort statistics.'
        }
      ],
      callout: {
        title: 'Algorithmic Safety Guarantee',
        text: 'AI recommendations are advisory. CareerMapFinder provides transparency scores alongside AI match outputs to ensure students and guardians retain full control over university choices.',
        type: 'security'
      }
    }
  },
  {
    id: 'student-guardian-privacy',
    title: '3. Minor & Guardian Privacy (K-12 & COPPA)',
    icon: Users,
    summary: 'Protections for secondary school students and dual guardian dashboard views.',
    content: {
      intro: 'Recognizing that students under 18 utilize CareerMapFinder to plan their academic transition, we implement elevated protection frameworks aligned with international minor privacy standards.',
      subsections: [
        {
          title: 'Dual Student & Guardian Pairing',
          body: 'When Dual Dashboards are activated, parents or guardians gain visibility into financial feasibility, academic safety margins, and verified pathway options. Guardian access requires explicit student authorization or verified parent invite link confirmation.'
        },
        {
          title: 'Under-16 Protections',
          body: 'Accounts registered for students under 16 default to restricted data-sharing settings. Marketing outreach is disabled, and regional entrance tracking alerts are sent solely to verified contact channels.'
        }
      ],
      callout: {
        title: 'Parental Consent & Erasure Rights',
        text: 'Parents or legal guardians may review, export, or request the immediate deletion of their child’s profile by contacting support@careermapfinder.com.',
        type: 'warning'
      }
    }
  },
  {
    id: 'data-sharing',
    title: '4. Information Sharing & Third Parties',
    icon: Share2,
    summary: 'Strict boundaries on institutional integrations and service providers.',
    content: {
      intro: 'CareerMapFinder does NOT sell student or user personal data to third-party marketing brokers or advertising networks.',
      subsections: [
        {
          title: 'Permitted Disclosures',
          body: 'Information is shared strictly under the following controlled conditions:',
          list: [
            'Institutional Partners: If you request direct application assistance or university guidance, profile data is transmitted solely to selected verified institutions.',
            'Infrastructure Providers: Secure cloud hosting (GCP/AWS), email transaction services, and encrypted database infrastructure operating under strict Data Processing Agreements (DPAs).',
            'Legal & Regulatory Requirements: When required by law or binding governmental court order.'
          ]
        }
      ]
    }
  },
  {
    id: 'data-security',
    title: '5. Encryption & Security Infrastructure',
    icon: Lock,
    summary: 'Enterprise-grade encryption, database isolation, and security protocols.',
    content: {
      intro: 'We maintain enterprise-level security protocols to guard student transcripts, assessment scores, and budget planning metrics.',
      bulletPoints: [
        'TLS 1.3 encryption in transit across all desktop and mobile web connections.',
        'AES-256 encryption at rest for database records and generated PDF Career Map reports.',
        'Automated vulnerability scanning and strict role-based access control (RBAC) for platform engineers.',
        'Isolated tenant partitions for school and enterprise platform subscriptions.'
      ],
      callout: {
        title: 'Continuous Monitoring',
        text: 'Security logs are continuously audited to detect unauthorized access attempts and maintain 99.9% system availability.',
        type: 'security'
      }
    }
  },
  {
    id: 'cookies-tracking',
    title: '6. Cookies & Client-Side Caching',
    icon: Cookie,
    summary: 'Managing session state, user preferences, and theme choices.',
    content: {
      intro: 'CareerMapFinder utilizes localized storage and cookies to maintain your active session state, theme selections, and temporary exam progress.',
      subsections: [
        {
          title: 'Essential Session Cookies',
          body: 'Required for maintaining secure user sign-in, account tier verification (Basic, Plus, Pro), and theme preference persistence.'
        },
        {
          title: 'Analytics & Performance',
          body: 'First-party anonymized analytics measure platform performance, page load times, and feature usage to refine UI responsiveness.'
        }
      ]
    }
  },
  {
    id: 'user-rights',
    title: '7. Your Rights & Data Control',
    icon: UserCheck,
    summary: 'Exporting your career reports, requesting account deletion, and updating details.',
    content: {
      intro: 'Regardless of your geographical location, CareerMapFinder provides full access and management tools for your stored data.',
      bulletPoints: [
        'Right to Access & Export: Download a copy of your complete career roadmap history, saved cutoffs, and exam results.',
        'Right to Rectification: Correct inaccurate academic marks, target states, or stream preferences directly from your account dashboard.',
        'Right to Erasure (Right to be Forgotten): Delete your account and associated assessment history permanently.',
        'Opt-Out of Communications: Unsubscribe from regional entrance testing alerts and news updates in one click.'
      ]
    }
  },
  {
    id: 'contact-governance',
    title: '8. Legal Contact & Governance',
    icon: Mail,
    summary: 'Contact details for our Data Protection Officer and official address.',
    content: {
      intro: 'For questions regarding this Privacy Policy, compliance inquiries, or data erasure requests, please contact our legal and privacy team.',
      subsections: [
        {
          title: 'Data Protection Officer (DPO)',
          body: 'Email: support@careermapfinder.com | Subject: Privacy & Data Protection Inquiry'
        },
        {
          title: 'Global Headquarters',
          body: 'CareerMapFinder Platform Ltd.\nBengaluru Office, Karnataka, India'
        }
      ]
    }
  }
];

export default function PrivacyPolicyPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [activeSection, setActiveSection] = useState<string>(PRIVACY_SECTIONS[0].id);

  const handleSelectSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 90; // Adjust for sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
     
      <div className="max-w-7xl mx-auto">
       
        <PrivacyHeader meta={PRIVACY_META} isDark={isDark} />
        
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-1 gap-8 items-start">
         
          <div className="lg:col-span-8 xl:col-span-9 space-y-6">
            {PRIVACY_SECTIONS.map((section) => (
              <PrivacySectionCard
                key={section.id}
                section={section}
                isDark={isDark}
              />
            ))}

            {/* Bottom Support Callout */}
            <div className={`p-6 sm:p-8 rounded-2xl border text-center ${
              isDark ? 'bg-indigo-950/30 border-indigo-700' : 'bg-indigo-50/60 border-indigo-300'
            }`}>
              <ShieldCheck className={`w-10 h-10 mx-auto mb-3 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`} />
              <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Have Questions Regarding Your Data?
              </h3>
              <p className={`mt-2 text-xs sm:text-sm max-w-xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Our data privacy team responds to all inquiries within 2 to 4 business hours. You can request a 
                full data export or account clearance at any time.
              </p>
              <div className="mt-5 flex justify-center gap-4">
                <a
                  href="/dashboard/contact"
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    isDark 
                      ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-900/30' 
                      : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-200'
                  }`}
                >
                  <Mail className="w-4 h-4" />
                  Contact Data Privacy Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}