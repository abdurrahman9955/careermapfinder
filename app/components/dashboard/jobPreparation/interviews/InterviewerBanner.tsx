'use client';

import React from 'react';
import { InterviewerStyle } from '@/app/utils/job-preparation/mock/interview';
import { ShieldAlert, Award, HeartHandshake, UserCheck } from 'lucide-react';

interface InterviewerBannerProps {
  style: InterviewerStyle;
  isDark: boolean;
}

export const InterviewerBanner: React.FC<InterviewerBannerProps> = ({ style, isDark }) => {
  const getBannerDetails = () => {
    switch (style) {
      case 'TOP_TECH_ASSESSOR':
        return {
          icon: <Award className="w-5 h-5 text-amber-400" />,
          title: 'Top-Tech Assessor (FAANG Grade)',
          badge: 'High Precision & Big-O Focus',
          description: 'Focuses heavily on optimal algorithm complexity, memory leaks, and edge-case handling.',
          styleBg: isDark ? 'bg-amber-950/40 border-amber-800/60 text-amber-300' : 'bg-amber-50 border-amber-200 text-amber-900',
        };
      case 'STRICT_TECH_LEAD':
        return {
          icon: <ShieldAlert className="w-5 h-5 text-rose-400" />,
          title: 'Strict Tech Lead',
          badge: 'Challenging & Uncompromising',
          description: 'Pokes holes in architectural trade-offs and expects production-level code cleanly written.',
          styleBg: isDark ? 'bg-rose-950/40 border-rose-800/60 text-rose-300' : 'bg-rose-50 border-rose-200 text-rose-900',
        };
      case 'SUPPORTIVE_COACH':
        return {
          icon: <HeartHandshake className="w-5 h-5 text-emerald-400" />,
          title: 'Supportive Coach',
          badge: 'Encouraging & Constructive',
          description: 'Offers structured hints and focuses on your problem-solving process.',
          styleBg: isDark ? 'bg-emerald-950/40 border-emerald-800/60 text-emerald-300' : 'bg-emerald-50 border-emerald-200 text-emerald-900',
        };
      case 'TALENT_ACQUISITION':
      default:
        return {
          icon: <UserCheck className="w-5 h-5 text-indigo-400" />,
          title: 'Talent Acquisition Manager',
          badge: 'Culture Fit & STAR Focus',
          description: 'Evaluates soft skills, leadership examples, and team alignment.',
          styleBg: isDark ? 'bg-indigo-950/40 border-indigo-800/60 text-indigo-300' : 'bg-indigo-50 border-indigo-200 text-indigo-900',
        };
    }
  };

  const details = getBannerDetails();

  return (
    <div className={`p-4 rounded-2xl border flex items-start gap-3.5 transition-all 
    ${isDark ? 'border-slate-700 bg-slate-900' : ' border-slate-300 '}`}>
      {/* <div className="p-2 rounded-xl bg-current/10 shrink-0 mt-0.5">{details.icon}</div> */}
      <div className="space-y-0.5">
        <div className="flex flex-col items-cente gap-2">
          <span className="font-bold text-sm leading-tight">{details.title}</span>
           
          <span className="text-[10px] font-extrabold px-2 py-0.5 w-auto rounded-full 
          border bg-current/10 uppercase tracking-wider">
            {details.badge}
          </span>

        </div>
        <p className="text-xs opacity-80 leading-relaxed">{details.description}</p>
      </div>
    </div>
  );
};