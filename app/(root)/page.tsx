'use cleint';
import { Metadata } from 'next';
import { Navbar } from '@/app/components/landing/Navbar';
import { HeroSection } from '@/app/components/landing/HeroSection';
import { KeyServices } from '@/app/components/landing/KeyServices';
import { HowItWorks } from '@/app/components/landing/HowItWorks';
import { PricingSection } from '@/app/components/landing/PricingSection';
import { Footer } from '@/app/components/landing/Footer';
import ContactUsPageHome from '../components/dashboard/contact/ContactPageHome';
import FeedbackPageHome from '../components/dashboard/feedback/FeedbackPageHome';

export const metadata: Metadata = {
  title: 'CareerMapFinder | Career Discovery & Regional Roadmaps for Students',
  description: 'Discover your better study path, regional entrance exams, state quotas, entry salary expectations, and living costs across the globe.',
  openGraph: {
    title: 'CareerMapFinder | Career Ecosystem',
    description: 'Comprehensive career discovery, regional state roadmaps, exam cutoffs, and ROI calculators tailored for students and parents.',
    url: 'https://wwww.careermapfinder.com',
    siteName: 'CareerMapFinder',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white">
      <Navbar />
      <HeroSection />
      <KeyServices />
      <HowItWorks />
      <PricingSection />
      <ContactUsPageHome />
      <FeedbackPageHome />
      <Footer />
    </main>
  );
}

