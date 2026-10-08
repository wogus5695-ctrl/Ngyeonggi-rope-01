import { NextResponse } from 'next/server';
import { getStaticSitemapEntries, buildUrlsetXml } from '@/lib/sitemapHelpers';

export async function GET() {
  const entries = getStaticSitemapEntries();
  const xml = buildUrlsetXml(entries);

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
