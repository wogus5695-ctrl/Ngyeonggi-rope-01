export interface PortfolioCase {
  id: string;
  title: string;
  location: string;
  serviceType: string;
  date: string;
  description: string;
  images: { before: string; after: string };
  highlights: string[];
}

export const portfolioCases: PortfolioCase[] = [
  {
    id: "goyang-tanyheon-01",
    title: "고양시 탄현동 15년 차 아파트 외부 창틀코킹 전체 시공",
    location: "경기도 고양시 일산서구 탄현동",
    serviceType: "창틀코킹 / 빗물누수",
    date: "2026-05-12",
    description: "장마철마다 베란다 하단 실크벽지에 빗물이 번지던 현장입니다. 확인 결과 기존 실리콘이 자외선 노출로 완전히 삭아서 가루 형태로 떨어져 나간 상태였습니다. 로프 진입을 통해 기존 실리콘을 100% 긁어내고 고착력이 우수한 프라이머를 충분히 먹인 뒤 광폭으로 창호 전용 실런트를 밀착 성형하여 미세 유입 경로를 완벽히 메웠습니다.",
    images: {
      before: "/portfolio/goyang-before.jpg",
      after: "/portfolio/goyang-after.jpg"
    },
    highlights: [
      "삭아버린 기존 실리콘 전면 제거 및 고압 청소",
      "고부착 전용 프라이머 도포 후 충분한 건조 시간 확보",
      "창틀 하단 경사면 빗물 흘림각을 고려한 광폭 압착 실링"
    ]
  },
  {
    id: "paju-unjeong-02",
    title: "파주시 운정신도시 아파트 샷시실리콘 보수 및 외벽 균열 충진",
    location: "경기도 파주시 목동동 (운정신도시)",
    serviceType: "샷시실리콘 / 외벽누수",
    date: "2026-05-24",
    description: "창틀 상부 주변 콘크리트 인근 외벽 크랙을 타고 빗물이 유입되어 거실 천장 몰딩 부근까지 얼룩이 퍼진 현장입니다. 정밀 실사 결과 창호 외부 마감 부위뿐만 아니라 윗집 경계선 부근 외벽에 수직 균열이 진행 중이었습니다. 누수 발생 부위 상부의 균열에 고신축 외벽 보강 크랙 실런트를 주입하여 메우고, 창틀 테두리는 비초산 고기밀 자재로 두툼하게 코킹 처리하였습니다.",
    images: {
      before: "/portfolio/paju-before.jpg",
      after: "/portfolio/paju-after.jpg"
    },
    highlights: [
      "열화상 분석을 통해 창틀 상부 외벽 균열로 이어지는 물길 추적",
      "외벽 균열 보수를 위한 고탄성 균열 침투제 보강 작업 병행",
      "사후 재발을 최소화하기 위한 샤시 외곽 전 구간 밀봉 마감"
    ]
  },
  {
    id: "yangju-okjeong-03",
    title: "양주시 옥정동 신축 빌라 빗물누수 정밀 진단 및 실리콘 코킹 보수",
    location: "경기도 양주시 옥정동",
    serviceType: "빗물누수 / 창틀누수",
    date: "2026-05-30",
    description: "외벽 드라이비트 마감재와 샷시 프레임 간의 마감 불량으로 인해 바람이 세게 부는 날에만 창틀 하부 틈으로 빗물이 고이는 현상이었습니다. 미세한 유격 공간에 특수 노즐을 사용하여 기밀성 충진재를 고압 주입하고, 드라이비트 전용 탄성 프라이머와 실리콘 결합을 극대화하여 미세 틈새를 메워 시공 품질을 확보했습니다.",
    images: {
      before: "/portfolio/yangju-before.jpg",
      after: "/portfolio/yangju-after.jpg"
    },
    highlights: [
      "드라이비트 마감재 수축으로 인한 틈새 밀봉 조치",
      "이물질 침투 방지 및 기밀 주입 공법 적용",
      "시공 완료 후 물을 뿌리는 수밀 간이 테스트를 통해 누수 방지 검증"
    ]
  }
];
