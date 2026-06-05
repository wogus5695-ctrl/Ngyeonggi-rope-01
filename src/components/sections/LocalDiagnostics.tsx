"use client";

import React, { useState } from "react";

export default function LocalDiagnostics() {
  const [checkedList, setCheckedList] = useState<Record<number, boolean>>({
    0: false,
    1: false,
    2: false,
    3: false,
  });

  const diagnostics = [
    "비가 오면 창틀 아래쪽이 젖습니다.",
    "샷시 주변 실리콘이 갈라졌습니다.",
    "창문 하부 몰딩이나 벽지가 젖습니다.",
    "외벽 콘크리트에 실금이 보입니다.",
  ];

  const handleCheck = (idx: number) => {
    setCheckedList((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const checkedCount = Object.values(checkedList).filter(Boolean).length;
  const isWarning = checkedCount >= 2;

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#0d948805_1px,transparent_1px),linear-gradient(to_bottom,#0d948805_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-50 border border-teal-500/10 text-teal-700 text-xs font-bold rounded-full">
            간이 자가진단
          </div>
          <h2 className="text-2.5xl sm:text-3.5xl font-black text-slate-900 tracking-tight leading-tight">
            우리 집도 창틀 누수일 수 있습니다
          </h2>
          <p className="text-[14.5px] text-slate-500 max-w-lg mx-auto">
            주요 누수 증상을 확인하고 우리 집의 안전 상태를 간편하게 진단해 보세요.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-xl shadow-slate-100/50 space-y-8">
          {/* Checkbox grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {diagnostics.map((diag, idx) => (
              <button
                key={idx}
                onClick={() => handleCheck(idx)}
                type="button"
                className={`flex items-start gap-4 p-5 rounded-2xl border text-left transition-all duration-200 ${
                  checkedList[idx]
                    ? "bg-teal-50/40 border-teal-500/30 shadow-xs"
                    : "bg-white border-slate-100 hover:border-slate-200 hover:bg-slate-50/30"
                }`}
              >
                <div
                  className={`w-6 h-6 mt-0.5 rounded-lg flex items-center justify-center border transition-all ${
                    checkedList[idx]
                      ? "bg-teal-600 border-teal-600 text-white"
                      : "bg-white border-slate-200"
                  }`}
                >
                  {checkedList[idx] && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <span
                  className={`text-[14.5px] leading-relaxed transition-colors ${
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
              className={`p-5 rounded-2xl transition-all duration-300 border text-center ${
                isWarning
                  ? "bg-teal-50/70 border-teal-500/20 text-teal-900"
                  : "bg-slate-50 border-slate-100 text-slate-500"
              }`}
            >
              <p className={`text-[14px] font-bold leading-relaxed ${isWarning ? "text-teal-700" : "text-slate-600"}`}>
                {isWarning
                  ? "✓ 2개 이상 해당된다면 창틀·외벽 주변 누수 진단이 필요할 수 있습니다."
                  : `현재 ${checkedCount}개 항목 선택됨 (2개 이상 해당된다면 창틀·외벽 주변 누수 진단이 필요할 수 있습니다.)`}
              </p>
              {isWarning && (
                <p className="text-[12.5px] text-teal-600/90 mt-1 font-medium">
                  아래 상담 신청을 통해 사진을 첨부해 주시면, 시공 전문가가 직접 원인을 분석하여 드립니다.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
