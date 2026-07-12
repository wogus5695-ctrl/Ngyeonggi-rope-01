import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { getMetadata } from '@/lib/seo';
import {
  REGIONS_DB,
  SEOUL_EAST_REGIONS_DB,
  SEOUL_WEST_REGIONS_DB,
  SEOUL_CENTER_REGIONS_DB,
  SEOUL_SOUTH_EAST_REGIONS_DB,
  SEOUL_SOUTH_WEST_REGIONS_DB,
  GYEONGGI_WEST_REGIONS_DB,
  GYEONGGI_MID_REGIONS_DB,
  GYEONGGI_SOUTH_EAST_REGIONS_DB,
  GYEONGGI_SOUTH_REGIONS_DB,
  SERVICES
} from '@/data/sitemapKeywords';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = getMetadata({
  title: '수도권 창틀코킹 및 방수 시공 서비스 지역 안내 | 틈새케어',
  description: '경기 북부/서부/중부/동남부/남부 및 서울 전 지역(동북·서북·도심·동남·서남권)의 창틀코킹, 빗물누수, 외벽방수 정밀 시공 페이지 리스트입니다.',
  path: '/sitemap-gyeonggi-north',
  noIndex: false, // 네이버 및 구글의 색인(인덱싱)을 위해 noindex 해제
});

export default function SitemapGyeonggiNorthPage() {
  const waterproofingServices = ["외벽방수", "옥상방수", "건물방수", "외벽도색"];

  const gyeonggiWestCaulkingGroups = [
    { title: "경기 서북·서부권 창틀코킹 서비스 안내", db: GYEONGGI_WEST_REGIONS_DB },
    { title: "경기 중부권 창틀코킹 서비스 안내", db: GYEONGGI_MID_REGIONS_DB },
    { title: "경기 동남권 창틀코킹 서비스 안내", db: GYEONGGI_SOUTH_EAST_REGIONS_DB },
    { title: "경기 남부권 창틀코킹 서비스 안내", db: GYEONGGI_SOUTH_REGIONS_DB },
  ];

  const gyeonggiWestWaterproofGroups = [
    { title: "경기 서북·서부권 방수 시공 서비스 안내", db: GYEONGGI_WEST_REGIONS_DB },
    { title: "경기 중부권 방수 시공 서비스 안내", db: GYEONGGI_MID_REGIONS_DB },
    { title: "경기 동남권 방수 시공 서비스 안내", db: GYEONGGI_SOUTH_EAST_REGIONS_DB },
    { title: "경기 남부권 방수 시공 서비스 안내", db: GYEONGGI_SOUTH_REGIONS_DB },
  ];

  const seoulCaulkingGroups = [
    { title: "서울 동북권 창틀코킹 서비스 안내", db: SEOUL_EAST_REGIONS_DB },
    { title: "서울 서북권 창틀코킹 서비스 안내", db: SEOUL_WEST_REGIONS_DB },
    { title: "서울 도심권 창틀코킹 서비스 안내", db: SEOUL_CENTER_REGIONS_DB },
    { title: "서울 동남권 창틀코킹 서비스 안내", db: SEOUL_SOUTH_EAST_REGIONS_DB },
    { title: "서울 서남권 창틀코킹 서비스 안내", db: SEOUL_SOUTH_WEST_REGIONS_DB },
  ];

  const seoulWaterproofGroups = [
    { title: "서울 동북권 방수 시공 서비스 안내", db: SEOUL_EAST_REGIONS_DB },
    { title: "서울 서북권 방수 시공 서비스 안내", db: SEOUL_WEST_REGIONS_DB },
    { title: "서울 도심권 방수 시공 서비스 안내", db: SEOUL_CENTER_REGIONS_DB },
    { title: "서울 동남권 방수 시공 서비스 안내", db: SEOUL_SOUTH_EAST_REGIONS_DB },
    { title: "서울 서남권 방수 시공 서비스 안내", db: SEOUL_SOUTH_WEST_REGIONS_DB },
  ];

  const allRegionsForTextArea = [
    ...REGIONS_DB,
    ...GYEONGGI_WEST_REGIONS_DB,
    ...GYEONGGI_MID_REGIONS_DB,
    ...GYEONGGI_SOUTH_EAST_REGIONS_DB,
    ...GYEONGGI_SOUTH_REGIONS_DB,
    ...SEOUL_EAST_REGIONS_DB,
    ...SEOUL_WEST_REGIONS_DB,
    ...SEOUL_CENTER_REGIONS_DB,
    ...SEOUL_SOUTH_EAST_REGIONS_DB,
    ...SEOUL_SOUTH_WEST_REGIONS_DB
  ];

  return (
    <div className="font-sans antialiased bg-slate-50 min-h-screen flex flex-col">
      <Header hideKakao={true} />
      
      <main className="flex-grow pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <header className="mb-16 text-center max-w-3xl mx-auto space-y-5">
            <div className="text-teal-600 text-[13px] font-extrabold tracking-wider uppercase">
              Index Directory
            </div>
            
            <h1 className="text-3xl sm:text-4.5xl font-black text-slate-900 tracking-tight leading-tight">
              서비스 제공 구역 안내
            </h1>
            
            <p className="text-[14.5px] sm:text-[15.5px] text-slate-600 leading-relaxed bg-white border border-teal-500/5 p-6 rounded-3xl shadow-3xs">
              틈새케어는 경기 북부 및 서울 전 권역 지역의 창틀코킹, 창틀누수, 빗물누수, 창틀실리콘, 샷시실리콘, 외벽누수 및 외벽방수, 옥상방수, 건물방수, 외벽도색 등 방수 시공 상담을 지원합니다.
              각 지역 현장에 매칭된 기밀 실링 및 방수 전담 엔지니어가 책임 시공을 약속합니다.
            </p>
          </header>

          {/* ==================== 1. 경기 북부 창틀코킹 서비스 안내 ==================== */}
          <section className="space-y-8">
            <div className="flex items-center gap-3.5 mb-2 pb-4 border-b border-slate-200">
              <span className="w-1.5 h-6 bg-teal-600 rounded-full"></span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                경기 북부 창틀코킹 서비스 안내
              </h2>
            </div>
            <div className="space-y-8">
              {REGIONS_DB.map((region, idx) => {
                const combinedKeywords: { label: string; area: string; service: string }[] = [];
                region.areas.forEach(area => {
                  SERVICES.forEach(service => {
                    combinedKeywords.push({ 
                      label: `${area} ${service}`,
                      area: area,
                      service: service
                    });
                  });
                });

                return (
                  <div
                    key={idx}
                    className="bg-white border border-teal-500/5 rounded-[32px] p-6 sm:p-8 shadow-xs"
                  >
                    <div className="flex items-center gap-3 mb-6 pb-2.5 border-b border-slate-100">
                      <span className="w-1.5 h-4.5 bg-teal-500/60 rounded-full"></span>
                      <h3 className="text-lg font-bold text-slate-800 tracking-tight">
                        {region.city} ({region.areas.length}개 지역명)
                      </h3>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                      {combinedKeywords.map((kw, i) => {
                        const targetUrl = `/?k=${encodeURIComponent(`${kw.area}-${kw.service}`)}`;
                        return (
                          <Link
                            key={i}
                            href={targetUrl}
                            className="block px-3 py-3.5 bg-slate-50/50 hover:bg-teal-50/55 border border-slate-100 hover:border-teal-200/50 text-slate-600 hover:text-teal-700 text-[13px] font-bold text-center rounded-2xl transition-all shadow-3xs hover:shadow-xs"
                          >
                            {kw.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* ==================== 1-2. 경기 서북·서부권 창틀코킹 서비스 안내 ==================== */}
          {gyeonggiWestCaulkingGroups.map((group, groupIdx) => (
            <section key={groupIdx} className="mt-20 space-y-8">
              <div className="flex items-center gap-3.5 mb-2 pb-4 border-b border-slate-200">
                <span className="w-1.5 h-6 bg-teal-600 rounded-full"></span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  {group.title}
                </h2>
              </div>
              <div className="space-y-8">
                {group.db.map((region, idx) => {
                  const combinedKeywords: { label: string; area: string; service: string }[] = [];
                  region.areas.forEach(area => {
                    SERVICES.forEach(service => {
                      combinedKeywords.push({ 
                        label: `${area} ${service}`,
                        area: area,
                        service: service
                      });
                    });
                  });

                  return (
                    <div
                      key={idx}
                      className="bg-white border border-teal-500/5 rounded-[32px] p-6 sm:p-8 shadow-xs"
                    >
                      <div className="flex items-center gap-3 mb-6 pb-2.5 border-b border-slate-100">
                        <span className="w-1.5 h-4.5 bg-teal-500/60 rounded-full"></span>
                        <h3 className="text-lg font-bold text-slate-800 tracking-tight">
                          {region.city} ({region.areas.length}개 지역명)
                        </h3>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                        {combinedKeywords.map((kw, i) => {
                          const targetUrl = `/?k=${encodeURIComponent(`${kw.area}-${kw.service}`)}`;
                          return (
                            <Link
                              key={i}
                              href={targetUrl}
                              className="block px-3 py-3.5 bg-slate-50/50 hover:bg-teal-50/55 border border-slate-100 hover:border-teal-200/50 text-slate-600 hover:text-teal-700 text-[13px] font-bold text-center rounded-2xl transition-all shadow-3xs hover:shadow-xs"
                            >
                              {kw.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}

          {/* ==================== 2. 서울 권역별 창틀코킹 서비스 안내 ==================== */}
          {seoulCaulkingGroups.map((group, groupIdx) => (
            <section key={groupIdx} className="mt-20 space-y-8">
              <div className="flex items-center gap-3.5 mb-2 pb-4 border-b border-slate-200">
                <span className="w-1.5 h-6 bg-teal-600 rounded-full"></span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  {group.title}
                </h2>
              </div>
              <div className="space-y-8">
                {group.db.map((region, idx) => {
                  const combinedKeywords: { label: string; area: string; service: string }[] = [];
                  region.areas.forEach(area => {
                    SERVICES.forEach(service => {
                      combinedKeywords.push({ 
                        label: `${area} ${service}`,
                        area: area,
                        service: service
                      });
                    });
                  });

                  return (
                    <div
                      key={idx}
                      className="bg-white border border-teal-500/5 rounded-[32px] p-6 sm:p-8 shadow-xs"
                    >
                      <div className="flex items-center gap-3 mb-6 pb-2.5 border-b border-slate-100">
                        <span className="w-1.5 h-4.5 bg-teal-500/60 rounded-full"></span>
                        <h3 className="text-lg font-bold text-slate-800 tracking-tight">
                          {region.city} ({region.areas.length}개 지역명)
                        </h3>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                        {combinedKeywords.map((kw, i) => {
                          const targetUrl = `/?k=${encodeURIComponent(`${kw.area}-${kw.service}`)}`;
                          return (
                            <Link
                              key={i}
                              href={targetUrl}
                              className="block px-3 py-3.5 bg-slate-50/50 hover:bg-teal-50/55 border border-slate-100 hover:border-teal-200/50 text-slate-600 hover:text-teal-700 text-[13px] font-bold text-center rounded-2xl transition-all shadow-3xs hover:shadow-xs"
                            >
                              {kw.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}

          {/* ==================== 3. 경기 북부 방수 시공 서비스 안내 ==================== */}
          <section className="mt-20 pt-16 border-t border-slate-200/60 space-y-8">
            <div className="flex items-center gap-3.5 mb-2 pb-4 border-b border-slate-200">
              <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                경기 북부 방수 시공 서비스 안내
              </h2>
            </div>
            <div className="space-y-8">
              {REGIONS_DB.map((region, idx) => {
                const combinedWaterproofingKeywords: { label: string; area: string; service: string }[] = [];
                region.areas.forEach(area => {
                  waterproofingServices.forEach(service => {
                    combinedWaterproofingKeywords.push({
                      label: `${area}-${service}`,
                      area: area,
                      service: service
                    });
                  });
                });

                return (
                  <div
                    key={idx}
                    className="bg-white border border-blue-500/5 rounded-[32px] p-6 sm:p-8 shadow-xs"
                  >
                    <div className="flex items-center gap-3 mb-6 pb-2.5 border-b border-slate-100">
                      <span className="w-1.5 h-4.5 bg-blue-500/60 rounded-full"></span>
                      <h3 className="text-lg font-bold text-slate-800 tracking-tight">
                        {region.city} ({region.areas.length}개 지역명)
                      </h3>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                      {combinedWaterproofingKeywords.map((kw, i) => {
                        const targetUrl = `/?k=${encodeURIComponent(kw.label)}`;
                        return (
                          <Link
                            key={i}
                            href={targetUrl}
                            className="block px-3 py-3.5 bg-blue-50/30 border border-blue-100/50 hover:bg-blue-100/40 text-blue-900 hover:text-blue-700 text-[13px] font-semibold text-center rounded-2xl transition-all shadow-3xs hover:shadow-xs"
                          >
                            {kw.area}-{kw.service}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* ==================== 3-2. 경기 서북·서부권 방수 시공 서비스 안내 ==================== */}
          {gyeonggiWestWaterproofGroups.map((group, groupIdx) => (
            <section key={groupIdx} className="mt-20 space-y-8">
              <div className="flex items-center gap-3.5 mb-2 pb-4 border-b border-slate-200">
                <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  {group.title}
                </h2>
              </div>
              <div className="space-y-8">
                {group.db.map((region, idx) => {
                  const combinedWaterproofingKeywords: { label: string; area: string; service: string }[] = [];
                  region.areas.forEach(area => {
                    waterproofingServices.forEach(service => {
                      combinedWaterproofingKeywords.push({
                        label: `${area}-${service}`,
                        area: area,
                        service: service
                      });
                    });
                  });

                  return (
                    <div
                      key={idx}
                      className="bg-white border border-blue-500/5 rounded-[32px] p-6 sm:p-8 shadow-xs"
                    >
                      <div className="flex items-center gap-3 mb-6 pb-2.5 border-b border-slate-100">
                        <span className="w-1.5 h-4.5 bg-blue-500/60 rounded-full"></span>
                        <h3 className="text-lg font-bold text-slate-800 tracking-tight">
                          {region.city} ({region.areas.length}개 지역명)
                        </h3>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                        {combinedWaterproofingKeywords.map((kw, i) => {
                          const targetUrl = `/?k=${encodeURIComponent(kw.label)}`;
                          return (
                            <Link
                              key={i}
                              href={targetUrl}
                              className="block px-3 py-3.5 bg-blue-50/30 border border-blue-100/50 hover:bg-blue-100/40 text-blue-900 hover:text-blue-700 text-[13px] font-semibold text-center rounded-2xl transition-all shadow-3xs hover:shadow-xs"
                            >
                              {kw.area}-{kw.service}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}

          {/* ==================== 4. 서울 권역별 방수 시공 서비스 안내 ==================== */}
          {seoulWaterproofGroups.map((group, groupIdx) => (
            <section key={groupIdx} className="mt-20 space-y-8">
              <div className="flex items-center gap-3.5 mb-2 pb-4 border-b border-slate-200">
                <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  {group.title}
                </h2>
              </div>
              <div className="space-y-8">
                {group.db.map((region, idx) => {
                  const combinedWaterproofingKeywords: { label: string; area: string; service: string }[] = [];
                  region.areas.forEach(area => {
                    waterproofingServices.forEach(service => {
                      combinedWaterproofingKeywords.push({
                        label: `${area}-${service}`,
                        area: area,
                        service: service
                      });
                    });
                  });

                  return (
                    <div
                      key={idx}
                      className="bg-white border border-blue-500/5 rounded-[32px] p-6 sm:p-8 shadow-xs"
                    >
                      <div className="flex items-center gap-3 mb-6 pb-2.5 border-b border-slate-100">
                        <span className="w-1.5 h-4.5 bg-blue-500/60 rounded-full"></span>
                        <h3 className="text-lg font-bold text-slate-800 tracking-tight">
                          {region.city} ({region.areas.length}개 지역명)
                        </h3>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                        {combinedWaterproofingKeywords.map((kw, i) => {
                          const targetUrl = `/?k=${encodeURIComponent(kw.label)}`;
                          return (
                            <Link
                              key={i}
                              href={targetUrl}
                              className="block px-3 py-3.5 bg-blue-50/30 border border-blue-100/50 hover:bg-blue-100/40 text-blue-900 hover:text-blue-700 text-[13px] font-semibold text-center rounded-2xl transition-all shadow-3xs hover:shadow-xs"
                            >
                              {kw.area}-{kw.service}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}

          {/* 네이버 서치어드바이저 제출용 URL 일괄 복사 텍스트 에어리어 */}
          <section className="mt-20 pt-16 border-t border-slate-200/60">
            <header className="mb-8 text-center max-w-3xl mx-auto space-y-4">
              <h2 className="text-2xl font-bold text-slate-800 tracking-tight">
                네이버 서치어드바이저 수집용 URL 목록
              </h2>
              <p className="text-[13.5px] text-slate-500">
                수집 요청 및 등록 시 아래의 원본 주소 목록을 전체 드래그하여 간편하게 복사할 수 있습니다.
              </p>
            </header>
            <div className="bg-slate-900 rounded-[32px] p-6.5 sm:p-9 shadow-xs">
              <textarea
                readOnly
                className="w-full h-64 bg-slate-950 text-emerald-400 font-mono text-[11px] p-4.5 rounded-2xl border border-slate-800 focus:outline-hidden resize-y"
                value={(() => {
                  const urls: string[] = [];
                  const baseUrl = "https://www.teumsaecare.co.kr";
                  const waterproofingServices = ["외벽방수", "옥상방수", "건물방수", "외벽도색"];

                  // 1. 창틀코킹
                  allRegionsForTextArea.forEach(region => {
                    region.areas.forEach(area => {
                      SERVICES.forEach(service => {
                        urls.push(`${baseUrl}/?k=${encodeURIComponent(`${area}-${service}`)}`);
                      });
                    });
                  });

                  // 2. 방수시공
                  allRegionsForTextArea.forEach(region => {
                    region.areas.forEach(area => {
                      waterproofingServices.forEach(service => {
                        urls.push(`${baseUrl}/?k=${encodeURIComponent(`${area}-${service}`)}`);
                      });
                    });
                  });

                  return urls.join('\n');
                })()}
              />
            </div>
          </section>

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
