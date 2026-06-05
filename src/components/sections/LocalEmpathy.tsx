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
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#0d948802_1px,transparent_1px),linear-gradient(to_bottom,#0d948802_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-stretch">
          
          {/* Left: Actual Work Image (48%) */}
          <div className="w-full lg:w-[48%] relative min-h-[420px] sm:min-h-[500px] lg:min-h-[620px] rounded-[32px] overflow-hidden shadow-lg group shrink-0">
            {/* Image */}
            <Image
              src="/empathy-work.jpg"
              alt="실제 창틀 상부 코킹 보수 현장"
              fill
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover transition-transform duration-700 group-hover:scale-102"
              priority
            />

            {/* Dark Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent z-10"></div>

            {/* 3 Pin Labels - Hidden on Mobile */}
            <div className="absolute inset-0 z-20 hidden md:block">
              {/* Pin 1: 기존 실리콘 들뜸 */}
              <div className="absolute top-[48%] left-[22%] flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                </span>
                <span className="bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-black px-2.5 py-1 rounded-full shadow-xs border border-white/10">
                  기존 실리콘 들뜸
                </span>
              </div>

              {/* Pin 2: 샷시 상부 틈 */}
              <div className="absolute top-[32%] left-[62%] flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                </span>
                <span className="bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-black px-2.5 py-1 rounded-full shadow-xs border border-white/10">
                  샷시 상부 틈
                </span>
              </div>

              {/* Pin 3: 외벽·상부면 접합부 */}
              <div className="absolute top-[62%] left-[45%] flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                </span>
                <span className="bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-black px-2.5 py-1 rounded-full shadow-xs border border-white/10">
                  외벽·상부면 접합부
                </span>
              </div>
            </div>

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white space-y-1">
              <h3 className="text-lg font-black text-white tracking-tight drop-shadow-md">
                실제 창틀 상부 코킹 보수 현장
              </h3>
              <p className="text-[13px] text-slate-200 leading-relaxed font-medium drop-shadow-xs">
                창틀 상부, 샷시 접합부, 외벽 면 상태를 함께 확인합니다.
              </p>
            </div>
          </div>

          {/* Right: Content Area (52%) */}
          <div className="w-full lg:w-[52%] flex flex-col justify-between py-2 space-y-6">
            
            {/* Header info */}
            <div className="space-y-4">
              <div className="text-teal-600 text-[13px] font-black tracking-widest uppercase">
                WHY IT LEAKS AGAIN
              </div>
              <h2 className="text-2.5xl sm:text-[38px] lg:text-[42px] font-black text-slate-900 tracking-tight leading-[1.2]">
                창틀 누수는 보이는 틈만 막아서는 재발할 수 있습니다
              </h2>
              <p className="text-[14.5px] sm:text-[15.5px] text-slate-500 leading-relaxed max-w-xl">
                물이 보이는 위치와 실제 유입 지점은 다를 수 있습니다. 기존 실리콘 접착 상태, 샷시와 벽체 사이 틈, 외벽 크랙을 함께 확인해야 재누수 가능성을 줄일 수 있습니다.
              </p>
            </div>

            {/* 3 Cause Cards (Compact List) */}
            <div className="space-y-3">
              {/* Card 1 */}
              <div className="flex gap-4 p-4.5 bg-slate-50/50 border border-slate-200/40 rounded-2xl hover:bg-slate-50 hover:translate-x-0.5 hover:shadow-2xs transition-all duration-300">
                <div className="p-2.5 bg-teal-50 rounded-xl text-teal-600 shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.656 48.656 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3M3 12c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M3 12l-3 3m3-3l3-3" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-slate-800">기존 실리콘 들뜸</h4>
                  <p className="text-[13px] text-slate-500 leading-relaxed mt-0.5">
                    접착력이 떨어진 실리콘 위에 덮으면 시간이 지나며 함께 벌어질 수 있습니다.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex gap-4 p-4.5 bg-slate-50/50 border border-slate-200/40 rounded-2xl hover:bg-slate-50 hover:translate-x-0.5 hover:shadow-2xs transition-all duration-300">
                <div className="p-2.5 bg-teal-50 rounded-xl text-teal-600 shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-slate-800">샷시·벽체 접합부 틈</h4>
                  <p className="text-[13px] text-slate-500 leading-relaxed mt-0.5">
                    프레임 주변의 작은 틈으로 빗물이 안쪽까지 스며들 수 있습니다.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex gap-4 p-4.5 bg-slate-50/50 border border-slate-200/40 rounded-2xl hover:bg-slate-50 hover:translate-x-0.5 hover:shadow-2xs transition-all duration-300">
                <div className="p-2.5 bg-teal-50 rounded-xl text-teal-600 shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.013 9l3 3.5 1.987-2.5" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-slate-800">외벽 크랙·상부 균열</h4>
                  <p className="text-[13px] text-slate-500 leading-relaxed mt-0.5">
                    창틀 문제가 아니라 외벽 균열을 타고 물이 들어오는 경우도 있습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Slim Highlight Box (with Dynamic SEO Keyword Preservation) */}
            <div className="p-5 bg-teal-50/40 border border-teal-500/10 rounded-2xl space-y-2">
              <p className="text-[14.5px] sm:text-[15.5px] font-bold text-slate-900 leading-relaxed">
                틈새케어는 ‘어디에 다시 쏠지’보다 <span className="text-teal-600 font-extrabold">‘어디서 물이 들어오는지’</span>를 먼저 확인합니다.
              </p>
              
              {/* Dynamic keyword SEO structure */}
              <p className="text-[12.5px] text-teal-800/80 font-semibold mt-2 pt-2 border-t border-teal-500/10 leading-relaxed">
                {dynamicIntro || `${locationName} 지역의 외부 코킹 보수는 단순한 실리콘 처방보다 정확한 누수 지점 실사가 먼저입니다.`}
              </p>
            </div>

            {/* Action CTA */}
            <div className="flex flex-col items-start gap-3">
              <Link
                href="#contact"
                className="px-8 py-5 w-full sm:w-auto text-center bg-teal-600 hover:bg-teal-700 text-white text-[16px] font-black rounded-2xl shadow-md hover:shadow-lg transition-all"
              >
                우리 집 누수 원인 상담하기
              </Link>
              <p className="text-[13px] text-slate-400 font-medium pl-1">
                창틀, 실리콘, 외벽 사진을 보내주시면 기본 상태를 먼저 확인해드립니다.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
