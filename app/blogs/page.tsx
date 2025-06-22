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
      <main className="flex-1 flex flex-col items-center justify-start pt-0 pb-0 p-8 relative z-10">
        {/* Spider-Verse-inspired SVG Illustration with more visible bubbles */}
        <div className="mb-8">
          <svg width="260" height="260" viewBox="0 0 340 340" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
            <defs>
              <radialGradient id="blogverse1" cx="0.5" cy="0.5" r="0.7">
                <stop offset="0%" stopColor="#f472b6" />
                <stop offset="100%" stopColor="#0ea5e9" />
              </radialGradient>
              <linearGradient id="blogverse2" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
              <radialGradient id="blogverse3" cx="0.5" cy="0.5" r="0.7">
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#f472b6" />
              </radialGradient>
              <radialGradient id="blogverse4" cx="0.5" cy="0.5" r="0.7">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#0ea5e9" />
              </radialGradient>
              <radialGradient id="blogverse5" cx="0.5" cy="0.5" r="0.7">
                <stop offset="0%" stopColor="#f472b6" />
                <stop offset="100%" stopColor="#a855f7" />
              </radialGradient>
            </defs>
            {/* All SVG bubbles removed */}
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