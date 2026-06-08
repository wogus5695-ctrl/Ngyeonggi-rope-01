"use client";

import React from "react";
import Link from "next/link";

interface WhyProfessionalProps {
  locationName: string;
  dynamicBanner?: string;
}

export default function WhyProfessional({ locationName, dynamicBanner }: WhyProfessionalProps) {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background soft decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 2-Column Split: 40% Diagram / 60% Copy */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          {/* Left: Diagram Card (40% - Hidden on mobile) */}
          <div className="hidden md:block w-full lg:w-[40%] bg-[#f0fdfa]/30 border border-teal-500/10 rounded-[32px] p-8 sm:p-10 shadow-sm shrink-0 space-y-6 order-2 lg:order-1">
            <h3 className="text-[18px] font-extrabold text-slate-900 tracking-tight text-center">
              누수는 이렇게 이동할 수 있습니다
            </h3>

            {/* 3-Step Flow Diagram */}
            <div className="space-y-1">
              
              {/* Step 1 */}
              <div className="flex gap-4 items-center bg-white p-5 rounded-2xl border border-teal-500/5 shadow-3xs transition-all duration-300 hover:border-teal-500/10">
                <div className="w-10 h-10 bg-teal-50 rounded-xl text-teal-600 shrink-0 flex items-center justify-center border border-teal-500/10 shadow-3xs">
                  {/* 외부 유입 아이콘: 구름과 비 */}
                  <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
                  </svg>
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-[15px] font-bold text-slate-800">외부 유입</h4>
                  <p className="text-[13px] text-slate-500 font-medium">외벽 크랙 · 줄눈 틈</p>
                </div>
              </div>

              {/* Connector line with Down Arrow */}
              <div className="flex justify-center py-2.5">
                <div className="h-6 w-[1px] bg-gradient-to-b from-teal-500/30 to-teal-500/60 relative">
                  <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2 h-2 border-r border-b border-teal-500/60 rotate-45"></div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4 items-center bg-white p-5 rounded-2xl border border-teal-500/5 shadow-3xs transition-all duration-300 hover:border-teal-500/10">
                <div className="w-10 h-10 bg-teal-50 rounded-xl text-teal-600 shrink-0 flex items-center justify-center border border-teal-500/10 shadow-3xs">
                  {/* 틈새 이동 아이콘: 물방울 보조 아이콘 */}
                  <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                  </svg>
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-[15px] font-bold text-slate-800">틈새 이동</h4>
                  <p className="text-[13px] text-slate-500 font-medium">샷시 접합부 · 창틀 상부</p>
                </div>
              </div>

              {/* Connector line with Down Arrow */}
              <div className="flex justify-center py-2.5">
                <div className="h-6 w-[1px] bg-gradient-to-b from-teal-500/30 to-teal-500/60 relative">
                  <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2 h-2 border-r border-b border-teal-500/60 rotate-45"></div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-4 items-center bg-white p-5 rounded-2xl border border-teal-500/5 shadow-3xs transition-all duration-300 hover:border-teal-500/10">
                <div className="w-10 h-10 bg-teal-50 rounded-xl text-teal-600 shrink-0 flex items-center justify-center border border-teal-500/10 shadow-3xs">
                  {/* 실내 증상 아이콘: 집 모양 */}
                  <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-[15px] font-bold text-slate-800">실내 증상</h4>
                  <p className="text-[13px] text-slate-500 font-medium">창틀 하부 · 몰딩 · 벽지 젖음</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Content Area (60%) */}
          <div className="w-full lg:w-[60%] flex flex-col justify-center space-y-6 order-1 lg:order-2 max-w-[640px]">
            
            <div className="space-y-3">
              <div className="text-teal-600 text-[13px] font-black tracking-widest uppercase">
                WATER PATH DIAGNOSIS
              </div>
              <h2 className="text-3xl sm:text-[36px] xl:text-[40px] font-black text-[#0f172a] tracking-tight leading-[1.25] mt-1">
                창틀 누수는 젖은 위치보다<br className="hidden sm:inline" /> 물의 유입 경로를 먼저 봐야 합니다
              </h2>
              <p className="hidden md:block text-[15px] sm:text-[16px] text-slate-500 leading-[1.7] pt-1">
                실내에서 물이 보이는 곳과 실제 빗물이 들어오는 위치는 다를 수 있습니다. 외벽 크랙, 샷시 접합부, 창틀 상부 틈을 함께 확인해야 재누수 가능성을 줄일 수 있습니다.
              </p>
            </div>

            {/* Highlight Note Box (Hidden on mobile) */}
            <div className="hidden md:block p-6 bg-teal-50/40 border border-teal-500/10 rounded-2xl">
              <p className="text-[14.5px] sm:text-[15.5px] font-bold text-slate-800 leading-relaxed">
                젖은 곳만 막으면 원인은 남습니다. 틈새케어는 <span className="text-teal-600 font-extrabold">물이 시작된 지점</span>부터 확인합니다.
              </p>
            </div>

            {/* Bottom Copy description (Hidden on mobile) */}
            <p className="hidden md:block text-[13.5px] sm:text-[14px] text-slate-600 leading-relaxed">
              빗물은 외벽 균열이나 샷시 주변 틈을 타고 이동한 뒤, 창틀 하부나 몰딩 뒤쪽에서 뒤늦게 나타나는 경우가 많습니다. 그래서 단순 덧방보다 유입 경로 확인이 먼저입니다.
            </p>

            {/* Mobile Compressed Water Path Info (Visible only on mobile) */}
            <div className="block md:hidden space-y-5">
              {/* 3 Steps compressed list */}
              <div className="space-y-3 bg-[#f0fdfa]/40 border border-teal-500/10 rounded-2xl p-5 shadow-3xs">
                {[
                  { label: "외부 유입", value: "외벽 크랙 · 줄눈 틈" },
                  { label: "틈새 이동", value: "샷시 접합부 · 창틀 상부" },
                  { label: "실내 증상", value: "창틀 하부 · 몰딩 · 벽지 젖음" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="w-20 text-[13px] font-black text-teal-700 bg-teal-50 px-2 py-1 rounded-md shrink-0 text-center border border-teal-500/10">
                      {item.label}
                    </span>
                    <span className="text-[13.5px] text-slate-600 font-bold">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom text */}
              <p className="text-[13.5px] text-slate-500 font-bold leading-relaxed pl-1">
                젖은 위치만 막으면 원인은 남을 수 있습니다. 사진 상담으로 유입 경로를 먼저 확인해보세요.
              </p>

              {/* CTA Button */}
              <Link
                href="#contact"
                className="block w-full text-center py-4 bg-teal-600 hover:bg-teal-700 text-white text-[15px] font-black rounded-2xl shadow-xs transition-all"
              >
                누수 경로 사진 상담하기
              </Link>
            </div>

            {/* SEO Dynamic Banner Hook (Hidden visually for crawlers) */}
            <span className="sr-only opacity-0 pointer-events-none absolute w-0 h-0 overflow-hidden">
              {dynamicBanner || `${locationName} 주변 창틀 균열 상담이 필요하시다면, 틈새케어의 외벽 크랙 및 샷시 전수 점검을 먼저 권해드립니다.`}
            </span>

          </div>
        </div>
      </div>
    </section>
  );
}
