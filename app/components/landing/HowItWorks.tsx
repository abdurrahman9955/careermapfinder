'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  UserCheck, 
  Cpu, 
  Route, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  ChevronRight,
  Clock
} from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '@/app/utils/landing-data';

// Map icon component fallback per step index
const stepIcons = [
  <UserCheck key="1" className="w-5 h-5 text-violet-400" />,
  <Cpu key="2" className="w-5 h-5 text-indigo-400" />,
  <Route key="3" className="w-5 h-5 text-cyan-400" />,
  <CheckCircle2 key="4" className="w-5 h-5 text-emerald-400" />,
];

// Color accent variations matching each step in sequence
const stepAccents = [
  {
    badgeBg: 'bg-violet-950/80 text-violet-300 border-violet-800/60',
    numberGradient: 'from-violet-400 to-indigo-400',
    glow: 'group-hover:border-violet-500/40 group-hover:shadow-violet-500/10',
    dotColor: 'bg-violet-400',
  },
  {
    badgeBg: 'bg-indigo-950/80 text-indigo-300 border-indigo-800/60',
    numberGradient: 'from-indigo-400 to-cyan-400',
    glow: 'group-hover:border-indigo-500/40 group-hover:shadow-indigo-500/10',
    dotColor: 'bg-indigo-400',
  },
  {
    badgeBg: 'bg-cyan-950/80 text-cyan-300 border-cyan-800/60',
    numberGradient: 'from-cyan-400 to-emerald-400',
    glow: 'group-hover:border-cyan-500/40 group-hover:shadow-cyan-500/10',
    dotColor: 'bg-cyan-400',
  },
  {
    badgeBg: 'bg-emerald-950/80 text-emerald-300 border-emerald-800/60',
    numberGradient: 'from-emerald-400 to-teal-400',
    glow: 'group-hover:border-emerald-500/40 group-hover:shadow-emerald-500/10',
    dotColor: 'bg-emerald-400',
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-6 bg-slate-900/60 border-y border-slate-800/80 relative overflow-hidden">
      {/* Dynamic Background Blurs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-violet-600/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-emerald-600/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-violet-400 bg-violet-950/80 px-3.5 py-1.5 rounded-full border border-violet-800/60 shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            <span>Simple 4-Step Process</span>
          </div>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight mt-4 leading-tight sm:leading-none">
            How <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">
            CareerMapFinder</span> Guides You
          </h2>

          <p className="text-slate-400 text-xs sm:text-base mt-3 sm:mt-4 leading-relaxed max-w-2xl mx-auto flex items-center justify-center gap-2">
            <Clock className="w-4 h-4 text-violet-400 shrink-0 hidden sm:inline-block" />
            <span>From complete ambiguity to a clear 5-year personalized blueprint in under 15 minutes.</span>
          </p>
        </div>

        {/* Steps Grid Container */}
        <div className="mt-6 relative">
          
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-violet-500/20 via-indigo-500/20 to-emerald-500/20 -translate-y-6 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 relative z-10">
            {HOW_IT_WORKS_STEPS.map((step, idx) => {
              const accent = stepAccents[idx % stepAccents.length];

              return (
                <motion.div
                  key={step.stepNumber || idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className={`group bg-slate-950/90 border border-slate-800/90 rounded-2xl p-5 sm:p-6 shadow-xl backdrop-blur-md transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 ${accent.glow}`}
                >
                  <div>
                    {/* Top Row: Step Indicator & Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-lg border ${accent.badgeBg}`}>
                        STEP {String(step.stepNumber || idx + 1).padStart(2, '0')}
                      </span>

                      <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                        {stepIcons[idx % stepIcons.length]}
                      </div>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-base sm:text-sm font-bold text-white mb-2 group-hover:text-violet-300 transition-colors flex items-center gap-1.5">
                      <span>{step.title}</span>
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5">
                      {step.description}
                    </p>
                  </div>

                  {/* Bullet Details Footer */}
                  <div className="pt-4 border-t border-slate-900 space-y-2">
                    {step.details.map((detail) => (
                      <div key={detail} className="text-[11px] sm:text-xs text-slate-300 flex items-start gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full ${accent.dotColor} shrink-0 mt-1.5`} />
                        <span className="leading-snug">{detail}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

