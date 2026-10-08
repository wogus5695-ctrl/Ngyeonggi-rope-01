import { SEO_PILOT_KEYWORDS } from './seoPilotConfig';
import { TEUMSAE_ALLOWED_REGIONS } from './allowedKeywords';

/**
 * P2 Expanded Pilot Exact Keyword Configuration
 * Phase P2-A Implementation
 * 
 * 13개 서비스 × 4개 지역 계층 (총 52개 정식 P2 확대 파일럿 키워드 목록).
 * P2-0-R에서 Production Master Set(7,280) 및 Collision Registry 대조를 거쳐
 * 100% 유효성이 사전 검증된 키워드로만 구성됩니다.
 * 
 * - 기존 16개 Pilot과 중복 0건
 * - 허용된 마스터 데이터셋 외 임의 생성 0건
 */
export const P2_EXPANDED_PILOT_KEYWORDS = [
  // 1. 창틀코킹 (ALLCARE)
  "구리시-창틀코킹",
  "서대문구-창틀코킹",
  "화곡동-창틀코킹",
  "문산읍-창틀코킹",

  // 2. 창틀누수 (ALLCARE)
  "광명시-창틀누수",
  "마포구-창틀누수",
  "신사동-창틀누수",
  "조리읍-창틀누수",

  // 3. 빗물누수 (ALLCARE)
  "하남시-빗물누수",
  "은평구-빗물누수",
  "금곡동-빗물누수",
  "광탄면-빗물누수",

  // 4. 창틀실리콘 (ALLCARE)
  "의정부시-창틀실리콘",
  "성북구-창틀실리콘",
  "상도동-창틀실리콘",
  "탄현면-창틀실리콘",

  // 5. 샷시실리콘 (ALLCARE)
  "시흥시-샷시실리콘",
  "동작구-샷시실리콘",
  "위례동-샷시실리콘",
  "백석읍-샷시실리콘",

  // 6. 외벽누수 (ALLCARE)
  "군포시-외벽누수",
  "종로구-외벽누수",
  "송내동-외벽누수",
  "와부읍-외벽누수",

  // 7. 외벽방수 (RAINFIX)
  "부천시-외벽방수",
  "강서구-외벽방수",
  "옥길동-외벽방수",
  "진접읍-외벽방수",

  // 8. 옥상방수 (RAINFIX)
  "안양시-옥상방수",
  "관악구-옥상방수",
  "고산동-옥상방수",
  "은현면-옥상방수",

  // 9. 건물방수 (RAINFIX)
  "성남시-건물방수",
  "용산구-건물방수",
  "중앙동-건물방수",
  "장흥면-건물방수",

  // 10. 외벽도색 (RAINFIX)
  "과천시-외벽도색",
  "동대문구-외벽도색",
  "부림동-외벽도색",
  "통진읍-외벽도색",

  // 11. 지붕방수 (RAINFIX)
  "의왕시-지붕방수",
  "중랑구-지붕방수",
  "은행동-지붕방수",
  "화도읍-지붕방수",

  // 12. 지붕보수 (RAINFIX)
  "동두천시-지붕보수",
  "서초구-지붕보수",
  "염창동-지붕보수",
  "진건읍-지붕보수",

  // 13. 지붕누수 (RAINFIX)
  "수원시-지붕누수",
  "송파구-지붕누수",
  "신촌동-지붕누수",
  "오남읍-지붕누수"
] as const;

export type P2ExpandedPilotKeyword = typeof P2_EXPANDED_PILOT_KEYWORDS[number];

const P2_EXPANDED_PILOT_SET = new Set<string>(P2_EXPANDED_PILOT_KEYWORDS);
const LOCKED_16_PILOT_SET = new Set<string>(SEO_PILOT_KEYWORDS);

/**
 * 인코딩 상태에 구애받지 않고 일관된 한글 문자열로 정규화합니다.
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
 * P2 Expanded Pilot 키워드 해당 여부를 단일 출처(SSOT)로 판정합니다.
 */
export function isP2ExpandedPilotKeyword(keyword: string | undefined): boolean {
  const normalized = normalizeKeyword(keyword);
  if (!normalized) return false;
  return P2_EXPANDED_PILOT_SET.has(normalized);
}

/**
 * 기존 Locked 16 Pilot과 중복이 없는지 무결성을 검증합니다.
 */
export function checkP2PilotOverlapWithLockedPilots(): string[] {
  const overlaps: string[] = [];
  for (const kw of P2_EXPANDED_PILOT_KEYWORDS) {
    if (LOCKED_16_PILOT_SET.has(kw)) {
      overlaps.push(kw);
    }
  }
  return overlaps;
}
