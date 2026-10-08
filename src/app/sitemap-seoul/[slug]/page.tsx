import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MunicipalityHubTemplate from "@/components/hub/MunicipalityHubTemplate";
import { getSeoulHubBySlug, getSeoulMunicipalityHubs } from '@/lib/hubDataResolver';
import { getMetadata } from '@/lib/seo';

interface Props {
  params: Promise<{ slug: string }>;
}

/**
 * 25개 서울 자치구 슬러그 정적 파라미터 사전 생성 (SSG)
 */
export async function generateStaticParams() {
  const seoulHubs = getSeoulMunicipalityHubs();
  return seoulHubs.map(hub => ({
    slug: hub.slug
  }));
}

/**
 * 서울 자치구 Hub 동적 메타데이터 생성
 * 임시 안전 정책: noindex, follow 적용
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const hub = getSeoulHubBySlug(slug);

  if (!hub) {
    return {
      title: '페이지를 찾을 수 없습니다 | 틈새케어',
      robots: { index: false, follow: false }
    };
  }

  return getMetadata({
    title: `${hub.displayName} 서비스 지역 안내`,
    description: `서울특별시 ${hub.displayName} 관할 ${hub.assignedRegionNames.length}개 세부 구역의 창틀코킹, 빗물누수, 외벽·옥상 방수 서비스 안내 페이지 목록입니다.`,
    path: `/sitemap-seoul/${hub.slug}`,
    noIndex: true, // P1-B-3 로컬 임시 안전 정책: noindex, follow
  });
}

export default async function SeoulMunicipalityHubPage({ params }: Props) {
  const { slug } = await params;
  const hub = getSeoulHubBySlug(slug);

  if (!hub) {
    notFound();
  }

  return (
    <div className="font-sans antialiased bg-slate-50 min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <MunicipalityHubTemplate hub={hub} />
      </main>

      <Footer />
    </div>
  );
}
