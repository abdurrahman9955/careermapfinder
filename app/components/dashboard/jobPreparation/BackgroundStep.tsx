import React, { useState } from 'react';
import { JobPrepFormData } from './types';
import { SUGGESTED_SKILLS } from './constants';
import { GraduationCap, Award, Plus, X, FileText, Sparkles } from 'lucide-react';

interface Props {
  formData: JobPrepFormData;
  updateForm: (fields: Partial<JobPrepFormData>) => void;
  isDark: boolean;
}

export const BackgroundStep: React.FC<Props> = ({ formData, updateForm, isDark }) => {
  const [skillInput, setSkillInput] = useState('');

  const isStudentOrGrad = ['student_intern', 'recent_graduate'].includes(formData.experienceLevel);

  const addSkill = (skill: string) => {
    const trimmed = skill.trim();
    if (trimmed && !formData.keySkills.includes(trimmed)) {
      updateForm({ keySkills: [...formData.keySkills, trimmed] });
      setSkillInput('');
    }
  };

  const removeSkill = (skillToRemove: string) => {
    updateForm({ keySkills: formData.keySkills.filter((s) => s !== skillToRemove) });
  };

  return (
    <div className="space-y-6">
      {/* Conditional Header Notification */}
      <div className={`p-4 rounded-xl border flex items-start gap-3 ${
        isDark ? 'bg-blue-950/30 border-blue-700 text-blue-200' 
        : 'bg-blue-50 border-blue-300 text-blue-900'
      }`}>
        <Sparkles className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
        <p className="text-xs leading-relaxed">
          {isStudentOrGrad
            ? 'Since you are early in your career, the AI interviewer will focus more on foundational concepts, academic projects, and core problem-solving capability.'
            : 'As an experienced professional, the interview will dive deep into past architectural decisions, quantifiable achievements, and practical scenarios.'}
        </p>
      </div>

      {/* Dynamic Academic or Work Background Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
            {isStudentOrGrad ? 'Degree / Qualification' : 'Highest Degree Obtained'} <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <GraduationCap className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="e.g. B.Sc. Computer Science"
              value={formData.educationDegree}
              onChange={(e) => updateForm({ educationDegree: e.target.value })}
              className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm font-medium 
                transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isDark 
                  ? 'bg-slate-800/80 border-slate-700 text-white placeholder-slate-500' 
                  : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'
              }`}
            />
          </div>
        </div>

        <div>
          <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
            {isStudentOrGrad ? 'University / Institution' : 'Most Recent Employer / Company'} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder={isStudentOrGrad ? 'e.g. havard University' : 'e.g. google, Remote Startup'}
            value={formData.universitySchool}
            onChange={(e) => updateForm({ universitySchool: e.target.value })}
            className={`w-full px-4 py-3 rounded-xl border text-sm font-medium 
            transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              isDark 
                ? 'bg-slate-800/80 border-slate-700 text-white placeholder-slate-500' 
                : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'
            }`}
          />
        </div>
      </div>

      {!isStudentOrGrad && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={`block text-sm font-semibold mb-2 
              ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
              Years of Experience <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              min={0}
              max={40}
              value={formData.yearsOfExperience}
              onChange={(e) => updateForm({ yearsOfExperience: Number(e.target.value) })}
              className={`w-full px-4 py-3 rounded-xl border text-sm font-medium 
              transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isDark 
                  ? 'bg-slate-800/80 border-slate-700 text-white' 
                  : 'bg-white border-slate-300 text-slate-900'
              }`}
            />
          </div>
          <div>
            <label className={`block text-sm font-semibold mb-2 
              ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
              Current or Previous Job Title  <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Full Stack Developer"
              value={formData.currentPreviousTitle}
              onChange={(e) => updateForm({ currentPreviousTitle: e.target.value })}
              className={`w-full px-4 py-3 rounded-xl border text-sm font-medium 
                transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isDark 
                  ? 'bg-slate-800/80 border-slate-700 text-white placeholder-slate-500' 
                  : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'
              }`}
            />
          </div>
        </div>
      )}

      {/* Key Skills Picker & Tagging */}
      <div>
        <label className={`block text-sm font-semibold mb-2 
          ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
          Core Skills & Technologies <span className="text-red-500">*</span>
        </label>
        <div className="flex gap-2 mb-3">
          <input
            type="text"
            placeholder="Add a skill (e.g. React, PostgreSQL, Leadership) and press Enter"
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill(skillInput))}
            className={`flex-1 px-4 py-2.5 rounded-xl border text-sm transition-colors 
              focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              isDark 
                ? 'bg-slate-800/80 border-slate-700 text-white placeholder-slate-500' 
                : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'
            }`}
          />
          <button
            type="button"
            onClick={() => addSkill(skillInput)}
            className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm 
            font-semibold rounded-xl transition-colors flex items-center gap-1">
            <Plus className="w-4 h-4" /> Add
          </button>
        </div>

        {/* Selected Skill Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {formData.keySkills.map((skill) => (
            <span
              key={skill}
              className={`px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 border ${
                isDark 
                  ? 'bg-blue-900/40 border-blue-700 text-blue-200' 
                  : 'bg-blue-50 border-blue-300 text-blue-800'
              }`}
            >
              {skill}
              <button type="button" onClick={() => removeSkill(skill)}>
                <X className="w-3.5 h-3.5 hover:text-red-500" />
              </button>
            </span>
          ))}
        </div>

        {/* Quick Suggestion Chips */}
        {/* <div className="space-y-1">
          <span className={`text-xs font-medium ${isDark ? 'text-slate-400' 
          : 'text-slate-500'}`}>Quick Suggestions:</span>
          <div className="flex flex-wrap gap-1.5">
            {SUGGESTED_SKILLS.Software.concat(SUGGESTED_SKILLS.General).map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => addSkill(s)}
                className={`text-[11px] px-2.5 py-1 rounded-md border transition-colors ${
                  isDark
                    ? 'border-slate-700 bg-slate-800/40 text-slate-400 hover:text-white hover:border-slate-500'
                    : 'border-slate-300 bg-slate-100 text-slate-600 hover:text-slate-900 hover:border-slate-300'
                }`}
              >
                + {s}
              </button>
            ))}
          </div>
        </div> */}
      </div>

      {/* Projects or Summary Textarea */}
      <div>
        <label className={`block text-sm font-semibold mb-2 
          ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
          {isStudentOrGrad ? 'Key Academic Projects or Achievements' 
          : 'Summary of Key Projects & Achievements'} <span className="text-red-500">*</span>
        </label>
        <textarea
          rows={3}
          placeholder="Mention 1-2 major projects, systems you built, or results you delivered..."
          value={formData.projectsOrHighlights}
          onChange={(e) => updateForm({ projectsOrHighlights: e.target.value })}
          className={`w-full p-3 rounded-xl border text-sm transition-colors 
            focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            isDark 
              ? 'bg-slate-800/80 border-slate-700 text-white placeholder-slate-500' 
              : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'
          }`}
        />
      </div>
    </div>
  );
};