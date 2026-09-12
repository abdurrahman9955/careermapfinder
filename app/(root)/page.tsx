'use cleint';
import { Metadata } from 'next';
import { Navbar } from '@/app/components/landing/Navbar';
import { HeroSection } from '@/app/components/landing/HeroSection';
import { RegionalStateSelector } from '@/app/components/landing/RegionalStateSelector';
import { KeyServices } from '@/app/components/landing/KeyServices';
import { HowItWorks } from '@/app/components/landing/HowItWorks';
import { PricingSection } from '@/app/components/landing/PricingSection';
import { ContactFormTab } from '@/app/components/landing/ContactFormTab';
import { Footer } from '@/app/components/landing/Footer';

export const metadata: Metadata = {
  title: 'CareerMapFinder | Career Discovery & Regional Roadmaps for Indian Students',
  description: 'Discover your better study path, regional entrance exams, state quotas, entry salary expectations, and living costs across India.',
  openGraph: {
    title: 'CareerMapFinder | Indian Career Ecosystem',
    description: 'Comprehensive career discovery, regional state roadmaps, exam cutoffs, and ROI calculators tailored for Indian students and parents.',
    url: 'https://careermapfinder.com',
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
      <RegionalStateSelector />
      <KeyServices />
      <HowItWorks />
      <PricingSection />
      <ContactFormTab />
      <Footer />
    </main>
  );
}

