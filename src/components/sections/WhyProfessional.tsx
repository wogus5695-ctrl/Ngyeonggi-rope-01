"use client";

import React from "react";
import Link from "next/link";

interface WhyProfessionalProps {
  locationName: string;
  dynamicBanner?: string;
}

export default function WhyProfessional({ locationName, dynamicBanner }: WhyProfessionalProps) {
  return (
    <section className="py-12 md:py-20 bg-white relative overflow-hidden">
      {/* Background soft decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 2-Column Split: 40% Diagram / 60% Copy */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          
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
                  <p className="text-[13px] text-slate-500 font-medium">창틀 하부 · 벽지 젖음</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Content Area (60% on PC, Full on Mobile) */}
          <div className="w-full lg:w-[60%] flex flex-col justify-center space-y-5.5 md:space-y-6 order-1 lg:order-2 max-w-[640px]">
            
            <div className="space-y-3.5 text-center lg:text-left">
              <div className="text-teal-600 text-[13px] font-black tracking-widest uppercase">
                <span className="hidden md:inline">WATER PATH DIAGNOSIS</span>
                <span className="inline md:hidden">WATER PATH</span>
              </div>
              
              {/* Heading */}
              <h2 className="text-[28px] sm:text-[36px] xl:text-[38px] font-black text-[#0f172a] tracking-tight leading-[1.2]">
                젖은 곳보다
                <br />
                물이 들어온 길을 봅니다
              </h2>
              
              {/* Sub-description */}
              <p className="text-[14.5px] sm:text-[15.5px] text-slate-500 leading-relaxed max-w-[500px] mx-auto lg:mx-0">
                물이 보이는 곳과 들어온 곳은 다를 수 있습니다.
                <br />
                외벽·샷시·창틀 상부를 함께 확인합니다.
              </p>
            </div>

            {/* 3. Mobile Compact Vertical Flow (Visible only on Mobile) */}
            <div className="block md:hidden space-y-2 max-w-sm mx-auto w-full">
              
              {/* Step 1 */}
              <div className="flex gap-4 p-4 bg-white border border-teal-500/5 shadow-3xs rounded-2xl items-center" style={{ minHeight: "68px" }}>
                <div className="w-9 h-9 bg-teal-50 rounded-xl text-teal-600 shrink-0 flex items-center justify-center border border-teal-500/5 shadow-3xs">
                  <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
                  </svg>
                </div>
                <div className="text-left">
                  <h4 className="text-[15px] font-bold text-slate-850 leading-none">외부 유입</h4>
                  <p className="text-[13px] text-slate-500 font-medium mt-1.5">외벽 크랙 · 줄눈 틈</p>
                </div>
              </div>

              {/* Down Arrow Connector */}
              <div className="flex justify-center py-0.5">
                <svg className="w-4.5 h-4.5 text-teal-500/40" fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                </svg>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4 p-4 bg-white border border-teal-500/5 shadow-3xs rounded-2xl items-center" style={{ minHeight: "68px" }}>
                <div className="w-9 h-9 bg-teal-50 rounded-xl text-teal-600 shrink-0 flex items-center justify-center border border-teal-500/5 shadow-3xs">
                  <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                  </svg>
                </div>
                <div className="text-left">
                  <h4 className="text-[15px] font-bold text-slate-850 leading-none">틈새 이동</h4>
                  <p className="text-[13px] text-slate-500 font-medium mt-1.5">샷시 접합부 · 창틀 상부</p>
                </div>
              </div>

              {/* Down Arrow Connector */}
              <div className="flex justify-center py-0.5">
                <svg className="w-4.5 h-4.5 text-teal-500/40" fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                </svg>
              </div>

              {/* Step 3 */}
              <div className="flex gap-4 p-4 bg-white border border-teal-500/5 shadow-3xs rounded-2xl items-center" style={{ minHeight: "68px" }}>
                <div className="w-9 h-9 bg-teal-50 rounded-xl text-teal-600 shrink-0 flex items-center justify-center border border-teal-500/5 shadow-3xs">
                  <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                </div>
                <div className="text-left">
                  <h4 className="text-[15px] font-bold text-slate-850 leading-none">실내 증상</h4>
                  <p className="text-[13px] text-slate-500 font-medium mt-1.5">창틀 하부 · 벽지 젖음</p>
                </div>
              </div>

            </div>

            {/* Highlight Note Box (Slim box) */}
            <div className="p-4.5 bg-teal-50/45 border border-teal-500/10 rounded-2xl text-center lg:text-left">
              <p className="text-[14px] sm:text-[14.5px] font-bold text-slate-805 leading-relaxed">
                젖은 곳만 막지 않고, <span className="text-teal-600 font-extrabold">물이 시작된 지점</span>을 먼저 봅니다.
              </p>
            </div>

            {/* SEO Dynamic Banner Hook (Always present for crawlers) */}
            <span className="sr-only opacity-0 pointer-events-none absolute w-0 h-0 overflow-hidden">
              {dynamicBanner || `${locationName} 주변 창틀 균열 상담이 필요하시다면, 틈새케어의 외벽 크랙 및 샷시 전수 점검을 먼저 권해드립니다.`}
            </span>

          </div>
        </div>
      </div>
    </section>
  );
}
