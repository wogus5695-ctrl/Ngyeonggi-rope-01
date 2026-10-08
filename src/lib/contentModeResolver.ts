import { isSeoPilotKeyword } from '@/data/seoPilotConfig';
import { isP2ExpandedPilotKeyword } from '@/data/p2ExpandedPilotConfig';
import { isServiceRolloutActive } from '@/data/serviceRolloutConfig';

/**
 * Multi-Stage Content Mode Resolver
 * Phase P2-A Implementation
 * 
 * 동적 페이지 요청이 들어왔을 때 어떤 콘텐츠 렌더링 엔진을 적용할지 결정하는 순수 리졸버(Pure Resolver).
 * 
 * 절대 우선순위:
 * 1. LOCKED_PILOT: 기존 승인된 16개 Pilot 키워드 (최우선 보호)
 * 2. P2_EXPANDED_PILOT: P2에서 신규 검증된 52개 확대 파일럿 키워드
 * 3. SERVICE_ROLLOUT: 서비스 단위 Feature Flag가 켜진 경우
 * 4. LEGACY: 위 3단계에 해당하지 않는 모든 Non-Pilot URL (기존 프로덕션 레거시 출력 유지)
 * 
 * 중요:
 * P2-A 단계에서는 이 리졸버를 page.tsx에 실제 연결하지 않고 단위 테스트로 무결성만 검증합니다.
 */

export type ContentMode = 
  | 'LOCKED_PILOT' 
  | 'P2_EXPANDED_PILOT' 
  | 'SERVICE_ROLLOUT' 
  | 'LEGACY';

export function resolveContentMode(keyword: string | undefined, service: string | undefined): ContentMode {
  if (!keyword) return 'LEGACY';

  // 1. 기존 16개 Pilot 키워드는 최우선으로 LOCKED_PILOT 모드 반환
  if (isSeoPilotKeyword(keyword)) {
    return 'LOCKED_PILOT';
  }

  // 2. P2 52개 확대 Pilot 키워드 확인
  if (isP2ExpandedPilotKeyword(keyword)) {
    return 'P2_EXPANDED_PILOT';
  }

  // 3. 서비스 단위 Feature Flag 활성화 여부 확인
  if (service && isServiceRolloutActive(service)) {
    return 'SERVICE_ROLLOUT';
  }

  // 4. 기본값: 기존 레거시 엔진 유지
  return 'LEGACY';
}
