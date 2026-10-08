import React from 'react';
import Link from 'next/link';
import { MunicipalityHubData } from '@/lib/hubDataResolver';
import { portfolioCases } from '@/data/portfolio';

const CAULKING_SERVICES = [
  "창틀코킹",
  "창틀누수",
  "빗물누수",
  "창틀실리콘",
  "샷시실리콘",
  "외벽누수"
];

const WATERPROOFING_SERVICES = [
  "외벽방수",
  "옥상방수",
  "건물방수",
  "외벽도색",
  "지붕방수",
  "지붕보수",
  "지붕누수"
];

interface MunicipalityHubTemplateProps {
  hub: MunicipalityHubData;
}

export default function MunicipalityHubTemplate({ hub }: MunicipalityHubTemplateProps) {
  // Hub에 연계된 포트폴리오 사례 목록 (고양, 파주, 양주)
  const relatedPortfolios = hub.portfolioRefs
    ? portfolioCases.filter(p => hub.portfolioRefs?.includes(p.id))
    : [];

  const parentRegionPath = hub.regionType === 'seoul' ? '/sitemap-seoul' : '/sitemap-gyeonggi';
  const parentRegionName = hub.regionType === 'seoul' ? '서울특별시' : '경기도';

  return (
    <div className="max-w-5xl mx-auto">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex items-center gap-2 text-[13px] text-slate-500 font-medium flex-wrap">
          <li>
            <Link href="/" className="hover:text-teal-600 transition-colors">
              홈
            </Link>
          </li>
          <li aria-hidden="true" className="text-slate-300">/</li>
          <li>
            <Link href="/sitemap" className="hover:text-teal-600 transition-colors">
              서비스 지역
            </Link>
          </li>
          <li aria-hidden="true" className="text-slate-300">/</li>
          <li>
            <Link href={parentRegionPath} className="hover:text-teal-600 transition-colors">
              {parentRegionName}
            </Link>
          </li>
          <li aria-hidden="true" className="text-slate-300">/</li>
          <li className="text-slate-800 font-bold" aria-current="page">
            {hub.displayName}
          </li>
        </ol>
      </nav>

      {/* Hero Header */}
      <header className="mb-12 text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/60 text-teal-700 text-[12px] font-bold tracking-wide">
          {parentRegionName} {hub.displayName} 서비스 구역
        </div>
        <h1 className="text-2.5xl sm:text-3.5xl font-black text-slate-900 tracking-tight leading-tight">
          {hub.displayName} 서비스 지역 안내
        </h1>
        <p className="text-[14.5px] text-slate-600 leading-relaxed">
          {hub.displayName}에서 제공하는 틈새케어 서비스 구역과 작업별 안내 페이지를 확인하실 수 있습니다.
          원하시는 지역과 작업 종류를 선택하시면 상세 진단 페이지로 연결됩니다.
        </p>
        <div className="pt-2 text-[13px] font-semibold text-slate-500">
          총 {hub.assignedRegionNames.length}개 세부 구역 · {hub.dynamicUrls.length}개 서비스 페이지
        </div>
      </header>

      {/* Portfolio Section (고양, 파주, 양주 등 포트폴리오 바인딩이 있는 경우만 렌더링) */}
      {relatedPortfolios.length > 0 && (
        <section className="mb-14 bg-white border border-teal-500/20 rounded-3xl p-6.5 sm:p-8 shadow-xs">
          <div className="flex items-center gap-2.5 mb-5 pb-3.5 border-b border-slate-100">
            <span className="w-1.5 h-5 bg-teal-600 rounded-full"></span>
            <h2 className="text-lg font-black text-slate-900 tracking-tight">
              {hub.displayName} 주요 시공 사례
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4.5">
            {relatedPortfolios.map((item) => (
              <div
                key={item.id}
                className="bg-slate-50/70 border border-slate-100 rounded-2xl p-5 space-y-2.5"
              >
                <div className="text-[12px] font-bold text-teal-600">
                  {item.serviceType} · {item.date}
                </div>
                <h3 className="text-[15px] font-black text-slate-800 leading-snug">
                  {item.title}
                </h3>
                <p className="text-[13px] text-slate-500 leading-relaxed line-clamp-2">
                  {item.description}
                </p>
                <div className="pt-1 text-[12px] text-slate-400">
                  현장 위치: {item.location}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Area-by-Area Service Navigation Sections */}
      <div className="space-y-8 mb-14">
        {hub.assignedRegionNames.map((area) => (
          <section
            key={area}
            className="bg-white border border-slate-200/80 rounded-2xl.5 p-6 sm:p-7 shadow-3xs"
          >
            <div className="flex items-center justify-between mb-5 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-4.5 bg-teal-600 rounded-full"></span>
                <h2 className="text-lg font-black text-slate-800 tracking-tight">
                  {area}
                </h2>
              </div>
              <span className="text-[12px] font-semibold text-slate-400">
                13개 시공 분야
              </span>
            </div>

            <div className="space-y-4">
              {/* Caulking Services (6개) */}
              <div>
                <div className="text-[12px] font-bold text-slate-400 mb-2">창틀 및 실리콘 시공</div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
                  {CAULKING_SERVICES.map((service) => {
                    const fullKw = `${area}-${service}`;
                    const targetUrl = `/?k=${encodeURIComponent(fullKw)}`;
                    return (
                      <Link
                        key={service}
                        href={targetUrl}
                        className="block px-2.5 py-2.5 bg-slate-50 hover:bg-teal-50/70 border border-slate-100 hover:border-teal-200 text-slate-700 hover:text-teal-700 text-[12.5px] font-bold text-center rounded-xl transition-all"
                      >
                        {area} {service}
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Waterproofing Services (7개) */}
              <div>
                <div className="text-[12px] font-bold text-slate-400 mb-2">외벽 및 방수 시공</div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-2">
                  {WATERPROOFING_SERVICES.map((service) => {
                    const fullKw = `${area}-${service}`;
                    const targetUrl = `/?k=${encodeURIComponent(fullKw)}`;
                    return (
                      <Link
                        key={service}
                        href={targetUrl}
                        className="block px-2.5 py-2.5 bg-slate-50 hover:bg-teal-50/70 border border-slate-100 hover:border-teal-200 text-slate-700 hover:text-teal-700 text-[12.5px] font-bold text-center rounded-xl transition-all"
                      >
                        {area} {service}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Bottom Navigation Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4 text-[13.5px] font-bold">
        <Link
          href={parentRegionPath}
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-teal-600 hover:border-teal-300 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {parentRegionName} 지역 목록으로
        </Link>
        <Link
          href="/sitemap"
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-teal-600 hover:border-teal-300 transition-colors"
        >
          전체 서비스 지역 안내
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
