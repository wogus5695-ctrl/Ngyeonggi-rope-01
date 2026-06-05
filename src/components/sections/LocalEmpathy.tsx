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
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#0d948802_1px,transparent_1px),linear-gradient(to_bottom,#0d948802_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Mobile Header (Visible only on mobile/tablet, hidden on desktop) */}
        <div className="block lg:hidden space-y-3 mb-8">
          <div className="text-teal-600 text-[13px] font-black tracking-widest uppercase">
            WHY IT LEAKS AGAIN
          </div>
          <h2 className="text-2.5xl sm:text-[32px] font-black text-slate-900 tracking-tight leading-[1.25]">
            창틀 누수는 보이는 틈만 막아서는 재발할 수 있습니다
          </h2>
          <p className="text-[14.5px] sm:text-[15px] text-slate-500 leading-relaxed">
            물이 보이는 위치와 실제 유입 지점은 다를 수 있습니다. 기존 실리콘 접착 상태, 샷시와 벽체 사이 틈, 외벽 크랙을 함께 확인해야 재누수 가능성을 줄일 수 있습니다.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-center">
          
          {/* Left: Actual Work Image (50%) - Fully responsive, original ratio preserved with no overlays */}
          <div className="w-full lg:w-1/2 rounded-[24px] overflow-hidden shadow-3xs border border-slate-100/80 bg-slate-50 shrink-0">
            <Image
              src="/empathy-work.jpg"
              alt="실제 창틀 상부 코킹 보수 현장"
              width={800}
              height={600}
              className="w-full h-auto object-contain block"
              priority
            />
          </div>

          {/* Right: Content Area (50%) */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center py-1">
            
            {/* Desktop Header (Visible only on desktop, hidden on mobile/tablet) */}
            <div className="hidden lg:block space-y-3 mb-6">
              <div className="text-teal-600 text-[13px] font-black tracking-widest uppercase">
                WHY IT LEAKS AGAIN
              </div>
              <h2 className="text-[36px] xl:text-[38px] font-black text-slate-900 tracking-tight leading-[1.2] mt-2">
                창틀 누수는 보이는 틈만 막아서는 재발할 수 있습니다
              </h2>
              <p className="text-[14.5px] xl:text-[15px] text-slate-500 leading-relaxed max-w-xl mt-3">
                물이 보이는 위치와 실제 유입 지점은 다를 수 있습니다. 기존 실리콘 접착 상태, 샷시와 벽체 사이 틈, 외벽 크랙을 함께 확인해야 재누수 가능성을 줄일 수 있습니다.
              </p>
            </div>

            {/* 3 Cause Cards (Compact List) */}
            <div className="space-y-2.5">
              {/* Card 1 */}
              <div className="flex gap-4 py-4 px-5 bg-slate-50/50 border border-slate-200/40 rounded-2xl hover:bg-slate-50 hover:translate-x-0.5 hover:shadow-3xs transition-all duration-300">
                <div className="w-[40px] h-[40px] bg-teal-50 rounded-lg text-teal-600 shrink-0 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.656 48.656 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3M3 12c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M3 12l-3 3m3-3l3-3" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[16px] font-bold text-slate-800">기존 실리콘 들뜸</h4>
                  <p className="text-[14px] text-slate-500 leading-relaxed mt-0.5">
                    접착력이 떨어진 실리콘 위에 덮으면 시간이 지나며 함께 벌어질 수 있습니다.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex gap-4 py-4 px-5 bg-slate-50/50 border border-slate-200/40 rounded-2xl hover:bg-slate-50 hover:translate-x-0.5 hover:shadow-3xs transition-all duration-300">
                <div className="w-[40px] h-[40px] bg-teal-50 rounded-lg text-teal-600 shrink-0 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[16px] font-bold text-slate-800">샷시·벽체 접합부 틈</h4>
                  <p className="text-[14px] text-slate-500 leading-relaxed mt-0.5">
                    프레임 주변의 작은 틈으로 빗물이 안쪽까지 스며들 수 있습니다.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex gap-4 py-4 px-5 bg-slate-50/50 border border-slate-200/40 rounded-2xl hover:bg-slate-50 hover:translate-x-0.5 hover:shadow-3xs transition-all duration-300">
                <div className="w-[40px] h-[40px] bg-teal-50 rounded-lg text-teal-600 shrink-0 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.013 9l3 3.5 1.987-2.5" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[16px] font-bold text-slate-800">외벽 크랙·상부 균열</h4>
                  <p className="text-[14px] text-slate-500 leading-relaxed mt-0.5">
                    창틀 문제가 아니라 외벽 균열을 타고 물이 들어오는 경우도 있습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Slim Highlight Box */}
            <div className="mt-5 p-[18px] bg-teal-50/40 border border-teal-500/10 rounded-2xl">
              <p className="text-[14.5px] sm:text-[15px] font-bold text-slate-900 leading-[1.45]">
                틈새케어는 ‘어디에 다시 쏠지’보다 <span className="text-teal-600 font-extrabold">‘어디서 물이 들어오는지’</span>를 먼저 확인합니다.
              </p>
            </div>

            {/* Action CTA */}
            <div className="mt-5 flex flex-col items-start gap-2.5 w-full">
              <Link
                href="#contact"
                className="px-8 py-4.5 w-full sm:w-[260px] text-center bg-teal-600 hover:bg-teal-700 text-white text-[15.5px] font-black rounded-2xl shadow-xs hover:shadow-sm transition-all"
              >
                우리 집 누수 원인 상담하기
              </Link>
              <div className="pl-1">
                <p className="text-[13px] text-slate-400 font-medium">
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
