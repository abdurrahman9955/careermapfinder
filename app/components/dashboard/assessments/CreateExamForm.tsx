'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Globe,
  MapPin,
  GraduationCap,
  Award,
  Sparkles,
  Layers,
  Target,
  CheckCircle2,
  ChevronRight,
  BrainCircuit,
  ArrowRight
} from 'lucide-react';
import { useTheme } from '../../../context/ThemeContext';
import { useCreateExamForm } from './useCreateExamForm';
import { SubjTagInput } from './SubjTagInput';
import { COUNTRIES, ACADEMIC_EXAMS_BY_COUNTRY, PROFESSIONAL_DOMAINS } from './constants';
import { DifficultyLevel } from './types';

export default function CreateExamForm() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const { state, actions } = useCreateExamForm();

  const handleFormSubmit = (e: React.FormEvent) => {
    actions.handleSubmit(e, (payload) => {
      console.log('Exam Configuration Payload:', payload);
      alert('Exam profile saved! AI Engine is generating your tailored study plan.');
    });
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="text-center space-y-4">
          {/* <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full 
          text-xs font-semibold tracking-wide uppercase bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
            <Sparkles className="w-4 h-4" />
            AI Exam Engine
          </div> */}
          <h1 className="text-xl sm:text-3xl font-extrabold tracking-tight">
            Configure Your Exam Setup
          </h1>
          <p className={`text-base sm:text-md max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Specify your academic exam or professional certification details 
            to automatically generate relevant past questions, practice tests, and study guides.
          </p>
        </div>

        {/* Form Container */}
        <form onSubmit={handleFormSubmit} className={`p-6 rounded-2xl border shadow-xl backdrop-blur-md transition-all ${
          isDark ? 'bg-slate-900/80 border-slate-700 shadow-slate-950/50' : 'bg-white/90 border-slate-300 shadow-slate-200/50'
        }`}>
          
          {/* STEP 1: CATEGORY TOGGLE */}
          <div className="space-y-4 ">
            <label className="text-xs font-bold uppercase tracking-wider  flex items-center gap-2">
              <Layers className="w-4 h-4 text-indigo-500" /> 1. Select Category
            </label>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => actions.setExamCategory('academic')}
                className={`flex items-start gap-4 p-5 rounded-xl border-2 text-left 
                  transition-all relative overflow-hidden ${
                  state.examCategory === 'academic'
                    ? 'border-indigo-500 bg-indigo-500/5'
                    : isDark ? 'border-slate-700 bg-slate-800/40 hover:border-slate-700' 
                    : 'border-slate-300 bg-slate-50 hover:border-slate-300'
                }`}
              >
                <div className={`p-3 rounded-lg ${state.examCategory === 'academic' ? 'bg-indigo-500 text-white' 
                  : isDark ? 'bg-slate-800 text-slate-400' : 'bg-slate-200 text-slate-600'}`}>
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-xs sm:text-base ">Academic & Board Exams</h3>
                  <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    High school boards, national university entrance tests.
                  </p>
                </div>
                {state.examCategory === 'academic' && (
                  <CheckCircle2 className="w-5 h-5 text-indigo-500 absolute top-4 right-4" />
                )}
              </button>

              <button
                type="button"
                onClick={() => actions.setExamCategory('professional')}
                className={`flex items-start gap-4 p-5 rounded-xl border-2 text-left transition-all relative overflow-hidden ${
                  state.examCategory === 'professional'
                    ? 'border-indigo-500 bg-indigo-500/5'
                    : isDark ? 'border-slate-700 bg-slate-800/40 hover:border-slate-700' 
                    : 'border-slate-300 bg-slate-50 hover:border-slate-300'
                }`}
              >
                <div className={`p-3 rounded-lg ${state.examCategory === 'professional' ? 'bg-indigo-500 text-white' 
                  : isDark ? 'bg-slate-800 text-slate-400' : 'bg-slate-200 text-slate-600'}`}>
                  <Award className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-xs sm:text-base">Professional Certifications</h3>
                  <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    Global industry accreditations e.g (Cybersecurity).
                  </p>
                </div>
                {state.examCategory === 'professional' && (
                  <CheckCircle2 className="w-5 h-5 text-indigo-500 absolute top-4 right-4" />
                )}
              </button>
            </div>
          </div>

          <hr className={`my-8 ${isDark ? 'border-slate-700' : 'border-slate-300'}`} />

          {/* STEP 2: DYNAMIC PATHS */}
          <AnimatePresence mode="wait">
            {state.examCategory === 'academic' ? (
              <motion.div
                key="academic-fields"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
                  <Globe className="w-4 h-4 text-indigo-500" /> 2. Academic Jurisdiction & Details
                </label>

                {/* Country / State Cascade */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium mb-1.5">Country / Region</label>
                    <div className="relative">
                      <select
                        value={state.selectedCountry}
                        onChange={(e) => {
                          actions.setSelectedCountry(e.target.value);
                          actions.setAcademicExamName('');
                        }}
                        className={`w-full px-4 py-3 rounded-xl border text-sm appearance-none 
                          outline-none focus:ring-2 focus:ring-indigo-500 transition ${
                          isDark ? 'bg-slate-950 border-slate-700 text-white' 
                          : 'bg-slate-50 border-slate-300 text-slate-900'
                        }`}
                      >
                        {COUNTRIES.map((c) => (
                          <option key={c.id} value={c.id}>
                            {c.flag} {c.name}
                          </option>
                        ))}
                      </select>
                      <ChevronRight className="w-4 h-4 text-slate-400 absolute right-4 top-3.5 
                      rotate-90 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium mb-1.5">State / Province (Optional)</label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        placeholder="write your state / province"
                        value={state.stateRegion}
                        onChange={(e) => actions.setStateRegion(e.target.value)}
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm outline-none 
                          focus:ring-2 focus:ring-indigo-500 transition ${
                          isDark ? 'bg-slate-950 border-slate-700 text-white placeholder-slate-600' 
                          : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* Exam Board Options */}
                <div>
                  <label className="block text-xs font-medium mb-1.5">Select Exam or Board</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {(ACADEMIC_EXAMS_BY_COUNTRY[state.selectedCountry] || ACADEMIC_EXAMS_BY_COUNTRY['global']).map((exam) => (
                      <button
                        type="button"
                        key={exam}
                        onClick={() => actions.setAcademicExamName(exam)}
                        className={`p-3 text-xs font-medium rounded-xl border text-center transition ${
                          state.academicExamName === exam
                            ? 'border-indigo-500 bg-indigo-500/10 text-indigo-500 font-bold'
                            : isDark ? 'border-slate-700 bg-slate-950/50 hover:bg-slate-800' 
                            : 'border-slate-300 bg-slate-50 hover:bg-slate-100'
                        }`}
                      >
                        {exam}
                      </button>
                    ))}
                  </div>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      placeholder="Or enter custom exam name..."
                      value={state.academicExamName}
                      onChange={(e) => actions.setAcademicExamName(e.target.value)}
                      className={`w-full px-4 py-2.5 rounded-xl border text-xs outline-none focus:ring-2
                         focus:ring-indigo-500 transition ${
                        isDark ? 'bg-slate-950 border-slate-700 text-white placeholder-slate-600' 
                        : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>
                </div>

                {/* Stream */}
                <div>
                  <label className="block text-xs font-medium mb-1.5">Academic Stream</label>
                  <div className="flex gap-2">
                    {['Sciences', 'Commercial', 'Arts'].map((str) => (
                      <button
                        type="button"
                        key={str}
                        onClick={() => actions.setStream(str)}
                        className={`px-4 py-2 rounded-lg text-xs font-medium border transition ${
                          state.stream === str
                            ? 'bg-indigo-500 text-white border-indigo-500'
                            : isDark ? 'border-slate-700 bg-slate-950 text-slate-400' 
                            : 'border-slate-300 bg-slate-50 text-slate-600'
                        }`}
                      >
                        {str}
                      </button>
                    ))}
                  </div>
                </div>

                {/* SubjTagInput Component */}
                <SubjTagInput
                  stream={state.stream}
                  selectedSubjects={state.selectedSubjects}
                  customSubjectInput={state.customSubjectInput}
                  isDark={isDark}
                  onToggleSubject={actions.toggleSubject}
                  onCustomInputChange={actions.setCustomSubjectInput}
                  onAddCustomSubject={actions.handleAddCustomSubject}
                />
                
                <div className="grid grid-cols-1 mt-4 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium mb-1.5">Course / Program You Want Study *</label>
                    <input
                      type="text"
                      placeholder="e.g computer science"
                      value={state.course}
                      onChange={(e) => actions.setCourse(e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border text-sm outline-none focus:ring-2 
                        focus:ring-indigo-500 transition ${
                        isDark ? 'bg-slate-950 border-slate-700 text-white placeholder-slate-600' 
                        : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium mb-1.5">Dream Career / Job You Want Become*</label>
                    <input
                      type="text"
                      placeholder="e.g doftware developer"
                      value={state.career}
                      onChange={(e) => actions.setCareer(e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border text-sm outline-none focus:ring-2 
                        focus:ring-indigo-500 transition ${
                        isDark ? 'bg-slate-950 border-slate-700 text-white placeholder-slate-600' 
                        : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>
                </div>


              </motion.div>
            ) : (
              /* PROFESSIONAL EXAM PATH */
              <motion.div
                key="professional-fields"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
                  <Award className="w-4 h-4 text-indigo-500" /> 2. Professional Certification Track
                </label>

                {/* Industry Domains */}
                <div>
                  <label className="block text-xs font-medium mb-2">Industry Domain</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {PROFESSIONAL_DOMAINS.map((domain) => (
                      <button
                        type="button"
                        key={domain.id}
                        onClick={() => actions.setProDomain(domain.id)}
                        className={`p-3.5 rounded-xl border text-left transition flex items-center gap-3 ${
                          state.proDomain === domain.id
                            ? 'border-indigo-500 bg-indigo-500/10 text-indigo-500'
                            : isDark ? 'border-slate-700 bg-slate-950/50 hover:bg-slate-800' 
                            : 'border-slate-300 bg-slate-50 hover:bg-slate-100'
                        }`}
                      >
                        <span className="text-xl">{domain.icon}</span>
                        <span className="text-xs font-semibold">{domain.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium mb-1.5">Certification Body / Vendor</label>
                    <input
                      type="text"
                      placeholder="e.g. AWS, Cisco, PMI, CompTIA"
                      value={state.certBody}
                      onChange={(e) => actions.setCertBody(e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border text-sm outline-none focus:ring-2 
                        focus:ring-indigo-500 transition ${
                        isDark ? 'bg-slate-950 border-slate-700 text-white placeholder-slate-600' 
                        : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium mb-1.5">Exam Name & Code</label>
                    <input
                      type="text"
                      placeholder="e.g. Solutions Architect Associate (SAA-C03)"
                      value={state.proExamName}
                      onChange={(e) => actions.setProExamName(e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border text-sm outline-none focus:ring-2 
                        focus:ring-indigo-500 transition ${
                        isDark ? 'bg-slate-950 border-slate-700 text-white placeholder-slate-600' 
                        : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>
                </div>

                
                <div className="grid grid-cols-1 mt-4 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium mb-1.5">Program / Course You Study At School *</label>
                    <input
                      type="text"
                      placeholder="e.g computer science"
                      value={state.course}
                      onChange={(e) => actions.setCourse(e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border text-sm outline-none focus:ring-2 
                        focus:ring-indigo-500 transition ${
                        isDark ? 'bg-slate-950 border-slate-700 text-white placeholder-slate-600' 
                        : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium mb-1.5">Dream Career / Job You Want Become*</label>
                    <input
                      type="text"
                      placeholder="e.g doftware developer"
                      value={state.career}
                      onChange={(e) => actions.setCareer(e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border text-sm outline-none focus:ring-2 
                        focus:ring-indigo-500 transition ${
                        isDark ? 'bg-slate-950 border-slate-700 text-white placeholder-slate-600' 
                        : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>
                </div>

              </motion.div>
            )}
          </AnimatePresence>

          <hr className={`my-8 ${isDark ? 'border-slate-700' : 'border-slate-300'}`} />

          {/* STEP 3: AI TARGET STRATEGY */}
          <div className="space-y-6">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
              <BrainCircuit className="w-4 h-4 text-indigo-500" /> 3. Target Strategy & AI Tuning
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium mb-1.5">Primary Objective</label>
                <select
                  value={state.examPurpose}
                  onChange={(e) => actions.setExamPurpose(e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl border text-sm outline-none focus:ring-2 
                    focus:ring-indigo-500 transition ${
                    isDark ? 'bg-slate-950 border-slate-700 text-white' 
                    : 'bg-slate-50 border-slate-300 text-slate-900'}`}>
                  <option value="class-10-to -12-exam">Class 11 to 12 Exam</option>
                  <option value="admission">University Admission</option>
                  <option value="licensure">Professional Licensing / Career Entry</option>
                  <option value="scholarship">Scholarship Qualification</option>
                  <option value="revision">General Practice & Prep</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium mb-1.5">Target Score / Grade Goal</label>
                <div className="relative">
                  <Target className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    placeholder="e.g. 300+, 1000, 100%"
                    value={state.targetScore}
                    onChange={(e) => actions.setTargetScore(e.target.value)}
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm outline-none focus:ring-2 
                      focus:ring-indigo-500 transition ${
                      isDark ? 'bg-slate-950 border-slate-700 text-white placeholder-slate-600' 
                      : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* AI Difficulty Selector */}
            <div>
              <label className="block text-xs font-medium mb-1.5">AI Engine Difficulty Mode</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {[
                  // { id: 'adaptive', label: 'Adaptive (Smart AI)' },
                  { id: 'beginner', label: 'Foundational' },
                  { id: 'intermediate', label: 'Standard Level' },
                  { id: 'advanced', label: 'High Distinction' },
                ].map((diff) => (
                  <button
                    type="button"
                    key={diff.id}
                    onClick={() => actions.setDifficultyLevel(diff.id as DifficultyLevel)}
                    className={`p-3 text-xs font-medium rounded-xl border text-center transition ${
                      state.difficultyLevel === diff.id
                        ? 'border-indigo-500 bg-indigo-500/10 text-indigo-500 font-bold'
                        : isDark ? 'border-slate-700 bg-slate-950/50 hover:bg-slate-800' 
                        : 'border-slate-300 bg-slate-50 hover:bg-slate-100'
                    }`}
                  >
                    {diff.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Prompt / Notes */}
            <div>
              <label className="block text-xs font-medium mb-1.5 -mt-2">
                Describe Your exam In details {state.additionalNotes.length}/1000 *</label>
              <textarea
                rows={3}
                maxLength={1000}
                placeholder=
                "Describe this exam you want practice and any spicipic details about this exam and the purpose of taking this exam for you."
                value={state.additionalNotes}
                required
                onChange={(e) => actions.setAdditionalNotes(e.target.value)}
                className={`w-full p-2 h-32 rounded-xl border text-sm outline-none focus:ring-2 
                  focus:ring-indigo-500 transition ${
                  isDark ? 'bg-slate-950 border-slate-700 text-white placeholder-slate-600' 
                  : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                }`}
              />
            </div>

               <div>
              <label className="block text-xs font-medium mb-1.5 -mt-4">
                Your Academic Background & Bio {state.background.length}/1000 *</label>
              <textarea
                rows={3}
                maxLength={1000}
                placeholder="Describe your academic background and your qualifications or career you want archieve."
                value={state.background}
                required
                onChange={(e) => actions.setBackgrund(e.target.value)}
                className={`w-full p-2 h-32 rounded-xl border text-sm outline-none focus:ring-2 
                  focus:ring-indigo-500 transition ${
                  isDark ? 'bg-slate-950 border-slate-700 text-white placeholder-slate-600' 
                  : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                }`}
              />
            </div>

          </div>

          {/* Submit */}
          <div className="mt-2 pt-4">
            <button
              type="submit"
              disabled={state.isSubmitting}
              className="w-full py-4 px-6 rounded-xl font-bold text-white bg-indigo-600 
              hover:bg-indigo-500 active:scale-[0.99] transition shadow-lg shadow-indigo-500/25 
              flex items-center justify-center gap-2 text-base disabled:opacity-50"
            >
              {state.isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Creating Your Exam...
                </>
              ) : (
                <>
                  Create Practice Exam
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}