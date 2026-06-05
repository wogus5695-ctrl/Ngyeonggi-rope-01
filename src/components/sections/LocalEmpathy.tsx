"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LocalEmpathyProps {
  locationName: string;
  dynamicIntro?: string;
}

export default function LocalEmpathy({ locationName, dynamicIntro }: LocalEmpathyProps) {
  return (
    <section className="relative min-h-[680px] lg:min-h-[760px] flex items-center py-12 lg:py-20 overflow-hidden bg-slate-950">
      
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/empathy-work.jpg"
          alt="실제 창틀 상부 코킹 보수 현장"
          fill
          sizes="100vw"
          className="object-cover object-right"
          priority
        />
        {/* Overlay filter completely removed as requested */}
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="flex flex-col lg:flex-row justify-end w-full">
          
          {/* Borderless Content Area (Desktop Right 46%, max-width 540px) */}
          <div className="w-full lg:w-[46%] max-w-[540px] space-y-6 shrink-0 py-4">
            
            {/* Header copy */}
            <div className="space-y-3">
              <div className="text-teal-400 text-[13px] font-black tracking-widest uppercase drop-shadow-sm">
                WHY IT LEAKS AGAIN
              </div>
              <h2 className="text-2xl sm:text-[28px] lg:text-[32px] font-black text-white tracking-tight leading-[1.25] drop-shadow-md">
                창틀 누수는 보이는 틈만 막아서는 재발할 수 있습니다
              </h2>
              <p className="text-[14px] text-slate-100 leading-relaxed font-semibold drop-shadow-sm">
                물이 보이는 위치와 실제 유입 지점은 다를 수 있습니다. 기존 실리콘 접착 상태, 샷시와 벽체 사이 틈, 외벽 크랙을 함께 확인해야 재누수 가능성을 줄일 수 있습니다.
              </p>
            </div>

            {/* 3 Cause Cards (Semi-transparent Dark Glass Cards) */}
            <div className="space-y-2.5">
              {/* Card 1 */}
              <div className="flex gap-3.5 p-4 bg-slate-900/50 backdrop-blur-xs border border-white/10 rounded-2xl hover:bg-slate-900/60 transition-all duration-300">
                <div className="w-[40px] h-[40px] bg-teal-950/60 rounded-lg text-teal-400 shrink-0 flex items-center justify-center border border-teal-500/10">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.656 48.656 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3M3 12c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M3 12l-3 3m3-3l3-3" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-white">기존 실리콘 들뜸</h4>
                  <p className="text-[13px] text-slate-200 leading-relaxed mt-0.5 font-medium">
                    접착력이 떨어진 실리콘 위에 덮으면 시간이 지나며 함께 벌어질 수 있습니다.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex gap-3.5 p-4 bg-slate-900/50 backdrop-blur-xs border border-white/10 rounded-2xl hover:bg-slate-900/60 transition-all duration-300">
                <div className="w-[40px] h-[40px] bg-teal-950/60 rounded-lg text-teal-400 shrink-0 flex items-center justify-center border border-teal-500/10">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-white">샷시·벽체 접합부 틈</h4>
                  <p className="text-[13px] text-slate-200 leading-relaxed mt-0.5 font-medium">
                    프레임 주변의 작은 틈으로 빗물이 안쪽까지 스며들 수 있습니다.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex gap-3.5 p-4 bg-slate-900/50 backdrop-blur-xs border border-white/10 rounded-2xl hover:bg-slate-900/60 transition-all duration-300">
                <div className="w-[40px] h-[40px] bg-teal-500/10 rounded-lg text-teal-400 shrink-0 flex items-center justify-center border border-teal-500/10">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.013 9l3 3.5 1.987-2.5" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-white">외벽 크랙·상부 균열</h4>
                  <p className="text-[13px] text-slate-200 leading-relaxed mt-0.5 font-medium">
                    창틀 문제가 아니라 외벽 균열을 타고 물이 들어오는 경우도 있습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Slim Highlight Box (Semi-transparent Mint Glass) */}
            <div className="p-4.5 bg-teal-950/60 border border-teal-500/20 rounded-2xl backdrop-blur-xs">
              <p className="text-[14px] font-bold text-teal-100 leading-relaxed">
                틈새케어는 ‘어디에 다시 쏠지’보다 <span className="text-teal-400 font-extrabold">‘어디서 물이 들어오는지’</span>를 먼저 확인합니다.
              </p>
            </div>

            {/* Action CTA */}
            <div className="pt-2 flex flex-col items-start gap-3 w-full">
              <Link
                href="#contact"
                className="px-8 py-4.5 w-full sm:w-[260px] text-center bg-teal-600 hover:bg-teal-700 text-white text-[15.5px] font-black rounded-2xl shadow-xs hover:shadow-sm transition-all"
              >
                우리 집 누수 원인 상담하기
              </Link>
              <div className="pl-1 space-y-1">
                <p className="text-[12.5px] text-slate-200 font-medium drop-shadow-xs">
                  창틀, 실리콘, 외벽 사진을 보내주시면 기본 상태를 먼저 확인해드립니다.
                </p>
                {/* SEO Preservation (Hidden visually but available for search engine crawlers) */}
                <span className="sr-only opacity-0 pointer-events-none absolute w-0 h-0 overflow-hidden">
                  {dynamicIntro || `${locationName} 지역의 외부 코킹 보수는 단순한 실리콘 처방보다 정확한 누수 지점 실사가 먼저입니다.`}
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
