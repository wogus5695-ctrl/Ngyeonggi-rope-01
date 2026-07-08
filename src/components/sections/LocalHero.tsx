"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { kakaoChannelUrl } from "@/data/config";

interface LocalHeroProps {
  locationName: string;
  serviceTitle: string;
  serviceName?: string; // H1에 매핑할 동적 작업명
  phone?: string;
  intro: string;
  keywords: string[];
  isWaterproofing?: boolean;
}

export default function LocalHero({ 
  locationName, 
  serviceTitle, 
  serviceName, 
  phone = "050-7871-3590", 
  intro, 
  keywords,
  isWaterproofing 
}: LocalHeroProps) {
  // PC/태블릿에서 사용할 본문 문구 처리 (폴백 긴 문장은 요약본으로 교체, 동적 문구는 유지)
  const isFallbackIntro = intro.includes("\n") || !locationName || locationName === "틈새케어";
  const pcIntro = isFallbackIntro
    ? isWaterproofing
      ? "단순 땜질식 방수보다 외벽 균열, 옥상 우레탄, 조인트 방수 상태를 확인해\n누수의 근본적인 원인을 해결하고 방수 수명을 극대화합니다."
      : "단순 실리콘 덧방보다 창틀, 샷시, 외벽 상태를 함께 확인해\n재누수 가능성을 줄이는 방향으로 진단합니다."
    : intro;

  const heroImage = isWaterproofing ? "/og-image-waterproof.jpg" : "/hero-work.jpg";

  return (
    <>
      {/* 1. 모바일 전용 Hero 영역 (md 미만 노출) */}
      <section className="md:hidden relative w-full h-[560px] overflow-hidden bg-slate-900 pt-20">
        {/* 실제 작업 이미지 배경 */}
        <Image
          src={heroImage}
          alt={isWaterproofing ? "실제 건물 외벽 균열 방수 시공 작업" : "실제 외벽 및 창틀 주변 누수 점검 작업"}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[30%_center]"
        />

        {/* 어두운 오버레이 & 그라데이션 */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10"></div>

        {/* 모바일 텍스트 콘텐츠 (좌측 하단 배치) */}
        <div className="absolute bottom-12 left-0 w-full px-6 z-20 flex flex-col justify-end text-left">
          {/* 브랜드명 */}
          <div className="text-teal-400 font-black text-[13.5px] tracking-widest uppercase mb-1.5">
            틈새케어
          </div>

          {/* Mobile Heading */}
          <div className="text-[34px] font-black text-white leading-[1.15] tracking-tight [text-shadow:0_2px_8px_rgba(0,0,0,0.6)]">
            <span className="text-teal-400">{locationName}</span> {serviceName || (isWaterproofing ? "건물방수" : "창틀코킹")}
            <br />
            전문 진단
          </div>

          {/* 설명 문구 */}
          <p className="text-[15.5px] text-slate-200 mt-3.5 leading-relaxed font-medium [text-shadow:0_1px_4px_rgba(0,0,0,0.5)] max-w-sm">
            {isWaterproofing 
              ? "건물 외벽 균열과\n노후 방수층 누출까지 함께 진단합니다."
              : "외벽 균열과 샷시 틈,\n창틀 주변 누수까지 함께 확인합니다."}
          </p>
        </div>
      </section>

      {/* 2. PC/태블릿 전용 Hero 영역 (md 이상 노출) */}
      <section className="hidden md:flex relative overflow-hidden bg-white border-b border-slate-100 flex-row items-stretch min-h-[580px] lg:min-h-[680px] lg:max-h-[760px] lg:h-[720px] pt-0">
        {/* Background Subtle Accent for Text Area */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#0d948805_1px,transparent_1px),linear-gradient(to_bottom,#0d948805_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_0%_0%,#000_70%,transparent_100%)]"></div>

        {/* Left: Text & Call to Action (46%) */}
        <div className="relative z-10 w-full md:w-[50%] lg:w-[46%] flex flex-col justify-center px-8 lg:px-16 py-12 lg:py-0">
          <div className="max-w-[520px] w-full mx-auto lg:mx-0 space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-teal-50 border border-teal-500/20 text-teal-700 text-[12.5px] font-extrabold rounded-full self-start">
              <span className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-ping"></span>
              {isWaterproofing 
                ? "경기 북부 건물 외벽·옥상 방수 전문 진단"
                : "경기 북부 창틀 누수·코킹 진단"}
            </div>

            <div className="space-y-3">
              {/* Brand Name */}
              <div className="text-teal-600 font-black text-[13.5px] tracking-widest uppercase">
                틈새케어
              </div>

              {/* H1 Title: 네이버 SEO 반영 및 동적 키워드 유지 */}
              <h1 className="text-[36px] lg:text-[48px] xl:text-[52px] font-black text-slate-900 leading-[1.2] tracking-tight">
                <span className="block">
                  <span className="text-teal-600">{locationName}</span>{" "}
                  <span>{serviceName || (isWaterproofing ? "건물방수" : "창틀코킹")}</span>
                </span>
                <span className="block">전문 진단</span>
              </h1>

              {/* Sub-copy (강조 문장) */}
              <div className="text-[16.5px] lg:text-[19px] font-extrabold text-slate-800 tracking-tight leading-snug">
                {isWaterproofing 
                  ? "“건물 외벽 균열과 노후 방수층으로 스며드는 누수, \n정밀 방수 시공으로 확실하게 잡아드립니다.”"
                  : "“외벽 균열과 샷시 접합부로 스며드는 빗물,\n창틀 주변 증상까지 함께 확인합니다.”"}
              </div>
            </div>

            {/* Body Text */}
            <p className="text-[14.5px] lg:text-[15px] text-slate-500 leading-relaxed max-w-[500px] whitespace-pre-line">
              {pcIntro}
            </p>

            {/* Trust Badges Grid */}
            <div className="grid grid-cols-2 gap-2.5 pt-1">
              {(isWaterproofing
                ? [
                    "외벽 균열 보강",
                    "옥상 우레탄 방수",
                    "건물 외벽 도색",
                    "상담 후 견적 안내"
                  ]
                : [
                    "재누수 원인 확인",
                    "외벽 크랙 점검",
                    "상태별 시공 구분",
                    "상담 후 견적 안내"
                  ]
              ).map((badge, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-3.5 py-2.5 bg-slate-50 border border-slate-200/50 rounded-xl text-slate-700 text-[12.5px] font-bold shadow-3xs"
                >
                  <svg className="w-3.5 h-3.5 text-teal-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="truncate">{badge}</span>
                </div>
              ))}
            </div>

            {/* Action CTA Buttons (PC에서만 유지) */}
            <div className="pt-2 flex flex-row items-center gap-3">
              <a
                href={`tel:${phone}`}
                className="px-6 py-4 w-full sm:w-auto text-center bg-teal-600 hover:bg-teal-700 text-white text-[15px] font-black rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer"
                data-cta="phone"
                aria-label="전화 상담"
              >
                전화 상담하기
              </a>
              <a
                href={kakaoChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 w-full sm:w-auto text-center bg-[#FEE500] hover:bg-[#FDD800] text-slate-900 text-[15px] font-black rounded-xl shadow-sm hover:shadow-md border border-[#EBE300]/20 transition-all cursor-pointer"
                data-cta="kakao"
                aria-label="카카오톡 채널 상담"
              >
                카톡 사진 상담
              </a>
            </div>
          </div>
        </div>

        {/* Right: Diagonal Split Visual Section (54%) */}
        <div className="relative w-full md:w-[50%] lg:w-[54%] h-auto overflow-hidden bg-white">
          {/* Diagonal clipped container */}
          <div className="relative w-full h-full lg:[clip-path:polygon(100px_0,100%_0,100%_100%,0_100%)] overflow-hidden bg-slate-900">
            {/* Actual image background */}
            <Image
              src={heroImage}
              alt={isWaterproofing ? "실제 건물 외벽 균열 방수 시공 작업" : "실제 외벽 및 창틀 주변 누수 점검 작업"}
              fill
              sizes="(max-width: 1024px) 100vw, 54vw"
              className="object-cover transition-transform duration-700 hover:scale-103"
              priority
            />

            {/* Soft Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-slate-950/10 to-transparent z-10"></div>

            {/* Diagonal Edge Gradient Mask */}
            <div className="absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-white via-teal-50/20 to-transparent z-20 pointer-events-none hidden lg:block"></div>

            {/* Overlay Text (PC에서만 유지) */}
            <div className="absolute bottom-0 right-0 p-8 sm:p-12 z-20 text-right text-white space-y-2">
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight drop-shadow-md">
                {isWaterproofing ? "실제 건물 외벽 균열 방수 시공 작업" : "실제 외벽·창틀 주변 누수 점검 작업"}
              </h3>
              <p className="text-[13.5px] sm:text-[14px] text-slate-200 max-w-sm ml-auto leading-relaxed font-medium drop-shadow-sm">
                {isWaterproofing 
                  ? "노후 건물 외벽 균열, 옥상 우레탄 들뜸까지\n완벽하게 차단합니다."
                  : "고층 세대, 외벽 크랙, 샷시 주변 틈새까지\n모든 요인을 체크합니다."}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
