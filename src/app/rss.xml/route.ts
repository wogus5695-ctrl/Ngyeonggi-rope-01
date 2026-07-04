import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://www.teumsaecare.co.kr';

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>틈새케어 창틀코킹 및 방수 시공</title>
    <link>${baseUrl}</link>
    <description>수도권(경기 북부 및 서울 전 지역) 창틀코킹, 빗물누수, 외벽방수, 옥상방수 정밀 시공 및 상담 전문 틈새케어입니다.</description>
    <language>ko</language>
    <pubDate>${new Date().toUTCString()}</pubDate>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />

    <item>
      <title>틈새케어 서울 전 지역 창틀코킹·방수 시공 서비스 안내</title>
      <link>${baseUrl}/sitemap-gyeonggi-north</link>
      <description><![CDATA[서울 동북권, 서북권, 도심권, 동남권, 서남권의 창틀코킹·빗물누수·외벽방수·옥상방수 서비스 지역 안내]]></description>
      <pubDate>Thu, 02 Jul 2026 00:00:00 GMT</pubDate>
      <guid isPermaLink="true">${baseUrl}/sitemap-gyeonggi-north</guid>
    </item>

    <item>
      <title>틈새케어 창틀코킹·방수 시공 상담</title>
      <link>${baseUrl}/</link>
      <description><![CDATA[아파트/빌라 창틀누수, 베란다 빗물유입, 건물 외벽방수 및 옥상 우레탄 방수 시공 상담 안내 및 전담 엔지니어 기밀 케어 서비스]]></description>
      <pubDate>Thu, 02 Jul 2026 00:00:00 GMT</pubDate>
      <guid isPermaLink="true">${baseUrl}/</guid>
    </item>
  </channel>
</rss>`;

  return new NextResponse(rssXml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=18000',
    },
  });
}
