'use client';
import React, { useState } from 'react';
import { useTheme } from '../../../context/ThemeContext';
import { DashboardLayoutWrapper } from '../DashboardLayoutWrapper';
import { Save, Trash2} from 'lucide-react';

export default function AccountSettingsPage() {
   const { theme } = useTheme();
  const isDark = theme === 'dark';
 
  const [profile, setProfile] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    bio: '',
  });

  const [academic, setAcademic] = useState({
    currentClass: '',
    stream: '',
    primaryInterest: '',
    schoolName: '',
    targetGradYear: '',
    targetScore: '',
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <DashboardLayoutWrapper>
      <div className="space-y-6 max-w-6xl mx-auto ">

         <div className="grid grid-cols-1 lg:grid-cols-12 ">

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
                        placeholder='full name'
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
                        placeholder='email address'
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
                        placeholder='phone number'
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
                        placeholder='Your location'
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
                        placeholder='write your bio here'
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
                      <input
                        type="text"
                        value={academic.currentClass}
                        onChange={(e) => setAcademic({ ...academic, currentClass: e.target.value })}
                        placeholder='current academic level'
                        className={`w-full px-3.5 py-2 rounded-xl text-xs border outline-none transition-all ${
                          isDark
                            ? 'bg-slate-900 border-slate-700 text-white focus:border-indigo-500'
                            : 'bg-white border-slate-300 text-slate-900 focus:border-indigo-600'
                        }`}
                      />
                    </div>

                    <div>
                      <label className={`block text-xs font-semibold mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                        Stream / Specialization
                      </label>
                      <input
                        type="text"
                        value={academic.stream}
                        onChange={(e) => setAcademic({ ...academic, stream: e.target.value })}
                        placeholder='stream specialization'
                        className={`w-full px-3.5 py-2 rounded-xl text-xs border outline-none transition-all ${
                          isDark
                            ? 'bg-slate-900 border-slate-700 text-white focus:border-indigo-500'
                            : 'bg-white border-slate-300 text-slate-900 focus:border-indigo-600'
                        }`}
                      />
                    </div>

                    <div>
                      <label className={`block text-xs font-semibold mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                        Primary Field of Interest
                      </label>
                      <input
                        type="text"
                        value={academic.primaryInterest}
                        onChange={(e) => setAcademic({ ...academic, primaryInterest: e.target.value })}
                        placeholder='primary field of interest'
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
                        placeholder='school / institution name'
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
                        placeholder='target graduation year'
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
                        placeholder='target percentage / cgpa'
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
                          Permanently remove your profile, history, and saved exams.
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