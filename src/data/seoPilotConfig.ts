/**
 * SEO Pilot Activation Guard Configuration
 * Phase 3A-2A Implementation
 * 
 * 16개 정식 Valid Pilot URL 키워드 목록 및 Exact Detection Guard 정의.
 * 지역명이나 서비스명 단독이 아닌 '지역명-작업명'의 완전 일치(Exact Match)로만 Pilot 여부를 판정합니다.
 */

export const SEO_PILOT_KEYWORDS = [
  "고양시-창틀코킹",
  "일산동구-창틀실리콘",
  "강남구-샷시실리콘",
  "덕양구-창틀누수",
  "남양주시-빗물누수",
  "파주시-외벽누수",
  "강북구-창틀코킹",
  "마포구-외벽방수",
  "의정부시-옥상방수",
  "김포시-건물방수",
  "송파구-외벽도색",
  "도봉구-지붕방수",
  "양주시-지붕보수",
  "노원구-지붕누수",
  "분당구-창틀코킹",
  "영등포구-옥상방수"
] as const;

export type SeoPilotKeyword = typeof SEO_PILOT_KEYWORDS[number];

const PILOT_SET = new Set<string>(SEO_PILOT_KEYWORDS);

/**
 * 인코딩/디코딩 상태에 구애받지 않고 일관된 한글 문자열로 정규화합니다.
 */
export function normalizeKeyword(keyword: string | undefined): string | null {
  if (!keyword) return null;
  try {
    return decodeURIComponent(keyword).trim();
  } catch {
    return keyword.trim();
  }
}

/**
 * Exact Pilot Keyword 판정 헬퍼
 * - 16개 등록된 '지역명-작업명'과 완전 일치할 때만 true를 반환합니다.
 * - 지역만 맞거나 서비스명만 맞는 부분 일치는 엄격히 false를 반환합니다.
 * - 무효 URL이나 등록되지 않은 키워드는 false를 반환합니다.
 */
export function isSeoPilotKeyword(keyword: string | undefined): boolean {
  if (!keyword) return false;
  const normalized = normalizeKeyword(keyword);
  if (!normalized) return false;
  return PILOT_SET.has(normalized);
}
