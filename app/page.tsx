"use client";
import { AcademicCapIcon, ChartBarIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';
import { useContext } from 'react';
import { LanguageContext } from './language-context';

const content = {
  en: {
    title: 'Welcome to AI Data Labeling Insights',
    desc: 'Explore blogs, industry trends, and collaborate with us!',
    cta: 'Get Started'
  },
  zh: {
    title: '欢迎来到AI数据标注洞察',
    desc: '探索博客、行业趋势，与我们合作！',
    cta: '立即开始'
  }
};

export default function Home() {
  const { language } = useContext(LanguageContext);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 relative z-10">
      {/* Futuristic, Spider-Verse-inspired SVG Illustration */}
      <div className="mb-8">
        <svg width="340" height="340" viewBox="0 0 340 340" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="spiderverse1" cx="0.5" cy="0.5" r="0.7">
              <stop offset="0%" stopColor="#f472b6" />
              <stop offset="100%" stopColor="#0ea5e9" />
            </radialGradient>
            <radialGradient id="spiderverse2" cx="0.5" cy="0.5" r="0.8">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#0a0026" />
            </radialGradient>
            <linearGradient id="spiderverse3" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#f472b6" />
            </linearGradient>
          </defs>
          {/* Main cosmic orb */}
          <ellipse cx="170" cy="170" rx="120" ry="120" fill="url(#spiderverse1)" opacity="0.85" />
          {/* Overlayed orbits */}
          <ellipse cx="170" cy="170" rx="100" ry="40" fill="none" stroke="url(#spiderverse3)" strokeWidth="6" opacity="0.7" />
          <ellipse cx="170" cy="170" rx="60" ry="120" fill="none" stroke="#f472b6" strokeWidth="3" opacity="0.3" />
          <ellipse cx="170" cy="170" rx="90" ry="90" fill="none" stroke="#38bdf8" strokeWidth="2" opacity="0.4" />
          {/* Spider-Verse style dots */}
          <circle cx="110" cy="110" r="8" fill="#f472b6" opacity="0.8" />
          <circle cx="230" cy="80" r="5" fill="#38bdf8" opacity="0.7" />
          <circle cx="250" cy="200" r="7" fill="#a855f7" opacity="0.7" />
          <circle cx="80" cy="220" r="4" fill="#f472b6" opacity="0.6" />
          <circle cx="200" cy="260" r="6" fill="#38bdf8" opacity="0.7" />
          {/* Central glowing core */}
          <circle cx="170" cy="170" r="32" fill="url(#spiderverse2)" opacity="0.95" />
          <circle cx="170" cy="170" r="18" fill="#fff" opacity="0.12" />
        </svg>
      </div>
      <div className="flex space-x-8 mb-8 z-10">
        <AcademicCapIcon className="h-16 w-16 text-purple-400 drop-shadow-lg" />
        <ChartBarIcon className="h-16 w-16 text-pink-400 drop-shadow-lg" />
        <ChatBubbleLeftRightIcon className="h-16 w-16 text-cyan-400 drop-shadow-lg" />
      </div>
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 drop-shadow-lg text-center">
        {content[language].title}
      </h1>
      <p className="text-xl text-center mb-8 text-purple-100 max-w-2xl drop-shadow">
        {content[language].desc}
      </p>
      <a href="#" className="neon-btn mt-2">{content[language].cta}</a>
    </main>
  );
}