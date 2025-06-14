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
      {/* Futuristic SVG/Illustration */}
      <div className="mb-8">
        <svg width="320" height="320" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="160" cy="160" r="120" fill="url(#paint0_radial)" />
          <circle cx="160" cy="160" r="100" fill="url(#paint1_radial)" opacity="0.7" />
          <defs>
            <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientTransform="translate(160 160) rotate(90) scale(120)" gradientUnits="userSpaceOnUse">
              <stop stopColor="#a855f7" />
              <stop offset="1" stopColor="#0ea5e9" />
            </radialGradient>
            <radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientTransform="translate(160 160) rotate(90) scale(100)" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f472b6" />
              <stop offset="1" stopColor="#0a0026" />
            </radialGradient>
          </defs>
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