'use client';

import React from 'react';
import Link from 'next/link';
import { Compass, Bell } from 'lucide-react';
import { FOOTER_LINKS } from '@/app/utils/landing-data';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Top Newsletter Grid */}
        <div className="pb-12 border-b border-slate-800/80 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Bell className="w-5 h-5 text-indigo-400" />
              <span>Get Exam & Cutoff Alerts</span>
            </h3>
            <p className="text-slate-400 text-xs mt-1">
              Never miss registration deadlines for your exam and results.
            </p>
          </div>
          <div className="lg:col-span-6 flex items-center gap-2">
            <input
              type="email"
              placeholder="Enter student or parent email"
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
            />
            <button className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl text-xs shrink-0 transition-colors">
              Subscribe Free
            </button>
          </div>
        </div>

        {/* Links Navigation Grid */}
        <div className="py-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
          
          <div className="col-span-2 lg:col-span-1 space-y-3">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
                <Compass className="w-4 h-4" />
              </div>
              <span className="text-base font-bold text-white tracking-tight">CareerMapFinder</span>
            </Link>
            <p className="text-[12px] text-slate-400 leading-relaxed">
              Empowering academic students and parents with AI-driven regional career roadmaps, exam cutoffs, and living cost insights.
            </p>
          </div>

          {/* <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">Popular Streams</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.popularStreams.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div> */}

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">Visit Quick Links</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.statesCovered.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition-colors">Visit {link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">Explore Platform</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.tools.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">Legal & Governance</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <p>© {new Date().getFullYear()} CareerMapFinder Platform Ltd. All rights reserved.</p>
          <div className="flex gap-4">
            <span>Designed for Academic Students & Parents</span>
          </div>
        </div>

      </div>
    </footer>
  );
};