import { NextResponse } from 'next/server';
import { getPublishedArticles } from '@/data/articleRegistry';
import { BASE_URL, buildUrlsetXml, SitemapUrlEntry } from '@/lib/sitemapHelpers';

export async function GET() {
  const publishedArticles = getPublishedArticles();

  const entries: SitemapUrlEntry[] = publishedArticles.map(article => ({
    url: `${BASE_URL}${article.path}`,
    lastModified: article.publishedAt ? new Date(article.publishedAt).toISOString() : new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const xml = buildUrlsetXml(entries);

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=300, stale-while-revalidate=60',
    },
  });
}
