/**
 * Hub Collision Ownership Registry
 * Phase P1-B-1 Implementation
 * 
 * 데이터셋 배열 순서가 향후 변경되더라도
 * 동명이인(동일 명칭) 행정동의 관할 Hub 소유권이 임의로 변경되지 않도록
 * P1-A Production 배포 기준의 선착순 소유권을 명시적(Explicit)으로 고정합니다.
 */

export interface AreaOwnershipOverride {
  area: string;
  ownerRegionType: 'seoul' | 'gyeonggi';
  ownerMunicipality: string; // 자치구/시 명칭 (예: "은평구", "고양시", "성남시")
  ownerSlug: string;         // 허브 슬러그 (예: "seoul-eunpyeong", "goyang", "gyeonggi-seongnam-si")
  discardedFrom: Array<{
    regionType: 'seoul' | 'gyeonggi';
    municipality: string;
    slug: string;
  }>;
  reason: string;
}

/**
 * 1. 서울 내부 동음이의어 (Intra-Seoul Collision)
 * - 신사동: 은평구(선순위 배정) vs 강남구(배제)
 */
export const INTRA_SEOUL_COLLISIONS: Record<string, AreaOwnershipOverride> = {
  "신사동": {
    area: "신사동",
    ownerRegionType: "seoul",
    ownerMunicipality: "은평구",
    ownerSlug: "seoul-eunpyeong",
    discardedFrom: [
      { regionType: "seoul", municipality: "강남구", slug: "seoul-gangnam" }
    ],
    reason: "P1-A DB 순환 순서상 은평구 선순위 배정"
  }
};

/**
 * 2. 경기 내부 동음이의어 (Intra-Gyeonggi Collision)
 * - 총 14개 고유 지역명, 15개 중복 인스턴스
 * - 금곡동: 남양주시(1차 배정) vs 성남시(탈락), 수원시(탈락)
 * - 위례동: 성남시(1차 배정) vs 하남시(탈락) [서울 송파구도 Cross-Collision으로 탈락]
 */
export const INTRA_GYEONGGI_COLLISIONS: Record<string, AreaOwnershipOverride> = {
  "고산동": {
    area: "고산동",
    ownerRegionType: "gyeonggi",
    ownerMunicipality: "의정부시",
    ownerSlug: "uijeongbu-si",
    discardedFrom: [
      { regionType: "gyeonggi", municipality: "광주시", slug: "gwangju-si" }
    ],
    reason: "P1-A DB 순환 순서상 의정부시 선순위 배정"
  },
  "송내동": {
    area: "송내동",
    ownerRegionType: "gyeonggi",
    ownerMunicipality: "동두천시",
    ownerSlug: "dongducheon-si",
    discardedFrom: [
      { regionType: "gyeonggi", municipality: "부천시", slug: "gyeonggi-bucheon-si" }
    ],
    reason: "P1-A DB 순환 순서상 동두천시 선순위 배정"
  },
  "옥길동": {
    area: "옥길동",
    ownerRegionType: "gyeonggi",
    ownerMunicipality: "부천시",
    ownerSlug: "gyeonggi-bucheon-si",
    discardedFrom: [
      { regionType: "gyeonggi", municipality: "광명시", slug: "gyeonggi-gwangmyeong-si" }
    ],
    reason: "P1-A DB 순환 순서상 부천시 선순위 배정"
  },
  "능곡동": {
    area: "능곡동",
    ownerRegionType: "gyeonggi",
    ownerMunicipality: "고양시",
    ownerSlug: "goyang",
    discardedFrom: [
      { regionType: "gyeonggi", municipality: "시흥시", slug: "gyeonggi-siheung-si" }
    ],
    reason: "P1-A DB 순환 순서상 고양시 선순위 배정"
  },
  "신현동": {
    area: "신현동",
    ownerRegionType: "gyeonggi",
    ownerMunicipality: "광주시",
    ownerSlug: "gwangju-si",
    discardedFrom: [
      { regionType: "gyeonggi", municipality: "시흥시", slug: "gyeonggi-siheung-si" }
    ],
    reason: "P1-A DB 순환 순서상 광주시 선순위 배정"
  },
  "부림동": {
    area: "부림동",
    ownerRegionType: "gyeonggi",
    ownerMunicipality: "안양시",
    ownerSlug: "gyeonggi-anyang-si",
    discardedFrom: [
      { regionType: "gyeonggi", municipality: "과천시", slug: "gyeonggi-gwacheon-si" }
    ],
    reason: "P1-A DB 순환 순서상 안양시 선순위 배정"
  },
  "삼동": {
    area: "삼동",
    ownerRegionType: "gyeonggi",
    ownerMunicipality: "광주시",
    ownerSlug: "gwangju-si",
    discardedFrom: [
      { regionType: "gyeonggi", municipality: "의왕시", slug: "gyeonggi-uiwang-si" }
    ],
    reason: "P1-A DB 순환 순서상 광주시 선순위 배정"
  },
  "부곡동": {
    area: "부곡동",
    ownerRegionType: "gyeonggi",
    ownerMunicipality: "의왕시",
    ownerSlug: "gyeonggi-uiwang-si",
    discardedFrom: [
      { regionType: "gyeonggi", municipality: "군포시", slug: "gyeonggi-gunpo-si" }
    ],
    reason: "P1-A DB 순환 순서상 의왕시 선순위 배정"
  },
  "중앙동": {
    area: "중앙동",
    ownerRegionType: "gyeonggi",
    ownerMunicipality: "과천시",
    ownerSlug: "gyeonggi-gwacheon-si",
    discardedFrom: [
      { regionType: "gyeonggi", municipality: "성남시", slug: "gyeonggi-seongnam-si" }
    ],
    reason: "P1-A DB 순환 순서상 과천시 선순위 배정"
  },
  "은행동": {
    area: "은행동",
    ownerRegionType: "gyeonggi",
    ownerMunicipality: "시흥시",
    ownerSlug: "gyeonggi-siheung-si",
    discardedFrom: [
      { regionType: "gyeonggi", municipality: "성남시", slug: "gyeonggi-seongnam-si" }
    ],
    reason: "P1-A DB 순환 순서상 시흥시 선순위 배정"
  },
  "금곡동": {
    area: "금곡동",
    ownerRegionType: "gyeonggi",
    ownerMunicipality: "남양주시",
    ownerSlug: "namyangju-si",
    discardedFrom: [
      { regionType: "gyeonggi", municipality: "성남시", slug: "gyeonggi-seongnam-si" },
      { regionType: "gyeonggi", municipality: "수원시", slug: "gyeonggi-suwon-si" }
    ],
    reason: "P1-A DB 순환 순서상 남양주시 선순위 배정"
  },
  "위례동": {
    area: "위례동",
    ownerRegionType: "gyeonggi",
    ownerMunicipality: "성남시",
    ownerSlug: "gyeonggi-seongnam-si",
    discardedFrom: [
      { regionType: "gyeonggi", municipality: "하남시", slug: "gyeonggi-hanam-si" },
      { regionType: "seoul", municipality: "송파구", slug: "seoul-songpa" }
    ],
    reason: "P1-A DB 순환 순서상 경기 성남시 선순위 배정"
  },
  "정자동": {
    area: "정자동",
    ownerRegionType: "gyeonggi",
    ownerMunicipality: "성남시",
    ownerSlug: "gyeonggi-seongnam-si",
    discardedFrom: [
      { regionType: "gyeonggi", municipality: "수원시", slug: "gyeonggi-suwon-si" }
    ],
    reason: "P1-A DB 순환 순서상 성남시 선순위 배정"
  },
  "고등동": {
    area: "고등동",
    ownerRegionType: "gyeonggi",
    ownerMunicipality: "성남시",
    ownerSlug: "gyeonggi-seongnam-si",
    discardedFrom: [
      { regionType: "gyeonggi", municipality: "수원시", slug: "gyeonggi-suwon-si" }
    ],
    reason: "P1-A DB 순환 순서상 성남시 선순위 배정"
  }
};

/**
 * 3. 서울 ↔ 경기 동음이의어 (Cross-Region Collision)
 * - 총 10개 행정동
 * - P1-A Cross-Sitemap Exclusivity 규칙에 따라 경기에 단독 배정되고 서울에서 100% 배제됨.
 */
export const CROSS_REGION_COLLISIONS: Record<string, AreaOwnershipOverride> = {
  "송정동": {
    area: "송정동",
    ownerRegionType: "gyeonggi",
    ownerMunicipality: "광주시",
    ownerSlug: "gwangju-si",
    discardedFrom: [
      { regionType: "seoul", municipality: "성동구", slug: "seoul-seongdong" }
    ],
    reason: "P1-A Cross-Sitemap Exclusivity: 경기 우선 배정"
  },
  "군자동": {
    area: "군자동",
    ownerRegionType: "gyeonggi",
    ownerMunicipality: "시흥시",
    ownerSlug: "gyeonggi-siheung-si",
    discardedFrom: [
      { regionType: "seoul", municipality: "광진구", slug: "seoul-gwangjin" }
    ],
    reason: "P1-A Cross-Sitemap Exclusivity: 경기 우선 배정"
  },
  "갈현동": {
    area: "갈현동",
    ownerRegionType: "gyeonggi",
    ownerMunicipality: "과천시",
    ownerSlug: "gyeonggi-gwacheon-si",
    discardedFrom: [
      { regionType: "seoul", municipality: "은평구", slug: "seoul-eunpyeong" }
    ],
    reason: "P1-A Cross-Sitemap Exclusivity: 경기 우선 배정"
  },
  "다산동": {
    area: "다산동",
    ownerRegionType: "gyeonggi",
    ownerMunicipality: "남양주시",
    ownerSlug: "namyangju-si",
    discardedFrom: [
      { regionType: "seoul", municipality: "중구", slug: "seoul-junggu" }
    ],
    reason: "P1-A Cross-Sitemap Exclusivity: 경기 우선 배정"
  },
  "신천동": {
    area: "신천동",
    ownerRegionType: "gyeonggi",
    ownerMunicipality: "시흥시",
    ownerSlug: "gyeonggi-siheung-si",
    discardedFrom: [
      { regionType: "seoul", municipality: "송파구", slug: "seoul-songpa" }
    ],
    reason: "P1-A Cross-Sitemap Exclusivity: 경기 우선 배정"
  },
  "장지동": {
    area: "장지동",
    ownerRegionType: "gyeonggi",
    ownerMunicipality: "광주시",
    ownerSlug: "gwangju-si",
    discardedFrom: [
      { regionType: "seoul", municipality: "송파구", slug: "seoul-songpa" }
    ],
    reason: "P1-A Cross-Sitemap Exclusivity: 경기 우선 배정"
  },
  "오금동": {
    area: "오금동",
    ownerRegionType: "gyeonggi",
    ownerMunicipality: "군포시",
    ownerSlug: "gyeonggi-gunpo-si",
    discardedFrom: [
      { regionType: "seoul", municipality: "송파구", slug: "seoul-songpa" }
    ],
    reason: "P1-A Cross-Sitemap Exclusivity: 경기 우선 배정"
  },
  "위례동": {
    area: "위례동",
    ownerRegionType: "gyeonggi",
    ownerMunicipality: "성남시",
    ownerSlug: "gyeonggi-seongnam-si",
    discardedFrom: [
      { regionType: "seoul", municipality: "송파구", slug: "seoul-songpa" },
      { regionType: "gyeonggi", municipality: "하남시", slug: "gyeonggi-hanam-si" }
    ],
    reason: "P1-A Cross-Sitemap Exclusivity & Intra-Gyeonggi: 경기 성남시 우선 배정"
  },
  "시흥동": {
    area: "시흥동",
    ownerRegionType: "gyeonggi",
    ownerMunicipality: "성남시",
    ownerSlug: "gyeonggi-seongnam-si",
    discardedFrom: [
      { regionType: "seoul", municipality: "금천구", slug: "seoul-geumcheon" }
    ],
    reason: "P1-A Cross-Sitemap Exclusivity: 경기 우선 배정"
  },
  "목동": {
    area: "목동",
    ownerRegionType: "gyeonggi",
    ownerMunicipality: "광주시",
    ownerSlug: "gwangju-si",
    discardedFrom: [
      { regionType: "seoul", municipality: "양천구", slug: "seoul-yangcheon" }
    ],
    reason: "P1-A Cross-Sitemap Exclusivity: 경기 우선 배정"
  }
};

/**
 * 특정 지역명이 해당 지자체(시/구)에 귀속되는지 명시적으로 검증하는 가드 함수
 */
export function isAreaOwnedByMunicipality(
  area: string,
  regionType: 'seoul' | 'gyeonggi',
  municipality: string
): boolean {
  // 1. Cross-region collision 검사: 서울 지자체인 경우 경기에 배정된 10개 지역은 즉시 제외
  if (regionType === 'seoul' && CROSS_REGION_COLLISIONS[area]) {
    return false;
  }

  // 2. Intra-Seoul collision 검사: 서울 지자체인 경우 은평구 신사동만 허용, 강남구 신사동은 제외
  if (regionType === 'seoul' && INTRA_SEOUL_COLLISIONS[area]) {
    const rule = INTRA_SEOUL_COLLISIONS[area];
    return rule.ownerMunicipality === municipality;
  }

  // 3. Intra-Gyeonggi collision 검사: 경기 지자체인 경우 등록된 Owner 지자체만 허용
  if (regionType === 'gyeonggi' && INTRA_GYEONGGI_COLLISIONS[area]) {
    const rule = INTRA_GYEONGGI_COLLISIONS[area];
    return rule.ownerMunicipality === municipality;
  }

  // 충돌이 없는 고유 지역명은 소속 DB에 정의되어 있다면 정상 허용
  return true;
}
