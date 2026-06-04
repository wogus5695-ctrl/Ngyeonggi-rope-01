import { MetadataRoute } from 'next';
import { portfolioCases } from '@/data/portfolio';
import { REGIONS_DB, SERVICES } from '@/data/sitemapKeywords';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://teumsaecare.co.kr';

  // 1. 대표 동적변환 랜딩 URL 대량 생성 (/?k=지역명-작업명)
  // 49개 지역명 * 6개 서비스 = 294개 조합
  const regionalUrls: MetadataRoute.Sitemap = [];

  REGIONS_DB.forEach(region => {
    region.areas.forEach(area => {
      SERVICES.forEach(service => {
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

  return [
    ...staticUrls,
    ...portfolioUrls,
    ...regionalUrls,
  ];
}
