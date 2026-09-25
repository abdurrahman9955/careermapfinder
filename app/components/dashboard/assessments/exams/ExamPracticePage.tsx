'use client';
import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useTheme } from '@/app/context/ThemeContext';
import { ExamSession, UserResponseSubmission } from '@/app/utils/assessments/mock/exam';
import { ExamRunner } from './ExamRunner';
import { Loader2, AlertTriangle } from 'lucide-react';
import { getExamSessionById } from '@/app/utils/assessments/mock/examSessionsRegistry';


export default function ExamPracticePage() {
  const router = useRouter();
  const params = useParams();
  const examId = params['exam-id'] as string;

  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [session, setSession] = useState<ExamSession | null>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  useEffect(() => {
    async function loadExamData() {
      setLoading(true);
      setError(null);

      try {
        
        await new Promise((resolve) => setTimeout(resolve, 500));

        if (examId) {
          
          const sessionData = getExamSessionById(examId);
          if (!sessionData) { throw new Error(`Exam session '${examId}' was not found.`) }

          setSession(sessionData);
        }
      } catch (err: any) {
        setError(err.message || 'An unexpected error occurred while loading exam data.');
      } finally {
        setLoading(false);
      }
    }

    loadExamData();
  }, [examId]);


  const handleSubmitExam = async (responses: Record<string, UserResponseSubmission>) => {
    if (!session) return;
    setIsSubmitting(true);

    try {
      
      await new Promise((resolve) => setTimeout(resolve, 800));

    } catch (err: any) {
      alert(`Submission Error: ${err.message}`);
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className={`min-h-screen flex flex-col items-center justify-center transition-colors duration-300 ${
        isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}>
        <div className="flex items-center gap-3 p-4 rounded-2xl bg-sky-500/10 border 
          border-indigo-500/20 text-indigo-500 font-semibold">
          <Loader2 className="w-6 h-6 animate-spin" />
          <span>Loading exam workspace...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`min-h-screen flex flex-col items-center justify-center transition-colors duration-300 ${
        isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}>
        <div className={`p-6 rounded-2xl border max-w-md w-full text-center space-y-4 shadow-xl ${
          isDark ? 'bg-slate-900/80 border-slate-700' : 'bg-white border-slate-300'
        }`}>
          <div className="w-12 h-12 rounded-full bg-red-500/10 text-red-500 flex 
            items-center justify-center mx-auto">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold">Unable to Load Exam</h2>
          <p className="text-sm text-slate-400">{error}</p>
          <button
            onClick={() => router.push('/dashboard')}
            className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white 
            font-semibold text-sm transition-all shadow-md cursor-pointer">
            Return to Dashboard
          </button>
        </div>
      </div>
    );
  }

  if (isSubmitting) {
    return (
      <div className={`min-h-screen flex flex-col items-center justify-center transition-colors duration-300 ${
        isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}>
        <div className="text-center space-y-4">
          <Loader2 className="w-10 h-10 animate-spin text-indigo-500 mx-auto" />
          <h2 className="text-xl font-bold">Evaluating Your Exam...</h2>
          <p className="text-sm text-slate-400">We are scoring your answers...</p>
        </div>
      </div>
    );
  }

  if (session) {
    return <ExamRunner session={session} onSubmitExam={handleSubmitExam} />;
  }
}
