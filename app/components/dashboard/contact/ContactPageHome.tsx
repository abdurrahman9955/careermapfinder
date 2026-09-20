'use client';
import { Mail, MessageSquare, ShieldCheck, Sparkles } from 'lucide-react';
//import { useTheme } from '../../../context/ThemeContext';
import { ContactFormSection, ContactInfoAndMapSection } from './ContactComponents';

export default function ContactUsPageHome() {
  //const { theme } = useTheme();
  const isDark = 'dark';

  return (
     <section id='contact'>
      <div 
        className={`min-h-auto p-3 sm:p-6 border-y  transition-colors duration-200 ${
          isDark ? 'bg-slate-950 text-white border-slate-700' : 'bg-slate-50 text-slate-900 border-slate-3s00'
        }`}
      >
        {/* Page Hero Header */}
        <div className="max-w-7xl mx-auto text-center mb-6">
          <div
            className={`inline-flex items-center gap-2 text-xs font-semibold uppercase 
             tracking-wider px-3.5 py-1.5 rounded-full border mb-3 ${
              isDark
                ? 'text-indigo-400 bg-indigo-950/80 border-indigo-700'
                : 'text-indigo-700 bg-indigo-100 border-indigo-300'
            }`}
          >
            <Mail className="w-3.5 h-3.5" />
            <span>24/7 Dedicated Support</span>
          </div>

          <h1 className="text-xl sm:text-3xl font-extrabold tracking-tight">
            We’re Here to Help You Succeed
          </h1>
          <p
            className={`mt-2 text-xs sm:text-base max-w-2xl mx-auto ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            Have questions about university listings, scholarship eligibility, 
            or technical assistance? Send us a message or reach out via our contact channels.
          </p>
        </div>

        {/* Side-by-Side Main Grid Layout */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactFormSection isDark={isDark as any} />
          </div>

          {/* Right Column: Contact Info & Interactive Map (5 cols) */}
          <div className="lg:col-span-5">
            <ContactInfoAndMapSection isDark={isDark as any} />
          </div>
        </div>

        {/* Bottom Trust Highlights */}
        <div className="max-w-7xl mx-auto mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div
            className={`p-4 rounded-xl border flex items-center gap-3 ${
              isDark ? 'bg-slate-900/60 border-slate-700' : 'bg-white border-slate-300'
            }`}
          >
            <ShieldCheck className="w-6 h-6 text-indigo-500 shrink-0" />
            <div>
              <h4 className="text-xs font-bold">Privacy Guaranteed</h4>
              <p className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                Your details are kept completely secure and confidential.
              </p>
            </div>
          </div>

          <div
            className={`p-4 rounded-xl border flex items-center gap-3 ${
              isDark ? 'bg-slate-900/60 border-slate-700' : 'bg-white border-slate-300'
            }`}
          >
            <MessageSquare className="w-6 h-6 text-emerald-500 shrink-0" />
            <div>
              <h4 className="text-xs font-bold">Fast Response Time</h4>
              <p className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                Average response time within 2 to 4 business hours.
              </p>
            </div>
          </div>

          <div
            className={`p-4 rounded-xl border flex items-center gap-3 ${
              isDark ? 'bg-slate-900/60 border-slate-700' : 'bg-white border-slate-300'
            }`}
          >
            <Sparkles className="w-6 h-6 text-amber-500 shrink-0" />
            <div>
              <h4 className="text-xs font-bold">Verified Information</h4>
              <p className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                Direct support from government & institutional partners.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}