/**
 * Jongno Caulking Cohort Configuration
 * Target: Exactly 15 URLs (종로구 및 14개 세부 동 x 창틀누수)
 * 
 * 실험 목표:
 * 새지마요 경쟁사이트의 슬림한 텍스트 구조와 2차원 내부 링크 매트릭스를 벤치마킹하여,
 * 종로구 15개 창틀누수 페이지에 과장 없는 고신뢰 진단형 콘텐츠와 상호 교차 링크를 안전하게 적용합니다.
 * 
 * 엄격한 원칙:
 * 1. 15개 외 지역 및 작업명에 절대 적용 금지 (회귀 0건)
 * 2. 신규 동명 추가 금지, 당주동 추가 금지, 3단 결합 금지
 * 3. 전화번호 (010-3951-6831) 및 사업자 (올케어서비스 김재현) 유지
 * 4. Title, Meta Description, H1 원칙적 보존
 * 5. 생성되는 모든 내부 링크는 실제 존재하는 200 OK URL로만 구성
 */

export const JONGNO_COHORT_REGIONS = [
  "종로구",
  "청운효자동",
  "사직동",
  "삼청동",
  "부암동",
  "평창동",
  "무악동",
  "교남동",
  "가회동",
  "종로",
  "이화동",
  "혜화동",
  "창신동",
  "숭인동",
  "명륜동",
] as const;

export type JongnoCohortRegion = typeof JONGNO_COHORT_REGIONS[number];

const JONGNO_REGIONS_SET = new Set<string>(JONGNO_COHORT_REGIONS);

/**
 * 주어진 키워드가 종로구 15개 창틀누수 코호트 대상인지 확인
 */
export function isJongnoCaulkingCohort(keyword: string | undefined): boolean {
  if (!keyword) return false;
  const decoded = decodeURIComponent(keyword).trim();
  const parts = decoded.split("-");
  if (parts.length !== 2) return false;
  const [region, service] = parts;
  return service === "창틀누수" && JONGNO_REGIONS_SET.has(region);
}

export interface LinkItem {
  label: string;
  href: string;
  description?: string;
}

export interface JongnoCohortLinkMatrix {
  groupA: {
    title: string;
    description: string;
    links: LinkItem[];
  };
  groupB: {
    title: string;
    description: string;
    links: LinkItem[];
  };
  groupC: {
    title: string;
    description: string;
    links: LinkItem[];
  };
}

export interface JongnoCohortData {
  region: string;
  service: string;
  hero: {
    badgeText: string;
    headline: string;
    h1Main: string;
    h1Sub: string;
    subCopy: string;
    intro: string;
    badges: string[];
  };
  symptoms: {
    badge: string;
    headline: string;
    description: string;
    cards: Array<{
      title: string;
      description: string;
    }>;
    cautionText: string;
  };
  checkList: {
    badge: string;
    headline: string;
    description: string;
    items: Array<{
      title: string;
      detail: string;
    }>;
    safetyNotice: string;
  };
  judgmentGuide: {
    badge: string;
    headline: string;
    description: string;
    points: Array<{
      subtitle: string;
      content: string;
    }>;
  };
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  linkMatrix: JongnoCohortLinkMatrix;
}

/**
 * 종로구 15개 창틀누수 전용 콘텐츠 및 2차원 링크 매트릭스 생성
 */
export function getJongnoCohortData(region: string): JongnoCohortData {
  const isDistrict = region === "종로구";

  // 그룹 A: 동일 지역 관련 창틀/누수 작업 4개
  const groupALinks: LinkItem[] = [
    { label: `${region} 빗물누수 점검`, href: `/?k=${encodeURIComponent(`${region}-빗물누수`)}` },
    { label: `${region} 창틀코킹 시공`, href: `/?k=${encodeURIComponent(`${region}-창틀코킹`)}` },
    { label: `${region} 창틀실리콘 보수`, href: `/?k=${encodeURIComponent(`${region}-창틀실리콘`)}` },
    { label: `${region} 샷시실리콘 교체`, href: `/?k=${encodeURIComponent(`${region}-샷시실리콘`)}` },
  ];

  // 그룹 B: 종로구 내 다른 지역 창틀누수 링크 (그룹 C와 중복 방지: 동 단위일 경우 그룹 B에는 하위 동들만 매핑)
  const otherRegions = JONGNO_COHORT_REGIONS.filter((r) => r !== region && (isDistrict || r !== "종로구"));
  const groupBLinks: LinkItem[] = otherRegions.map((r) => ({
    label: `${r} 창틀누수`,
    href: `/?k=${encodeURIComponent(`${r}-창틀누수`)}`,
  }));

  // 그룹 C: 상위 자치구 및 종로구 안내 허브
  const groupCLinks: LinkItem[] = [];
  if (!isDistrict) {
    groupCLinks.push({
      label: "종로구 창틀누수 전체 안내",
      href: `/?k=${encodeURIComponent("종로구-창틀누수")}`,
      description: "종로구 관내 통합 창틀누수 점검 및 외벽 방수 안내",
    });
  }
  groupCLinks.push({
    label: "서울 종로구 서비스 지역 안내 허브",
    href: "/sitemap-seoul/seoul-jongno-gu",
    description: "종로구 15개 동별 제공 서비스 및 지역 현황",
  });

  return {
    region,
    service: "창틀누수",
    hero: {
      badgeText: `${region} 창틀 실리콘 및 빗물 유입 부위 점검`,
      headline: `${region} 창틀누수 점검 및 외부 틈새 보수`,
      h1Main: `${region} 창틀누수,`,
      h1Sub: "실내 실리콘만 덧바르면 해결될까요?",
      subCopy: "비가 올 때 창틀 주변이 젖는다면 단순 덧방보다 외부 실리콘 상태와 접합부 틈새를 먼저 확인해야 합니다.",
      intro: `${region} 일대 주거 및 상가 건물은 비바람을 동반한 강우 시 창호 하부나 테두리 모서리로 빗물이 스며드는 현상이 자주 발생합니다. 실내 표면만 덮는 실리콘 덧방은 외부에서 유입되는 물길을 막지 못해 재누수를 유발할 수 있습니다. 틈새케어는 실내 물자국 위치와 실제 외부 침투 경로의 차이를 분석하고 현장 상태에 맞는 정석 보수 범위를 안내합니다.`,
      badges: [
        "창틀 외부 실리콘 노후 상태 확인",
        "창호 테두리 및 접합부 틈새 점검",
        "부분 보수 및 재시공 범위 판단",
        "실내외 사진 기반 1차 상담 안내",
      ],
    },
    symptoms: {
      badge: "핵심 의심 증상",
      headline: `비 올 때 나타나는 ${region} 창틀누수 주요 증상`,
      description: "창틀 주변의 젖음 상태와 물길 흔적을 아래 4가지 증상과 비교해 보세요.",
      cards: [
        {
          title: "창틀 하단 틈새 빗물 유입",
          description: "외부 실런트가 자외선과 빗물에 삭아 틈이 벌어지면 비바람 시 창틀 프레임 레일이나 하부 틈새로 빗물이 고이고 넘칩니다.",
        },
        {
          title: "창호 모서리 및 인접 벽지 젖음",
          description: "창틀 상·측면 접합부로 침투한 수분이 벽체 안쪽 석고보드를 타고 번지며 누런 얼룩이나 곰팡이를 만듭니다.",
        },
        {
          title: "창틀 주변 바닥 마감재 변색",
          description: "하부 코킹 틈새로 스며든 빗물이 바닥 마감재 내부로 스며들면 마루가 짙은 갈색으로 변색되거나 들뜨는 현상이 생깁니다.",
        },
        {
          title: "강우 시 실내 실리콘 틈새 습기 배어남",
          description: "실내 창틀 마감 실리콘이 들떠 있거나 비가 내릴 때 틈새 사이로 습기와 미세한 물기가 배어 나오는 현상입니다.",
        },
      ],
      cautionText: "물자국이 보이는 실내 위치와 실제 외부 침투 지점은 다를 수 있으므로 겉표면만 덮는 시공은 주의해야 합니다.",
    },
    checkList: {
      badge: "상담 전 확인사항",
      headline: "방문 점검 전 확인해 주시면 좋은 사항",
      description: "무리한 확인은 피하시고 안전한 실내에서 아래 사항을 체크해 주시면 원활한 상담이 가능합니다.",
      items: [
        {
          title: "물이 처음 나타난 정확한 위치",
          detail: "창틀 상부 모서리, 측면, 하부 레일 받침, 또는 인접 벽면 벽지인지 확인해 주세요.",
        },
        {
          title: "강우 시점과 젖음 반응의 관계",
          detail: "비바람이 칠 때만 스며드는지, 가벼운 비에도 새는지, 비 그친 뒤에도 계속 번지는지 체크해 주세요.",
        },
        {
          title: "안전한 실내 창틀 및 젖음 부위 촬영",
          detail: "실내에서 물자국과 창틀 주변이 선명하게 보이도록 전체 모습과 근접 사진을 각각 1장 이상 준비해 주세요.",
        },
        {
          title: "창호 형태 및 층수 확인",
          detail: "알루미늄 샷시인지 하이샷시인지, 단창인지 이중창인지 및 건물 층수를 함께 알려주시면 도움이 됩니다.",
        },
      ],
      safetyNotice: "안전상의 이유로 창밖으로 몸을 내밀거나 난간에 기대어 외부를 촬영하는 위험한 행동은 절대 하지 마세요.",
    },
    judgmentGuide: {
      badge: "현장 점검 및 보수 판단",
      headline: `${region} 창틀누수 시공 범위 판단 기준`,
      description: "단순 덧방보다 현장 마감재의 잔존 접착력과 틈새 원인에 따라 정직한 작업 범위를 결정합니다.",
      points: [
        {
          subtitle: "창틀 실리콘 노후 vs 외벽 접합부 균열",
          content: "창호 프레임과 콘크리트 사이 실런트 박리 문제인지, 외벽 콘크리트 미세 균열을 타고 실내로 유로가 형성되었는지 구분 점검합니다.",
        },
        {
          subtitle: "부분 보수 vs 기존 실리콘 제거 후 재시공",
          content: "기존 실런트가 바탕면에 단단히 붙어 있다면 표면 정리 후 부분 보수가 가능하지만, 삭아 들뜬 상태라면 전면 제거 후 프라이머 도포 및 재시공을 권장합니다.",
        },
        {
          subtitle: "작업 환경과 안전 시공 기준",
          content: "건물 층수, 창호 돌출 구조, 외부 로프 작업 가능 여부를 정밀히 파악하여 안전하고 장기적인 내구성을 유지할 수 있는 공법을 안내합니다.",
        },
      ],
    },
    faqs: [
      {
        question: "창틀누수는 실내에서 실리콘만 다시 바르면 해결되나요?",
        answer: "실내 실리콘은 내부 마감용일 뿐이며 외부에서 유입되는 빗물을 근본적으로 막아주지 못합니다. 외벽과 창틀 사이의 외부 방수 실런트 상태를 점검하고 외부 침투로를 차단해야 누수를 안전하게 해결할 수 있습니다.",
      },
      {
        question: "비가 오는 날에도 바로 방문해서 창틀 코킹 작업이 가능한가요?",
        answer: "비가 내리거나 창틀 외벽 표면이 젖어 있는 상태에서는 실리콘이 콘크리트 면에 제대로 접착되지 않고 금방 탈락합니다. 안전하고 견고한 접착력을 위해 비가 그치고 바탕면이 충분히 건조된 후 시공해야 합니다.",
      },
      {
        question: "방문 점검 전 어떤 사진을 찍어 보내드리면 상담에 도움이 되나요?",
        answer: "실내에서 물이 스며든 창틀 전체 모습과 물자국이 보이는 부분을 안전하게 촬영해 주시면 됩니다. 건물 층수나 창호 형태(단창/이중창)를 함께 말씀해 주시면 더욱 신속하고 정확한 사전 상담이 가능합니다.",
      },
      {
        question: "덧방 시공과 전면 제거 후 재시공은 어떻게 결정되나요?",
        answer: "기존 실리콘이 단단하게 유지되어 표면 균열만 있는 경우 정리 후 보수가 가능하지만, 실리콘이 삭아 들뜨고 접착면이 떨어진 상태라면 기존 실런트를 긁어내고 전용 프라이머 도포 후 재시공해야 재발을 방지할 수 있습니다.",
      },
    ],
    linkMatrix: {
      groupA: {
        title: `${region} 관련 작업 바로가기`,
        description: `${region} 지역에서 자주 함께 점검하는 창호 및 누수 방수 서비스입니다.`,
        links: groupALinks,
      },
      groupB: {
        title: "종로구 다른 지역 창틀누수 점검",
        description: "종로구 인접 동 및 전 지역 창틀누수 점검 안내 페이지입니다.",
        links: groupBLinks,
      },
      groupC: {
        title: "상위 자치구 및 지역 안내 허브",
        description: "종로구 관내 통합 안내 및 15개 동별 서비스 현황입니다.",
        links: groupCLinks,
      },
    },
  };
}
