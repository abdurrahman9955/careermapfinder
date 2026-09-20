'use client';

import { ThumbsUp, HeartHandshake, Shield, Sparkles, MessageSquareHeart } from 'lucide-react';
//import { useTheme } from '../../../context/ThemeContext';
import { FeedbackForm } from './FeedbackForm';

export default function FeedbackPageHome() {
  //const { theme } = useTheme();
  const isDark = 'dark';

  return (
    <section id='feedback'>
      <div
        className={`min-h-auto p-3 sm:p-6 transition-colors duration-200 ${
          isDark ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'
        }`}
      >
        {/* Header Banner */}
        <div className="max-w-4xl mx-auto text-center mb-6">
          <div
            className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full border mb-3 ${
              isDark
                ? 'text-indigo-400 bg-indigo-950/80 border-indigo-800/60'
                : 'text-indigo-700 bg-indigo-100 border-indigo-200'
            }`}
          >
            <ThumbsUp className="w-3.5 h-3.5" />
            <span>Continuous Improvement</span>
          </div>

          <h1 className="text-xl sm:text-3xl font-extrabold tracking-tight">
            Send Us Your Feedback
          </h1>
          <p
            className={`mt-2 text-xs sm:text-base max-w-xl mx-auto ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            We regularly update our university listings and scholarship metrics based on direct user input.
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
          {/* Form Container */}
          <div className="md:col-span-8">
            <FeedbackForm isDark={isDark as any} />
          </div>

          {/* Right Info Sidebar */}
          <div className="md:col-span-4 space-y-4 max-xl:hidden">

            
            <div
              className={`p-5 rounded-2xl border ${
                isDark ? 'bg-slate-900/90 border-slate-700' : 'bg-white border-slate-300'
              }`}
            >
              <MessageSquareHeart className="w-6 h-6 text-indigo-500 mb-2" />
              <h3 className="text-sm sm:text-md font-bold">Send Your Feedback</h3>
              <p
                className={`text-xs mt-1 leading-relaxed ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                Help us improve our portal by sharing your suggestions, reporting bugs, or rating your overall experience.
              </p>
            </div>

            <div
              className={`p-5 rounded-2xl border ${
                isDark ? 'bg-slate-900/90 border-slate-700' : 'bg-white border-slate-300'
              }`}
            >
              <HeartHandshake className="w-6 h-6 text-indigo-500 mb-2" />
              <h3 className="text-sm sm:text-md font-bold">Why Your Rating Matters</h3>
              <p
                className={`text-xs mt-1 leading-relaxed ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                Every submission is reviewed directly by our product engineering team to refine
                user experience and product.
              </p>
            </div>

            <div
              className={`p-5 rounded-2xl border ${
                isDark ? 'bg-slate-900/90 border-slate-700' : 'bg-white border-slate-300'
              }`}
            >
              <Shield className="w-6 h-6 text-emerald-500 mb-2" />
              <h3 className="text-sm sm:text-md font-bold">Anonymous Option</h3>
              <p
                className={`text-xs mt-1 leading-relaxed ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                Email is optional. You can share anonymous feedback without providing personal contact information.
              </p>
            </div>

              <div
              className={`p-5 rounded-2xl border ${
                isDark ? 'bg-slate-900/90 border-slate-700' : 'bg-white border-slate-300'
              }`}
            >
              <Sparkles className="w-6 h-6 text-amber-500 mb-2" />
              <h3 className="text-sm sm:text-md font-bold">Half-Star Precision</h3>
              <p
                className={`text-xs mt-1 leading-relaxed ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                Hover over the left or right side of any star to select precise ratings like 3.5 or 4.5.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}