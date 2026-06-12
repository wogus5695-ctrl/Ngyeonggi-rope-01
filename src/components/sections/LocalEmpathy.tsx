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
      
      {/* Background Image Container with responsive overlay and gradient */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/empathy-work.jpg"
          alt="실제 창틀 상부 코킹 보수 현장"
          fill
          sizes="100vw"
          className="object-cover object-right"
          priority
        />
        {/* Mobile: 40% dark overlay. PC: 10% dark overlay */}
        <div className="absolute inset-0 bg-black/40 md:bg-black/10 z-10 pointer-events-none"></div>
        {/* Mobile: bottom-to-top dark gradient. PC: right-to-left dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/10 md:bg-gradient-to-l md:from-slate-950/90 md:via-slate-950/50 md:to-transparent z-10 pointer-events-none"></div>
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="flex flex-col lg:flex-row justify-end w-full">
          
          {/* Content Area */}
          <div className="w-full lg:w-[46%] max-w-[540px] space-y-5 md:space-y-6 shrink-0 py-4">
            
            {/* Header copy */}
            <div className="space-y-3.5">
              <div
                className="text-teal-400 text-[13px] font-black tracking-widest uppercase"
                style={{ textShadow: "1px 1px 2.5px rgba(0, 0, 0, 0.85)" }}
              >
                WHY IT LEAKS AGAIN
              </div>
              <h2
                className="text-[26px] sm:text-[30px] lg:text-[32px] font-black text-white tracking-tight leading-[1.2]"
                style={{ textShadow: "2px 2px 3px rgba(0, 0, 0, 0.9)" }}
              >
                누수는 보이는 곳보다
                <br />
                들어오는 길을 봐야 합니다
              </h2>
              
              {/* PC Description (md 이상 노출) */}
              <p
                className="hidden md:block text-[14px] lg:text-[14.5px] text-slate-100 leading-relaxed font-semibold"
                style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.9)" }}
              >
                물이 보이는 위치와 실제 유입 지점은 다를 수 있습니다. 외벽 크랙, 샷시 접합부, 기존 실리콘 상태를 함께 확인해야 합니다.
              </p>
              
              {/* MO Description (md 미만 노출) */}
              <p
                className="block md:hidden text-[14.5px] text-slate-200 leading-relaxed font-medium"
                style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.9)" }}
              >
                물이 보이는 곳과 들어오는 곳은 다를 수 있습니다. 외벽 크랙과 샷시 틈까지 함께 확인합니다.
              </p>
            </div>

            {/* 3 Cause Cards (Opaque dark cards with 1-line descriptions) */}
            <div className="space-y-3">
              {/* Card 1 */}
              <div className="flex gap-3.5 p-4 bg-slate-950/85 backdrop-blur-md border border-white/10 rounded-2xl hover:bg-slate-900/80 transition-all duration-300">
                <div className="w-[40px] h-[40px] bg-teal-950/60 rounded-lg text-teal-400 shrink-0 flex items-center justify-center border border-teal-500/10">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.656 48.656 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3M3 12c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7.017-.22.032-.441.046-.662M3 12l-3 3m3-3l3-3" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[15.5px] md:text-[16px] font-extrabold text-white leading-none">기존 실리콘 들뜸</h4>
                  <p className="text-[13px] md:text-[13.5px] text-slate-300 leading-normal mt-1.5 font-medium">
                    덮어도 함께 벌어질 수 있음
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex gap-3.5 p-4 bg-slate-950/85 backdrop-blur-md border border-white/10 rounded-2xl hover:bg-slate-900/80 transition-all duration-300">
                <div className="w-[40px] h-[40px] bg-teal-950/60 rounded-lg text-teal-400 shrink-0 flex items-center justify-center border border-teal-500/10">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[15.5px] md:text-[16px] font-extrabold text-white leading-none">샷시·벽체 접합부 틈</h4>
                  <p className="text-[13px] md:text-[13.5px] text-slate-300 leading-normal mt-1.5 font-medium">
                    빗물이 안쪽으로 스며드는 통로
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex gap-3.5 p-4 bg-slate-950/85 backdrop-blur-md border border-white/10 rounded-2xl hover:bg-slate-900/80 transition-all duration-300">
                <div className="w-[40px] h-[40px] bg-teal-500/10 rounded-lg text-teal-400 shrink-0 flex items-center justify-center border border-teal-500/10">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.013 9l3 3.5 1.987-2.5" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[15.5px] md:text-[16px] font-extrabold text-white leading-none">외벽 크랙·상부 균열</h4>
                  <p className="text-[13px] md:text-[13.5px] text-slate-300 leading-normal mt-1.5 font-medium">
                    창틀 밖에서 시작되는 유입 경로
                  </p>
                </div>
              </div>
            </div>

            {/* PC Highlight Box (md 이상 노출) */}
            <div className="hidden md:block p-4.5 bg-teal-950/70 border border-teal-500/20 rounded-2xl backdrop-blur-xs">
              <p className="text-[14px] font-bold text-teal-100 leading-relaxed">
                틈새케어는 ‘어디에 다시 쏠지’보다 <span className="text-teal-400 font-extrabold">‘어디서 물이 들어오는지’</span>를 먼저 확인합니다.
              </p>
            </div>

            {/* MO Highlight Slim Box (md 미만 노출) */}
            <div className="block md:hidden py-2.5 px-4 bg-teal-950/70 border border-teal-500/20 rounded-xl">
              <p className="text-[13.5px] font-bold text-teal-300 text-center">
                “물이 시작된 지점부터 확인합니다.”
              </p>
            </div>

            {/* PC CTA Buttons (md 이상 노출, md 미만 완전히 숨김) */}
            <div className="hidden md:flex pt-2 flex-col items-start gap-3 w-full">
              <Link
                href="#contact"
                className="px-8 py-4.5 w-full sm:w-[260px] text-center bg-teal-600 hover:bg-teal-700 text-white text-[15px] font-black rounded-2xl shadow-sm hover:shadow-md transition-all"
              >
                누수 원인 상담하기
              </Link>
              <div className="pl-1">
                <p className="text-[11.5px] text-slate-400 font-medium">
                  창틀, 실리콘, 외벽 사진을 보내주시면 기본 상태를 먼저 확인해드립니다.
                </p>
              </div>
            </div>

            {/* SEO Preservation (Hidden but crawlable) */}
            <span className="sr-only opacity-0 pointer-events-none absolute w-0 h-0 overflow-hidden">
              {dynamicIntro || `${locationName} 지역의 외부 코킹 보수는 단순한 실리콘 처방보다 정확한 누수 지점 실사가 먼저입니다.`}
            </span>

          </div>
        </div>
      </div>
    </section>
  );
}
