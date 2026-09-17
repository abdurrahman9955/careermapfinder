'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, IndianRupee } from 'lucide-react';
import { PRICING_TIERS } from '@/app/utils/landing-data';
import { useTheme } from '../../context/ThemeContext';

export const PricingSection: React.FC = () => {
  const { theme } = useTheme();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const isDark = theme === 'dark';

  return (
    <section
      id="pricing"
      className={`py-6 relative transition-colors duration-200 ${
        isDark ? 'bg-slate-950' : 'bg-slate-50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span
            className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full border ${
              isDark
                ? 'text-indigo-400 bg-indigo-950/80 border-indigo-700'
                : 'text-indigo-700 bg-indigo-100 border-indigo-300'
            }`}
          >
            Transparent Pricing in INR (₹)
          </span>
          <h2
            className={`text-xl sm:text-3xl font-extrabold tracking-tight mt-3 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Invest in Your Future with Full Clarity
          </h2>
          <p
            className={`text-sm sm:text-base mt-3 ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            Start completely free or unlock advanced AI roadmaps and parent financial planning tools.
          </p>

          {/* Billing Cycle Toggle */}
          <div
            className={`mt-6 inline-flex items-center gap-3 p-1 rounded-xl border ${
              isDark
                ? 'bg-slate-900 border-slate-700'
                : 'bg-slate-200/80 border-slate-300'
            }`}
          >
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : isDark
                  ? 'text-slate-400 hover:text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                billingCycle === 'annual'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : isDark
                  ? 'text-slate-400 hover:text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>Annually</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded border ${
                  isDark
                    ? 'bg-emerald-950 text-emerald-300 border-emerald-700'
                    : 'bg-emerald-100 text-emerald-800 border-emerald-300'
                }`}
              >
                Save 25%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-8">
          {PRICING_TIERS.map((tier) => {
            const displayPrice =
              billingCycle === 'annual' ? tier.priceAnnual : tier.priceMonthly;

            return (
              <motion.div
                key={tier.id}
                whileHover={{ y: -4 }}
                className={`border rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative 
                  transition-all duration-200 ${
                  tier.popular
                    ? isDark
                      ? 'bg-slate-900 border-indigo-500 shadow-xl shadow-indigo-500/10'
                      : 'bg-white border-indigo-500 shadow-xl shadow-indigo-500/15'
                    : isDark
                    ? 'bg-slate-900 border-slate-700'
                    : 'bg-white border-slate-300'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-600 
                  to-violet-600 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full 
                  shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Most Popular Choice</span>
                  </div>
                )}

                <div>
                  <h3
                    className={`text-xl font-bold ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {tier.name}
                  </h3>
                  <p
                    className={`text-xs mt-2 min-h-[36px] ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    {tier.description}
                  </p>

                  <div className="mt-6 flex items-baseline gap-1">
                    <span
                      className={`text-3xl sm:text-4xl font-black flex items-center ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      <IndianRupee
                        className={`w-6 h-6 ${
                          isDark ? 'text-slate-400' : 'text-slate-500'
                        }`}
                      />
                      {displayPrice}
                    </span>
                    <span
                      className={`text-xs ${
                        isDark ? 'text-slate-400' : 'text-slate-500'
                      }`}
                    >
                      {tier.priceMonthly === 0
                        ? ''
                        : billingCycle === 'annual'
                        ? '/year'
                        : '/month'}
                    </span>
                  </div>

                  <ul
                    className={`mt-8 space-y-3 pt-6 border-t ${
                      isDark ? 'border-slate-700' : 'border-slate-300'
                    }`}
                  >
                    {tier.features.map((feat) => (
                      <li
                        key={feat}
                        className={`text-xs flex items-start gap-2.5 ${
                          isDark ? 'text-slate-300' : 'text-slate-700'
                        }`}
                      >
                        <Check
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            isDark ? 'text-emerald-400' : 'text-emerald-600'
                          }`}
                        />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <button
                    className={`w-full py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                      tier.popular
                        ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30'
                        : isDark
                        ? 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300'
                    }`}
                  >
                    {tier.ctaText}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};