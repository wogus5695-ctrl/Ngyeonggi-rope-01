/**
 * Service Content Configuration
 * Phase P2-A Implementation
 * 
 * 13개 서비스의 Non-Pilot 동적 페이지용 검색 의도(Search Intent) 중심 Data Layer.
 * 
 * 설계 원칙:
 * 1. 13/13 완결성: 13개 전체 서비스 데이터 모델 정의.
 * 2. 운영자 확인 3대 Fact 엄격 통제:
 *    - FACT A (기존 실리콘 100% 제거 후 재시공): 창틀코킹, 창틀실리콘, 샷시실리콘 (3개)
 *    - FACT B (친환경 침투성 발수제): 외벽방수 ONLY (1개)
 *    - FACT C (옥상 우레탄 평균 3mm 국가 표준): 옥상방수 ONLY (1개)
 *    - 그 외 8개 서비스: verifiedFactKeys = [] (기술 Fact 단정 0건)
 * 3. Safe Copy Vocabulary:
 *    - 현장 상태 확인, 노후 상태 확인, 작업이 필요한 범위 확인, 보수가 필요한 부위 확인,
 *      현장 상태에 맞는 작업 안내, 마감 상태 확인 등 안전한 일반 표현만 사용.
 * 4. 미확인 기술/장비/공법/보증/법적 책임 단정 일체 미포함.
 * 5. Single Source of Truth:
 *    - Business Entity는 ID("ALLCARE" | "RAINFIX")만 참조.
 */

import { BusinessEntityId } from "./businessConfig";
import { VerifiedFactKey, VERIFIED_FACTS } from "./serviceIntentConfig";

export interface ServiceContentMetadata {
  titleTemplate: (region: string) => string;
  descriptionTemplate: (region: string, parentDistrict?: string) => string;
}

export interface ServiceContentHero {
  headline: (region: string) => string;
  subCopy: string;
  badgeText: string;
  badges: string[];
}

export interface ServiceContentEmpathy {
  headline: string;
  description: string;
  cards: Array<{
    title: string;
    desc: string;
  }>;
}

export interface ServiceContentDiagnostics {
  headline: string;
  description: string;
  cards: Array<{
    title: string;
    description: string;
  }>;
  alertText: string;
}

export interface ServiceContentProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ServiceContentProcess {
  title: string;
  subDesc: string;
  steps: ServiceContentProcessStep[];
  conclusionNote: string;
}

export interface ServiceContentFaqItem {
  question: string;
  answer: string;
}

export interface ServiceContentFaq {
  title: string;
  faqs: (region: string) => ServiceContentFaqItem[];
}

export interface ServiceContentItem {
  serviceKey: string;
  businessEntityId: BusinessEntityId;
  verifiedFactKeys: VerifiedFactKey[];
  metadata: ServiceContentMetadata;
  hero: ServiceContentHero;
  empathy: ServiceContentEmpathy;
  diagnostics: ServiceContentDiagnostics;
  process: ServiceContentProcess;
  faq: ServiceContentFaq;
}

export const SERVICE_CONTENT_CONFIG: Record<string, ServiceContentItem> = {
  // ==========================================
  // CLUSTER A: 코킹 / 실리콘 계열 (ALLCARE)
  // ==========================================
  "창틀코킹": {
    serviceKey: "창틀코킹",
    businessEntityId: "ALLCARE",
    verifiedFactKeys: ["REMOVE_OLD_SILICONE_100"],
    metadata: {
      titleTemplate: (region) => `${region} 창틀코킹 | 노후 코킹 점검 및 재시공 안내 - 틈새케어`,
      descriptionTemplate: (region, parent) => 
        `${parent ? `${parent} ` : ""}${region} 창틀코킹 상담. 창틀 주변 실리콘의 들뜸이나 갈라짐이 의심된다면 현장 상태와 작업 범위를 확인하여 필요한 재시공 방향을 안내합니다.`
    },
    hero: {
      headline: (region) => `${region} 창틀코킹 현장 점검 및 상담`,
      subCopy: "창틀 주변 노후 실리콘의 들뜸과 갈라짐 상태를 살펴보고, 현장 상태에 맞는 코킹 재시공 범위를 확인합니다.",
      badgeText: "창틀 코킹 상태 확인",
      badges: [
        "기존 실리콘 상태 확인",
        "창틀 주변 틈새 점검",
        "현장 맞춤 범위 안내",
        VERIFIED_FACTS.REMOVE_OLD_SILICONE_100
      ]
    },
    empathy: {
      headline: "비가 올 때마다 창틀 주변 틈새가 걱정되시나요?",
      description: "창틀 외부 마감재는 기온 변화와 계절 흐름에 따라 서서히 노후화될 수 있습니다. 빗물 유입 흔적이 보인다면 외부 틈새 상태를 먼저 점검해보는 것이 좋습니다.",
      cards: [
        {
          title: "실리콘 들뜸 및 갈라짐",
          desc: "창틀 테두리의 실리콘 표면이 갈라지거나 벽면에서 떨어져 틈이 생기는 현상입니다."
        },
        {
          title: "창문 주변 벽면 습기",
          desc: "비가 온 뒤 창틀 하부나 주변 벽지가 축축해지거나 얼룩이 생기는 흔적입니다."
        },
        {
          title: "노후 마감재 틈새",
          desc: "오래된 코킹재가 경화되어 밀착력을 잃고 외부 빗물이 스며들 수 있는 상태입니다."
        }
      ]
    },
    diagnostics: {
      headline: "창틀 코킹 현장 자가 점검 체크포인트",
      description: "시공 및 상담 전, 창틀 주변에서 흔히 관찰되는 상태를 육안으로 확인해보세요.",
      cards: [
        {
          title: "외부 실리콘 균열",
          description: "창틀 바깥쪽 실리콘이 굳어서 금이 가거나 찢어진 곳이 있는지 살펴봅니다."
        },
        {
          title: "프레임 접합부 유격",
          description: "창틀과 외벽 콘크리트 사이에 눈에 띄는 틈새나 들뜸이 벌어졌는지 확인합니다."
        },
        {
          title: "창틀 하부 물고임",
          description: "비가 내릴 때 창틀 아래쪽 레일이나 테두리에 물이 고여 넘치는지 살펴봅니다."
        },
        {
          title: "실내 벽지 변색",
          description: "창가 주변 벽지에 물 자국이나 곰팡이 등 습기 피해가 번지는지 확인합니다."
        }
      ],
      alertText: "창틀 주변 누수 의심 부위는 덧방 시공보다 기존 상태를 제대로 확인하는 것이 중요합니다."
    },
    process: {
      title: "체계적인 4단계 창틀코킹 점검 프로세스",
      subDesc: "현장 상태를 면밀히 살피고 필요한 작업 범위를 안내합니다.",
      steps: [
        {
          step: "01",
          title: "상담 내용 및 현장 상태 확인",
          description: "사전 상담 시 접수된 빗물 유입 위치와 창틀 주변 노후 상태를 확인합니다."
        },
        {
          step: "02",
          title: "기존 노후 실리콘 제거 및 정리",
          description: "들뜨고 손상된 기존 실리콘을 깨끗하게 정리하여 재시공 면을 준비합니다."
        },
        {
          step: "03",
          title: "현장 상태에 맞는 코킹 시공",
          description: "창틀 규격과 틈새 상태에 적합한 코킹 자재를 사용하여 빈틈없이 밀착 시공합니다."
        },
        {
          step: "04",
          title: "작업 부위 마감 상태 확인 및 안내",
          description: "시공 부위의 표면 밀착 상태를 검수하고 향후 유지 관리 주의사항을 안내합니다."
        }
      ],
      conclusionNote: "창틀 상태에 따라 부분 보수 및 전면 재시공 범위를 현장에 맞게 안내해드립니다."
    },
    faq: {
      title: "창틀코킹 관련 자주 묻는 질문",
      faqs: (region) => [
        {
          question: `${region} 아파트 창틀코킹 시공 범위는 어떻게 결정되나요?`,
          answer: "외부 창호의 연장 길이와 창문 개수, 기존 노후 실리콘의 손상 정도 및 작업 난이도에 따라 필요한 작업 범위가 결정됩니다. 현장 사진을 보내주시면 사전 상태 확인이 원활합니다."
        },
        {
          question: "기존 실리콘을 긁어내지 않고 덧방해도 괜찮나요?",
          answer: "기존 실리콘이 이미 들떠 있는 상태에서 겉면에만 덧바르면 틈새가 다시 벌어질 수 있습니다. 틈새케어는 상태에 따라 노후 실리콘을 정리한 후 재시공하는 방식을 권장합니다."
        },
        {
          question: "비가 오는 날에도 코킹 작업이 가능한가요?",
          answer: "작업 부위에 습기가 남아있으면 자재 밀착력이 떨어질 수 있으므로, 맑은 날 충분히 건조된 상태에서 시공을 진행하는 것이 원칙입니다."
        }
      ]
    }
  },

  "창틀실리콘": {
    serviceKey: "창틀실리콘",
    businessEntityId: "ALLCARE",
    verifiedFactKeys: ["REMOVE_OLD_SILICONE_100"],
    metadata: {
      titleTemplate: (region) => `${region} 창틀실리콘 | 실리콘 노후 점검 및 재시공 안내 - 틈새케어`,
      descriptionTemplate: (region, parent) => 
        `${parent ? `${parent} ` : ""}${region} 창틀실리콘 상담. 창틀 실리콘의 노후·탈락·변색 상태를 확인하고 필요한 재시공 범위를 안내합니다.`
    },
    hero: {
      headline: (region) => `${region} 창틀실리콘 현장 점검 및 상담`,
      subCopy: "창틀 주변 실리콘의 탄성 저하와 접합부 들뜸을 살펴보고, 필요한 보수 범위를 체계적으로 확인합니다.",
      badgeText: "창틀 실리콘 상태 확인",
      badges: [
        "실리콘 노후 상태 점검",
        "접합부 들뜸 확인",
        "재시공 범위 안내",
        VERIFIED_FACTS.REMOVE_OLD_SILICONE_100
      ]
    },
    empathy: {
      headline: "오래된 창틀 실리콘, 방치하면 틈새가 벌어집니다",
      description: "외부 자외선과 비바람에 노출된 실리콘은 시간이 흐를수록 탄성이 줄어들고 틈이 발생할 수 있습니다.",
      cards: [
        {
          title: "실리콘 삭음 및 탈락",
          desc: "실리콘 표면이 푸석해지며 가루가 떨어지거나 벽체에서 분리된 상태입니다."
        },
        {
          title: "이음새 곰팡이와 변색",
          desc: "실리콘 주변에 습기가 머물면서 오염 흔적과 검은 곰팡이가 번진 상태입니다."
        },
        {
          title: "미세 빗물 유입",
          desc: "벌어진 실리콘 틈새 사이로 비바람이 칠 때 빗물이 스며드는 현상입니다."
        }
      ]
    },
    diagnostics: {
      headline: "창틀 실리콘 노후도 점검 리스트",
      description: "창틀 실리콘의 현재 상태를 눈으로 직접 살펴보세요.",
      cards: [
        {
          title: "실리콘 갈라짐",
          description: "실리콘 선을 따라 미세한 잔금이나 깊은 균열이 생겼는지 확인합니다."
        },
        {
          title: "벽체 분리 여부",
          description: "콘크리트 벽면과 실리콘 사이에 손가락이 들어갈 유격이 있는지 살펴봅니다."
        },
        {
          title: "자재 경화 정도",
          description: "고무 탄성을 잃고 딱딱하게 굳어 부서지는 부위가 있는지 확인합니다."
        },
        {
          title: "유입 흔적 조사",
          description: "비가 내린 뒤 실리콘 접합부 안쪽으로 습기가 스며드는지 확인합니다."
        }
      ],
      alertText: "노후 실리콘을 제때 점검하면 실내 벽지 오염과 2차 피해를 줄일 수 있습니다."
    },
    process: {
      title: "창틀 실리콘 재시공 4단계 프로세스",
      subDesc: "노후 부위를 정리하고 알맞은 실리콘 작업을 진행합니다.",
      steps: [
        {
          step: "01",
          title: "실리콘 상태 점검",
          description: "창틀 전반의 실리콘 들뜸과 노후 진행 상태를 파악합니다."
        },
        {
          step: "02",
          title: "노후 실리콘 제거",
          description: "부착력을 잃은 오래된 실리콘을 말끔히 긁어내어 정리합니다."
        },
        {
          step: "03",
          title: "전용 실리콘 밀착 도포",
          description: "창호 조건에 맞는 자재를 틈새 규격에 맞춰 고르게 충진합니다."
        },
        {
          step: "04",
          title: "마감 확인 및 사후 안내",
          description: "표면이 매끄럽게 마감되었는지 확인하고 주의사항을 전달합니다."
        }
      ],
      conclusionNote: "창문 위치와 높이에 맞는 안전한 작업 계획을 사전에 수립하여 진행합니다."
    },
    faq: {
      title: "창틀 실리콘 관련 자주 묻는 질문",
      faqs: (region) => [
        {
          question: `${region} 빌라나 아파트 창틀 실리콘 교체 주기는 어느 정도인가요?`,
          answer: "일반적으로 햇빛과 비바람에 노출되는 외부 창호 실리콘은 수년이 지나면 탄성이 점차 저하되므로, 정기적인 틈새 상태 점검을 권장합니다."
        },
        {
          question: "실내 쪽 실리콘만 쏘아도 외부 빗물이 막히나요?",
          answer: "외부에서 스며드는 빗물은 바깥쪽 접합부를 먼저 차단해야 효과적입니다. 실내만 막을 경우 벽체 내부에 물이 고일 수 있으므로 외부 점검이 우선입니다."
        },
        {
          question: "실리콘 시공 시 소음이나 먼지가 많이 나나요?",
          answer: "기존 실리콘을 제거할 때 약간의 잔여물 정리가 발생하지만, 큰 소음 없이 신속하게 마무리됩니다."
        }
      ]
    }
  },

  "샷시실리콘": {
    serviceKey: "샷시실리콘",
    businessEntityId: "ALLCARE",
    verifiedFactKeys: ["REMOVE_OLD_SILICONE_100"],
    metadata: {
      titleTemplate: (region) => `${region} 샷시실리콘 | 창호 테두리 틈새 점검 및 보수 - 틈새케어`,
      descriptionTemplate: (region, parent) => 
        `${parent ? `${parent} ` : ""}${region} 샷시실리콘 상담. 샷시 프레임 주변의 틈과 실리콘 손상 상태를 확인하여 보수 작업 범위를 안내합니다.`
    },
    hero: {
      headline: (region) => `${region} 샷시실리콘 현장 점검 및 상담`,
      subCopy: "샷시 창호 테두리의 실리콘 손상과 미세 틈새를 확인하고 현장 상태에 맞는 보수 범위를 점검합니다.",
      badgeText: "샷시 테두리 실리콘 점검",
      badges: [
        "샷시 프레임 틈새 확인",
        "테두리 실리콘 점검",
        "보수 범위 안내",
        VERIFIED_FACTS.REMOVE_OLD_SILICONE_100
      ]
    },
    empathy: {
      headline: "샷시 테두리 틈새로 찬바람이나 빗물이 유입되나요?",
      description: "창호 프레임 주변 실리콘이 노후되면 기밀성이 떨어져 외풍과 빗물 유입의 원인이 될 수 있습니다.",
      cards: [
        {
          title: "프레임 유격 발생",
          desc: "창틀 모서리와 벽면 사이 실리콘이 들떠 틈새가 벌어진 상태입니다."
        },
        {
          title: "빗물 유입 흔적",
          desc: "강한 비바람에 샷시 테두리를 타고 물방울이 맺히거나 스며드는 현상입니다."
        },
        {
          title: "테두리 실리콘 탈락",
          desc: "시간이 지나면서 실리콘 조각이 떨어져 나가 공간이 비어있는 상태입니다."
        }
      ]
    },
    diagnostics: {
      headline: "샷시 실리콘 이상 유무 점검",
      description: "창호 프레임 주변의 상태를 간단히 점검해보세요.",
      cards: [
        {
          title: "하부 코너 틈새",
          description: "물이 가장 많이 닿는 샷시 하단 모서리의 실리콘 상태를 확인합니다."
        },
        {
          title: "측면 실리콘 부착 상태",
          description: "외벽 벽체와 샷시 기둥 사이 실리콘이 떨어져 있는지 살펴봅니다."
        },
        {
          title: "상부 물길 점검",
          description: "창틀 윗부분 벽면에서 내려오는 물길 틈새가 있는지 점검합니다."
        },
        {
          title: "내부 습기 관찰",
          description: "샷시 안쪽 턱에 습기나 물기가 고이는지 확인합니다."
        }
      ],
      alertText: "정확한 샷시 상태 진단을 통해 필요한 작업 범위를 안내받으실 수 있습니다."
    },
    process: {
      title: "샷시 실리콘 보수 4단계 절차",
      subDesc: "샷시 주변 틈새를 꼼꼼히 확인하고 보수를 진행합니다.",
      steps: [
        {
          step: "01",
          title: "샷시 주변 상태 확인",
          description: "프레임 테두리의 실리콘 상태와 틈새 위치를 조사합니다."
        },
        {
          step: "02",
          title: "불량 실리콘 정리",
          description: "접착력을 잃고 헐거워진 실리콘을 정리하여 바탕을 고릅니다."
        },
        {
          step: "03",
          title: "창호 맞춤 실리콘 보수",
          description: "샷시 재질에 적합한 실리콘으로 빈틈을 균일하게 채웁니다."
        },
        {
          step: "04",
          title: "마감 검수 및 상태 안내",
          description: "실리콘 충진 마감 상태를 확인하고 관리 요령을 설명합니다."
        }
      ],
      conclusionNote: "창호 상태에 맞추어 꼼꼼한 마무리를 지향합니다."
    },
    faq: {
      title: "샷시 실리콘 관련 자주 묻는 질문",
      faqs: (region) => [
        {
          question: `${region} 세대 내 모든 샷시 실리콘을 한 번에 해야 하나요?`,
          answer: "문제가 의심되는 특정 창호만 부분적으로 진행할 수도 있으며, 전체적인 노후 상태에 따라 세대 전체 외부 창호를 함께 점검할 수도 있습니다."
        },
        {
          question: "샷시 자체를 교체해야 하는지 실리콘만 해도 되는지 어떻게 아나요?",
          answer: "프레임 자체의 심각한 뒤틀림이나 파손이 없다면 대다수의 빗물 유입 문제는 외부 실리콘 재시공을 통해 개선되는 경우가 많습니다."
        },
        {
          question: "상담 시 어떤 사진을 준비하면 좋은가요?",
          answer: "창틀 전체 모습과 실리콘이 들뜬 상세 부위, 실내 젖음 부위 사진을 함께 보내주시면 정확한 확인이 가능합니다."
        }
      ]
    }
  },

  // ==========================================
  // CLUSTER B: 누수 계열 (ALLCARE)
  // ==========================================
  "창틀누수": {
    serviceKey: "창틀누수",
    businessEntityId: "ALLCARE",
    verifiedFactKeys: [],
    metadata: {
      titleTemplate: (region) => `${region} 창틀누수 | 창 주변 물샘 원인 점검 - 틈새케어`,
      descriptionTemplate: (region, parent) => 
        `${parent ? `${parent} ` : ""}${region} 창틀누수 상담. 창 주변 벽면 젖음과 물 자국 원인을 확인하고 현장 상태에 맞는 보수 범위를 안내합니다.`
    },
    hero: {
      headline: (region) => `${region} 창틀누수 현장 점검 및 상담`,
      subCopy: "비가 올 때 창틀 주변으로 번지는 물샘 흔적을 확인하고, 유입 원인과 보수 범위를 체계적으로 점검합니다.",
      badgeText: "창틀 누수 원인 점검",
      badges: [
        "창 주변 젖음 확인",
        "외벽 틈새 연계 점검",
        "보수 범위 확인",
        "현장 상태 맞춤 안내"
      ]
    },
    empathy: {
      headline: "창틀 주변으로 스며드는 빗물로 답답하신가요?",
      description: "창틀 주변 물샘은 창호 자체뿐 아니라 외부 마감재나 외벽 틈새 등 다양한 경로로 발생할 수 있습니다.",
      cards: [
        {
          title: "창틀 하부 물 번짐",
          desc: "비가 내리면 창호 아래쪽 벽면이나 바닥으로 물이 스며 나오는 현상입니다."
        },
        {
          title: "창호 상부 물방울",
          desc: "창틀 윗부분 천장이나 벽체에서 물방울이 맺혀 떨어지는 증상입니다."
        },
        {
          title: "지속되는 곰팡이",
          desc: "반복되는 물기 유입으로 창가 주변 마감재가 젖고 곰팡이가 피어나는 상태입니다."
        }
      ]
    },
    diagnostics: {
      headline: "창틀 누수 주요 점검 항목",
      description: "물샘이 나타나는 주요 부위와 원인을 확인해보세요.",
      cards: [
        {
          title: "창틀 테두리 코킹 상태",
          description: "외부 실리콘에 찢김이나 탈락이 발생해 빗물이 침투하는지 확인합니다."
        },
        {
          title: "외벽 균열 연계 여부",
          description: "창틀 주변 외벽 콘크리트에 실크랙이 발생해 물길이 이어지는지 점검합니다."
        },
        {
          title: "창문 레일 물빠짐",
          description: "창틀 하단 물구멍(드레인)이 막혀 빗물이 역류하는지 살펴봅니다."
        },
        {
          title: "내부 마감재 젖음 범위",
          description: "실내 석고보드나 벽지가 어느 범위까지 젖었는지 관찰합니다."
        }
      ],
      alertText: "원인 부위를 명확히 짚어내는 것이 불필요한 공사를 줄이는 첫걸음입니다."
    },
    process: {
      title: "창틀 누수 원인 파악 및 보수 4단계",
      subDesc: "유입 경로를 살펴보고 필요한 보수를 단계별로 진행합니다.",
      steps: [
        {
          step: "01",
          title: "유입 흔적 및 현장 점검",
          description: "실내 물 번짐 위치와 외부 창틀 상태를 종합적으로 살펴봅니다."
        },
        {
          step: "02",
          title: "원인 부위 및 보수 범위 확정",
          description: "코킹 손상 부위와 주변 균열 범위를 확인하여 작업 범위를 정합니다."
        },
        {
          step: "03",
          title: "외부 취약 부위 보수 진행",
          description: "외부 실리콘 보수 및 필요한 틈새 마감 작업을 진행합니다."
        },
        {
          step: "04",
          title: "보수 부위 확인 및 관리 안내",
          description: "작업된 부위의 밀착 상태를 확인하고 향후 점검 요령을 전달합니다."
        }
      ],
      conclusionNote: "단순 덮음이 아닌 근본적인 외부 취약 지점을 점검합니다."
    },
    faq: {
      title: "창틀 누수 관련 자주 묻는 질문",
      faqs: (region) => [
        {
          question: `${region} 아파트 창틀 누수는 윗집 문제인가요, 우리 집 문제인가요?`,
          answer: "창틀 상부 천장에서 물이 샐 경우 윗집 창호 코킹이나 외벽 틈새 영향일 수 있으며, 창틀 하부나 내부 벽면 젖음은 해당 세대 외부 코킹 노후화가 원인인 경우가 많습니다. 현장 확인을 통해 범위를 짚어보아야 합니다."
        },
        {
          question: "창틀 누수가 발생했을 때 가장 먼저 할 일은 무엇인가요?",
          answer: "비가 올 때 물이 스며드는 정확한 위치와 외부 창틀 상태를 사진으로 기록해두시면 신속한 상태 파악에 큰 도움이 됩니다."
        },
        {
          question: "보수 공사 후 바로 비가 와도 안전한가요?",
          answer: "시공 자재가 완전히 건조될 수 있도록 맑은 날씨에 작업을 마무리하는 일정을 잡고 진행합니다."
        }
      ]
    }
  },

  "빗물누수": {
    serviceKey: "빗물누수",
    businessEntityId: "ALLCARE",
    verifiedFactKeys: [],
    metadata: {
      titleTemplate: (region) => `${region} 빗물누수 | 비 올 때 유입 경로 및 원인 점검 - 틈새케어`,
      descriptionTemplate: (region, parent) => 
        `${parent ? `${parent} ` : ""}${region} 빗물누수 상담. 비 올 때 나타나는 빗물 유입 흔적을 확인하고 현장 상태에 맞는 보수 범위를 안내합니다.`
    },
    hero: {
      headline: (region) => `${region} 빗물누수 현장 점검 및 상담`,
      subCopy: "강우 시 발생하는 건물 내부 빗물 유입 흔적을 확인하고, 유입 경로와 필요한 보수 범위를 점검합니다.",
      badgeText: "빗물 유입 경로 점검",
      badges: [
        "강우 시 유입 확인",
        "창틀·벽체 틈새 점검",
        "유입 경로 확인",
        "현장 맞춤 보수 안내"
      ]
    },
    empathy: {
      headline: "비만 오면 어디선가 물이 스며들어 불안하신가요?",
      description: "빗물 누수는 맑은 날에는 보이지 않다가 비바람이 불 때만 나타나 원인을 찾기 어려울 수 있습니다.",
      cards: [
        {
          title: "강우 시 반복되는 물샘",
          desc: "비가 내리는 날 특정 부위에서 물방울이 맺히거나 흐르는 현상입니다."
        },
        {
          title: "바람 방향에 따른 유입",
          desc: "특정 방향으로 바람이 세게 불 때 빗물이 집중적으로 스며드는 상태입니다."
        },
        {
          title: "건물 틈새 침투",
          desc: "창틀 틈새나 외부 이음새를 타고 빗물이 벽체 내부로 침투하는 증상입니다."
        }
      ]
    },
    diagnostics: {
      headline: "빗물 유입 경로 진단 포인트",
      description: "빗물이 침투할 수 있는 취약 부위를 점검해보세요.",
      cards: [
        {
          title: "외부 창틀 실리콘 들뜸",
          description: "창호 외곽 코킹재가 벌어져 빗물이 흘러드는지 확인합니다."
        },
        {
          title: "벽체 미세 크랙 여부",
          description: "외벽 콘크리트 표면에 빗물이 스며들 만한 균열이 있는지 살펴봅니다."
        },
        {
          title: "배수관 및 드레인 상태",
          description: "우수관 주변이나 배수 구멍이 막혀 물이 차오르는지 점검합니다."
        },
        {
          title: "실내 누수 지점 관찰",
          description: "물이 처음 나타나는 위치와 번지는 방향을 면밀히 관찰합니다."
        }
      ],
      alertText: "비가 올 때의 유입 양상을 파악하면 정확한 원인 진단이 가능합니다."
    },
    process: {
      title: "빗물 누수 해결 4단계 프로세스",
      subDesc: "빗물 유입 경로를 추적하고 필요한 조치를 진행합니다.",
      steps: [
        {
          step: "01",
          title: "현장 상태 및 유입 조사",
          description: "비가 올 때 나타나는 누수 양상과 실내 흔적을 확인합니다."
        },
        {
          step: "02",
          title: "외부 침투 의심 부위 점검",
          description: "창틀 및 외벽 주변의 취약 틈새를 집중적으로 살펴봅니다."
        },
        {
          step: "03",
          title: "취약 부위 보수 및 마감",
          description: "빗물이 스며드는 부위를 정리하고 현장에 맞는 보수를 진행합니다."
        },
        {
          step: "04",
          title: "보수 상태 검수 및 안내",
          description: "마감 처리가 견고하게 되었는지 확인하고 관리 요령을 설명합니다."
        }
      ],
      conclusionNote: "현장 상태에 맞는 보수로 재발 가능성을 줄입니다."
    },
    faq: {
      title: "빗물 누수 관련 자주 묻는 질문",
      faqs: (region) => [
        {
          question: `${region} 빌라 빗물 누수는 주로 어디서 발생하나요?`,
          answer: "대다수의 세대 내 빗물 누수는 외부 창틀 코킹재 노후화나 창호와 접한 벽체 틈새를 통해 비바람이 들이치며 발생하는 경우가 많습니다."
        },
        {
          question: "맑은 날에도 빗물 누수 원인을 찾을 수 있나요?",
          answer: "네, 빗물이 지나간 흔적과 외부 코킹 상태, 벽체 틈새의 노후도를 육안으로 정밀 점검하여 유입 가능 부위를 파악할 수 있습니다."
        },
        {
          question: "점검 전 어떤 정보를 알려드리면 좋나요?",
          answer: "비가 올 때 물이 스며드는 위치 사진과 건물의 대략적인 층수, 창문 구조를 알려주시면 상세한 안내에 도움이 됩니다."
        }
      ]
    }
  },

  "외벽누수": {
    serviceKey: "외벽누수",
    businessEntityId: "ALLCARE",
    verifiedFactKeys: [],
    metadata: {
      titleTemplate: (region) => `${region} 외벽누수 | 외벽 균열 및 누수 흔적 점검 - 틈새케어`,
      descriptionTemplate: (region, parent) => 
        `${parent ? `${parent} ` : ""}${region} 외벽누수 상담. 외벽 균열과 누수 흔적을 확인하고 현장 상태에 맞는 보수 범위를 안내합니다.`
    },
    hero: {
      headline: (region) => `${region} 외벽누수 현장 점검 및 상담`,
      subCopy: "건물 외벽의 균열과 이음 부위 상태를 확인하고, 빗물 유입 의심 부위와 보수 범위를 점검합니다.",
      badgeText: "외벽 균열 및 누수 점검",
      badges: [
        "외벽 틈새 상태 확인",
        "균열 부위 점검",
        "보수 범위 확인",
        "현장 상태 맞춤 안내"
      ]
    },
    empathy: {
      headline: "외벽 균열을 타고 실내로 스며드는 누수가 걱정이신가요?",
      description: "외벽 콘크리트는 세월이 지나면서 균열이 생길 수 있으며, 이 틈으로 빗물이 침투해 실내로 번질 수 있습니다.",
      cards: [
        {
          title: "벽체 실크랙 확산",
          desc: "외벽 표면에 미세한 실크랙이 발생하여 비가 올 때 물을 머금는 상태입니다."
        },
        {
          title: "실내 벽체 젖음",
          desc: "창문과 다소 떨어진 벽면이나 모서리 벽지가 눅눅해지는 현상입니다."
        },
        {
          title: "페인트 박리 현상",
          desc: "외벽 표면 도막이 들뜨거나 균열 사이로 백화 현상이 일어나는 흔적입니다."
        }
      ]
    },
    diagnostics: {
      headline: "외벽 누수 점검 항목",
      description: "외벽 상태를 판단하는 기준을 확인해보세요.",
      cards: [
        {
          title: "외벽 표면 균열 상태",
          description: "콘크리트 벽체에 물길이 형성될 만한 틈새가 있는지 관찰합니다."
        },
        {
          title: "창호 조인트 연계 여부",
          description: "창틀과 외벽이 만나는 접합부 틈새와 이어지는지 점검합니다."
        },
        {
          title: "층간 조인트 마감",
          description: "건물 층간 이음매 부위의 마감 상태가 들뜨지 않았는지 살펴봅니다."
        },
        {
          title: "실내 습기 분포",
          description: "외벽 쪽과 맞닿은 실내 벽면의 젖음 양상을 확인합니다."
        }
      ],
      alertText: "외벽 상태에 맞는 안전한 작업 계획을 확인하세요."
    },
    process: {
      title: "외벽 누수 점검 및 보수 4단계",
      subDesc: "외벽 부위를 살펴보고 필요한 보수를 진행합니다.",
      steps: [
        {
          step: "01",
          title: "외벽 상태 및 흔적 확인",
          description: "외벽 표면 균열과 실내 물 번짐 위치를 대조 점검합니다."
        },
        {
          step: "02",
          title: "보수 필요 범위 확인",
          description: "균열 부위와 마감재 들뜸 상태를 살펴 작업 범위를 정합니다."
        },
        {
          step: "03",
          title: "외벽 부위 보수 진행",
          description: "현장 상태에 맞는 보수재로 틈새 부위를 정리하고 마감합니다."
        },
        {
          step: "04",
          title: "작업 부위 검수 및 안내",
          description: "보수된 부위의 밀착 상태를 확인하고 사후 관리 사항을 설명합니다."
        }
      ],
      conclusionNote: "외벽 상태에 맞는 체계적인 확인 과정을 제공합니다."
    },
    faq: {
      title: "외벽 누수 관련 자주 묻는 질문",
      faqs: (region) => [
        {
          question: `${region} 건물 외벽 누수는 어떻게 작업하나요?`,
          answer: "고층 아파트나 빌라의 경우 로프 접근을 통해 외부 크랙 및 접합부를 직접 확인하고 필요한 보수 작업을 진행합니다."
        },
        {
          question: "외벽 전체를 다 칠해야 하나요, 부분 보수도 가능한가요?",
          answer: "누수 원인이 되는 취약 균열과 창호 주변 틈새를 중심으로 부분적인 중점 보수를 진행하는 것이 일반적입니다."
        },
        {
          question: "공사 소요 시간은 어느 정도 걸리나요?",
          answer: "작업 부위의 면적과 층수, 날씨에 따라 차이가 있으나 일반적인 세대 단위 작업은 하루 내에 마무리됩니다."
        }
      ]
    }
  },

  // ==========================================
  // CLUSTER C: 방수 / 도색 / 지붕 계열 (RAINFIX)
  // ==========================================
  "외벽방수": {
    serviceKey: "외벽방수",
    businessEntityId: "RAINFIX",
    verifiedFactKeys: ["ECO_PENETRATING_WATER_REPELLENT"],
    metadata: {
      titleTemplate: (region) => `${region} 외벽방수 | 외벽 상태 확인 및 방수 상담 - 틈새케어`,
      descriptionTemplate: (region, parent) => 
        `${parent ? `${parent} ` : ""}${region} 외벽방수 상담. 건물 외벽의 균열이나 마감 상태를 확인하고 필요한 방수 작업 범위를 안내합니다.`
    },
    hero: {
      headline: (region) => `${region} 외벽방수 현장 점검 및 상담`,
      subCopy: "건물 외벽의 균열과 노후 상태를 점검하고, 빗물 침투를 줄이기 위한 외벽 방수 보수 범위를 확인합니다.",
      badgeText: "외벽 방수 상태 점검",
      badges: [
        "외벽 균열 상태 확인",
        "보수 부위 확인",
        "현장 맞춤 범위 안내",
        VERIFIED_FACTS.ECO_PENETRATING_WATER_REPELLENT
      ]
    },
    empathy: {
      headline: "외벽 노후화로 인한 빗물 침투가 반복되고 있나요?",
      description: "오래된 외벽은 콘크리트 표면 균열로 인해 빗물이 흡수되어 실내로 번질 위험이 있습니다.",
      cards: [
        {
          title: "외벽 크랙 사이 빗물 흡수",
          desc: "벽체 균열 부위로 물이 스며들어 건물의 내구성을 떨어뜨리는 상태입니다."
        },
        {
          title: "외벽 도막 들뜸",
          desc: "표면 페인트가 부풀어 오르거나 벗겨져 방수 기능이 저하된 현상입니다."
        },
        {
          title: "실내 누수 피해 확산",
          desc: "외벽을 통해 들어온 습기가 실내 벽면 전체로 번져나가는 문제입니다."
        }
      ]
    },
    diagnostics: {
      headline: "외벽 방수 현장 점검 포인트",
      description: "외벽 방수가 필요한지 상태를 살펴보세요.",
      cards: [
        {
          title: "벽체 균열 분포",
          description: "외벽 표면에 가로세로로 진행된 균열 상태를 확인합니다."
        },
        {
          title: "창호 테두리 이음매",
          description: "창틀과 외벽이 만나는 접합부의 틈새를 함께 살펴봅니다."
        },
        {
          title: "표면 박리 흔적",
          description: "외벽 마감재가 벗겨지거나 부슬부슬 떨어지는지 점검합니다."
        },
        {
          title: "벽면 젖음 패턴",
          description: "비가 온 후 외벽 표면이 건조되는 상태를 관찰합니다."
        }
      ],
      alertText: "외벽 상태에 맞는 작업 안내를 통해 불필요한 비용을 줄입니다."
    },
    process: {
      title: "외벽 방수 4단계 점검 프로세스",
      subDesc: "외벽 상태를 살피고 필요한 작업을 진행합니다.",
      steps: [
        {
          step: "01",
          title: "외벽 상태 및 균열 조사",
          description: "외벽 전반의 노후 상태와 빗물 침투 취약 지점을 조사합니다."
        },
        {
          step: "02",
          title: "보수 부위 확인 및 바탕 정리",
          description: "보수가 필요한 균열 부위를 확인하고 작업 면을 정리합니다."
        },
        {
          step: "03",
          title: "외벽 방수 및 보수 작업 진행",
          description: "현장 상태에 맞는 보수재와 침투성 발수제를 도포하여 방수층을 보강합니다."
        },
        {
          step: "04",
          title: "마감 상태 확인 및 안내",
          description: "시공된 부위의 마감 상태를 검수하고 관리 방법을 안내합니다."
        }
      ],
      conclusionNote: "건물 상태에 맞추어 안전하고 체계적으로 진행합니다."
    },
    faq: {
      title: "외벽 방수 관련 자주 묻는 질문",
      faqs: (region) => [
        {
          question: `${region} 빌라 외벽 방수는 어떤 방식으로 진행되나요?`,
          answer: "외벽 균열 부위를 먼저 보수한 후, 필요에 따라 친환경 침투성 발수제를 도포하여 외부 빗물이 벽체로 스며들지 않도록 방수층을 강화합니다."
        },
        {
          question: "외벽 방수와 창틀 코킹을 같이 해야 하나요?",
          answer: "창틀 주변 누수가 동반된 경우 외벽 균열 보수와 창틀 코킹을 함께 점검하는 것이 훨씬 효과적입니다."
        },
        {
          question: "시공 전 현장 확인이 필요한가요?",
          answer: "건물의 층수와 외벽 마감 상태에 따라 작업 방법이 달라지므로, 사진 상담 후 필요한 현장 확인을 진행합니다."
        }
      ]
    }
  },

  "옥상방수": {
    serviceKey: "옥상방수",
    businessEntityId: "RAINFIX",
    verifiedFactKeys: ["ROOFTOP_URETHANE_3MM_NATIONAL_STD"],
    metadata: {
      titleTemplate: (region) => `${region} 옥상방수 | 옥상 상태 확인 및 방수 상담 - 틈새케어`,
      descriptionTemplate: (region, parent) => 
        `${parent ? `${parent} ` : ""}${region} 옥상방수 상담. 옥상 바닥의 노후·손상 상태를 확인하고 필요한 방수 작업 범위를 안내합니다.`
    },
    hero: {
      headline: (region) => `${region} 옥상방수 현장 점검 및 상담`,
      subCopy: "옥상 바닥 방수층의 들뜸과 균열 상태를 살펴보고, 빗물 유입을 막기 위한 옥상 방수 작업 범위를 점검합니다.",
      badgeText: "옥상 방수층 상태 확인",
      badges: [
        "옥상 바닥 상태 점검",
        "우레탄 들뜸 확인",
        "작업 범위 안내",
        VERIFIED_FACTS.ROOFTOP_URETHANE_3MM_NATIONAL_STD
      ]
    },
    empathy: {
      headline: "옥상 바닥의 갈라진 틈으로 비가 샐까 염려되시나요?",
      description: "옥상 방수층이 노후되면 바닥 콘크리트로 빗물이 침투하여 최상층 천장 누수의 직접적인 원인이 됩니다.",
      cards: [
        {
          title: "우레탄 층 부풀림 및 찢김",
          desc: "바닥 방수막이 들뜨거나 찢겨 빗물이 바닥으로 스며드는 상태입니다."
        },
        {
          title: "바닥 균열 및 물고임",
          desc: "바닥 구배 불량으로 물이 고이며 균열 부위로 물이 스며드는 현상입니다."
        },
        {
          title: "최상층 천장 얼룩",
          desc: "옥상 누수로 인해 아래 세대 천장으로 물 자국과 곰팡이가 번진 상태입니다."
        }
      ]
    },
    diagnostics: {
      headline: "옥상 방수 상태 점검 리스트",
      description: "옥상 바닥에서 흔히 확인되는 이상 상태입니다.",
      cards: [
        {
          title: "방수 도막 갈라짐",
          description: "기존 방수 표면에 균열이나 들뜬 부위가 있는지 살펴봅니다."
        },
        {
          title: "배수구 주변 물고임",
          description: "물빠짐이 원활하지 못해 빗물이 장시간 고여있는지 확인합니다."
        },
        {
          title: "바닥 부풀림 현상",
          description: "방수층 아래 습기로 인해 표면이 공기 방울처럼 부풀었는지 확인합니다."
        },
        {
          title: "난간 턱 조인트 균열",
          description: "바닥과 옥상 난간 벽체가 만나는 모서리 틈새를 점검합니다."
        }
      ],
      alertText: "옥상 바닥 상태에 맞는 맞춤형 방수 계획을 안내받으세요."
    },
    process: {
      title: "옥상 방수 4단계 표준 프로세스",
      subDesc: "옥상 바닥 상태를 면밀히 점검하고 시공을 진행합니다.",
      steps: [
        {
          step: "01",
          title: "옥상 바닥 상태 및 물빠짐 확인",
          description: "기존 방수층의 노후 상태와 배수구 주변의 물 흐름을 조사합니다."
        },
        {
          step: "02",
          title: "불량 부위 정리 및 바탕면 보수",
          description: "들뜬 방수막을 정리하고 바닥 균열 부위를 메워 면을 정돈합니다."
        },
        {
          step: "03",
          title: "우레탄 방수 도포 및 시공",
          description: "국가 표준 기준에 부합하도록 우레탄 방수층을 고르게 형성합니다."
        },
        {
          step: "04",
          title: "마감 검수 및 사후 안내",
          description: "방수 표면의 도막 상태를 최종 검수하고 유지 관리 요령을 설명합니다."
        }
      ],
      conclusionNote: "옥상 상태에 맞춘 올바른 방수 두께 시공을 안내합니다."
    },
    faq: {
      title: "옥상 방수 관련 자주 묻는 질문",
      faqs: (region) => [
        {
          question: `${region} 건물 옥상 우레탄 방수 두께는 왜 중요한가요?`,
          answer: "옥상 우레탄 방수는 평균 3mm 두께가 국가 표준 기준이며, 적정 두께가 유지되어야 내구성이 확보되어 오랜 기간 재누수를 방지할 수 있습니다."
        },
        {
          question: "기존 우레탄을 전부 걷어내야 하나요?",
          answer: "바닥 부착 상태가 양호한 부위는 보강 후 진행할 수 있으나, 심하게 들뜨거나 물을 머금은 부위는 철저히 정리 후 시공해야 하자가 없습니다."
        },
        {
          question: "시공 기간은 며칠 정도 걸리나요?",
          answer: "옥상 면적과 바닥 건조 상태에 따라 다르며, 단계별 건조 시간을 준수하여 수일 내외로 진행됩니다."
        }
      ]
    }
  },

  "건물방수": {
    serviceKey: "건물방수",
    businessEntityId: "RAINFIX",
    verifiedFactKeys: [],
    metadata: {
      titleTemplate: (region) => `${region} 건물방수 | 건물 상태 확인 및 방수 상담 - 틈새케어`,
      descriptionTemplate: (region, parent) => 
        `${parent ? `${parent} ` : ""}${region} 건물방수 상담. 건물의 누수 의심 부위와 외부 마감 상태를 확인하고 필요한 방수 작업 범위를 안내합니다.`
    },
    hero: {
      headline: (region) => `${region} 건물방수 현장 점검 및 상담`,
      subCopy: "건물 외벽, 옥상, 창호 주변 등 복합적인 누수 취약 부위를 종합적으로 살펴보고 필요한 방수 범위를 점검합니다.",
      badgeText: "건물 누수 종합 점검",
      badges: [
        "건물 취약 부위 확인",
        "외벽·창틀 연계 점검",
        "방수 범위 확인",
        "현장 상태 맞춤 안내"
      ]
    },
    empathy: {
      headline: "건물 여러 곳에서 누수가 발생해 복합적인 진단이 필요한가요?",
      description: "노후 건물은 한 곳의 문제만이 아니라 옥상, 외벽, 창틀이 복합적으로 얽혀 누수가 발생할 수 있습니다.",
      cards: [
        {
          title: "다발성 빗물 누수",
          desc: "여러 세대나 층에서 동시에 빗물이 스며드는 현상입니다."
        },
        {
          title: "건물 외피 노후화",
          desc: "외벽 크랙과 창호 틈새, 옥상 바닥이 전반적으로 노후된 상태입니다."
        },
        {
          title: "원인 불명의 지속 물샘",
          desc: "단순한 한 부위 보수로는 잡히지 않고 물길이 이어지는 문제입니다."
        }
      ]
    },
    diagnostics: {
      headline: "건물 외피 종합 점검 항목",
      description: "건물 전체의 방수 취약 지점을 확인해보세요.",
      cards: [
        {
          title: "옥상 및 난간 상태",
          description: "옥상 바닥과 난간 벽면의 균열 여부를 살펴봅니다."
        },
        {
          title: "외벽 및 층간 조인트",
          description: "층과 층 사이 이음매 및 벽체 균열 상태를 확인합니다."
        },
        {
          title: "창호 테두리 코킹",
          description: "건물 창틀 외부 실리콘의 전반적인 노후도를 점검합니다."
        },
        {
          title: "우수관 및 배수 경로",
          description: "빗물이 배출되는 배수 라인의 이상 유무를 확인합니다."
        }
      ],
      alertText: "종합적인 현장 확인을 통해 꼭 필요한 보수 범위를 제안해드립니다."
    },
    process: {
      title: "건물 방수 종합 점검 4단계",
      subDesc: "건물 취약 부위를 체계적으로 살펴보고 보수를 진행합니다.",
      steps: [
        {
          step: "01",
          title: "건물 전반 누수 상태 확인",
          description: "물샘이 나타나는 각 세대 및 공용부의 상태를 확인합니다."
        },
        {
          step: "02",
          title: "취약 부위별 보수 범위 확정",
          description: "옥상, 외벽, 창틀 중 우선 작업이 필요한 부위를 선정합니다."
        },
        {
          step: "03",
          title: "부위별 맞춤 방수 작업",
          description: "해당 부위의 상태에 적합한 보수 및 방수 작업을 진행합니다."
        },
        {
          step: "04",
          title: "종합 검수 및 관리 안내",
          description: "시공 부위의 마감 상태를 전반적으로 점검하고 안내합니다."
        }
      ],
      conclusionNote: "건물 전체의 상황에 맞추어 우선순위별 보수 방향을 제안합니다."
    },
    faq: {
      title: "건물 방수 관련 자주 묻는 질문",
      faqs: (region) => [
        {
          question: `${region} 빌라나 상가 건물 전체 방수 상담은 어떻게 진행되나요?`,
          answer: "누수가 발생하는 층과 세대의 피해 상황을 먼저 파악한 뒤, 옥상이나 외벽 등 주요 취약 부위를 확인하여 필요한 공사 범위를 안내합니다."
        },
        {
          question: "공사 범위를 나누어서 진행할 수도 있나요?",
          answer: "네, 누수가 가장 심각한 핵심 부위를 우선적으로 보수하고 점진적으로 범위를 넓히는 방식으로 협의가 가능합니다."
        },
        {
          question: "견적 확인을 위해 어떤 준비가 필요한가요?",
          answer: "건물 전체 외관 사진과 주요 누수 부위 사진, 건물 규모(층수, 세대수)를 알려주시면 원활한 상담이 가능합니다."
        }
      ]
    }
  },

  "외벽도색": {
    serviceKey: "외벽도색",
    businessEntityId: "RAINFIX",
    verifiedFactKeys: [],
    metadata: {
      titleTemplate: (region) => `${region} 외벽도색 | 외벽 바탕면 점검 및 도장 상담 - 틈새케어`,
      descriptionTemplate: (region, parent) => 
        `${parent ? `${parent} ` : ""}${region} 외벽도색 상담. 외벽 페인트 들뜸과 균열 상태를 확인하고 현장에 맞는 도색 작업 범위를 안내합니다.`
    },
    hero: {
      headline: (region) => `${region} 외벽도색 현장 점검 및 상담`,
      subCopy: "건물 외벽 페인트의 변색과 박리 상태를 점검하고, 미관 개선 및 벽체 보호를 위한 외벽 도색 범위를 확인합니다.",
      badgeText: "외벽 도장 상태 점검",
      badges: [
        "외벽 바탕면 상태 확인",
        "도막 들뜸 점검",
        "작업 범위 안내",
        "현장 맞춤 도색 제안"
      ]
    },
    empathy: {
      headline: "외벽 페인트가 벗겨지고 낡아 보여 고민이신가요?",
      description: "외벽 도색은 단순한 미관 개선뿐만 아니라 콘크리트 벽체를 보호하고 빗물 침투를 막아주는 보호막 역할을 합니다.",
      cards: [
        {
          title: "페인트 박리 및 들뜸",
          desc: "외벽 표면 페인트가 껍질처럼 벗겨져 콘크리트가 드러난 상태입니다."
        },
        {
          title: "햇빛에 의한 변색",
          desc: "자외선 노출로 원래의 색상이 바래고 얼룩덜룩해진 외관입니다."
        },
        {
          title: "벽체 미세 크랙 노출",
          desc: "페인트가 갈라지며 그 사이로 벽체 미세 균열이 드러난 상태입니다."
        }
      ]
    },
    diagnostics: {
      headline: "외벽 도장면 점검 항목",
      description: "외벽 도색이 필요한 상태인지 확인해보세요.",
      cards: [
        {
          title: "도막 부착 상태",
          description: "손으로 문질렀을 때 페인트 가루가 묻어나오거나 떨어지는지 봅니다."
        },
        {
          title: "바탕 균열 상태",
          description: "도색 전 보수가 필요한 벽면 크랙이 얼마나 퍼져있는지 관찰합니다."
        },
        {
          title: "벽면 오염 흔적",
          description: "빗물 자국이나 매연 등으로 인한 오염이 심한지 확인합니다."
        },
        {
          title: "창호 테두리 상태",
          description: "도색과 맞닿는 창틀 코킹 부위의 노후도를 함께 점검합니다."
        }
      ],
      alertText: "철저한 사전 점검으로 깔끔하고 오래가는 외벽 마감을 돕습니다."
    },
    process: {
      title: "외벽 도색 4단계 작업 프로세스",
      subDesc: "바탕면을 정돈하고 깔끔한 외벽 도색을 진행합니다.",
      steps: [
        {
          step: "01",
          title: "외벽 상태 및 도막 조사",
          description: "외벽 페인트 박리 상태와 도색이 필요한 면적을 파악합니다."
        },
        {
          step: "02",
          title: "바탕면 정리 및 불량 도막 제거",
          description: "들뜬 페인트를 긁어내고 벽면 균열 부위를 정리합니다."
        },
        {
          step: "03",
          title: "외벽 맞춤 도장 작업",
          description: "건물 특성에 적합한 외벽용 도료로 고르게 도색 작업을 진행합니다."
        },
        {
          step: "04",
          title: "도장 마감 검수 및 안내",
          description: "도색 마감 상태와 도막의 균일성을 확인하고 마무리합니다."
        }
      ],
      conclusionNote: "바탕 정리를 우선하여 깔끔한 마감 품질을 유지합니다."
    },
    faq: {
      title: "외벽 도색 관련 자주 묻는 질문",
      faqs: (region) => [
        {
          question: `${region} 빌라 외벽 도색 전 균열 보수도 같이 해주나요?`,
          answer: "네, 페인트를 칠하기 전 들뜬 부위를 정리하고 눈에 띄는 벽면 균열을 보수한 후 도색을 진행해야 들뜸 없이 오래 유지됩니다."
        },
        {
          question: "도색 공사 중 창문이나 주변 차량 보양은 어떻게 하나요?",
          answer: "페인트가 튀지 않도록 창문과 주변 시설물에 대한 보양 작업을 사전에 철저히 진행합니다."
        },
        {
          question: "색상 선택은 어떻게 진행되나요?",
          answer: "건물 주변 분위기 및 고객 선호도를 고려하여 적합한 색상표를 기준으로 협의 후 결정합니다."
        }
      ]
    }
  },

  "지붕방수": {
    serviceKey: "지붕방수",
    businessEntityId: "RAINFIX",
    verifiedFactKeys: [],
    metadata: {
      titleTemplate: (region) => `${region} 지붕방수 | 지붕 표면 상태 점검 및 방수 상담 - 틈새케어`,
      descriptionTemplate: (region, parent) => 
        `${parent ? `${parent} ` : ""}${region} 지붕방수 상담. 지붕 표면의 노후 균열과 빗물 유입 가능성을 확인하고 필요한 방수 작업 범위를 안내합니다.`
    },
    hero: {
      headline: (region) => `${region} 지붕방수 현장 점검 및 상담`,
      subCopy: "지붕 상부의 방수 상태와 노후 취약 지점을 살펴보고, 빗물 유입을 차단하기 위한 지붕 방수 범위를 점검합니다.",
      badgeText: "지붕 방수 상태 확인",
      badges: [
        "지붕 표면 상태 확인",
        "방수층 노후 점검",
        "보수 범위 안내",
        "현장 맞춤 상담 제안"
      ]
    },
    empathy: {
      headline: "지붕 상부의 노후화로 천장 누수가 염려되시나요?",
      description: "지붕은 햇빛과 눈비에 직접 노출되어 마감재 노후와 틈새 발생이 빠르게 진행될 수 있습니다.",
      cards: [
        {
          title: "지붕 마감재 균열",
          desc: "지붕 표면 방수층이 갈라져 빗물이 하부로 스며드는 상태입니다."
        },
        {
          title: "이음새 틈새 벌어짐",
          desc: "지붕 패널이나 접합 부위가 벌어져 비바람이 치는 현상입니다."
        },
        {
          title: "천장 물얼룩 발생",
          desc: "지붕을 타고 내려온 물기가 실내 천장으로 번져나가는 문제입니다."
        }
      ]
    },
    diagnostics: {
      headline: "지붕 방수 이상 유무 점검",
      description: "지붕 상태를 파악하는 체크포인트입니다.",
      cards: [
        {
          title: "표면 방수재 갈라짐",
          description: "지붕 상단 도막이나 마감층이 벗겨졌는지 확인합니다."
        },
        {
          title: "물골 및 홈통 상태",
          description: "지붕 빗물이 빠져나가는 물골에 낙엽이나 이물질이 막혔는지 점검합니다."
        },
        {
          title: "접합 나사 및 이음매",
          description: "지붕 자재를 고정하는 이음새 틈이 벌어졌는지 살펴봅니다."
        },
        {
          title: "실내 다락 및 천장 상태",
          description: "지붕 바로 아래 실내 공간에 습기나 물기가 있는지 확인합니다."
        }
      ],
      alertText: "안전한 지붕 확인을 통해 최적의 보수 방향을 안내합니다."
    },
    process: {
      title: "지붕 방수 4단계 점검 프로세스",
      subDesc: "지붕 상부 상태를 확인하고 필요한 방수 작업을 진행합니다.",
      steps: [
        {
          step: "01",
          title: "지붕 상태 및 유입 조사",
          description: "지붕 표면의 노후 상태와 실내 누수 위치를 확인합니다."
        },
        {
          step: "02",
          title: "보수 필요 부위 확인",
          description: "지붕 마감 틈새와 물골 부위를 점검하여 작업 범위를 정합니다."
        },
        {
          step: "03",
          title: "지붕 부위 방수 작업 진행",
          description: "현장 지붕 조건에 적합한 방수재로 틈새를 메우고 표면을 보강합니다."
        },
        {
          step: "04",
          title: "작업 부위 검수 및 안내",
          description: "마감 상태를 최종 확인하고 관리 주의사항을 설명합니다."
        }
      ],
      conclusionNote: "현장 조건에 맞는 안전한 지붕 시공을 지향합니다."
    },
    faq: {
      title: "지붕 방수 관련 자주 묻는 질문",
      faqs: (region) => [
        {
          question: `${region} 단독주택이나 공장 지붕 방수는 어떻게 진행되나요?`,
          answer: "지붕 구조와 마감 형태에 따라 상부 균열 부위 보수 및 방수 도포 작업을 안전 수칙에 맞춰 진행합니다."
        },
        {
          question: "지붕을 전부 뜯어내지 않고도 방수가 가능한가요?",
          answer: "골조 손상이 심각하지 않다면 상부 틈새 보수 및 전용 방수 시공을 통해 개선되는 경우가 많습니다."
        },
        {
          question: "비가 새는 정확한 위치를 어떻게 찾나요?",
          answer: "실내 천장 젖음 위치와 상부 지붕의 물길 및 이음매 상태를 대조하여 의심 부위를 좁혀나갑니다."
        }
      ]
    }
  },

  "지붕보수": {
    serviceKey: "지붕보수",
    businessEntityId: "RAINFIX",
    verifiedFactKeys: [],
    metadata: {
      titleTemplate: (region) => `${region} 지붕보수 | 지붕 손상 부위 확인 및 수리 상담 - 틈새케어`,
      descriptionTemplate: (region, parent) => 
        `${parent ? `${parent} ` : ""}${region} 지붕보수 상담. 지붕 마감재 손상이나 들뜸 상태를 확인하고 부분 보수 범위를 안내합니다.`
    },
    hero: {
      headline: (region) => `${region} 지붕보수 현장 점검 및 상담`,
      subCopy: "지붕 마감재의 부분 파손과 들뜸 부위를 확인하고, 안전한 주거를 위한 지붕 수리 범위를 점검합니다.",
      badgeText: "지붕 마감재 수리 점검",
      badges: [
        "지붕 파손 상태 확인",
        "부분 보수 범위 점검",
        "안전 수리 안내",
        "현장 맞춤 보수 제안"
      ]
    },
    empathy: {
      headline: "강풍이나 세월로 인해 지붕 마감재가 손상되었나요?",
      description: "지붕 일부가 들뜨거나 깨지면 그 틈으로 비바람이 침투해 2차 구조 손상으로 이어질 수 있습니다.",
      cards: [
        {
          title: "마감재 부분 들뜸",
          desc: "강한 바람에 지붕 외장재 일부가 헐거워지거나 들린 상태입니다."
        },
        {
          title: "지붕재 파손 및 균열",
          desc: "노후나 낙하물 충격으로 지붕 덮개에 금이 가거나 깨진 흔적입니다."
        },
        {
          title: "물받이 및 부속 탈락",
          desc: "지붕 끝단 물받이나 마감 덮개가 이탈되어 물이 넘치는 현상입니다."
        }
      ]
    },
    diagnostics: {
      headline: "지붕 손상 부위 점검",
      description: "보수가 필요한 지붕 상태를 확인해보세요.",
      cards: [
        {
          title: "지붕재 흔들림",
          description: "외장재가 고정력을 잃고 덜컹거리는지 확인합니다."
        },
        {
          title: "부분 깨짐 및 유격",
          description: "마감재 파손으로 구멍이나 틈이 생겼는지 관찰합니다."
        },
        {
          title: "마감 캡 및 실링",
          description: "고정 부위 주변 실링재가 삭았는지 살펴봅니다."
        },
        {
          title: "물받이 연결 부위",
          description: "배수 부속의 체결 상태가 헐겁지 않은지 점검합니다."
        }
      ],
      alertText: "부분 보수를 통해 신속하게 지붕 안전을 지킵니다."
    },
    process: {
      title: "지붕 보수 4단계 수리 절차",
      subDesc: "손상된 지붕 부위를 확인하고 보수를 진행합니다.",
      steps: [
        {
          step: "01",
          title: "지붕 손상 위치 파악",
          description: "들뜨거나 깨진 지붕 마감재의 위치와 규모를 확인합니다."
        },
        {
          step: "02",
          title: "보수 부위 확인 및 안전 점검",
          description: "수리가 필요한 범위를 정하고 작업 안전성을 검토합니다."
        },
        {
          step: "03",
          title: "마감재 교정 및 고정 작업",
          description: "손상된 자재를 정돈하고 흔들리지 않도록 견고히 체결 보수합니다."
        },
        {
          step: "04",
          title: "작업 부위 검수 및 안내",
          description: "수리 상태를 최종 점검하고 관리 요령을 설명합니다."
        }
      ],
      conclusionNote: "필요한 부위를 선별하여 합리적인 부분 보수를 돕습니다."
    },
    faq: {
      title: "지붕 보수 관련 자주 묻는 질문",
      faqs: (region) => [
        {
          question: `${region} 지붕 전체 교체 없이 일부만 수리가 가능한가요?`,
          answer: "네, 파손되거나 들뜬 특정 부위만 선별하여 마감재를 고정하고 틈새를 메우는 부분 보수가 충분히 가능합니다."
        },
        {
          question: "바람이 불 때 지붕에서 소리가 나는데 왜 그런가요?",
          answer: "지붕 마감재를 고정해둔 나사나 못이 헐거워져 틈새가 벌어졌을 가능성이 높으므로 고정 보수가 필요합니다."
        },
        {
          question: "위험한 지붕 작업을 어떻게 진행하나요?",
          answer: "현장 안전 수칙을 철저히 준수하며 안전 장비를 갖추고 작업 인력이 점검과 작업을 진행합니다."
        }
      ]
    }
  },

  "지붕누수": {
    serviceKey: "지붕누수",
    businessEntityId: "RAINFIX",
    verifiedFactKeys: [],
    metadata: {
      titleTemplate: (region) => `${region} 지붕누수 | 지붕 상부 유입 경로 점검 - 틈새케어`,
      descriptionTemplate: (region, parent) => 
        `${parent ? `${parent} ` : ""}${region} 지붕누수 상담. 비 온 뒤 천장 물자국이나 습기 원인을 확인하고 지붕 보수 범위를 안내합니다.`
    },
    hero: {
      headline: (region) => `${region} 지붕누수 현장 점검 및 상담`,
      subCopy: "지붕 상부에서 발생하는 빗물 유입 경로를 확인하고, 천장 물샘을 막기 위한 보수 범위를 점검합니다.",
      badgeText: "지붕 누수 경로 점검",
      badges: [
        "지붕 유입 경로 확인",
        "천장 물샘 원인 점검",
        "보수 범위 안내",
        "현장 맞춤 상담 제안"
      ]
    },
    empathy: {
      headline: "비가 오면 천장에서 물이 떨어져 불안하신가요?",
      description: "지붕 누수는 물이 들어온 위치와 실내에서 떨어지는 위치가 다를 수 있어 유입 경로를 꼼꼼히 살펴야 합니다.",
      cards: [
        {
          title: "천장 도배지 젖음",
          desc: "비 온 후 천장에 둥근 물 얼룩이 생기거나 물방울이 맺히는 현상입니다."
        },
        {
          title: "지붕 골조 틈새 유입",
          desc: "지붕 마감재 틈으로 비바람이 치며 내부로 물길이 만들어진 상태입니다."
        },
        {
          title: "반복되는 물고임",
          desc: "강우 시마다 같은 위치로 물이 번지며 곰팡이가 퍼져나가는 문제입니다."
        }
      ]
    },
    diagnostics: {
      headline: "지붕 누수 유입 의심 부위",
      description: "지붕 누수의 주요 원인 지점을 확인해보세요.",
      cards: [
        {
          title: "지붕 능선 및 용마루",
          description: "지붕 꼭대기 용마루 마감 부위의 틈새를 확인합니다."
        },
        {
          title: "환기구 및 굴뚝 주변",
          description: "지붕을 관통하는 돌출 시설물 주변 코킹 상태를 점검합니다."
        },
        {
          title: "배수 계곡 및 물골",
          description: "경사면이 만나는 물골 부위에 이물질이 끼거나 터졌는지 봅니다."
        },
        {
          title: "지붕재 체결부 부식",
          description: "고정 볼트 주변 패킹이 삭아 틈이 생겼는지 확인합니다."
        }
      ],
      alertText: "물길의 근원지를 정확히 짚어내는 것이 중요합니다."
    },
    process: {
      title: "지붕 누수 원인 해결 4단계",
      subDesc: "물길을 추적하고 꼼꼼한 마무리를 진행합니다.",
      steps: [
        {
          step: "01",
          title: "실내 흔적 및 지붕 조사",
          description: "천장 젖음 부위와 대응하는 지붕 상부의 취약점을 조사합니다."
        },
        {
          step: "02",
          title: "유입 의심 틈새 확인",
          description: "용마루, 물골, 체결부 주변의 틈새 상태를 집중 확인합니다."
        },
        {
          step: "03",
          title: "지붕 취약 부위 보수",
          description: "빗물이 들어오는 틈새를 메우고 마감재를 견고하게 보강합니다."
        },
        {
          step: "04",
          title: "마감 확인 및 사후 안내",
          description: "보수 부위의 밀폐 상태를 검수하고 관리 요령을 설명합니다."
        }
      ],
      conclusionNote: "지붕 누수 원인에 맞는 적합한 보수를 제공합니다."
    },
    faq: {
      title: "지붕 누수 관련 자주 묻는 질문",
      faqs: (region) => [
        {
          question: `${region} 비가 올 때만 천장에서 물이 새는데 지붕 문제인가요?`,
          answer: "비가 내릴 때 집중적으로 천장이 젖는다면 지붕 이음새나 용마루, 물골 부위의 틈새를 통한 빗물 유입일 가능성이 높습니다."
        },
        {
          question: "천장 젖은 위치 바로 위를 고치면 되나요?",
          answer: "지붕은 경사가 있어 상부에서 들어온 물이 골조를 타고 엉뚱한 위치로 흘러 떨어질 수 있으므로, 상부 전체 물길을 함께 점검해야 합니다."
        },
        {
          question: "점검 신청 시 어떤 내용을 전달하면 되나요?",
          answer: "천장 젖은 모습 사진과 지붕 외관 사진을 함께 보내주시면 원인 추정과 상담에 큰 도움이 됩니다."
        }
      ]
    }
  }
};
