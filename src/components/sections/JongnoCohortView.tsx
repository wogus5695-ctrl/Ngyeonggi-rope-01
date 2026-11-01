"use client";

import React from "react";
import Link from "next/link";
import LocalHero from "@/components/sections/LocalHero";
import LocalFAQ from "@/components/sections/LocalFAQ";
import ContactCTA from "@/components/ContactCTA";
import { JongnoCohortData } from "@/data/jongnoCohortConfig";

interface JongnoCohortViewProps {
  data: JongnoCohortData;
  phone?: string;
}

export default function JongnoCohortView({
  data,
  phone = "010-3951-6831",
}: JongnoCohortViewProps) {
  const { region, hero, symptoms, checkList, judgmentGuide, faqs, linkMatrix } = data;

  return (
    <>
      {/* 1. Hero 섹션 (기존 LocalHero 룩앤필 100% 보존) */}
      <LocalHero
        locationName={region}
        serviceTitle={hero.headline}
        serviceName="창틀누수"
        serviceSuffix={`, ${hero.h1Sub}`}
        phone={phone}
        intro={hero.intro}
        subCopy={hero.subCopy}
        badgeText={hero.badgeText}
        keywords={hero.badges}
        isWaterproofing={false}
      />

      {/* 2. 핵심 의심 증상 섹션 (새지마요의 정보 집약 모델 반영) */}
      <section className="py-14 sm:py-18 bg-white border-b border-slate-100">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2.5">
            <span className="inline-block text-xs font-bold text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              {symptoms.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              {symptoms.headline}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {symptoms.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {symptoms.cards.map((card, idx) => (
              <div
                key={idx}
                className="bg-slate-50/70 rounded-2xl p-6 border border-slate-200/70 hover:border-teal-400 hover:shadow-md transition duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-800 font-black text-sm flex items-center justify-center mb-3">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-slate-50 border border-slate-200 rounded-xl p-4 text-center">
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              ⚠️ <strong className="text-slate-800">주의:</strong> {symptoms.cautionText}
            </p>
          </div>
        </div>
      </section>

      {/* 3. 상담 전 확인사항 (안전 점검 안내) */}
      <section className="py-14 sm:py-18 bg-slate-50/80 border-b border-slate-200/80">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2.5">
            <span className="inline-block text-xs font-bold text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              {checkList.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              {checkList.headline}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {checkList.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {checkList.items.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-black text-teal-600 uppercase tracking-wider mb-2 block">
                    Check 0{idx + 1}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-amber-50/80 border border-amber-200 rounded-xl p-4 text-center">
            <p className="text-xs sm:text-sm text-amber-900 font-medium">
              🛡️ <strong className="text-amber-950">안전 유의:</strong> {checkList.safetyNotice}
            </p>
          </div>
        </div>
      </section>

      {/* 4. 현장 점검 및 보수 판단 기준 */}
      <section className="py-14 sm:py-18 bg-white border-b border-slate-100">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2.5">
            <span className="inline-block text-xs font-bold text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              {judgmentGuide.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              {judgmentGuide.headline}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {judgmentGuide.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {judgmentGuide.points.map((pt, idx) => (
              <div
                key={idx}
                className="bg-teal-50/30 rounded-2xl p-7 border border-teal-500/15 flex flex-col justify-between hover:border-teal-400 transition"
              >
                <div>
                  <span className="text-xs font-bold text-teal-700 bg-teal-100/70 px-2.5 py-0.5 rounded mb-3 inline-block">
                    판단 기준 0{idx + 1}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-3">
                    {pt.subtitle}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pt.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQ 섹션 */}
      <div id="faq">
        <LocalFAQ
          title={`${region} 창틀누수 자주 묻는 질문`}
          faqs={faqs}
        />
      </div>

      {/* 6. 2차원 내부 링크 매트릭스 (새지마요의 크로스링크 아키텍처 벤치마킹) */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* 헤더 */}
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-teal-700 bg-teal-100/60 px-3 py-1 rounded-full uppercase tracking-wider">
              Internal Link Mesh
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {region} 및 종로구 창틀누수 연결 안내
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              동일 지역 관련 공정 및 종로구 전 지역의 창틀누수 점검 페이지로 바로 이동할 수 있습니다.
            </p>
          </div>

          {/* 그룹 A: 동일 지역 관련 작업 4개 */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-4">
            <div>
              <h3 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-teal-500"></span>
                {linkMatrix.groupA.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                {linkMatrix.groupA.description}
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {linkMatrix.groupA.links.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="p-3.5 bg-slate-50 hover:bg-teal-50 border border-slate-200 hover:border-teal-400 rounded-xl text-center text-xs sm:text-sm font-bold text-slate-700 hover:text-teal-900 transition flex items-center justify-center min-h-[48px]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* 그룹 B: 종로구 내 다른 14개 지역 창틀누수 링크 */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-4">
            <div>
              <h3 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                {linkMatrix.groupB.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                {linkMatrix.groupB.description}
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2.5">
              {linkMatrix.groupB.links.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="px-3 py-2.5 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 rounded-lg text-center text-xs font-semibold text-slate-700 hover:text-blue-900 transition flex items-center justify-center min-h-[40px]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* 그룹 C: 상위 자치구 및 지역 안내 허브 */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-4">
            <div>
              <h3 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                {linkMatrix.groupC.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                {linkMatrix.groupC.description}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {linkMatrix.groupC.links.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="p-4 bg-emerald-50/40 hover:bg-emerald-50 border border-emerald-200 rounded-xl flex flex-col justify-between hover:border-emerald-400 transition"
                >
                  <div className="font-bold text-sm text-emerald-950 flex items-center justify-between">
                    <span>{link.label}</span>
                    <span className="text-xs text-emerald-600">바로가기 →</span>
                  </div>
                  {link.description && (
                    <p className="text-xs text-slate-600 mt-1">
                      {link.description}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 7. 최종 상담 CTA (올케어서비스 김재현 / 010-3951-6831 보존) */}
      <section id="contact" className="py-20 bg-teal-50/20 relative overflow-hidden">
        <div className="max-w-[960px] mx-auto px-4 relative z-10">
          <div className="bg-white border border-teal-500/15 shadow-xl shadow-teal-950/[0.03] rounded-[32px] p-7 sm:p-10 md:p-14 text-center space-y-8">
            <div className="text-teal-600 text-[13px] font-extrabold tracking-wider uppercase">
              Consultation Request
            </div>
            
            <h2 className="text-[26px] sm:text-[32px] md:text-[36px] font-black text-slate-900 tracking-tight leading-[1.25] max-w-2xl mx-auto">
              <span className="block">{region} 창틀누수 상담,</span>
              <span className="block mt-1 sm:mt-2 text-teal-600">
                실내외 상태부터 꼼꼼히 확인하세요
              </span>
            </h2>

            <p className="text-[14.5px] sm:text-[15.5px] text-slate-500 leading-[1.7] max-w-[620px] mx-auto">
              젖은 위치만 대충 덮으면 다음 비에 다시 샐 수 있습니다.
              창틀 실리콘 노후 상태와 외벽 접합부를 함께 확인하여 꼭 필요한 보수 범위만 정직하게 안내해 드립니다.
            </p>

            <div className="pt-2">
              <ContactCTA phone={phone} isWaterproofing={false} />
            </div>

            <div className="pt-4 border-t border-slate-100 max-w-md mx-auto space-y-3">
              <div className="text-[13px] font-bold text-slate-400">
                사전 사진 상담 확인 항목
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                {["창틀 하부 레일", "실리콘 들뜸·갈라짐", "모서리 벽지 물자국", "외벽 접합부"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-teal-50 text-teal-800 font-extrabold text-[12px] rounded-full border border-teal-500/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2 text-[12.5px] text-slate-400 font-medium leading-relaxed">
              현장 사진을 보내주시면 부분 보수 또는 제거 후 재시공 필요 여부를 먼저 확인해 드립니다.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
