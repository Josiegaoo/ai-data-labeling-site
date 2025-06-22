"use client";
import { useContext } from 'react';
import { LanguageContext } from './language-context';

const content = {
  en: {
    title: 'Welcome to AI Data Labeling Insights',
    desc: 'Explore blogs, industry trends, book reviews, and collaborate with us!',
    cta: 'Get Started'
  },
  zh: {
    title: '欢迎来到AI数据标注洞察',
    desc: '探索博客、行业趋势、书籍评论，与我们合作！',
    cta: '立即开始'
  }
};

export default function Home() {
  const { language } = useContext(LanguageContext);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 relative z-10">
      {/* Futuristic VR wallpaper background from Freepik */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <img
          src="https://img.freepik.com/premium-photo/person-using-vr-ar-googles_941097-220016.jpg"
          alt="Futuristic VR"
          className="w-full h-full object-cover object-center animate-vr-glow"
          style={{
            filter: 'brightness(0.85) saturate(1.2) blur(0.5px)',
            mixBlendMode: 'screen',
            opacity: 0.7,
          }}
          aria-hidden="true"
        />
        {/* Overlay gradient for color harmony */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(120deg, rgba(109,40,217,0.55) 0%, rgba(14,165,233,0.35) 100%)',
            zIndex: 1,
          }}
        />
        <style jsx>{`
          .animate-vr-glow {
            animation: vr-glow-pulse 3.2s ease-in-out infinite;
          }
          @keyframes vr-glow-pulse {
            0%, 100% {
              filter: brightness(0.85) saturate(1.2) blur(0.5px) drop-shadow(0 0 24px #a855f7);
            }
            50% {
              filter: brightness(1.05) saturate(1.4) blur(0.5px) drop-shadow(0 0 48px #38bdf8);
            }
          }
        `}</style>
      </div>
      <div className="flex flex-col items-start justify-start absolute top-0 left-0 mt-16 ml-16 z-20 max-w-xl">
        {/* Animated bubble */}
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="mb-4 animated-bubble">
          <circle cx="32" cy="32" r="28" fill="url(#bubbleGradient)" opacity="0.85" />
          <defs>
            <radialGradient id="bubbleGradient" cx="0.5" cy="0.5" r="0.7">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#38bdf8" />
            </radialGradient>
          </defs>
        </svg>
        <style jsx>{`
          .animated-bubble {
            animation: bubble-pulse 2.4s ease-in-out infinite;
          }
          @keyframes bubble-pulse {
            0%, 100% {
              transform: scale(1);
              opacity: 0.85;
            }
            50% {
              transform: scale(1.12);
              opacity: 1;
            }
          }
        `}</style>
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 drop-shadow-lg text-left">
          {content[language].title}
        </h1>
        <p className="text-xl text-left mb-0 text-purple-100 max-w-2xl drop-shadow">
          {content[language].desc}
        </p>
      </div>
    </main>
  );
}