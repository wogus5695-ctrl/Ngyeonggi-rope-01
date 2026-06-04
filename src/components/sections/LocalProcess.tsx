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
  return (
    <section className="section-py bg-teal-50/20 relative">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-slate-200/60 hidden lg:block -z-10 -translate-y-12"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="text-teal-600 text-[13px] font-extrabold tracking-wider uppercase">
            Engineering Process
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            {title}
          </h2>
          <p className="text-[14.5px] text-slate-500 max-w-lg mx-auto leading-relaxed">
            한 방울의 누수도 허용하지 않는 틈새케어만의 기술 공정을 순서대로 안내합니다.
          </p>
        </div>

        {/* Steps: Horizontal on large screens, vertical on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-6 relative">
          {process.map((step, idx) => (
            <div
              key={idx}
              className="bg-white border border-teal-500/5 rounded-3xl p-6.5 shadow-2xs hover:shadow-md transition-shadow relative flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              {/* Bubble Badge */}
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-500 text-white rounded-full flex items-center justify-center font-extrabold text-[15px] shadow-sm mb-5 relative z-10">
                0{idx + 1}
              </div>

              <div className="space-y-3">
                <h3 className="text-[16px] font-extrabold text-slate-800 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-[13px] text-slate-500 leading-relaxed whitespace-pre-line">
                  {step.description}
                </p>
              </div>

              {/* Line connector for mobile */}
              {idx < process.length - 1 && (
                <div className="absolute left-1/2 lg:hidden bottom-[-24px] -translate-x-1/2 w-[2px] h-[24px] bg-teal-500/20"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
