import React from 'react';
import { Plus, CheckCircle2, X } from 'lucide-react';
import { COMMON_SUBJECTS } from './constants';

interface SubjTagInputProps {
  stream: string;
  selectedSubjects: string[];
  customSubjectInput: string;
  isDark: boolean;
  onToggleSubject: (subject: string) => void;
  onCustomInputChange: (val: string) => void;
  onAddCustomSubject: (e: React.KeyboardEvent) => void;
}

export const SubjTagInput: React.FC<SubjTagInputProps> = ({
  stream,
  selectedSubjects,
  customSubjectInput,
  isDark,
  onToggleSubject,
  onCustomInputChange,
  onAddCustomSubject,
}) => {
  const availableSubjects = COMMON_SUBJECTS[stream] || COMMON_SUBJECTS['Sciences'];

  return (
    <div>
      <label className="block text-xs font-medium mb-1.5">
        Target Subjects <span className="text-slate-400 font-normal">(Select or type below)</span>
      </label>
      {/* <div className="flex flex-wrap gap-2 mb-3">
        {availableSubjects.map((subj) => {
          const isSelected = selectedSubjects.includes(subj);
          return (
            <button
              type="button"
              key={subj}
              onClick={() => onToggleSubject(subj)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition flex items-center gap-1.5 ${
                isSelected
                  ? 'bg-emerald-500/15 border-emerald-500 text-emerald-500'
                  : isDark ? 'border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700' : 'border-slate-200 bg-slate-50 text-slate-600'
              }`}
            >
              {isSelected ? <CheckCircle2 className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
              {subj}
            </button>
          );
        })}
      </div> */}

      <input
        type="text"
        placeholder="Add custom subject (press Enter)..."
        value={customSubjectInput}
        onChange={(e) => onCustomInputChange(e.target.value)}
        onKeyDown={onAddCustomSubject}
        className={`w-full px-4 py-2.5 rounded-xl border text-xs outline-none focus:ring-2 focus:ring-emerald-500 transition ${
          isDark ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-600' : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
        }`}
      />

      {selectedSubjects.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5 items-center">
          <span className="text-xs text-slate-500 mr-1">Selected:</span>
          {selectedSubjects.map((s) => (
            <span
              key={s}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-500 text-white"
            >
              {s}
              <X className="w-3 h-3 cursor-pointer hover:opacity-75" onClick={() => onToggleSubject(s)} />
            </span>
          ))}
        </div>
      )}

    </div>
  );
};