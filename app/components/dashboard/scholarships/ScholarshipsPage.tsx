'use client';

import { useState, useMemo } from 'react';
import { Search, Globe2, X, BookOpen } from 'lucide-react';
import { DashboardLayoutWrapper } from '../DashboardLayoutWrapper';
import { useTheme } from '../../../context/ThemeContext';
import { ALL_SCHOLARSHIPS, ALL_STATES } from './data';
import { ScholarshipType } from './types';
import { ScholarshipCard } from './ScholarshipCard';

export default function ScholarshipsPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<ScholarshipType | 'all'>('all');
   
  const [selectedCategory, setSelectedCategory] = useState<string | 'all'>('all');

  const filteredScholarships = useMemo(() => {
    return ALL_SCHOLARSHIPS.filter((item) => {
 
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.provider.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.eligibility.eligibleCourses.some((c) =>
          c.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesState =
        selectedState === 'all'
          ? true
          : selectedState === 'Pan-India'
          ? item.isNationwide
          : item.stateOrigin === selectedState;

      const matchesType = selectedType === 'all' ? true : item.type === selectedType;

      const matchesCategory = selectedCategory === 'all'  ? true
       : item.eligibility.eligibleCategories.some(
        (cat) => cat.toLowerCase() === selectedCategory.toLowerCase()
      );

      return matchesSearch && matchesState && matchesType && matchesCategory;
    });
  }, [searchQuery, selectedState, selectedType, selectedCategory]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedState('all');
    setSelectedType('all');
    setSelectedCategory('all');
  };

  return (
    <DashboardLayoutWrapper>
      <div
        className={`min-h-screen  transition-colors duration-200 ${
          isDark ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'
        }`}
      >
        {/* Page Header */}
        <div className="max-w-7xl mx-auto text-center mb-8">
          <div
            className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full border mb-3 ${
              isDark
                ? 'text-indigo-400 bg-indigo-950/80 border-indigo-800/60'
                : 'text-indigo-700 bg-indigo-100 border-indigo-200'
            }`}
          >
            <Globe2 className="w-3.5 h-3.5" />
            <span>28 States & Pan-India Database</span>
          </div>

          <h1 className="text-xl sm:text-3xl font-extrabold tracking-tight">
            Indian Financial Aid & Scholarship Engine
          </h1>
          <p
            className={`mt-2 text-xs sm:text-base max-w-2xl mx-auto ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            Filter through state schemes, government reimbursements, and private grants tailored to your course and domicile.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="max-w-7xl mx-auto mb-3 space-y-4">
          <div
            className={`p-4 border rounded-2xl shadow grid grid-cols-1 md:grid-cols-12 gap-3 items-center ${
              isDark ? 'bg-slate-950 border-slate-700' : 'bg-white border-slate-300'
            }`}
          >
            {/* Search Input Bar */}
            <div className="relative md:col-span-4">
              <Search
                className={`w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search scholarship, course (e.g., B.Tech, MBBS)..."
                className={`w-full border pl-10 pr-10 py-2.5 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
                  isDark
                    ? 'bg-slate-950 border-slate-700 text-white placeholder-slate-500'
                    : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
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

            {/* State Selection Dropdown */}
            <div className="md:col-span-3">
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className={`w-full border px-3 py-2.5 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
                  isDark
                    ? 'bg-slate-950 border-slate-700 text-white'
                    : 'bg-slate-50 border-slate-300 text-slate-900'
                }`}
              >
                <option value="all">All Regions & States</option>
                <option value="Pan-India">National / Pan-India Only</option>
                {ALL_STATES.filter((s) => s !== 'India').map((st) => (
                  <option key={st} value={st}>
                    {st}
                  </option>
                ))}
              </select>
            </div>

            {/* Type Selection Dropdown */}
            <div className="md:col-span-3">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value as any)}
                className={`w-full border
                   px-3 py-2.5 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
                  isDark
                    ? 'bg-slate-950 border-slate-700 text-white'
                    : 'bg-slate-50 border-slate-300 text-slate-900'
                }`}
              >
                <option value="all">All Types</option>
                <option value="Government">Government</option>
                <option value="Merit-Based">Merit-Based</option>
                <option value="Need-Based">Need-Based</option>
                <option value="Institutional">Institutional</option>
                <option value="Private">Private</option>
              </select>
            </div>

              <div className="md:col-span-2">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as any)}
                className={`w-full border px-3 py-2.5 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
                isDark  ? 'bg-slate-950 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`} >

                <option value="all">All Category</option>
                <option value="SC">SC</option>
                <option value="ST">ST</option>
                <option value="BC">BC</option>
                <option value="Kapu">Kapu</option>
                <option value="EBC">EBC</option>
                <option value="OBC">OBC</option>
                <option value="SBC">SBC</option>
                <option value="VJNT">VJNT</option>
                <option value="Minority">Minority</option>

              </select>
            </div>


          </div>

          {/* Active Filter Indicators */}
          <div className="flex items-center justify-between text-xs px-1">
            <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>
              Showing <strong>{filteredScholarships.length}</strong> available opportunities
            </span>

            {(searchQuery || selectedState !== 'all' || selectedType !== 'all') && (
              <button
                onClick={clearFilters}
                className="text-indigo-500 hover:underline flex items-center gap-1 font-semibold"
              >
                <X className="w-3.5 h-3.5" /> Clear Active Filters
              </button>
            )}
          </div>
        </div>

        {/* Scholarships Grid Display */}
        <div className="max-w-7xl mx-auto">
          {filteredScholarships.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredScholarships.map((scholarship) => (
                <ScholarshipCard
                  key={scholarship.id}
                  scholarship={scholarship}
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
              <BookOpen className="w-10 h-10 text-indigo-500 mx-auto mb-3" />
              <h3 className="font-bold text-base">No Scholarships Found</h3>
              <p
                className={`text-xs mt-1 ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}
              >
                Try broadening your search term or choosing "All Regions & States".
              </p>
            </div>
          )}
        </div>
      </div>
    </DashboardLayoutWrapper>
  );
}