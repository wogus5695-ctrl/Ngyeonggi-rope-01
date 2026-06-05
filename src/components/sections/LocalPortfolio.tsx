import React from "react";

interface PortfolioCase {
  id: string;
  title: string;
  location: string;
  serviceType: string;
  date: string;
  description: string;
  highlights: string[];
}

interface LocalPortfolioProps {
  title: string;
  portfolio: PortfolioCase[];
}

export default function LocalPortfolio({ title, portfolio }: LocalPortfolioProps) {
  return (
    <section className="py-24 bg-white relative">
      
      {/* SEO Crawler Safe Layer (Hidden visually but crawlable for search engines) */}
      <div className="sr-only opacity-0 pointer-events-none absolute w-0 h-0 overflow-hidden" aria-hidden="true">
        <h2>{title}</h2>
        <ul>
          {portfolio.map((item) => (
            <li key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.location} - {item.date} - {item.serviceType}</p>
              <p>{item.description}</p>
              <ul>
                {item.highlights.map((hl, i) => (
                  <li key={i}>{hl}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Visual Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <div className="text-teal-600 text-[13px] font-black tracking-widest uppercase">
            CASE STUDIES
          </div>
          <h2 className="text-3xl sm:text-[40px] font-black text-slate-900 tracking-tight leading-tight">
            실제 빗물누수 해결 사례
          </h2>
          <p className="text-[15px] sm:text-[16px] text-slate-500 leading-relaxed max-w-lg mx-auto">
            외벽 크랙, 유리 실리콘, 창틀 실리콘 등 누수 원인에 맞춰 진단·보수한 현장입니다.
          </p>
        </div>

        {/* Gallery Cards Grid (Asymmetric 바둑판식 배열) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Large Card (col-span-7) */}
          <div className="lg:col-span-7 group relative rounded-[28px] overflow-hidden shadow-3xs hover:shadow-lg transition-all duration-500 h-[380px] sm:h-[480px] lg:h-[640px] flex flex-col justify-end">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img
                src="/case-crack.jpg"
                alt="외벽 크랙 보수로 빗물 유입 차단"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              {/* Subtle dark gradient overlay only on the bottom 33% */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-slate-950/65 to-transparent z-10"></div>
            </div>

            {/* Content Overlay */}
            <div className="relative z-20 p-8 space-y-3 mt-auto">
              <div>
                <span className="inline-block px-3 py-1 bg-teal-500/20 text-teal-300 font-extrabold text-[12px] rounded-full border border-teal-500/30 backdrop-blur-xs">
                  외벽 크랙
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug">
                외벽 크랙 보수로 빗물 유입 차단
              </h3>
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="text-[12px] font-bold text-teal-400">#외벽크랙</span>
                <span className="text-[12px] font-bold text-teal-400">#빗물누수</span>
                <span className="text-[12px] font-bold text-teal-400">#균열보수</span>
              </div>
            </div>
          </div>

          {/* Right Column containing 2 smaller cards (col-span-5) */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8 justify-between">
            
            {/* Right Top Card */}
            <div className="group relative rounded-[28px] overflow-hidden shadow-3xs hover:shadow-lg transition-all duration-500 h-[280px] sm:h-[320px] lg:h-[304px] flex flex-col justify-end">
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src="/case-glass.jpg"
                  alt="유리 주변 틈새 보수"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                {/* Subtle dark gradient overlay only on the bottom 35% */}
                <div className="absolute bottom-0 left-0 right-0 h-[35%] bg-gradient-to-t from-slate-950/65 to-transparent z-10"></div>
              </div>

              {/* Content Overlay */}
              <div className="relative z-20 p-6 space-y-3 mt-auto">
                <div>
                  <span className="inline-block px-2.5 py-0.5 bg-teal-500/20 text-teal-300 font-extrabold text-[11px] rounded-full border border-teal-500/30 backdrop-blur-xs">
                    유리 실리콘
                  </span>
                </div>
                <h3 className="text-lg font-black text-white tracking-tight leading-snug">
                  유리 실리콘 보수
                </h3>
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="text-[12px] font-bold text-teal-400">#유리실리콘</span>
                  <span className="text-[12px] font-bold text-teal-400">#창틀누수</span>
                  <span className="text-[12px] font-bold text-teal-400">#고층작업</span>
                </div>
              </div>
            </div>

            {/* Right Bottom Card */}
            <div className="group relative rounded-[28px] overflow-hidden shadow-3xs hover:shadow-lg transition-all duration-500 h-[280px] sm:h-[320px] lg:h-[304px] flex flex-col justify-end">
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src="/case-frame.jpg"
                  alt="창틀 하부 누수 보수"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                {/* Subtle dark gradient overlay only on the bottom 35% */}
                <div className="absolute bottom-0 left-0 right-0 h-[35%] bg-gradient-to-t from-slate-950/65 to-transparent z-10"></div>
              </div>

              {/* Content Overlay */}
              <div className="relative z-20 p-6 space-y-3 mt-auto">
                <div>
                  <span className="inline-block px-2.5 py-0.5 bg-teal-500/20 text-teal-300 font-extrabold text-[11px] rounded-full border border-teal-500/30 backdrop-blur-xs">
                    창틀 실리콘
                  </span>
                </div>
                <h3 className="text-lg font-black text-white tracking-tight leading-snug">
                  창틀 실리콘 재작업
                </h3>
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="text-[12px] font-bold text-teal-400">#창틀실리콘</span>
                  <span className="text-[12px] font-bold text-teal-400">#창틀코킹</span>
                  <span className="text-[12px] font-bold text-teal-400">#하부누수</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom CTA Area */}
        <div className="mt-20 text-center space-y-5">
          <div className="space-y-1.5">
            <h4 className="text-lg sm:text-[20px] font-black text-slate-800 tracking-tight">
              우리 집도 비슷한 증상인지 확인받아보세요.
            </h4>
            <p className="text-[13.5px] sm:text-[14.5px] text-slate-500 leading-relaxed">
              창틀, 외벽, 실리콘 상태 사진을 보내주시면 기본 상태를 먼저 확인해드립니다.
            </p>
          </div>
          
          <div className="pt-2">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-[15px] font-extrabold text-white bg-teal-600 hover:bg-teal-700 transition-all rounded-full shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto"
            >
              사진 보내고 상담받기
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
