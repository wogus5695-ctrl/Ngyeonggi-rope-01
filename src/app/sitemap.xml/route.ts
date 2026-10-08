import { NextResponse } from 'next/server';
import { BASE_URL, buildSitemapIndexXml } from '@/lib/sitemapHelpers';

export async function GET() {
  const childSitemaps = [
    `${BASE_URL}/sitemap-static.xml`,
    `${BASE_URL}/sitemap-seoul.xml`,
    `${BASE_URL}/sitemap-gyeonggi.xml`
  ];

  const xml = buildSitemapIndexXml(childSitemaps);

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
