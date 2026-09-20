'use client';

import React, { useState } from 'react';
import { 
  Scale, 
  UserCheck, 
  BrainCircuit, 
  CreditCard, 
  AlertCircle, 
  Briefcase, 
  Ban, 
  HelpCircle,
  Mail,
  ShieldCheck
} from 'lucide-react';
import { useTheme } from '../../../context/ThemeContext';
import { TermsSection, TermsMetaData } from './types';
import { TermsHeader, TermsSidebar, TermsSectionCard } from './TermsComponents';

const TERMS_META: TermsMetaData = {
  lastUpdated: 'September 20, 2026',
  effectiveDate: 'January 1, 2026',
  version: '2.4.0',
  bindingScope: ['Students', 'Guardians', 'Educational Institutions', 'Partner Entities'],
};

const TERMS_SECTIONS: TermsSection[] = [
  {
    id: 'acceptance-eligibility',
    title: '1. Acceptance & User Eligibility',
    icon: UserCheck,
    summary: 'Rules for account creation, student eligibility, and guardian consent.',
    content: {
      intro: 'By creating an account or accessing services on CareerMapFinder Platform Ltd., you confirm that you meet our eligibility conditions and agree to comply with these Terms.',
      subsections: [
        {
          title: 'Minimum Age & Minor Provisions',
          body: 'CareerMapFinder is built for academic students, parents, and secondary education counselors. Users under 18 years of age confirm that a parent or legal guardian has reviewed and agreed to these Terms on their behalf.'
        },
        {
          title: 'Account Verification',
          body: 'You are responsible for maintaining the confidentiality of your login credentials and for all activities occurring under your registered account.'
        }
      ],
      callout: {
        title: 'Parent & Guardian Mandate',
        text: 'Guardians utilizing the Dual Student & Guardian Dashboard must maintain active consent to access academic stress monitoring and budget feasibility features on behalf of minor students.',
        type: 'info'
      }
    }
  },
  {
    id: 'platform-services',
    title: '2. Scope of Services & AI Advisory',
    icon: BrainCircuit,
    summary: 'Nature of career discovery reports, exam cutoff analytics, and AI calculations.',
    content: {
      intro: 'CareerMapFinder provides AI-generated roadmaps, aptitude profilers, metropolitan cost-of-living calculations, and admission cutoff trackers.',
      subsections: [
        {
          title: 'Advisory Nature of Recommendations',
          body: 'All generated roadmaps, AI aptitude match scores, loan amortization models, and career compensation projections are provided purely for educational and advisory guidance.'
        },
        {
          title: 'Institutional Cutoffs & Fee Accuracy',
          body: 'While we continuously update regional cutoffs and institution fees based on verified government and university metrics, final entrance requirements remain subject to official university policies.'
        }
      ],
      callout: {
        title: 'Not an Official Admissions Guarantee',
        text: 'CareerMapFinder does not guarantee university acceptance, scholarship grants, or specific salary outcomes upon graduation.',
        type: 'warning'
      }
    }
  },
  {
    id: 'subscriptions-billing',
    title: '3. Subscription Tiers, Billing & Refunds',
    icon: CreditCard,
    summary: 'Terms governing Student Basic Free, Student Plus (499/mo), and Student Pro Suite (999/mo).',
    content: {
      intro: 'Selected services on CareerMapFinder require a paid tier subscription. All monetary transactions are processed through verified payment gateway partners.',
      subsections: [
        {
          title: 'Tier Allocation & Usage Credits',
          body: 'Tier caps (e.g., 1 report/exam for Student Basic vs 10 for Student Plus or Unlimited for Student Pro) reset at the start of each monthly billing cycle.',
          list: [
            'Student Basic Tier: Includes 1 Career Explorer Report, 1 Assessment, and 1 Job Prep tool.',
            'Student Plus Tier (499/month): Unlocks 10 Career Explorer Reports, 10 Exams & Assessments, 10 Job Prep tools, and Downloadable PDF Reports.',
            'Student Pro Tier (999/month): Unlocks Unlimited access to all tools, AI generators, and financial safety models.'
          ]
        },
        {
          title: 'Cancellation & Refund Policy',
          body: 'Subscriptions automatically renew monthly or annually unless canceled prior to the renewal date. Refund requests for unexpected billings must be submitted within 7 business days of charge.'
        }
      ]
    }
  },
  {
    id: 'acceptable-use',
    title: '4. Acceptable Use & Conduct',
    icon: Ban,
    summary: 'Restrictions on platform scraping, exam answer sharing, and automated bots.',
    content: {
      intro: 'You agree not to misuse CareerMapFinder or assist others in compromising the safety and integrity of the platform.',
      bulletPoints: [
        'Do not scrape, reverse-engineer, or extract career map datasets or algorithm models without explicit written permission.',
        'Do not submit automated bots, false assessment responses, or malicious inputs into the AI Career Generator.',
        'Do not share or resell downloadable PDF Career Map reports to unauthorized commercial aggregators.',
        'Do not attempt to bypass regional quota filters or impersonate other candidates.'
      ],
      callout: {
        title: 'Account Suspension Risk',
        text: 'Failure to adhere to conduct guidelines may lead to immediate suspension or termination of your account without refund.',
        type: 'security'
      }
    }
  },
  {
    id: 'intellectual-property',
    title: '5. Intellectual Property Rights',
    icon: Briefcase,
    summary: 'Ownership of career datasets, AI generation algorithms, and trademarks.',
    content: {
      intro: 'All underlying software, visual branding, regional cost algorithms, database schemas, and PDF report designs are the exclusive property of CareerMapFinder Platform Ltd.',
      subsections: [
        {
          title: 'User License Grant',
          body: 'Upon subscription, CareerMapFinder grants you a non-exclusive, non-transferable, revocable personal license to view, generate, and download your personal career blueprints.'
        }
      ]
    }
  },
  {
    id: 'disclaimer-limitation',
    title: '6. Disclaimer of Warranties & Liability',
    icon: AlertCircle,
    summary: 'Limitations of platform liability regarding external university updates.',
    content: {
      intro: 'CareerMapFinder is provided on an "AS IS" and "AS AVAILABLE" basis. We do not warrant uninterrupted, error-free platform access or instant university database synchronization.',
      subsections: [
        {
          title: 'Limitation of Financial Liability',
          body: 'To the maximum extent permitted by applicable law, CareerMapFinder Platform Ltd. shall not be liable for indirect, incidental, or consequential damages resulting from university admission delays, fee schedule modifications, or career decisions made using our reports.'
        }
      ]
    }
  },
  {
    id: 'governing-law',
    title: '7. Governing Law & Dispute Resolution',
    icon: Scale,
    summary: 'Jurisdiction and binding arbitration protocols.',
    content: {
      intro: 'These Terms are governed by and construed in accordance with applicable corporate and educational platform laws.',
      subsections: [
        {
          title: 'Arbitration & Direct Contact',
          body: 'In the event of any dispute or claim arising from platform usage, users agree to first contact support@careermapfinder.com for direct resolution before initiating formal legal proceedings.'
        }
      ]
    }
  },
  {
    id: 'contact-support',
    title: '8. Contact Information',
    icon: HelpCircle,
    summary: 'Reach out to our legal and support team regarding terms compliance.',
    content: {
      intro: 'For questions regarding these Terms, billing inquiries, or institutional onboarding agreements, please contact us.',
      subsections: [
        {
          title: 'Legal & Support Channels',
          body: 'Email: support@careermapfinder.com\nOffice Operating Hours: Mon - Fri: 8:00 AM - 8:00 PM UTC\nAddress: CareerMapFinder Platform Ltd., Bengaluru Office, Bengaluru, Karnataka, India'
        }
      ]
    }
  }
];

export default function TermsOfServicePage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [activeSection, setActiveSection] = useState<string>(TERMS_SECTIONS[0].id);

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
      isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      <div className="max-w-7xl mx-auto ">
       
        <TermsHeader meta={TERMS_META} isDark={isDark} />

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-1 gap-6 items-start">

          <div className="lg:col-span-8 xl:col-span-9 space-y-6">
            {TERMS_SECTIONS.map((section) => (
              <TermsSectionCard
                key={section.id}
                section={section}
                isDark={isDark}
              />
            ))}

            <div className={`p-6 sm:p-6 rounded-2xl border text-center ${
              isDark ? 'bg-indigo-950/30 border-indigo-700' : 'bg-indigo-50/60 border-indigo-300'
            }`}>
              <ShieldCheck className={`w-10 h-10 mx-auto mb-3 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`} />
              <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Need Legal or Subscription Clarifications?
              </h3>
              <p className={`mt-2 text-xs sm:text-sm max-w-xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Our education support and legal team is ready to assist you with subscription upgrades, 
                institutional onboarding, or terms questions.
              </p>
              <div className="mt-5 flex justify-center gap-4">
                <a
                  href="/dashboard/contact"
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm 
                    font-semibold transition-all ${
                    isDark 
                      ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-900/30' 
                      : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-200'
                  }`}
                >
                  <Mail className="w-4 h-4" />
                  Contact Legal Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}