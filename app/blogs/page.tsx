"use client";
import { NewspaperIcon } from '@heroicons/react/24/solid';
import { useContext } from 'react';
import { LanguageContext } from '../language-context';

const content = {
  en: {
    title: 'Blogs',
    desc: 'Stay tuned—exciting blog articles about data labeling are coming soon!'
  },
  zh: {
    title: '博客',
    desc: '敬请期待——精彩的数据标注相关文章即将上线！'
  }
};

export default function Blogs() {
  const { language } = useContext(LanguageContext);
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 flex flex-col items-center justify-center p-8 relative z-10">
        {/* Spider-Verse-inspired SVG Illustration with more bubbles */}
        <div className="mb-8">
          <svg width="220" height="220" viewBox="0 0 340 340" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="blogverse1" cx="0.5" cy="0.5" r="0.7">
                <stop offset="0%" stopColor="#f472b6" />
                <stop offset="100%" stopColor="#0ea5e9" />
              </radialGradient>
              <linearGradient id="blogverse2" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>
            <ellipse cx="110" cy="110" rx="90" ry="90" fill="url(#blogverse1)" opacity="0.85" />
            <ellipse cx="110" cy="110" rx="60" ry="20" fill="none" stroke="url(#blogverse2)" strokeWidth="4" opacity="0.7" />
            <circle cx="70" cy="70" r="6" fill="#f472b6" opacity="0.7" />
            <circle cx="150" cy="60" r="4" fill="#38bdf8" opacity="0.7" />
            <circle cx="170" cy="140" r="5" fill="#a855f7" opacity="0.7" />
            {/* More bubbles */}
            <circle cx="90" cy="180" r="7" fill="#38bdf8" opacity="0.6" />
            <circle cx="130" cy="170" r="5" fill="#f472b6" opacity="0.5" />
            <circle cx="180" cy="100" r="8" fill="#a855f7" opacity="0.5" />
            <circle cx="120" cy="130" r="4" fill="#0ea5e9" opacity="0.6" />
            {/* Even more bubbles */}
            <circle cx="60" cy="160" r="3" fill="#fff" opacity="0.3" />
            <circle cx="200" cy="80" r="5" fill="#fff" opacity="0.2" />
            <circle cx="180" cy="200" r="6" fill="#38bdf8" opacity="0.4" />
            <circle cx="100" cy="40" r="4" fill="#a855f7" opacity="0.4" />
            <circle cx="160" cy="200" r="3" fill="#f472b6" opacity="0.5" />
          </svg>
        </div>
        <NewspaperIcon className="h-16 w-16 text-blue-500 mb-4 drop-shadow-lg" />
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 drop-shadow-lg text-center">
          {content[language].title}
        </h1>
        <p className="text-xl text-center mb-8 text-purple-100 max-w-2xl drop-shadow">
          {content[language].desc}
        </p>
      </main>
    </div>
  );
}