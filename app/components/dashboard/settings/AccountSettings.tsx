'use client';
import React, { useState } from 'react';
import { useTheme } from '../../../context/ThemeContext';
import { DashboardLayoutWrapper } from '../DashboardLayoutWrapper';
import { Save, Trash2, CheckCircle2, Award, Sparkles } from 'lucide-react';

export default function AccountSettingsPage() {
   const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const [savedSuccess, setSavedSuccess] = useState(false);

  const [profile, setProfile] = useState({
    fullName: 'Rahul Sharma',
    email: 'rahul@example.com',
    phone: '+91 800 000 0000',
    location: 'Bangaluru, Karnataka, India',
    bio: 'Class 12th PCM student aiming for top Tier-1 CS/Engineering programs.',
  });

  const [academic, setAcademic] = useState({
    currentClass: 'Class 12th',
    stream: 'PCM (Physics, Chemistry, Math)',
    board: 'CBSE',
    schoolName: 'Green Field Academy',
    targetGradYear: '2027',
    targetScore: '95%',
  });

  const [careerGoals, setCareerGoals] = useState({
    primaryInterest: 'Computer Science & AI',
    targetExams: ['JEE Main', 'JEE Advanced', 'SAT'],
    budgetPreference: 'Medium (10L - 20L INR / Year)',
    preferredLocations: ['India (Tier-1)', 'United States', 'Germany'],
    counselingMode: '1-on-1 Online Video Sessions',
  });

  const [notifications, setNotifications] = useState({
    examReminders: true,
    cutoffAlerts: true,
    counselorMessages: true,
    marketingUpdates: false,
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <DashboardLayoutWrapper>
      <div className="space-y-6 max-w-6xl mx-auto pb-6">

         <div className="grid grid-cols-1 lg:grid-cols-12 -mt-2">

          <main className="lg:col-span-12">
            <form onSubmit={handleSave}>
             
                <div className={`p-6 rounded-2xl border space-y-6 ${isDark ? 'bg-slate-950 border-slate-700' 
                  : 'bg-white border-slate-300'}`}>
                  <div>
                    <h2 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      Personal Information
                    </h2>
                    <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      Update your account identity and contact details.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-xs font-semibold mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={profile.fullName}
                        onChange={(e) => setProfile({ ...profile, fullName: e.target.value })}
                        className={`w-full px-3.5 py-2 rounded-xl text-xs border outline-none transition-all ${
                          isDark
                            ? 'bg-slate-900 border-slate-700 text-white focus:border-indigo-500'
                            : 'bg-white border-slate-300 text-slate-900 focus:border-indigo-600'
                        }`}
                      />
                    </div>

                    <div>
                      <label className={`block text-xs font-semibold mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={profile.email}
                        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                        className={`w-full px-3.5 py-2 rounded-xl text-xs border outline-none transition-all ${
                          isDark
                            ? 'bg-slate-900 border-slate-700 text-white focus:border-indigo-500'
                            : 'bg-white border-slate-300 text-slate-900 focus:border-indigo-600'
                        }`}
                      />
                    </div>

                    <div>
                      <label className={`block text-xs font-semibold mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                        Phone Number
                      </label>
                      <input
                        type="text"
                        value={profile.phone}
                        onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                        className={`w-full px-3.5 py-2 rounded-xl text-xs border outline-none transition-all ${
                          isDark
                            ? 'bg-slate-900 border-slate-700 text-white focus:border-indigo-500'
                            : 'bg-white border-slate-300 text-slate-900 focus:border-indigo-600'
                        }`}
                      />
                    </div>

                    <div>
                      <label className={`block text-xs font-semibold mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                        Location
                      </label>
                      <input
                        type="text"
                        value={profile.location}
                        onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                        className={`w-full px-3.5 py-2 rounded-xl text-xs border outline-none transition-all ${
                          isDark
                            ? 'bg-slate-900 border-slate-700 text-white focus:border-indigo-500'
                            : 'bg-white border-slate-300 text-slate-900 focus:border-indigo-600'
                        }`}
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className={`block text-xs font-semibold mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                        Student Bio / Summary
                      </label>
                      <textarea
                        rows={3}
                        value={profile.bio}
                        onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                        className={`w-full px-3.5 py-2 rounded-xl text-xs border outline-none transition-all ${
                          isDark
                            ? 'bg-slate-900 border-slate-700 text-white focus:border-indigo-500'
                            : 'bg-white border-slate-300 text-slate-900 focus:border-indigo-600'
                        }`}
                      />
                    </div>
                  </div>
                </div>
           
                <div className={`p-6 mt-6 rounded-2xl border space-y-6 ${isDark ? 'bg-slate-950 border-slate-700' 
                  : 'bg-white border-slate-300'}`}>
                  <div>
                    <h2 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      Academic Background
                    </h2>
                    <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      Helps the AI predictor customize college cutoff recommendations.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-xs font-semibold mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                        Current Academic Level
                      </label>
                      <select
                        value={academic.currentClass}
                        onChange={(e) => setAcademic({ ...academic, currentClass: e.target.value })}
                        className={`w-full px-3.5 py-2 rounded-xl text-xs border outline-none transition-all ${
                          isDark
                            ? 'bg-slate-900 border-slate-700 text-white focus:border-indigo-500'
                            : 'bg-white border-slate-300 text-slate-900 focus:border-indigo-600'
                        }`}
                      >
                        <option value="Class 10th">Class 10th</option>
                        <option value="Class 11th">Class 11th</option>
                        <option value="Class 12th">Class 12th</option>
                        <option value="Undergraduate">Undergraduate</option>
                      </select>
                    </div>

                    <div>
                      <label className={`block text-xs font-semibold mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                        Stream / Specialization
                      </label>
                      <input
                        type="text"
                        value={academic.stream}
                        onChange={(e) => setAcademic({ ...academic, stream: e.target.value })}
                        className={`w-full px-3.5 py-2 rounded-xl text-xs border outline-none transition-all ${
                          isDark
                            ? 'bg-slate-900 border-slate-700 text-white focus:border-indigo-500'
                            : 'bg-white border-slate-300 text-slate-900 focus:border-indigo-600'
                        }`}
                      />
                    </div>

                    <div>
                      <label className={`block text-xs font-semibold mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                        Education Board
                      </label>
                      <input
                        type="text"
                        value={academic.board}
                        onChange={(e) => setAcademic({ ...academic, board: e.target.value })}
                        className={`w-full px-3.5 py-2 rounded-xl text-xs border outline-none transition-all ${
                          isDark
                            ? 'bg-slate-900 border-slate-700 text-white focus:border-indigo-500'
                            : 'bg-white border-slate-300 text-slate-900 focus:border-indigo-600'
                        }`}
                      />
                    </div>

                    <div>
                      <label className={`block text-xs font-semibold mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                        School / Institution Name
                      </label>
                      <input
                        type="text"
                        value={academic.schoolName}
                        onChange={(e) => setAcademic({ ...academic, schoolName: e.target.value })}
                        className={`w-full px-3.5 py-2 rounded-xl text-xs border outline-none transition-all ${
                          isDark
                            ? 'bg-slate-900 border-slate-700 text-white focus:border-indigo-500'
                            : 'bg-white border-slate-300 text-slate-900 focus:border-indigo-600'
                        }`}
                      />
                    </div>

                    <div>
                      <label className={`block text-xs font-semibold mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                        Target Graduation Year
                      </label>
                      <input
                        type="text"
                        value={academic.targetGradYear}
                        onChange={(e) => setAcademic({ ...academic, targetGradYear: e.target.value })}
                        className={`w-full px-3.5 py-2 rounded-xl text-xs border outline-none transition-all ${
                          isDark
                            ? 'bg-slate-900 border-slate-700 text-white focus:border-indigo-500'
                            : 'bg-white border-slate-300 text-slate-900 focus:border-indigo-600'
                        }`}
                      />
                    </div>

                    <div>
                      <label className={`block text-xs font-semibold mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                        Target Percentage / CGPA
                      </label>
                      <input
                        type="text"
                        value={academic.targetScore}
                        onChange={(e) => setAcademic({ ...academic, targetScore: e.target.value })}
                        className={`w-full px-3.5 py-2 rounded-xl text-xs border outline-none transition-all ${
                          isDark
                            ? 'bg-slate-900 border-slate-700 text-white focus:border-indigo-500'
                            : 'bg-white border-slate-300 text-slate-900 focus:border-indigo-600'
                        }`}
                      />
                    </div>
                  </div>
                </div>
             
                <div className={`p-6 mt-6 rounded-2xl border space-y-6 ${isDark ? 'bg-slate-950 border-slate-700' 
                  : 'bg-white border-slate-300'}`}>
                  <div>
                    <h2 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      Entrance Exams & Career Aspirations
                    </h2>
                    <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      Tune your college matching matrix and scholarship recommendations.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className={`block text-xs font-semibold mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                        Primary Field of Interest
                      </label>
                      <input
                        type="text"
                        value={careerGoals.primaryInterest}
                        onChange={(e) => setCareerGoals({ ...careerGoals, primaryInterest: e.target.value })}
                        className={`w-full px-3.5 py-2 rounded-xl text-xs border outline-none transition-all ${
                          isDark
                            ? 'bg-slate-900 border-slate-700 text-white focus:border-indigo-500'
                            : 'bg-white border-slate-300 text-slate-900 focus:border-indigo-600'
                        }`}
                      />
                    </div>

                    <div>
                      <label className={`block text-xs font-semibold mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                        Annual Tuition Fee Budget
                      </label>
                      <select
                        value={careerGoals.budgetPreference}
                        onChange={(e) => setCareerGoals({ ...careerGoals, budgetPreference: e.target.value })}
                        className={`w-full px-3.5 py-2 rounded-xl text-xs border outline-none transition-all ${
                          isDark
                            ? 'bg-slate-900 border-slate-700 text-white focus:border-indigo-500'
                            : 'bg-white border-slate-300 text-slate-900 focus:border-indigo-600'
                        }`}
                      >
                        <option value="Low (< 5L INR / Year)">Low (&lt; 5L INR / Year)</option>
                        <option value="Medium (10L - 20L INR / Year)">Medium (10L - 20L INR / Year)</option>
                        <option value="High (> 25L INR / Year)">High (&gt; 25L INR / Year)</option>
                      </select>
                    </div>

                    <div className={`p-4 rounded-xl border ${isDark ? 'bg-slate-900/60 border-slate-700' 
                      : 'bg-slate-50 border-slate-300'}`}>
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="w-4 h-4 text-indigo-500" />
                        <span className={`text-xs font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                          Active Target Exams
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {careerGoals.targetExams.map((exam) => (
                          <span
                            key={exam}
                            className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-600/10 
                            border border-indigo-500/30 text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5"
                          >
                            <Award className="w-3.5 h-3.5" />
                            {exam}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
             
                <div className={`p-6 mt-6 rounded-2xl border space-y-6 ${isDark ? 'bg-slate-950 border-slate-700' 
                  : 'bg-white border-slate-300'}`}>
                  <div>
                    <h2 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      Notification & Alert Settings
                    </h2>
                    <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      Choose when and how CareerMapFinder alerts you.
                    </p>
                  </div>

                  <div className="space-y-3">
                    {[
                      { key: 'examReminders', title: 'Entrance Exam Deadline Reminders', desc: 'Get notified 7 days before exam registration closes.' },
                      { key: 'cutoffAlerts', title: 'College Cutoff Changes', desc: 'Real-time updates when target colleges update eligibility criteria.' },
                      { key: 'counselorMessages', title: 'Counselor Session Updates', desc: 'Alerts for booked 1-on-1 counseling schedules.' },
                    ].map((item) => (
                      <div key={item.key} className={`flex items-center justify-between p-3.5 rounded-xl border ${isDark ? 'border-slate-800 bg-slate-900/30' : 'border-slate-200 bg-slate-50'}`}>
                        <div>
                          <p className={`text-xs font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.title}</p>
                          <p className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{item.desc}</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={(notifications as any)[item.key]}
                          onChange={(e) => setNotifications({ ...notifications, [item.key]: e.target.checked })}
                          className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>
           
                <div className={`p-6 mt-6 rounded-2xl border space-y-6 ${isDark ? 'bg-slate-950 border-slate-700' 
                  : 'bg-white border-slate-300'}`}>
                  <div>
                    <h2 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      Account Controls
                    </h2>
                    <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      Request permanent account erasure.
                    </p>
                  </div>

                  <div className="space-y-4">
            
                    <div className="p-4 rounded-xl border border-rose-500/30 bg-rose-500/5 flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold text-rose-600 dark:text-rose-400">Delete Account & Data</p>
                        <p className="text-[11px] text-rose-600/70 dark:text-rose-400/70">
                          Permanently remove your profile, counseling history, and saved college lists.
                        </p>
                      </div>
                      <button
                        type="button"
                        className="px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white text-xs
                         font-semibold flex items-center gap-1.5 transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
            
              <div className="mt-6 flex items-center justify-end gap-3">
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs 
                  font-bold shadow-md shadow-indigo-500/20 flex items-center gap-2 transition-all"
                >
                  <Save className="w-4 h-4" />
                  Save Changes
                </button>
              </div>
            </form>
          </main>
        </div>
      </div>
    </DashboardLayoutWrapper>
  );
}