"use client";
import Link from "next/link";
import { useContext } from "react";
import { LanguageContext } from "../language-context";

const navLabels = {
  en: {
    home: "Home",
    blogs: "Blogs",
    trends: "Industry Trends",
    contact: "Contact & Collaboration"
  },
  zh: {
    home: "首页",
    blogs: "博客",
    trends: "行业趋势",
    contact: "联系与合作"
  }
};

export default function Navbar() {
  const { language } = useContext(LanguageContext);
  return (
    <nav className="w-full flex justify-center py-6">
      <ul className="flex space-x-8">
        <li>
          <Link href="/" className="font-semibold hover:text-blue-600">{navLabels[language].home}</Link>
        </li>
        <li>
          <Link href="/blogs" className="font-semibold hover:text-blue-600">{navLabels[language].blogs}</Link>
        </li>
        <li>
          <Link href="/industry-trends" className="font-semibold hover:text-blue-600">{navLabels[language].trends}</Link>
        </li>
        <li>
          <Link href="/contact" className="font-semibold hover:text-blue-600">{navLabels[language].contact}</Link>
        </li>
      </ul>
    </nav>
  );
}