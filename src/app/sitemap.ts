import { MetadataRoute } from 'next';
import { portfolioCases } from '@/data/portfolio';
import {
  REGIONS_DB,
  SEOUL_EAST_REGIONS_DB,
  SEOUL_WEST_REGIONS_DB,
  SEOUL_CENTER_REGIONS_DB,
  SEOUL_SOUTH_EAST_REGIONS_DB,
  SEOUL_SOUTH_WEST_REGIONS_DB,
  SERVICES
} from '@/data/sitemapKeywords';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.teumsaecare.co.kr';

  // 1. 대표 동적변환 랜딩 URL 대량 생성 (/?k=지역명-작업명)
  const regionalUrls: MetadataRoute.Sitemap = [];
  const waterproofingServices = ["외벽방수", "옥상방수", "건물방수", "외벽도색"];

  // 경기 북부 + 서울 전 권역(동북·서북·도심·동남·서남) 통합 리스트 생성
  const allRegionGroups = [
    ...REGIONS_DB,
    ...SEOUL_EAST_REGIONS_DB,
    ...SEOUL_WEST_REGIONS_DB,
    ...SEOUL_CENTER_REGIONS_DB,
    ...SEOUL_SOUTH_EAST_REGIONS_DB,
    ...SEOUL_SOUTH_WEST_REGIONS_DB
  ];

  allRegionGroups.forEach(region => {
    region.areas.forEach(area => {
      // 6대 창틀코킹 서비스
      SERVICES.forEach(service => {
        regionalUrls.push({
          url: `${baseUrl}/?k=${encodeURIComponent(`${area}-${service}`)}`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.8,
        });
      });

      // 4대 방수 서비스
      waterproofingServices.forEach(service => {
        regionalUrls.push({
          url: `${baseUrl}/?k=${encodeURIComponent(`${area}-${service}`)}`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.8,
        });
      });
    });
  });

  // 2. 포트폴리오 URL
  const portfolioUrls: MetadataRoute.Sitemap = portfolioCases.map((post) => ({
    url: `${baseUrl}/portfolio/${post.id}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  // 3. 서비스 허브 및 정적 URL
  const staticUrls: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/sitemap-gyeonggi-north`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    }
  ];

  const allUrls = [
    ...staticUrls,
    ...portfolioUrls,
    ...regionalUrls,
  ];

  // 중복 URL 방지 필터링
  const uniqueUrls: MetadataRoute.Sitemap = [];
  const seenUrls = new Set<string>();

  for (const item of allUrls) {
    if (!seenUrls.has(item.url)) {
      seenUrls.add(item.url);
      uniqueUrls.push(item);
    }
  }

  return uniqueUrls;
}
