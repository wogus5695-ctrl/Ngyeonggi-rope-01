import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { getMetadata } from '@/lib/seo';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getGyeonggiMunicipalityHubs } from '@/lib/hubDataResolver';

export const metadata: Metadata = getMetadata({
  title: '경기 서비스 지역 안내',
  description: '경기도 19개 시·군별 창틀코킹, 빗물누수, 외벽·옥상 방수 서비스 안내 페이지 목록입니다. 거주하시는 시·군을 선택하여 세부 지역 정보를 확인하실 수 있습니다.',
  path: '/sitemap-gyeonggi',
  noIndex: false,
});

export default function SitemapGyeonggiPage() {
  const gyeonggiHubs = getGyeonggiMunicipalityHubs();
  const gyeonggiTotalUrls = gyeonggiHubs.reduce((acc, h) => acc + h.dynamicUrls.length, 0);

  return (
    <div className="font-sans antialiased bg-slate-50 min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
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
                경기도
              </li>
            </ol>
          </nav>

          {/* Hero Header */}
          <header className="mb-12 text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/60 text-teal-700 text-[12px] font-bold tracking-wide">
              경기도 권역 안내
            </div>
            <h1 className="text-2.5xl sm:text-3.5xl font-black text-slate-900 tracking-tight leading-tight">
              경기 서비스 지역 안내
            </h1>
            <p className="text-[14.5px] text-slate-600 leading-relaxed">
              경기 19개 시·군별 창틀·누수·방수 관련 서비스 구역을 안내해 드립니다.
              원하시는 시·군을 선택하시면 해당 지역의 상세 서비스 페이지로 이동합니다.
            </p>
            <div className="pt-2 text-[13px] font-semibold text-slate-500">
              총 19개 시·군 · {gyeonggiTotalUrls.toLocaleString()}개 서비스 페이지
            </div>
          </header>

          {/* 19 City Municipality Directory Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4.5 mb-12">
            {gyeonggiHubs.map((hub) => (
              <Link
                key={hub.slug}
                href={`/sitemap-gyeonggi/${hub.slug}`}
                className="group block bg-white border border-slate-200/80 hover:border-teal-500/40 rounded-2xl p-5.5 shadow-3xs hover:shadow-sm transition-all"
              >
                <div className="flex items-center justify-between mb-2.5">
                  <h2 className="text-lg font-black text-slate-800 group-hover:text-teal-700 transition-colors">
                    {hub.displayName}
                  </h2>
                  <span className="w-7 h-7 rounded-full bg-slate-50 group-hover:bg-teal-50 text-slate-400 group-hover:text-teal-600 flex items-center justify-center transition-colors">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
                <div className="flex items-center justify-between text-[13px] text-slate-500">
                  <span>{hub.assignedRegionNames.length}개 세부 지역</span>
                  <span className="font-bold text-teal-600">{hub.dynamicUrls.length}개 서비스 페이지</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Service Scope Note */}
          <div className="bg-slate-100/70 border border-slate-200 rounded-2xl p-6 text-center text-[13.5px] text-slate-600 leading-relaxed mb-12">
            경기 북부·서부·중부·동남부·남부 전역의 창틀 실리콘 노후화, 빗물 누수, 외벽 균열 및 옥상 방수 관련 상담과 현장 확인을 진행하고 있습니다.
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-[13.5px] font-bold">
            <Link
              href="/sitemap"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-teal-600 hover:border-teal-300 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              서비스 지역 목록으로
            </Link>
            <Link
              href="/sitemap-seoul"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-teal-600 hover:border-teal-300 transition-colors"
            >
              서울특별시 지역 보기
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
