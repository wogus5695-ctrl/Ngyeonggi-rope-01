/**
 * Guide Article Validator
 * Phase P3-A3 Implementation
 * 
 * Guide Article Registry SSOT의 등록 데이터 및
 * Published / RSS / Sitemap 간 상태 일치성을 검증하는 하드 게이트 검증기.
 */

import { GuideArticleSSOT, TargetServiceKey, TargetServiceSlug, getPublishedArticles } from '@/data/articleRegistry';
import { getSeoulSitemapEntries, getGyeonggiSitemapEntries, BASE_URL } from '@/lib/sitemapHelpers';

export const ALLOWED_PILOT_SERVICES: Record<TargetServiceKey, TargetServiceSlug> = {
  '창틀누수': 'window-leak',
  '빗물누수': 'rain-leak',
  '건물방수': 'building-waterproof',
  '외벽도색': 'wall-painting',
  '외벽타일보수': 'tile-repair',
  '외벽타일교체': 'tile-replace',
};

export const ALLOWED_PILOT_DISTRICTS: Record<string, string> = {
  '강서구': 'gangseo',
  '강남구': 'gangnam',
  '마포구': 'mapo',
  '송파구': 'songpa',
  '서초구': 'seocho',
  '영등포구': 'yeongdeungpo',
  '성동구': 'seongdong',
  '노원구': 'nowon',
};

export const ALLOWED_PILOT_DISTRICT = {
  name: '강서구',
  slug: 'gangseo',
};

let cachedMasterKeywordSet: Set<string> | null = null;

export function getMasterKeywordSet(): Set<string> {
  if (cachedMasterKeywordSet) return cachedMasterKeywordSet;

  const set = new Set<string>();
  const seoulEntries = getSeoulSitemapEntries();
  const gyeonggiEntries = getGyeonggiSitemapEntries();

  const extractKw = (url: string) => {
    const match = url.match(/[?&]k=([^&]+)/);
    if (match) {
      try {
        set.add(decodeURIComponent(match[1]));
      } catch {
        set.add(match[1]);
      }
    }
  };

  seoulEntries.forEach(e => extractKw(e.url));
  gyeonggiEntries.forEach(e => extractKw(e.url));

  cachedMasterKeywordSet = set;
  return set;
}

export const ISO_8601_TIMESTAMP_REGEX = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:?\d{2})$/;

export interface ArticleValidationResult {
  isValid: boolean;
  errors: string[];
}

export function validateArticle(article: GuideArticleSSOT, referenceTime: number = Date.now()): ArticleValidationResult {
  const errors: string[] = [];

  // 1. Required Fields
  if (!article.id) errors.push(`[${article.id || 'unknown'}] id is required.`);
  if (!article.region) errors.push(`[${article.id}] region is required.`);
  if (article.regionScope !== 'seoul') errors.push(`[${article.id}] regionScope must be 'seoul'.`);
  if (article.regionLevel !== 'district' && article.regionLevel !== 'dong') {
    errors.push(`[${article.id}] regionLevel must be 'district' or 'dong'.`);
  }

  // 2. District & Scope Gate (Pilot: Allowed districts)
  const expectedDistrictSlug = ALLOWED_PILOT_DISTRICTS[article.parentDistrict];
  if (!expectedDistrictSlug) {
    errors.push(`[${article.id}] parentDistrict '${article.parentDistrict}' is not an allowed pilot district.`);
  } else if (article.districtSlug !== expectedDistrictSlug) {
    errors.push(`[${article.id}] districtSlug '${article.districtSlug}' does not match expected '${expectedDistrictSlug}'.`);
  }

  // 3. Service Scope & Slug Gate
  const expectedServiceSlug = ALLOWED_PILOT_SERVICES[article.service];
  if (!expectedServiceSlug) {
    errors.push(`[${article.id}] Service '${article.service}' is not an allowed pilot service.`);
  } else if (article.serviceSlug !== expectedServiceSlug) {
    errors.push(`[${article.id}] serviceSlug '${article.serviceSlug}' does not match expected '${expectedServiceSlug}'.`);
  }

  // 4. Path Consistency
  let expectedPath = '';
  if (article.regionLevel === 'district') {
    expectedPath = `/guide/seoul/${article.districtSlug}/${article.serviceSlug}`;
    if (article.dongSlug) {
      errors.push(`[${article.id}] District article must not have dongSlug.`);
    }
  } else {
    if (!article.dongSlug) {
      errors.push(`[${article.id}] Dong article must have dongSlug.`);
    }
    expectedPath = `/guide/seoul/${article.districtSlug}/${article.dongSlug}/${article.serviceSlug}`;
  }

  if (article.path !== expectedPath) {
    errors.push(`[${article.id}] Path '${article.path}' does not match expected '${expectedPath}'.`);
  }

  // 5. Title & Body Line Rules
  if (!article.title || article.title.includes('\n') || article.title.includes('\r')) {
    errors.push(`[${article.id}] Title must be exactly 1 line with no newlines.`);
  }

  if (!Array.isArray(article.bodyLines) || article.bodyLines.length < 4) {
    errors.push(`[${article.id}] Body must be at least 4 lines.`);
  } else {
    article.bodyLines.forEach((line, idx) => {
      if (!line || !line.trim()) {
        errors.push(`[${article.id}] Body line ${idx + 1} is empty.`);
      }
    });
  }

  // 6. Publication Status & publishedAt Consistency Gate
  if (article.contentStatus === 'PUBLISHED') {
    if (!article.publishedAt) {
      errors.push(`[${article.id}] PUBLISHED article must have a valid publishedAt timestamp.`);
    } else if (!ISO_8601_TIMESTAMP_REGEX.test(article.publishedAt)) {
      errors.push(`[${article.id}] publishedAt '${article.publishedAt}' is not a valid ISO 8601 string.`);
    } else {
      const parsedDate = new Date(article.publishedAt);
      if (isNaN(parsedDate.getTime())) {
        errors.push(`[${article.id}] publishedAt '${article.publishedAt}' is not a valid ISO 8601 string.`);
      } else if (parsedDate.getTime() > referenceTime) {
        errors.push(`[${article.id}] publishedAt cannot be in the future.`);
      }
    }
  } else {
    if (article.publishedAt !== null) {
      errors.push(`[${article.id}] Non-published article (${article.contentStatus}) must have publishedAt = null.`);
    }
  }

  // 7. Dynamic Landing & Master Set Existence
  const expectedKeyword = `${article.region}-${article.service}`;
  if (article.keyword !== expectedKeyword) {
    errors.push(`[${article.id}] keyword '${article.keyword}' does not match '${expectedKeyword}'.`);
  }

  const expectedDynamicUrl = `/?k=${encodeURIComponent(article.keyword)}`;
  if (article.primaryDynamicUrl !== expectedDynamicUrl) {
    errors.push(`[${article.id}] primaryDynamicUrl '${article.primaryDynamicUrl}' does not match expected '${expectedDynamicUrl}'.`);
  }

  const masterSet = getMasterKeywordSet();
  if (!masterSet.has(article.keyword)) {
    errors.push(`[${article.id}] keyword '${article.keyword}' does not exist in 7,280 Master Keyword Set.`);
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

export function validateRegistry(registry: GuideArticleSSOT[], referenceTime: number = Date.now()): ArticleValidationResult {
  const errors: string[] = [];
  const seenIds = new Set<string>();
  const seenPaths = new Set<string>();
  const seenKeywords = new Set<string>();

  for (const article of registry) {
    const singleResult = validateArticle(article, referenceTime);
    if (!singleResult.isValid) {
      errors.push(...singleResult.errors);
    }

    if (seenIds.has(article.id)) {
      errors.push(`Duplicate ID: '${article.id}'.`);
    }
    seenIds.add(article.id);

    if (seenPaths.has(article.path)) {
      errors.push(`Duplicate path: '${article.path}'.`);
    }
    seenPaths.add(article.path);

    if (seenKeywords.has(article.keyword)) {
      errors.push(`Duplicate keyword: '${article.keyword}'.`);
    }
    seenKeywords.add(article.keyword);
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

/**
 * Published Registry Set === RSS Item Set === Guide Sitemap URL Set 검증
 */
export function validatePublishedSitemapRssEquality(
  publishedArticles: GuideArticleSSOT[] = getPublishedArticles(),
  rssItemUrls: string[] = getPublishedArticles().map(a => `${BASE_URL}${a.path}`),
  sitemapUrls: string[] = getPublishedArticles().map(a => `${BASE_URL}${a.path}`)
): {
  isExactMatch: boolean;
  publishedCount: number;
  rssCount: number;
  sitemapCount: number;
  missingInRss: string[];
  extraInRss: string[];
  missingInSitemap: string[];
  extraInSitemap: string[];
} {
  const publishedUrlSet = new Set(publishedArticles.map(a => `${BASE_URL}${a.path}`));
  const rssUrlSet = new Set(rssItemUrls);
  const sitemapUrlSet = new Set(sitemapUrls);

  const missingInRss = [...publishedUrlSet].filter(u => !rssUrlSet.has(u));
  const extraInRss = [...rssUrlSet].filter(u => !publishedUrlSet.has(u));

  const missingInSitemap = [...publishedUrlSet].filter(u => !sitemapUrlSet.has(u));
  const extraInSitemap = [...sitemapUrlSet].filter(u => !publishedUrlSet.has(u));

  const isExactMatch =
    missingInRss.length === 0 &&
    extraInRss.length === 0 &&
    missingInSitemap.length === 0 &&
    extraInSitemap.length === 0;

  return {
    isExactMatch,
    publishedCount: publishedArticles.length,
    rssCount: rssItemUrls.length,
    sitemapCount: sitemapUrls.length,
    missingInRss,
    extraInRss,
    missingInSitemap,
    extraInSitemap,
  };
}
