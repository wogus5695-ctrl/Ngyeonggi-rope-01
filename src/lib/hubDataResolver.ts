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
  GYEONGGI_SOUTH_REGIONS_DB,
  SERVICES
} from '@/data/sitemapKeywords';
import {
  SEOUL_MUNICIPALITIES,
  GYEONGGI_MUNICIPALITIES,
  ALL_MUNICIPALITIES,
  MunicipalityMeta
} from '@/data/hubRegionConfig';
import {
  isAreaOwnedByMunicipality
} from '@/data/hubCollisionRegistry';
import { SEO_PILOT_KEYWORDS } from '@/data/seoPilotConfig';

export const BASE_URL = 'https://www.teumsaecare.co.kr';

const WATERPROOFING_SERVICES = [
  "외벽방수",
  "옥상방수",
  "건물방수",
  "외벽도색",
  "지붕방수",
  "지붕보수",
  "지붕누수"
];

const ALL_SERVICES = [...SERVICES, ...WATERPROOFING_SERVICES]; // 13개 서비스

export interface MunicipalityHubData extends MunicipalityMeta {
  assignedRegionNames: string[];
  dynamicUrls: string[];
  pilotKeywords: string[];
}

/**
 * 경기 권역 19개 지자체 원본 그룹 목록
 */
const GYEONGGI_RAW_GROUPS = [
  ...REGIONS_DB,
  ...GYEONGGI_WEST_REGIONS_DB,
  ...GYEONGGI_MID_REGIONS_DB,
  ...GYEONGGI_SOUTH_EAST_REGIONS_DB,
  ...GYEONGGI_SOUTH_REGIONS_DB
];

/**
 * 서울 권역 25개 자치구 원본 그룹 목록
 */
const SEOUL_RAW_GROUPS = [
  ...SEOUL_EAST_REGIONS_DB,
  ...SEOUL_WEST_REGIONS_DB,
  ...SEOUL_CENTER_REGIONS_DB,
  ...SEOUL_SOUTH_EAST_REGIONS_DB,
  ...SEOUL_SOUTH_WEST_REGIONS_DB
];

/**
 * 16개 Pilot 키워드 Set (캐싱용)
 */
const PILOT_SET = new Set<string>(SEO_PILOT_KEYWORDS);

/**
 * 서울 25개 자치구 Hub 데이터 전수 생성
 */
export function getSeoulMunicipalityHubs(): MunicipalityHubData[] {
  const hubs: MunicipalityHubData[] = [];

  SEOUL_MUNICIPALITIES.forEach(meta => {
    // 해당 자치구의 DB 정의 검색
    const group = SEOUL_RAW_GROUPS.find(g => g.city === meta.displayName);
    if (!group) {
      throw new Error(`Seoul group not found for ${meta.displayName}`);
    }

    const assignedRegionNames: string[] = [];
    const dynamicUrls: string[] = [];
    const pilotKeywords: string[] = [];

    group.areas.forEach(area => {
      // 명시적 Collision Ownership Guard 검증
      if (!isAreaOwnedByMunicipality(area, 'seoul', meta.displayName)) {
        return;
      }

      assignedRegionNames.push(area);

      // 13개 서비스 동적 URL 생성
      ALL_SERVICES.forEach(service => {
        const fullKeyword = `${area}-${service}`;
        const url = `${BASE_URL}/?k=${encodeURIComponent(fullKeyword)}`;
        dynamicUrls.push(url);

        if (PILOT_SET.has(fullKeyword)) {
          pilotKeywords.push(fullKeyword);
        }
      });
    });

    hubs.push({
      ...meta,
      assignedRegionNames,
      dynamicUrls,
      pilotKeywords
    });
  });

  return hubs;
}

/**
 * 경기 19개 시군 Hub 데이터 전수 생성
 */
export function getGyeonggiMunicipalityHubs(): MunicipalityHubData[] {
  const hubs: MunicipalityHubData[] = [];

  GYEONGGI_MUNICIPALITIES.forEach(meta => {
    // 해당 시군의 DB 정의 검색
    const group = GYEONGGI_RAW_GROUPS.find(g => g.city === meta.displayName);
    if (!group) {
      throw new Error(`Gyeonggi group not found for ${meta.displayName}`);
    }

    const assignedRegionNames: string[] = [];
    const dynamicUrls: string[] = [];
    const pilotKeywords: string[] = [];

    group.areas.forEach(area => {
      // 명시적 Collision Ownership Guard 검증
      if (!isAreaOwnedByMunicipality(area, 'gyeonggi', meta.displayName)) {
        return;
      }

      assignedRegionNames.push(area);

      // 13개 서비스 동적 URL 생성
      ALL_SERVICES.forEach(service => {
        const fullKeyword = `${area}-${service}`;
        const url = `${BASE_URL}/?k=${encodeURIComponent(fullKeyword)}`;
        dynamicUrls.push(url);

        if (PILOT_SET.has(fullKeyword)) {
          pilotKeywords.push(fullKeyword);
        }
      });
    });

    hubs.push({
      ...meta,
      assignedRegionNames,
      dynamicUrls,
      pilotKeywords
    });
  });

  return hubs;
}

/**
 * 서울 슬러그로 Hub 데이터 단건 조회
 */
export function getSeoulHubBySlug(slug: string): MunicipalityHubData | null {
  if (!slug) return null;
  const hubs = getSeoulMunicipalityHubs();
  return hubs.find(h => h.slug === slug) || null;
}

/**
 * 경기 슬러그로 Hub 데이터 단건 조회
 */
export function getGyeonggiHubBySlug(slug: string): MunicipalityHubData | null {
  if (!slug) return null;
  const hubs = getGyeonggiMunicipalityHubs();
  return hubs.find(h => h.slug === slug) || null;
}

/**
 * 전체 44개 Municipality Hub 데이터 통합 조회
 */
export function getAllMunicipalityHubs(): MunicipalityHubData[] {
  return [
    ...getSeoulMunicipalityHubs(),
    ...getGyeonggiMunicipalityHubs()
  ];
}
