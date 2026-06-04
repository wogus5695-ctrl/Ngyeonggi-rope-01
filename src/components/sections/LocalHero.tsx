"use client";

import React, { useState } from "react";
import Link from "next/link";

interface LocalHeroProps {
  locationName: string;
  serviceTitle: string;
  intro: string;
  keywords: string[];
}

export default function LocalHero({ locationName, serviceTitle, intro, keywords }: LocalHeroProps) {
  // 우측 자가진단 카드 상태
  const [checkedList, setCheckedList] = useState<Record<number, boolean>>({
    0: false,
    1: false,
    2: false,
    3: false,
  });

  const diagnostics = [
    "비가 오면 창틀 실크벽지가 젖거나 웁니다.",
    "샷시 주변 실리콘이 칼라 지거나 갈라졌습니다.",
    "창문 하부 샤시 레일에 빗물이 고여 넘칩니다.",
    "창틀 주변 외벽 콘크리트에 실금(크랙)이 보입니다."
  ];

  const handleCheck = (idx: number) => {
    setCheckedList({ ...checkedList, [idx]: !checkedList[idx] });
  };

  const checkedCount = Object.values(checkedList).filter(Boolean).length;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-teal-50/70 via-white to-white pt-32 pb-24 md:pt-40 md:pb-32 px-4 sm:px-6 lg:px-8">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#0d94880a_1px,transparent_1px),linear-gradient(to_bottom,#0d94880a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      {/* Background Blurred Circles */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left: Headline & Copy */}
        <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-50 border border-teal-500/20 text-teal-700 text-[12.5px] font-extrabold rounded-full">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping"></span>
            경기 북부 정밀 틈새 진단
          </div>

          <h1 className="text-3.5xl sm:text-4.5xl md:text-5.5xl font-black text-slate-900 leading-tight tracking-tight">
            <span className="block text-teal-600 drop-shadow-sm">{locationName}</span>
            {serviceTitle ? (
              <span className="block text-slate-800 text-[26px] sm:text-[34px] font-bold mt-2">{serviceTitle}</span>
            ) : (
              <span className="block text-slate-800 text-[26px] sm:text-[34px] font-bold mt-2">창틀 누수 예방 케어</span>
            )}
          </h1>

          <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0 whitespace-pre-line">
            {intro}
          </p>

          {/* Keywords tags */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-2.5">
            {keywords.map((kw, i) => (
              <span
                key={i}
                className="px-3.5 py-1.5 bg-slate-50 border border-slate-200 text-slate-600 text-[13px] font-semibold rounded-lg shadow-2xs"
              >
                #{kw}
              </span>
            ))}
          </div>

          {/* Trust CTA */}
          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Link
              href="#contact"
              className="px-7 py-4 w-full sm:w-auto text-center bg-teal-600 hover:bg-teal-700 text-white text-[15px] font-black rounded-full shadow-md hover:shadow-lg transition-all"
            >
              우리 집 틈새 무료 진단하기
            </Link>
            <Link
              href="#process"
              className="px-7 py-4 w-full sm:w-auto text-center bg-white hover:bg-slate-50 text-slate-700 text-[15px] font-bold rounded-full border border-slate-200 shadow-2xs hover:shadow-sm transition-all"
            >
              시공 방식 확인하기
            </Link>
          </div>
        </div>

        {/* Right: Interactive Checklist Card */}
        <div className="lg:col-span-5">
          <div className="glass-card rounded-[32px] p-7 md:p-8 relative">
            {/* Water droplet background accent */}
            <div className="absolute top-4 right-4 text-teal-500/5">
              <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.5C12 2.5 19 9.5 19 14.5C19 18.366 15.866 21.5 12 21.5C8.13401 21.5 5 18.366 5 14.5C5 9.5 12 2.5 12 2.5Z" />
              </svg>
            </div>

            <div className="relative z-10 space-y-6">
              <div>
                <h3 className="text-[17px] font-extrabold text-slate-800 tracking-tight">
                  우리 집 틈새 간이 진단
                </h3>
                <p className="text-[12.5px] text-slate-500 mt-1 leading-normal">
                  누수가 의심되는 현상을 직접 체크해 보세요.
                </p>
              </div>

              {/* Checkbox list */}
              <div className="space-y-3.5">
                {diagnostics.map((diag, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleCheck(idx)}
                    type="button"
                    className={`w-full flex items-start gap-3.5 p-3.5 rounded-2xl border text-left transition-all ${
                      checkedList[idx]
                        ? "bg-teal-50/70 border-teal-500/30 shadow-2xs"
                        : "bg-white/50 border-slate-100 hover:bg-slate-50"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 mt-0.5 rounded-md flex items-center justify-center border transition-all ${
                        checkedList[idx]
                          ? "bg-teal-600 border-teal-600 text-white"
                          : "bg-white border-slate-300"
                      }`}
                    >
                      {checkedList[idx] && (
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    <span
                      className={`text-[13.5px] leading-relaxed transition-colors ${
                        checkedList[idx] ? "text-slate-800 font-semibold" : "text-slate-600"
                      }`}
                    >
                      {diag}
                    </span>
                  </button>
                ))}
              </div>

              {/* Diagnostic Result Banner */}
              <div className="pt-2">
                <div
                  className={`p-4 rounded-2xl transition-all duration-500 border ${
                    checkedCount > 0
                      ? "bg-emerald-50/70 border-emerald-500/20 text-emerald-800"
                      : "bg-slate-50 border-slate-100 text-slate-500"
                  }`}
                >
                  <p className="text-[13px] font-bold leading-normal">
                    {checkedCount > 0
                      ? `진단 결과: ${checkedCount}가지 증상 감지. 정밀 검수가 권장되는 상태입니다. 아래 상담 양식에 상세 증상을 기입해 주시면 맞춤 처방을 드립니다.`
                      : "체크 항목이 없습니다. 현재 누수 징후가 확인되지 않는 상태입니다."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
