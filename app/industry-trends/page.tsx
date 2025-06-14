"use client";

import { useState, useContext } from "react";
import { LanguageContext } from '../language-context';
import { ArrowTrendingUpIcon, CpuChipIcon, UserGroupIcon, LightBulbIcon, BeakerIcon, PhotoIcon, GlobeAltIcon, UsersIcon, DevicePhoneMobileIcon, ShieldCheckIcon } from '@heroicons/react/24/solid';

const trends = [
  {
    title: { en: "AI-Powered Automation", zh: "AI驱动的自动化" },
    icon: CpuChipIcon,
    iconColor: "text-blue-500",
    overview: {
      en: "AI agents, particularly large language models like GPT-4, are utilized to automate data labeling tasks.",
      zh: "AI代理，尤其是像GPT-4这样的大型语言模型，被用于自动化数据标注任务。"
    },
    impact: {
      en: "They significantly reduce annotation costs and time, while maintaining or enhancing labeling accuracy.",
      zh: "大幅降低标注成本和时间，同时保持或提升标注准确性。"
    },
  },
  {
    title: { en: "Data Intelligence", zh: "数据智能" },
    icon: LightBulbIcon,
    iconColor: "text-yellow-500",
    overview: {
      en: "Data intelligence involves leveraging advanced analytics and machine learning to optimize data labeling processes.",
      zh: "数据智能通过高级分析和机器学习优化数据标注流程。"
    },
    impact: {
      en: "It improves labeling efficiency by identifying patterns and anomalies, ensuring high-quality data for AI models.",
      zh: "通过识别模式和异常，提高标注效率，确保AI模型高质量数据。"
    },
  },
  {
    title: { en: "Hybrid Annotation Systems", zh: "混合标注系统" },
    icon: UserGroupIcon,
    iconColor: "text-purple-500",
    overview: {
      en: "These systems combine AI automation with human expertise to enhance data labeling.",
      zh: "这些系统结合AI自动化与人工专业知识提升数据标注。"
    },
    impact: {
      en: "They balance cost and quality by automating routine tasks and involving humans in complex cases.",
      zh: "通过自动化常规任务并在人类参与复杂案例时，实现成本与质量平衡。"
    },
  },
  {
    title: { en: "Knowledge-Enhanced Labeling", zh: "知识增强标注" },
    icon: BeakerIcon,
    iconColor: "text-green-500",
    overview: {
      en: "Incorporating domain-specific knowledge into the labeling process to improve accuracy and relevance.",
      zh: "将领域知识融入标注流程，提高准确性和相关性。"
    },
    impact: {
      en: "It ensures that labeled data is contextually accurate, enhancing model performance.",
      zh: "确保标注数据具备上下文准确性，提升模型表现。"
    },
  },
  {
    title: { en: "Active Learning", zh: "主动学习" },
    icon: ArrowTrendingUpIcon,
    iconColor: "text-pink-500",
    overview: {
      en: "Active learning prioritizes data points that the model finds challenging, ensuring efficient use of human annotators.",
      zh: "主动学习优先处理模型难以判断的数据点，高效利用人工标注。"
    },
    impact: {
      en: "It accelerates model convergence and reduces labeling effort, optimizing resources.",
      zh: "加速模型收敛，减少标注工作量，优化资源。"
    },
  },
  {
    title: { en: "Synthetic Data Generation", zh: "合成数据生成" },
    icon: PhotoIcon,
    iconColor: "text-indigo-500",
    overview: {
      en: "Using tools like Generative Adversarial Networks (GANs), synthetic data can be created to supplement real-world data.",
      zh: "利用GAN等工具生成合成数据，补充真实数据。"
    },
    impact: {
      en: "It enhances model robustness and diversity, especially when real-world data is scarce or expensive.",
      zh: "提升模型鲁棒性和多样性，尤其适用于真实数据稀缺或昂贵的场景。"
    },
  },
  {
    title: { en: "Multi-modal Annotation", zh: "多模态标注" },
    icon: GlobeAltIcon,
    iconColor: "text-cyan-500",
    overview: {
      en: "Combining different data types, like image, audio, video, and text, for comprehensive AI model training.",
      zh: "结合图像、音频、视频和文本等多种数据类型，助力AI模型训练。"
    },
    impact: {
      en: "It supports the development of advanced AI models that can process information from diverse sources.",
      zh: "支持处理多源信息的先进AI模型开发。"
    },
  },
  {
    title: { en: "Crowdsourcing and Collaborative Annotation", zh: "众包与协作标注" },
    icon: UsersIcon,
    iconColor: "text-orange-500",
    overview: {
      en: "Leveraging global talent pools through platforms like Amazon Mechanical Turk for scalable data labeling.",
      zh: "通过Amazon Mechanical Turk等平台，利用全球人才进行大规模数据标注。"
    },
    impact: {
      en: "It offers cost-effective and diverse annotations, though maintaining quality can be challenging.",
      zh: "提供高性价比和多样化标注，但质量控制具有挑战。"
    },
  },
  {
    title: { en: "Edge Computing and IoT Applications", zh: "边缘计算与物联网应用" },
    icon: DevicePhoneMobileIcon,
    iconColor: "text-teal-500",
    overview: {
      en: "AI-powered sensors and devices perform real-time data labeling at the edge.",
      zh: "AI传感器和设备在边缘实时完成数据标注。"
    },
    impact: {
      en: "It enables instant analysis and decision-making in applications like manufacturing and agriculture.",
      zh: "实现制造、农业等场景的即时分析与决策。"
    },
  },
  {
    title: { en: "Ethical and Fair Data Labeling", zh: "伦理与公平数据标注" },
    icon: ShieldCheckIcon,
    iconColor: "text-red-500",
    overview: {
      en: "Implementing guidelines and best practices to ensure transparency, fairness, and inclusivity in AI systems.",
      zh: "制定指南和最佳实践，确保AI系统的透明、公平和包容。"
    },
    impact: {
      en: "It helps mitigate biases and ensures that annotated data reflects diverse perspectives.",
      zh: "有助于减少偏见，确保标注数据反映多元观点。"
    },
  },
];

// Helper to generate a random margin-top for each segment
const randomMargins = ["mt-0", "mt-4", "mt-8", "mt-12", "mt-16"]; // You can adjust these values for more/less scatter

export default function IndustryTrends() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { language } = useContext(LanguageContext);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 relative z-10">
      {/* Spider-Verse-inspired SVG Illustration with more bubbles */}
      <div className="mb-8">
        <svg width="220" height="220" viewBox="0 0 340 340" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="trendverse1" cx="0.5" cy="0.5" r="0.7">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#0ea5e9" />
            </radialGradient>
            <linearGradient id="trendverse2" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#f472b6" />
            </linearGradient>
          </defs>
          <ellipse cx="110" cy="110" rx="90" ry="90" fill="url(#trendverse1)" opacity="0.85" />
          <ellipse cx="110" cy="110" rx="60" ry="20" fill="none" stroke="url(#trendverse2)" strokeWidth="4" opacity="0.7" />
          <circle cx="70" cy="70" r="6" fill="#f472b6" opacity="0.7" />
          <circle cx="150" cy="60" r="4" fill="#38bdf8" opacity="0.7" />
          <circle cx="170" cy="140" r="5" fill="#a855f7" opacity="0.7" />
          {/* More bubbles */}
          <circle cx="90" cy="180" r="7" fill="#38bdf8" opacity="0.6" />
          <circle cx="130" cy="170" r="5" fill="#f472b6" opacity="0.5" />
          <circle cx="180" cy="100" r="8" fill="#a855f7" opacity="0.5" />
          <circle cx="120" cy="130" r="4" fill="#0ea5e9" opacity="0.6" />
        </svg>
      </div>
      <ArrowTrendingUpIcon className="h-16 w-16 text-purple-500 mb-4 drop-shadow-lg" />
      <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 drop-shadow-lg text-center">
        {language === 'en' ? 'Industry Trends' : '行业趋势'}
      </h1>
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {trends.map((trend, idx) => {
          const Icon = trend.icon;
          // Center align the last two segments if they are the last row (positions 8 and 9 in a 4-column grid)
          let extraClass = '';
          if (idx === 8) extraClass = 'lg:col-start-2';
          if (idx === 9) extraClass = 'lg:col-start-3';
          return (
            <div
              key={trend.title.en}
              className={`flex flex-col items-center justify-center rounded-xl shadow-lg bg-white/80 hover:bg-white transition cursor-pointer ${randomMargins[idx % randomMargins.length]} ${extraClass} ${openIndex === idx ? 'ring-2 ring-purple-400' : ''}`}
              style={{ minHeight: 320, height: 320 }}
            >
              <button
                className="w-full h-full flex flex-col justify-center items-center px-4 py-2 font-semibold text-lg focus:outline-none bg-transparent text-black"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <Icon className={`h-10 w-10 mb-2 ${trend.iconColor}`} />
                {trend.title[language]}
              </button>
              {openIndex === idx && (
                <div className="bg-white/90 rounded-b-xl px-6 py-6 border-t border-purple-200 mt-2 text-black">
                  <p className="mb-2"><span className="font-bold">{language === 'en' ? 'Overview:' : '概述：'}</span> {trend.overview[language]}</p>
                  <p><span className="font-bold">{language === 'en' ? 'Impact:' : '影响：'}</span> {trend.impact[language]}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </main>
  );
}