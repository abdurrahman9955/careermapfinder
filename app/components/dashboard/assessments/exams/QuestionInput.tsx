'use client';

import React from 'react';
import { QuestionType, QuestionOption } from '@/app/utils/assessments/mock/exam';
import { CheckSquare, Square, Circle, CheckCircle2 } from 'lucide-react';

interface QuestionInputProps {
  questionType: QuestionType;
  options?: QuestionOption[];
  value: string | string[];
  onChange: (val: string | string[]) => void;
  isDark: boolean;
}

export const QuestionInput: React.FC<QuestionInputProps> = ({
  questionType,
  options = [],
  value,
  onChange,
  isDark,
}) => {
  // Single Choice Handler
  const handleSingleSelect = (label: string) => {
    onChange(label);
  };

  // Multiple Select Checkbox Handler
  const handleMultiSelect = (label: string) => {
    const currentValues = Array.isArray(value) ? value : [];
    if (currentValues.includes(label)) {
      onChange(currentValues.filter((v) => v !== label));
    } else {
      onChange([...currentValues, label]);
    }
  };

  // 1. Objective: Multiple Choice (Single Select)
  if (questionType === 'MULTIPLE_CHOICE') {
    return (
      <div className="grid grid-cols-1 gap-3 w-full mt-4">
        {options.map((opt) => {
          const isSelected = value === opt.label;
          return (
            <button
              key={opt.label}
              onClick={() => handleSingleSelect(opt.label)}
              className={`flex items-start gap-3 p-4 rounded-xl border 
                text-left transition-all duration-200 cursor-pointer ${
                isSelected
                  ? 'border-sky-500 bg-sky-500/10 text-sky-400 shadow-md ring-2 ring-sky-500/30'
                  : isDark
                  ? 'bg-slate-900/60 border-slate-700 text-slate-300 hover:border-slate-700 hover:bg-slate-900'
                  : 'bg-white border-slate-300 text-slate-800 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <div className="mt-0.5 shrink-0">
                {isSelected ? (
                  <CheckCircle2 className="w-5 h-5 text-sky-500" />
                ) : (
                  <Circle className="w-5 h-5 text-slate-400" />
                )}
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm px-2 py-0.5 rounded bg-slate-500/10 font-mono">
                  {opt.label}.
                </span>
                <span className="text-sm leading-snug">{opt.text}</span>
              </div>
            </button>
          );
        })}
      </div>
    );
  }

  // 2. Objective: Multiple Select (Multi-Checkboxes)
  if (questionType === 'MULTIPLE_SELECT') {
    const selectedList = Array.isArray(value) ? value : [];
    return (
      <div className="grid grid-cols-1 gap-3 w-full mt-4">
        <span className="text-xs font-semibold text-amber-500 uppercase tracking-wider">
          Select all that apply
        </span>
        {options.map((opt) => {
          const isSelected = selectedList.includes(opt.label);
          return (
            <button
              key={opt.label}
              onClick={() => handleMultiSelect(opt.label)}
              className={`flex items-start gap-3 p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                isSelected
                  ? 'border-indigo-500 bg-indigo-500/10 text-indigo-400 shadow-md ring-2 ring-indigo-500/30'
                  : isDark
                  ? 'bg-slate-900/60 border-slate-700 text-slate-300 hover:border-slate-700'
                  : 'bg-white border-slate-300 text-slate-800 hover:border-slate-300'
              }`}
            >
              <div className="mt-0.5 shrink-0">
                {isSelected ? (
                  <CheckSquare className="w-5 h-5 text-indigo-500" />
                ) : (
                  <Square className="w-5 h-5 text-slate-400" />
                )}
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm px-2 py-0.5 rounded bg-slate-500/10 font-mono">
                  {opt.label}.
                </span>
                <span className="text-sm leading-snug">{opt.text}</span>
              </div>
            </button>
          );
        })}
      </div>
    );
  }

  // 3. Short Input Answer
  if (questionType === 'SHORT_INPUT') {
    return (
      <div className="w-full mt-4 space-y-2">
        <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          Your Answer Input
        </label>
        <input
          type="text"
          value={typeof value === 'string' ? value : ''}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Type your concise answer or derived numerical value here..."
          className={`w-full p-4 rounded-xl border font-mono text-sm 
            transition-all focus:outline-none focus:ring-2 focus:ring-sky-500 ${
            isDark
              ? 'bg-slate-950 border-slate-700 text-slate-100 placeholder-slate-600'
              : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'
          }`}
        />
      </div>
    );
  }

  // 4. Theory / Essay Long Text Input & Code Execution
  return (
    <div className="w-full mt-4 space-y-2">
      <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-slate-400">
        <span>{questionType === 'CODE_EXECUTION' ? 'Source Code Submission' : 'Written Essay Response'}</span>
        <span>{(typeof value === 'string' ? value : '').length} characters</span>
      </div>
      <textarea
        rows={questionType === 'ESSAY_LONG_TEXT' ? 10 : 8}
        value={typeof value === 'string' ? value : ''}
        onChange={(e) => onChange(e.target.value)}
        placeholder={
          questionType === 'CODE_EXECUTION'
            ? 'Write your source code implementation here...'
            : 'Type your detailed answer, essay, or letter here...'
        }
        className={`w-full p-4 rounded-xl border font-sans text-sm leading-relaxed 
          transition-all focus:outline-none focus:ring-2 focus:ring-sky-500 ${
          isDark
            ? 'bg-slate-950 border-slate-700 text-slate-100 placeholder-slate-600'
            : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'
        }`}
      />
    </div>
  );
};