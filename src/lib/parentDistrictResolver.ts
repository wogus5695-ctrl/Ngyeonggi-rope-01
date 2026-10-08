import { TEUMSAE_ALLOWED_REGIONS } from "@/data/allowedKeywords";
import { 
  INTRA_SEOUL_COLLISIONS, 
  INTRA_GYEONGGI_COLLISIONS, 
  CROSS_REGION_COLLISIONS 
} from "@/data/hubCollisionRegistry";

/**
 * P2 Content Engine용 정규 행정구역 상위 지자체(Parent District) 리졸버
 * 
 * 1. Collision Registry(소유권 레지스트리)에 등록된 지역인 경우 Registry의 공식 관할 지자체명 반환
 *    (예: 신사동 -> 서울시 은평구, 위례동 -> 성남시, 옥길동 -> 부천시)
 * 2. TEUMSAE_ALLOWED_REGIONS에 명시된 parentDistrict 반환
 *    (예: 화곡동 -> 서울시 강서구)
 * 3. 매칭되지 않는 일반 시/구의 경우 광역 자치단체(서울특별시 / 경기도) 기반 안전 반환
 */
export function resolveParentDistrict(regionName: string): string | undefined {
  if (!regionName) return undefined;

  // 1. Cross-Region Collision 우선 확인 (경기에 단독 배정된 지역)
  if (CROSS_REGION_COLLISIONS[regionName]) {
    const owner = CROSS_REGION_COLLISIONS[regionName];
    return owner.ownerRegionType === 'seoul' 
      ? `서울시 ${owner.ownerMunicipality}` 
      : owner.ownerMunicipality;
  }

  // 2. Intra-Seoul Collision 확인 (은평구 신사동 등)
  if (INTRA_SEOUL_COLLISIONS[regionName]) {
    const owner = INTRA_SEOUL_COLLISIONS[regionName];
    return `서울시 ${owner.ownerMunicipality}`;
  }

  // 3. Intra-Gyeonggi Collision 확인 (남양주시 금곡동, 성남시 위례동 등)
  if (INTRA_GYEONGGI_COLLISIONS[regionName]) {
    const owner = INTRA_GYEONGGI_COLLISIONS[regionName];
    return owner.ownerMunicipality;
  }

  // 4. TEUMSAE_ALLOWED_REGIONS 사전 검색
  const matchedRegion = Object.values(TEUMSAE_ALLOWED_REGIONS).find(
    r => r.name === regionName || r.slug === regionName
  );

  if (matchedRegion?.parentDistrict) {
    return matchedRegion.parentDistrict;
  }

  if (matchedRegion?.province === 'seoul') {
    return '서울시';
  } else if (matchedRegion?.province === 'gyeonggi') {
    return '경기도';
  }

  return undefined;
}
