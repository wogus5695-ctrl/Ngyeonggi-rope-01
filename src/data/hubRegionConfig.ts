/**
 * Municipality Hub Configuration
 * Phase P1-B-1 Implementation
 * 
 * 서울 25개 자치구 및 경기 19개 시군 (총 44개 Municipality Hub)의 단일 메타 정의.
 * P1-B-0-R2에서 확정된 URL 슬러그 및 명칭을 고정합니다.
 */

export interface MunicipalityMeta {
  id: string;
  regionType: 'seoul' | 'gyeonggi';
  displayName: string;
  slug: string;
  parentRegion: string;
  portfolioRefs?: string[];
}

/**
 * 서울 25개 자치구 허브 메타 정의
 */
export const SEOUL_MUNICIPALITIES: MunicipalityMeta[] = [
  { id: "seoul-dobong", regionType: "seoul", displayName: "도봉구", slug: "seoul-dobong", parentRegion: "서울특별시" },
  { id: "seoul-gangbuk", regionType: "seoul", displayName: "강북구", slug: "seoul-gangbuk", parentRegion: "서울특별시" },
  { id: "seoul-seongbuk", regionType: "seoul", displayName: "성북구", slug: "seoul-seongbuk", parentRegion: "서울특별시" },
  { id: "seoul-nowon", regionType: "seoul", displayName: "노원구", slug: "seoul-nowon", parentRegion: "서울특별시" },
  { id: "seoul-jungnang", regionType: "seoul", displayName: "중랑구", slug: "seoul-jungnang", parentRegion: "서울특별시" },
  { id: "seoul-dongdaemun", regionType: "seoul", displayName: "동대문구", slug: "seoul-dongdaemun", parentRegion: "서울특별시" },
  { id: "seoul-seongdong", regionType: "seoul", displayName: "성동구", slug: "seoul-seongdong", parentRegion: "서울특별시" },
  { id: "seoul-gwangjin", regionType: "seoul", displayName: "광진구", slug: "seoul-gwangjin", parentRegion: "서울특별시" },
  { id: "seoul-eunpyeong", regionType: "seoul", displayName: "은평구", slug: "seoul-eunpyeong", parentRegion: "서울특별시" },
  { id: "seoul-seodaemun", regionType: "seoul", displayName: "서대문구", slug: "seoul-seodaemun", parentRegion: "서울특별시" },
  { id: "seoul-mapo", regionType: "seoul", displayName: "마포구", slug: "seoul-mapo", parentRegion: "서울특별시" },
  { id: "seoul-yongsan", regionType: "seoul", displayName: "용산구", slug: "seoul-yongsan", parentRegion: "서울특별시" },
  { id: "seoul-junggu", regionType: "seoul", displayName: "중구", slug: "seoul-junggu", parentRegion: "서울특별시" },
  { id: "seoul-jongno-gu", regionType: "seoul", displayName: "종로구", slug: "seoul-jongno-gu", parentRegion: "서울특별시" },
  { id: "seoul-gangdong", regionType: "seoul", displayName: "강동구", slug: "seoul-gangdong", parentRegion: "서울특별시" },
  { id: "seoul-songpa", regionType: "seoul", displayName: "송파구", slug: "seoul-songpa", parentRegion: "서울특별시" },
  { id: "seoul-gangnam", regionType: "seoul", displayName: "강남구", slug: "seoul-gangnam", parentRegion: "서울특별시" },
  { id: "seoul-seocho", regionType: "seoul", displayName: "서초구", slug: "seoul-seocho", parentRegion: "서울특별시" },
  { id: "seoul-dongjak", regionType: "seoul", displayName: "동작구", slug: "seoul-dongjak", parentRegion: "서울특별시" },
  { id: "seoul-gwanak", regionType: "seoul", displayName: "관악구", slug: "seoul-gwanak", parentRegion: "서울특별시" },
  { id: "seoul-geumcheon", regionType: "seoul", displayName: "금천구", slug: "seoul-geumcheon", parentRegion: "서울특별시" },
  { id: "seoul-yeongdeungpo", regionType: "seoul", displayName: "영등포구", slug: "seoul-yeongdeungpo", parentRegion: "서울특별시" },
  { id: "seoul-yangcheon", regionType: "seoul", displayName: "양천구", slug: "seoul-yangcheon", parentRegion: "서울특별시" },
  { id: "seoul-guro", regionType: "seoul", displayName: "구로구", slug: "seoul-guro", parentRegion: "서울특별시" },
  { id: "seoul-gangseo", regionType: "seoul", displayName: "강서구", slug: "seoul-gangseo", parentRegion: "서울특별시" }
];

/**
 * 경기 19개 시군 허브 메타 정의
 * 포트폴리오 참조(portfolioRefs) 3건 바인딩:
 * - 고양시: "goyang-tanyheon-01"
 * - 파주시: "paju-unjeong-02"
 * - 양주시: "yangju-okjeong-03"
 */
export const GYEONGGI_MUNICIPALITIES: MunicipalityMeta[] = [
  { id: "goyang", regionType: "gyeonggi", displayName: "고양시", slug: "goyang", parentRegion: "경기도", portfolioRefs: ["goyang-tanyheon-01"] },
  { id: "paju", regionType: "gyeonggi", displayName: "파주시", slug: "paju", parentRegion: "경기도", portfolioRefs: ["paju-unjeong-02"] },
  { id: "yangju", regionType: "gyeonggi", displayName: "양주시", slug: "yangju", parentRegion: "경기도", portfolioRefs: ["yangju-okjeong-03"] },
  { id: "guri-si", regionType: "gyeonggi", displayName: "구리시", slug: "guri-si", parentRegion: "경기도" },
  { id: "uijeongbu-si", regionType: "gyeonggi", displayName: "의정부시", slug: "uijeongbu-si", parentRegion: "경기도" },
  { id: "dongducheon-si", regionType: "gyeonggi", displayName: "동두천시", slug: "dongducheon-si", parentRegion: "경기도" },
  { id: "namyangju-si", regionType: "gyeonggi", displayName: "남양주시", slug: "namyangju-si", parentRegion: "경기도" },
  { id: "gwangju-si", regionType: "gyeonggi", displayName: "광주시", slug: "gwangju-si", parentRegion: "경기도" },
  { id: "gyeonggi-gimpo-si", regionType: "gyeonggi", displayName: "김포시", slug: "gyeonggi-gimpo-si", parentRegion: "경기도" },
  { id: "gyeonggi-bucheon-si", regionType: "gyeonggi", displayName: "부천시", slug: "gyeonggi-bucheon-si", parentRegion: "경기도" },
  { id: "gyeonggi-gwangmyeong-si", regionType: "gyeonggi", displayName: "광명시", slug: "gyeonggi-gwangmyeong-si", parentRegion: "경기도" },
  { id: "gyeonggi-siheung-si", regionType: "gyeonggi", displayName: "시흥시", slug: "gyeonggi-siheung-si", parentRegion: "경기도" },
  { id: "gyeonggi-anyang-si", regionType: "gyeonggi", displayName: "안양시", slug: "gyeonggi-anyang-si", parentRegion: "경기도" },
  { id: "gyeonggi-gwacheon-si", regionType: "gyeonggi", displayName: "과천시", slug: "gyeonggi-gwacheon-si", parentRegion: "경기도" },
  { id: "gyeonggi-uiwang-si", regionType: "gyeonggi", displayName: "의왕시", slug: "gyeonggi-uiwang-si", parentRegion: "경기도" },
  { id: "gyeonggi-gunpo-si", regionType: "gyeonggi", displayName: "군포시", slug: "gyeonggi-gunpo-si", parentRegion: "경기도" },
  { id: "gyeonggi-seongnam-si", regionType: "gyeonggi", displayName: "성남시", slug: "gyeonggi-seongnam-si", parentRegion: "경기도" },
  { id: "gyeonggi-hanam-si", regionType: "gyeonggi", displayName: "하남시", slug: "gyeonggi-hanam-si", parentRegion: "경기도" },
  { id: "gyeonggi-suwon-si", regionType: "gyeonggi", displayName: "수원시", slug: "gyeonggi-suwon-si", parentRegion: "경기도" }
];

export const ALL_MUNICIPALITIES: MunicipalityMeta[] = [
  ...SEOUL_MUNICIPALITIES,
  ...GYEONGGI_MUNICIPALITIES
];
