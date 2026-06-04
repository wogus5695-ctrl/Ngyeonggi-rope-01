import React from "react";

export default function ContactCTA() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
      {/* 전화 바로 연결 */}
      <a
        href="tel:010-1234-5678"
        className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4.5 bg-white text-teal-700 font-extrabold text-[15px] rounded-full hover:bg-teal-50 shadow-md hover:shadow-lg transition-all"
      >
        <svg
          className="w-5 h-5 text-teal-600 animate-bounce"
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
        010-1234-5678 전화 직통
      </a>

      {/* 카카오톡 상담 바로가기 */}
      <a
        href="https://pf.kakao.com/_xxxxxx" // 가상의 카카오채널 링크
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4.5 bg-[#FEE500] text-[#191919] font-extrabold text-[15px] rounded-full hover:bg-[#F3DC00] shadow-md hover:shadow-lg transition-all"
      >
        <svg
          className="w-5 h-5 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M12 3c-4.97 0-9 3.185-9 7.11 0 2.507 1.65 4.718 4.14 5.923l-.84 3.092c-.1.37.13.74.5.74.15 0 .29-.05.4-.15l3.58-2.385c.4.05.8.08 1.22.08 4.97 0 9-3.185 9-7.11S16.97 3 12 3z" />
        </svg>
        카카오톡 실시간 상담
      </a>
    </div>
  );
}
