"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LocalHeroProps {
  locationName: string;
  serviceTitle: string;
  serviceName?: string; // H1에 매핑할 동적 작업명
  intro: string;
  keywords: string[];
}

export default function LocalHero({ locationName, serviceTitle, serviceName, intro, keywords }: LocalHeroProps) {
  return (
    <section className="relative overflow-hidden bg-white border-b border-slate-100 flex flex-col lg:flex-row lg:items-stretch lg:min-h-[680px] lg:max-h-[760px] lg:h-[720px] pt-20 lg:pt-0">
      {/* Background Subtle Accent for Text Area */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#0d948805_1px,transparent_1px),linear-gradient(to_bottom,#0d948805_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_0%_0%,#000_70%,transparent_100%)]"></div>

      {/* Left: Text & Call to Action (45%) */}
      <div className="relative z-10 w-full lg:w-[45%] flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-12 sm:py-16 lg:py-0">
        <div className="max-w-[480px] w-full mx-auto lg:mx-0 space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-teal-50 border border-teal-500/20 text-teal-700 text-[12.5px] font-extrabold rounded-full">
            <span className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-ping"></span>
            경기 북부 창틀 누수·코킹 진단
          </div>

          <div className="space-y-2">
            {/* Brand Name */}
            <div className="text-teal-600 font-black text-[13.5px] tracking-widest uppercase">
              틈새케어
            </div>

            {/* H1 Title: 네이버 SEO 반영 및 동적 키워드 유지 */}
            <h1 className="text-3.5xl sm:text-4xl lg:text-4.5xl font-black text-slate-900 leading-tight tracking-tight">
              <span className="text-teal-600">{locationName}</span> {serviceName || "창틀코킹"} 전문 진단
            </h1>

            {/* Sub-copy (강조 문장) */}
            <div className="text-[16.5px] sm:text-[18.5px] font-extrabold text-slate-800 tracking-tight leading-snug">
              “창틀 틈새로 새는 빗물, 외벽까지 함께 확인합니다”
            </div>
          </div>

          {/* Body Text */}
          <p className="text-[14px] sm:text-[15px] text-slate-500 leading-relaxed whitespace-pre-line">
            창틀 주변이 젖거나 벽지가 들뜨는 증상은 단순 실리콘 문제가 아닐 수 있습니다. 틈새케어는 창틀, 샷시, 외벽 크랙까지 함께 확인해 재누수 가능성을 줄이는 방식으로 진단합니다.
          </p>

          {/* Trust Badges Grid (Redesigned & High contrast) */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            {[
              "재누수 원인 확인",
              "외벽 크랙 동시 점검",
              "덧방·제거 시공 구분",
              "사진 상담 후 견적 안내"
            ].map((badge, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-3.5 py-2.5 bg-slate-50 border border-slate-200/50 rounded-xl text-slate-700 text-[13px] font-bold shadow-3xs"
              >
                <svg className="w-4 h-4 text-teal-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="truncate">{badge}</span>
              </div>
            ))}
          </div>

          {/* Action CTA Buttons (Enlarged & Strong weight) */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <Link
              href="#contact"
              className="px-8 py-4.5 w-full sm:w-auto text-center bg-teal-600 hover:bg-teal-700 text-white text-[15.5px] font-black rounded-2xl shadow-md hover:shadow-lg transition-all"
            >
              사진 보내고 무료 진단받기
            </Link>
            <Link
              href="#process"
              className="px-8 py-4.5 w-full sm:w-auto text-center bg-white hover:bg-slate-50 text-slate-700 text-[15.5px] font-bold rounded-2xl border border-slate-200 shadow-2xs hover:shadow-sm transition-all"
            >
              창틀누수 원인 확인하기
            </Link>
          </div>
        </div>
      </div>

      {/* Right: Large Visual Background & Overlay Text (55%) */}
      <div className="relative w-full lg:w-[55%] h-[400px] sm:h-[480px] lg:h-auto overflow-hidden">
        {/* Large actual image background */}
        <Image
          src="/hero-work.jpg"
          alt="실제 외벽 및 창틀 주변 누수 점검 작업"
          fill
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="object-cover transition-transform duration-700 hover:scale-103"
          priority
        />

        {/* Dynamic Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-slate-950/20 lg:bg-gradient-to-t lg:from-slate-950/80 lg:via-slate-950/15 lg:to-transparent z-10"></div>

        {/* Natural Overlay Text (Bottom left aligned on image) */}
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 z-20 text-white space-y-2">
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight drop-shadow-md">
            실제 외벽·창틀 주변 누수 점검 작업
          </h3>
          <p className="text-[13.5px] sm:text-[14.5px] text-slate-300 max-w-md leading-relaxed font-medium drop-shadow-sm">
            고층 세대, 외벽 크랙, 샷시 주변 틈새까지 현장 상태에 맞춰 확인합니다.
          </p>
        </div>
      </div>
    </section>
  );
}
