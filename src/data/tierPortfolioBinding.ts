/**
 * Tier Portfolio Binding Layer
 * Phase P2-F1-B Implementation
 * 
 * Tier A URL 전용 실제 Portfolio Case 1:1 안전 매핑.
 * 
 * 원칙:
 * 1. REGION MATCH AND SERVICE MATCH 모두 TRUE일 때만 바인딩
 * 2. portfolio.ts 원본 스키마(id, title, location, serviceType, date, description, images, highlights) 100% 보존
 * 3. 15년 차, 노후 아파트 등 미검증 Fact 일체 배제
 */

import { portfolioCases, PortfolioCase } from "./portfolio";

export interface TierPortfolioBindingItem {
  targetKeyword: string;
  portfolioId: string;
  matchedCase: PortfolioCase;
}

// Case 1: goyang-tanyheon-01 (탄현동 / 창틀코킹 / 빗물누수)
const caseGoyang = portfolioCases.find(c => c.id === "goyang-tanyheon-01");

// Case 3: yangju-okjeong-03 (옥정동 / 빗물누수 / 창틀누수)
const caseYangju = portfolioCases.find(c => c.id === "yangju-okjeong-03");

export const TIER_PORTFOLIO_BINDINGS: Record<string, PortfolioCase> = {};

if (caseGoyang) {
  TIER_PORTFOLIO_BINDINGS["탄현동-창틀코킹"] = caseGoyang;
}

if (caseYangju) {
  TIER_PORTFOLIO_BINDINGS["옥정동-창틀누수"] = caseYangju;
}

/**
 * 특정 키워드에 1:1 검증된 실제 Portfolio Case가 존재하는지 확인하고 반환합니다.
 */
export function getTierPortfolioCase(keyword: string | undefined): PortfolioCase | null {
  if (!keyword) return null;
  return TIER_PORTFOLIO_BINDINGS[keyword.trim()] || null;
}
