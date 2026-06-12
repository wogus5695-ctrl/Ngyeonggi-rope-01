"use client";

import React from "react";

interface ProcessStep {
  title: string;
  description: string;
}

interface LocalProcessProps {
  title: string;
  process: ProcessStep[];
}

export default function LocalProcess({ title, process }: LocalProcessProps) {
  // Hardcoded highly readable steps as requested by the user
  const steps = [
    {
      step: "STEP 01",
      title: "누수 원인 진단",
      description: "창틀 하부, 샷시 틈, 외벽 크랙을 함께 확인해 물이 들어오는 지점을 먼저 파악합니다.",
      point: "유입 지점 확인"
    },
    {
      step: "STEP 02",
      title: "기존 실리콘 정리",
      description: "들뜬 실리콘 and 오염물을 제거해 새 실리콘이 붙을 수 있는 바탕을 만듭니다.",
      point: "노후 실리콘 제거"
    },
    {
      step: "STEP 03",
      title: "접착면 세척·건조",
      description: "먼지, 이물질, 습기를 정리해 접착 불량 and 들뜸 가능성을 줄입니다.",
      point: "바탕면 정리"
    },
    {
      step: "STEP 04",
      title: "상태별 코킹 시공",
      description: "현장 상태에 따라 덧방, 부분 제거, 올제거 방식을 구분해 시공합니다.",
      point: "시공 방식 구분"
    },
    {
      step: "STEP 05",
      title: "마감 검수·안내",
      description: "마감 상태와 취약 부위를 확인하고, 이후 관리 방법을 안내합니다.",
      point: "마감 확인"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-white relative overflow-hidden">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#0d948801_1px,transparent_1px),linear-gradient(to_bottom,#0d948801_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-9 md:mb-14 space-y-3">
          <div className="text-teal-600 text-[13px] font-black tracking-widest uppercase">
            ENGINEERING PROCESS
          </div>
          {/* PC Title */}
          <h2 className="hidden md:block text-3xl sm:text-[38px] font-black text-slate-900 tracking-tight leading-[1.2]">
            재누수를 줄이는 5단계 창틀코킹 프로세스
          </h2>
          {/* MO Title */}
          <h2 className="block md:hidden text-[26px] sm:text-[28px] font-black text-slate-900 tracking-tight leading-[1.2]">
            재누수를 줄이는 5단계 프로세스
          </h2>
          
          {/* PC Sub-desc */}
          <p className="hidden md:block text-[14.5px] sm:text-[15.5px] text-slate-500 max-w-[640px] mx-auto leading-relaxed">
            실리콘을 덮기 전에 원인을 확인하고, 바탕면 정리부터 마감 검수까지 순서대로 진행합니다.
          </p>
          {/* MO Sub-desc */}
          <p className="block md:hidden text-[14.5px] text-slate-500 max-w-[640px] mx-auto leading-relaxed">
            원인 확인부터 마감 검수까지 순서대로 진행합니다.
          </p>
        </div>

        {/* Unified 5-Step Layout (No duplicate map for PC/MO) */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-3.5 md:gap-6 max-w-md md:max-w-none mx-auto">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`bg-white border border-slate-100 rounded-2xl md:rounded-[24px] p-4.5 md:p-7.5 shadow-3xs transition-all duration-300 col-span-1 md:col-span-2 ${
                idx === 3 ? "md:col-start-2" : ""
              } flex flex-row md:flex-col md:justify-between items-center md:items-start justify-between min-h-[72px] md:min-h-0 md:h-auto`}
            >
              {/* Left/Top Area (Step badge & Title/Desc) */}
              <div className="flex flex-row md:flex-col items-center md:items-start gap-3.5 md:gap-4 w-full">
                {/* Step Badge */}
                <div className="w-[34px] h-[34px] md:w-auto md:h-auto bg-teal-50 md:bg-transparent text-teal-600 text-[13.5px] md:text-[11.5px] font-black tracking-wider uppercase rounded-full md:rounded-none flex items-center justify-center shrink-0 border border-teal-500/5 md:border-none">
                  <span className="md:hidden">{step.step.replace("STEP ", "")}</span>
                  <span className="hidden md:inline">{step.step}</span>
                </div>
                
                {/* Title & Desc/Point container */}
                <div className="flex flex-col md:space-y-2.5 text-left">
                  <h3 className="text-[15px] md:text-[17px] sm:text-[18px] lg:text-[19px] font-bold text-slate-800 tracking-tight leading-tight">
                    {step.title}
                  </h3>
                  {/* PC Description (Hidden on mobile) */}
                  <p className="hidden md:block text-[13.5px] sm:text-[14px] lg:text-[14.5px] text-slate-500 leading-relaxed md:leading-[1.65]">
                    {step.description}
                  </p>
                  {/* Mobile Point */}
                  <span className="block md:hidden text-[12px] text-teal-600 font-extrabold mt-1">
                    {step.point}
                  </span>
                </div>
              </div>

              {/* Right/Bottom Area (Icon on mobile, Point tag on PC) */}
              <div className="mt-0 md:mt-5 flex items-center justify-end md:justify-between w-auto md:w-full shrink-0">
                {/* PC Point Tag (Hidden on mobile) */}
                <span className="hidden md:inline-block py-1 px-3 bg-teal-50 text-teal-700 text-[11.5px] sm:text-[12px] font-bold rounded-full">
                  {step.point}
                </span>
                {/* Mobile Check Icon (Hidden on PC) */}
                <div className="block md:hidden text-teal-500/80 pr-1 shrink-0">
                  <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Slim Conclusion Note */}
        <div className="block md:hidden mt-5 py-3 px-4 bg-teal-50/45 border border-teal-500/10 rounded-xl text-center max-w-md mx-auto">
          <p className="text-[13px] font-bold text-slate-700 leading-normal">
            현장 상태에 따라 덧방, 부분 제거, 올제거 방식을 구분해 안내합니다.
          </p>
        </div>

        {/* PC Section Bottom Conclusion Note Box */}
        <div className="hidden md:block mt-12 p-5 bg-teal-50/40 border border-teal-500/10 rounded-2xl max-w-3xl mx-auto text-center">
          <p className="text-[14px] sm:text-[14.5px] font-bold text-slate-800 leading-relaxed">
            틈새케어는 현장 상태에 따라 필요한 시공 방식을 구분해 재누수 가능성을 줄이는 방향으로 작업합니다.
          </p>
        </div>

      </div>
    </section>
  );
}
