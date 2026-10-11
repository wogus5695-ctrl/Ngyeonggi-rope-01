/**
 * Municipality Hub Index Configuration
 * P2-F2-R3 Implementation
 * 
 * 허브 색인(index, follow) 및 XML Sitemap(sitemap-static.xml) 수록을 제어하는
 * 단일 진실 공급원(Single Source of Truth, SSOT) Registry입니다.
 * 
 * Default: noindex, follow (Allowlist에 미포함된 모든 허브)
 * Pilot only: index, follow (Allowlist에 등록된 허브)
 */

export const INDEXABLE_MUNICIPALITY_HUBS = [
  "goyang",
  "paju",
  "yangju",
] as const;

export type IndexableMunicipalitySlug = typeof INDEXABLE_MUNICIPALITY_HUBS[number];

/**
 * 특정 지자체 허브 슬러그의 색인 가능 여부 판정
 */
export function isMunicipalityHubIndexable(slug: string): boolean {
  return (INDEXABLE_MUNICIPALITY_HUBS as readonly string[]).includes(slug);
}
