"use client";

import React, { useState, useEffect } from "react";
import { kakaoChannelUrl } from "@/data/config";

interface FloatingCallButtonProps {
  phone?: string;
}

export default function FloatingCallButton({ phone = "010-9419-6832" }: FloatingCallButtonProps) {
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
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] max-w-md z-45 transition-all duration-500 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"
      } md:hidden`}
    >
      <div className="flex items-center gap-2.5 w-full bg-slate-950/95 backdrop-blur-md border border-white/10 rounded-2xl p-2.5 shadow-2xl pb-[calc(10px+env(safe-area-inset-bottom,0px))]">
        {/* 카톡 상담 (45%) */}
        <a
          href={kakaoChannelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 w-[45%] py-3.5 bg-[#FEE500] hover:bg-[#FDD800] active:scale-[0.98] text-slate-900 text-[14.5px] font-black rounded-xl transition-all duration-150 cursor-pointer shadow-sm"
          data-cta="kakao"
          aria-label="카카오톡 채널 상담"
        >
          <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
            <path d="M12 3c-4.97 0-9 3.185-9 7.11 0 2.507 1.65 4.718 4.14 5.923l-.84 3.092c-.1.37.13.74.5.74.15 0 .29-.05.4-.15l3.58-2.385c.4.05.8.08 1.22.08 4.97 0 9-3.185 9-7.11S16.97 3 12 3z" />
          </svg>
          카톡 상담
        </a>

        {/* 전화 상담 (55%) */}
        <a
          href={`tel:${phone}`}
          className="flex items-center justify-center gap-1.5 w-[55%] py-3.5 bg-teal-600 hover:bg-teal-700 active:scale-[0.98] text-white text-[14.5px] font-black rounded-xl transition-all duration-150 cursor-pointer shadow-sm"
          data-cta="phone"
          aria-label="전화 상담"
        >
          <svg className="w-4 h-4 text-white shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          전화 상담
        </a>
      </div>
    </div>
  );
}
