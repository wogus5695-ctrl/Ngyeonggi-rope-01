import { NextResponse } from 'next/server';
import { getGyeonggiSitemapEntries, buildUrlsetXml } from '@/lib/sitemapHelpers';

export async function GET() {
  const entries = getGyeonggiSitemapEntries();
  const xml = buildUrlsetXml(entries);

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
