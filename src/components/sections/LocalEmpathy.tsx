"use client";

import React from "react";
import Link from "next/link";

interface LocalEmpathyProps {
  locationName: string;
  dynamicIntro?: string;
}

export default function LocalEmpathy({ locationName, dynamicIntro }: LocalEmpathyProps) {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#0d948803_1px,transparent_1px),linear-gradient(to_bottom,#0d948803_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 max-w-3xl mx-auto">
          <div className="text-teal-600 text-[13px] font-black tracking-widest uppercase">
            WHY IT LEAKS AGAIN
          </div>
          <h2 className="text-3xl sm:text-4.5xl font-black text-slate-900 tracking-tight leading-tight">
            창틀 누수는 겉면 실리콘만 덮어서 끝나는 문제가 아닙니다
          </h2>
          <p className="text-[14.5px] sm:text-[15.5px] text-slate-500 leading-relaxed">
            기존 실리콘이 이미 들떠 있거나, 샷시와 벽체 사이 틈, 외벽 크랙이 함께 있다면 표면 보수만으로는 같은 부위에서 다시 샐 수 있습니다.
          </p>
        </div>

        {/* 3 Cause Cards (Desktop 3-column, Mobile 1-column) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1 */}
          <div className="bg-white border border-slate-200/60 rounded-3xl p-6.5 shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="p-3 bg-rose-50 rounded-2xl w-fit text-rose-500">
                {/* Silicon Peeling SVG */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.656 48.656 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3M3 12c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M3 12l-3 3m3-3l3-3" />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-[16px] font-black text-slate-800 tracking-tight">오래된 실리콘 위 덧방</h3>
                <p className="text-[13px] sm:text-[13.5px] text-slate-500 leading-relaxed">
                  접착력이 떨어진 실리콘 위에 새로 덮으면 시간이 지나며 함께 들뜰 수 있습니다.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-slate-200/60 rounded-3xl p-6.5 shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="p-3 bg-rose-50 rounded-2xl w-fit text-rose-500">
                {/* Gap SVG */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-[16px] font-black text-slate-800 tracking-tight">샷시와 벽체 사이 미세 틈</h3>
                <p className="text-[13px] sm:text-[13.5px] text-slate-500 leading-relaxed">
                  창틀 프레임 주변의 작은 틈으로 빗물이 안쪽까지 스며들 수 있습니다.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-slate-200/60 rounded-3xl p-6.5 shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="p-3 bg-rose-50 rounded-2xl w-fit text-rose-500">
                {/* Crack SVG */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.013 9l3 3.5 1.987-2.5" />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-[16px] font-black text-slate-800 tracking-tight">외벽 크랙과 줄눈 균열</h3>
                <p className="text-[13px] sm:text-[13.5px] text-slate-500 leading-relaxed">
                  창틀 문제가 아니라 외벽 균열을 타고 물이 들어오는 경우도 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Box (Mistake vs Diagnosis) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 max-w-4xl mx-auto">
          {/* Left: Mistake */}
          <div className="p-6.5 bg-rose-50/35 border border-rose-500/10 rounded-2xl flex items-start gap-4">
            <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 font-bold shrink-0 mt-0.5 text-xs">
              ✕
            </div>
            <div className="space-y-1">
              <div className="text-[13.5px] font-extrabold text-rose-700">많이 하는 실수</div>
              <p className="text-[14px] text-slate-600 font-bold">
                “비가 새는 부분 위에만 실리콘을 덧방한다”
              </p>
            </div>
          </div>

          {/* Right: Needed Diagnosis */}
          <div className="p-6.5 bg-teal-50/25 border border-teal-500/10 rounded-2xl flex items-start gap-4">
            <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 font-bold shrink-0 mt-0.5 text-xs">
              ✓
            </div>
            <div className="space-y-1">
              <div className="text-[13.5px] font-extrabold text-teal-700">필요한 진단</div>
              <p className="text-[14px] text-slate-800 font-extrabold">
                “기존 실리콘 접착 상태, 샷시 틈, 외벽 크랙을 함께 확인한다”
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Highlight Notice Box with Dynamic SEO Keyword Preservation */}
        <div className="py-[26px] px-[32px] bg-teal-50/40 border border-teal-500/20 rounded-3xl text-center space-y-4 max-w-4xl mx-auto shadow-3xs">
          <p className="text-[16px] sm:text-[18px] font-black text-slate-900 leading-relaxed">
            그래서 틈새케어는 ‘어디에 실리콘을 쏠지’보다 <span className="text-teal-600">‘어디서 물이 들어오는지’</span>를 먼저 확인합니다.
          </p>
          
          {/* Dynamic keyword fallback container preserving SEO structure */}
          <div className="pt-1.5 border-t border-teal-500/10 w-full max-w-2xl mx-auto">
            <p className="text-[13.5px] text-teal-800 font-bold bg-teal-600/5 py-2.5 px-5 rounded-2xl inline-block leading-relaxed">
              {dynamicIntro || `${locationName} 지역의 외부 코킹 보수는 단순한 실리콘 처방보다 정확한 누수 지점 실사가 먼저입니다.`}
            </p>
          </div>
        </div>

        {/* Section Action CTA (Centered) */}
        <div className="text-center pt-10 border-t border-slate-200/50 mt-16 flex flex-col items-center space-y-4">
          <Link
            href="#contact"
            className="px-10 py-5 w-full sm:w-auto text-center bg-teal-600 hover:bg-teal-700 text-white text-[16px] font-black rounded-2xl shadow-md hover:shadow-lg transition-all"
          >
            우리 집 누수 원인 상담하기
          </Link>
          <p className="text-[13.5px] text-slate-400 font-medium">
            창틀, 실리콘, 외벽 사진을 보내주시면 기본 상태를 먼저 확인해드립니다.
          </p>
        </div>
      </div>
    </section>
  );
}
