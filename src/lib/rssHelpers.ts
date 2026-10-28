/**
 * RSS 2.0 Feed Generator Helper
 * Phase P3-A3 / P4-B Implementation
 * 
 * GuideArticleSSOT 레지스트리 기반 표준 RSS 2.0 XML 빌더.
 * content:encoded 모듈을 지원하여 RSS 구독기 및 검색엔진 수집기에
 * 게시글 본문 전체(HTML)를 안전하게 제공.
 */

import { GuideArticleSSOT } from '@/data/articleRegistry';
import { BASE_URL } from '@/lib/sitemapHelpers';

export function buildRss2Xml(articles: GuideArticleSSOT[]): string {
  // 1. Sort by publishedAt DESC, tie-breaker id ASC
  const sortedArticles = [...articles].sort((a, b) => {
    const timeA = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
    const timeB = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
    if (timeB !== timeA) {
      return timeB - timeA;
    }
    return a.id.localeCompare(b.id);
  });

  const nowRfc822 = new Date().toUTCString();

  const itemsXml = sortedArticles.map(article => {
    const fullUrl = `${BASE_URL}${article.path}`;
    const pubDateRfc822 = article.publishedAt ? new Date(article.publishedAt).toUTCString() : nowRfc822;
    const summary = article.bodyLines.slice(0, 2).join(' ');

    // Construct full HTML content for content:encoded
    let fullHtml = '';
    if (article.sections && article.sections.length > 0) {
      fullHtml = article.sections.map(sec => {
        const paragraphsHtml = sec.paragraphs.map(p => `      <p>${p}</p>`).join('\n');
        return `      <h2>${sec.heading}</h2>\n${paragraphsHtml}`;
      }).join('\n\n');
    } else {
      fullHtml = article.bodyLines.map(line => `      <p>${line}</p>`).join('\n');
    }

    // Append dynamic landing link
    const dynamicFullUrl = `${BASE_URL}${article.primaryDynamicUrl}`;
    fullHtml += `\n\n      <p><a href="${dynamicFullUrl}">${article.anchorText}</a></p>`;

    return `    <item>
      <title><![CDATA[${article.title}]]></title>
      <link>${fullUrl}</link>
      <guid isPermaLink="true">${fullUrl}</guid>
      <pubDate>${pubDateRfc822}</pubDate>
      <description><![CDATA[${summary}]]></description>
      <content:encoded><![CDATA[
${fullHtml}
      ]]></content:encoded>
    </item>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>틈새케어 창틀코킹 및 방수 시공 기술가이드</title>
    <link>${BASE_URL}</link>
    <description>수도권 외벽·창틀 누수 및 건물방수 현장 상태 점검과 기술 안내 리포트</description>
    <language>ko</language>
    <pubDate>${nowRfc822}</pubDate>
    <lastBuildDate>${nowRfc822}</lastBuildDate>
    <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml" />
${itemsXml ? itemsXml + '\n' : ''}  </channel>
</rss>`;
}
