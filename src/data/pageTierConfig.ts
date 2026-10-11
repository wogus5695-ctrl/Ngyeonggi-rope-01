/**
 * P2-F1 Tier Page Configuration
 * Phase P2-F1-B Implementation
 * 
 * 7 Pilot URL 전용 Tier Architecture 활성화 Feature Gate.
 * 
 * - Tier A: 실제 Portfolio Case가 지역과 서비스에 1:1 일치하는 URL
 * - Tier B1: 산하 하위 구역을 가진 시/구 대표 URL (MUNICIPALITY_CORE)
 * - Tier B2: 충돌 레지스트리 단독 소유 URL (COLLISION_LOCALITY)
 * - Tier C: 대량 롱테일 URL (LEAN_LONG_TAIL)
 * 
 * 비파일럿(7,273개)은 STANDARD_ROLLOUT 모드로 동작하여 기존 Production 렌더링을 100% 보존합니다.
 */

export type PageTierType = 'TIER_A' | 'TIER_B1' | 'TIER_B2' | 'TIER_C' | 'STANDARD_ROLLOUT';

export const P2_F1_ACTIVE_PILOTS: readonly string[] = [
  "탄현동-창틀코킹",
  "옥정동-창틀누수",
  "수원시-외벽방수",
  "강서구-창틀실리콘",
  "신사동-외벽누수",
  "화곡동-창틀실리콘",
  "문산읍-지붕방수"
] as const;

export const P2_F1_PILOT_TIER_MAP: Record<string, PageTierType> = {
  "탄현동-창틀코킹": "TIER_A",
  "옥정동-창틀누수": "TIER_A",
  "수원시-외벽방수": "TIER_B1",
  "강서구-창틀실리콘": "TIER_B1",
  "신사동-외벽누수": "TIER_B2",
  "화곡동-창틀실리콘": "TIER_C",
  "문산읍-지붕방수": "TIER_C"
};

/**
 * 키워드가 P2-F1 활성 파일럿인지 판정합니다.
 */
export function isP2F1ActivePilot(keyword: string | undefined): boolean {
  if (!keyword) return false;
  return (P2_F1_ACTIVE_PILOTS as readonly string[]).includes(keyword.trim());
}

/**
 * 키워드의 Page Tier 타입을 반환합니다.
 * 파일럿이 아닌 경우 기존 'STANDARD_ROLLOUT'을 반환합니다.
 */
export function resolvePageTier(keyword: string | undefined): PageTierType {
  if (!keyword) return 'STANDARD_ROLLOUT';
  const clean = keyword.trim();
  if (P2_F1_PILOT_TIER_MAP[clean]) {
    return P2_F1_PILOT_TIER_MAP[clean];
  }
  return 'STANDARD_ROLLOUT';
}
