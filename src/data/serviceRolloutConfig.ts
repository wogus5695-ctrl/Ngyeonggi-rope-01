/**
 * Service Rollout Feature Flag Configuration
 * Phase P2-A Implementation
 * 
 * 13개 서비스별 P2 Non-Pilot 전면 활성화 제어 Feature Flag.
 * 
 * 원칙:
 * - P2-A 완료 시점 기본값은 반드시 빈 배열 [] (ALL SERVICES OFF).
 * - 향후 P2-C / P2-D 단계에서 서비스 단위로 1개씩 안전하게 순차 활성화.
 * - 문제 발생 시 해당 서비스명을 배열에서 제거하여 즉시 1줄 롤백 가능.
 */

export const SERVICE_INTENT_ROLLOUT_SERVICES: readonly string[] = [
  "외벽방수",
  "옥상방수",
  "건물방수"
] as const;

/**
 * 특정 서비스가 전면 롤아웃(Full Rollout) 활성화 대상인지 판정합니다.
 */
export function isServiceRolloutActive(serviceName: string | undefined): boolean {
  if (!serviceName) return false;
  return (SERVICE_INTENT_ROLLOUT_SERVICES as readonly string[]).includes(serviceName);
}
