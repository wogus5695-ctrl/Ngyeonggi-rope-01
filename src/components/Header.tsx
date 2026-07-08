"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { kakaoChannelUrl } from "@/data/config";

interface HeaderProps {
  phone?: string;
  isWaterproofing?: boolean;
  hideKakao?: boolean;
}

export default function Header({ phone = "050-7871-3590", isWaterproofing, hideKakao }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl z-50 transition-all duration-500 rounded-full ${
        isScrolled
          ? "bg-white/80 border border-teal-500/10 shadow-lg backdrop-blur-md py-3.5 px-6 sm:px-8"
          : "bg-transparent py-5 px-4"
      }`}
    >
      <div className="flex items-center justify-between w-full">
        {/* 로고: 텍스트 없는 입체 물방울 심볼과 브랜드명 조화 */}
        <Link href="/" className="flex items-center gap-3.5 group">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-teal-50 border border-teal-500/10 group-hover:scale-105 transition-transform duration-300">
            <svg
              className="w-5.5 h-5.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="header-droplet-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#14b8a6" />
                  <stop offset="100%" stopColor="#0d9488" />
                </linearGradient>
              </defs>
              <path
                d="M12 2.5C12 2.5 19 9.5 19 14.5C19 18.366 15.866 21.5 12 21.5C8.13401 21.5 5 18.366 5 14.5C5 9.5 12 2.5 12 2.5Z"
                fill="url(#header-droplet-grad)"
              />
              <path
                d="M9.5 11.5C9.5 10.5 10.5 9.5 11.5 9.5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                opacity="0.6"
              />
            </svg>
          </div>
          <span className="text-[17px] font-extrabold tracking-tight text-slate-800">
            틈새케어
          </span>
        </Link>

        {/* 내비게이션 */}
        <nav className="hidden md:flex items-center gap-8 text-[14.5px] font-bold text-slate-600">
          <Link href="#process" className="hover:text-teal-600 transition-colors">
            {isWaterproofing ? "4단계 케어 프로세스" : "5단계 케어 프로세스"}
          </Link>
          <Link href="#costs" className="hover:text-teal-600 transition-colors">
            {isWaterproofing ? "방수 견적 요인" : "견적 요인"}
          </Link>
          <Link href="#faq" className="hover:text-teal-600 transition-colors">
            자주 묻는 질문
          </Link>
          <Link href="#cases" className="hover:text-teal-600 transition-colors">
            시공 레퍼런스
          </Link>
        </nav>

        {/* 액션 버튼 */}
        <div className="flex items-center gap-2 sm:gap-3">
          {!hideKakao && (
            <a
              href={kakaoChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-[12.5px] font-extrabold text-slate-900 bg-[#FEE500] hover:bg-[#FDD800] active:scale-[0.98] transition-all rounded-full shadow-sm hover:shadow-md border border-[#EBE300]/20 cursor-pointer"
              data-cta="kakao"
              aria-label="카카오톡 채널 상담"
            >
              카톡 사진 상담
            </a>
          )}
          <a
            href={`tel:${phone}`}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-[13.5px] font-bold text-white bg-teal-600 hover:bg-teal-700 transition-all rounded-full shadow-sm hover:shadow-md cursor-pointer"
            data-cta="phone"
            aria-label="전화 상담"
          >
            전화 상담
          </a>
          <a
            href={`tel:${phone}`} // 실제 상담용 가상 번호
            className="inline-flex md:hidden items-center justify-center w-10 h-10 bg-teal-50 border border-teal-500/10 text-teal-600 hover:bg-teal-100 transition-colors rounded-full"
            data-cta="phone"
            aria-label="전화 상담"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
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
    </header>
  );
}
