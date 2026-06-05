"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function FloatingCallButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md z-45 transition-all duration-500 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-slate-900/90 backdrop-blur-md border border-white/10 rounded-full py-2.5 px-3 flex items-center justify-between shadow-2xl pulse-button">
        {/* 설명 문구 */}
        <div className="pl-4">
          <p className="text-[10px] text-teal-400 font-bold tracking-wider uppercase">Quick Care</p>
          <p className="text-[13px] text-white font-extrabold tracking-tight">전문 엔지니어 직통</p>
        </div>

        {/* 버튼 그룹 */}
        <div className="flex items-center gap-2">
          {/* 간이 문의 */}
          <Link
            href="#contact"
            className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white text-[12.5px] font-black rounded-full transition-colors"
          >
            상담 신청
          </Link>
          
          {/* 전화 버튼 */}
          <a
            href="tel:010-4667-5568"
            className="w-9 h-9 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center transition-colors"
          >
            <svg
              className="w-4.5 h-4.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
