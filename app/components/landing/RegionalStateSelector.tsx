'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  Award,
  BookOpen,
  Building2,
  Wallet,
  Search,
  X,
  Filter,
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
    <section id="state-discovery" className="py-6 bg-slate-950 border-y border-slate-800/80 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/2  w-full max-w-7xl h-96 bg-indigo-600/10 
      blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-violet-600/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-950/80 px-3.5 py-1.5 rounded-full border border-indigo-800/60 shadow-inner">
            <Globe2 className="w-3.5 h-3.5 text-indigo-400" />
            <span>Pan-India Regional Engine</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight mt-4">
            State & UT Admission Rules & Exam Cutoffs
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            Discover domicile reservation quotas, entrance exams, top tier colleges, and emerging employment hubs across all <span className="text-indigo-300 font-semibold">28 States</span> and <span className="text-indigo-300 font-semibold">8 Union Territories</span>.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="mt-10 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-3">
          
          {/* Category Tabs */}
          <div className="flex items-center p-1 bg-slate-900 border border-slate-800 rounded-xl w-full md:w-auto shrink-0 justify-between sm:justify-start">
            <button
              onClick={() => setCategoryFilter('all')}
              className={`flex-1 md:flex-none px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                categoryFilter === 'all'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Regions (36)
            </button>
            <button
              onClick={() => setCategoryFilter('states')}
              className={`flex-1 md:flex-none px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                categoryFilter === 'states'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              States (28)
            </button>
            <button
              onClick={() => setCategoryFilter('uts')}
              className={`flex-1 md:flex-none px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                categoryFilter === 'uts'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              UTs (8)
            </button>
          </div>

          {/* Search Input Bar */}
          <div className="relative max-sm:hidden w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search State or UT (e.g. Maharashtra, Delhi, KA)..."
              className="w-full bg-slate-900 border border-slate-800 text-white placeholder-slate-500 pl-10 pr-10 py-2.5 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Mobile Quick Selector Dropdown */}
        <div className="block  mt-4 relative max-w-4xl mx-auto" ref={dropdownRef}>
          <button
            onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
            className="w-full bg-slate-900 border border-indigo-500/40 text-white px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-between shadow-lg"
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-indigo-400" />
              <span>{currentState.stateName}</span>
              <span className="text-[10px] bg-indigo-950 text-indigo-300 border border-indigo-800/80 px-2 py-0.5 rounded font-mono">
                {currentState.code}
              </span>
            </div>
            <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isMobileDropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {isMobileDropdownOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl max-h-60 overflow-y-auto z-50 divide-y divide-slate-800/50">
              {filteredData.length > 0 ? (
                filteredData.map((st) => (
                  <button
                    key={st.id}
                    onClick={() => {
                      setActiveStateId(st.id);
                      setIsMobileDropdownOpen(false);
                    }}
                    className={`w-full px-4 py-3 text-left text-xs sm:text-sm flex items-center justify-between hover:bg-slate-800 transition-colors ${
                      currentState.id === st.id ? 'bg-indigo-950/60 text-indigo-300 font-bold' : 'text-slate-300'
                    }`}
                  >
                    <span>{st.stateName}</span>
                    <span className="text-[10px] text-slate-400">{st.isUnionTerritory ? 'UT' : 'State'}</span>
                  </button>
                ))
              ) : (
                <div className="p-4 text-center text-xs text-slate-500">No matching region found</div>
              )}
            </div>
          )}
        </div>

        {/* Desktop Region Pills Scroll Row */}
        <div className="hidden lg:flex flex-wrap items-center justify-center gap-2 mt-6 max-h-48 overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-slate-800">
          {filteredData.length > 0 ? (
            filteredData.map((st) => (
              <button
                key={st.id}
                onClick={() => setActiveStateId(st.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  currentState.id === st.id
                    ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-600/30 scale-105'
                    : 'bg-slate-900/90 text-slate-400 border border-slate-800 hover:text-white hover:bg-slate-800'
                }`}
              >
                <MapPin className="w-3 h-3" />
                <span>{st.stateName}</span>
                {st.isUnionTerritory && (
                  <span className="text-[9px] bg-slate-800 px-1 rounded text-slate-400 font-mono">UT</span>
                )}
              </button>
            ))
          ) : (
            <p className="text-xs text-slate-500 py-4">No regions found matching "{searchQuery}"</p>
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
            className="mt-8 bg-slate-900/80 border border-slate-800 rounded-2xl p-5 sm:p-8 shadow-2xl backdrop-blur-md"
          >
            {/* Top Bar inside Card */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded bg-indigo-950 text-indigo-300 font-mono text-xs border border-indigo-800/80 font-bold">
                    {currentState.code}
                  </span>
                  <span className="text-xs text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                    {currentState.isUnionTerritory ? 'Union Territory' : 'Indian State'}
                  </span>
                  <span className="text-xs text-emerald-400 flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> Domicile Guidance Active
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-2 tracking-tight">
                  {currentState.stateName} <span className='max-lg:hidden'>Education Landscape</span>
                </h3>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 text-left md:text-right w-full md:w-auto">
                <span className="text-[11px] text-slate-400 block font-medium">Avg. Govt / Subsidized Fee</span>
                <span className="text-sm sm:text-base font-bold text-emerald-400">{currentState.avgTuitionFeeRange}</span>
              </div>
            </div>

            {/* Grid Insights */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-6">
              
              {/* Primary Entrance Exams */}
              <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-colors">
                <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm mb-3">
                  <Award className="w-4 h-4 shrink-0" />
                  <span>Primary Entrance Exams</span>
                </div>
                <ul className="space-y-2.5">
                  {currentState.topEntranceExams.map((exam) => (
                    <li key={exam} className="text-xs sm:text-sm text-slate-300 flex items-center justify-between bg-slate-900/60 p-2 rounded-lg border border-slate-800/50">
                      <span className="font-medium">{exam}</span>
                      <span className="text-[10px] text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/60">
                        Accepted
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Institutions */}
              <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-colors">
                <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm mb-3">
                  <BookOpen className="w-4 h-4 shrink-0" />
                  <span>Top Key Institutions</span>
                </div>
                <ul className="space-y-2.5">
                  {currentState.keyColleges.map((college) => (
                    <li key={college} className="text-xs sm:text-sm text-slate-300 flex items-center gap-2 bg-slate-900/60 p-2 rounded-lg border border-slate-800/50">
                      <span className="w-2 h-2 rounded-full bg-violet-400 shrink-0"></span>
                      <span className="font-medium">{college}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Employment Hubs */}
              <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-colors">
                <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm mb-3">
                  <Building2 className="w-4 h-4 shrink-0" />
                  <span>Major Employment Hubs</span>
                </div>
                <ul className="space-y-2.5">
                  {currentState.emergingHubs.map((hub) => (
                    <li key={hub} className="text-xs sm:text-sm text-slate-300 flex items-center gap-2 bg-slate-900/60 p-2 rounded-lg border border-slate-800/50">
                      <span className="w-2 h-2 rounded-full bg-indigo-400 shrink-0"></span>
                      <span className="font-medium">{hub}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Domicile Quota Banner */}
            <div className="mt-6 p-4 rounded-xl bg-indigo-950/50 border border-indigo-800/50 flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <div className="p-2 bg-indigo-900/50 rounded-lg text-indigo-400 shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <p className="text-xs sm:text-sm text-indigo-200 leading-relaxed">
                <span className="font-semibold text-white">Domicile Quota Highlight:</span> {currentState.stateQuotaInsight}
              </p>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
