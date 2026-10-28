import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs, { BreadcrumbItem } from '@/components/Breadcrumbs';
import { getArticleByPath } from '@/data/articleRegistry';
import { BASE_URL } from '@/lib/sitemapHelpers';

interface PageProps {
  params: Promise<{
    district: string;
    slug: string[];
  }>;
}

function resolveArticlePath(district: string, slug: string[]): string | null {
  if (!district || !slug || slug.length === 0 || slug.length > 2) {
    return null;
  }

  // Construct target candidate path
  const candidatePath = slug.length === 1
    ? `/guide/seoul/${district}/${slug[0]}`
    : `/guide/seoul/${district}/${slug[0]}/${slug[1]}`;

  // Validate against registry SSOT
  const article = getArticleByPath(candidatePath);
  if (!article) {
    return null;
  }

  return article.path;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { district, slug } = await params;
  const path = resolveArticlePath(district, slug);

  if (!path) {
    notFound();
  }

  const article = getArticleByPath(path);

  // Status gate: Only PUBLISHED articles get public metadata
  if (!article || article.contentStatus !== 'PUBLISHED') {
    notFound();
  }

  const canonicalUrl = `${BASE_URL}${article.path}`;
  const description = article.bodyLines.slice(0, 2).join(' ');

  const isTileService = article.service === '외벽타일보수' || article.service === '외벽타일교체';
  const isWaterproofing = isTileService || article.service === '건물방수' || article.service === '외벽도색';
  const ogImageUrl = isWaterproofing ? '/og-image-waterproof.jpg' : '/og-image.png';

  return {
    metadataBase: new URL(BASE_URL),
    title: article.title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: `${article.title} | 틈새케어`,
      description,
      url: canonicalUrl,
      siteName: '틈새케어',
      locale: 'ko_KR',
      type: 'article',
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${article.title} - 틈새케어`,
        },
      ],
    },
  };
}

export default async function GuideArticlePage({ params }: PageProps) {
  const { district, slug } = await params;
  const path = resolveArticlePath(district, slug);

  if (!path) {
    notFound();
  }

  const article = getArticleByPath(path);

  // Publication Status Hard Gate: DRAFT, APPROVED or missing returns 404
  if (!article || article.contentStatus !== 'PUBLISHED') {
    notFound();
  }

  const isTileService = article.service === '외벽타일보수' || article.service === '외벽타일교체';
  const isWaterproofing = isTileService || article.service === '건물방수' || article.service === '외벽도색';
  const phone = isWaterproofing ? '010-4667-5568' : '010-3951-6831';

  const breadcrumbItems: BreadcrumbItem[] = [
    { label: '서울', href: '/sitemap-seoul' },
    { label: article.parentDistrict, href: `/sitemap-seoul/seoul-${article.districtSlug}` },
  ];

  if (article.regionLevel === 'dong') {
    breadcrumbItems.push({ label: article.region });
  }

  breadcrumbItems.push({
    label: article.service,
    active: true,
  });

  const fullUrl = `${BASE_URL}${article.path}`;
  const summaryDesc = article.bodyLines.slice(0, 2).join(' ');

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: summaryDesc,
    datePublished: article.publishedAt,
    mainEntityOfPage: fullUrl,
    publisher: {
      '@type': 'Organization',
      name: '틈새케어',
      url: BASE_URL,
    },
    url: fullUrl,
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: '홈',
        item: BASE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: '서울',
        item: `${BASE_URL}/sitemap-seoul`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: article.parentDistrict,
        item: `${BASE_URL}/sitemap-seoul/seoul-${article.districtSlug}`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: article.title,
        item: fullUrl,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800">
      <Header phone={phone} isWaterproofing={isWaterproofing} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-6 md:p-10">
          <Breadcrumbs items={breadcrumbItems} />

          <header className="border-b border-slate-100 pb-6 mb-8 mt-4">
            <span className="inline-block text-xs font-semibold tracking-wider text-teal-700 bg-teal-50 border border-teal-100/80 px-2.5 py-1 rounded-full mb-3">
              {article.region} · {article.service} 기술 점검 리포트
            </span>
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">
              {article.title}
            </h1>
          </header>

          <article className="space-y-6 text-slate-700 leading-relaxed text-base md:text-lg">
            {article.sections && article.sections.length > 0 ? (
              <div className="space-y-8">
                {article.sections.map((sec, sIdx) => (
                  <section key={sIdx} className="space-y-3">
                    <h2 className="text-lg md:text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                      <span className="w-1.5 h-4 bg-teal-600 rounded-full inline-block"></span>
                      {sec.heading}
                    </h2>
                    {sec.paragraphs.map((p, pIdx) => (
                      <p key={pIdx} className="leading-relaxed text-slate-700">
                        {p}
                      </p>
                    ))}
                  </section>
                ))}
              </div>
            ) : (
              article.bodyLines.map((line, idx) => (
                <p key={idx} className="leading-relaxed">
                  {line}
                </p>
              ))
            )}
          </article>

          <div className="mt-10 pt-6 border-t border-slate-100">
            <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-slate-800 mb-1">
                  현장 시공 및 세부 작업 절차 안내
                </p>
                <p className="text-xs text-slate-500">
                  {article.region} 지역의 상세한 시공 범위와 전문 작업 안내를 확인하실 수 있습니다.
                </p>
              </div>
              <Link
                href={article.primaryDynamicUrl}
                className="inline-flex items-center justify-center px-4 py-2.5 bg-teal-600 hover:bg-teal-700 text-white text-sm font-medium rounded-lg transition-colors shadow-sm shrink-0"
              >
                {article.anchorText} &rarr;
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer phone={phone} isWaterproofing={isWaterproofing} />
    </div>
  );
}
