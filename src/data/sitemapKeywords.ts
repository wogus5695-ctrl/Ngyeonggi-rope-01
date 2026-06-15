/**
 * 레인가드 키워드 데이터베이스 정의 파일
 * 경기 북부 3대 시(고양시, 파주시, 양주시)의 49개 세부 지역명 정의
 * 총 키워드 수 = 49개 지역 * 6개 서비스 = 294개 조합
 */

export const GOYANG_REGIONS = [
  "고양시",
  "덕양구",
  "일산동구",
  "일산서구",
  "화정동",
  "행신동",
  "능곡동",
  "원흥동",
  "삼송동",
  "지축동",
  "향동동",
  "성사동",
  "주교동",
  "백석동",
  "마두동",
  "장항동",
  "정발산동",
  "식사동",
  "풍동",
  "중산동",
  "탄현동",
  "대화동",
  "주엽동",
  "일산동"
];

export const PAJU_REGIONS = [
  "파주시",
  "금촌동",
  "운정동",
  "야당동",
  "동패동",
  "목동동",
  "와동동",
  "교하동",
  "문산읍",
  "조리읍",
  "탄현면",
  "법원읍",
  "광탄면"
];

export const YANGJU_REGIONS = [
  "양주시",
  "옥정동",
  "고읍동",
  "덕정동",
  "덕계동",
  "회천동",
  "회정동",
  "삼숭동",
  "광사동",
  "백석읍",
  "장흥면",
  "은현면",
  "남면"
];

export const GURI_REGIONS = [
  "구리",
  "구리시",
  "갈매동",
  "사노동",
  "인창동",
  "교문동",
  "수택동",
  "아천동",
  "토평동"
];

export const UIJEONGBU_REGIONS = [
  "의정부",
  "의정부시",
  "의정부동",
  "호원동",
  "장암동",
  "신곡동",
  "용현동",
  "민락동",
  "낙양동",
  "자일동",
  "금오동",
  "가능동",
  "녹양동",
  "고산동",
  "산곡동"
];

export const DONGDUCHEON_REGIONS = [
  "동두천",
  "동두천시",
  "생연동",
  "지행동",
  "송내동",
  "광암동",
  "걸산동",
  "보산동",
  "동두천동",
  "안흥동",
  "상봉암동",
  "하봉암동"
];

export const NAMYANGJU_REGIONS = [
  "남양주",
  "남양주시",
  "와부읍",
  "진접읍",
  "화도읍",
  "진건읍",
  "오남읍",
  "퇴계원읍",
  "별내면",
  "수동면",
  "조안면",
  "호평동",
  "평내동",
  "금곡동",
  "일패동",
  "이패동",
  "삼패동",
  "수석동",
  "지금동",
  "도농동",
  "다산동",
  "별내동"
];

export const GWANGJU_REGIONS = [
  "광주",
  "광주시",
  "경안동",
  "쌍령동",
  "송정동",
  "회덕동",
  "탄벌동",
  "목현동",
  "삼동",
  "중대동",
  "직동",
  "태전동",
  "장지동",
  "목동",
  "신현동",
  "능평동",
  "오포동",
  "양벌동",
  "고산동",
  "초월읍",
  "곤지암읍",
  "도척면",
  "퇴촌면",
  "남종면",
  "남한산성면"
];

export const REGIONS_DB = [
  { city: "고양시", areas: GOYANG_REGIONS },
  { city: "파주시", areas: PAJU_REGIONS },
  { city: "양주시", areas: YANGJU_REGIONS },
  { city: "구리시", areas: GURI_REGIONS },
  { city: "의정부시", areas: UIJEONGBU_REGIONS },
  { city: "동두천시", areas: DONGDUCHEON_REGIONS },
  { city: "남양주시", areas: NAMYANGJU_REGIONS },
  { city: "광주시", areas: GWANGJU_REGIONS }
];


export const SERVICES = [
  "창틀코킹",
  "창틀누수",
  "빗물누수",
  "창틀실리콘",
  "샷시실리콘",
  "외벽누수"
];

export const SERVICE_SLUGS: Record<string, string> = {
  "창틀코킹": "window-caulking",
  "창틀누수": "window-leak",
  "빗물누수": "rain-leak",
  "창틀실리콘": "window-silicone",
  "샷시실리콘": "sash-silicone",
  "외벽누수": "outer-wall-leak"
};

export const SERVICE_TITLES: Record<string, string> = {
  "window-caulking": "창틀코킹",
  "window-leak": "창틀누수",
  "rain-leak": "빗물누수",
  "window-silicone": "창틀실리콘",
  "sash-silicone": "샷시실리콘",
  "outer-wall-leak": "외벽누수"
};

export const SERVICE_DESCS: Record<string, string> = {
  "window-caulking": "노후된 아파트 및 빌라의 창호 실리콘을 전면 제거하고, 고내후성 전용 실런트로 빗물을 완벽 차단하는 전문 시공입니다.",
  "window-leak": "샷시 프레임과 콘크리트 벽체 사이의 수축 팽창으로 인한 이격과 누수를 진단하여 정밀 밀봉합니다.",
  "rain-leak": "장마철 및 집중호우 시 외벽 마감재 및 창호 틈새로 유입되는 빗물의 유입 경로를 역추적하여 방수 보강합니다.",
  "window-silicone": "갈라지고 부식되어 가루가 날리는 기존 외부 실리콘을 고정밀 스크래핑으로 탈거하고 친환경 고기밀 실리콘으로 시공합니다.",
  "sash-silicone": "이음새 밀착이 불량한 샷시 프레임 주변의 틈새를 고탄성 실런트로 압착 주입하여 단열 및 방수 성능을 복원합니다.",
  "outer-wall-leak": "창틀 주변 외벽의 미세 균열 및 크랙으로 물이 스며드는 현상을 고성능 균열 충진재로 보수하여 누수를 차단합니다."
};
