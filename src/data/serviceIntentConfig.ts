/**
 * Service Intent Configuration Layer
 * Phase 3A-1 Implementation
 * 
 * 13개 독립 작업명 서비스의 Search Intent, Cluster, Business Entity 매핑 정의.
 * 운영자 확인 3대 사실(실리콘 100% 제거, 친환경 침투성 발수제, 옥상 우레탄 3mm 국가표준)만을 보존하고
 * 미검증 기술·장비·공법·법적·보험·보증 주장을 완전히 배제한 순수 Search Intent 데이터 모델.
 */

import { BusinessEntityId } from "./businessConfig";

export type ServiceCluster = "CLUSTER_A" | "CLUSTER_B" | "CLUSTER_C";

export type VerifiedFactKey =
  | "REMOVE_OLD_SILICONE_100"
  | "ECO_PENETRATING_WATER_REPELLENT"
  | "ROOFTOP_URETHANE_3MM_NATIONAL_STD";

export const VERIFIED_FACTS: Record<VerifiedFactKey, string> = {
  REMOVE_OLD_SILICONE_100: "기존 실리콘 100% 제거 후 재시공",
  ECO_PENETRATING_WATER_REPELLENT: "친환경 침투성 발수제",
  ROOFTOP_URETHANE_3MM_NATIONAL_STD: "옥상 우레탄 평균 3mm가 국가 표준"
} as const;

export interface ServiceIntentConfig {
  serviceKey: string;
  cluster: ServiceCluster;
  businessEntityId: BusinessEntityId;

  userTrigger: string;
  primaryIntent: string;
  primaryProblem: string;

  diagnosisTopics: string[];
  solutionTopics: string[];

  shouldOwn: string[];
  shouldNotOwn: string[];

  heroPurpose: string;
  metaTitlePurpose: string;
  metaDescriptionPurpose: string;

  faqTopics: string[];

  verifiedFactKeys?: VerifiedFactKey[];
}

export const SERVICE_INTENT_CONFIGS: Record<string, ServiceIntentConfig> = {
  // ==========================================
  // CLUSTER A: 코킹 / 실리콘 계열 (ALLCARE)
  // ==========================================
  "창틀코킹": {
    serviceKey: "창틀코킹",
    cluster: "CLUSTER_A",
    businessEntityId: "ALLCARE",
    userTrigger: "창틀 주변 실리콘이 들뜨거나 갈라져 비가 올 때 빗물 유입이 우려될 때",
    primaryIntent: "노후된 창틀 코킹재 상태 점검 및 재시공 필요 여부 확인",
    primaryProblem: "외벽과 창틀 접합부의 기존 실리콘 노후화 및 경화로 인한 틈새 발생",
    diagnosisTopics: [
      "창틀 외곽 실리콘 상태 확인",
      "접합부 들뜸 및 균열 상태 점검"
    ],
    solutionTopics: [
      "기존 실리콘 100% 제거 후 시공 부위를 정돈하고 창틀 코킹 재시공"
    ],
    shouldOwn: [
      "창틀 주변 노후 실리콘 제거 및 코킹 재시공 범위"
    ],
    shouldNotOwn: [
      "내부 벽지 도배 공사",
      "샷시 프레임 교체 공사"
    ],
    heroPurpose: "창틀 코킹 노후 점검 및 재시공 안내",
    metaTitlePurpose: "지역 창틀코킹 상태 점검 및 코킹 재시공 안내",
    metaDescriptionPurpose: "창틀 주변 실리콘 노후 상태 확인 및 정석 코킹 재시공 상담",
    faqTopics: [
      "기존 실리콘 덧칠 지양 및 제거 필요성",
      "코킹 시공 시기 및 상태 점검"
    ],
    verifiedFactKeys: ["REMOVE_OLD_SILICONE_100"]
  },

  "창틀실리콘": {
    serviceKey: "창틀실리콘",
    cluster: "CLUSTER_A",
    businessEntityId: "ALLCARE",
    userTrigger: "창틀 실리콘이 삭아서 가루가 날리거나 변색되어 상태 점검이 필요할 때",
    primaryIntent: "창틀 실리콘의 노후 상태 확인 및 교체 필요성 문의",
    primaryProblem: "창틀 주변 실리콘의 노후 및 부식으로 인한 접착 불량",
    diagnosisTopics: [
      "현재 시공된 창틀 실리콘의 노후 상태 및 들뜸 여부 확인"
    ],
    solutionTopics: [
      "기존 실리콘 100% 제거 후 시공 부위를 정돈하고 실리콘 재시공"
    ],
    shouldOwn: [
      "창틀 실리콘 노후 상태 확인 및 재시공 필요성 안내"
    ],
    shouldNotOwn: [
      "특정 화학 자재 성분 단정",
      "샷시 프레임 자체 교체"
    ],
    heroPurpose: "창틀 실리콘 노후 상태 확인 및 교체 안내",
    metaTitlePurpose: "지역 창틀 실리콘 노후 점검 및 교체 상담",
    metaDescriptionPurpose: "창틀 실리콘 부식 및 들뜸 상태 확인 후 정석 재시공 안내",
    faqTopics: [
      "창틀 실리콘 노후 상태 점검 기준",
      "기존 실리콘 제거 후 재시공 방법"
    ],
    verifiedFactKeys: ["REMOVE_OLD_SILICONE_100"]
  },

  "샷시실리콘": {
    serviceKey: "샷시실리콘",
    cluster: "CLUSTER_A",
    businessEntityId: "ALLCARE",
    userTrigger: "샷시 프레임 주변 틈새로 빗물이나 바람이 들어오는 느낌이 들 때",
    primaryIntent: "샷시 프레임 주변 실리콘 틈새 점검 및 보수 방법 문의",
    primaryProblem: "샷시 프레임 주변 실리콘 노후로 인한 틈새 발생",
    diagnosisTopics: [
      "샷시 프레임 외곽 틈새 및 기존 실리콘 노후 상태 확인"
    ],
    solutionTopics: [
      "샷시 주변 기존 실리콘 100% 제거 후 틈새를 정돈하고 실리콘 재시공"
    ],
    shouldOwn: [
      "샷시 프레임 주변 틈새 상태 점검 및 실리콘 보수"
    ],
    shouldNotOwn: [
      "샷시 프레임 자체 교체",
      "유리 교체 공사"
    ],
    heroPurpose: "샷시 주변 틈새 점검 및 실리콘 보수 안내",
    metaTitlePurpose: "지역 샷시 실리콘 틈새 점검 및 보수 안내",
    metaDescriptionPurpose: "샷시 프레임 외곽 틈새 상태 점검 및 실리콘 보수 상담",
    faqTopics: [
      "샷시 프레임 틈새 실리콘 보수 가능 여부",
      "기존 실리콘 제거 및 재시공"
    ],
    verifiedFactKeys: ["REMOVE_OLD_SILICONE_100"]
  },

  // ==========================================
  // CLUSTER B: 누수 진단 / 복구 계열 (ALLCARE)
  // ==========================================
  "창틀누수": {
    serviceKey: "창틀누수",
    cluster: "CLUSTER_B",
    businessEntityId: "ALLCARE",
    userTrigger: "비가 오면 창틀 주변 벽지가 젖거나 물 흔적이 보일 때",
    primaryIntent: "창틀 누수 발생 위치 확인 및 외부 보수 방법 문의",
    primaryProblem: "창틀 외곽 틈새 또는 외벽 균열로 인한 내부 빗물 스며듦",
    diagnosisTopics: [
      "창틀 주변 누수 흔적",
      "창틀 외곽 상태",
      "기존 실리콘 상태",
      "외벽 균열 여부 확인"
    ],
    solutionTopics: [
      "현장 상태를 확인하여 누수 원인 위치를 찾고 필요한 외부 보수 작업 진행"
    ],
    shouldOwn: [
      "창틀 주변 누수 흔적 확인 및 외부 보수 작업 안내"
    ],
    shouldNotOwn: [
      "내부 인테리어 도배 복구 공사",
      "윗집 책임 단정"
    ],
    heroPurpose: "창틀 누수 원인 부위 확인 및 외부 보수 안내",
    metaTitlePurpose: "지역 창틀 누수 발생 부위 점검 및 외부 보수 상담",
    metaDescriptionPurpose: "비 올 때 창틀 주변 물 흔적 확인 및 외부 틈새 보수 방법 안내",
    faqTopics: [
      "창틀 주변 누수 원인 점검 방법",
      "외부 틈새 보수 및 코킹 작업 안내"
    ],
    verifiedFactKeys: []
  },

  "빗물누수": {
    serviceKey: "빗물누수",
    cluster: "CLUSTER_B",
    businessEntityId: "ALLCARE",
    userTrigger: "비가 강하게 내리거나 바람이 동반될 때 빗물이 유입될 때",
    primaryIntent: "빗물이 유입되는 위치 점검 및 외부 차단 보수 필요 여부 확인",
    primaryProblem: "강한 비로 인해 창틀이나 외벽 주변 틈새로 빗물이 스며듦",
    diagnosisTopics: [
      "비가 올 때 물이 유입되는 창틀 및 외벽 주변 틈, 균열 상태 확인"
    ],
    solutionTopics: [
      "빗물 유입 위치를 확인하고 필요한 외부 틈새 보수 및 코킹 작업 진행"
    ],
    shouldOwn: [
      "비바람 시 발생하는 빗물 유입 부위 확인 및 외부 틈새 보수"
    ],
    shouldNotOwn: [
      "건물 전체 풍압 구조 진단"
    ],
    heroPurpose: "빗물 유입 부위 확인 및 외부 틈새 보수 안내",
    metaTitlePurpose: "지역 빗물 누수 유입 부위 점검 및 틈새 차단 상담",
    metaDescriptionPurpose: "강한 비바람 시 발생하는 빗물 유입 위치 점검 및 외부 보수 안내",
    faqTopics: [
      "비가 올 때 발생하는 빗물 유입 원인",
      "외부 틈새 보수 작업 절차"
    ],
    verifiedFactKeys: []
  },

  "외벽누수": {
    serviceKey: "외벽누수",
    cluster: "CLUSTER_B",
    businessEntityId: "ALLCARE",
    userTrigger: "외벽 콘크리트 균열 부위나 층간 경계에서 물 흔적이 발생할 때",
    primaryIntent: "외벽 균열로 인한 누수 부위 확인 및 외벽 보수 방법 문의",
    primaryProblem: "외벽 콘크리트 균열 및 외벽 접합부 손상으로 인한 빗물 유입",
    diagnosisTopics: [
      "외벽 균열 상태",
      "외벽 접합부 상태",
      "손상 부위 확인"
    ],
    solutionTopics: [
      "외벽 균열 및 손상 부위를 확인한 뒤 현장 조건에 맞는 외벽 보수 작업 진행"
    ],
    shouldOwn: [
      "외벽 균열 및 외벽 손상 부위 보수"
    ],
    shouldNotOwn: [
      "건물 전체 외벽 발수제 전면 도포"
    ],
    heroPurpose: "외벽 균열 점검 및 외벽 누수 보수 안내",
    metaTitlePurpose: "지역 외벽 균열 누수 부위 점검 및 외벽 보수 상담",
    metaDescriptionPurpose: "외벽 균열 및 접합부 손상 상태 확인 후 외벽 보수 시공 안내",
    faqTopics: [
      "외벽 균열에 따른 누수 점검",
      "외벽 보수 작업 범위"
    ],
    verifiedFactKeys: []
  },

  // ==========================================
  // CLUSTER C: 대형 방수 / 지붕 / 도색 계열 (RAINFIX)
  // ==========================================
  "외벽방수": {
    serviceKey: "외벽방수",
    cluster: "CLUSTER_C",
    businessEntityId: "RAINFIX",
    userTrigger: "건물 외벽 마감 상태가 노후되어 빗물이 스며들거나 외벽 방수가 필요할 때",
    primaryIntent: "외벽 방수 필요 여부 및 친환경 침투성 발수제 작업 방법 문의",
    primaryProblem: "외벽 마감재 및 메지 균열로 인해 외벽 면 전체적으로 빗물이 침투함",
    diagnosisTopics: [
      "외벽 마감재 상태",
      "균열 여부",
      "외벽 방수 필요 상태 확인"
    ],
    solutionTopics: [
      "외벽 상태를 확인하고 필요한 바탕정리를 거쳐 친환경 침투성 발수제 도포 시공"
    ],
    shouldOwn: [
      "외벽 마감재 상태 점검 및 친환경 침투성 발수제 도포 작업"
    ],
    shouldNotOwn: [
      "옥상 우레탄 방수 시공"
    ],
    heroPurpose: "외벽 상태 점검 및 친환경 침투성 발수제 외벽 방수 안내",
    metaTitlePurpose: "지역 외벽방수 상태 점검 및 친환경 침투성 발수제 시공 상담",
    metaDescriptionPurpose: "외벽 마감 상태 확인 후 친환경 침투성 발수제 작업 안내",
    faqTopics: [
      "외벽방수 시 자재 선택 기준",
      "친환경 침투성 발수제 작업 방법"
    ],
    verifiedFactKeys: ["ECO_PENETRATING_WATER_REPELLENT"]
  },

  "옥상방수": {
    serviceKey: "옥상방수",
    cluster: "CLUSTER_C",
    businessEntityId: "RAINFIX",
    userTrigger: "옥상 바닥 방수층이 들뜨거나 갈라져 누수가 우려될 때",
    primaryIntent: "옥상 우레탄 방수 시공 기준 및 방수 작업 절차 문의",
    primaryProblem: "옥상 기존 방수층 노후 및 바닥 균열로 인한 누수",
    diagnosisTopics: [
      "기존 옥상 방수층 상태",
      "들뜸",
      "바닥 균열",
      "배수 상태 확인"
    ],
    solutionTopics: [
      "현장 상태에 필요한 바탕정리 후 옥상 우레탄 방수 시공 (평균 3mm 국가 표준 기준)"
    ],
    shouldOwn: [
      "옥상 우레탄 표준 평균 3mm 방수 시공 공정"
    ],
    shouldNotOwn: [
      "외벽 발수제 도포"
    ],
    heroPurpose: "옥상 방수층 점검 및 우레탄 방수 안내",
    metaTitlePurpose: "지역 옥상방수 상태 점검 및 우레탄 방수 시공 상담",
    metaDescriptionPurpose: "옥상 방수층 들뜸 및 바닥 균열 점검 후 표준 우레탄 방수 시공 안내",
    faqTopics: [
      "옥상 우레탄 방수 표준 두께 기준",
      "옥상 바탕정리 및 시공 절차"
    ],
    verifiedFactKeys: ["ROOFTOP_URETHANE_3MM_NATIONAL_STD"]
  },

  "건물방수": {
    serviceKey: "건물방수",
    cluster: "CLUSTER_C",
    businessEntityId: "RAINFIX",
    userTrigger: "옥상, 외벽, 창틀 등 건물 여러 부위에서 복합적인 누수 문제가 발생할 때",
    primaryIntent: "건물 여러 부위의 방수 상태를 점검하고 전체적인 공사 범위 결정",
    primaryProblem: "건물 노후화로 인해 옥상, 외벽 등 여러 부위 방수층이 복합 손상됨",
    diagnosisTopics: [
      "옥상, 외벽, 창틀 등 건물 여러 부위의 복합 누수/방수 상태 점검"
    ],
    solutionTopics: [
      "건물 각 부위 상태를 점검하여 필요한 방수 작업 범위를 결정하고 시공 진행"
    ],
    shouldOwn: [
      "건물 여러 부위 복합 방수 점검 및 작업 범위 설정"
    ],
    shouldNotOwn: [
      "단일 부위 단순 코킹 작업"
    ],
    heroPurpose: "건물 복합 누수 점검 및 방수 작업 범위 안내",
    metaTitlePurpose: "지역 건물방수 복합 누수 점검 및 종합 방수 상담",
    metaDescriptionPurpose: "옥상, 외벽 등 건물 복합 누수 상태 점검 및 맞춤 방수 범위 안내",
    faqTopics: [
      "건물 여러 부위 동시 방수 필요성",
      "복합 누수 현장 점검 방법"
    ],
    verifiedFactKeys: []
  },

  "외벽도색": {
    serviceKey: "외벽도색",
    cluster: "CLUSTER_C",
    businessEntityId: "RAINFIX",
    userTrigger: "외벽 페인트가 벗겨지거나 변색되어 외벽 도색이 필요할 때",
    primaryIntent: "외벽 손상 상태 점검 및 외벽 도색 작업 절차 문의",
    primaryProblem: "외벽 페인트 노후, 박리, 변색 및 표면 보호막 손상",
    diagnosisTopics: [
      "외벽 페인트 노후 상태",
      "변색",
      "표면 손상 상태 확인"
    ],
    solutionTopics: [
      "외벽 손상 부위를 정돈하고 현장 상태에 맞춰 외벽 도색 작업 진행"
    ],
    shouldOwn: [
      "외벽 표면 상태 확인 및 외벽 도색 작업"
    ],
    shouldNotOwn: [
      "투명 발수제 도포"
    ],
    heroPurpose: "외벽 표면 상태 확인 및 외벽 도색 작업 안내",
    metaTitlePurpose: "지역 외벽도색 노후 점검 및 페인트 도색 상담",
    metaDescriptionPurpose: "외벽 페인트 박리 및 변색 상태 확인 후 정석 외벽 도색 안내",
    faqTopics: [
      "외벽 도색 작업 시 표면 정돈 과정",
      "외벽 도색 필요 상태 점검"
    ],
    verifiedFactKeys: []
  },

  "지붕방수": {
    serviceKey: "지붕방수",
    cluster: "CLUSTER_C",
    businessEntityId: "RAINFIX",
    userTrigger: "지붕 틈새로 빗물이 스며들어 지붕 방수가 필요할 때",
    primaryIntent: "지붕 상태 점검 및 지붕 방수 작업 필요 여부 확인",
    primaryProblem: "지붕 자재 노후 및 틈새 발생으로 인한 빗물 유입",
    diagnosisTopics: [
      "지붕 노후 상태",
      "틈새",
      "빗물 유입 가능 부위 점검"
    ],
    solutionTopics: [
      "지붕 상태를 확인하고 필요한 틈새 보수 및 지붕 방수 작업 진행"
    ],
    shouldOwn: [
      "지붕 틈새 점검 및 지붕 방수 작업"
    ],
    shouldNotOwn: [
      "옥상 바닥 우레탄 방수"
    ],
    heroPurpose: "지붕 틈새 점검 및 지붕 방수 작업 안내",
    metaTitlePurpose: "지역 지붕방수 틈새 점검 및 방수 작업 상담",
    metaDescriptionPurpose: "지붕 노후 틈새 및 빗물 유입 위치 확인 후 지붕 방수 작업 안내",
    faqTopics: [
      "지붕 틈새 누수 방수 방법",
      "지붕 방수 작업 진행 절차"
    ],
    verifiedFactKeys: []
  },

  "지붕보수": {
    serviceKey: "지붕보수",
    cluster: "CLUSTER_C",
    businessEntityId: "RAINFIX",
    userTrigger: "지붕 부위가 노후되거나 손상되어 보수가 필요할 때",
    primaryIntent: "손상된 지붕 부위의 부분 보수 가능 여부 및 보수 범위 확인",
    primaryProblem: "지붕 자재 파손, 이탈 및 표면 손상",
    diagnosisTopics: [
      "지붕 파손 부위",
      "자재 손상 상태",
      "보수 필요 범위 점검"
    ],
    solutionTopics: [
      "손상된 지붕 부위를 확인하고 현장 상태에 맞게 지붕 보수 작업 진행"
    ],
    shouldOwn: [
      "손상된 지붕 부위 점검 및 부분 지붕 보수"
    ],
    shouldNotOwn: [
      "지붕 전체 철거 및 신축 개보수"
    ],
    heroPurpose: "지붕 손상 부위 확인 및 부분 지붕 보수 안내",
    metaTitlePurpose: "지역 지붕보수 손상 부위 점검 및 부분 보수 상담",
    metaDescriptionPurpose: "파손된 지붕 자재 및 틈새 점검 후 현장 맞춤 지붕 보수 안내",
    faqTopics: [
      "지붕 부분 보수 가능 여부",
      "지붕 파손 부위 점검 방법"
    ],
    verifiedFactKeys: []
  },

  "지붕누수": {
    serviceKey: "지붕누수",
    cluster: "CLUSTER_C",
    businessEntityId: "RAINFIX",
    userTrigger: "천장에 물 자국이 생기거나 지붕에서 물이 새는 흔적이 보일 때",
    primaryIntent: "지붕 누수 발생 위치 확인 및 필요한 지붕 보수 문의",
    primaryProblem: "지붕 접합부나 틈새를 통한 빗물 유입",
    diagnosisTopics: [
      "천장 물 흔적",
      "지붕 틈새",
      "손상 부위 및 누수 위치 확인"
    ],
    solutionTopics: [
      "천장 물 흔적과 연계하여 지붕 틈새를 확인하고 필요한 지붕 보수 진행"
    ],
    shouldOwn: [
      "지붕 누수 위치 확인 및 지붕 보수 작업"
    ],
    shouldNotOwn: [
      "옥상 바닥 물매 공사"
    ],
    heroPurpose: "지붕 누수 위치 확인 및 지붕 보수 안내",
    metaTitlePurpose: "지역 지붕누수 발생 부위 점검 및 지붕 보수 상담",
    metaDescriptionPurpose: "천장 물 흔적과 지붕 틈새 확인 후 필요한 지붕 누수 보수 안내",
    faqTopics: [
      "지붕 누수 발생 위치 점검",
      "지붕 틈새 누수 보수 방법"
    ],
    verifiedFactKeys: []
  }
};
