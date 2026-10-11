"use client";

import React from "react";
import Image from "next/image";
import { SafeTierPortfolioCase } from "@/data/tierPortfolioBinding";

interface TierEnhancedPortfolioProps {
  portfolioCase: SafeTierPortfolioCase;
  serviceName: string;
}

export default function TierEnhancedPortfolio({
  portfolioCase,
  serviceName
}: TierEnhancedPortfolioProps) {
  return (
    <section className="py-16 md:py-20 bg-slate-50/80 border-y border-slate-200/70 relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/60 text-teal-700 text-[12px] font-bold tracking-wide uppercase">
            실제 시공 사례
          </div>
          <h2 className="text-2.5xl sm:text-3.5xl font-black text-slate-900 tracking-tight leading-tight">
            {portfolioCase.location} 실제 작업 현장
          </h2>
          <p className="text-[14.5px] sm:text-[15.5px] text-slate-600 leading-relaxed max-w-2xl mx-auto">
            해당 지역에서 진행된 실제 작업 사례입니다. 작업 지역, 작업 유형, 작업일과 시공 전·후 사진을 확인할 수 있습니다.
          </p>
        </div>

        {/* Main Case Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden p-6 sm:p-8 lg:p-10">
          
          {/* Metadata Meta Bar (Allowlisted Fields Only) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 bg-slate-50/80 rounded-2xl border border-slate-100 text-[13.5px]">
            <div>
              <span className="block text-slate-500 font-medium text-[12px] mb-0.5">작업 지역</span>
              <strong className="text-slate-800 font-bold">{portfolioCase.location}</strong>
            </div>
            <div>
              <span className="block text-slate-500 font-medium text-[12px] mb-0.5">작업 유형</span>
              <strong className="text-teal-700 font-bold">{portfolioCase.serviceType}</strong>
            </div>
            <div>
              <span className="block text-slate-500 font-medium text-[12px] mb-0.5">작업일</span>
              <strong className="text-slate-800 font-bold">{portfolioCase.date}</strong>
            </div>
          </div>

          {/* Before & After Image Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            {/* Before Card */}
            <div className="space-y-3">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                <Image
                  src={portfolioCase.images.before}
                  alt={`${portfolioCase.location} 시공 전 상태`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white text-[12px] font-bold px-3 py-1 rounded-full">
                  시공 전 (Before)
                </div>
              </div>
              <p className="text-[13px] text-slate-500 leading-snug">
                시공 전 현장: 작업 전 마감재 및 부위 상태
              </p>
            </div>

            {/* After Card */}
            <div className="space-y-3">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                <Image
                  src={portfolioCase.images.after}
                  alt={`${portfolioCase.location} 시공 완료 상태`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-teal-700/90 backdrop-blur-xs text-white text-[12px] font-bold px-3 py-1 rounded-full">
                  시공 완료 (After)
                </div>
              </div>
              <p className="text-[13px] text-slate-500 leading-snug">
                시공 완료 현장: 정돈된 마감 상태
              </p>
            </div>
          </div>

          {/* Safe Field Guidance Note */}
          <div className="bg-slate-50/50 rounded-2xl p-5 border border-slate-100 text-center">
            <p className="text-[13.5px] text-slate-600 leading-relaxed">
              현장 여건 및 구조물 노후도에 따라 적합한 작업 범위와 보수 방식이 달라질 수 있으므로, 현장 확인을 통한 사전 상담을 권장합니다.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
