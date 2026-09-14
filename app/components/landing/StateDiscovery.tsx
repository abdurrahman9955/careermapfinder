'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  Award,
  BookOpen,
  Building2,
  Search,
  X,
  Check,
  ChevronDown,
  Sparkles,
  Globe2,
} from 'lucide-react';
import { STATE_DISCOVERY_DATA } from '@/app/utils/landing-data';
import { useTheme } from '../../context/ThemeContext';

type CategoryFilter = 'all' | 'states' | 'uts';

export const RegionalStateSelector: React.FC = () => {
  const { theme } = useTheme();
  const [activeStateId, setActiveStateId] = useState<string>('mh');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>('all');
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const isDark = theme === 'dark';

  // Filter logic
  const filteredData = useMemo(() => {
    return STATE_DISCOVERY_DATA.filter((item) => {
      const matchesSearch =
        item.stateName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.code.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        categoryFilter === 'all'
          ? true
          : categoryFilter === 'states'
          ? !item.isUnionTerritory
          : item.isUnionTerritory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, categoryFilter]);

  // Current active region
  const currentState = useMemo(() => {
    return (
      STATE_DISCOVERY_DATA.find((s) => s.id === activeStateId) ||
      filteredData[0] ||
      STATE_DISCOVERY_DATA[0]
    );
  }, [activeStateId, filteredData]);

  // Handle outside click for mobile dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsMobileDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section
      id="state-discovery"
      className={`py-6 border-y relative overflow-hidden transition-colors duration-200 ${
        isDark
          ? 'bg-slate-950 border-slate-700'
          : 'bg-slate-50 border-slate-300'
      }`}
    >
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/2 w-full max-w-7xl h-96 bg-indigo-600/10 blur-[120px] 
      pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-violet-600/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div
            className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider 
              px-3.5 py-1.5 rounded-full border shadow-inner ${
              isDark
                ? 'text-indigo-400 bg-indigo-950/80 border-indigo-700'
                : 'text-indigo-700 bg-indigo-100/80 border-indigo-300'
            }`}
          >
            <Globe2 className={`w-3.5 h-3.5 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`} />
            <span>Pan-India Regional Engine</span>
          </div>
          <h2
            className={`text-xl sm:text-3xl font-extrabold tracking-tight mt-4 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            State & UT Admission Rules & Exam Cutoffs
          </h2>
          <p
            className={`text-sm sm:text-base mt-3 leading-relaxed ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            Discover domicile reservation quotas, entrance exams, top tier colleges, and emerging employment hubs across all{' '}
            <span className={isDark ? 'text-indigo-300 font-semibold' : 'text-indigo-600 font-semibold'}>
              28 States
            </span>{' '}
            and{' '}
            <span className={isDark ? 'text-indigo-300 font-semibold' : 'text-indigo-600 font-semibold'}>
              8 Union Territories
            </span>.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="mt-10 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-3">
          
          {/* Category Tabs */}
          <div
            className={`flex items-center p-1 border rounded-xl w-full md:w-auto shrink-0 justify-between sm:justify-start ${
              isDark
                ? 'bg-slate-900 border-slate-700'
                : 'bg-white border-slate-300 shadow-sm'
            }`}
          >
            <button
              onClick={() => setCategoryFilter('all')}
              className={`flex-1 md:flex-none px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                categoryFilter === 'all'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : isDark
                  ? 'text-slate-400 hover:text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Regions (36)
            </button>
            <button
              onClick={() => setCategoryFilter('states')}
              className={`flex-1 md:flex-none px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                categoryFilter === 'states'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : isDark
                  ? 'text-slate-400 hover:text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              States (28)
            </button>
            <button
              onClick={() => setCategoryFilter('uts')}
              className={`flex-1 md:flex-none px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                categoryFilter === 'uts'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : isDark
                  ? 'text-slate-400 hover:text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              UTs (8)
            </button>
          </div>

          {/* Search Input Bar */}
          <div className="relative max-sm:hidden w-full">
            <Search
              className={`w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 ${
                isDark ? 'text-slate-400' : 'text-slate-500'
              }`}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search State or UT (e.g. Maharashtra, Delhi, KA)..."
              className={`w-full border pl-10 pr-10 py-2.5 rounded-xl text-xs sm:text-sm 
                focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all ${
                isDark
                  ? 'bg-slate-900 border-slate-700 text-white placeholder-slate-500'
                  : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400 shadow-sm'
              }`}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className={`absolute right-3 top-1/2 -translate-y-1/2 ${
                  isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Mobile Quick Selector Dropdown */}
        <div className="block mt-4 relative max-w-4xl mx-auto" ref={dropdownRef}>
          <button
            onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
            className={`w-full border px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold 
              flex items-center justify-between shadow-lg ${
              isDark
                ? 'bg-slate-900 border-indigo-500/40 text-white'
                : 'bg-white border-indigo-200 text-slate-900'
            }`}
          >
            <div className="flex items-center gap-2">
              <MapPin className={`w-4 h-4 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`} />
              <span>{currentState.stateName}</span>
              <span
                className={`text-[10px] border px-2 py-0.5 rounded font-mono ${
                  isDark
                    ? 'bg-indigo-950 text-indigo-300 border-indigo-700'
                    : 'bg-indigo-100 text-indigo-700 border-indigo-300'
                }`}
              >
                {currentState.code}
              </span>
            </div>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                isDark ? 'text-slate-400' : 'text-slate-500'
              } ${isMobileDropdownOpen ? 'rotate-180' : ''}`}
            />
          </button>

          {isMobileDropdownOpen && (
            <div
              className={`absolute top-full left-0 right-0 mt-2 border rounded-xl shadow max-h-60
                 overflow-y-auto z-50 divide-y ${
                isDark
                  ? 'bg-slate-900 border-slate-700 divide-slate-800/50'
                  : 'bg-white border-slate-300 divide-slate-100'
              }`}
            >
              {filteredData.length > 0 ? (
                filteredData.map((st) => (
                  <button
                    key={st.id}
                    onClick={() => {
                      setActiveStateId(st.id);
                      setIsMobileDropdownOpen(false);
                    }}
                    className={`w-full px-4 py-3 text-left text-xs sm:text-sm flex items-center 
                      justify-between transition-colors ${
                      currentState.id === st.id
                        ? isDark
                          ? 'bg-indigo-950/60 text-indigo-300 font-bold'
                          : 'bg-indigo-50 text-indigo-700 font-bold'
                        : isDark
                        ? 'text-slate-300 hover:bg-slate-800'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span>{st.stateName}</span>
                    <span
                      className={`text-[10px] ${
                        isDark ? 'text-slate-400' : 'text-slate-500'
                      }`}
                    >
                      {st.isUnionTerritory ? 'UT' : 'State'}
                    </span>
                  </button>
                ))
              ) : (
                <div
                  className={`p-4 text-center text-xs ${
                    isDark ? 'text-slate-500' : 'text-slate-400'
                  }`}
                >
                  No matching region found
                </div>
              )}
            </div>
          )}
        </div>

        {/* Desktop Region Pills Scroll Row */}
        <div className="hidden lg:flex flex-wrap items-center justify-center gap-2 mt-6 max-h-48
         overflow-y-auto p-2 scrollbar-thin">
          {filteredData.length > 0 ? (
            filteredData.map((st) => (
              <button
                key={st.id}
                onClick={() => setActiveStateId(st.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  currentState.id === st.id
                    ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow shadow-indigo-600/30 scale-105'
                    : isDark
                    ? 'bg-slate-900/90 text-slate-400 border border-slate-700 hover:text-white hover:bg-slate-800'
                    : 'bg-white text-slate-600 border border-slate-300 hover:text-slate-900 hover:bg-slate-100 shadow-sm'
                }`}
              >
                <MapPin className="w-3 h-3" />
                <span>{st.stateName}</span>
                {st.isUnionTerritory && (
                  <span
                    className={`text-[9px] px-1 rounded font-mono ${
                      isDark
                        ? 'bg-slate-800 text-slate-400'
                        : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    UT
                  </span>
                )}
              </button>
            ))
          ) : (
            <p className={`text-xs py-4 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
              No regions found matching "{searchQuery}"
            </p>
          )}
        </div>

        {/* State Information Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentState.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className={`mt-8 border rounded-2xl p-5 sm:p-8 shadow backdrop-blur-md transition-colors duration-200 ${
              isDark
                ? 'bg-slate-900/80 border-slate-700'
                : 'bg-white border-slate-300'
            }`}
          >
            {/* Top Bar inside Card */}
            <div
              className={`flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b ${
                isDark ? 'border-slate-700' : 'border-slate-300'
              }`}
            >
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`px-2.5 py-0.5 rounded font-mono text-xs border font-bold ${
                      isDark
                        ? 'bg-indigo-950 text-indigo-300 border-indigo-700'
                        : 'bg-indigo-100 text-indigo-700 border-indigo-300'
                    }`}
                  >
                    {currentState.code}
                  </span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded border ${
                      isDark
                        ? 'text-slate-400 bg-slate-950 border-slate-700'
                        : 'text-slate-600 bg-slate-100 border-slate-300'
                    }`}
                  >
                    {currentState.isUnionTerritory ? 'Union Territory' : 'Indian State'}
                  </span>
                  <span
                    className={`text-xs flex items-center gap-1 ${
                      isDark ? 'text-emerald-400' : 'text-emerald-600 font-medium'
                    }`}
                  >
                    <Check className="w-3.5 h-3.5" /> Domicile Guidance Active
                  </span>
                </div>
                <h3
                  className={`text-xl sm:text-2xl font-extrabold mt-2 tracking-tight ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {currentState.stateName} <span className="max-lg:hidden">Education Landscape</span>
                </h3>
              </div>

              <div
                className={`p-3.5 rounded-xl border text-left md:text-right w-full md:w-auto ${
                  isDark
                    ? 'bg-slate-950 border-slate-700'
                    : 'bg-slate-50 border-slate-300'
                }`}
              >
                <span
                  className={`text-[11px] block font-medium ${
                    isDark ? 'text-slate-400' : 'text-slate-500'
                  }`}
                >
                  Avg. Govt / Subsidized Fee
                </span>
                <span
                  className={`text-sm sm:text-base font-bold ${
                    isDark ? 'text-emerald-400' : 'text-emerald-600'
                  }`}
                >
                  {currentState.avgTuitionFeeRange}
                </span>
              </div>
            </div>

            {/* Grid Insights */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-6">
              
              {/* Primary Entrance Exams */}
              <div
                className={`p-5 rounded-xl border transition-colors ${
                  isDark
                    ? 'bg-slate-950/60 border-slate-700 hover:border-slate-700'
                    : 'bg-slate-50/80 border-slate-300 hover:border-slate-300'
                }`}
              >
                <div
                  className={`flex items-center gap-2 font-semibold text-sm mb-3 ${
                    isDark ? 'text-indigo-400' : 'text-indigo-600'
                  }`}
                >
                  <Award className="w-4 h-4 shrink-0" />
                  <span>Primary Entrance Exams</span>
                </div>
                <ul className="space-y-2.5">
                  {currentState.topEntranceExams.map((exam) => (
                    <li
                      key={exam}
                      className={`text-xs sm:text-sm flex items-center justify-between p-2 rounded-lg border ${
                        isDark
                          ? 'text-slate-300 bg-slate-900/60 border-slate-700'
                          : 'text-slate-700 bg-white border-slate-300 shadow-sm'
                      }`}
                    >
                      <span className="font-medium">{exam}</span>
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded border ${
                          isDark
                            ? 'text-emerald-400 bg-emerald-950/80 border-emerald-800/60'
                            : 'text-emerald-700 bg-emerald-100 border-emerald-300'
                        }`}
                      >
                        Accepted
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Institutions */}
              <div
                className={`p-5 rounded-xl border transition-colors ${
                  isDark
                    ? 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700'
                    : 'bg-slate-50/80 border-slate-200 hover:border-slate-300'
                }`}
              >
                <div
                  className={`flex items-center gap-2 font-semibold text-sm mb-3 ${
                    isDark ? 'text-indigo-400' : 'text-indigo-600'
                  }`}
                >
                  <BookOpen className="w-4 h-4 shrink-0" />
                  <span>Top Key Institutions</span>
                </div>
                <ul className="space-y-2.5">
                  {currentState.keyColleges.map((college) => (
                    <li
                      key={college}
                      className={`text-xs sm:text-sm flex items-center gap-2 p-2 rounded-lg border ${
                        isDark
                          ? 'text-slate-300 bg-slate-900/60 border-slate-700'
                          : 'text-slate-700 bg-white border-slate-300 shadow-sm'
                      }`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full shrink-0 ${
                          isDark ? 'bg-violet-400' : 'bg-violet-600'
                        }`}
                      ></span>
                      <span className="font-medium">{college}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Employment Hubs */}
              <div
                className={`p-5 rounded-xl border transition-colors ${
                  isDark
                    ? 'bg-slate-950/60 border-slate-700 hover:border-slate-700'
                    : 'bg-slate-50/80 border-slate-300 hover:border-slate-300'
                }`}
              >
                <div
                  className={`flex items-center gap-2 font-semibold text-sm mb-3 ${
                    isDark ? 'text-indigo-400' : 'text-indigo-600'
                  }`}
                >
                  <Building2 className="w-4 h-4 shrink-0" />
                  <span>Major Employment Hubs</span>
                </div>
                <ul className="space-y-2.5">
                  {currentState.emergingHubs.map((hub) => (
                    <li
                      key={hub}
                      className={`text-xs sm:text-sm flex items-center gap-2 p-2 rounded-lg border ${
                        isDark
                          ? 'text-slate-300 bg-slate-900/60 border-slate-700'
                          : 'text-slate-700 bg-white border-slate-300 shadow-sm'
                      }`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full shrink-0 ${
                          isDark ? 'bg-indigo-400' : 'bg-indigo-600'
                        }`}
                      ></span>
                      <span className="font-medium">{hub}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Domicile Quota Banner */}
            <div
              className={`mt-6 p-4 rounded-xl border flex flex-col sm:flex-row items-start sm:items-center gap-3 ${
                isDark
                  ? 'bg-indigo-950/50 border-indigo-700'
                  : 'bg-indigo-50 border-indigo-300'
              }`}
            >
              <div
                className={`p-2 rounded-lg shrink-0 ${
                  isDark ? 'bg-indigo-900/50 text-indigo-400' : 'bg-indigo-100 text-indigo-600'
                }`}
              >
                <Sparkles className="w-5 h-5" />
              </div>
              <p
                className={`text-xs sm:text-sm leading-relaxed ${
                  isDark ? 'text-indigo-200' : 'text-indigo-900'
                }`}
              >
                <span className={`font-semibold ${isDark ? 'text-white' : 'text-indigo-950'}`}>
                  Domicile Quota Highlight:
                </span>{' '}
                {currentState.stateQuotaInsight}
              </p>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};