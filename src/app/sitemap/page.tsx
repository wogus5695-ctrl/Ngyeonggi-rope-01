import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { getMetadata } from '@/lib/seo';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSeoulMunicipalityHubs, getGyeonggiMunicipalityHubs } from '@/lib/hubDataResolver';

export const metadata: Metadata = getMetadata({
  title: '서비스 지역 안내',
  description: '서울·인천·경기 수도권 전역의 창틀코킹, 빗물누수, 외벽·옥상 방수 서비스 지역 안내 페이지입니다. 권역별 상세 지역을 확인할 수 있습니다.',
  path: '/sitemap',
  noIndex: false,
});

export default function SitemapRootPage() {
  const seoulHubs = getSeoulMunicipalityHubs();
  const gyeonggiHubs = getGyeonggiMunicipalityHubs();

  const seoulTotalUrls = seoulHubs.reduce((acc, h) => acc + h.dynamicUrls.length, 0);
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
              <li className="text-slate-800 font-bold" aria-current="page">
                서비스 지역
              </li>
            </ol>
          </nav>

          {/* Hero Header */}
          <header className="mb-12 text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/60 text-teal-700 text-[12px] font-bold tracking-wide">
              수도권 서비스 지역 안내
            </div>
            <h1 className="text-2.5xl sm:text-3.5xl font-black text-slate-900 tracking-tight leading-tight">
              서비스 지역 안내
            </h1>
            <p className="text-[14.5px] text-slate-600 leading-relaxed">
              틈새케어의 서울·인천·경기 수도권 서비스 구역을 권역별로 확인하실 수 있습니다.
              아래의 권역을 선택하시면 세부 시·구별 서비스 페이지로 연결됩니다.
            </p>
          </header>

          {/* Region Hub Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Seoul Card */}
            <Link
              href="/sitemap-seoul"
              className="group block bg-white border border-slate-200/80 hover:border-teal-500/40 rounded-3xl p-7 sm:p-8 shadow-xs hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center font-black text-xl group-hover:bg-teal-600 group-hover:text-white transition-colors">
                  서
                </div>
                <span className="inline-flex items-center gap-1 text-[13px] font-bold text-teal-600 group-hover:translate-x-0.5 transition-transform">
                  지역 보기
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">
                서울특별시
              </h2>
              <p className="text-[14px] text-slate-600 mb-5 leading-relaxed">
                강남구, 마포구, 은평구, 송파구 등 서울 25개 전 자치구의 창틀코킹 및 방수 서비스 안내를 확인하실 수 있습니다.
              </p>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[13px] text-slate-500 font-medium">
                <span>25개 자치구</span>
                <span className="font-bold text-slate-700">{seoulTotalUrls.toLocaleString()}개 서비스 페이지</span>
              </div>
            </Link>

            {/* Gyeonggi Card */}
            <Link
              href="/sitemap-gyeonggi"
              className="group block bg-white border border-slate-200/80 hover:border-teal-500/40 rounded-3xl p-7 sm:p-8 shadow-xs hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center font-black text-xl group-hover:bg-teal-600 group-hover:text-white transition-colors">
                  경
                </div>
                <span className="inline-flex items-center gap-1 text-[13px] font-bold text-teal-600 group-hover:translate-x-0.5 transition-transform">
                  지역 보기
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">
                경기도
              </h2>
              <p className="text-[14px] text-slate-600 mb-5 leading-relaxed">
                고양시, 수원시, 성남시, 부천시, 남양주시 등 경기 19개 시·군의 창틀코킹 및 방수 서비스 안내를 확인하실 수 있습니다.
              </p>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[13px] text-slate-500 font-medium">
                <span>19개 시·군</span>
                <span className="font-bold text-slate-700">{gyeonggiTotalUrls.toLocaleString()}개 서비스 페이지</span>
              </div>
            </Link>
          </div>

          {/* Incheon & Other Services Info Box */}
          <div className="bg-slate-100/70 border border-slate-200 rounded-2xl p-6 sm:p-7 mb-12">
            <div className="flex items-start gap-3.5">
              <span className="w-2 h-2 rounded-full bg-teal-600 mt-2 flex-shrink-0"></span>
              <div className="space-y-1">
                <h3 className="text-[15px] font-bold text-slate-800">
                  인천 및 기타 수도권 지역 상담 안내
                </h3>
                <p className="text-[13.5px] text-slate-600 leading-relaxed">
                  인천 지역 또한 현장 일정 및 상담 접수를 통해 시공 서비스를 확인하실 수 있습니다.
                  창호 및 외벽 누수 진단 관련 문의는 대표 상담 채널을 통해 안내받으실 수 있습니다.
                </p>
              </div>
            </div>
          </div>

          {/* Major Static Services Navigation */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-7 text-center">
            <h3 className="text-[14.5px] font-bold text-slate-800 mb-3">
              주요 시공 분야 안내
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-2 text-[13px] font-medium text-slate-600">
              <span className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-100">창틀코킹 / 샷시실리콘</span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-100">창틀누수 / 빗물누수</span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-100">외벽누수 / 외벽방수</span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-100">옥상방수 / 건물방수 / 지붕보수</span>
            </div>
          </div>

          {/* Back Home */}
          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-slate-500 hover:text-teal-600 text-[13.5px] font-bold transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              메인 홈으로 돌아가기
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
