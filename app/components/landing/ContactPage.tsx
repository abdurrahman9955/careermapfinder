'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { ContactFormData } from '@/types/landing';
import { useTheme } from '../../context/ThemeContext';

export const ContactFormTab: React.FC = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    role: 'Student',
    state: 'Karnataka',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const isDark = theme === 'dark';

  return (
    <section
      id="contact"
      className={`py-6 border rounded-2xl relative transition-colors duration-200 ${
        isDark ? 'bg-slate-950 border-slate-700' : 'bg-whie border-slate-300'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Info */}
          <div className="lg:col-span-5">
            <span
              className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full border ${
                isDark
                  ? 'text-violet-400 bg-violet-950/80 border-violet-700'
                  : 'text-violet-700 bg-violet-100 border-violet-300'
              }`}
            >
              Get In Touch
            </span>
            <h2
              className={`text-xl sm:text-3xl font-extrabold tracking-tight mt-3 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              Have Questions? Speak with Our Support Center
            </h2>
            <p
              className={`text-sm mt-4 leading-relaxed ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              Whether you are a student exploring entrance exam choices, a parent looking for tuition fee breakdowns, or a school seeking administrative access.
            </p>

            <div className="flex flex-row flex-wrap justify-between mt-8 space-y-4">
              <div
                className={`flex items-center gap-3 text-xs ${
                  isDark ? 'text-slate-300' : 'text-slate-700'
                }`}
              >
                <MessageSquare className={`w-4 h-4 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`} />
                <span>
                  Email Support:{' '}
                  <strong className={isDark ? 'text-white' : 'text-slate-900'}>
                    hello@careermapfinder.com
                  </strong>
                </span>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7">
            <div
              className={`rounded-2xl p-6 shadow-lg border transition-colors duration-200 ${
                isDark
                  ? 'bg-slate-950 border-slate-700'
                  : 'bg-white border-slate-300'
              }`}
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <CheckCircle2
                    className={`w-12 h-12 mx-auto mb-4 ${
                      isDark ? 'text-emerald-400' : 'text-emerald-600'
                    }`}
                  />
                  <h3
                    className={`text-2xl font-bold ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    Query Submitted Successfully
                  </h3>
                  <p
                    className={`text-sm mt-2 ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    Our educational counseling team will reach out to you within 24 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        role: 'Student',
                        state: 'Maharashtra',
                        message: '',
                      });
                    }}
                    className={`mt-6 px-6 py-2.5 text-xs font-semibold rounded-xl border transition-all ${
                      isDark
                        ? 'bg-slate-900 hover:bg-slate-800 text-slate-200 border-slate-700'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300'
                    }`}
                  >
                    Submit Another Query
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        className={`block text-xs font-medium mb-1 ${
                          isDark ? 'text-slate-300' : 'text-slate-700'
                        }`}
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        placeholder="e.g. Rahul Sharma"
                        className={`w-full rounded-xl px-3.5 py-2.5 text-xs border outline-none transition-all ${
                          isDark
                            ? 'bg-slate-900 border-slate-700 text-white placeholder-slate-500 focus:border-indigo-500'
                            : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-indigo-600'
                        }`}
                      />
                    </div>
                    <div>
                      <label
                        className={`block text-xs font-medium mb-1 ${
                          isDark ? 'text-slate-300' : 'text-slate-700'
                        }`}
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="rahul@example.com"
                        className={`w-full rounded-xl px-3.5 py-2.5 text-xs border outline-none transition-all ${
                          isDark
                            ? 'bg-slate-900 border-slate-700 text-white placeholder-slate-500 focus:border-indigo-500'
                            : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-indigo-600'
                        }`}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        className={`block text-xs font-medium mb-1 ${
                          isDark ? 'text-slate-300' : 'text-slate-700'
                        }`}
                      >
                        Role / Profile
                      </label>
                      <select
                        value={formData.role}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            role: e.target.value as ContactFormData['role'],
                          })
                        }
                        className={`w-full rounded-xl px-3.5 py-2.5 text-xs border outline-none transition-all ${
                          isDark
                            ? 'bg-slate-900 border-slate-700 text-white focus:border-indigo-500'
                            : 'bg-white border-slate-300 text-slate-900 focus:border-indigo-600'
                        }`}
                      >
                        <option value="Student">Student (Class 9th-12th / UG)</option>
                        <option value="Parent">Parent / Guardian</option>
                        <option value="School Administrator">School Administrator</option>
                        <option value="Counsellor">Career Counsellor</option>
                      </select>
                    </div>

                    <div>
                      <label
                        className={`block text-xs font-medium mb-1 ${
                          isDark ? 'text-slate-300' : 'text-slate-700'
                        }`}
                      >
                        State / UT
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.state}
                        onChange={(e) =>
                          setFormData({ ...formData, state: e.target.value })
                        }
                        placeholder="e.g. Karnataka, Maharashtra"
                        className={`w-full rounded-xl px-3.5 py-2.5 text-xs border outline-none transition-all ${
                          isDark
                            ? 'bg-slate-900 border-slate-700 text-white placeholder-slate-500 focus:border-indigo-500'
                            : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-indigo-600'
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className={`block text-xs font-medium mb-1 ${
                        isDark ? 'text-slate-300' : 'text-slate-700'
                      }`}
                    >
                      Your Message / Career Concern
                    </label>
                    <textarea
                      rows={10}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell us about the target stream, exams, or guidance required..."
                      className={`w-full rounded-xl px-3.5 py-2.5 text-xs border outline-none resize-none transition-all ${
                        isDark
                          ? 'bg-slate-900 border-slate-700 text-white placeholder-slate-500 focus:border-indigo-500'
                          : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-indigo-600'
                      }`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-gradient-to-r from-indigo-600 to-violet-600 
                    hover:from-indigo-500 hover:to-violet-500 text-white font-semibold 
                    text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Sending Query...</span>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};