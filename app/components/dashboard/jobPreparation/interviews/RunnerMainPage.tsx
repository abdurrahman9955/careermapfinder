'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useTheme } from '@/app/context/ThemeContext';
import { InterviewSession, CandidateResponseSubmission } from '@/app/utils/job-preparation/mock/interview';
import { mockInterviewSessions } from '@/app/utils/job-preparation/mock/mockInterviewSessions';
import { VisualLayoutRenderer } from './VisualLayoutRenderer';
import { InterviewerBanner } from './InterviewerBanner';

import {
  Timer,
  ChevronLeft,
  ChevronRight,
  Send,
  Grid,
  Briefcase,
  Mic,
  MicOff,
  Sparkles,
  Loader2,
  AlertTriangle,
  FileText,
  Clock
} from 'lucide-react';

export default function InterviewRunnerPage() {
  const params = useParams();
  const router = useRouter();
  const sessionId = params['interview-id'] as string;


  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [session, setSession] = useState<InterviewSession | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Runner State
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [responses, setResponses] = useState<Record<string, CandidateResponseSubmission>>({});
  const [starResponses, setStarResponses] = useState<Record<string, { situation: string; task: string; action: string; result: string }>>({});
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [timeLeftSeconds, setTimeLeftSeconds] = useState<number>(1800);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Load Session directly from mock data
  useEffect(() => {
    async function loadSession() {
      setLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 400));
        const found = mockInterviewSessions[sessionId];

        if (!found) {
          throw new Error(`Interview session '${sessionId}' not found.`);
        }

        setSession(found);
        setTimeLeftSeconds(found.config.estimatedDurationMins * 60);
      } catch (err: any) {
        setError(err.message || 'Failed to load interview session.');
      } finally {
        setLoading(false);
      }
    }

    loadSession();
  }, [sessionId]);

  // Countdown Timer
  useEffect(() => {
    if (timeLeftSeconds <= 0) {
      handleFinalSubmit();
      return;
    }
    const timer = setInterval(() => {
      setTimeLeftSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeftSeconds]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (loading) {
    return (
      <div className={`min-h-screen flex flex-col items-center justify-center p-6 ${isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
        <div className="flex items-center gap-3 p-4 rounded-2xl bg-indigo-500/10 text-indigo-500 font-semibold border border-indigo-500/20">
          <Loader2 className="w-6 h-6 animate-spin" />
          <span>Initializing AI Interview Workspace...</span>
        </div>
      </div>
    );
  }

  if (error || !session) {
    return (
      <div className={`min-h-screen flex flex-col items-center justify-center p-6 ${isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
        <div className={`p-8 rounded-2xl border max-w-md w-full text-center space-y-4 shadow-xl ${isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-300'}`}>
          <AlertTriangle className="w-10 h-10 text-rose-500 mx-auto" />
          <h2 className="text-xl font-bold">Interview Not Found</h2>
          <p className="text-xs text-slate-400">{error}</p>
          <button onClick={() => router.push('/dashboard/interviews')} className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs cursor-pointer">
            Return to Interviews
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = session.questions[currentIndex];
  const totalQuestions = session.questions.length;

  const handleTextResponseChange = (text: string) => {
    setResponses((prev) => ({
      ...prev,
      [currentQuestion.id]: {
        ...prev[currentQuestion.id],
        questionId: currentQuestion.id,
        responseText: text,
        timeSpentSeconds: 0,
      },
    }));
  };

  const handleCodeChange = (code: string) => {
    setResponses((prev) => ({
      ...prev,
      [currentQuestion.id]: {
        ...prev[currentQuestion.id],
        questionId: currentQuestion.id,
        submittedCode: code,
        timeSpentSeconds: 0,
      },
    }));
  };

  const handleStarChange = (field: string, val: string) => {
    setStarResponses((prev) => {
      const updated = { ...prev[currentQuestion.id], [field]: val };
      const compiledText = `[SITUATION]\n${updated.situation || ''}\n\n[TASK]\n${updated.task || ''}\n\n[ACTION]\n${updated.action || ''}\n\n[RESULT]\n${updated.result || ''}`;

      setResponses((r) => ({
        ...r,
        [currentQuestion.id]: {
          questionId: currentQuestion.id,
          responseText: compiledText,
          timeSpentSeconds: 0,
        },
      }));

      return { ...prev, [currentQuestion.id]: updated };
    });
  };

  const handleFinalSubmit = async () => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    router.push(`/dashboard/interviews/reports/${session.id}`);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 
    ${isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      {/* Sticky Header sticky top-0  */}
      <header className={`z-30 px-6 py-4 rounded-2xl border backdrop-blur-md 
        ${isDark ? 'bg-slate-900/80 border-slate-700' : 'bg-white/90 border-slate-300'}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 max-md:hidden">
            <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500">
              <Briefcase className="w-5 h-5" />
            </div>
            <div className=''>
              <h1 className="font-bold text-base leading-tight">{session.config.targetJobTitle}</h1>
              <p className="text-xs font-medium">{session.config.industryDomain}</p>
            </div>
          </div>

          <div className={`flex items-center gap-2 px-4 py-2 rounded-xl font-mono text-xs font-bold border ${timeLeftSeconds < 300 ? 'bg-rose-500/10 border-rose-500 text-rose-500 animate-pulse' : isDark ? 'bg-slate-950 border-slate-800 text-slate-200' : 'bg-slate-100 border-slate-300 text-slate-800'}`}>
            <Timer className="w-4 h-4" />
            <span>{formatTime(timeLeftSeconds)}</span>
          </div>

          <button onClick={handleFinalSubmit} disabled={isSubmitting} 
          className="flex items-center gap-2 px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 
          text-white font-bold text-xs cursor-pointer shadow-md">
            {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
            <span>Finish Interview</span>
          </button>
        </div>
      </header>

      {/* Main Runner Body */}
      <main className="max-w-7xl mx-auto pt-6 grid grid-cols-1 xl:grid-cols-12 gap-6">
        {/* Left Column: Question Card */}
        <section className="xl:col-span-8 space-y-6">

          <div className={`p-6 rounded-2xl border shadow-xl backdrop-blur-md space-y-6 
            ${isDark ? 'bg-slate-900/80 border-slate-700' : 'bg-white/90 border-slate-300'}`}>
            <div className="flex items-center justify-between pb-4 border-b border-inherit text-xs font-semibold">
              <span className=" uppercase tracking-wider flex items-center gap-1.5 font-bold">
                <Sparkles className="w-4 h-4" /> Question {currentIndex + 1} of {totalQuestions}
              </span>
              <span className=" flex items-center gap-1 font-mono">
                <Clock className="w-3.5 h-3.5" /> Allocated: {currentQuestion.timeAllocationMins} mins
              </span>
            </div>

            {/* Dynamic Visual Content */}
            <VisualLayoutRenderer
              visualLayout={currentQuestion.visualLayout}
              category={currentQuestion.category}
              prompt={currentQuestion.prompt}
              codeLanguage={currentQuestion.codeLanguage}
              codeStarterSnippet={currentQuestion.codeStarterSnippet}
              supplementaryData={currentQuestion.supplementaryData}
              submittedCode={responses[currentQuestion.id]?.submittedCode || ''}
              onCodeChange={handleCodeChange}
              starResponse={starResponses[currentQuestion.id] || { situation: '', task: '', action: '', result: '' }}
              onStarChange={handleStarChange}
              isDark={isDark}
            />

            {/* General Text Area Response for Non-STAR & Non-Coding Prompts */}
            {currentQuestion.visualLayout !== 'CODE_EDITOR' && currentQuestion.visualLayout !== 'STAR_STRUCTURED' && (
              <div className="space-y-2 pt-4 border-t border-inherit">
                <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider">
                  <span className="flex items-center gap-1.5"><FileText className="w-4 h-4 text-indigo-400" />
                   Your Response Transcript</span>
                  {/* <button onClick={() => setIsRecording(!isRecording)} className={`flex items-center gap-1.5 
                    px-3 py-1 rounded-lg text-xs font-bold cursor-pointer transition-all
                     ${isRecording ? 'bg-rose-500 text-white animate-pulse' : isDark ? 'bg-slate-700 text-slate-300' 
                     : 'bg-slate-200 text-slate-700'}`}>
                    {isRecording ? <MicOff className="w-3.5 h-3.5" /> : <Mic className="w-3.5 h-3.5" />}
                    <span>{isRecording ? 'Recording Audio...' : 'Voice Dictation'}</span>
                  </button> */}
                </div>

                <textarea
                  rows={6}
                  value={responses[currentQuestion.id]?.responseText || ''}
                  onChange={(e) => handleTextResponseChange(e.target.value)}
                  placeholder="Type your structured answer here..."
                  className={`w-full p-4 rounded-xl border text-xs leading-relaxed focus:outline-none 
                    focus:ring-2 focus:ring-indigo-500 ${isDark ? 'bg-slate-950 border-slate-700 text-slate-100' 
                      : 'bg-slate-50 border-slate-300 text-slate-900'}`}
                />
              </div>
            )}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between">
            <button disabled={currentIndex === 0} onClick={() => setCurrentIndex((prev) => prev - 1)} 
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold border 
            transition-all cursor-pointer ${currentIndex === 0 ? 'opacity-40 cursor-not-allowed' 
            : isDark ? 'border-slate-700 text-slate-300 hover:bg-slate-900' 
            : 'border-slate-300 text-slate-700 hover:bg-slate-100'}`}>
              <ChevronLeft className="w-4 h-4" /> Previous Question
            </button>

            <button disabled={currentIndex === totalQuestions - 1} onClick={() => setCurrentIndex((prev) => prev + 1)} 
            className={`flex items-center gap-2 px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white 
            font-bold text-xs shadow cursor-pointer ${currentIndex === totalQuestions - 1 ? 'opacity-40 cursor-not-allowed' 
            : ''}`}>
              Next Question <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* Right Column: Question Navigator */}
        <aside className="xl:col-span-4 space-y-6 ">
            <InterviewerBanner style={session.config.interviewerStyle} isDark={isDark} />
          <div className={`p-6 rounded-2xl border shadow-xl backdrop-blur-md space-y-4 
            ${isDark ? 'bg-slate-900/80 border-slate-700' : 'bg-white/90 border-slate-300'}`}>
            <div className="flex items-center gap-2 font-bold text-sm">
              <Grid className="w-4 h-4 text-indigo-400" /> Question Palette
            </div>

            <div className="grid grid-cols-4 gap-2">
              {session.questions.map((q, idx) => {
                const isAnswered = !!responses[q.id]?.responseText || !!responses[q.id]?.submittedCode;
                const isCurrent = idx === currentIndex;

                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`p-3 rounded-xl font-mono text-xs font-bold transition-all border cursor-pointer ${
                      isCurrent
                        ? 'ring-2 ring-indigo-500 border-indigo-500 text-indigo-400 bg-indigo-500/10'
                        : isAnswered
                        ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400'
                        : isDark
                        ? 'bg-slate-950 border-slate-700 text-slate-400'
                        : 'bg-slate-100 border-slate-300 text-slate-600'
                    }`}
                  >
                    Q{idx + 1}
                  </button>
                );
              })}
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}