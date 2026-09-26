'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../../context/ThemeContext';
import { CareerExplorerFormData } from './types';
import { ProfileAndTargetStep } from './ProfileAndTargetStep';
import { AcademicContextStep } from './AcademicContextStep';
import { LifestyleAndPreferencesStep } from './LifestyleAndPreferencesStep';
import { PersonalBioAndQuestionsStep } from './PersonalBioAndQuestionsStep';
import { Compass, GraduationCap, Heart, MessageSquare, ArrowRight, ArrowLeft, Sparkles, CheckCircle2 } from 'lucide-react';

const INITIAL_FORM_DATA: CareerExplorerFormData = {
  langauge:'English',
  educationLevel: 'high_school',
  academicStream: 'sciences',
  targetRoleOrDomain: '',
  homeCountry: '',
  homeStateOrCity: '',
  targetCountries: ['global'],

  currentGradeOrYear: '',
  currentSchoolOrUniversity: '',
  majorOrSubjects: [],
  gpaOrGradeEstimate: '',
  preferredDegreeType: 'bachelors',

  keyInterestsAndHobbies: [],
  coreStrengths: [],
  primaryCareerPriority: 'high_salary',
  targetWorkEnvironment: 'hybrid',
  desiredWorkHours: 'standard',

  personalBioAndBackground: '',
  careerInspirationsOrQuestions: '',
};

export default function CareerExplorerForm() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<CareerExplorerFormData>(INITIAL_FORM_DATA);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const updateForm = (fields: Partial<CareerExplorerFormData>) => {
    setFormData((prev) => ({ ...prev, ...fields }));
  };

  const handleNext = () => {
    if (step === 1 && !formData.targetRoleOrDomain.trim()) {
      alert('Please enter a target career or domain you wish to explore.');
      return;
    }

      // if(!formData.academicStream || !formData.careerInspirationsOrQuestions || !formData.coreStrengths
      //   || !formData.currentGradeOrYear || !formData.currentSchoolOrUniversity || !formData.desiredWorkHours
      //   || !formData.educationLevel || !formData.gpaOrGradeEstimate || !formData.homeCountry || !formData.homeStateOrCity
      //   || !formData.keyInterestsAndHobbies || !formData.majorOrSubjects || !formData.personalBioAndBackground
      //   || !formData.preferredDegreeType || !formData.primaryCareerPriority || !formData.targetCountries
      //   || !formData.targetRoleOrDomain || !formData.targetWorkEnvironment
      // ){
      //   alert('All Field Is Required')
      //   return
      // }

    setStep((prev) => Math.min(prev + 1, 4));
  };

  const handlePrev = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      if(!formData.academicStream || !formData.careerInspirationsOrQuestions || !formData.coreStrengths
        || !formData.currentGradeOrYear || !formData.currentSchoolOrUniversity || !formData.desiredWorkHours
        || !formData.educationLevel || !formData.gpaOrGradeEstimate || !formData.homeCountry || !formData.homeStateOrCity
        || !formData.keyInterestsAndHobbies || !formData.majorOrSubjects || !formData.personalBioAndBackground
        || !formData.preferredDegreeType || !formData.primaryCareerPriority || !formData.targetCountries
        || !formData.targetRoleOrDomain || !formData.targetWorkEnvironment
      ){
        alert(`
        All Field Is Required, 
        Go back and check and make sure that you fill any field.`)
      }
      console.log('Submitted Career Explorer Payload:', formData);
      // Trigger AI Deep Dive Generation...
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const stepsHeader = [
    { number: 1, title: 'Profile & Target', icon: Compass },
    { number: 2, title: 'Academics', icon: GraduationCap },
    { number: 3, title: 'Lifestyle & Priorities', icon: Heart },
    { number: 4, title: 'Personal Bio & Doubts', icon: MessageSquare },
  ];

  return (
    <div className={`min-h-screen transition-colors ${
      isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header Section */}
        <div className="text-center space-y-2">
          {/* <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs
           font-semibold bg-indigo-500/10 text-indigo-500 border border-indigo-500/20">
            <Sparkles className="w-3.5 h-3.5" /> AI Career Navigator & Pathway Architect
          </div> */}
          <h1 className="text-xl sm:text-3xl font-extrabold tracking-tight">
            Explore Your Career Pathway
          </h1>
          <p className={`text-sm sm:text-base max-w-xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Get a tailored, multi-year roadmap including university entrance exams,
             top global schools, salary trajectory, and alternative pathways.
          </p>
        </div>

        {/* Stepper Wizard Bar */}
        <div className={`p-4 rounded-2xl border ${isDark ? 'bg-slate-900/60 border-slate-700' 
          : 'bg-white border-slate-300 shadow-sm'}`}>
          <div className="flex items-center justify-between">
            {stepsHeader.map((s, idx) => {
              const Icon = s.icon;
              const isActive = step === s.number;
              const isCompleted = step > s.number;

              return (
                <React.Fragment key={s.number}>
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center 
                    font-bold text-sm transition-all ${
                      isCompleted 
                        ? 'bg-indigo-600 text-white' 
                        : isActive 
                        ? 'bg-indigo-500/20 text-indigo-500 border-2 border-indigo-500' 
                        : isDark ? 'bg-slate-800 text-slate-500' : 'bg-slate-100 text-slate-400'
                    }`}>
                      {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                    </div>
                    <div className="hidden sm:block">
                      <div className={`text-xs font-semibold ${isActive ? 'text-indigo-500' 
                        : isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        Step {s.number}
                      </div>
                      <div className={`text-sm max-xl:hidden font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {s.title}
                      </div>
                    </div>
                  </div>
                  {idx < stepsHeader.length - 1 && (
                    <div className={`flex-1 h-0.5 mx-3 ${
                      step > idx + 1 ? 'bg-indigo-600' : isDark ? 'bg-slate-800' : 'bg-slate-200'
                    }`} />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Dynamic Form Step Card */}
        <div className={`p-6 sm:p-8 rounded-2xl border shadow-sm ${
          isDark ? 'bg-slate-900/80 border-slate-700' : 'bg-white border-slate-300'
        }`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.2 }}
            >
              {step === 1 && (
                <ProfileAndTargetStep formData={formData} updateForm={updateForm} isDark={isDark} />
              )}
              {step === 2 && (
                <AcademicContextStep formData={formData} updateForm={updateForm} isDark={isDark} />
              )}
              {step === 3 && (
                <LifestyleAndPreferencesStep formData={formData} updateForm={updateForm} isDark={isDark} />
              )}
              {step === 4 && (
                <PersonalBioAndQuestionsStep formData={formData} updateForm={updateForm} isDark={isDark} />
              )}
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="mt-8 pt-6 border-t border-slate-300 dark:border-slate-700 flex items-center justify-between">
            <button
              type="button"
              onClick={handlePrev}
              disabled={step === 1}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                step === 1
                  ? 'opacity-0 pointer-events-none'
                  : isDark
                  ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </button>

            {step < 4 ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm 
                font-semibold rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-indigo-500/20"
              >
                Continue <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <div>
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 
                hover:to-blue-700 text-white text-sm font-bold rounded-xl transition-all flex 
                items-center gap-2 shadow-lg shadow-indigo-500/25 max-sm:hidden"
              >
                {isSubmitting ? (
                  <span>Analyzing...</span>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" /> Create Career Deep-Dive
                  </>
                )}
              </button>

               <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 
                hover:to-blue-700 text-white text-sm font-bold rounded-xl transition-all flex 
                items-center gap-2 shadow-lg shadow-indigo-500/25 sm:hidden"
              >
                {isSubmitting ? (
                  <span>Analyzing...</span>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" /> Explore Career
                  </>
                )}
              </button>

              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}