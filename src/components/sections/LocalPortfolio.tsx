"use client";

import React from "react";

interface LocalPortfolioProps {
  title: string;
  isWaterproofing?: boolean;
}

export default function LocalPortfolio({ title, isWaterproofing }: LocalPortfolioProps) {
  const leftCard = isWaterproofing
    ? {
        img: "/case-crack.jpg",
        tag: "외벽 균열 방수",
        title: "외벽 크랙 보수 및 방수 코팅",
        hash: "#외벽방수 #외벽크랙 #균열보강"
      }
    : {
        img: "/case-crack.jpg",
        tag: "외벽 크랙",
        title: "외벽 크랙 보수로 빗물 유입 차단",
        hash: "#외벽크랙 #빗물누수 #균열보수"
      };

  const rightTopCard = isWaterproofing
    ? {
        img: "/case-glass.jpg",
        tag: "옥상 방수",
        title: "옥상 우레탄 방수 및 구배 보강",
        hash: "#옥상방수 #우레탄방수 #옥상누수"
      }
    : {
        img: "/case-glass.jpg",
        tag: "유리 실리콘",
        title: "유리 실리콘 보수",
        hash: "#유리실리콘 #창틀누수 #고층작업"
      };

  const rightBottomCard = isWaterproofing
    ? {
        img: "/og-image-waterproof.jpg",
        tag: "건물 도색",
        title: "건물 외벽 방수 도색 시공",
        hash: "#외벽도색 #건물방수 #도장공사"
      }
    : {
        img: "/case-frame.jpg",
        tag: "창틀 실리콘",
        title: "창틀 실리콘 재작업",
        hash: "#창틀실리콘 #창틀코킹 #하부누수"
      };

  return (
    <section className="py-16 md:py-24 bg-white relative">

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Visual Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16 space-y-3">
          <div className="text-teal-600 text-[13px] font-black tracking-widest uppercase">
            CASE STUDIES
          </div>
          <h2 className="text-3xl sm:text-[40px] font-black text-slate-900 tracking-tight leading-tight">
            {isWaterproofing ? "실제 건물 방수 해결 사례" : "실제 빗물누수 해결 사례"}
          </h2>
          <p className="text-[15px] sm:text-[16px] text-slate-500 leading-relaxed max-w-lg mx-auto">
            {isWaterproofing
              ? "외벽 균열 보강, 옥상 우레탄 방수, 건물 도색 등 현장 상태에 맞춰 시공한 방수 현장입니다."
              : "외벽 크랙, 유리 실리콘, 창틀 실리콘 등 누수 원인에 맞춰 진단·보수한 현장입니다."}
          </p>
        </div>

        {/* Gallery Cards Grid (Asymmetric 바둑판식 배열, 모바일 1열) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Large Card (col-span-7) */}
          <div className="lg:col-span-7 group relative rounded-[28px] overflow-hidden shadow-3xs hover:shadow-lg transition-all duration-500 h-[260px] sm:h-[320px] lg:h-[640px] flex flex-col justify-end">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img
                src={leftCard.img}
                alt={leftCard.title}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-103"
              />
              {/* Subtle dark gradient overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-slate-950/70 via-slate-950/30 to-transparent z-10"></div>
            </div>

            {/* Content Overlay */}
            <div className="relative z-20 p-6 sm:p-8 space-y-2 sm:space-y-3 mt-auto">
              <div>
                <span className="inline-block px-3 py-1 bg-teal-500/20 text-teal-300 font-extrabold text-[12px] rounded-full border border-teal-500/30 backdrop-blur-xs">
                  {leftCard.tag}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-white tracking-tight leading-snug">
                {leftCard.title}
              </h3>
              <div className="text-[12px] sm:text-[12.5px] font-bold text-teal-400 tracking-wide">
                {leftCard.hash}
              </div>
              <div className="pt-1.5 hidden md:block">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-4 py-2 text-[13px] font-bold text-white bg-teal-600 hover:bg-teal-700 rounded-xl transition-all shadow-xs"
                >
                  비슷한 증상 상담받기
                </a>
              </div>
            </div>
          </div>

          {/* Right Column containing 2 smaller cards (col-span-5) */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8 justify-between">
            
            {/* Right Top Card */}
            <div className="group relative rounded-[28px] overflow-hidden shadow-3xs hover:shadow-lg transition-all duration-500 h-[260px] sm:h-[300px] lg:h-[304px] flex flex-col justify-end">
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={rightTopCard.img}
                  alt={rightTopCard.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-103"
                />
                {/* Subtle dark gradient overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-slate-950/70 via-slate-950/30 to-transparent z-10"></div>
              </div>

              {/* Content Overlay */}
              <div className="relative z-20 p-6 space-y-2 sm:space-y-3 mt-auto">
                <div>
                  <span className="inline-block px-2.5 py-0.5 bg-teal-500/20 text-teal-300 font-extrabold text-[11px] rounded-full border border-teal-500/30 backdrop-blur-xs">
                    {rightTopCard.tag}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-black text-white tracking-tight leading-snug">
                  {rightTopCard.title}
                </h3>
                <div className="text-[12px] sm:text-[12.5px] font-bold text-teal-400 tracking-wide">
                  {rightTopCard.hash}
                </div>
                <div className="pt-1.5 hidden md:block">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center px-4 py-2 text-[12.5px] font-bold text-white bg-teal-600 hover:bg-teal-700 rounded-xl transition-all shadow-xs"
                  >
                    비슷한 증상 상담받기
                  </a>
                </div>
              </div>
            </div>

            {/* Right Bottom Card */}
            <div className="group relative rounded-[28px] overflow-hidden shadow-3xs hover:shadow-lg transition-all duration-500 h-[260px] sm:h-[300px] lg:h-[304px] flex flex-col justify-end">
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={rightBottomCard.img}
                  alt={rightBottomCard.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-103"
                />
                {/* Subtle dark gradient overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-slate-950/70 via-slate-950/30 to-transparent z-10"></div>
              </div>

              {/* Content Overlay */}
              <div className="relative z-20 p-6 space-y-2 sm:space-y-3 mt-auto">
                <div>
                  <span className="inline-block px-2.5 py-0.5 bg-teal-500/20 text-teal-300 font-extrabold text-[11px] rounded-full border border-teal-500/30 backdrop-blur-xs">
                    {rightBottomCard.tag}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-black text-white tracking-tight leading-snug">
                  {rightBottomCard.title}
                </h3>
                <div className="text-[12px] sm:text-[12.5px] font-bold text-teal-400 tracking-wide">
                  {rightBottomCard.hash}
                </div>
                <div className="pt-1.5 hidden md:block">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center px-4 py-2 text-[12.5px] font-bold text-white bg-teal-600 hover:bg-teal-700 rounded-xl transition-all shadow-xs"
                  >
                    비슷한 증상 상담받기
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom CTA Area */}
        <div className="mt-12 md:mt-16 text-center space-y-4">
          <div className="space-y-1.5">
            <h4 className="text-lg sm:text-[20px] font-black text-slate-800 tracking-tight">
              {isWaterproofing ? "우리 건물도 비슷한 증상인지 확인받아보세요." : "우리 집도 비슷한 증상인지 확인받아보세요."}
            </h4>
            <p className="text-[13.5px] sm:text-[14.5px] text-slate-500 leading-relaxed">
              {isWaterproofing
                ? "외벽, 옥상, 균열 부위 사진을 보내주시면 기본 상태를 먼저 확인해드립니다."
                : "창틀, 외벽, 실리콘 상태 사진을 보내주시면 기본 상태를 먼저 확인해드립니다."}
            </p>
          </div>
          
          <div className="pt-2">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-[15px] font-extrabold text-white bg-teal-600 hover:bg-teal-700 transition-all rounded-full shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto"
            >
              {isWaterproofing ? "건물 방수 사진 상담" : "누수 원인 사진 상담"}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
