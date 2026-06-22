import React from "react";

interface LocalCostsProps {
  costFactors: string[];
}

export default function LocalCosts({ costFactors }: LocalCostsProps) {
  // 아이콘과 요약 설명을 결합한 3대 핵심 비용 요인 정의
  const details = [
    {
      title: "창호 규격 및 개별 샷시 사이즈",
      description: costFactors[0] || "보수가 필요한 창문의 가로/세로 전체 길이와 샤시 프레임 개수에 비례합니다.",
      icon: (
        <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v16.5h16.5M7.5 12h9m-9-3.75h9m-9 7.5h9" />
        </svg>
      )
    },
    {
      title: "기존 마감재 노후 상태 및 덧방 제거 난이도",
      description: costFactors[1] || "실리콘이 굳어 박리가 까다롭거나 이미 덧방이 되어 이중 박리를 해야 하는지 여부에 따라 차이가 납니다.",
      icon: (
        <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
        </svg>
      )
    },
    {
      title: "로프 작업대 설치 및 외벽 크랙 범위",
      description: costFactors[2] || "로프 진입의 구조적 안전성과 창틀 인근의 외벽 균열 보강 보수가 어느 정도 병행되어야 하는지에 따릅니다.",
      icon: (
        <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.67 2.67 0 0021 17.25l-5.83-5.83m-3.75 3.75L4.83 9.41A2.67 2.67 0 019.41 4.83l5.83 5.83m-3.75 3.75l-5.83-5.83m11.66 11.66l-5.83-5.83m0 0l3.75-3.75m-3.75 3.75l-3.75 3.75" />
        </svg>
      )
    }
  ];

  return (
    <section className="section-py bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="text-teal-600 text-[13px] font-extrabold tracking-wider uppercase">
            Cost Factors
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            합리적인 견적 산출 3대 요소
          </h2>
          <p className="text-[14.5px] text-slate-500 max-w-lg mx-auto leading-relaxed">
            틈새케어는 불투명한 임의 청구 없이 투명한 세부 산정 기준을 통보해 드립니다.
          </p>
        </div>

        {/* Cost Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {details.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50/50 border border-slate-100 rounded-3xl p-7 md:p-8 space-y-5 hover:bg-slate-50 transition-colors"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 bg-teal-50 border border-teal-500/10 rounded-2xl flex items-center justify-center">
                {item.icon}
              </div>

              <div className="space-y-3">
                <h3 className="text-[16px] font-extrabold text-slate-800 tracking-tight leading-snug">
                  {item.title}
                </h3>
                <p className="text-[13.5px] text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
