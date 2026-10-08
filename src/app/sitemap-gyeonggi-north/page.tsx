import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { getMetadata } from '@/lib/seo';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getGyeonggiMunicipalityHubs } from '@/lib/hubDataResolver';

export const metadata: Metadata = getMetadata({
  title: '경기북부 및 수도권 서비스 지역 안내',
  description: '틈새케어의 경기북부 및 수도권 서비스 지역 안내 페이지입니다. 체계적인 권역별 계층 구조를 통해 거주하시는 지역의 상세 서비스 정보를 확인하실 수 있습니다.',
  path: '/sitemap-gyeonggi-north',
  noIndex: false, // 기존 색인 정책 유지 (P1-B-5에서 최종 검토)
});

export default function SitemapGyeonggiNorthPage() {
  const gyeonggiHubs = getGyeonggiMunicipalityHubs();

  // 기존 REGIONS_DB(고양, 파주, 양주, 구리, 의정부, 동두천, 남양주) 중심의 경기북부 주요 시군 필터
  const gyeonggiNorthSlugs = [
    'goyang',
    'paju',
    'yangju',
    'uijeongbu-si',
    'dongducheon-si',
    'namyangju-si',
    'guri-si'
  ];

  const northHubs = gyeonggiHubs.filter(h => gyeonggiNorthSlugs.includes(h.slug));

  return (
    <div className="font-sans antialiased bg-slate-50 min-h-screen flex flex-col">
      <Header hideKakao={true} />

      <main className="flex-grow pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-[13px] text-slate-500 font-medium">
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
              <li className="text-slate-800 font-bold" aria-current="page">
                기존 경기북부 지역 안내
              </li>
            </ol>
          </nav>

          {/* Hero Header */}
          <header className="mb-10 text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/60 text-teal-700 text-[12px] font-bold tracking-wide">
              서비스 지역 안내 체계 개편
            </div>
            <h1 className="text-2.5xl sm:text-3.5xl font-black text-slate-900 tracking-tight leading-tight">
              경기북부 및 수도권 서비스 지역 안내
            </h1>
            <p className="text-[14.5px] text-slate-600 leading-relaxed">
              기존 서비스 지역 페이지가 사용자와 검색엔진이 보다 편리하게 탐색할 수 있도록
              권역별·지자체별 계층 구조로 개편되었습니다.
            </p>
          </header>

          {/* Migration Bridge Notice */}
          <section className="mb-10 bg-white border border-teal-500/20 rounded-3xl p-6.5 sm:p-8 shadow-xs space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-5 bg-teal-600 rounded-full"></span>
              <h2 className="text-lg font-black text-slate-900 tracking-tight">
                신규 서비스 지역 디렉토리 안내
              </h2>
            </div>
            <p className="text-[14px] text-slate-600 leading-relaxed">
              기존 단일 페이지에 집중되었던 서비스 구역 정보가 <strong>서울특별시 25개 자치구</strong> 및 <strong>경기도 19개 시·군</strong> 전용 허브로 분할 개편되었습니다. 아래의 링크를 통해 원하시는 지역의 상세 서비스 페이지를 편리하게 확인하실 수 있습니다.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <Link
                href="/sitemap-gyeonggi"
                className="group flex items-center justify-between p-4.5 rounded-2xl bg-slate-50 hover:bg-teal-50/70 border border-slate-200 hover:border-teal-300 transition-all"
              >
                <div>
                  <div className="text-[15px] font-black text-slate-800 group-hover:text-teal-700">
                    경기도 전체 시·군 보기
                  </div>
                  <div className="text-[12.5px] text-slate-500">
                    19개 시·군별 상세 안내 페이지
                  </div>
                </div>
                <svg className="w-5 h-5 text-slate-400 group-hover:text-teal-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              <Link
                href="/sitemap-seoul"
                className="group flex items-center justify-between p-4.5 rounded-2xl bg-slate-50 hover:bg-teal-50/70 border border-slate-200 hover:border-teal-300 transition-all"
              >
                <div>
                  <div className="text-[15px] font-black text-slate-800 group-hover:text-teal-700">
                    서울특별시 전체 자치구 보기
                  </div>
                  <div className="text-[12.5px] text-slate-500">
                    25개 자치구별 상세 안내 페이지
                  </div>
                </div>
                <svg className="w-5 h-5 text-slate-400 group-hover:text-teal-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </section>

          {/* 경기북부 주요 시·군 바로가기 */}
          <section className="mb-10 bg-white border border-slate-200/80 rounded-3xl p-6.5 sm:p-8 shadow-3xs space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-5 bg-teal-600 rounded-full"></span>
              <h2 className="text-lg font-black text-slate-900 tracking-tight">
                경기북부 주요 시·군 서비스 안내
              </h2>
            </div>
            <p className="text-[13.5px] text-slate-500 leading-relaxed">
              기존 페이지에서 주로 안내되었던 경기북부 주요 시·군의 신규 허브 페이지 목록입니다.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
              {northHubs.map((hub) => (
                <Link
                  key={hub.slug}
                  href={`/sitemap-gyeonggi/${hub.slug}`}
                  className="group block p-4 rounded-xl bg-slate-50 hover:bg-teal-50/60 border border-slate-100 hover:border-teal-200 transition-all text-left"
                >
                  <div className="text-[14.5px] font-black text-slate-800 group-hover:text-teal-700">
                    {hub.displayName}
                  </div>
                  <div className="text-[12px] text-slate-500">
                    {hub.assignedRegionNames.length}개 세부 구역 ({hub.dynamicUrls.length}개 페이지)
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Bottom Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-[13.5px] font-bold">
            <Link
              href="/sitemap"
              className="inline-flex items-center gap-1.5 px-4.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-teal-600 hover:border-teal-300 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              서비스 지역 루트 안내로
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 px-4.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-teal-600 hover:border-teal-300 transition-colors"
            >
              메인 홈으로 이동
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
