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
    <section className="relative overflow-hidden bg-gradient-to-b from-teal-50/70 via-white to-white pt-32 pb-20 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8">
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
            <span className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-ping"></span>
            경기 북부 창틀 누수·코킹 진단
          </div>

          {/* H1 Title: 네이버 SEO 반영 및 동적 키워드 유지 */}
          <h1 className="text-3.5xl sm:text-4.5xl md:text-5.5xl font-black text-slate-900 leading-tight tracking-tight">
            <span className="block text-teal-600 drop-shadow-sm">{locationName}</span>
            <span className="block text-slate-800 text-[26px] sm:text-[34px] font-bold mt-2">
              {serviceName || "창틀코킹"} 전문 진단
            </span>
          </h1>

          {/* Body Text */}
          <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0 whitespace-pre-line">
            비가 온 뒤 창틀 주변이 젖거나 실리콘이 갈라졌다면 단순 덧방보다 원인 확인이 먼저입니다. 틈새케어는 창틀, 샷시, 외벽 크랙 상태를 함께 확인해 현장에 맞는 시공 방식을 안내합니다.
          </p>

          {/* Trust Badges Grid (Redesigned from keywords tags) */}
          <div className="grid grid-cols-2 gap-3 max-w-md mx-auto lg:mx-0 pt-2 text-left">
            {[
              "현장 진단 기반",
              "창틀·외벽 동시 확인",
              "부분보수·올제거 구분",
              "상담 후 견적 안내"
            ].map((badge, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-3.5 py-2.5 bg-slate-50 border border-slate-200/60 rounded-xl text-slate-700 text-[13.5px] font-bold shadow-2xs"
              >
                <svg className="w-4 h-4 text-teal-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>{badge}</span>
              </div>
            ))}
          </div>

          {/* Trust CTA */}
          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Link
              href="#contact"
              className="px-7 py-4 w-full sm:w-auto text-center bg-teal-600 hover:bg-teal-700 text-white text-[15.5px] font-black rounded-full shadow-md hover:shadow-lg transition-all"
            >
              우리 집 누수 무료 진단하기
            </Link>
            <Link
              href="#process"
              className="px-7 py-4 w-full sm:w-auto text-center bg-white hover:bg-slate-50 text-slate-700 text-[15.5px] font-bold rounded-full border border-slate-200 shadow-2xs hover:shadow-sm transition-all"
            >
              시공 방식 확인하기
            </Link>
          </div>
        </div>

        {/* Right: Actual Work Image Card with Captions */}
        <div className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none">
          <div className="relative overflow-hidden rounded-[32px] bg-white border border-slate-100 shadow-2xl shadow-slate-200/80">
            {/* Image container */}
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src="/hero-work.jpg"
                alt="실제 외벽 및 창틀 주변 누수 점검 작업"
                fill
                sizes="(max-width: 1024px) 100vw, 450px"
                className="object-cover transition-transform duration-500 hover:scale-102"
                priority
              />
              {/* Soft overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent z-10"></div>
            </div>

            {/* Captions Footer (Deep Navy Style for trust and premium look) */}
            <div className="p-6 bg-slate-900 text-white">
              <h4 className="text-[15.5px] font-extrabold text-teal-400 tracking-tight">
                실제 외벽·창틀 주변 누수 점검 작업
              </h4>
              <p className="text-[13px] text-slate-300 mt-2 leading-relaxed font-medium">
                로프 접근이 필요한 고층 세대도 현장 상태에 맞춰 확인합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
