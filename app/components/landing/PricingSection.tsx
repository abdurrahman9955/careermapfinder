'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, IndianRupee } from 'lucide-react';
import { PRICING_TIERS } from '@/app/utils/landing-data';

export const PricingSection: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  return (
    <section id="pricing" className="py-6 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-800/60">
            Transparent Pricing in INR (₹)
          </span>
          <h2 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight mt-3">
            Invest in Your Future with Full Clarity
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Start completely free or unlock advanced AI roadmaps and parent financial planning tools.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="mt-6 inline-flex items-center gap-3 p-1 rounded-xl bg-slate-900 border border-slate-800">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                billingCycle === 'monthly' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                billingCycle === 'annual' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>Annual Billing</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                Save 25%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {PRICING_TIERS.map((tier) => {
            const displayPrice = billingCycle === 'annual' ? tier.priceAnnual : tier.priceMonthly;

            return (
              <motion.div
                key={tier.id}
                whileHover={{ y: -4 }}
                className={`bg-slate-900 border rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative ${
                  tier.popular ? 'border-indigo-500 shadow-xl shadow-indigo-500/10' : 'border-slate-800'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Most Popular Choice</span>
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                  <p className="text-xs text-slate-400 mt-2 min-h-[36px]">{tier.description}</p>

                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-black text-white flex items-center">
                      <IndianRupee className="w-6 h-6 text-slate-400" />
                      {displayPrice}
                    </span>
                    <span className="text-xs text-slate-400">
                      {tier.priceMonthly === 0 ? '' : billingCycle === 'annual' ? '/year' : '/month'}
                    </span>
                  </div>

                  <ul className="mt-8 space-y-3 pt-6 border-t border-slate-800">
                    {tier.features.map((feat) => (
                      <li key={feat} className="text-xs text-slate-300 flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
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
                        : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
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