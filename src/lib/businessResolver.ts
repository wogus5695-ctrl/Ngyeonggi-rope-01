/**
 * Business Resolver Layer
 * Phase 3A-2A Implementation
 * 
 * ServiceIntentConfig.businessEntityId 를 기반으로
 * 13개 서비스 키에 일치하는 BusinessInfo(올케어서비스 또는 레인픽스)를 반환하는 단일 경로 리졸버입니다.
 * 
 * - 13개 Valid 서비스 -> 정확한 BusinessInfo 반환
 * - 등록되지 않은 서비스 또는 유효하지 않은 입력 -> null 반환 (임의 Fallback 방지)
 */

import { BUSINESS_CONFIG, BusinessInfo } from "@/data/businessConfig";
import { SERVICE_INTENT_CONFIGS } from "@/data/serviceIntentConfig";

export function getBusinessForService(serviceKey: string | undefined): BusinessInfo | null {
  if (!serviceKey) {
    return null;
  }

  const serviceConfig = SERVICE_INTENT_CONFIGS[serviceKey];
  if (!serviceConfig) {
    return null;
  }

  const businessEntityId = serviceConfig.businessEntityId;
  const business = BUSINESS_CONFIG[businessEntityId];

  return business || null;
}
