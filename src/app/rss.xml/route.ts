import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://www.teumsaecare.co.kr';

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>틈새케어 창틀코킹 및 방수 시공</title>
    <link>${baseUrl}</link>
    <description>수도권(경기 북부 및 서울 동북권) 창틀코킹, 빗물누수, 외벽방수, 옥상방수 정밀 시공 및 상담 전문 틈새케어입니다.</description>
    <language>ko</language>
    <pubDate>${new Date().toUTCString()}</pubDate>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />

    <item>
      <title>틈새케어 창틀코킹·방수 시공 상담</title>
      <link>${baseUrl}/</link>
      <description><![CDATA[아파트/빌라 창틀누수, 베란다 빗물유입, 건물 외벽방수 및 옥상 우레탄 방수 시공 상담 안내 및 전담 엔지니어 기밀 케어 서비스]]></description>
      <pubDate>Thu, 02 Jul 2026 00:00:00 GMT</pubDate>
      <guid isPermaLink="true">${baseUrl}/</guid>
    </item>

    <item>
      <title>틈새케어 서비스 지역 키워드 안내</title>
      <link>${baseUrl}/sitemap-gyeonggi-north</link>
      <description><![CDATA[경기 북부(고양, 파주, 양주, 구리, 의정부, 동두천, 남양주, 광주) 및 서울 동북권(도봉, 강북, 성북, 노원, 중랑, 동대문, 성동, 광진) 창틀코킹·방수 시공 서비스 구역 목록 안내 페이지]]></description>
      <pubDate>Thu, 02 Jul 2026 00:00:00 GMT</pubDate>
      <guid isPermaLink="true">${baseUrl}/sitemap-gyeonggi-north</guid>
    </item>

    <item>
      <title>서울 동북권 창틀코킹 안내</title>
      <link>${baseUrl}/sitemap-gyeonggi-north</link>
      <description><![CDATA[도봉구, 강북구, 성북구, 노원구, 중랑구, 동대문구, 성동구, 광진구 전 지역 아파트 및 빌라 창틀실리콘 코킹, 샷시 틈새 빗물누수 보수 안내]]></description>
      <pubDate>Thu, 02 Jul 2026 00:00:00 GMT</pubDate>
      <guid isPermaLink="true">${baseUrl}/sitemap-gyeonggi-north#seoul-caulking</guid>
    </item>

    <item>
      <title>서울 동북권 방수 시공 안내</title>
      <link>${baseUrl}/sitemap-gyeonggi-north</link>
      <description><![CDATA[도봉구, 강북구, 성북구, 노원구, 중랑구, 동대문구, 성동구, 광진구 등 서울 동북 권역 외벽방수, 옥상 우레탄 방수, 건물 방수 크랙 보수 및 외벽 도색 시공 안내]]></description>
      <pubDate>Thu, 02 Jul 2026 00:00:00 GMT</pubDate>
      <guid isPermaLink="true">${baseUrl}/sitemap-gyeonggi-north#seoul-waterproof</guid>
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
