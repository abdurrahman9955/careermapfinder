'use client';
import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useTheme } from '@/app/context/ThemeContext';
import { ExamSession, UserResponseSubmission } from '@/app/utils/assessments/mock/exam';
import { ExamRunner } from './ExamRunner';
import { 
  BookOpen, 
  Loader2, 
  AlertTriangle, 
  Sparkles, 
  Clock, 
  HelpCircle, 
  ArrowRight, 
  ExternalLink
} from 'lucide-react';
import { getExamSessionById, listAllExamCatalogItems } from '@/app/utils/assessments/mock/examSessionsRegistry';

interface ExamCatalogItem {
  id: string;
  createAt:string;
  sessionId: string;
  examName: string;
  subject: string;
  category: 'ACADEMIC' | 'PROFESSIONAL';
  country: string;
  timeLimitMinutes: number;
  totalQuestions: number;
  difficulty: string;
  examDescription:string;

}

export default function ExamPracticePage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const examId = searchParams.get('id');

  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [session, setSession] = useState<ExamSession | null>();
  const [catalog, setCatalog] = useState<ExamCatalogItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // 1. DIRECT CLIENT-SIDE FETCH IN USEEFFECT
  useEffect(() => {
    async function loadExamData() {
      setLoading(true);
      setError(null);

      try {
        // Simulate async data loading delay (500ms) directly in the browser
        await new Promise((resolve) => setTimeout(resolve, 500));

        if (examId) {
          // Direct call to frontend data file
          const sessionData = getExamSessionById(examId);

          if (!sessionData) {
            throw new Error(`Exam session '${examId}' was not found.`);
          }

          setSession(sessionData);
        } else {
          // Direct call to frontend catalog list
          const catalogItems = listAllExamCatalogItems();
          setCatalog(catalogItems);
        }
      } catch (err: any) {
        setError(err.message || 'An unexpected error occurred while loading exam data.');
      } finally {
        setLoading(false);
      }
    }

    loadExamData();
  }, [examId]);

  // 2. DIRECT CLIENT-SIDE SUBMISSION
  const handleSubmitExam = async (responses: Record<string, UserResponseSubmission>) => {
    if (!session) return;
    setIsSubmitting(true);

    try {
      // Simulate submission & evaluation delay (800ms)
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Redirect directly to the report page with the session ID
      //router.push(`/exams/report?sessionId=${session.id}`);
    } catch (err: any) {
      alert(`Submission Error: ${err.message}`);
      setIsSubmitting(false);
    }
  };

    const getTypeStyle = (type: string) => {
    switch (type) {
      case 'STANDARD':
        return isDark
          ? 'bg-purple-950/80 text-purple-400 border-purple-800/60'
          : 'bg-purple-50 text-purple-700 border-purple-200';
      case 'HIGH_DISTINCTION':
        return isDark
          ? 'bg-emerald-950/80 text-emerald-400 border-emerald-800/60'
          : 'bg-emerald-50 text-emerald-700 border-emerald-200';
      default:
        return isDark
          ? 'bg-indigo-950/80 text-indigo-400 border-indigo-800/60'
          : 'bg-indigo-50 text-indigo-700 border-indigo-200';
    }
  };

  // --- STATE 1: LOADING STATE ---
  if (loading) {
    return (
      <div className={`min-h-screen flex flex-col items-center justify-center p-6 transition-colors duration-300 ${
        isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}>
        <div className="flex items-center gap-3 p-4 rounded-2xl bg-sky-500/10 border border-sky-500/20 text-sky-500 font-semibold">
          <Loader2 className="w-6 h-6 animate-spin" />
          <span>Loading dynamic exam workspace...</span>
        </div>
      </div>
    );
  }

  // --- STATE 2: ERROR STATE ---
  if (error) {
    return (
      <div className={`min-h-screen flex flex-col items-center justify-center p-6 transition-colors duration-300 ${
        isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}>
        <div className={`p-8 rounded-2xl border max-w-md w-full text-center space-y-4 shadow-xl ${
          isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-300'
        }`}>
          <div className="w-12 h-12 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center mx-auto">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold">Unable to Load Exam</h2>
          <p className="text-sm text-slate-400">{error}</p>
          <button
            onClick={() => router.push('/exams')}
            className="w-full py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm transition-all shadow-md cursor-pointer"
          >
            Return to Exam Catalog
          </button>
        </div>
      </div>
    );
  }

  // --- STATE 3: SUBMITTING STATE ---
  if (isSubmitting) {
    return (
      <div className={`min-h-screen flex flex-col items-center justify-center p-6 transition-colors duration-300 ${
        isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}>
        <div className="text-center space-y-4">
          <Loader2 className="w-10 h-10 animate-spin text-emerald-500 mx-auto" />
          <h2 className="text-xl font-bold">Evaluating Your Exam Responses...</h2>
          <p className="text-sm text-slate-400">Our AI is scoring your answers and compiling your analytics report.</p>
        </div>
      </div>
    );
  }

  // --- STATE 4: ACTIVE EXAM RUNNER ---
  if (session) {
    return <ExamRunner session={session} onSubmitExam={handleSubmitExam} />;
  }

  // --- STATE 5: EXAM CATALOG SELECTION GRID (If no ?id=... parameter is provided) ---
  return (
    <div className={`min-h-screen  transition-colors duration-300 ${
      isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Page Title Header */}
        {/* <div className="space-y-2">
          <div className="flex items-center gap-2 text-sky-500 font-bold text-xs uppercase tracking-wider">
            <Sparkles className="w-4 h-4" /> Career Map Finder Mock Exams
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight">Available Global Exams Catalog</h1>
          <p className="text-slate-400 text-sm">Select an official exam session to begin your practice test.</p>
        </div> */}

        {/* Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {catalog.map((item) => (
            <div
              key={item.id}
              className={`p-6 rounded-2xl border shadow-xl backdrop-blur-md transition-all flex flex-col 
                justify-between space-y-6 ${
                isDark
                  ? 'bg-slate-950 border-slate-700 shadow-slate-950/50 hover:border-slate-700'
                  : 'bg-white/90 border-slate-300 shadow-slate-200/50 hover:border-slate-400'
              }`}
            >
              <div className="space-y-4">

                <div className="flex flex-wrap items-center justify-between gap-2 ">
                  <span className={`text-[9px] font-bold px-2.5 py-1 rounded-full border ${getTypeStyle(item.category)}`} >
                    🌍 {item.category} | {item.country}
                  </span>

                  <span className={`text-[9px] border font-medium flex items-center py-1 px-2 rounded-full gap-1 ${
                   isDark ? 'text-slate-400 border-slate-700 bg-indigo-950/80' 
                   : 'text-slate-500 border-slate-300 bg-indigo-50' }`} >
                    {item.difficulty.replace('_', ' ')} ⚖️
                  </span>
                </div>

                <div>
                  <h3 className="font-bold text-md line-clamp-1 leading-snug">{item.examName}</h3>
                </div>
              </div>
              
                 <div className={`grid grid-cols-1 -mt-4  gap-2 text-xs font-medium
                  ${isDark ? 'text-slate-400' : 'text-slate-600'} `}>
                  <span className={`flex items-center gap-1.5 `}>
                    <Clock className="w-3.5 h-3.5 text-slate-00" /> 
                    Creation Date: {new Date(item.createAt).toLocaleString()}
                  </span>
                </div> 

                 <div className="flex justify-between -mt-4  gap-2 text-xs font-medium ">
                  <span className="flex items-center gap-1.5 line-clamp-1 leading-snug">
                    <BookOpen className="w-4 h-4 text-slate-00" />Exam Subject: {item.subject}
                  </span>
                </div> 


                <p className={`text-xs -mt-2 line-clamp-2 leading-relaxed ${
                  isDark ? 'text-slate-300' : 'text-slate-600'}`} >
                  {item.examDescription} Complete 65-question official pattern AWS SAA-C03 
                  exam covering all 4 core architecture domains.
                </p>

              <div className="space-y- -mt-2 -mb-0 p-4 rounded-xl border border-inherit">
                <div className="grid grid-cols-2 gap-2 text-xs font-medium ">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 " />Duration {item.timeLimitMinutes} mins
                  </span>
                  <span className="flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5" /> {item.totalQuestions} Exam Questions
                  </span>
                </div>
              </div>

              <div className=" pt-4 bord er-t border-slate-800/40 flex items-center justify-between text-xs">
              
                <button onClick={() => router.push(`/dashboard/assessments/report?sessionId=${item.sessionId}`)}
                className={`flex items-center gap-1.5 text-white font-medium 
                hover:underline py-2 px-4 bg-indigo-700 rounded-lg `}>
                <ExternalLink className="w-3.5 h-3.5" />
                <span>View Result</span>
               </button>

               <button onClick={() => router.push(`/dashboard/assessments/exams?id=${item.id}`)}
                className="text-white font-bold py-2 px-4 bg-indigo-700 rounded-lg
               hover:underline flex items-center gap-1 text-xs">
               Start Exam <ArrowRight className="w-4 h-4" />
               </button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}