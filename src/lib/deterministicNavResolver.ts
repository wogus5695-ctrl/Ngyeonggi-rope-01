/**
 * Deterministic Navigation Resolver
 * Phase P2-F1-B Implementation
 * 
 * 7 Pilot URL 전용 결정론적(Deterministic) 내부링크 및 상위 지자체 Hub 리졸버.
 * 
 * 원칙:
 * 1. Math.random() 사용 100% 금지 (동일 URL에 항상 동일 링크 세트 반환)
 * 2. Same Service ONLY, Same Municipality ONLY
 * 3. min(6, availableCount) 준수 (부족할 경우 N개만 정직하게 출력, 중복 패딩 금지)
 * 4. "인접 지역" 문구 금지 -> "{지자체명} 내 다른 지역" 사용
 * 5. 44개 정규 Hub 라우트 기반 정확한 대상 경로 반환
 */

import {
  REGIONS_DB,
  SEOUL_EAST_REGIONS_DB,
  SEOUL_WEST_REGIONS_DB,
  SEOUL_CENTER_REGIONS_DB,
  SEOUL_SOUTH_EAST_REGIONS_DB,
  SEOUL_SOUTH_WEST_REGIONS_DB,
  GYEONGGI_WEST_REGIONS_DB,
  GYEONGGI_MID_REGIONS_DB,
  GYEONGGI_SOUTH_EAST_REGIONS_DB,
  GYEONGGI_SOUTH_REGIONS_DB
} from "@/data/sitemapKeywords";
import {
  SEOUL_MUNICIPALITIES,
  GYEONGGI_MUNICIPALITIES,
  MunicipalityMeta
} from "@/data/hubRegionConfig";
import {
  INTRA_SEOUL_COLLISIONS,
  INTRA_GYEONGGI_COLLISIONS,
  CROSS_REGION_COLLISIONS,
  isAreaOwnedByMunicipality
} from "@/data/hubCollisionRegistry";
import { resolveParentDistrict } from "@/lib/parentDistrictResolver";

export interface NavLinkItem {
  name: string;
  url: string;
  anchorText: string;
}

export interface DeterministicNavResult {
  municipalityName: string;
  municipalityHubUrl: string;
  navType: 'CHILD_DIRECTORY' | 'SIBLING_NAVIGATION';
  links: NavLinkItem[];
}

const ALL_SEOUL_GROUPS = [
  ...SEOUL_EAST_REGIONS_DB,
  ...SEOUL_WEST_REGIONS_DB,
  ...SEOUL_CENTER_REGIONS_DB,
  ...SEOUL_SOUTH_EAST_REGIONS_DB,
  ...SEOUL_SOUTH_WEST_REGIONS_DB
];

const ALL_GYEONGGI_GROUPS = [
  ...REGIONS_DB,
  ...GYEONGGI_WEST_REGIONS_DB,
  ...GYEONGGI_MID_REGIONS_DB,
  ...GYEONGGI_SOUTH_EAST_REGIONS_DB,
  ...GYEONGGI_SOUTH_REGIONS_DB
];

/**
 * 특정 지역의 공식 관할 지자체 메타(MunicipalityMeta)를 정밀 조회합니다.
 */
export function resolveMunicipalityMeta(regionName: string): MunicipalityMeta | null {
  if (!regionName) return null;

  // 1. Collision Registry 소유권 우선 확인
  if (CROSS_REGION_COLLISIONS[regionName]) {
    const owner = CROSS_REGION_COLLISIONS[regionName];
    const hub = GYEONGGI_MUNICIPALITIES.find(m => m.displayName === owner.ownerMunicipality);
    if (hub) return hub;
  }
  if (INTRA_SEOUL_COLLISIONS[regionName]) {
    const owner = INTRA_SEOUL_COLLISIONS[regionName];
    const hub = SEOUL_MUNICIPALITIES.find(m => m.displayName === owner.ownerMunicipality);
    if (hub) return hub;
  }
  if (INTRA_GYEONGGI_COLLISIONS[regionName]) {
    const owner = INTRA_GYEONGGI_COLLISIONS[regionName];
    const hub = GYEONGGI_MUNICIPALITIES.find(m => m.displayName === owner.ownerMunicipality);
    if (hub) return hub;
  }

  // 2. 자신이 지자체 자체인 경우
  const directSeoul = SEOUL_MUNICIPALITIES.find(m => m.displayName === regionName);
  if (directSeoul) return directSeoul;

  const directGyeonggi = GYEONGGI_MUNICIPALITIES.find(m => m.displayName === regionName);
  if (directGyeonggi) return directGyeonggi;

  // 3. parentDistrictResolver 결과 활용
  const parent = resolveParentDistrict(regionName);
  if (parent) {
    // "서울시 은평구" -> "은평구", "고양시" -> "고양시"
    const cleanedParent = parent.replace(/^서울시\s+/, '').replace(/^경기도\s+/, '').split(' ')[0];
    const foundSeoul = SEOUL_MUNICIPALITIES.find(m => m.displayName === cleanedParent);
    if (foundSeoul) return foundSeoul;
    const foundGyeonggi = GYEONGGI_MUNICIPALITIES.find(m => m.displayName === cleanedParent);
    if (foundGyeonggi) return foundGyeonggi;
  }

  // 4. Raw Groups 검색
  const seoulGroup = ALL_SEOUL_GROUPS.find(g => g.areas.includes(regionName));
  if (seoulGroup) {
    const found = SEOUL_MUNICIPALITIES.find(m => m.displayName === seoulGroup.city);
    if (found) return found;
  }

  const gyeonggiGroup = ALL_GYEONGGI_GROUPS.find(g => g.areas.includes(regionName));
  if (gyeonggiGroup) {
    const found = GYEONGGI_MUNICIPALITIES.find(m => m.displayName === gyeonggiGroup.city);
    if (found) return found;
  }

  return null;
}

/**
 * 지자체 관할 하위 구역 전체 목록을 정규 소유권(Collision Guard) 적용 후 반환합니다.
 */
export function getAssignedAreasForMunicipality(meta: MunicipalityMeta): string[] {
  const isSeoul = meta.regionType === 'seoul';
  const rawGroups = isSeoul ? ALL_SEOUL_GROUPS : ALL_GYEONGGI_GROUPS;
  const group = rawGroups.find(g => g.city === meta.displayName);
  if (!group) return [];

  const validAreas: string[] = [];
  group.areas.forEach(area => {
    if (isAreaOwnedByMunicipality(area, meta.regionType, meta.displayName)) {
      validAreas.push(area);
    }
  });

  return validAreas;
}

/**
 * 결정론적(Deterministic) 6개 내비게이션 링크를 도출합니다.
 */
export function resolveDeterministicNav(
  regionName: string,
  serviceName: string,
  isMunicipalityCore: boolean
): DeterministicNavResult | null {
  const meta = resolveMunicipalityMeta(regionName);
  if (!meta) return null;

  const hubUrl = meta.regionType === 'seoul'
    ? `/sitemap-seoul/${meta.slug}`
    : `/sitemap-gyeonggi/${meta.slug}`;

  const allAreas = getAssignedAreasForMunicipality(meta);

  // 현재 지역 제외
  const candidateAreas = allAreas.filter(a => a !== regionName);

  if (candidateAreas.length === 0) {
    return {
      municipalityName: meta.displayName,
      municipalityHubUrl: hubUrl,
      navType: isMunicipalityCore ? 'CHILD_DIRECTORY' : 'SIBLING_NAVIGATION',
      links: []
    };
  }

  // 결정론적 선택: 현재 지역의 원본 인덱스를 기반으로 순환 슬라이싱(Cyclic Slice)
  const currentIndex = allAreas.indexOf(regionName);
  const baseOffset = currentIndex >= 0 ? currentIndex : 0;

  const targetCount = Math.min(6, candidateAreas.length);
  const selectedAreas: string[] = [];

  for (let i = 0; i < targetCount; i++) {
    const pickIdx = (baseOffset + i) % candidateAreas.length;
    selectedAreas.push(candidateAreas[pickIdx]);
  }

  const links: NavLinkItem[] = selectedAreas.map(area => ({
    name: area,
    url: `/?k=${encodeURIComponent(`${area}-${serviceName}`)}`,
    anchorText: `${meta.displayName} ${area} ${serviceName}`
  }));

  return {
    municipalityName: meta.displayName,
    municipalityHubUrl: hubUrl,
    navType: isMunicipalityCore ? 'CHILD_DIRECTORY' : 'SIBLING_NAVIGATION',
    links
  };
}
