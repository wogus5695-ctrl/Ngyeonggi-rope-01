import { NextResponse } from 'next/server';
import { getPublishedArticles } from '@/data/articleRegistry';
import { buildRss2Xml } from '@/lib/rssHelpers';

export async function GET() {
  const publishedArticles = getPublishedArticles();
  const rssXml = buildRss2Xml(publishedArticles);

  return new NextResponse(rssXml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=300, stale-while-revalidate=60',
    },
  });
}
