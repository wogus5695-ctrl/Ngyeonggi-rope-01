"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function LocalDiagnostics() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#0d948805_1px,transparent_1px),linear-gradient(to_bottom,#0d948805_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-50 border border-teal-500/10 text-teal-700 text-xs font-bold rounded-full">
            누수 위험 신호
          </div>
          <h2 className="text-3xl sm:text-4.5xl font-black text-slate-900 tracking-tight leading-tight max-w-2xl mx-auto">
            이런 증상, 단순 습기가 아닐 수 있습니다
          </h2>
          <p className="text-[14.5px] sm:text-[15.5px] text-slate-500 max-w-xl mx-auto leading-relaxed">
            창틀 주변 누수는 처음에는 작은 물기처럼 보이지만, 시간이 지나면 벽지 들뜸, 곰팡이, 내부 마감재 손상으로 이어질 수 있습니다.
          </p>
        </div>

        {/* Content Layout Grid (Split screen) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Side: Warning Cards (Col span 7 or 8) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card 1 */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex items-start gap-4">
                <div className="p-3 bg-teal-50/60 rounded-2xl shrink-0 text-teal-600">
                  {/* Droplet SVG */}
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.5C12 2.5 19 9.5 19 14.5C19 18.366 15.866 21.5 12 21.5C8.134 21.5 5 18.366 5 14.5C5 9.5 12 2.5 12 2.5Z" />
                  </svg>
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-[16px] font-black text-slate-800 tracking-tight">
                    <span className="hidden sm:inline">창틀 아래쪽이 젖습니다</span>
                    <span className="inline sm:hidden">창틀 아래쪽 젖음</span>
                  </h4>
                  <p className="text-[13px] text-slate-500 leading-relaxed">비가 온 뒤 창틀 하부나 몰딩 주변에 물기가 남습니다.</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex items-start gap-4">
                <div className="p-3 bg-teal-50/60 rounded-2xl shrink-0 text-teal-600">
                  {/* Broken/Split SVG */}
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-[16px] font-black text-slate-800 tracking-tight">
                    <span className="hidden sm:inline">실리콘이 갈라졌습니다</span>
                    <span className="inline sm:hidden">실리콘 갈라짐</span>
                  </h4>
                  <p className="text-[13px] text-slate-500 leading-relaxed">샷시 주변 실리콘이 들뜨거나 틈이 벌어져 있습니다.</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex items-start gap-4">
                <div className="p-3 bg-teal-50/60 rounded-2xl shrink-0 text-teal-600">
                  {/* Damaged Home SVG */}
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-[16px] font-black text-slate-800 tracking-tight">
                    <span className="hidden sm:inline">벽지나 몰딩이 들뜹니다</span>
                    <span className="inline sm:hidden">벽지·몰딩 들뜸</span>
                  </h4>
                  <p className="text-[13px] text-slate-500 leading-relaxed">창문 아래 벽지, 몰딩, 마감재가 젖거나 변형됩니다.</p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex items-start gap-4">
                <div className="p-3 bg-teal-50/60 rounded-2xl shrink-0 text-teal-600">
                  {/* Brick/Wall SVG */}
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18V6.75a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6.75v11.25m-18 0h18" />
                  </svg>
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-[16px] font-black text-slate-800 tracking-tight">
                    <span className="hidden sm:inline">외벽에 실금이 보입니다</span>
                    <span className="inline sm:hidden">외벽 실금</span>
                  </h4>
                  <p className="text-[13px] text-slate-500 leading-relaxed">외벽 크랙을 따라 빗물이 내부로 유입될 수 있습니다.</p>
                </div>
              </div>
            </div>

            {/* Warning Announcement Box */}
            <div className="py-[26px] px-[32px] bg-teal-50/40 border border-teal-500/20 rounded-3xl flex items-start lg:items-center gap-[16px] shadow-3xs">
              <div className="p-2.5 bg-teal-600/10 rounded-xl text-teal-700 shrink-0 flex-shrink-0 mt-1 lg:mt-0">
                {/* Alert/Warning SVG */}
                <svg className="w-[30px] h-[30px]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
              </div>
              <p className="flex-1 text-[16px] sm:text-[17.5px] lg:text-[19px] font-black text-slate-900 leading-[1.4]">
                2가지 이상 해당된다면 빠른 시일 내에
                <br />
                <span className="text-teal-600 font-black">창틀·외벽 주변 누수 진단</span>이 필요합니다.
              </p>
            </div>
          </div>

          {/* Right Side: Actual Leak Case Photo (Col span 4) */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-[32px] border border-slate-100 shadow-md p-3">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/leak-symptom.jpg"
                  alt="실제 창틀 주변 실리콘 박리 및 누수 유입 현장"
                  fill
                  sizes="(max-width: 1024px) 100vw, 30vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl mt-3">
                <span className="inline-block text-[11px] font-extrabold text-teal-600 bg-teal-50 px-2 py-0.5 rounded-md mb-1.5">
                  현장 정밀 검수 사진
                </span>
                <h4 className="text-[14px] font-bold text-slate-800">창틀 주변 실리콘 박리 현장</h4>
                <p className="text-[12.5px] text-slate-500 mt-1 leading-relaxed">
                  노화된 실리콘이 틈새에서 떨어져 나가 외벽 콘크리트와의 접합부 틈새로 비가 올 때마다 누수를 일으키는 실제 상황입니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section Action CTA (Centered) */}
        <div className="text-center pt-8 border-t border-slate-200/50 mt-16 flex flex-col items-center gap-3">
          <p className="text-[13.5px] sm:text-[14.5px] text-slate-500 font-bold tracking-tight hidden sm:block">
            ※ 창틀, 실리콘, 외벽 사진만으로도 기본 상태를 먼저 확인해드릴 수 있습니다.
          </p>
          <Link
            href="#contact"
            className="inline-flex sm:hidden items-center justify-center px-8 py-4.5 w-full text-center bg-teal-600 hover:bg-teal-700 text-white text-[15.5px] font-black rounded-2xl shadow-xs hover:shadow-sm transition-all"
          >
            사진 보내고 상태 확인하기
          </Link>
        </div>
      </div>
    </section>
  );
}
