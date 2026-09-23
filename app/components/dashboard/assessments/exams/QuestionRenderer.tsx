'use client';

import React from 'react';
import { QuestionVisualType } from '@/app/utils/assessments/mock/exam';
import { Terminal, Table as TableIcon, Image as ImageIcon, FileText } from 'lucide-react';

interface QuestionRendererProps {
  visualType: QuestionVisualType;
  prompt: string;
  supplementaryData?: {
    codeLanguage?: string;
    codeSnippet?: string;
    tableHeaders?: string[];
    tableData?: string[][];
    imageUrl?: string;
    markdownText?: string;
  };
  isDark: boolean;
}

export const QuestionRenderer: React.FC<QuestionRendererProps> = ({
  visualType,
  prompt,
  supplementaryData,
  isDark,
}) => {
  return (
    <div className="space-y-4 w-full">
      {/* Primary Prompt / Markdown Display */}
      <div className={`prose max-w-none text-base leading-relaxed 
        ${isDark ? 'prose-invert text-slate-100' : 'text-slate-900'}`}>
        <p className="whitespace-pre-line font-medium text-sm leading-snug">{prompt}</p>
      </div>

      {/* Render Markdown Supplementary Context */}
      {supplementaryData?.markdownText && (
        <div className={`p-4 rounded-xl border text-sm leading-relaxed ${
          isDark ? 'bg-slate-950/80 border-slate-700 text-slate-300' : 'bg-slate-100/90 border-slate-300 text-slate-800'
        }`}>
          <div className="flex items-center gap-2 mb-2 font-semibold text-xs uppercase tracking-wider text-sky-500">
            <FileText className="w-4 h-4" /> Reading Context / Passage
          </div>
          <p className="whitespace-pre-line text-xs">{supplementaryData.markdownText}</p>
        </div>
      )}
      

      {/* Dynamic Table Visualization */}
      {visualType === 'TABLE' && supplementaryData?.tableHeaders && (
        <div className={`overflow-x-auto rounded-xl border shadow-sm 
        ${isDark ? 'border-slate-700 bg-slate-950' : 'border-slate-300 bg-white'}`}>
          <div className="flex items-center gap-2 px-4 py-2 border-b border-inherit 
          text-xs font-semibold text-amber-500 uppercase tracking-wider">
            <TableIcon className="w-4 h-4" /> Data Reference Table
          </div>
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className={isDark ? 'bg-slate-900/90 text-slate-200' : 'bg-slate-100 text-slate-800'}>
                {supplementaryData.tableHeaders.map((header, idx) => (
                  <th key={idx} className="p-3 border-b border-inherit font-semibold">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {supplementaryData.tableData?.map((row, rIdx) => (
                <tr key={rIdx} className={`border-b border-inherit ${
                  isDark ? 'hover:bg-slate-900/50 text-slate-300' : 'hover:bg-slate-50 text-slate-700'
                }`}>
                  {row.map((cell, cIdx) => (
                    <td key={cIdx} className="p-3 font-mono text-xs">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Dynamic Code Visualization */}
      {visualType === 'CODE' && supplementaryData?.codeSnippet && (
        <div className="rounded-xl overflow-hidden border border-slate-700 bg-slate-950 text-slate-100 shadow-inner">
          <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b 
          border-slate-700 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-emerald-400" />
              {supplementaryData.codeLanguage || 'code'}
            </span>
            <span>UTF-8</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs font-mono leading-relaxed text-emerald-300">
            <code>{supplementaryData.codeSnippet}</code>
          </pre>
        </div>
      )}


      {/* Dynamic Image Display */}
      {visualType === 'IMAGE' && supplementaryData?.imageUrl && (
        <div className={`p-2 rounded-xl border flex justify-center 
        ${isDark ? 'border-slate-700 bg-slate-950' : 'border-slate-300 bg-white'}`}>
          <img
            src={supplementaryData.imageUrl}
            alt="Exam Illustration"
            className="max-h-96 object-contain rounded-lg shadow-sm"
          />
        </div>
      )}

    </div>
  );
};