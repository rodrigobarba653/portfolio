"use client";

import Link from "next/link";
import { content } from "@/data/content";

interface NavigationProps {
  language: string;
  setLanguage: (language: string) => void;
}

export default function Navigation({ language, setLanguage }: NavigationProps) {
  const t = content[language as keyof typeof content];

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-[#beff48]">
            Rodrigo Barba
          </Link>
          <div className="hidden md:flex space-x-8">
            {/* Projects Dropdown */}
            <div className="relative group">
              <button className="text-slate-300 hover:text-[#beff48] transition-colors flex items-center space-x-1">
                <span>Projects</span>
                <svg
                  className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {/* Hover bridge to prevent menu from disappearing */}
              <div className="absolute top-0 left-0 w-full h-8 bg-transparent"></div>
              <div className="absolute top-full left-0 mt-2 w-48 bg-black/95 backdrop-blur-md border border-slate-800/50 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link
                  href="/ui-ux-projects"
                  className="block px-4 py-3 text-slate-300 hover:text-[#beff48] hover:bg-slate-800/50 transition-colors rounded-t-xl"
                >
                  UI/UX & Development
                </Link>
                <Link
                  href="/interactive-projects"
                  className="block px-4 py-3 text-slate-300 hover:text-[#beff48] hover:bg-slate-800/50 transition-colors rounded-b-xl"
                >
                  Interactive Design
                </Link>
              </div>
            </div>

            <Link
              href="/#about"
              className="text-slate-300 hover:text-[#beff48] transition-colors"
            >
              {t.nav.about}
            </Link>
            <Link
              href="/#skills"
              className="text-slate-300 hover:text-[#beff48] transition-colors"
            >
              {t.nav.skills}
            </Link>
            <Link
              href="/#contact"
              className="text-slate-300 hover:text-[#beff48] transition-colors"
            >
              {t.nav.contact}
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <div className="flex items-center space-x-2 bg-slate-800/50 rounded-lg p-1 border border-slate-700/50">
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
                  language === "en"
                    ? "bg-[#beff48] text-black"
                    : "text-slate-300 hover:text-[#beff48]"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("es")}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
                  language === "es"
                    ? "bg-[#beff48] text-black"
                    : "text-slate-300 hover:text-[#beff48]"
                }`}
              >
                ES
              </button>
            </div>
            <button className="md:hidden text-slate-300">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
