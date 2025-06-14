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
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <NewspaperIcon className="h-16 w-16 text-blue-500 mb-4" />
      <h1 className="text-3xl font-bold mb-4">{content[language].title}</h1>
      <p className="text-lg text-center mb-8">
        {content[language].desc}
      </p>
    </main>
  );
}