import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppProvider } from "../context/AppContext";
import { Providers } from '../context/providers';
import { ThemeProvider } from '../context/ThemeContext'; 
import { ThemeProviderDownload } from '../context/ThemeContextDownload';

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"],});
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"],});

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


export default function RootLayout({ children,}: Readonly<{ children: React.ReactNode;}>) {
  return (
    <html lang="en">
       <head>
       </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
        <ThemeProvider>
          <ThemeProviderDownload>
           <Providers>
              <AppProvider>
                {children}
              </AppProvider>
            </Providers>
          </ThemeProviderDownload>
        </ThemeProvider>
      </body>
    </html>
  );
}

