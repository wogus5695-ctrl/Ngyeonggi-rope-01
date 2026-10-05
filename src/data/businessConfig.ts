/**
 * Business Single Source of Truth
 * Phase 3A-2A Implementation
 * 
 * 올케어서비스 (ALLCARE) vs 레인픽스 (RAINFIX) 독립 사업자 자체 정보 정의.
 * 서비스-사업자 매핑(Service -> Business)의 단일 출처는 ServiceIntentConfig.businessEntityId 입니다.
 * BusinessConfig는 사업자 자체의 Fact(상호명, 대표자, 사업자번호, 전화번호, SchemaType)만 관리합니다.
 */

export const BUSINESS_CONFIG = {
  ALLCARE: {
    id: "ALLCARE",
    name: "올케어서비스",
    representative: "김재현",
    businessNumber: "405-15-02677",
    phone: "010-3951-6831",
    schemaType: "HomeAndConstructionBusiness" as const,
  },
  RAINFIX: {
    id: "RAINFIX",
    name: "레인픽스",
    representative: "최형화",
    businessNumber: "877-09-03230",
    phone: "010-4667-5568",
    schemaType: "RoofingContractor" as const,
  }
} as const;

export type BusinessEntityId = keyof typeof BUSINESS_CONFIG;
export type BusinessInfo = typeof BUSINESS_CONFIG[BusinessEntityId];
