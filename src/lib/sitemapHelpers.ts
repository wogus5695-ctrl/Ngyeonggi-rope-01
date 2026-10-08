import {
  REGIONS_DB,
  SEOUL_EAST_REGIONS_DB,
  SEOUL_WEST_REGIONS_DB,
  SEOUL_CENTER_REGIONS_DB,
  SEOUL_SOUTH_EAST_REGIONS_DB,
  SEOUL_SOUTH_WEST_REGIONS_DB,
  GYEONGGI_WEST_REGIONS_DB,
  GYEONGGI_MID_REGIONS_DB,
  GYEONGGI_SOUTH_EAST_REGIONS_DB,
  GYEONGGI_SOUTH_REGIONS_DB,
  SERVICES
} from '@/data/sitemapKeywords';
import { portfolioCases } from '@/data/portfolio';

export const BASE_URL = 'https://www.teumsaecare.co.kr';

const WATERPROOFING_SERVICES = [
  "외벽방수",
  "옥상방수",
  "건물방수",
  "외벽도색",
  "지붕방수",
  "지붕보수",
  "지붕누수"
];

export interface SitemapUrlEntry {
  url: string;
  lastModified?: string;
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

/**
 * 1. Static Sitemap URLs (/sitemap-static.xml)
 * 루트(/), 허브(/sitemap-gyeonggi-north), 포트폴리오 사례 3건
 */
export function getStaticSitemapEntries(): SitemapUrlEntry[] {
  const staticList: SitemapUrlEntry[] = [
    {
      url: BASE_URL,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/sitemap`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/sitemap-seoul`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/sitemap-gyeonggi`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/sitemap-gyeonggi-north`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.8,
    }
  ];

  const portfolioList: SitemapUrlEntry[] = portfolioCases.map((post) => ({
    url: `${BASE_URL}/portfolio/${post.id}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticList, ...portfolioList];
}

/**
 * 2. Gyeonggi Dynamic Sitemap URLs (/sitemap-gyeonggi.xml)
 * 경기 북부/서부/중부/동남부/남부 권역 Dynamic URLs (4,303건)
 */
export function getGyeonggiSitemapEntries(): SitemapUrlEntry[] {
  const gyeonggiGroups = [
    ...REGIONS_DB,
    ...GYEONGGI_WEST_REGIONS_DB,
    ...GYEONGGI_MID_REGIONS_DB,
    ...GYEONGGI_SOUTH_EAST_REGIONS_DB,
    ...GYEONGGI_SOUTH_REGIONS_DB
  ];

  const entries: SitemapUrlEntry[] = [];
  const seenUrls = new Set<string>();

  gyeonggiGroups.forEach(region => {
    region.areas.forEach(area => {
      // 6대 코킹 서비스
      SERVICES.forEach(service => {
        const url = `${BASE_URL}/?k=${encodeURIComponent(`${area}-${service}`)}`;
        if (!seenUrls.has(url)) {
          seenUrls.add(url);
          entries.push({
            url,
            changeFrequency: 'monthly',
            priority: 0.8,
          });
        }
      });

      // 7대 방수 서비스
      WATERPROOFING_SERVICES.forEach(service => {
        const url = `${BASE_URL}/?k=${encodeURIComponent(`${area}-${service}`)}`;
        if (!seenUrls.has(url)) {
          seenUrls.add(url);
          entries.push({
            url,
            changeFrequency: 'monthly',
            priority: 0.8,
          });
        }
      });
    });
  });

  return entries;
}

/**
 * 3. Seoul Dynamic Sitemap URLs (/sitemap-seoul.xml)
 * 서울 전 권역(동북·서북·도심·동남·서남) Dynamic URLs (2,977건)
 * 경기와 동명 행정동 10개(송정동, 군자동, 갈현동, 다산동, 신천동, 장지동, 오금동, 위례동, 시흥동, 목동)는
 * 기존 배포 순서 및 상호 배타성(Cross-Sitemap Exclusivity)에 따라 경기 Sitemap에 단독 배정되고 서울에서는 중복 배제됨.
 */
export function getSeoulSitemapEntries(): SitemapUrlEntry[] {
  const gyeonggiGroups = [
    ...REGIONS_DB,
    ...GYEONGGI_WEST_REGIONS_DB,
    ...GYEONGGI_MID_REGIONS_DB,
    ...GYEONGGI_SOUTH_EAST_REGIONS_DB,
    ...GYEONGGI_SOUTH_REGIONS_DB
  ];

  const gyeonggiAreaSet = new Set<string>();
  gyeonggiGroups.forEach(grp => grp.areas.forEach(area => gyeonggiAreaSet.add(area)));

  const seoulGroups = [
    ...SEOUL_EAST_REGIONS_DB,
    ...SEOUL_WEST_REGIONS_DB,
    ...SEOUL_CENTER_REGIONS_DB,
    ...SEOUL_SOUTH_EAST_REGIONS_DB,
    ...SEOUL_SOUTH_WEST_REGIONS_DB
  ];

  const entries: SitemapUrlEntry[] = [];
  const seenUrls = new Set<string>();

  seoulGroups.forEach(region => {
    region.areas.forEach(area => {
      // 경기에 이미 배정된 동명이인 지역은 상호 배타성을 위해 서울에서 제외
      if (gyeonggiAreaSet.has(area)) return;

      // 6대 코킹 서비스
      SERVICES.forEach(service => {
        const url = `${BASE_URL}/?k=${encodeURIComponent(`${area}-${service}`)}`;
        if (!seenUrls.has(url)) {
          seenUrls.add(url);
          entries.push({
            url,
            changeFrequency: 'monthly',
            priority: 0.8,
          });
        }
      });

      // 7대 방수 서비스
      WATERPROOFING_SERVICES.forEach(service => {
        const url = `${BASE_URL}/?k=${encodeURIComponent(`${area}-${service}`)}`;
        if (!seenUrls.has(url)) {
          seenUrls.add(url);
          entries.push({
            url,
            changeFrequency: 'monthly',
            priority: 0.8,
          });
        }
      });
    });
  });

  return entries;
}

/**
 * URL 엔트리 배열을 표준 sitemap xml 문자열로 변환
 */
export function buildUrlsetXml(entries: SitemapUrlEntry[]): string {
  const urlsXml = entries.map(entry => {
    let item = `  <url>\n    <loc>${entry.url}</loc>`;
    if (entry.lastModified) {
      item += `\n    <lastmod>${entry.lastModified}</lastmod>`;
    }
    if (entry.changeFrequency) {
      item += `\n    <changefreq>${entry.changeFrequency}</changefreq>`;
    }
    if (entry.priority !== undefined) {
      item += `\n    <priority>${entry.priority.toFixed(1)}</priority>`;
    }
    item += `\n  </url>`;
    return item;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlsXml}
</urlset>`;
}

/**
 * 자식 sitemap 목록을 표준 sitemapindex xml 문자열로 변환
 */
export function buildSitemapIndexXml(childSitemapUrls: string[]): string {
  const sitemapsXml = childSitemapUrls.map(url => {
    return `  <sitemap>\n    <loc>${url}</loc>\n    <lastmod>${new Date().toISOString()}</lastmod>\n  </sitemap>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapsXml}
</sitemapindex>`;
}
