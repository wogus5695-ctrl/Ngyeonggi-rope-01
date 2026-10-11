/**
 * Tier Portfolio Binding Layer
 * Phase P2-F1-B / P2-F1-B-R3 Implementation
 * 
 * Tier A URL 전용 실제 Portfolio Case 1:1 안전 매핑.
 * 
 * 원칙:
 * 1. REGION MATCH AND SERVICE MATCH 모두 TRUE일 때만 바인딩
 * 2. Client Boundary(RSC Flight Payload)에 description, highlights, title이 절대 직렬화되지 않도록
 *    Safe Allowlist 필드(location, serviceType, date, images)만 포함하는 SafeTierPortfolioCase를 생성 및 반환
 * 3. portfolio.ts 원본 데이터셋은 엄격히 동결(FREEZE)하고 매핑 시점에 안전 객체로 프로젝션
 */

import { portfolioCases } from "./portfolio";

export interface SafeTierPortfolioCase {
  location: string;
  serviceType: string;
  date: string;
  images: {
    before: string;
    after: string;
  };
}

// Case 1: goyang-tanyheon-01 (탄현동 / 창틀코킹 / 빗물누수)
const rawCaseGoyang = portfolioCases.find(c => c.id === "goyang-tanyheon-01");

// Case 3: yangju-okjeong-03 (옥정동 / 빗물누수 / 창틀누수)
const rawCaseYangju = portfolioCases.find(c => c.id === "yangju-okjeong-03");

export const TIER_PORTFOLIO_BINDINGS: Record<string, SafeTierPortfolioCase> = {};

if (rawCaseGoyang) {
  TIER_PORTFOLIO_BINDINGS["탄현동-창틀코킹"] = {
    location: rawCaseGoyang.location,
    serviceType: rawCaseGoyang.serviceType,
    date: rawCaseGoyang.date,
    images: {
      before: rawCaseGoyang.images.before,
      after: rawCaseGoyang.images.after
    }
  };
}

if (rawCaseYangju) {
  TIER_PORTFOLIO_BINDINGS["옥정동-창틀누수"] = {
    location: rawCaseYangju.location,
    serviceType: rawCaseYangju.serviceType,
    date: rawCaseYangju.date,
    images: {
      before: rawCaseYangju.images.before,
      after: rawCaseYangju.images.after
    }
  };
}

/**
 * 특정 키워드에 1:1 검증된 실제 Portfolio Case가 존재하는지 확인하고,
 * Client Component 경계를 안전하게 넘을 수 있는 Safe Allowlist 객체만 반환합니다.
 */
export function getTierPortfolioCase(keyword: string | undefined): SafeTierPortfolioCase | null {
  if (!keyword) return null;
  return TIER_PORTFOLIO_BINDINGS[keyword.trim()] || null;
}
