'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Award,
  Calendar,
  ExternalLink,
  FileCheck2,
  Globe2,
  GraduationCap,
  IndianRupee,
  MapPin,
  ShieldAlert,
  Sparkles,
  X,
} from 'lucide-react';
import { Scholarship } from './types';

interface CardProps {
  scholarship: Scholarship;
  isDark: boolean;
}

export const ScholarshipCard: React.FC<CardProps> = ({ scholarship, isDark }) => {
  const [isOpen, setIsOpen] = useState(false);

  const formatCurrency = (val: number | null) => {
    if (!val) return 'N/A';
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <>
      {/* Individual Scholarship Card */}
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className={`border rounded-2xl p-5 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-200 ${
          isDark
            ? 'bg-slate-950 border-slate-700 text-white hover:border-slate-700'
            : 'bg-white border-slate-300 text-slate-900 hover:border-indigo-200'
        }`}
      >
        <div>
          {/* Header Badges */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <span
              className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${
                scholarship.type === 'Government'
                  ? isDark
                    ? 'bg-emerald-950/80 text-emerald-400 border-emerald-800/60'
                    : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                  : isDark
                  ? 'bg-indigo-950/80 text-indigo-400 border-indigo-800/60'
                  : 'bg-indigo-50 text-indigo-700 border-indigo-200'
              }`}
            >
              {scholarship.type}
            </span>

            <span
              className={`text-[10px] border py-1 px-2 rounded-full font-medium flex items-center gap-1 ${
                isDark ? 'text-indigo-100 border-slate-700 bg-indigo-950/80' : 'bg-indigo-50 border-slate-300 text-indigo-900'
              }`}
            >
              <MapPin className="w-3 h-3 text-indigo-500" />
              {scholarship.isNationwide ? 'Pan-India' : scholarship.stateOrigin}
            </span>
          </div>

          {/* Title & Provider */}
          <h3 className="text-base font-bold line-clamp-1 leading-snug">{scholarship.title}</h3>
          <p
            className={`text-xs mt-1 line-clamp-1 leading-snug font-medium ${
              isDark ? 'text-slate-400' : 'text-slate-500'
            }`}
          >
            {scholarship.provider}
          </p>

          {/* Description */}
          <p
            className={`text-xs mt-3 line-clamp-2 leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            {scholarship.description}
          </p>

          {/* Value Highlights */}
          <div
            className={`mt-4 p-3 rounded-xl border flex items-center justify-between ${
              isDark ? 'bg-slate-950/60 border-slate-700' : 'bg-slate-50 border-slate-300'
            }`}
          >
            <div>
              <span className={`text-[10px] block ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                Financial Benefit
              </span>
              <span className="text-xs font-extrabold text-emerald-500">
                {formatCurrency(scholarship.financials.amountValue.min)} -{' '}
                {formatCurrency(scholarship.financials.amountValue.max)}
              </span>
            </div>

            <span
              className={`text-[10px] font-semibold px-2 py-0.5 rounded border ${
                isDark ? 'bg-slate-900 border-slate-700 text-slate-300' : 'bg-white border-slate-300 text-slate-700'
              }`}
            >
              {scholarship.financials.coverageType}
            </span>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-5 pt-4 border-t border-slate-800/40 flex items-center justify-between text-xs">
         
         <a href={scholarship.applicationUrl} target="_blank"  rel="noreferrer" >
          <button className={`flex items-center gap-1.5 text-white font-medium 
            hover:underline py-2 px-4 bg-indigo-700 rounded-lg `}>
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Apply Here</span>
          </button></a>

          <button
            onClick={() => setIsOpen(true)}
            className="text-white font-bold py-2 px-4 bg-indigo-700 rounded-lg
            hover:underline flex items-center gap-1 text-xs"
          >
           View  Details <Sparkles className="w-3 h-3" />
          </button>
        </div>
      </motion.div>

      {/* Modal View for Full Details */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className={`relative w-full max-w-2xl border rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto ${
                isDark ? 'bg-slate-950 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
              }`}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className={`absolute top-5 right-5 p-2 rounded-full border transition-all ${
                  isDark
                    ? 'bg-slate-800 border-slate-700 text-slate-300 hover:text-white'
                    : 'bg-slate-100 border-slate-300 text-slate-600 hover:text-slate-900'
                }`}
              >
                <X className="w-4 h-4" />
              </button>

              {/* Title Header */}
              <div className="pr-10">
                <span className="text-xs font-semibold text-indigo-500 uppercase tracking-wider">
                  {scholarship.provider}
                </span>
                <h2 className="text-sm sm:text-xl font-extrabold mt-1">{scholarship.title}</h2>
              </div>

              {/* Details Content */}
              <div className="mt-6 space-y-6 text-xs sm:text-sm">
                <div>
                  <h4 className="font-bold text-slate-400 uppercase text-[11px] mb-1">Description</h4>
                  <p className="leading-relaxed">{scholarship.description}</p>
                </div>

                {/* Eligibility Grid */}
                <div
                  className={`p-4 rounded-xl border space-y-3 ${
                    isDark ? 'bg-slate-950 border-slate-700' : 'bg-slate-50 border-slate-300'
                  }`}
                >
                  <h4 className="font-bold text-indigo-400 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4" /> Eligibility Criteria
                  </h4>

                  <ul className="space-y-2 text-xs">
                    <li>
                      <strong>Min Marks / Percentage:</strong> {scholarship.eligibility.minPercentage}%
                    </li>
                    <li>
                      <strong>Eligible Courses:</strong>{' '}
                      {scholarship.eligibility.eligibleCourses.join(', ')}
                    </li>
                    <li>
                      <strong>Eligible Categories:</strong>{' '}
                      {scholarship.eligibility.eligibleCategories.join(', ')}
                    </li>
                    <li>
                      <strong>Max Family Income:</strong> Up to{' '}
                      {formatCurrency(scholarship.eligibility.maxFamilyIncome?.max ?? null)}
                    </li>
                    <li>
                      <strong>Gender Criteria:</strong> {scholarship.eligibility.genderCriteria}
                    </li>
                  </ul>
                </div>

                {/* Documents Checklist */}
                <div>
                  <h4 className="font-bold text-slate-400 uppercase text-[11px] mb-2 flex items-center gap-1">
                    <FileCheck2 className="w-3.5 h-3.5" /> Required Documents
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {scholarship.documentsRequired.map((doc, idx) => (
                      <li
                        key={idx}
                        className={`p-2 rounded-lg border text-xs flex items-center gap-2 ${
                          isDark ? 'bg-slate-800/60 border-slate-700' : 'bg-white border-slate-300'
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Modal Action Bar */}
              <div className="mt-8 pt-4 border-t border-slate-800/60 flex items-center justify-between">
                <div>
                  {/* <span className={`text-[10px] block ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    Application Deadline
                  </span>
                  <span className="text-xs font-bold text-rose-500">{scholarship.deadline}</span> */}

                   <span onClick={() => setIsOpen(false)} className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 
                   text-white rounded-xl 
                   text-xs font-semibold flex items-center gap-2 shadow-lg shadow-indigo-600/30 transition-all">
                   Close Details <X className="w-3.5 h-3.5" />
                </span>

                </div>

                <a
                  href={scholarship.applicationUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold flex items-center gap-2 shadow-lg shadow-indigo-600/30 transition-all"
                >
                  Apply Official Portal <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};