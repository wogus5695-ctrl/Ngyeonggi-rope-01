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
      titleTemplate: (region) => `${region} 창틀코킹 | 기존 코킹 상태 확인 및 재시공 상담 - 틈새케어`,
      descriptionTemplate: (region, parent) => 
        `${parent ? `${parent} ` : ""}${region} 창틀코킹 상담. 창틀 주변 기존 코킹의 노후·들뜸·갈라짐 상태와 작업이 필요한 범위를 확인하고, 기존 실리콘 100% 제거 후 재시공 기준으로 필요한 창틀코킹 작업을 안내합니다.`
    },
    hero: {
      headline: (region) => `${region} 창틀코킹 현장 점검 및 상담`,
      subCopy: "창틀 주변 기존 코킹의 노후·들뜸·갈라짐 상태를 살펴보고, 기존 실리콘 100% 제거 후 재시공 기준으로 작업 범위를 안내합니다.",
      badgeText: "창틀 코킹 상태 확인",
      badges: [
        "기존 코킹 상태 확인",
        "창틀 주변 틈새 점검",
        "현장 맞춤 범위 안내",
        VERIFIED_FACTS.REMOVE_OLD_SILICONE_100
      ]
    },
    empathy: {
      headline: "창틀 주변 기존 코킹이 들뜨거나 갈라져 고민되시나요?",
      description: "창틀 외부 마감 코킹은 기온 변화와 계절 흐름에 따라 노후화될 수 있습니다. 들뜸이나 틈새가 관찰된다면 기존 코킹 상태를 먼저 점검해보는 것이 좋습니다.",
      cards: [
        {
          title: "코킹 들뜸 및 갈라짐",
          desc: "창틀 테두리의 기존 코킹 표면이 갈라지거나 벽면에서 떨어져 틈이 생기는 현상입니다."
        },
        {
          title: "창틀 주변 틈새 발생",
          desc: "오래된 마감재가 경화되어 밀착력을 잃고 창틀 테두리에 틈새가 벌어진 상태입니다."
        },
        {
          title: "노후 마감재 손상",
          desc: "창틀 주변 코킹재의 노후로 표면 손상이나 들뜸 흔적이 눈에 띄는 상태입니다."
        }
      ]
    },
    diagnostics: {
      headline: "창틀 코킹 현장 점검 체크포인트",
      description: "창틀 주변에서 흔히 관찰되는 기존 코킹 상태를 육안으로 확인해보세요.",
      cards: [
        {
          title: "외부 코킹 균열 상태",
          description: "창틀 바깥쪽 코킹 표면에 금이 가거나 찢어진 곳이 있는지 살펴봅니다."
        },
        {
          title: "창틀 테두리 들뜸",
          description: "창틀과 외벽 벽체 경계면 사이에 눈에 띄는 틈새나 들뜸이 있는지 확인합니다."
        },
        {
          title: "하부 코킹 마감 상태",
          description: "비나 먼지에 노출되기 쉬운 창틀 아래쪽 코킹 마감 부위를 살펴봅니다."
        },
        {
          title: "코킹 밀착 상태 관찰",
          description: "기존 코킹재가 벽면과 창틀 프레임에 제대로 붙어있는지 관찰합니다."
        }
      ],
      alertText: "창틀 주변 상태를 꼼꼼히 살펴 기존 실리콘 100% 제거 후 재시공 필요 범위를 확인합니다."
    },
    process: {
      title: "창틀 코킹 점검 및 시공 4단계 절차",
      subDesc: "기존 코킹 상태를 면밀히 살피고 안전한 재시공 절차를 안내합니다.",
      steps: [
        {
          step: "01",
          title: "상담 내용 및 기존 코킹 상태 확인",
          description: "상담 시 접수된 내용과 창틀 주변 기존 코킹의 노후·들뜸 상태를 확인합니다."
        },
        {
          step: "02",
          title: "작업 범위 및 보수 부위 확인",
          description: "창틀 테두리 손상 부위와 현장에서 작업이 필요한 범위를 점검합니다."
        },
        {
          step: "03",
          title: "기존 실리콘 100% 제거 후 재시공",
          description: "들뜨고 손상된 기존 실리콘을 100% 제거하여 정리한 뒤 꼼꼼하게 재시공합니다."
        },
        {
          step: "04",
          title: "작업 부위 마감 상태 확인 및 안내",
          description: "코킹 표면의 밀착 상태와 마감을 검수하고 향후 유지 관리 요령을 설명합니다."
        }
      ],
      conclusionNote: "창틀 상태에 맞춰 기존 실리콘 100% 제거 후 재시공 기준의 꼼꼼한 마무리를 안내합니다."
    },
    faq: {
      title: "창틀코킹 관련 자주 묻는 질문",
      faqs: (region) => [
        {
          question: `${region} 창틀코킹 상담은 어떻게 진행되나요?`,
          answer: "창틀 주변 기존 코킹의 노후·들뜸·갈라짐 상태와 작업이 필요한 범위를 확인한 뒤 필요한 창틀코킹 작업을 안내합니다."
        },
        {
          question: "기존 실리콘 위에 바로 덧바르나요?",
          answer: "틈새케어의 창틀코킹 작업은 기존 실리콘을 100% 제거한 뒤 재시공하는 기준으로 안내합니다."
        },
        {
          question: "창틀코킹이 필요한지는 어떻게 확인하나요?",
          answer: "창틀 주변 기존 코킹의 들뜸이나 갈라짐, 노후 상태 등을 확인하고 작업이 필요한 범위를 안내합니다."
        }
      ]
    }
  },

  "창틀실리콘": {
    serviceKey: "창틀실리콘",
    businessEntityId: "ALLCARE",
    verifiedFactKeys: ["REMOVE_OLD_SILICONE_100"],
    metadata: {
      titleTemplate: (region) => `${region} 창틀실리콘 | 실리콘 노후 상태 확인 및 재시공 상담 - 틈새케어`,
      descriptionTemplate: (region, parent) => 
        `${parent ? `${parent} ` : ""}${region} 창틀실리콘 상담. 창틀 실리콘의 노후·들뜸·갈라짐·변색 상태와 작업이 필요한 범위를 확인하고, 기존 실리콘 100% 제거 후 재시공 기준으로 필요한 창틀실리콘 작업을 안내합니다.`
    },
    hero: {
      headline: (region) => `${region} 창틀실리콘 현장 점검 및 상담`,
      subCopy: "창틀 주변 실리콘의 노후·들뜸·갈라짐 상태를 살펴보고 재시공이 필요한 범위를 안내합니다.",
      badgeText: "창틀 실리콘 상태 확인",
      badges: [
        "실리콘 노후 상태 점검",
        "접합부 들뜸 확인",
        "재시공 범위 안내",
        VERIFIED_FACTS.REMOVE_OLD_SILICONE_100
      ]
    },
    empathy: {
      headline: "창틀 주변 기존 실리콘이 노후되거나 갈라져 고민되시나요?",
      description: "창틀 주변 실리콘은 계절 변화와 외부 환경에 따라 노후화될 수 있습니다. 들뜸이나 변색이 관찰된다면 실리콘 마감 상태를 먼저 점검해보는 것이 좋습니다.",
      cards: [
        {
          title: "실리콘 삭음 및 분리",
          desc: "실리콘 표면이 거칠어지며 가루가 묻어나거나 벽체 경계면에서 분리된 상태입니다."
        },
        {
          title: "이음새 곰팡이와 변색",
          desc: "실리콘 주변에 습기가 머물면서 오염 흔적과 변색이 번진 상태입니다."
        },
        {
          title: "실리콘 틈새 발생",
          desc: "벌어진 실리콘 틈새 사이로 외부 습기나 빗물 스며듦이 의심되는 상태입니다."
        }
      ]
    },
    diagnostics: {
      headline: "창틀 실리콘 상태 점검 리스트",
      description: "창틀 실리콘의 현재 상태를 육안으로 직접 살펴보세요.",
      cards: [
        {
          title: "실리콘 갈라짐 상태",
          description: "실리콘 표면을 따라 미세한 균열이나 갈라짐이 생겼는지 확인합니다."
        },
        {
          title: "주변 마감 들뜸 여부",
          description: "콘크리트 벽면과 실리콘 사이에 벌어진 유격이나 틈새가 있는지 살펴봅니다."
        },
        {
          title: "표면 마감 노후 상태",
          description: "실리콘 표면이 푸석해지거나 들떠서 떨어진 부위가 있는지 확인합니다."
        },
        {
          title: "접합부 마감 관찰",
          description: "창틀과 벽체 사이 실리콘이 전체적으로 밀착되어 있는지 관찰합니다."
        }
      ],
      alertText: "기존 실리콘 상태와 재시공이 필요한 범위를 함께 확인합니다."
    },
    process: {
      title: "창틀 실리콘 점검 및 재시공 4단계 절차",
      subDesc: "실리콘 상태를 면밀히 살피고 안전한 재시공 절차를 안내합니다.",
      steps: [
        {
          step: "01",
          title: "상담 내용 및 실리콘 상태 점검",
          description: "상담 접수 내용과 창틀 전반의 실리콘 들뜸 및 노후 상태를 확인합니다."
        },
        {
          step: "02",
          title: "보수 부위 및 작업 범위 확인",
          description: "창틀 테두리의 손상 부위를 점검하여 현장에서 필요한 작업 범위를 안내합니다."
        },
        {
          step: "03",
          title: "기존 실리콘 100% 제거 후 재시공",
          description: "부착력을 잃고 손상된 오래된 실리콘을 100% 제거하여 정리한 뒤 꼼꼼하게 재시공합니다."
        },
        {
          step: "04",
          title: "마감 상태 확인 및 관리 안내",
          description: "표면 마감 상태를 검수하고 향후 유지 관리 요령을 설명합니다."
        }
      ],
      conclusionNote: "작업 후 마감 상태를 확인하고 관리 시 참고할 사항을 안내합니다."
    },
    faq: {
      title: "창틀 실리콘 관련 자주 묻는 질문",
      faqs: (region) => [
        {
          question: `${region} 창틀 실리콘은 언제 점검하는 것이 좋은가요?`,
          answer: "고정된 주기보다는 창틀 테두리 실리콘에 들뜸, 갈라짐, 변색 등 노후 흔적이 눈에 띄거나 틈새가 벌어졌을 때 현장 점검을 권장합니다."
        },
        {
          question: "기존 실리콘 위에 그대로 덧바르나요?",
          answer: "기존 실리콘을 모두 제거한 뒤 작업 부위를 정리하고 새로 시공하는 방식으로 진행합니다."
        },
        {
          question: "실내 쪽 실리콘만 작업하면 되나요?",
          answer: "실내와 외부의 실리콘 상태 및 누수가 의심되는 부위를 함께 확인한 뒤, 어느 부위의 작업이 필요한지 안내합니다."
        }
      ]
    }
  },

  "샷시실리콘": {
    serviceKey: "샷시실리콘",
    businessEntityId: "ALLCARE",
    verifiedFactKeys: ["REMOVE_OLD_SILICONE_100"],
    metadata: {
      titleTemplate: (region) => `${region} 샷시실리콘 | 샷시 주변 실리콘 상태 확인 및 재시공 상담 - 틈새케어`,
      descriptionTemplate: (region, parent) => 
        `${parent ? `${parent} ` : ""}${region} 샷시실리콘 상담. 샷시 창호 테두리 실리콘의 들뜸·갈라짐과 마감 상태를 살펴보고, 기존 실리콘 100% 제거 후 재시공 기준으로 필요한 샷시실리콘 작업을 안내합니다.`
    },
    hero: {
      headline: (region) => `${region} 샷시실리콘 현장 점검 및 상담`,
      subCopy: "샷시 테두리 주변 실리콘의 들뜸·갈라짐과 마감 상태를 살펴보고 재시공이 필요한 범위를 안내합니다.",
      badgeText: "샷시 테두리 실리콘 점검",
      badges: [
        "샷시 테두리 상태 확인",
        "실리콘 마감 점검",
        "보수 범위 안내",
        VERIFIED_FACTS.REMOVE_OLD_SILICONE_100
      ]
    },
    empathy: {
      headline: "샷시 테두리 실리콘 틈새로 찬바람이나 빗물이 걱정되시나요?",
      description: "창호 샷시 테두리 실리콘이 노후되면 틈새가 벌어져 외풍이나 물 스며듦의 원인이 될 수 있습니다.",
      cards: [
        {
          title: "샷시 테두리 들뜸",
          desc: "샷시 모서리와 벽면 사이 실리콘이 들떠 틈새가 벌어진 상태입니다."
        },
        {
          title: "빗물 유입 흔적 관찰",
          desc: "비가 올 때 샷시 테두리 주변을 타고 물방울이 맺히거나 스며드는 흔적입니다."
        },
        {
          title: "테두리 실리콘 탈락",
          desc: "오래된 실리콘 조각이 떨어져 나가 공간이 비어있는 상태입니다."
        }
      ]
    },
    diagnostics: {
      headline: "샷시 실리콘 상태 점검 체크포인트",
      description: "샷시 창호 테두리 주변의 실리콘 상태를 간단히 점검해보세요.",
      cards: [
        {
          title: "하단 모서리 실리콘 상태",
          description: "비나 먼지에 자주 닿는 샷시 하단 테두리의 실리콘 상태를 확인합니다."
        },
        {
          title: "측면 실리콘 부착 상태",
          description: "외벽 벽체와 샷시 기둥 사이 실리콘이 떨어져 있는지 살펴봅니다."
        },
        {
          title: "상단 마감 틈새 점검",
          description: "샷시 윗부분 벽면과 맞닿은 테두리에 틈새가 있는지 점검합니다."
        },
        {
          title: "내부 습기 흔적 관찰",
          description: "샷시 안쪽 턱 주변에 습기나 물기 흔적이 남는지 확인합니다."
        }
      ],
      alertText: "샷시 주변 실리콘 상태와 재시공이 필요한 범위를 확인합니다."
    },
    process: {
      title: "샷시 실리콘 점검 및 보수 4단계 절차",
      subDesc: "샷시 주변 실리콘 상태를 확인하고 체계적인 보수를 진행합니다.",
      steps: [
        {
          step: "01",
          title: "상담 내용 및 샷시 주변 상태 확인",
          description: "접수된 상담 내용과 샷시 테두리의 실리콘 상태 및 틈새 위치를 조사합니다."
        },
        {
          step: "02",
          title: "보수 필요 부위 및 범위 확인",
          description: "손상된 실리콘 부위를 확인하여 현장에서 필요한 작업 범위를 안내합니다."
        },
        {
          step: "03",
          title: "기존 실리콘 100% 제거 후 재시공",
          description: "노후되거나 들뜬 기존 실리콘을 모두 제거한 뒤 작업 부위를 정리하고 재시공합니다."
        },
        {
          step: "04",
          title: "마감 검수 및 상태 안내",
          description: "실리콘 마감 상태를 검수하고 향후 유지 관리 요령을 설명합니다."
        }
      ],
      conclusionNote: "작업 부위의 마감 상태를 확인하고 관리 사항을 안내합니다."
    },
    faq: {
      title: "샷시 실리콘 관련 자주 묻는 질문",
      faqs: (region) => [
        {
          question: `${region} 샷시 자체를 교체해야 하는지 실리콘 재시공만 해도 되는지 어떻게 아나요?`,
          answer: "샷시 프레임 자체의 파손 여부와 테두리 실리콘 노후 상태를 구분하여 확인한 뒤, 실리콘 작업 대상인지 별도 조치가 필요한지 안내합니다."
        },
        {
          question: "기존 실리콘 위에 그대로 덧바르나요?",
          answer: "기존 실리콘을 모두 제거한 뒤 작업 부위를 정리하고 새로 시공하는 방식으로 진행합니다."
        },
        {
          question: "상담 시 어떤 사진을 준비하면 확인에 도움이 되나요?",
          answer: "샷시 전체 모습과 실리콘이 들뜨거나 갈라진 상세 부위, 실내 젖음 흔적 사진을 함께 전달해주시면 상태 확인이 수월합니다."
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
      titleTemplate: (region) => `${region} 창틀누수 | 창 주변 물샘 의심 부위 확인 및 상담 - 틈새케어`,
      descriptionTemplate: (region, parent) => 
        `${parent ? `${parent} ` : ""}${region} 창틀누수 상담. 창 주변 물자국이나 젖음 흔적과 창틀 주변 상태를 확인하고, 누수가 의심되는 부위와 추가 점검이 필요한 범위를 안내합니다.`
    },
    hero: {
      headline: (region) => `${region} 창틀누수 현장 점검 및 상담`,
      subCopy: "창틀 주변 물자국과 외부 마감 상태를 함께 확인하고, 누수가 의심되는 부위와 추가 점검 범위를 안내합니다.",
      badgeText: "창틀 누수 의심 부위 점검",
      badges: [
        "창 주변 물자국 확인",
        "창틀 하부 상태 점검",
        "외부 의심 부위 확인",
        "현장 맞춤 점검 안내"
      ]
    },
    empathy: {
      headline: "창틀 주변으로 물자국이나 젖음 흔적이 번져 고민되시나요?",
      description: "창틀 주변 물샘은 실내 젖음 위치와 외부 창호 마감 상태를 함께 살펴 원인 의심 구간을 좁혀야 합니다.",
      cards: [
        {
          title: "창틀 하부 물자국",
          desc: "비가 온 후 창호 아래쪽 벽면이나 바닥 주변에 물자국이 남는 현상입니다."
        },
        {
          title: "창가 주변 벽면 젖음",
          desc: "창틀과 맞닿은 실내 벽지나 몰딩 주변이 눅눅해지는 상태입니다."
        },
        {
          title: "창 주변 틈새 의심",
          desc: "창틀 외부 마감 부위의 벌어짐이나 노후로 물 스며듦이 의심되는 상태입니다."
        }
      ]
    },
    diagnostics: {
      headline: "창틀 누수 의심 부위 점검",
      description: "창틀 주변에서 누수가 의심되는 주요 확인 지점입니다.",
      cards: [
        {
          title: "창틀 하부 및 코너 부위",
          description: "창호 아래쪽과 모서리 경계 부위의 물자국 흔적을 확인합니다."
        },
        {
          title: "창호 외부 마감 상태",
          description: "외부 창틀 테두리 마감재의 들뜸이나 벌어짐 상태를 점검합니다."
        },
        {
          title: "창틀 주변 외벽 경계",
          description: "창틀과 맞닿은 외부 벽면 틈새나 이음 부위 상태를 살펴봅니다."
        },
        {
          title: "실내 벽면 젖음 범위",
          description: "실내 도배지나 마감재의 물 번짐 위치와 범위를 관찰합니다."
        }
      ],
      alertText: "누수 의심 부위를 꼼꼼히 살펴 필요한 점검 범위를 확인합니다."
    },
    process: {
      title: "창틀 누수 점검 및 확인 4단계",
      subDesc: "실내 흔적과 창틀 주변 상태를 종합적으로 살펴봅니다.",
      steps: [
        {
          step: "01",
          title: "상담 내용 및 창 주변 누수 흔적 확인",
          description: "실내 창틀 주변에 나타난 물자국과 젖음 흔적의 위치를 확인합니다."
        },
        {
          step: "02",
          title: "창틀 및 주변 마감 상태 확인",
          description: "실내 흔적과 대응하는 외부 창호 테두리 및 주변 마감 상태를 살펴봅니다."
        },
        {
          step: "03",
          title: "의심 부위 및 추가 확인 범위 안내",
          description: "누수가 의심되는 부위와 현장에서 추가 확인이 필요한 범위를 안내합니다."
        },
        {
          step: "04",
          title: "현장 상태별 작업 방향 안내",
          description: "점검 결과를 종합하여 현장 상태에 적합한 보수 및 조치 방향을 설명합니다."
        }
      ],
      conclusionNote: "현장 상태를 면밀히 살펴 신중하고 안전한 작업 방향을 안내합니다."
    },
    faq: {
      title: "창틀 누수 관련 자주 묻는 질문",
      faqs: (region) => [
        {
          question: `${region} 창틀누수 상담은 어떻게 진행되나요?`,
          answer: "창 주변에 나타난 물자국이나 젖음 흔적과 창틀 주변 상태를 함께 확인하고, 누수가 의심되는 부위와 추가 점검이 필요한 범위를 안내합니다."
        },
        {
          question: "창 주변이 젖으면 창틀누수인가요?",
          answer: "창 주변의 젖음 흔적만으로 누수 원인을 단정하기는 어렵습니다. 증상이 나타난 위치와 창틀 주변 상태를 함께 확인해 추가 점검이 필요한 범위를 안내합니다."
        },
        {
          question: "비가 올 때 창 주변에 물이 보이면 점검할 수 있나요?",
          answer: "증상이 나타나는 시점과 위치 등 상담 내용을 확인하고, 창틀과 주변 마감 상태를 함께 살펴 필요한 점검 범위를 안내합니다."
        }
      ]
    }
  },

  "빗물누수": {
    serviceKey: "빗물누수",
    businessEntityId: "ALLCARE",
    verifiedFactKeys: [],
    metadata: {
      titleTemplate: (region) => `${region} 빗물누수 | 비 올 때 누수 의심 부위 확인 및 상담 - 틈새케어`,
      descriptionTemplate: (region, parent) => 
        `${parent ? `${parent} ` : ""}${region} 빗물누수 상담. 비가 올 때 나타나는 물자국이나 젖음 흔적과 외부 상태를 확인하고, 누수가 의심되는 부위와 추가 점검이 필요한 범위를 안내합니다.`
    },
    hero: {
      headline: (region) => `${region} 빗물누수 현장 점검 및 상담`,
      subCopy: "비가 올 때 나타나는 실내 물자국과 외부 주변 상태를 함께 확인하고, 누수가 의심되는 부위와 추가 점검 범위를 안내합니다.",
      badgeText: "빗물 누수 의심 부위 점검",
      badges: [
        "비 올 때 나타나는 흔적 확인",
        "실내 물자국 위치 점검",
        "외부 의심 부위 확인",
        "현장 맞춤 점검 안내"
      ]
    },
    empathy: {
      headline: "비가 올 때마다 벽면이나 창가 주변 물자국이 걱정되시나요?",
      description: "빗물 누수는 맑은 날에는 드러나지 않다가 비가 내릴 때 실내에 물자국이나 젖음 흔적이 나타날 수 있어 외부 상태를 함께 살펴야 합니다.",
      cards: [
        {
          title: "강우 시 나타나는 물자국",
          desc: "비가 올 때 특정 부위에 물방울이 맺히거나 물자국이 번지는 현상입니다."
        },
        {
          title: "반복되는 젖음 흔적",
          desc: "비가 내릴 때마다 동일한 위치에 습기가 차고 마르기를 반복하는 상태입니다."
        },
        {
          title: "외부 취약 틈새 의심",
          desc: "비바람이 칠 때 외부 마감 부위의 틈새를 통해 물이 스며드는 것으로 의심되는 상태입니다."
        }
      ]
    },
    diagnostics: {
      headline: "빗물 누수 의심 부위 점검",
      description: "비가 올 때 누수가 의심되는 주요 확인 지점입니다.",
      cards: [
        {
          title: "실내 물자국 발생 위치",
          description: "비가 올 때 물자국이나 젖음 흔적이 처음 관찰되는 위치를 확인합니다."
        },
        {
          title: "창호 주변 외부 마감 상태",
          description: "창틀 외곽 마감 부위의 들뜸이나 벌어짐 상태를 점검합니다."
        },
        {
          title: "외벽 및 경계 틈새 관찰",
          description: "외부 벽면이나 이음 부위에 물길이 형성될 만한 틈새가 있는지 살펴봅니다."
        },
        {
          title: "배수 주변 상태 점검",
          description: "외부 물받이나 배수 경로 주변에 이물질이나 노후가 있는지 확인합니다."
        }
      ],
      alertText: "누수 의심 부위를 꼼꼼히 살펴 필요한 점검 범위를 확인합니다."
    },
    process: {
      title: "빗물 누수 점검 및 확인 4단계",
      subDesc: "실내 흔적과 외부 상태를 종합적으로 살펴봅니다.",
      steps: [
        {
          step: "01",
          title: "상담 내용 및 증상 발생 시점 확인",
          description: "비가 올 때 나타난 물자국과 젖음 흔적의 위치, 발생 시점을 확인합니다."
        },
        {
          step: "02",
          title: "실내 물자국 및 외부 주변 상태 확인",
          description: "실내 흔적과 대응하는 외부 창호 및 벽면 주변의 상태를 살펴봅니다."
        },
        {
          step: "03",
          title: "의심 부위 및 추가 확인 범위 안내",
          description: "누수가 의심되는 부위와 현장에서 추가 확인이 필요한 범위를 안내합니다."
        },
        {
          step: "04",
          title: "현장 상태별 작업 방향 안내",
          description: "점검 결과를 종합하여 현장 상태에 적합한 보수 및 조치 방향을 설명합니다."
        }
      ],
      conclusionNote: "현장 상태를 면밀히 살펴 신중하고 안전한 작업 방향을 안내합니다."
    },
    faq: {
      title: "빗물 누수 관련 자주 묻는 질문",
      faqs: (region) => [
        {
          question: `${region} 빗물누수 상담은 어떻게 진행되나요?`,
          answer: "비가 올 때 나타나는 물자국이나 젖음 흔적의 위치와 시점을 확인하고, 외부 주변 상태를 함께 살펴 추가 점검이 필요한 범위를 안내합니다."
        },
        {
          question: "비가 올 때만 물자국이 생기면 빗물누수인가요?",
          answer: "증상이 비가 올 때 나타난다는 사실만으로 원인을 단정하기는 어렵습니다. 증상 위치와 현장 상태를 함께 확인해 추가 점검이 필요한 범위를 안내합니다."
        },
        {
          question: "비가 그친 뒤에도 점검할 수 있나요?",
          answer: "증상이 나타났던 위치와 시점 등 상담 내용을 확인하고, 현재 확인 가능한 상태를 살펴 필요한 점검 범위를 안내합니다."
        }
      ]
    }
  },

  "외벽누수": {
    serviceKey: "외벽누수",
    businessEntityId: "ALLCARE",
    verifiedFactKeys: [],
    metadata: {
      titleTemplate: (region) => `${region} 외벽누수 | 외벽 누수 의심 부위 확인 및 상담 - 틈새케어`,
      descriptionTemplate: (region, parent) => 
        `${parent ? `${parent} ` : ""}${region} 외벽누수 상담. 실내 물자국이나 외벽의 균열·이음 부위 상태를 함께 확인하고, 누수가 의심되는 부위와 추가 점검이 필요한 범위를 안내합니다.`
    },
    hero: {
      headline: (region) => `${region} 외벽누수 현장 점검 및 상담`,
      subCopy: "실내 물자국과 외벽 표면·이음 부위 상태를 함께 확인하고, 누수가 의심되는 부위와 추가 점검 범위를 안내합니다.",
      badgeText: "외벽 누수 의심 부위 점검",
      badges: [
        "실내 물자국 흔적 확인",
        "외벽 표면 균열 점검",
        "이음 부위 상태 확인",
        "현장 맞춤 점검 안내"
      ]
    },
    empathy: {
      headline: "비가 온 뒤 벽면 물자국이나 외벽 틈새가 걱정되시나요?",
      description: "외벽 누수는 비바람이 칠 때 외벽 표면이나 이음 부위를 통해 스며들 수 있어 실내 흔적과 외벽 상태를 함께 살펴야 합니다.",
      cards: [
        {
          title: "실내 벽면 물자국",
          desc: "비가 온 후 창가 주변이나 벽면에 습기가 번지고 물자국이 남는 현상입니다."
        },
        {
          title: "외벽 표면 균열 의심",
          desc: "외벽 표면의 미세 균열이나 틈새로 빗물 유입이 의심되는 상태입니다."
        },
        {
          title: "이음 부위 마감 상태",
          desc: "건물 외벽의 이음 부위나 마감재 경계의 노후로 점검이 필요한 상태입니다."
        }
      ]
    },
    diagnostics: {
      headline: "외벽 누수 의심 부위 점검",
      description: "외벽 누수가 의심되는 주요 확인 지점입니다.",
      cards: [
        {
          title: "외벽 표면 균열 부위",
          description: "외벽 표면에 물길이 형성될 만한 균열이나 틈새가 있는지 관찰합니다."
        },
        {
          title: "외벽 이음 및 접합 부위",
          description: "마감재 사이 이음매나 접합 부위 마감 상태를 점검합니다."
        },
        {
          title: "창호 주변 연계 부위",
          description: "창틀 외곽과 외벽이 맞닿는 경계 부위의 상태를 함께 살펴봅니다."
        },
        {
          title: "실내 벽면 젖음 분포",
          description: "외벽과 맞닿은 실내 벽면의 물자국 위치와 범위를 확인합니다."
        }
      ],
      alertText: "누수 의심 부위를 꼼꼼히 살펴 필요한 점검 범위를 확인합니다."
    },
    process: {
      title: "외벽 누수 점검 및 확인 4단계",
      subDesc: "실내 흔적과 외벽 상태를 종합적으로 살펴봅니다.",
      steps: [
        {
          step: "01",
          title: "상담 내용 및 실내 누수 흔적 확인",
          description: "실내 벽면에 나타난 물자국과 젖음 흔적의 위치를 확인합니다."
        },
        {
          step: "02",
          title: "외벽 및 주변 상태 확인",
          description: "실내 흔적과 대응하는 외벽 표면 균열 및 이음 부위 상태를 살펴봅니다."
        },
        {
          step: "03",
          title: "의심 부위 및 추가 확인 범위 안내",
          description: "누수가 의심되는 부위와 현장에서 추가 확인이 필요한 범위를 안내합니다."
        },
        {
          step: "04",
          title: "현장 상태별 작업 방향 안내",
          description: "점검 결과를 종합하여 현장 상태에 적합한 보수 및 조치 방향을 설명합니다."
        }
      ],
      conclusionNote: "현장 상태를 면밀히 살펴 신중하고 안전한 작업 방향을 안내합니다."
    },
    faq: {
      title: "외벽 누수 관련 자주 묻는 질문",
      faqs: (region) => [
        {
          question: `${region} 외벽누수 상담은 어떻게 진행되나요?`,
          answer: "실내에 나타난 물자국이나 젖음 흔적과 외벽 상태를 함께 확인하고, 누수가 의심되는 부위와 추가 점검이 필요한 범위를 안내합니다."
        },
        {
          question: "벽면에 물자국이 있으면 외벽누수인가요?",
          answer: "물자국만으로 누수 원인을 단정하기는 어렵습니다. 증상이 나타난 위치와 외벽 주변 상태를 함께 확인해 추가 점검이 필요한 범위를 안내합니다."
        },
        {
          question: "비가 올 때만 벽면이 젖는 경우도 점검할 수 있나요?",
          answer: "증상이 나타나는 시점과 위치 등 상담 내용을 확인하고, 외벽 및 주변 상태를 함께 살펴 필요한 점검 범위를 안내합니다."
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
      titleTemplate: (region) => `${region} 외벽도색 | 외벽 상태 확인 및 도색 상담 - 틈새케어`,
      descriptionTemplate: (region, parent) => 
        `${parent ? `${parent} ` : ""}${region} 외벽도색 상담. 외벽 표면의 노후·변색·손상 상태를 확인하고 필요한 도색 작업 범위를 안내합니다.`
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
          question: `${region} 외벽도색 전에 벽면 손상도 함께 확인하나요?`,
          answer: "외벽 표면의 들뜸이나 균열 등 눈에 보이는 상태를 확인한 뒤, 도색 작업이 필요한 범위와 추가 확인이 필요한 부위를 안내합니다."
        },
        {
          question: "외벽도색 작업 전에 주변 상태도 확인하나요?",
          answer: "창문이나 주변 시설물 등 작업 구역의 상태를 함께 확인하고, 현장 상황에 따라 작업 전 필요한 준비 사항을 안내합니다."
        },
        {
          question: "색상 선택은 어떻게 진행되나요?",
          answer: "외벽 상태와 고객 요청 사항을 확인한 뒤 가능한 색상 범위를 상담하여 결정합니다."
        }
      ]
    }
  },

  "지붕방수": {
    serviceKey: "지붕방수",
    businessEntityId: "RAINFIX",
    verifiedFactKeys: [],
    metadata: {
      titleTemplate: (region) => `${region} 지붕방수 | 지붕 상태 확인 및 방수 상담 - 틈새케어`,
      descriptionTemplate: (region, parent) => 
        `${parent ? `${parent} ` : ""}${region} 지붕방수 상담. 지붕 표면과 이음 부위의 노후·손상 상태를 확인하고 필요한 방수 작업 범위를 안내합니다.`
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
          question: `${region} 지붕방수 상담은 어떻게 진행되나요?`,
          answer: "지붕의 형태와 노후 상태를 먼저 확인한 뒤, 현장에 적합한 보수 범위와 필요한 작업 방향을 안내합니다."
        },
        {
          question: "지붕 전체를 교체하지 않고 부분 방수도 가능한가요?",
          answer: "지붕의 손상 부위와 상태를 점검하여 전체 교체가 아닌 필요한 구간 위주로 보수 및 방수 작업이 가능한지 확인해 드립니다."
        },
        {
          question: "빗물이 스며드는 위치는 어떻게 확인하나요?",
          answer: "실내 누수 흔적과 지붕 표면 상태를 함께 확인해 누수가 의심되는 부위와 추가 확인이 필요한 범위를 안내합니다."
        }
      ]
    }
  },

  "지붕보수": {
    serviceKey: "지붕보수",
    businessEntityId: "RAINFIX",
    verifiedFactKeys: [],
    metadata: {
      titleTemplate: (region) => `${region} 지붕보수 | 지붕 손상 상태 확인 및 보수 상담 - 틈새케어`,
      descriptionTemplate: (region, parent) => 
        `${parent ? `${parent} ` : ""}${region} 지붕보수 상담. 지붕 부위의 노후·손상 상태를 확인하고 필요한 보수 작업 범위를 안내합니다.`
    },
    hero: {
      headline: (region) => `${region} 지붕보수 현장 점검 및 상담`,
      subCopy: "지붕 마감재의 부분 손상과 들뜸 부위를 확인하고, 현장 상태에 맞는 지붕 보수 범위를 점검합니다.",
      badgeText: "지붕 손상 부위 보수 점검",
      badges: [
        "지붕 손상 상태 확인",
        "부분 보수 범위 점검",
        "현장 맞춤 보수 안내",
        "마감 상태 점검"
      ]
    },
    empathy: {
      headline: "지붕 부위의 노후나 손상으로 보수가 고민되시나요?",
      description: "지붕 마감재가 들뜨거나 손상되면 틈새로 비바람이 들이치거나 추가 손상으로 이어질 수 있습니다.",
      cards: [
        {
          title: "마감재 부분 들뜸",
          desc: "세월 경과로 지붕 마감재 일부가 들뜨거나 헐거워진 상태입니다."
        },
        {
          title: "지붕 마감 손상 및 균열",
          desc: "노후나 외부 요인으로 지붕 표면에 균열이나 손상이 생긴 흔적입니다."
        },
        {
          title: "마감 부속 이음새 유격",
          desc: "지붕 끝단이나 이음 부위 마감이 벌어져 점검이 필요한 상태입니다."
        }
      ]
    },
    diagnostics: {
      headline: "지붕 손상 부위 점검",
      description: "보수가 필요한 지붕 상태를 확인해보세요.",
      cards: [
        {
          title: "지붕 마감재 흔들림",
          description: "마감재가 헐거워져 유격이 있는지 확인합니다."
        },
        {
          title: "부분 손상 및 틈새",
          description: "마감재 파손이나 틈새가 생겼는지 관찰합니다."
        },
        {
          title: "이음 부위 마감 상태",
          description: "접합 부위 주변 마감재가 노후되었는지 살펴봅니다."
        },
        {
          title: "배수 부속 연결 상태",
          description: "지붕 주변 부속의 체결 상태가 헐겁지 않은지 점검합니다."
        }
      ],
      alertText: "현장 점검을 통해 보수가 필요한 범위를 확인합니다."
    },
    process: {
      title: "지붕 보수 4단계 점검 및 보수 절차",
      subDesc: "손상된 지붕 부위를 확인하고 현장 상태에 맞춰 보수를 진행합니다.",
      steps: [
        {
          step: "01",
          title: "현장 상태 및 지붕 손상 위치 파악",
          description: "들뜨거나 손상된 지붕 부위의 위치와 상태를 현장에서 확인합니다."
        },
        {
          step: "02",
          title: "노후·손상 부위 확인 및 범위 설정",
          description: "보수가 필요한 범위를 살피고 현장 작업 여건을 종합적으로 점검합니다."
        },
        {
          step: "03",
          title: "현장 상태에 맞는 보수 작업 진행",
          description: "손상된 부위를 정돈하고 현장 상태에 적합한 방식으로 보수 작업을 진행합니다."
        },
        {
          step: "04",
          title: "작업 부위 마감 상태 확인 및 안내",
          description: "보수 부위의 마감 상태를 꼼꼼히 점검하고 향후 관리 요령을 설명합니다."
        }
      ],
      conclusionNote: "현장 상태를 세밀히 살펴 필요한 범위에 적합한 보수 작업을 지향합니다."
    },
    faq: {
      title: "지붕 보수 관련 자주 묻는 질문",
      faqs: (region) => [
        {
          question: `${region} 지붕보수 상담은 어떻게 진행되나요?`,
          answer: "지붕의 노후 및 손상 상태를 먼저 확인한 뒤, 현장에 적합한 보수 범위와 필요한 작업 방향을 안내합니다."
        },
        {
          question: "지붕 전체를 교체하지 않고 부분 보수도 가능한가요?",
          answer: "지붕의 손상 부위와 상태를 점검하여 전체 교체가 아닌 필요한 구간 위주로 부분 보수가 가능한지 확인해 드립니다."
        },
        {
          question: "바람이 불 때 지붕 부위에서 소음이 느껴지면 어떤 부분을 확인하나요?",
          answer: "지붕 표면과 이음 부위 등 눈에 보이는 상태를 확인하고, 추가 점검이 필요한 범위를 안내합니다."
        }
      ]
    }
  },

  "지붕누수": {
    serviceKey: "지붕누수",
    businessEntityId: "RAINFIX",
    verifiedFactKeys: [],
    metadata: {
      titleTemplate: (region) => `${region} 지붕누수 | 누수 의심 부위 확인 및 상담 - 틈새케어`,
      descriptionTemplate: (region, parent) => 
        `${parent ? `${parent} ` : ""}${region} 지붕누수 상담. 실내 물자국이나 젖음 흔적과 지붕 상태를 확인하고, 누수가 의심되는 부위와 추가 점검이 필요한 범위를 안내합니다.`
    },
    hero: {
      headline: (region) => `${region} 지붕누수 현장 점검 및 상담`,
      subCopy: "실내 물자국과 지붕 상부 상태를 함께 살펴보고, 누수가 의심되는 부위와 추가 점검 범위를 안내합니다.",
      badgeText: "지붕 누수 의심 부위 점검",
      badges: [
        "실내 물자국 상태 확인",
        "지붕 표면 상태 점검",
        "의심 부위 범위 확인",
        "현장 맞춤 점검 안내"
      ]
    },
    empathy: {
      headline: "비가 온 뒤 천장이나 벽면에 물자국이 번져 고민되시나요?",
      description: "실내에 나타난 물자국이나 젖음 흔적은 지붕 표면과 주변 상태를 함께 살펴 원인 의심 구간을 좁혀야 합니다.",
      cards: [
        {
          title: "천장 도배지 물자국",
          desc: "비가 온 후 천장에 얼룩이 생기거나 습기가 번지는 현상입니다."
        },
        {
          title: "지붕 상부 틈새 의심",
          desc: "지붕 마감 부위의 틈새나 노후로 인해 비바람 유입이 의심되는 상태입니다."
        },
        {
          title: "반복되는 젖음 흔적",
          desc: "강우 시마다 동일한 위치에 물자국이 반복되어 점검이 필요한 상태입니다."
        }
      ]
    },
    diagnostics: {
      headline: "지붕 누수 유입 의심 부위",
      description: "지붕 누수가 의심되는 주요 확인 지점입니다.",
      cards: [
        {
          title: "지붕 능선 및 접합 부위",
          description: "지붕 상부 마감 부위의 틈새나 벌어짐을 관찰합니다."
        },
        {
          title: "관통 시설물 주변",
          description: "지붕을 관통하는 돌출 시설물 주변 마감 상태를 점검합니다."
        },
        {
          title: "배수 경로 및 물골",
          description: "경사면이 만나는 배수 경로에 이물질이 끼거나 노후되었는지 봅니다."
        },
        {
          title: "마감재 접합부 상태",
          description: "지붕재 접합부나 고정 부위 주변의 틈새를 확인합니다."
        }
      ],
      alertText: "누수 의심 부위를 꼼꼼히 살펴 필요한 점검 범위를 확인합니다."
    },
    process: {
      title: "지붕 누수 점검 및 확인 4단계",
      subDesc: "실내 흔적과 지붕 상태를 종합적으로 살펴봅니다.",
      steps: [
        {
          step: "01",
          title: "상담 내용 및 누수 흔적 확인",
          description: "실내 천장이나 벽면에 나타난 물자국과 젖음 흔적의 위치를 확인합니다."
        },
        {
          step: "02",
          title: "지붕 및 주변 상태 확인",
          description: "실내 흔적과 대응하는 지붕 상부 및 주변 마감 상태를 살펴봅니다."
        },
        {
          step: "03",
          title: "의심 부위 및 추가 확인 범위 안내",
          description: "누수가 의심되는 부위와 현장에서 추가 확인이 필요한 범위를 안내합니다."
        },
        {
          step: "04",
          title: "현장 상태별 작업 방향 안내",
          description: "점검 결과를 종합하여 현장 상태에 적합한 보수 및 조치 방향을 설명합니다."
        }
      ],
      conclusionNote: "현장 상태를 면밀히 살펴 신중하고 안전한 작업 방향을 안내합니다."
    },
    faq: {
      title: "지붕 누수 관련 자주 묻는 질문",
      faqs: (region) => [
        {
          question: `${region} 지붕누수 상담은 어떻게 진행되나요?`,
          answer: "실내에 나타난 물자국이나 젖음 흔적과 지붕 상태를 함께 확인하고, 누수가 의심되는 부위와 추가 점검이 필요한 범위를 안내합니다."
        },
        {
          question: "천장에 물자국이 있으면 지붕누수인가요?",
          answer: "물자국 하나만으로 누수 원인을 단정하기는 어렵습니다. 증상이 나타난 위치와 현장 상태를 함께 확인해 추가 점검이 필요한 범위를 안내합니다."
        },
        {
          question: "비가 올 때만 증상이 나타나도 점검할 수 있나요?",
          answer: "증상이 나타난 시점과 위치 등 상담 내용을 확인하고, 현장 상태를 함께 살펴 필요한 점검 범위를 안내합니다."
        }
      ]
    }
  }
};
