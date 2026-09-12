'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle2, MapPin, TrendingUp, IndianRupee, Layers } from 'lucide-react';
import { HERO_METRICS, HERO_CAREER_PATHS } from '@/app/utils/landing-data';

export const HeroSection: React.FC = () => {
  const [activePathIndex, setActivePathIndex] = useState(0);
  const currentPath = HERO_CAREER_PATHS[activePathIndex];

  return (
    <section className="relative pt-24 pb-6 overflow-hidden bg-slate-950">
      
      {/* Dynamic Background Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-violet-600/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Top Tagline Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-800/60 text-indigo-300 text-xs font-semibold mb-6 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Tailored for 28 States & UTs across India</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] text-left"
            >
              Discover Your Better Study Path &{' '}
              <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent">
                Lifestyle Expectation
              </span>{' '}
              in India.
            </motion.h1>

            {/* Body Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-base sm:text-md text-slate-300 leading-relaxed max-w-2xl text-left"
            >
              From Class 9th streams and state entrance CETs (JEE, NEET, MHT-CET, KCET) to real entry salaries and Tier-1/2 city living costs. Map your exact journey step-by-step.
            </motion.p>

            {/* Call to Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="#services"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-800 
                via-indigo-700 to-violet-800 hover:from-indigo-700 hover:to-violet-700 
                text-white font-semibold text-sm shadow-xl shadow-indigo-800/20 
                transition-all flex items-center justify-center gap-2 group"
              >
                <span>Explore Career Maps</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#comparison-preview"
                className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-semibold text-sm transition-colors flex items-center justify-center gap-2"
              >
                <span>Take AI Career Test</span>
              </a>
            </motion.div>

            {/* Feature Checklist */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-slate-800/80 w-full"
            >
              {['State Domicile Quotas', 'Realistic Tier 1/2 Pay', 'PCM / PCB / Commerce / Arts'].map((item) => (
                <div key={item} className="flex items-center gap-2 max-sm:text-[16px] text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Dynamic Preview Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="max-sm:hidden bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-2xl backdrop-blur-md relative">
              
              {/* Header Selector inside visual preview */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-indigo-400" />
                  <span className="text-xs font-semibold text-slate-200 uppercase tracking-wider">Live Roadmap</span>
                </div>
                <div className="flex gap-1.5">
                  {HERO_CAREER_PATHS.map((path, idx) => (
                    <button
                      key={path.id}
                      onClick={() => setActivePathIndex(idx)}
                      className={`px-2 py-1 text-[11px] font-medium rounded-md transition-colors ${
                        activePathIndex === idx
                          ? 'bg-indigo-600 text-white'
                          : 'bg-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {path.stream.split(' ')[0]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Pathway Details */}
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-indigo-400">{currentPath.stream}</span>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800/50">
                      High Growth Demand
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-white mt-1">{currentPath.title}</h3>
                </div>

                {/* Steps Visual List */}
                <div className="space-y-2.5 my-4">
                  {currentPath.steps.map((step, idx) => (
                    <div key={step.stage} className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/50">
                      <div className="w-6 h-6 rounded-full bg-indigo-950 border border-indigo-700/60 text-indigo-300 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <div className="flex-1 text-left">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-semibold text-white">{step.title}</span>
                          <span className="text-[10px] text-slate-400 font-mono">{step.duration}</span>
                        </div>
                        <p className="text-[11px] text-slate-400 mt-0.5">{step.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Outcome Metrics Footer */}
                <div className="p-3 rounded-xl bg-indigo-950/40 border border-indigo-900/40 grid grid-cols-2 gap-3 text-left">
                  <div>
                    <div className="flex items-center gap-1 text-[11px] text-slate-400">
                      <IndianRupee className="w-3 h-3 text-emerald-400" />
                      <span>Avg. Entry Salary</span>
                    </div>
                    <p className="text-sm font-bold text-emerald-400 mt-0.5">{currentPath.averageStartingSalary}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-[11px] text-slate-400">
                      <TrendingUp className="w-3 h-3 text-indigo-400" />
                      <span>Target Role</span>
                    </div>
                    <p className="text-xs font-semibold text-slate-200 mt-0.5 truncate">{currentPath.targetRole}</p>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>

        {/* Hero Bottom Social Proof Stats Bar */}
        <div className="max-sm:hidden mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6 rounded-2xl 
        bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
          {HERO_METRICS.map((metric) => (
            <div key={metric.label} className="text-center sm:text-left px-4">
              <p className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">{metric.value}</p>
              <p className="text-xs font-semibold text-indigo-400 mt-0.5">{metric.label}</p>
              <p className="text-[11px] text-slate-400 mt-0.5">{metric.subtext}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};