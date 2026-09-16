'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Award,
  Building2,
  Calendar,
  ExternalLink,
  FileCheck2,
  GraduationCap,
  Home,
  MapPin,
  Sparkles,
  Trophy,
  Users,
  Wallet,
  X,
  CheckCircle2,
  Briefcase,
} from 'lucide-react';
import { University } from './types';

interface CardProps {
  university: University;
  isDark: boolean;
}

export const UniversityCard: React.FC<CardProps> = ({ university, isDark }) => {
  const [isOpen, setIsOpen] = useState(false);

  const formatCurrency = (val: number | null) => {
    if (!val) return 'N/A';
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const getTypeStyle = (type: string) => {
    switch (type) {
      case 'Central':
        return isDark
          ? 'bg-purple-950/80 text-purple-400 border-purple-800/60'
          : 'bg-purple-50 text-purple-700 border-purple-200';
      case 'State':
        return isDark
          ? 'bg-emerald-950/80 text-emerald-400 border-emerald-800/60'
          : 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Public':
        return isDark
          ? 'bg-blue-950/80 text-blue-400 border-blue-800/60'
          : 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Private':
        return isDark
          ? 'bg-amber-950/80 text-amber-400 border-amber-800/60'
          : 'bg-amber-50 text-amber-700 border-amber-200';
      default:
        return isDark
          ? 'bg-indigo-950/80 text-indigo-400 border-indigo-800/60'
          : 'bg-indigo-50 text-indigo-700 border-indigo-200';
    }
  };

  return (
    <>
      {/* Primary University Card */}
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className={`border rounded-2xl p-5 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-200 ${
          isDark
            ? 'bg-slate-950 border-slate-700 text-white hover:border-slate-700'
            : 'bg-white border-slate-300 text-slate-900 hover:border-indigo-300'
        }`}
      >
        <div>
          {/* Header Badges */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <span
              className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${getTypeStyle(
                university.type
              )}`}
            >
              {university.type} University
            </span>

            <span
              className={`text-[10px] border font-medium flex items-center py-1 px-2 rounded-full gap-1 ${
                isDark ? 'text-slate-400 border-slate-700 bg-indigo-950/80' : 'text-slate-500 border-slate-300 bg-indigo-50'
              }`}
            >
              <MapPin className="w-3 h-3 text-indigo-500" />
              {/* {university.location.city},  */}
              {university.location.state}
            </span>
          </div>

          {/* Name & Established Year */}
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-base font-bold line-clamp-1 leading-snug">
              {university.name}
            </h3>
            {university.shortName && (
              <span className="text-[10px] font-extrabold px-1.5 py-0.5 
              rounded bg-indigo-500/10 text-indigo-500 border border-indigo-500/20 shrink-0">
                {university.shortName}
              </span>
            )}
          </div>

          <p
            className={`text-xs mt-1 font-medium flex items-center gap-1 ${
              isDark ? 'text-slate-400' : 'text-slate-500'
            }`}
          >
            <Calendar className="w-3 h-3 text-slate-400" /> Estd. {university.establishedYear}
          </p>

          {/* Description */}
          <p
            className={`text-xs mt-3 line-clamp-2 leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            {university.description}
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 gap-2 mt-4">
            <div
              className={`p-2.5 rounded-xl border ${
                isDark ? 'bg-slate-950/60 border-slate-700' : 'bg-slate-50 border-slate-300'
              }`}
            >
              <span className={`text-[10px] block ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                Min Tuition / Year
              </span>
              <span className="text-xs font-extrabold text-indigo-500 flex items-center gap-1 mt-0.5">
                 <Wallet className="w-3 h-3 text-indigo-500" />
                  {formatCurrency(university.fees.tuitionPerYear.min)}
              </span>
            </div>

            <div
              className={`p-2.5 rounded-xl border ${
                isDark ? 'bg-slate-950/60 border-slate-700' : 'bg-slate-50 border-slate-300'
              }`}
            >
              <span className={`text-[10px] block ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
               Max Tuition / Year
              </span>
              <span className="text-xs font-extrabold text-indigo-500 flex items-center gap-1 mt-0.5">
                <Wallet className="w-3 h-3 text-indigo-500" />
                 {formatCurrency(university.fees.tuitionPerYear.max)}
              </span>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-5 pt-4 border-t border-slate-800/40 flex items-center justify-between text-xs">

          <a href={university.website} target="_blank"  rel="noreferrer" >
            <button className={`flex items-center gap-1.5 text-white font-medium 
            hover:underline py-2 px-4 bg-indigo-700 rounded-lg `}>
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Official Website</span>
          </button></a>

          <button
            onClick={() => setIsOpen(true)}
            className="text-white font-bold py-2 px-4 bg-indigo-700 rounded-lg
            hover:underline flex items-center gap-1 text-xs">
            View  Details <Sparkles className="w-3 h-3" />
          </button>

        </div>
      </motion.div>

      {/* Modal View for Detailed University Profile */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className={`relative w-full max-w-3xl border rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto ${
                isDark ? 'bg-slate-950 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
              }`}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className={`absolute top-5 right-5 p-2 rounded-full border transition-all ${
                  isDark
                    ? 'bg-slate-800 border-slate-700 text-slate-300 hover:text-white'
                    : 'bg-slate-100 border-slate-200 text-slate-600 hover:text-slate-900'
                }`}
              >
                <X className="w-4 h-4" />
              </button>

              {/* Title Header */}
              <div className="pr-10">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold text-indigo-500 uppercase tracking-wider">
                    {university.type} University
                  </span>
                  <span className="text-xs text-slate-400">• Estd. {university.establishedYear}</span>
                </div>
                <h2 className="text-sm sm:text-xl font-extrabold">{university.name}</h2>
                <p className={`text-xs mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  {university.location.address}
                </p>
              </div>

              {/* Details Body */}
              <div className="mt-6 space-y-6 text-xs sm:text-sm">
                <div>
                  <h4 className="font-bold text-slate-400 uppercase text-[11px] mb-1">About</h4>
                  <p className="leading-relaxed">{university.description}</p>
                </div>

                {/* Key Stats Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div
                    className={`p-3 rounded-xl border text-center ${
                      isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <span className="text-[10px] text-slate-400 block">NIRF Rank</span>
                    <span className="font-bold text-indigo-400">
                      {university.ranking.nirfRank ? `#${university.ranking.nirfRank}` : 'N/A'}
                    </span>
                  </div>

                  <div
                    className={`p-3 rounded-xl border text-center ${
                      isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <span className="text-[10px] text-slate-400 block">Acceptance Rate</span>
                    <span className="font-bold text-purple-400">
                      {university.acceptanceRate ? `${university.acceptanceRate}%` : 'N/A'}
                    </span>
                  </div>

                  <div
                    className={`p-3 rounded-xl border text-center ${
                      isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <span className="text-[10px] text-slate-400 block">Avg. Package</span>
                    <span className="font-bold text-emerald-400">
                      {formatCurrency(university.placements.averageSalary)}
                    </span>
                  </div>

                  <div
                    className={`p-3 rounded-xl border text-center ${
                      isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <span className="text-[10px] text-slate-400 block">Highest Package</span>
                    <span className="font-bold text-amber-400">
                      {formatCurrency(university.placements.highestSalary)}
                    </span>
                  </div>
                </div>

                {/* Admission & Fees Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Fee Structure */}
                  <div
                    className={`p-4 rounded-xl border space-y-2 ${
                      isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <h4 className="font-bold text-indigo-400 flex items-center gap-2">
                      <Wallet className="w-4 h-4" /> Fee Structure
                    </h4>
                    <p>
                      <strong>Tuition / Year:</strong>{' '}
                      {formatCurrency(university.fees.tuitionPerYear.min)} -{' '}
                      {formatCurrency(university.fees.tuitionPerYear.max)}
                    </p>
                    <p className="flex items-center gap-1">
                      <Home className="w-3.5 h-3.5 text-slate-400" />
                      <strong>Hostel Facility:</strong>{' '}
                      {university.fees.hostel.available
                        ? `Available (${formatCurrency(university.fees.hostel.costPerYear)}/yr)`
                        : 'Not Available'}
                    </p>
                  </div>

                  {/* Entrance Requirements */}
                  <div
                    className={`p-4 rounded-xl border space-y-2 ${
                      isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <h4 className="font-bold text-indigo-400 flex items-center gap-2">
                      <GraduationCap className="w-4 h-4" /> Entrance Requirements
                    </h4>
                    <p>
                      <strong>Min Percentage:</strong> {university.requirements.minPercentage}
                    </p>
                    <p>
                      <strong>Entrance Exams:</strong>{' '}
                      {university.requirements.entranceExams.join(', ')}
                    </p>
                  </div>
                </div>

                {/* Courses Offered */}
                <div>
                  <h4 className="font-bold text-slate-400 uppercase text-[11px] mb-2 flex items-center gap-1">
                    <BookOpenIcon /> Programs & Courses
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {university.coursesOffered.map((course, idx) => (
                      <span
                        key={idx}
                        className={`px-2.5 py-1 rounded-lg border text-xs font-medium ${
                          isDark ? 'bg-slate-800 border-slate-700' : 'bg-slate-100 border-slate-200'
                        }`}
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Top Recruiters */}
                <div>
                  <h4 className="font-bold text-slate-400 uppercase text-[11px] mb-2 flex items-center gap-1">
                    <Briefcase className="w-3.5 h-3.5" /> Top Recruiters
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {university.placements.topRecruiters.map((company, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-xs font-medium"
                      >
                        {company}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Campus Facilities */}
                <div>
                  <h4 className="font-bold text-slate-400 uppercase text-[11px] mb-2">
                    Campus Facilities
                  </h4>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {university.facilities.map((facility, idx) => (
                      <li key={idx} className="flex items-center gap-1.5 text-xs">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                        <span>{facility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Modal Action Bar */}
              <div className="max-sm:grid  max-sm:grid-cols-1 gap-4 mt-8 pt-4 border-t border-slate-800/60 flex items-center justify-between">
                <div className=''>
                  <span className={`text-[10px] block ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    Affiliations
                  </span>
                  <span className="text-xs font-bold text-indigo-400">
                    {university.affiliations.join(' • ')}
                  </span>
                </div>

                <a
                  href={university.website}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold flex items-center gap-2 shadow-lg shadow-indigo-600/30 transition-all"
                >
                  Visit Official Website <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

const BookOpenIcon = () => (
  <svg
    className="w-3.5 h-3.5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    />
  </svg>
);