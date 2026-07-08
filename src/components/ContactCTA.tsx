import React from "react";
import { kakaoChannelUrl } from "@/data/config";

interface ContactCTAProps {
  phone?: string;
  isWaterproofing?: boolean;
}

export default function ContactCTA({ phone = "050-7871-3590", isWaterproofing }: ContactCTAProps) {
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-2xl mx-auto">
        {/* 1순위: 전화 상담하기 */}
        <a
          href={`tel:${phone}`}
          className="flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4.5 bg-teal-600 hover:bg-teal-700 text-white font-extrabold text-[15.5px] rounded-full shadow-md hover:shadow-lg hover:-translate-y-[1px] transition-all cursor-pointer"
          data-cta="phone"
          aria-label="전화 상담"
        >
          <svg
            className="w-4.5 h-4.5 text-white"
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
          전화 상담하기
        </a>

        {/* 2순위: 카톡 사진 상담 */}
        <a
          href={kakaoChannelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4.5 bg-[#FEE500] hover:bg-[#FDD800] text-slate-900 font-extrabold text-[15.5px] rounded-full shadow-sm hover:shadow-md hover:-translate-y-[1px] transition-all cursor-pointer border border-[#EBE300]/30"
          data-cta="kakao"
          aria-label="카카오톡 채널 상담"
        >
          <svg
            className="w-5.5 h-5.5 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M12 3c-4.97 0-9 3.185-9 7.11 0 2.507 1.65 4.718 4.14 5.923l-.84 3.092c-.1.37.13.74.5.74.15 0 .29-.05.4-.15l3.58-2.385c.4.05.8.08 1.22.08 4.97 0 9-3.185 9-7.11S16.97 3 12 3z" />
          </svg>
          카톡 사진 상담
        </a>
      </div>

      {/* 보조 설명 문구 */}
      <div className="text-center mt-2 space-y-1">
        <div className="text-[13.5px] font-extrabold text-teal-600 tracking-tight">사진 상담 가능</div>
        <p className="text-[12.5px] text-slate-500 font-bold leading-normal max-w-sm sm:max-w-md mx-auto">
          {isWaterproofing
            ? "외벽·실리콘·옥상 사진을 보내주시면 기본 상태를 확인해드립니다."
            : "창틀·실리콘·외벽 사진을 보내주시면 기본 상태를 확인해드립니다."}
        </p>
      </div>
    </div>
  );
}
