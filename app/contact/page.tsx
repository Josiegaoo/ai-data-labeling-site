"use client";

import { EnvelopeIcon } from '@heroicons/react/24/solid';
import { useContext } from 'react';
import { LanguageContext } from '../language-context';

const content = {
  en: {
    title: 'Contact & Collaboration',
    desc: 'Collaboration opportunities and connections are welcome! For inquiries, partnerships, or just to say hello, please reach out:',
    email: 'ygao.1841@gmail.com'
  },
  zh: {
    title: '联系与合作',
    desc: '欢迎合作与联系！如有咨询、合作或想交流，欢迎通过以下方式联系：',
    email: 'ygao.1841@gmail.com'
  }
};

export default function Contact() {
  const { language } = useContext(LanguageContext);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <EnvelopeIcon className="h-16 w-16 text-pink-500 mb-4" />
      <h1 className="text-3xl font-bold mb-4">{content[language].title}</h1>
      <p className="text-lg text-center mb-4">
        {content[language].desc}
      </p>
      <a
        href={`mailto:${content[language].email}`}
        className="text-blue-600 font-semibold underline hover:text-blue-800 text-lg mb-8"
      >
        {content[language].email}
      </a>
    </main>
  );
}