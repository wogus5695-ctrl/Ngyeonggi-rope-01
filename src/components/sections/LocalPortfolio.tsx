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
    <section className="section-py bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="text-teal-600 text-[13px] font-extrabold tracking-wider uppercase">
            Case Studies
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            {title}
          </h2>
          <p className="text-[14.5px] text-slate-500 max-w-sm mx-auto leading-relaxed">
            경기 북부 일대에서 직접 진단 및 밀봉 시공을 완수한 대표 레퍼런스입니다.
          </p>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolio.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-teal-500/10 rounded-[28px] overflow-hidden shadow-2xs hover:shadow-lg transition-all hover:-translate-y-1.5 flex flex-col justify-between"
            >
              {/* Card Body */}
              <div className="p-6 md:p-7 space-y-5">
                {/* Meta details */}
                <div className="flex items-center justify-between text-[12px] text-slate-400 font-semibold">
                  <span>{item.location}</span>
                  <span>{item.date}</span>
                </div>

                <div className="space-y-2">
                  <span className="inline-block px-2.5 py-0.5 bg-teal-50 border border-teal-500/10 text-teal-600 font-bold text-[11px] rounded-md">
                    {item.serviceType}
                  </span>
                  <h3 className="text-[16px] font-extrabold text-slate-800 tracking-tight leading-snug">
                    {item.title}
                  </h3>
                </div>

                <p className="text-[13px] text-slate-500 leading-relaxed">
                  {item.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2.5 pt-2 border-t border-slate-50">
                  <p className="text-[12px] font-extrabold text-slate-400 tracking-wider uppercase">Core Action</p>
                  <ul className="space-y-1.5">
                    {item.highlights.map((hl, index) => (
                      <li key={index} className="flex items-start gap-2 text-[12.5px] text-slate-700 leading-normal">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 flex-shrink-0"></span>
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Decorative Banner */}
              <div className="bg-teal-500/5 py-3 px-6 text-center border-t border-teal-500/5">
                <span className="text-[12.5px] font-bold text-teal-700">시공 및 보증 관리 매뉴얼 배포 완료</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
