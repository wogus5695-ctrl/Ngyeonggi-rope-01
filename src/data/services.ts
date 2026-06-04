export interface Service {
  slug: string;
  title: string;
  shortDesc: string;
}

export const services: Service[] = [
  {
    slug: "window-caulking",
    title: "창틀코킹",
    shortDesc: "노후된 아파트/빌라의 기존 외부 실리콘을 완전히 제거한 뒤, 고내후성 창호 전용 실런트로 빈틈없이 재시공하여 빗물을 차단합니다."
  },
  {
    slug: "window-leak",
    title: "창틀누수",
    shortDesc: "샷시 프레임과 콘크리트 옹벽 사이의 이격 및 수축 수축 균열을 찾아내어 기밀성을 높이고 내부 벽지 손상을 차단합니다."
  },
  {
    slug: "rain-leak",
    title: "빗물누수",
    shortDesc: "비바람이 불 때 베란다 주변이나 내부로 스며드는 빗물의 흔적을 추적하여 외부 마감재 및 조인트 틈새를 확실히 방수 처리합니다."
  },
  {
    slug: "window-silicone",
    title: "창틀실리콘",
    shortDesc: "부스러지고 탈락하여 성능을 잃은 기존 실리콘을 전용 스크래퍼로 탈거하고 최적의 프라이머 도포 후 탄성 실리콘으로 마감합니다."
  },
  {
    slug: "sash-silicone",
    title: "샷시실리콘",
    shortDesc: "창틀과 유리가 접하는 코너 부위 및 샷시 외부 이음새에 강력한 신축 대응력을 지닌 비초산 창호 전용 실런트를 채워 밀봉합니다."
  },
  {
    slug: "outer-wall-leak",
    title: "외벽누수",
    shortDesc: "창틀 상부 및 인근 외벽에 발생한 미세 크랙이나 드라이비트 균열부로 흘러드는 누수를 차단하기 위해 고점도 외벽 균열 보강제를 주입합니다."
  }
];
