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
      description: "들뜬 실리콘과 오염물을 제거해 새 실리콘이 붙을 수 있는 바탕을 만듭니다.",
      point: "노후 실리콘 제거"
    },
    {
      step: "STEP 03",
      title: "접착면 세척·건조",
      description: "먼지, 이물질, 습기를 정리해 접착 불량과 들뜸 가능성을 줄입니다.",
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
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#0d948801_1px,transparent_1px),linear-gradient(to_bottom,#0d948801_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 space-y-3.5">
          <div className="text-teal-600 text-[13px] font-black tracking-widest uppercase">
            ENGINEERING PROCESS
          </div>
          <h2 className="text-3xl sm:text-[38px] font-black text-slate-900 tracking-tight leading-[1.2]">
            재누수를 줄이는 5단계 창틀코킹 프로세스
          </h2>
          <p className="text-[14.5px] sm:text-[15.5px] text-slate-500 max-w-[640px] mx-auto leading-relaxed">
            실리콘을 덮기 전에 원인을 확인하고, 바탕면 정리부터 마감 검수까지 순서대로 진행합니다.
          </p>
        </div>

        {/* Desktop 3+2 Grid Layout */}
        <div className="hidden md:flex flex-col gap-6">
          {/* Row 1: Steps 1, 2, 3 */}
          <div className="grid grid-cols-3 gap-6">
            {steps.slice(0, 3).map((step, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-100/90 rounded-[24px] p-7.5 shadow-3xs hover:-translate-y-1 hover:shadow-2xs transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="text-teal-600 text-[11.5px] font-black tracking-wider uppercase">
                    {step.step}
                  </div>
                  <div className="space-y-2.5">
                    <h3 className="text-[18px] lg:text-[19px] font-bold text-slate-800 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-[14px] lg:text-[14.5px] text-slate-500 leading-[1.65]">
                      {step.description}
                    </p>
                  </div>
                </div>
                <div className="mt-5">
                  <span className="inline-block py-1 px-3 bg-teal-50 text-teal-700 text-[12px] font-bold rounded-full">
                    {step.point}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: Steps 4, 5 (Centered with custom width to match grid sizing) */}
          <div className="flex justify-center gap-6">
            {steps.slice(3, 5).map((step, idx) => (
              <div
                key={idx}
                className="w-[calc(33.333%-16px)] bg-white border border-slate-100/90 rounded-[24px] p-7.5 shadow-3xs hover:-translate-y-1 hover:shadow-2xs transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="text-teal-600 text-[11.5px] font-black tracking-wider uppercase">
                    {step.step}
                  </div>
                  <div className="space-y-2.5">
                    <h3 className="text-[18px] lg:text-[19px] font-bold text-slate-800 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-[14px] lg:text-[14.5px] text-slate-500 leading-[1.65]">
                      {step.description}
                    </p>
                  </div>
                </div>
                <div className="mt-5">
                  <span className="inline-block py-1 px-3 bg-teal-50 text-teal-700 text-[12px] font-bold rounded-full">
                    {step.point}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile 1-Column Timeline Layout */}
        <div className="flex md:hidden flex-col gap-8 relative pl-6 border-l border-teal-500/20 ml-2">
          {steps.map((step, idx) => (
            <div key={idx} className="relative bg-white border border-slate-100 rounded-[24px] p-6 shadow-3xs flex flex-col justify-between">
              
              {/* Step circle indicator on the vertical timeline border */}
              <div className="absolute left-[-30px] top-6 w-[10px] h-[10px] bg-teal-500 rounded-full border-2 border-white shadow-xs"></div>
              
              <div className="space-y-3">
                <div className="text-teal-600 text-[11px] font-black tracking-wider uppercase">
                  {step.step}
                </div>
                <div className="space-y-2">
                  <h3 className="text-[17px] font-bold text-slate-800 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-[13.5px] text-slate-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <span className="inline-block py-1 px-2.5 bg-teal-50 text-teal-700 text-[11.5px] font-bold rounded-full">
                  {step.point}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Section Bottom Conclusion Note Box */}
        <div className="mt-12 p-5 bg-teal-50/40 border border-teal-500/10 rounded-2xl max-w-3xl mx-auto text-center">
          <p className="text-[14px] sm:text-[14.5px] font-bold text-slate-800 leading-relaxed">
            틈새케어는 현장 상태에 따라 필요한 시공 방식을 구분해 재누수 가능성을 줄이는 방향으로 작업합니다.
          </p>
        </div>

        {/* SEO Dynamic Process Steps Preservation (Hidden visually but discoverable for search engine crawl bots) */}
        <div className="sr-only opacity-0 pointer-events-none absolute w-0 h-0 overflow-hidden">
          <h3>{title}</h3>
          {process.map((step, idx) => (
            <div key={idx}>
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
