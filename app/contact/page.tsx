"use client";

import { EnvelopeIcon } from '@heroicons/react/24/solid';
import { useContext } from 'react';
import { LanguageContext } from '../language-context';
import FloatingBubbles from '../components/FloatingBubbles';

const content = {
  en: {
    title: 'Contact & Collaboration',
    desc: 'Collaboration opportunities and connections are welcome! For inquiries, partnerships, or just to say hello, please reach out:',
    email: 'ygao1841@gmail.com'
  },
  zh: {
    title: '联系与合作',
    desc: '欢迎合作与联系！如有咨询、合作或想交流，欢迎通过以下方式联系：',
    email: 'ygao1841@gmail.com'
  }
};

export default function Contact() {
  const { language } = useContext(LanguageContext);
  return (
    <div className="flex flex-col min-h-screen">
      <FloatingBubbles />
      <main className="flex-1 flex flex-col items-center justify-start pt-0 pb-0 p-8 relative z-10">
        {/* Spider-Verse-inspired SVG Illustration with more visible bubbles */}
        <div className="mb-8">
          <svg width="260" height="260" viewBox="0 0 340 340" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
            <defs>
              <radialGradient id="contactverse1" cx="0.5" cy="0.5" r="0.7">
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#0ea5e9" />
              </radialGradient>
              <linearGradient id="contactverse2" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#f472b6" />
              </linearGradient>
              <radialGradient id="contactverse3" cx="0.5" cy="0.5" r="0.7">
                <stop offset="0%" stopColor="#f472b6" />
                <stop offset="100%" stopColor="#a855f7" />
              </radialGradient>
              <radialGradient id="contactverse4" cx="0.5" cy="0.5" r="0.7">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#0ea5e9" />
              </radialGradient>
              <radialGradient id="contactverse5" cx="0.5" cy="0.5" r="0.7">
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#f472b6" />
              </radialGradient>
            </defs>
            {/* All SVG bubbles removed */}
          </svg>
        </div>
        <EnvelopeIcon className="h-16 w-16 text-pink-500 mb-4 drop-shadow-lg" />
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 drop-shadow-lg text-center">
          {content[language].title}
        </h1>
        <p className="text-xl text-center mb-4 text-purple-100 max-w-2xl drop-shadow">
          {content[language].desc}
        </p>
        <a
          href={`mailto:${content[language].email}`}
          className="text-blue-600 font-semibold underline hover:text-blue-800 text-lg mb-8"
        >
          {content[language].email}
        </a>
      </main>
    </div>
  );
}