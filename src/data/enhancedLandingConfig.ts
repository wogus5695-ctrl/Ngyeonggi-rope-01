/**
 * Enhanced Service Landing Configuration for TEST A
 * Keyword: 장기동-빗물누수 (김포시 장기동)
 * 
 * 기존 동적 랜딩의 상업적 전환 구조를 유지하면서,
 * 고객 문제·점검 정보·시공 판단 근거를 심층 강화한 특화 데이터 모델입니다.
 * 
 * 원칙:
 * 1. 장기동-빗물누수 단일 키워드에만 한정 적용 (타 지역 및 타 서비스 불변)
 * 2. 실제 시공 사례 조작 금지 (가공의 시공 날짜나 결과가 아닌 정직한 기술 점검 판단 기준 제시)
 * 3. 기존 올케어서비스 (김재현 / 010-3951-6831) 단일 사업자 매핑 및 Canonical 보존
 */

export interface EnhancedLandingData {
  keyword: string;
  region: string;
  parentDistrict: string;
  service: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    badgeText: string;
    headline: string;
    h1Main: string;
    h1Sub: string;
    subCopy: string;
    intro: string;
    badges: string[];
  };
  diagnostics: {
    badge: string;
    headline: string;
    description: string;
    cards: Array<{
      title: string;
      description: string;
    }>;
    alertText: string;
  };
  judgmentGuide: {
    title: string;
    description: string;
    points: Array<{
      subtitle: string;
      content: string;
    }>;
  };
  photoGuide: {
    title: string;
    description: string;
    items: Array<{
      step: string;
      title: string;
      detail: string;
    }>;
  };
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export const JANGGI_RAIN_LEAK_ENHANCED: EnhancedLandingData = {
  keyword: "장기동-빗물누수",
  region: "장기동",
  parentDistrict: "김포시",
  service: "빗물누수",
  metaTitle: "장기동 빗물누수, 비 올 때 물이 샌다면 어디부터 확인해야 할까요? | 틈새케어",
  metaDescription: "김포시 장기동 빗물누수 점검 안내. 비 올 때 젖어드는 벽면과 창틀 주변 물자국의 원인을 분석하고, 실리콘 코킹과 외벽 접합부 상태에 따른 보수 판단 기준을 안내합니다.",
  hero: {
    badgeText: "김포시 장기동 빗물 유입 부위 진단 및 외벽 코킹",
    headline: "장기동 빗물누수 점검 및 외부 틈새 보수",
    h1Main: "장기동 빗물누수,",
    h1Sub: "실리콘만 다시 시공하면 해결될까요?",
    subCopy: "비가 올 때 실내 벽면이 젖는다면 덧방 시공보다 기존 실리콘 상태와 외벽 접합부를 먼저 확인해야 합니다.",
    intro: "김포시 장기동 일대 아파트와 주거 단지는 비바람을 동반한 강우 시 창틀 하부나 테두리 벽면으로 빗물이 스며드는 현상이 자주 발생합니다. 실리콘 표면만 덮는 덧방 시공은 틈새로 유입된 물길을 막지 못해 재누수를 유발할 수 있습니다. 틈새케어는 물자국 위치와 실제 외부 유입 경로의 차이를 분석하고 현장 상태에 맞는 정석 보수 범위를 안내합니다.",
    badges: [
      "노후 실리콘 정밀 제거 및 계면 정리",
      "창틀 테두리 및 외벽 크랙 정밀 확인",
      "부분 보수 가능 여부 사전 판정",
      "상담 및 견적 안내"
    ]
  },
  diagnostics: {
    badge: "자가 점검 체크포인트",
    headline: "비 올 때 나타나는 장기동 빗물누수 의심 증상",
    description: "창틀과 벽면의 젖음 상태를 아래 4가지 증상과 비교해 보세요.",
    cards: [
      {
        title: "창틀 하부 실리콘 들뜸 및 유격",
        description: "창호 하단 실런트가 자외선 노출로 삭아 틈이 벌어지면 비바람 시 빗물이 창틀 프레임 내부로 직접 유입됩니다."
      },
      {
        title: "창틀 모서리 벽지 젖음 및 얼룩",
        description: "창호 모서리 빗물은 내부 석고보드와 벽지를 타고 번지며, 건조 후 누런 물자국이나 곰팡이를 남깁니다."
      },
      {
        title: "외벽 콘크리트 미세 균열 연결부",
        description: "창틀 자체의 문제가 아니라 창틀 상·측면 외벽 균열을 타고 빗물이 유로를 형성해 실내로 침투하는 경우입니다."
      },
      {
        title: "강풍 동반 강우 시에만 발생하는 누수",
        description: "평상시에는 괜찮다가 바람이 강하게 부는 날에만 물이 스며든다면 외부 실링 접합면의 기밀성 상실을 의심해야 합니다."
      }
    ],
    alertText: "2가지 이상 해당된다면 실내 덧방보다 외부 유입 경로 점검이 시급합니다."
  },
  judgmentGuide: {
    title: "창틀 실리콘 vs 외벽 접합부, 보수 판단 기준",
    description: "물자국이 창틀 안쪽에 있다고 해서 반드시 실리콘만의 문제는 아닙니다. 유입 지점을 정확히 구분해야 합니다.",
    points: [
      {
        subtitle: "1. 물자국 위치와 실제 외부 유입구의 불일치",
        content: "빗물은 외부 균열이나 샷시 프레임 틈으로 침투한 뒤 골조 내부를 타고 수 미터 떨어진 하부나 측면에서 물자국으로 나타납니다. 실내 물자국 부위만 덧칠하는 것은 원인을 방치하는 것과 같습니다."
      },
      {
        subtitle: "2. 부분 보수가 가능한 경우와 전체 재시공이 필요한 경우",
        content: "국소적인 실리콘 박리이고 주변 외벽면이 양호하다면 부분 보수가 가능할 수 있습니다. 그러나 기존 실리콘이 경화되어 부스러지거나 외벽 접합면 전체가 들떠 있다면, 부분 덧방보다는 기존 마감재를 정리하고 재시공하는 방안을 우선적으로 검토해야 합니다."
      },
      {
        subtitle: "3. 외벽 접합부 크랙 병행 여부",
        content: "창틀 프레임과 콘크리트 골조 사이의 탄성 실란트 노후화뿐 아니라 외벽 콘크리트 균열이 관찰된다면, 실리콘 코킹과 외벽 방수 실링을 함께 계획해야 재발을 방지할 수 있습니다."
      }
    ]
  },
  photoGuide: {
    title: "전문가 점검 전 안전하게 준비하는 사진 정보",
    description: "현장 방문 전 정확한 상태 파악을 위해 실내외 사진을 미리 준비해 주시면 보다 정밀한 상담이 가능합니다.",
    items: [
      {
        step: "STEP 1",
        title: "실내 물자국 전체 샷",
        detail: "창틀 전체와 물자국이 번진 벽면이 한눈에 보이도록 1~2m 거리에서 촬영해 주세요."
      },
      {
        step: "STEP 2",
        title: "창틀 실리콘 근접 샷",
        detail: "실리콘이 들뜨거나 찢어진 부위, 샷시 모서리 접합부를 가까이에서 초점을 맞춰 촬영합니다."
      },
      {
        step: "STEP 3",
        title: "창밖 외부 벽면 상태",
        detail: "안전이 확보된 실내에서 창문을 열고 창틀 바깥쪽 실리콘과 외부 벽면을 안전하게 촬영합니다."
      }
    ]
  },
  faqs: [
    {
      question: "장기동 아파트인데 비가 올 때만 창틀 밑으로 물이 고입니다. 실리콘 문제인가요?",
      answer: "비가 올 때만 집중적으로 창틀 하단에 물이 고인다면 외부 창틀 코킹 실리콘의 들뜸이나 샷시 외부 물구멍 마감 불량, 또는 프레임 조인트 유격일 가능성이 높습니다. 외부 실런트의 박리 여부를 먼저 확인해야 합니다."
    },
    {
      question: "기존 실리콘 위에 덧방(덧바름) 시공을 하면 안 되나요?",
      answer: "기존 실리콘이 노후되어 접착력이 떨어진 상태에서 덧바르면 계절 변화에 따른 수축·팽창으로 들뜸이 다시 발생할 가능성이 높습니다. 틈새케어는 기존 노후 부위를 깔끔하게 정리하고 현장에 맞는 전용 프라이머 및 실런트로 밀착 시공하는 정석 방식을 지향합니다."
    },
    {
      question: "비가 오는 날 당일에도 외부 보수 작업이 가능한가요?",
      answer: "외벽면과 창틀 틈새에 수분이 남아 있는 상태에서는 실리콘 및 방수재의 접착력이 급격히 떨어져 시공 하자가 발생합니다. 정밀 보수 작업은 비가 그치고 피착면이 충분히 건조된 맑은 날 진행하는 것이 원칙입니다."
    },
    {
      question: "보수 견적은 어떤 기준으로 산정되나요?",
      answer: "시공 대상 창호의 크기와 개수, 기존 실리콘의 노후 및 제거 난이도, 고층 로프 작업 여부, 외벽 크랙 보수 병행 여부에 따라 산정됩니다. 사진을 보내주시면 사전 상태 확인 후 예상 범위를 상세히 안내해 드립니다."
    }
  ]
};

export function getEnhancedLandingData(keyword: string | undefined): EnhancedLandingData | null {
  if (!keyword) return null;
  const decoded = decodeURIComponent(keyword).trim();
  if (decoded === "장기동-빗물누수") {
    return JANGGI_RAIN_LEAK_ENHANCED;
  }
  return null;
}
