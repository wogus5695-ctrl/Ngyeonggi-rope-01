import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { getMetadata } from '@/lib/seo';
import { REGIONS_DB, SERVICES } from '@/data/sitemapKeywords';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = getMetadata({
  title: '경기 북부 창틀코킹 시공 서비스 지역 안내 | 레인가드',
  description: '고양시, 파주시, 양주시를 비롯한 경기 북부 전 지역의 창틀코킹, 창틀누수, 빗물누수, 외벽누수 정밀 시공 페이지 리스트입니다.',
  path: '/sitemap-gyeonggi-north',
  noIndex: false, // 네이버 및 구글의 색인(인덱싱)을 위해 noindex 해제
});

export default function SitemapGyeonggiNorthPage() {
  return (
    <div className="font-sans antialiased bg-slate-50 min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <header className="mb-16 text-center max-w-3xl mx-auto space-y-5">
            <div className="text-teal-600 text-[13px] font-extrabold tracking-wider uppercase">
              Index Directory
            </div>
            
            <h1 className="text-3xl sm:text-4.5xl font-black text-slate-900 tracking-tight leading-tight">
              경기 북부 시공 구역 안내
            </h1>
            
            {/* 상단 기획 안내 문구 (Thin Content 방지) */}
            <p className="text-[14.5px] sm:text-[15.5px] text-slate-600 leading-relaxed bg-white border border-teal-500/5 p-6 rounded-3xl shadow-3xs">
              레인가드는 경기 북부 지역의 창틀코킹, 창틀누수, 빗물누수, 창틀실리콘, 샷시실리콘, 외벽누수 상담을 지원합니다. 
              아래 지역별 서비스 페이지를 통해 필요한 작업 내용을 확인할 수 있습니다. 
              각 지역 현장에 매칭된 기밀 실링 전담 엔지니어가 책임 시공을 약속합니다.
            </p>
          </header>

          {/* City Lists */}
          <div className="space-y-12">
            {REGIONS_DB.map((region, idx) => {
              // 해당 시의 49개 지역명 리스트와 6대 서비스 조합 빌드
              const combinedKeywords: { label: string; area: string; service: string }[] = [];
              
              region.areas.forEach(area => {
                SERVICES.forEach(service => {
                  combinedKeywords.push({ 
                    label: `${area} ${service}`, // "지역명 작업명" 형태로 노출
                    area: area,
                    service: service
                  });
                });
              });

              return (
                <section
                  key={idx}
                  className="bg-white border border-teal-500/5 rounded-[32px] p-6.5 sm:p-9 shadow-xs"
                >
                  {/* City title with teal side accent */}
                  <div className="flex items-center gap-3.5 mb-8 pb-4 border-b border-slate-100">
                    <span className="w-1.5 h-6 bg-teal-600 rounded-full"></span>
                    <h2 className="text-2xl font-black text-slate-800 tracking-tight">
                      {region.city} 서비스 구역 ({region.areas.length}개 지역명)
                    </h2>
                  </div>

                  {/* Keywords grid display */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {combinedKeywords.map((kw, i) => {
                      // 실제 랜딩 페이지 URL (/?k=지역명-작업명)
                      const targetUrl = `/?k=${encodeURIComponent(`${kw.area}-${kw.service}`)}`;

                      return (
                        <Link
                          key={i}
                          href={targetUrl}
                          className="block px-3 py-4 bg-slate-50/50 hover:bg-teal-50/55 border border-slate-100 hover:border-teal-200/50 text-slate-600 hover:text-teal-700 text-[13px] font-bold text-center rounded-2xl transition-all shadow-3xs hover:shadow-xs"
                        >
                          {kw.label}
                        </Link>
                      );
                    })}
                  </div>
                </section>
              );
            })}
          </div>

          {/* Back Home */}
          <div className="mt-16 text-center">
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
