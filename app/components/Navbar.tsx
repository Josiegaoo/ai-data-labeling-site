"use client";
import Link from "next/link";
import { useContext } from "react";
import { LanguageContext } from "../language-context";

const navLabels = {
  en: {
    site: "about-josie",
    contact: "Contact"
  },
  zh: {
    site: "about-josie",
    contact: "联系我"
  }
};

export default function Navbar() {
  const { language } = useContext(LanguageContext);
  return (
    <nav className="w-full flex justify-center py-6">
      <ul className="flex space-x-8">
        <li>
          <Link href="/" className="text-lg font-semibold tracking-wide text-white hover:text-sky-300 transition">
            {navLabels[language].site}
          </Link>
        </li>
        <li>
          <Link href="#contact" className="font-semibold text-white/80 hover:text-sky-200 transition">
            {navLabels[language].contact}
          </Link>
        </li>
      </ul>
    </nav>
  );
}