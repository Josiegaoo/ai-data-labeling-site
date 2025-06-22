"use client";

import { useState, useContext } from "react";
import { LanguageContext } from '../language-context';
import { BookOpenIcon, StarIcon, UserIcon, CalendarIcon, EyeIcon, HeartIcon } from '@heroicons/react/24/solid';

const bookReviews = [
  {
    title: { en: "Deep Learning", zh: "深度学习" },
    author: { en: "Ian Goodfellow, Yoshua Bengio, Aaron Courville", zh: "Ian Goodfellow, Yoshua Bengio, Aaron Courville" },
    rating: 5,
    publishDate: { en: "2016", zh: "2016年" },
    category: { en: "Machine Learning", zh: "机器学习" },
    coverImage: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=600&fit=crop",
    overview: {
      en: "The definitive textbook on deep learning, covering fundamental concepts, algorithms, and applications.",
      zh: "深度学习的权威教材，涵盖基本概念、算法和应用。"
    },
    review: {
      en: "This comprehensive guide is essential for anyone serious about understanding deep learning. The authors provide clear explanations of complex concepts, making it accessible to both beginners and advanced practitioners. The book covers everything from basic neural networks to advanced architectures like GANs and transformers.",
      zh: "这本全面的指南对于任何认真理解深度学习的人来说都是必不可少的。作者对复杂概念提供了清晰的解释，使其对初学者和高级从业者都易于理解。本书涵盖从基本神经网络到GAN和transformer等高级架构的所有内容。"
    },
    pros: {
      en: ["Comprehensive coverage", "Clear explanations", "Practical examples", "Up-to-date content"],
      zh: ["全面覆盖", "清晰解释", "实用示例", "最新内容"]
    },
    cons: {
      en: ["Dense material", "Requires strong math background", "Large book size"],
      zh: ["内容密集", "需要扎实的数学基础", "书籍较大"]
    }
  },
  {
    title: { en: "Hands-On Machine Learning", zh: "动手学机器学习" },
    author: { en: "Aurélien Géron", zh: "Aurélien Géron" },
    rating: 5,
    publishDate: { en: "2019", zh: "2019年" },
    category: { en: "Machine Learning", zh: "机器学习" },
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=600&fit=crop",
    overview: {
      en: "A practical guide to machine learning with Scikit-Learn, Keras, and TensorFlow.",
      zh: "使用Scikit-Learn、Keras和TensorFlow的机器学习实用指南。"
    },
    review: {
      en: "This book excels at bridging the gap between theory and practice. The hands-on approach with real code examples makes it perfect for practitioners who want to implement machine learning solutions. The author's writing style is engaging and the progression from basic to advanced topics is well-structured.",
      zh: "这本书在理论与实践之间架起了桥梁。带有真实代码示例的动手方法使其成为想要实现机器学习解决方案的从业者的完美选择。作者的写作风格引人入胜，从基础到高级主题的进展结构良好。"
    },
    pros: {
      en: ["Practical approach", "Code examples", "Well-structured", "Engaging writing"],
      zh: ["实用方法", "代码示例", "结构良好", "引人入胜的写作"]
    },
    cons: {
      en: ["Some sections could be more detailed", "Requires Python knowledge"],
      zh: ["某些部分可以更详细", "需要Python知识"]
    }
  },
  {
    title: { en: "The Hundred-Page Machine Learning Book", zh: "百页机器学习书" },
    author: { en: "Andriy Burkov", zh: "Andriy Burkov" },
    rating: 4,
    publishDate: { en: "2019", zh: "2019年" },
    category: { en: "Machine Learning", zh: "机器学习" },
    coverImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
    overview: {
      en: "A concise introduction to machine learning concepts and algorithms.",
      zh: "机器学习概念和算法的简明介绍。"
    },
    review: {
      en: "This book lives up to its promise of being concise yet comprehensive. It's perfect for busy professionals who need to quickly understand machine learning fundamentals. The author manages to cover essential topics without overwhelming the reader with unnecessary details.",
      zh: "这本书实现了简洁而全面的承诺。对于需要快速理解机器学习基础知识的忙碌专业人士来说，这是完美的。作者能够涵盖基本主题，而不会用不必要的细节让读者感到困惑。"
    },
    pros: {
      en: ["Concise", "Comprehensive", "Easy to read", "Good for beginners"],
      zh: ["简洁", "全面", "易读", "适合初学者"]
    },
    cons: {
      en: ["Limited depth", "Few practical examples"],
      zh: ["深度有限", "实用示例较少"]
    }
  },
  {
    title: { en: "Data Science from Scratch", zh: "从零开始数据科学" },
    author: { en: "Joel Grus", zh: "Joel Grus" },
    rating: 4,
    publishDate: { en: "2019", zh: "2019年" },
    category: { en: "Data Science", zh: "数据科学" },
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=600&fit=crop",
    overview: {
      en: "Learn data science fundamentals by implementing algorithms from scratch in Python.",
      zh: "通过在Python中从头实现算法来学习数据科学基础知识。"
    },
    review: {
      en: "This book takes a unique approach by teaching data science through implementation. By building algorithms from scratch, readers gain deep understanding of how things work under the hood. The author's humor and clear explanations make complex topics accessible.",
      zh: "这本书通过实现来教授数据科学，采用了独特的方法。通过从头构建算法，读者深入了解了底层工作原理。作者的幽默和清晰解释使复杂主题易于理解。"
    },
    pros: {
      en: ["Hands-on implementation", "Clear explanations", "Humorous writing", "Deep understanding"],
      zh: ["动手实现", "清晰解释", "幽默写作", "深入理解"]
    },
    cons: {
      en: ["Can be overwhelming", "Requires programming skills"],
      zh: ["可能令人困惑", "需要编程技能"]
    }
  },
  {
    title: { en: "Pattern Recognition and Machine Learning", zh: "模式识别与机器学习" },
    author: { en: "Christopher Bishop", zh: "Christopher Bishop" },
    rating: 5,
    publishDate: { en: "2006", zh: "2006年" },
    category: { en: "Machine Learning", zh: "机器学习" },
    coverImage: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=600&fit=crop",
    overview: {
      en: "A comprehensive textbook on pattern recognition and machine learning with Bayesian perspective.",
      zh: "从贝叶斯角度全面介绍模式识别和机器学习的教材。"
    },
    review: {
      en: "This is a classic textbook that provides a solid foundation in machine learning from a Bayesian perspective. Bishop's treatment of the subject is mathematically rigorous yet accessible. The book is particularly strong in its coverage of probabilistic methods and graphical models.",
      zh: "这是一本经典教材，从贝叶斯角度为机器学习提供了坚实的基础。Bishop对这门学科的处理在数学上严谨但易于理解。本书在概率方法和图形模型的覆盖方面特别强。"
    },
    pros: {
      en: ["Mathematical rigor", "Comprehensive coverage", "Bayesian perspective", "Classic reference"],
      zh: ["数学严谨", "全面覆盖", "贝叶斯视角", "经典参考"]
    },
    cons: {
      en: ["Dense mathematical content", "Dated in some areas"],
      zh: ["密集的数学内容", "某些领域过时"]
    }
  },
  {
    title: { en: "Introduction to Statistical Learning", zh: "统计学习导论" },
    author: { en: "Gareth James, Daniela Witten, Trevor Hastie, Robert Tibshirani", zh: "Gareth James, Daniela Witten, Trevor Hastie, Robert Tibshirani" },
    rating: 5,
    publishDate: { en: "2013", zh: "2013年" },
    category: { en: "Statistics", zh: "统计学" },
    coverImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
    overview: {
      en: "An accessible introduction to statistical learning methods with R examples.",
      zh: "使用R示例的统计学习方法简明介绍。"
    },
    review: {
      en: "This book is perfect for those who want to understand the statistical foundations of machine learning. The authors explain complex concepts in an intuitive way, and the R examples help reinforce understanding. It's particularly good for students and researchers in statistics and related fields.",
      zh: "这本书非常适合想要理解机器学习统计基础的人。作者以直观的方式解释复杂概念，R示例有助于加深理解。特别适合统计学和相关领域的学生和研究人员。"
    },
    pros: {
      en: ["Statistical foundation", "Intuitive explanations", "R examples", "Academic rigor"],
      zh: ["统计基础", "直观解释", "R示例", "学术严谨"]
    },
    cons: {
      en: ["R-focused", "Less practical for production"],
      zh: ["专注于R", "生产实用性较低"]
    }
  }
];

export default function BookReviews() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { language } = useContext(LanguageContext);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <StarIcon
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 flex flex-col items-center justify-start pt-0 pb-0 p-8 relative z-10">
        {/* Futuristic SVG Illustration */}
        <div className="mb-8 mt-0">
          <svg width="260" height="260" viewBox="0 0 340 340" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
            <defs>
              <radialGradient id="bookverse1" cx="0.5" cy="0.5" r="0.7">
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#0ea5e9" />
              </radialGradient>
              <linearGradient id="bookverse2" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#f472b6" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        <BookOpenIcon className="h-16 w-16 text-purple-500 mb-4 drop-shadow-lg" />
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 drop-shadow-lg text-center">
          {language === 'en' ? 'Book Reviews' : '书籍评论'}
        </h1>
        
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bookReviews.map((book, idx) => (
            <div
              key={book.title.en}
              className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={book.coverImage}
                  alt={book.title[language]}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2 bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  {book.category[language]}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-1">
                    {renderStars(book.rating)}
                  </div>
                  <span className="text-sm text-gray-600">{book.rating}/5</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {book.title[language]}
                </h3>
                
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <UserIcon className="h-4 w-4 mr-1" />
                  <span>{book.author[language]}</span>
                </div>
                
                <div className="flex items-center text-sm text-gray-600 mb-3">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  <span>{book.publishDate[language]}</span>
                </div>
                
                <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                  {book.overview[language]}
                </p>
                
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200 font-semibold"
                >
                  {openIndex === idx 
                    ? (language === 'en' ? 'Show Less' : '显示更少')
                    : (language === 'en' ? 'Read Full Review' : '阅读完整评论')
                  }
                </button>
              </div>
              
              {openIndex === idx && (
                <div className="px-6 pb-6 border-t border-gray-200 pt-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {language === 'en' ? 'Full Review' : '完整评论'}
                  </h4>
                  <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                    {book.review[language]}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-green-600 mb-2 flex items-center">
                        <HeartIcon className="h-4 w-4 mr-1" />
                        {language === 'en' ? 'Pros' : '优点'}
                      </h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        {book.pros[language].map((pro, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-red-600 mb-2 flex items-center">
                        <EyeIcon className="h-4 w-4 mr-1" />
                        {language === 'en' ? 'Cons' : '缺点'}
                      </h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        {book.cons[language].map((con, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-red-500 mr-2">•</span>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
} 