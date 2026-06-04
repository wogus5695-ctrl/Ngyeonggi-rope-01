import React from "react";

interface AnalysisBlock {
  title: string;
  description: string;
  checkpoints: string[];
}

interface LocalAnalysisProps {
  locationName: string;
  introTitle?: string;
  introDesc: string;
  blocks?: AnalysisBlock[];
  dynamicKeyword?: string;
}

export default function LocalAnalysis({
  locationName,
  introTitle,
  introDesc,
  blocks,
  dynamicKeyword,
}: LocalAnalysisProps) {
  // 기본 진단 항목 (블록 데이터가 주입되지 않았을 때의 폴백)
  const defaultBlocks: AnalysisBlock[] = [
    {
      title: "01. 마감 실리콘 접착 상태 정밀 점검",
      description: "창문 주변의 기존 마감재 노후화 정도를 계측하여, 벽면과의 이격 및 들뜸 범위를 세밀히 도출합니다.",
      checkpoints: ["실리콘 유연성 소실 체크", "창틀 하부 이격 틈새 추적", "계면 탈락 범위 전수조사"]
    },
    {
      title: "02. 외벽 조인트 및 프레임 수평 변형 실사",
      description: "건물 흔들림이나 침하로 인한 샷시 틀 뒤틀림 여부와 인접 외벽 콘크리트 균열 상태를 정밀 체크합니다.",
      checkpoints: ["콘크리트 미세 선상 균열 검사", "창호 수평도 및 처짐 현상 계측", "코너 옹벽 균열과의 연계성 조사"]
    },
    {
      title: "03. 현장 건조도 및 최적 적합 자재 선정",
      description: "해당 세대의 일조 환경과 풍속 노출도를 감안하여, 접착 지속 수명이 가장 긴 실런트와 결합 약품을 매칭합니다.",
      checkpoints: ["고내후성 비초산 자재 선택", "피착면 화학적 잔여물 세정 진단", "접착력 테스트용 약제 선별"]
    }
  ];

  const activeBlocks = blocks || defaultBlocks;

  return (
    <section className="section-py bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="text-teal-600 text-[13px] font-extrabold tracking-wider uppercase">
            Diagnostics Center
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            {introTitle || `${locationName} 현장 맞춤형 정밀 분석`}
          </h2>
          <p className="text-[15px] sm:text-[16px] text-slate-500 leading-relaxed whitespace-pre-line max-w-2xl mx-auto">
            {introDesc}
          </p>
        </div>

        {/* Diagnosis Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activeBlocks.map((block, idx) => (
            <div key={idx} className="glass-card rounded-[28px] p-7 md:p-8 flex flex-col justify-between">
              <div className="space-y-5">
                {/* Card Top Icon & Title */}
                <div>
                  <div className="w-11 h-11 bg-teal-50 border border-teal-500/15 rounded-xl flex items-center justify-center text-teal-600 font-extrabold text-[15px] mb-5">
                    {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </div>
                  <h3 className="text-[17px] font-extrabold text-slate-800 tracking-tight leading-snug">
                    {block.title}
                  </h3>
                </div>

                <p className="text-[13.5px] text-slate-500 leading-relaxed">
                  {block.description}
                </p>

                {/* Checkpoints */}
                <ul className="space-y-2.5 pt-2">
                  {block.checkpoints.map((check, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-[13px] font-semibold text-slate-700">
                      <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                      </svg>
                      {check}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Dynamic tag at the bottom */}
              {dynamicKeyword && (
                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-[12px]">
                  <span className="text-slate-400 font-medium">검수 타겟</span>
                  <span className="text-teal-600 font-bold bg-teal-50/50 px-2 py-0.5 rounded-md border border-teal-500/5">
                    {dynamicKeyword}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
