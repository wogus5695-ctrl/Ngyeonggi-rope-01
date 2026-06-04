export interface AllowedRegion {
  slug: string;           // URL에 사용될 슬러그
  name: string;           // 페이지에 노출될 표시 이름 (동/구 단위)
  province: string;       // gyeonggi
  parentDistrict?: string; // 고양시, 파주시, 양주시 등 상위 시/구 명칭
}

export const TEUMSAE_ALLOWED_REGIONS: Record<string, AllowedRegion> = {
  // 고양시 (24개)
  "goyang": { slug: "goyang", name: "고양시", province: "gyeonggi" },
  "deogyang-gu": { slug: "deogyang-gu", name: "덕양구", province: "gyeonggi", parentDistrict: "고양시" },
  "ilsandong-gu": { slug: "ilsandong-gu", name: "일산동구", province: "gyeonggi", parentDistrict: "고양시" },
  "ilsanseo-gu": { slug: "ilsanseo-gu", name: "일산서구", province: "gyeonggi", parentDistrict: "고양시" },
  "hwajeong-dong": { slug: "hwajeong-dong", name: "화정동", province: "gyeonggi", parentDistrict: "고양시 덕양구" },
  "haengsin-dong": { slug: "haengsin-dong", name: "행신동", province: "gyeonggi", parentDistrict: "고양시 덕양구" },
  "neunggok-dong": { slug: "neunggok-dong", name: "능곡동", province: "gyeonggi", parentDistrict: "고양시 덕양구" },
  "wonheung-dong": { slug: "wonheung-dong", name: "원흥동", province: "gyeonggi", parentDistrict: "고양시 덕양구" },
  "samsong-dong": { slug: "samsong-dong", name: "삼송동", province: "gyeonggi", parentDistrict: "고양시 덕양구" },
  "jichuk-dong": { slug: "jichuk-dong", name: "지축동", province: "gyeonggi", parentDistrict: "고양시 덕양구" },
  "hyangdong-dong": { slug: "hyangdong-dong", name: "향동동", province: "gyeonggi", parentDistrict: "고양시 덕양구" },
  "seongsa-dong": { slug: "seongsa-dong", name: "성사동", province: "gyeonggi", parentDistrict: "고양시 덕양구" },
  "jugyo-dong": { slug: "jugyo-dong", name: "주교동", province: "gyeonggi", parentDistrict: "고양시 덕양구" },
  "baekseok-dong": { slug: "baekseok-dong", name: "백석동", province: "gyeonggi", parentDistrict: "고양시 일산동구" },
  "madu-dong": { slug: "madu-dong", name: "마두동", province: "gyeonggi", parentDistrict: "고양시 일산동구" },
  "janghang-dong": { slug: "janghang-dong", name: "장항동", province: "gyeonggi", parentDistrict: "고양시 일산동구" },
  "jeongbalsan-dong": { slug: "jeongbalsan-dong", name: "정발산동", province: "gyeonggi", parentDistrict: "고양시 일산동구" },
  "siksa-dong": { slug: "siksa-dong", name: "식사동", province: "gyeonggi", parentDistrict: "고양시 일산동구" },
  "pung-dong": { slug: "pung-dong", name: "풍동", province: "gyeonggi", parentDistrict: "고양시 일산동구" },
  "jungsan-dong": { slug: "jungsan-dong", name: "중산동", province: "gyeonggi", parentDistrict: "고양시 일산동구" },
  "tanhyeon-dong": { slug: "tanhyeon-dong", name: "탄현동", province: "gyeonggi", parentDistrict: "고양시 일산서구" },
  "daehwa-dong": { slug: "daehwa-dong", name: "대화동", province: "gyeonggi", parentDistrict: "고양시 일산서구" },
  "juyeop-dong": { slug: "juyeop-dong", name: "주엽동", province: "gyeonggi", parentDistrict: "고양시 일산서구" },
  "ilsan-dong": { slug: "ilsan-dong", name: "일산동", province: "gyeonggi", parentDistrict: "고양시 일산서구" },

  // 파주시 (13개)
  "paju": { slug: "paju", name: "파주시", province: "gyeonggi" },
  "geumchon-dong": { slug: "geumchon-dong", name: "금촌동", province: "gyeonggi", parentDistrict: "파주시" },
  "unjeong-dong": { slug: "unjeong-dong", name: "운정동", province: "gyeonggi", parentDistrict: "파주시" },
  "yadang-dong": { slug: "yadang-dong", name: "야당동", province: "gyeonggi", parentDistrict: "파주시" },
  "dongpae-dong": { slug: "dongpae-dong", name: "동패동", province: "gyeonggi", parentDistrict: "파주시" },
  "mokdong-dong": { slug: "mokdong-dong", name: "목동동", province: "gyeonggi", parentDistrict: "파주시" },
  "wadong-dong": { slug: "wadong-dong", name: "와동동", province: "gyeonggi", parentDistrict: "파주시" },
  "gyoha-dong": { slug: "gyoha-dong", name: "교하동", province: "gyeonggi", parentDistrict: "파주시" },
  "munsan-eup": { slug: "munsan-eup", name: "문산읍", province: "gyeonggi", parentDistrict: "파주시" },
  "jori-eup": { slug: "jori-eup", name: "조리읍", province: "gyeonggi", parentDistrict: "파주시" },
  "tanhyeon-myeon": { slug: "tanhyeon-myeon", name: "탄현면", province: "gyeonggi", parentDistrict: "파주시" },
  "beobwon-eup": { slug: "beobwon-eup", name: "법원읍", province: "gyeonggi", parentDistrict: "파주시" },
  "gwangtan-myeon": { slug: "gwangtan-myeon", name: "광탄면", province: "gyeonggi", parentDistrict: "파주시" },

  // 양주시 (12개)
  "yangju": { slug: "yangju", name: "양주시", province: "gyeonggi" },
  "okjeong-dong": { slug: "okjeong-dong", name: "옥정동", province: "gyeonggi", parentDistrict: "양주시" },
  "goeup-dong": { slug: "goeup-dong", name: "고읍동", province: "gyeonggi", parentDistrict: "양주시" },
  "deokjeong-dong": { slug: "deokjeong-dong", name: "덕정동", province: "gyeonggi", parentDistrict: "양주시" },
  "deokgye-dong": { slug: "deokgye-dong", name: "덕계동", province: "gyeonggi", parentDistrict: "양주시" },
  "hoecheon-dong": { slug: "hoecheon-dong", name: "회천동", province: "gyeonggi", parentDistrict: "양주시" },
  "hoejeong-dong": { slug: "hoejeong-dong", name: "회정동", province: "gyeonggi", parentDistrict: "양주시" },
  "samsung-dong": { slug: "samsung-dong", name: "삼숭동", province: "gyeonggi", parentDistrict: "양주시" },
  "gwangsa-dong": { slug: "gwangsa-dong", name: "광사동", province: "gyeonggi", parentDistrict: "양주시" },
  "baekseok-eup": { slug: "baekseok-eup", name: "백석읍", province: "gyeonggi", parentDistrict: "양주시" },
  "jangheung-myeon": { slug: "jangheung-myeon", name: "장흥면", province: "gyeonggi", parentDistrict: "양주시" },
  "eunhyeon-myeon": { slug: "eunhyeon-myeon", name: "은현면", province: "gyeonggi", parentDistrict: "양주시" },
  "nam-myeon": { slug: "nam-myeon", name: "남면", province: "gyeonggi", parentDistrict: "양주시" }
};

export function getTeumsaeRegion(citySlug: string) {
  return TEUMSAE_ALLOWED_REGIONS[citySlug] || null;
}
