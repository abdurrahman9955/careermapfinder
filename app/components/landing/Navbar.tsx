'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Menu, X, User, Sparkles } from 'lucide-react';
import { NAV_ITEMS } from '@/app/utils/landing-data';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedState, setSelectedState] = useState('All India');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-indigo-950/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-violet-600 to-emerald-400 p-0.5 shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Compass className="w-5 h-5 text-indigo-400 group-hover:rotate-45 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
                Career<span className="text-indigo-400">Map</span>Finder
              </span>
              <span className="text-[10px] tracking-wider text-slate-400 uppercase font-medium">
                Student&apos;s Career Discovery
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="max-lg:hidden mx-3 lg:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors py-1"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">

            {/* Sign In CTA */}
            <Link href="/auth/signin" target="_blank"  rel="noreferrer">
              <button className="px-3.5 py-1.5 text-sm font-medium text-slate-200 
              hover:text-white transition-colors flex items-center gap-1.5">
              <User className="w-4 h-4 text-slate-400" />
              Sign In </button></Link>

            {/* Primary Action Button */}
            <Link
              href="/auth/signup"
              target="_blank"  rel="noreferrer"
              className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-violet-600 
              hover:from-indigo-500 hover:to-violet-500 rounded-lg shadow-md shadow-indigo-600/25 transition-all 
              flex items-center gap-1.5 group"
            >
              <Sparkles className="w-4 h-4 text-indigo-200 group-hover:rotate-12 transition-transform" />
              <span>Get Started Free</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-950 border-b border-slate-800 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-semibold text-slate-400">Region: {selectedState}</span>
               
              </div>
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-base font-medium text-slate-200 hover:text-indigo-400 py-1"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-slate-800 flex flex-col gap-2">
                 <Link href="/auth/signin"><button className="w-full py-2.5 text-sm font-medium text-slate-200 border 
                border-slate-800 rounded-lg bg-slate-900">
                  Sign In
                </button> </Link>
                <Link
                  href="/auth/signup"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-2.5 text-sm font-medium text-center
                  text-white bg-indigo-600 rounded-lg shadow-md"
                >
                  Get Started Free
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};