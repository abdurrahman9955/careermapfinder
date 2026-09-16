'use client';

import React, { useState, useMemo } from 'react';
import { Search, Building2, MapPin, X, BookOpen, GraduationCap } from 'lucide-react';

import { DashboardLayoutWrapper } from '../DashboardLayoutWrapper';
import { useTheme } from '../../../context/ThemeContext';
import { ALL_UNIVERSITIES, ALL_STATES } from './data';
import { UniversityType } from './types';
import { UniversityCard } from './UniversityCard';

export default function UniversitiesPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Filters State - Defaults to first available state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState<string>(ALL_STATES[0] || '');
  const [selectedType, setSelectedType] = useState<UniversityType | 'all'>('all');

  // Filter Logic: Filter by selected state and optional type/search
  const filteredUniversities = useMemo(() => {
    return ALL_UNIVERSITIES.filter((item) => {
      // Must match selected state
      const matchesState = item.stateOrigin === selectedState;

      // Type match
      const matchesType = selectedType === 'all' ? true : item.type === selectedType;

      // Free text search
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.location.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.coursesOffered.some((c) =>
          c.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesState && matchesType && matchesSearch;
    });
  }, [searchQuery, selectedState, selectedType]);

  return (
    <DashboardLayoutWrapper>
      <div
        className={`min-h-screen  transition-colors duration-200 ${
          isDark ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'
        }`}
      >
        {/* Header Banner */}
        <div className="max-w-7xl mx-auto text-center mb-8">
          <div
            className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full border mb-3 ${
              isDark
                ? 'text-indigo-400 bg-indigo-950/80 border-indigo-800/60'
                : 'text-indigo-700 bg-ingigo-100 border-indigo-200'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>State-by-State Higher Education Index</span>
          </div>

          <h1 className="text-xl sm:text-3xl font-extrabold tracking-tight">
            Indian Universities Directory
          </h1>
          <p
            className={`mt-2 text-xs sm:text-base max-w-2xl mx-auto ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            Explore public, state, private, and central universities across India with placement metrics, fees, and admission requirements.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="max-w-7xl mx-auto mb-3 space-y-4">
          <div
            className={`p-4 border rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-12 gap-3 items-center ${
              isDark ? 'bg-slate-950 border-slate-700' : 'bg-white border-slate-300'
            }`}
          >
            {/* State Selection Dropdown (No 'All' Option as requested) */}
            <div className="md:col-span-4">
              <label className={`text-[10px] font-bold block mb-1 uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                Select State
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-indigo-500" />
                <select
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className={`w-full border pl-9 pr-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
                    isDark
                      ? 'bg-slate-950 border-slate-800 text-white'
                      : 'bg-slate-50 border-slate-200 text-slate-900'
                  }`}
                >
                  {ALL_STATES.map((st) => (
                    <option key={st} value={st}>
                      {st}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* University Type Filter */}
            <div className="md:col-span-3">
              <label className={`text-[10px] font-bold block mb-1 uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                Institution Type
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value as any)}
                className={`w-full border px-3 py-2.5 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
                  isDark
                    ? 'bg-slate-950 border-slate-800 text-white'
                    : 'bg-slate-50 border-slate-200 text-slate-900'
                }`}
              >
                <option value="all">All Types</option>
                <option value="State">State</option>
                <option value="Central">Central</option>
                <option value="Public">Public</option>
                <option value="Private">Private</option>
                <option value="Deemed">Deemed</option>
              </select>
            </div>

            {/* Search Input Bar */}
            <div className="md:col-span-5">
              <label className={`text-[10px] font-bold block mb-1 uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                Search University / Course
              </label>
              <div className="relative">
                <Search
                  className={`w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 ${
                    isDark ? 'text-slate-400' : 'text-slate-500'
                  }`}
                />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search name, city, course (e.g. Pharmacy)..."
                  className={`w-full border pl-10 pr-10 py-2.5 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
                    isDark
                      ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-500'
                      : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
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
          </div>

          {/* Active Filter Indicators */}
          <div className="flex items-center justify-between text-xs px-1">
            <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>
              Showing <strong>{filteredUniversities.length}</strong> institutions in{' '}
              <strong className="text-indigo-400">{selectedState}</strong>
            </span>

            {(searchQuery || selectedType !== 'all') && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedType('all');
                }}
                className="text-rose-500 hover:underline flex items-center gap-1 font-semibold"
              >
                <X className="w-3.5 h-3.5" /> Clear Filters
              </button>
            )}
          </div>
        </div>

        {/* Universities Grid */}
        <div className="max-w-7xl mx-auto">
          {filteredUniversities.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredUniversities.map((university) => (
                <UniversityCard
                  key={university.id}
                  university={university}
                  isDark={isDark}
                />
              ))}
            </div>
          ) : (
            <div
              className={`p-12 text-center border rounded-2xl max-w-md mx-auto ${
                isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
              }`}
            >
              <GraduationCap className="w-10 h-10 text-indigo-500 mx-auto mb-3" />
              <h3 className="font-bold text-base">No Universities Found</h3>
              <p
                className={`text-xs mt-1 ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}
              >
                No institutions match the current search filters for {selectedState}. Try resetting your type filter or search term.
              </p>
            </div>
          )}
        </div>
      </div>
    </DashboardLayoutWrapper>
  );
}