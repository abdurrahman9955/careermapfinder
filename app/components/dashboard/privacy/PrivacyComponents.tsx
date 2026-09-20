'use client';

import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  AlertCircle, 
  ChevronRight, 
  FileText, 
  Clock, 
  Globe,
  CheckCircle2
} from 'lucide-react';
import { PrivacySection, PrivacyMetaData } from './types';

interface PrivacyHeaderProps {
  meta: PrivacyMetaData;
  isDark: boolean;
}

export const PrivacyHeader: React.FC<PrivacyHeaderProps> = ({ meta, isDark }) => {
  return (
    <div className={`border-b pb-4 transition-colors duration-200 ${isDark ? 'border-slate-700' : 'border-slate-300'}`}>
      
      
      <h1 className={`text-xl sm:text-3xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
        Privacy Policy & Data Ethics
      </h1>
      <p className={`mt-3 text-base sm:text-md max-w-7xl leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
        CareerMapFinder is committed to protecting student, guardian, and institutional data. This policy details how we collect, process, encrypt, and safeguard academic records, regional metrics, and AI assessment data across our platform.
      </p>
      
      <div className="flex flex-wrap items-center gap-3 mt-4">
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase ${
          isDark ? 'bg-indigo-950/80 text-indigo-400 border border-indigo-800/50' : 'bg-indigo-50 text-indigo-700 border border-indigo-200'
        }`}>
          <ShieldCheck className="w-3.5 h-3.5" />
          Data Protection & Legal Governance
        </span>
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${
          isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-600'
        }`}>
          <Clock className="w-3.5 h-3.5" />
          Updated: {meta.lastUpdated}
        </span>
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${
          isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-600'
        }`}>
          <Globe className="w-3.5 h-3.5" />
          v{meta.version} Global Standard
        </span>
      </div>
    </div>
  );
};

interface PrivacySidebarProps {
  sections: PrivacySection[];
  activeSection: string;
  onSelectSection: (id: string) => void;
  isDark: boolean;
}

export const PrivacySidebar: React.FC<PrivacySidebarProps> = ({
  sections,
  activeSection,
  onSelectSection,
  isDark
}) => {
  return (
    <nav className="space-y-1.5 sticky top-24">
      <p className={`text-xs font-bold uppercase tracking-wider px-3 mb-3 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
        Table of Contents
      </p>
      {sections.map((section) => {
        const Icon = section.icon;
        const isActive = activeSection === section.id;
        return (
          <button
            key={section.id}
            onClick={() => onSelectSection(section.id)}
            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs 
              sm:text-sm font-medium transition-all duration-150 text-left ${
              isActive
                ? isDark
                  ? 'bg-indigo-600/20 text-indigo-400 border-l-4 border-indigo-500'
                  : 'bg-indigo-50 text-indigo-700 border-l-4 border-indigo-600'
                : isDark
                ? 'text-slate-400 hover:bg-slate-800/80 hover:text-slate-200'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <div className="flex items-center gap-2.5 truncate">
              <Icon className={`w-4 h-4 shrink-0 ${
                isActive 
                  ? isDark ? 'text-indigo-400' : 'text-indigo-600' 
                  : isDark ? 'text-slate-500' : 'text-slate-400'
              }`} />
              <span className="truncate">{section.title}</span>
            </div>
            <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isActive ? 'rotate-90 text-indigo-500' : 'opacity-0'}`} />
          </button>
        );
      })}
    </nav>
  );
};

interface CalloutProps {
  title: string;
  text: string;
  type: 'info' | 'warning' | 'security';
  isDark: boolean;
}

export const PrivacyCallout: React.FC<CalloutProps> = ({ title, text, type, isDark }) => {
  const getStyles = () => {
    switch (type) {
      case 'warning':
        return {
          bg: isDark ? 'bg-amber-950/40 border-amber-800/50 text-amber-200' : 'bg-amber-50 border-amber-200 text-amber-900',
          icon: AlertCircle,
          iconColor: isDark ? 'text-amber-400' : 'text-amber-600',
        };
      case 'security':
        return {
          bg: isDark ? 'bg-emerald-950/40 border-emerald-800/50 text-emerald-200' : 'bg-emerald-50 border-emerald-200 text-emerald-900',
          icon: Lock,
          iconColor: isDark ? 'text-emerald-400' : 'text-emerald-600',
        };
      case 'info':
      default:
        return {
          bg: isDark ? 'bg-indigo-950/40 border-indigo-800/50 text-indigo-200' : 'bg-indigo-50 border-indigo-200 text-indigo-900',
          icon: ShieldCheck,
          iconColor: isDark ? 'text-indigo-400' : 'text-indigo-600',
        };
    }
  };

  const style = getStyles();
  const IconComponent = style.icon;

  return (
    <div className={`mt-6 p-4 rounded-xl border flex items-start gap-3.5 ${style.bg}`}>
      <IconComponent className={`w-5 h-5 shrink-0 mt-0.5 ${style.iconColor}`} />
      <div>
        <h4 className="text-sm font-semibold mb-1">{title}</h4>
        <p className="text-xs sm:text-sm leading-relaxed opacity-90">{text}</p>
      </div>
    </div>
  );
};

interface PrivacySectionCardProps {
  section: PrivacySection;
  isDark: boolean;
}

export const PrivacySectionCard: React.FC<PrivacySectionCardProps> = ({ section, isDark }) => {
  const Icon = section.icon;

  return (
    <section 
      id={section.id} 
      className={`p-6 rounded-2xl border transition-colors duration-200 ${
        isDark ? 'bg-slate-900/60 border-slate-700' : 'bg-white border-slate-300 shadow-sm'
      }`}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className={`p-2.5 rounded-xl ${
          isDark ? 'bg-indigo-950 text-indigo-400 border border-indigo-800/50' 
          : 'bg-indigo-50 text-indigo-600 border border-indigo-100'
        }`}>
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <h2 className={`text-sm sm:text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
            {section.title}
          </h2>
          <p className={`text-xs sm:text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            {section.summary}
          </p>
        </div>
      </div>

      <div className="space-y-6 mt-6">
        {section.content.intro && (
          <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
            {section.content.intro}
          </p>
        )}

        {section.content.bulletPoints && section.content.bulletPoints.length > 0 && (
          <ul className="space-y-2.5">
            {section.content.bulletPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm">
                <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`} />
                <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{point}</span>
              </li>
            ))}
          </ul>
        )}

        {section.content.subsections && (
          <div className="space-y-6 border-t pt-6 border-slate-800/30">
            {section.content.subsections.map((sub, idx) => (
              <div key={idx} className="space-y-2">
                <h3 className={`text-base font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                  {sub.title}
                </h3>
                <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {sub.body}
                </p>
                {sub.list && (
                  <ul className="list-disc list-inside space-y-1.5 pl-2 pt-1 text-xs sm:text-sm">
                    {sub.list.map((item, i) => (
                      <li key={i} className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}

        {section.content.callout && (
          <PrivacyCallout
            title={section.content.callout.title}
            text={section.content.callout.text}
            type={section.content.callout.type}
            isDark={isDark}
          />
        )}
      </div>
    </section>
  );
};