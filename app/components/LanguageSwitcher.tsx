"use client";
import { useContext } from "react";
import { LanguageContext } from "../language-context";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useContext(LanguageContext);
  return (
    <div className="flex items-center space-x-2">
      <button
        className={`px-3 py-1 rounded transition-colors duration-200 ${language === 'en' ? 'bg-purple-300 text-purple-700' : 'bg-white text-purple-500 border border-purple-300'}`}
        onClick={() => setLanguage('en')}
      >
        English
      </button>
      <button
        className={`px-3 py-1 rounded transition-colors duration-200 ${language === 'zh' ? 'bg-purple-300 text-purple-700' : 'bg-white text-purple-500 border border-purple-300'}`}
        onClick={() => setLanguage('zh')}
      >
        中文
      </button>
    </div>
  );
} 