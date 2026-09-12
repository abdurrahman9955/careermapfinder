'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Compass, 
  MapPin, 
  GitCompare, 
  Calculator, 
  Users, 
  CalendarCheck,
  Check,
  ArrowRight,
  Sparkles,
  Layers,
  GraduationCap
} from 'lucide-react';
import { KEY_SERVICES } from '@/app/utils/landing-data';

// Extended icon mapping with dynamic glow colors per category
const iconMap: Record<string, { icon: React.ReactNode; glow: string; bg: string }> = {
  Compass: {
    icon: <Compass className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400" />,
    glow: 'group-hover:shadow-indigo-500/20',
    bg: 'bg-indigo-950/50 border-indigo-800/50'
  },
  MapPin: {
    icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-violet-400" />,
    glow: 'group-hover:shadow-violet-500/20',
    bg: 'bg-violet-950/50 border-violet-800/50'
  },
  GitCompare: {
    icon: <GitCompare className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />,
    glow: 'group-hover:shadow-emerald-500/20',
    bg: 'bg-emerald-950/50 border-emerald-800/50'
  },
  Calculator: {
    icon: <Calculator className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />,
    glow: 'group-hover:shadow-cyan-500/20',
    bg: 'bg-cyan-950/50 border-cyan-800/50'
  },
  Users: {
    icon: <Users className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />,
    glow: 'group-hover:shadow-amber-500/20',
    bg: 'bg-amber-950/50 border-amber-800/50'
  },
  CalendarCheck: {
    icon: <CalendarCheck className="w-5 h-5 sm:w-6 sm:h-6 text-rose-400" />,
    glow: 'group-hover:shadow-rose-500/20',
    bg: 'bg-rose-950/50 border-rose-800/50'
  },
};

const defaultIcon = {
  icon: <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400" />,
  glow: 'group-hover:shadow-indigo-500/20',
  bg: 'bg-indigo-950/50 border-indigo-800/50'
};

export const KeyServices: React.FC = () => {
  return (
    <section id="services" className="py-6 bg-slate-950 relative overflow-hidden">
      {/* Background Lighting Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-violet-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-3.5 py-1.5 rounded-full border border-emerald-800/60 shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>End-To-End Platform Capabilities</span>
          </div>
          
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight 
          mt-4 leading-snug sm:leading-tight">
            Everything You Need to Navigate <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-indigo-400 via-violet-300 to-emerald-400 bg-clip-text text-transparent">
              Indian Higher Education
            </span>
          </h2>
          
          <p className="text-slate-400 text-xs sm:text-base mt-3 sm:mt-4 leading-relaxed max-w-2xl mx-auto">
            Built specifically to eliminate uncertainty for Indian students choosing streams, entrance exams, cutoff analytics, and long-term career roadmaps.
          </p>
        </div>

        {/* Mobile First Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-6 mt-6">
          {KEY_SERVICES.map((service, index) => {
            const iconConfig = iconMap[service.iconName] || defaultIcon;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-slate-900/90 border border-slate-800/90 hover:border-indigo-500/50 rounded-2xl p-5 sm:p-7 transition-all duration-300 group flex flex-col justify-between hover:shadow-xl relative backdrop-blur-sm"
              >
                <div>
                  {/* Icon & Badge Header */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className={`w-11 h-11 sm:w-13 sm:h-13 rounded-xl ${iconConfig.bg} border flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-lg ${iconConfig.glow}`}>
                      {iconConfig.icon}
                    </div>

                    {service.badge && (
                      <span className="text-[10px] font-bold tracking-wide px-2.5 py-1 rounded-full bg-slate-950 text-indigo-300 border border-indigo-800/80 shadow-inner">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base sm:text-md font-bold text-white group-hover:text-indigo-300 transition-colors flex items-center gap-1.5">
                    {service.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Highlights List & Footer */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 space-y-2.5">
                  {service.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <div className="p-0.5 rounded-full bg-emerald-950 border border-emerald-800/80 text-emerald-400 mt-0.5 shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="leading-snug">{highlight}</span>
                    </div>
                  ))}

                  <div className="pt-2 flex items-center justify-between text-[11px] font-semibold text-indigo-400 group-hover:text-indigo-300 transition-colors">
                     <a href="#state-discovery"> <span>Explore State Discovery</span>  </a>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner CTA Context */}
        <div className="mt-6 p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-indigo-900/40 rounded-xl border border-indigo-700/50 text-indigo-400 shrink-0 hidden sm:block">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white">Need a customized admission strategy?</h4>
              <p className="text-xs text-slate-400 mt-0.5">Combine cutoffs, state quotas, and fee structure metrics in one view.</p>
            </div>
          </div>
          <a
            href="#state-discovery"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-all shadow-lg shadow-indigo-600/30 shrink-0"
          >
            Check State Cutoffs
          </a>
        </div>

      </div>
    </section>
  );
};
