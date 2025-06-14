"use client";
import { AcademicCapIcon, ChartBarIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';
import { useContext } from 'react';
import { LanguageContext } from './language-context';

const content = {
  en: {
    title: 'Welcome to AI Data Labeling Insights',
    desc: 'Explore blogs, industry trends, and collaborate with us!'
  },
  zh: {
    title: '欢迎来到AI数据标注洞察',
    desc: '探索博客、行业趋势，与我们合作！'
  }
};

export default function Home() {
  const { language } = useContext(LanguageContext);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <div className="flex space-x-8 mb-8">
        <AcademicCapIcon className="h-16 w-16 text-blue-500" />
        <ChartBarIcon className="h-16 w-16 text-purple-500" />
        <ChatBubbleLeftRightIcon className="h-16 w-16 text-pink-500" />
      </div>
      <h1 className="text-4xl font-bold mb-4">{content[language].title}</h1>
      <p className="text-lg text-center mb-8">
        {content[language].desc}
      </p>
    </main>
  );
}