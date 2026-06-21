"use client";

import React from "react";

interface WhyProfessionalProps {
  locationName: string;
  dynamicBanner?: string;
  isWaterproofing?: boolean;
}

export default function WhyProfessional({ locationName, dynamicBanner, isWaterproofing }: WhyProfessionalProps) {
  // Shared data for diagram steps to prevent duplication in DOM
  const diagramSteps = isWaterproofing
    ? [
        {
          step: "01",
          title: "외부 크랙",
          desc: "콘크리트 옹벽 · 옥상 들뜸",
          icon: (
            <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
            </svg>
          )
        },
        {
          step: "02",
          title: "균열 이동",
          desc: "콘크리트 공극 · 조인트 틈",
          icon: (
            <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
            </svg>
          )
        },
        {
          step: "03",
          title: "내부 피해",
          desc: "벽면 젖음 · 곰팡이 유발",
          icon: (
            <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
          )
        }
      ]
    : [
        {
          step: "01",
          title: "외부 유입",
          desc: "외벽 크랙 · 줄눈 틈",
          icon: (
            <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
            </svg>
          )
        },
        {
          step: "02",
          title: "틈새 이동",
          desc: "샷시 접합부 · 창틀 상부",
          icon: (
            <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
            </svg>
          )
        },
        {
          step: "03",
          title: "실내 증상",
          desc: "창틀 하부 · 벽지 젖음",
          icon: (
            <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
          )
        }
      ];

  return (
    <section className="py-12 md:py-20 bg-white relative overflow-hidden">
      {/* Background soft decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Responsive Grid Split Layout (Order control ensures correct mobile reading sequence without DOM duplication) */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Unified Diagram (PC: Left column, Mobile: under text description) */}
          <div className="w-full lg:w-[40%] bg-[#f0fdfa]/30 border border-teal-500/10 rounded-[28px] md:rounded-[32px] p-5 sm:p-8 lg:p-10 shadow-3xs shrink-0 order-2 lg:order-1 max-w-md lg:max-w-none mx-auto lg:mx-0">
            <h3 className="hidden md:block text-[18px] font-extrabold text-slate-900 tracking-tight text-center mb-6">
              {isWaterproofing ? "누수는 균열을 통해 이동합니다" : "누수는 이렇게 이동할 수 있습니다"}
            </h3>

            {/* 3-Step Flow Diagram (Fully unified, no duplicates) */}
            <div className="space-y-1">
              {diagramSteps.map((step, idx) => (
                <React.Fragment key={idx}>
                  {/* Step Card */}
                  <div className="flex gap-4 items-center bg-white p-4 md:p-5 rounded-2xl border border-teal-500/5 shadow-3xs transition-all duration-300 hover:border-teal-500/10">
                    <div className="w-9 h-9 md:w-10 md:h-10 bg-teal-50 rounded-xl text-teal-600 shrink-0 flex items-center justify-center border border-teal-500/10 shadow-3xs p-2">
                      {step.icon}
                    </div>
                    <div className="space-y-0.5 text-left">
                      <h4 className="text-[14.5px] md:text-[15px] font-bold text-slate-800 leading-none md:leading-normal">{step.title}</h4>
                      <p className="text-[12.5px] md:text-[13px] text-slate-500 font-medium">{step.desc}</p>
                    </div>
                  </div>

                  {/* Connector line with Down Arrow */}
                  {idx < 2 && (
                    <div className="flex justify-center py-1.5 md:py-2.5">
                      <div className="h-5 md:h-6 w-[1px] bg-gradient-to-b from-teal-500/30 to-teal-500/60 relative">
                        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2 h-2 border-r border-b border-teal-500/60 rotate-45"></div>
                      </div>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Right Column: Content Area (PC: Right column, Mobile: top of section) */}
          <div className="w-full lg:w-[60%] flex flex-col justify-center space-y-5.5 md:space-y-6 order-1 lg:order-2 max-w-[640px]">
            
            <div className="space-y-3.5 text-center lg:text-left">
              {/* Unified label, no duplicates */}
              <div className="text-teal-600 text-[13px] font-black tracking-widest uppercase">
                WATER PATH DIAGNOSIS
              </div>
              
              {/* Heading */}
              <h2 className="text-[28px] sm:text-[36px] xl:text-[38px] font-black text-[#0f172a] tracking-tight leading-[1.2]">
                {isWaterproofing ? (
                  <>
                    젖은 곳보다
                    <br />
                    물이 스며든 균열을 봅니다
                  </>
                ) : (
                  <>
                    젖은 곳보다
                    <br />
                    물이 들어온 길을 봅니다
                  </>
                )}
              </h2>
              
              {/* Sub-description */}
              <p className="text-[14.5px] sm:text-[15.5px] text-slate-500 leading-relaxed max-w-[500px] mx-auto lg:mx-0">
                {isWaterproofing ? (
                  <>
                    물이 보이는 곳과 스며든 콘크리트 균열은 다를 수 있습니다.
                    <br />
                    외벽·옥상·조인트 균열을 함께 확인합니다.
                  </>
                ) : (
                  <>
                    물이 보이는 곳과 들어온 곳은 다를 수 있습니다.
                    <br />
                    외벽·샷시·창틀 상부를 함께 확인합니다.
                  </>
                )}
              </p>
            </div>

            {/* Highlight Note Box (Slim box, centered on mobile, left-aligned on desktop) */}
            <div className="p-4.5 bg-teal-50/45 border border-teal-500/10 rounded-2xl text-center lg:text-left">
              <p className="text-[14px] sm:text-[14.5px] font-bold text-slate-800 leading-relaxed">
                {isWaterproofing ? (
                  <>
                    표면만 덮지 않고, <span className="text-teal-600 font-extrabold">물이 침투하는 균열 자체</span>를 차단합니다.
                  </>
                ) : (
                  <>
                    젖은 곳만 막지 않고, <span className="text-teal-600 font-extrabold">물이 시작된 지점</span>을 먼저 봅니다.
                  </>
                )}
              </p>
            </div>

            {/* SEO Dynamic Banner Hook (Always present for crawlers, containing no duplicate terms) */}
            <span className="sr-only opacity-0 pointer-events-none absolute w-0 h-0 overflow-hidden">
              {dynamicBanner || `${locationName} 창틀 코킹 및 샷시 틈새 결함 보수. 원인 진단부터 마감 검수까지 정밀 시공합니다.`}
            </span>

          </div>
        </div>
      </div>
    </section>
  );
}
