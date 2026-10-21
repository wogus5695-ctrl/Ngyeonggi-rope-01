/**
 * Guide Article Registry SSOT
 * Phase P3-A4 Implementation
 * 
 * 서울 강서구 파일럿 24개 가이드 아티클 공식 레지스트리.
 * Wave 1: 강서구 4개 + 화곡동 4개 = 8개 (PUBLISHED)
 * Wave 2: 등촌동 4개 + 염창동 4개 = 8개 (APPROVED)
 * Wave 3: 가양동 4개 + 마곡동 4개 = 8개 (APPROVED)
 */

export type TargetServiceKey = '창틀누수' | '빗물누수' | '건물방수' | '외벽도색';
export type TargetServiceSlug = 'window-leak' | 'rain-leak' | 'building-waterproof' | 'wall-painting';
export type RegionScope = 'seoul';
export type RegionLevel = 'district' | 'dong';
export type PublicationWave = 'WAVE_1' | 'WAVE_2' | 'WAVE_3';
export type ArticleContentStatus = 'DRAFT' | 'APPROVED' | 'PUBLISHED';

export interface GuideArticleSSOT {
  id: string;

  region: string;
  regionScope: 'seoul';
  regionLevel: 'district' | 'dong';

  parentDistrict: string;

  districtSlug: string;
  dongSlug?: string;

  service: TargetServiceKey;
  serviceSlug: TargetServiceSlug;

  keyword: string;

  path: string;

  title: string;

  bodyLines: [
    string,
    string,
    string,
    string
  ];

  primaryDynamicUrl: string;

  anchorText: string;

  wave:
    | 'WAVE_1'
    | 'WAVE_2'
    | 'WAVE_3';

  contentStatus:
    | 'DRAFT'
    | 'APPROVED'
    | 'PUBLISHED';

  publishedAt: string | null;
}

export const ARTICLE_REGISTRY: GuideArticleSSOT[] = [
  {
    "id": "seoul-gangseo-district-window-leak",
    "region": "강서구",
    "regionScope": "seoul",
    "regionLevel": "district",
    "parentDistrict": "강서구",
    "districtSlug": "gangseo",
    "service": "창틀누수",
    "serviceSlug": "window-leak",
    "keyword": "강서구-창틀누수",
    "path": "/guide/seoul/gangseo/window-leak",
    "title": "강서구 창틀누수 흔적 발견 시 외부 점검 포인트",
    "bodyLines": [
      "비가 내린 이후 창틀 하부나 테두리 벽지에 젖은 얼룩이 나타난다면 외부 마감 상태를 살펴볼 필요가 있습니다.",
      "외벽과 샷시 테두리 사이를 메우고 있는 기존 실리콘의 들뜸이나 미세한 갈라짐이 주요 육안 확인 대상입니다.",
      "창틀 주변뿐만 아니라 상부 마감부의 접합면이나 주변 외벽 균열 상태도 함께 확인하는 것이 도움이 됩니다.",
      "강서구 창틀누수 점검 시에는 내부 덧칠에 앞서 외부 마감 상태를 먼저 살피고 필요한 보수 범위를 상의해야 합니다."
    ],
    "primaryDynamicUrl": "/?k=%EA%B0%95%EC%84%9C%EA%B5%AC-%EC%B0%BD%ED%8B%80%EB%88%84%EC%88%98",
    "anchorText": "강서구 창틀누수 현장 점검 안내 확인",
    "wave": "WAVE_1",
    "contentStatus": "PUBLISHED",
    "publishedAt": "2026-10-21T09:00:00.000Z"
  },
  {
    "id": "seoul-gangseo-district-rain-leak",
    "region": "강서구",
    "regionScope": "seoul",
    "regionLevel": "district",
    "parentDistrict": "강서구",
    "districtSlug": "gangseo",
    "service": "빗물누수",
    "serviceSlug": "rain-leak",
    "keyword": "강서구-빗물누수",
    "path": "/guide/seoul/gangseo/rain-leak",
    "title": "강서구 빗물누수 발생 시점과 외부 상태 점검",
    "bodyLines": [
      "평소에는 이상이 없다가 비가 내릴 때 특정 부위로 물 번짐이 나타난다면 외부 마감재 틈새를 살펴볼 수 있습니다.",
      "창호 연결부나 외벽 마감재 접합면 주변에 벌어짐이나 균열 흔적이 있는지 우선적으로 확인합니다.",
      "비바람의 방향과 날씨 조건에 따라 젖는 위치가 달라질 수 있으므로 인접한 외벽 마감부까지 함께 살펴봅니다.",
      "강서구 빗물누수 상황에서는 물자국이 관찰되는 시점을 참고하여 현장 상태에 맞게 외부 보수 범위를 정합니다."
    ],
    "primaryDynamicUrl": "/?k=%EA%B0%95%EC%84%9C%EA%B5%AC-%EB%B9%97%EB%AC%BC%EB%88%84%EC%88%98",
    "anchorText": "강서구 빗물누수 유입 부위 확인 안내",
    "wave": "WAVE_1",
    "contentStatus": "PUBLISHED",
    "publishedAt": "2026-10-21T09:00:00.000Z"
  },
  {
    "id": "seoul-gangseo-district-building-waterproof",
    "region": "강서구",
    "regionScope": "seoul",
    "regionLevel": "district",
    "parentDistrict": "강서구",
    "districtSlug": "gangseo",
    "service": "건물방수",
    "serviceSlug": "building-waterproof",
    "keyword": "강서구-건물방수",
    "path": "/guide/seoul/gangseo/building-waterproof",
    "title": "강서구 건물방수 복합 누수 흔적과 작업 범위 점검",
    "bodyLines": [
      "건물 외벽과 상부 난간, 창틀 주변 등 복수의 외부 구역에서 젖은 얼룩이나 물자국이 함께 관찰될 때가 있습니다.",
      "외벽 마감재 균열이나 상부 마감 조인트 등 여러 접합부의 표면 상태 변화를 차분히 살펴볼 필요가 있습니다.",
      "한 곳만의 단편적인 조치보다는 외부 여러 영역의 상태를 함께 살피고 작업 범위를 점검하는 편이 좋습니다.",
      "강서구 건물방수 작업 계획은 현장 외부 전반의 상태를 고르게 확인한 후 알맞은 보수 범위를 설정합니다."
    ],
    "primaryDynamicUrl": "/?k=%EA%B0%95%EC%84%9C%EA%B5%AC-%EA%B1%B4%EB%AC%BC%EB%B0%A9%EC%88%98",
    "anchorText": "강서구 건물방수 작업 범위 확인 안내",
    "wave": "WAVE_1",
    "contentStatus": "PUBLISHED",
    "publishedAt": "2026-10-21T09:00:00.000Z"
  },
  {
    "id": "seoul-gangseo-district-wall-painting",
    "region": "강서구",
    "regionScope": "seoul",
    "regionLevel": "district",
    "parentDistrict": "강서구",
    "districtSlug": "gangseo",
    "service": "외벽도색",
    "serviceSlug": "wall-painting",
    "keyword": "강서구-외벽도색",
    "path": "/guide/seoul/gangseo/wall-painting",
    "title": "강서구 외벽도색 전 확인해야 할 도장면 박리 상태",
    "bodyLines": [
      "건물 외벽 페인트가 탈색되거나 얇게 벗겨져 부스러지는 현상은 도장면 노후 과정에서 흔히 관찰됩니다.",
      "외벽 표면이 들뜨거나 균열을 따라 박리된 부위는 육안으로도 노후 상태를 확인할 수 있는 대표적 지표입니다.",
      "새로 칠을 계획할 때는 기존 도장면의 들뜸 상태를 확인하고 필요한 표면 정리 범위를 판단하는 작업이 중요합니다.",
      "강서구 외벽도색 작업은 현장 표면의 노후 정도와 도색이 필요한 구역을 사전에 확인하며 범위를 협의합니다."
    ],
    "primaryDynamicUrl": "/?k=%EA%B0%95%EC%84%9C%EA%B5%AC-%EC%99%B8%EB%B2%BD%EB%8F%84%EC%83%89",
    "anchorText": "강서구 외벽도색 표면 점검 안내 확인",
    "wave": "WAVE_1",
    "contentStatus": "PUBLISHED",
    "publishedAt": "2026-10-21T09:00:00.000Z"
  },
  {
    "id": "seoul-gangseo-hwagok-window-leak",
    "region": "화곡동",
    "regionScope": "seoul",
    "regionLevel": "dong",
    "parentDistrict": "강서구",
    "districtSlug": "gangseo",
    "dongSlug": "hwagok",
    "service": "창틀누수",
    "serviceSlug": "window-leak",
    "keyword": "화곡동-창틀누수",
    "path": "/guide/seoul/gangseo/hwagok/window-leak",
    "title": "화곡동 창틀누수 의심 부위 확인 및 외부 점검 안내",
    "bodyLines": [
      "창문 코너 테두리나 아래쪽 벽면으로 물기가 배어 나온다면 창호 바깥쪽 마감 상태를 살펴볼 필요가 있습니다.",
      "외부에 노출된 창틀 주변 실리콘의 갈라짐이나 들뜸, 틈새 벌어짐 상태를 눈으로 확인할 수 있습니다.",
      "물이 비치는 자리뿐만 아니라 창틀 상단과 연결된 주변 외벽 마감면의 미세 균열도 함께 살펴봅니다.",
      "화곡동 창틀누수 점검은 실내 임시 대처보다 외부 마감 상태를 차분히 확인하고 알맞은 작업 범위를 판단합니다."
    ],
    "primaryDynamicUrl": "/?k=%ED%99%94%EA%B3%A1%EB%8F%99-%EC%B0%BD%ED%8B%80%EB%88%84%EC%88%98",
    "anchorText": "화곡동 창틀누수 외부 점검 안내 확인",
    "wave": "WAVE_1",
    "contentStatus": "PUBLISHED",
    "publishedAt": "2026-10-21T09:00:00.000Z"
  },
  {
    "id": "seoul-gangseo-hwagok-rain-leak",
    "region": "화곡동",
    "regionScope": "seoul",
    "regionLevel": "dong",
    "parentDistrict": "강서구",
    "districtSlug": "gangseo",
    "dongSlug": "hwagok",
    "service": "빗물누수",
    "serviceSlug": "rain-leak",
    "keyword": "화곡동-빗물누수",
    "path": "/guide/seoul/gangseo/hwagok/rain-leak",
    "title": "화곡동 빗물누수 강우 시 스며드는 틈새 확인 사항",
    "bodyLines": [
      "비가 많이 내릴 때 창틀 테두리나 벽체 연결 부위 주변으로 습기가 번지는 모습이 관찰될 수 있습니다.",
      "비바람에 노출되는 외부 코너 접합부나 마감재 사이의 틈새 벌어짐 여부를 우선적으로 확인합니다.",
      "물기가 보이는 위치에만 국한하지 않고 빗물이 닿는 외벽 마감선을 따라 주변 상태도 함께 살펴봅니다.",
      "화곡동 빗물누수 점검 시에는 강우 환경을 고려하여 의심 부위를 확인하고 외부 틈새 보수 계획을 세웁니다."
    ],
    "primaryDynamicUrl": "/?k=%ED%99%94%EA%B3%A1%EB%8F%99-%EB%B9%97%EB%AC%BC%EB%88%84%EC%88%98",
    "anchorText": "화곡동 빗물누수 틈새 점검 안내 확인",
    "wave": "WAVE_1",
    "contentStatus": "PUBLISHED",
    "publishedAt": "2026-10-21T09:00:00.000Z"
  },
  {
    "id": "seoul-gangseo-hwagok-building-waterproof",
    "region": "화곡동",
    "regionScope": "seoul",
    "regionLevel": "dong",
    "parentDistrict": "강서구",
    "districtSlug": "gangseo",
    "dongSlug": "hwagok",
    "service": "건물방수",
    "serviceSlug": "building-waterproof",
    "keyword": "화곡동-건물방수",
    "path": "/guide/seoul/gangseo/hwagok/building-waterproof",
    "title": "화곡동 건물방수 외부 여러 부위 상태 점검 가이드",
    "bodyLines": [
      "외벽 연결부와 상부 마감 테두리 등 건물의 여러 외부 지점에서 물 번짐 흔적이 동시에 보일 수 있습니다.",
      "건물 외부 표면의 균열이나 접합 부위의 마감 상태 변화가 넓은 구역에 걸쳐 나타나는지 살펴봅니다.",
      "국소적인 부위만 다루기보다는 젖은 흔적이 확인되는 건물 외벽과 접합부를 고르게 점검하는 것이 유익합니다.",
      "화곡동 건물방수 계획 수립 시에는 외부 상태를 차례로 확인하고 필요한 보수 작업 범위를 검토해야 합니다."
    ],
    "primaryDynamicUrl": "/?k=%ED%99%94%EA%B3%A1%EB%8F%99-%EA%B1%B4%EB%AC%BC%EB%B0%A9%EC%88%98",
    "anchorText": "화곡동 건물방수 현장 점검 안내 확인",
    "wave": "WAVE_1",
    "contentStatus": "PUBLISHED",
    "publishedAt": "2026-10-21T09:00:00.000Z"
  },
  {
    "id": "seoul-gangseo-hwagok-wall-painting",
    "region": "화곡동",
    "regionScope": "seoul",
    "regionLevel": "dong",
    "parentDistrict": "강서구",
    "districtSlug": "gangseo",
    "dongSlug": "hwagok",
    "service": "외벽도색",
    "serviceSlug": "wall-painting",
    "keyword": "화곡동-외벽도색",
    "path": "/guide/seoul/gangseo/hwagok/wall-painting",
    "title": "화곡동 외벽도색 페인트 들뜸 현상과 표면 정돈 범위",
    "bodyLines": [
      "시간이 지나면서 건물 외부 페인트가 변색되거나 부분적으로 부풀어 오르는 현상이 확인되곤 합니다.",
      "페인트 표면의 들뜸이나 미세한 갈라짐은 도장면의 상태 변화를 보여주는 관찰 가능한 지표입니다.",
      "도색을 진행하기에 앞서 부스러지거나 들뜬 도장면의 상태를 확인하고 표면 정리 범위를 판단해야 합니다.",
      "화곡동 외벽도색 작업은 현장 표면의 노후 상태와 균열 범위를 살펴본 후 단계적으로 준비하는 것이 좋습니다."
    ],
    "primaryDynamicUrl": "/?k=%ED%99%94%EA%B3%A1%EB%8F%99-%EC%99%B8%EB%B2%BD%EB%8F%84%EC%83%89",
    "anchorText": "화곡동 외벽도색 표면 정돈 안내 확인",
    "wave": "WAVE_1",
    "contentStatus": "PUBLISHED",
    "publishedAt": "2026-10-21T09:00:00.000Z"
  },
  {
    "id": "seoul-gangseo-deungchon-window-leak",
    "region": "등촌동",
    "regionScope": "seoul",
    "regionLevel": "dong",
    "parentDistrict": "강서구",
    "districtSlug": "gangseo",
    "dongSlug": "deungchon",
    "service": "창틀누수",
    "serviceSlug": "window-leak",
    "keyword": "등촌동-창틀누수",
    "path": "/guide/seoul/gangseo/deungchon/window-leak",
    "title": "등촌동 창틀누수 마감재 틈새 점검과 외부 확인 사항",
    "bodyLines": [
      "비가 온 직후 창호 주변 몰딩이나 벽지 테두리가 어둡게 변색된다면 외부 틈새를 살펴볼 수 있습니다.",
      "창틀 테두리를 감싼 실리콘 마감 부위에 들뜸이나 벌어진 틈이 있는지 육안으로 점검합니다.",
      "창문 바깥 부위뿐 아니라 상부 마감부와 주변 외벽 마감면의 미세 균열 상태도 함께 확인해봅니다.",
      "등촌동 창틀누수 상태 확인은 내부 덧칠보다 외부 마감 상태를 차분히 살펴본 뒤 보수 방향을 정합니다."
    ],
    "primaryDynamicUrl": "/?k=%EB%93%B1%EC%B4%8C%EB%8F%99-%EC%B0%BD%ED%8B%80%EB%88%84%EC%88%98",
    "anchorText": "등촌동 창틀누수 마감 점검 안내 확인",
    "wave": "WAVE_2",
    "contentStatus": "APPROVED",
    "publishedAt": null
  },
  {
    "id": "seoul-gangseo-deungchon-rain-leak",
    "region": "등촌동",
    "regionScope": "seoul",
    "regionLevel": "dong",
    "parentDistrict": "강서구",
    "districtSlug": "gangseo",
    "dongSlug": "deungchon",
    "service": "빗물누수",
    "serviceSlug": "rain-leak",
    "keyword": "등촌동-빗물누수",
    "path": "/guide/seoul/gangseo/deungchon/rain-leak",
    "title": "등촌동 빗물누수 바람 동반 강우 시 외벽 상태 점검",
    "bodyLines": [
      "비의 양이 많거나 바람이 부는 날 창문 테두리 주변으로 습기가 번지는 모습을 관찰할 수 있습니다.",
      "외벽 접합부와 샷시 외곽 마감선에 벌어진 틈이 있는지 표면 상태를 차분히 점검합니다.",
      "단순히 물자국이 맺힌 자리에 그치지 않고 주변 외벽 마감 라인도 함께 확인하는 것이 필요합니다.",
      "등촌동 빗물누수 점검 시에는 비가 올 때 나타나는 특징을 바탕으로 외부 틈새 보수 범위를 상의합니다."
    ],
    "primaryDynamicUrl": "/?k=%EB%93%B1%EC%B4%8C%EB%8F%99-%EB%B9%97%EB%AC%BC%EB%88%84%EC%88%98",
    "anchorText": "등촌동 빗물누수 틈새 점검 안내 확인",
    "wave": "WAVE_2",
    "contentStatus": "APPROVED",
    "publishedAt": null
  },
  {
    "id": "seoul-gangseo-deungchon-building-waterproof",
    "region": "등촌동",
    "regionScope": "seoul",
    "regionLevel": "dong",
    "parentDistrict": "강서구",
    "districtSlug": "gangseo",
    "dongSlug": "deungchon",
    "service": "건물방수",
    "serviceSlug": "building-waterproof",
    "keyword": "등촌동-건물방수",
    "path": "/guide/seoul/gangseo/deungchon/building-waterproof",
    "title": "등촌동 건물방수 외벽 및 상부 마감부 복합 상태 확인",
    "bodyLines": [
      "건물 최상층이나 특정 층 벽면에서 복합적인 물자국이 나타난다면 외부 마감 상태를 점검할 수 있습니다.",
      "상부 마감 테두리와 외벽 균열부, 창틀 접합면 등 여러 부위의 표면 상태를 함께 확인합니다.",
      "개별 부위만 따로 확인하기보다는 건물 전체의 외벽 연결 상태를 고르게 살펴보는 편이 좋습니다.",
      "등촌동 건물방수 작업은 외부 점검을 통해 보수가 필요한 구역을 파악하고 알맞은 범위를 결정합니다."
    ],
    "primaryDynamicUrl": "/?k=%EB%93%B1%EC%B4%8C%EB%8F%99-%EA%B1%B4%EB%AC%BC%EB%B0%A9%EC%88%98",
    "anchorText": "등촌동 건물방수 외벽 점검 안내 확인",
    "wave": "WAVE_2",
    "contentStatus": "APPROVED",
    "publishedAt": null
  },
  {
    "id": "seoul-gangseo-deungchon-wall-painting",
    "region": "등촌동",
    "regionScope": "seoul",
    "regionLevel": "dong",
    "parentDistrict": "강서구",
    "districtSlug": "gangseo",
    "dongSlug": "deungchon",
    "service": "외벽도색",
    "serviceSlug": "wall-painting",
    "keyword": "등촌동-외벽도색",
    "path": "/guide/seoul/gangseo/deungchon/wall-painting",
    "title": "등촌동 외벽도색 도장면 변색과 페인트 박리 점검 안내",
    "bodyLines": [
      "외벽 도료의 변색과 얼룩, 페인트 가루 날림은 도장면의 노후 변화를 보여주는 전형적 징후입니다.",
      "도막이 균열을 따라 들뜨거나 벗겨지는 현상은 육안 관찰을 통해 쉽게 확인할 수 있습니다.",
      "칠 작업을 준비할 때는 기존 도장면의 박리 상태를 확인하고 필요한 표면 정리 범위를 검토해야 합니다.",
      "등촌동 외벽도색 시공은 건물 외벽의 노후 정도와 작업 면적을 미리 확인하며 순차적으로 진행합니다."
    ],
    "primaryDynamicUrl": "/?k=%EB%93%B1%EC%B4%8C%EB%8F%99-%EC%99%B8%EB%B2%BD%EB%8F%84%EC%83%89",
    "anchorText": "등촌동 외벽도색 도장면 점검 안내 확인",
    "wave": "WAVE_2",
    "contentStatus": "APPROVED",
    "publishedAt": null
  },
  {
    "id": "seoul-gangseo-yeomchang-window-leak",
    "region": "염창동",
    "regionScope": "seoul",
    "regionLevel": "dong",
    "parentDistrict": "강서구",
    "districtSlug": "gangseo",
    "dongSlug": "yeomchang",
    "service": "창틀누수",
    "serviceSlug": "window-leak",
    "keyword": "염창동-창틀누수",
    "path": "/guide/seoul/gangseo/yeomchang/window-leak",
    "title": "염창동 창틀누수 창호 주변 젖음 흔적과 외부 보수 가이드",
    "bodyLines": [
      "비가 그친 뒤 창틀 하단 실내 벽지에 젖은 얼룩이 남아 있다면 바깥쪽 마감 상태를 살펴볼 필요가 있습니다.",
      "창문 외곽의 기존 실리콘이 갈라지거나 테두리에서 들뜬 자리가 있는지 육안으로 점검합니다.",
      "창틀 부위뿐만 아니라 인접한 외벽 마감면의 미세 균열 상태도 함께 확인해보는 것이 권장됩니다.",
      "염창동 창틀누수 점검은 섣부른 추정보다 외부 마감 상태를 확인한 후 필요한 보수 범위를 결정합니다."
    ],
    "primaryDynamicUrl": "/?k=%EC%97%BC%EC%B0%BD%EB%8F%99-%EC%B0%BD%ED%8B%80%EB%88%84%EC%88%98",
    "anchorText": "염창동 창틀누수 외부 보수 안내 확인",
    "wave": "WAVE_2",
    "contentStatus": "APPROVED",
    "publishedAt": null
  },
  {
    "id": "seoul-gangseo-yeomchang-rain-leak",
    "region": "염창동",
    "regionScope": "seoul",
    "regionLevel": "dong",
    "parentDistrict": "강서구",
    "districtSlug": "gangseo",
    "dongSlug": "yeomchang",
    "service": "빗물누수",
    "serviceSlug": "rain-leak",
    "keyword": "염창동-빗물누수",
    "path": "/guide/seoul/gangseo/yeomchang/rain-leak",
    "title": "염창동 빗물누수 강우 시 창틀 및 외벽 틈새 확인 사항",
    "bodyLines": [
      "비가 내릴 때 창틀 모서리나 벽면 이음부 부근으로 물기가 배어 나오는 증상이 보일 수 있습니다.",
      "바람을 동반한 비가 올 때 벌어진 외부 마감재 틈새가 있는지 눈으로 상태를 확인합니다.",
      "물자국이 나타난 부위와 함께 상부 및 측면으로 연결된 마감 라인도 차분히 살펴볼 필요가 있습니다.",
      "염창동 빗물누수 보수는 비가 올 때 관찰되는 상태를 바탕으로 현장에 맞는 외부 틈새 보수를 계획합니다."
    ],
    "primaryDynamicUrl": "/?k=%EC%97%BC%EC%B0%BD%EB%8F%99-%EB%B9%97%EB%AC%BC%EB%88%84%EC%88%98",
    "anchorText": "염창동 빗물누수 틈새 보수 안내 확인",
    "wave": "WAVE_2",
    "contentStatus": "APPROVED",
    "publishedAt": null
  },
  {
    "id": "seoul-gangseo-yeomchang-building-waterproof",
    "region": "염창동",
    "regionScope": "seoul",
    "regionLevel": "dong",
    "parentDistrict": "강서구",
    "districtSlug": "gangseo",
    "dongSlug": "yeomchang",
    "service": "건물방수",
    "serviceSlug": "building-waterproof",
    "keyword": "염창동-건물방수",
    "path": "/guide/seoul/gangseo/yeomchang/building-waterproof",
    "title": "염창동 건물방수 외부 여러 부위 점검과 작업 범위 설정",
    "bodyLines": [
      "창틀 주변과 외벽면, 상부 테두리선 등 여러 외부 부위에서 젖음 현상이 함께 발견되곤 합니다.",
      "건물 외부 마감면의 변화로 인해 틈새가 나타난 구역이 있는지 고르게 확인해봅니다.",
      "단편적인 틈새 조치에 머물지 않고 건물 외벽 전체의 접합 부위를 차분히 살펴보는 것이 좋습니다.",
      "염창동 건물방수 작업은 현장 외부 상태를 바탕으로 실질적으로 필요한 작업 범위를 상의합니다."
    ],
    "primaryDynamicUrl": "/?k=%EC%97%BC%EC%B0%BD%EB%8F%99-%EA%B1%B4%EB%AC%BC%EB%B0%A9%EC%88%98",
    "anchorText": "염창동 건물방수 작업 범위 안내 확인",
    "wave": "WAVE_2",
    "contentStatus": "APPROVED",
    "publishedAt": null
  },
  {
    "id": "seoul-gangseo-yeomchang-wall-painting",
    "region": "염창동",
    "regionScope": "seoul",
    "regionLevel": "dong",
    "parentDistrict": "강서구",
    "districtSlug": "gangseo",
    "dongSlug": "yeomchang",
    "service": "외벽도색",
    "serviceSlug": "wall-painting",
    "keyword": "염창동-외벽도색",
    "path": "/guide/seoul/gangseo/yeomchang/wall-painting",
    "title": "염창동 외벽도색 페인트 노후 상태 확인과 도색 준비 사항",
    "bodyLines": [
      "건물 외벽의 페인트 도막이 바래거나 부분적으로 들떠서 일어나는 증상이 눈에 띌 수 있습니다.",
      "벗겨진 페인트 틈새 주변으로 표면 갈라짐이 번지고 있는지 육안으로 확인할 수 있습니다.",
      "도색 작업을 계획할 때는 기존 도장면의 들뜸 상태를 확인하고 필요한 표면 정리 범위를 정해야 합니다.",
      "염창동 외벽도색 진행 전에는 건물 표면의 노후 상태를 살펴보고 알맞은 도색 일정을 협의합니다."
    ],
    "primaryDynamicUrl": "/?k=%EC%97%BC%EC%B0%BD%EB%8F%99-%EC%99%B8%EB%B2%BD%EB%8F%84%EC%83%89",
    "anchorText": "염창동 외벽도색 도색 준비 안내 확인",
    "wave": "WAVE_2",
    "contentStatus": "APPROVED",
    "publishedAt": null
  },
  {
    "id": "seoul-gangseo-gayang-window-leak",
    "region": "가양동",
    "regionScope": "seoul",
    "regionLevel": "dong",
    "parentDistrict": "강서구",
    "districtSlug": "gangseo",
    "dongSlug": "gayang",
    "service": "창틀누수",
    "serviceSlug": "window-leak",
    "keyword": "가양동-창틀누수",
    "path": "/guide/seoul/gangseo/gayang/window-leak",
    "title": "가양동 창틀누수 외곽 테두리 틈새 확인 및 외부 점검",
    "bodyLines": [
      "비가 온 다음 날 창가 바닥이나 벽지 가장자리에 젖은 자국이 번져 있다면 외부 마감을 살펴봅니다.",
      "샷시 테두리와 접합부 주변 실리콘의 들뜸이나 미세한 갈라짐 흔적을 눈으로 확인합니다.",
      "물이 비치는 자리뿐만 아니라 상부 창틀과 주변 외벽 사이의 마감 틈새도 함께 살펴볼 필요가 있습니다.",
      "가양동 창틀누수 확인 시에는 섣부른 예단보다 외부 마감부의 상태를 확인하고 보수 범위를 검토합니다."
    ],
    "primaryDynamicUrl": "/?k=%EA%B0%80%EC%96%91%EB%8F%99-%EC%B0%BD%ED%8B%80%EB%88%84%EC%88%98",
    "anchorText": "가양동 창틀누수 외부 점검 안내 확인",
    "wave": "WAVE_3",
    "contentStatus": "APPROVED",
    "publishedAt": null
  },
  {
    "id": "seoul-gangseo-gayang-rain-leak",
    "region": "가양동",
    "regionScope": "seoul",
    "regionLevel": "dong",
    "parentDistrict": "강서구",
    "districtSlug": "gangseo",
    "dongSlug": "gayang",
    "service": "빗물누수",
    "serviceSlug": "rain-leak",
    "keyword": "가양동-빗물누수",
    "path": "/guide/seoul/gangseo/gayang/rain-leak",
    "title": "가양동 빗물누수 비바람 후 관찰되는 틈새 유입 흔적",
    "bodyLines": [
      "비바람이 불 때 창문 틈이나 외벽 접합부 주변으로 물 번짐이 나타나는 사례가 있습니다.",
      "외부 마감재 사이의 이격이나 벌어짐 부위가 있는지 육안으로 표면 상태를 살펴봅니다.",
      "젖음이 관찰된 부위 주변뿐만 아니라 빗물이 닿는 외벽 접합 라인을 다각도로 확인합니다.",
      "가양동 빗물누수 대처는 비가 올 때 나타나는 증상을 참고하여 적합한 외부 틈새 보수 범위를 상의합니다."
    ],
    "primaryDynamicUrl": "/?k=%EA%B0%80%EC%96%91%EB%8F%99-%EB%B9%97%EB%AC%BC%EB%88%84%EC%88%98",
    "anchorText": "가양동 빗물누수 유입 점검 안내 확인",
    "wave": "WAVE_3",
    "contentStatus": "APPROVED",
    "publishedAt": null
  },
  {
    "id": "seoul-gangseo-gayang-building-waterproof",
    "region": "가양동",
    "regionScope": "seoul",
    "regionLevel": "dong",
    "parentDistrict": "강서구",
    "districtSlug": "gangseo",
    "dongSlug": "gayang",
    "service": "건물방수",
    "serviceSlug": "building-waterproof",
    "keyword": "가양동-건물방수",
    "path": "/guide/seoul/gangseo/gayang/building-waterproof",
    "title": "가양동 건물방수 외벽과 접합부 누수 상태 종합 점검",
    "bodyLines": [
      "건물 외벽면과 상부 테두리, 창틀 외곽 등 여러 외부 영역에서 물자국이 함께 나타날 수 있습니다.",
      "외부 마감면 전반의 상태 변화와 균열 여부를 눈으로 확인해보는 과정이 도움이 됩니다.",
      "단편적인 틈새 땜질 대신 건물 외관 전체의 접합 부위 상태를 고루 살펴보는 편이 좋습니다.",
      "가양동 건물방수 점검은 외부 상태를 확인하여 실제로 보수가 필요한 범위를 파악하고 진행합니다."
    ],
    "primaryDynamicUrl": "/?k=%EA%B0%80%EC%96%91%EB%8F%99-%EA%B1%B4%EB%AC%BC%EB%B0%A9%EC%88%98",
    "anchorText": "가양동 건물방수 방수 범위 안내 확인",
    "wave": "WAVE_3",
    "contentStatus": "APPROVED",
    "publishedAt": null
  },
  {
    "id": "seoul-gangseo-gayang-wall-painting",
    "region": "가양동",
    "regionScope": "seoul",
    "regionLevel": "dong",
    "parentDistrict": "강서구",
    "districtSlug": "gangseo",
    "dongSlug": "gayang",
    "service": "외벽도색",
    "serviceSlug": "wall-painting",
    "keyword": "가양동-외벽도색",
    "path": "/guide/seoul/gangseo/gayang/wall-painting",
    "title": "가양동 외벽도색 도장면 박리 상태 확인과 표면 정돈 가이드",
    "bodyLines": [
      "건물 외벽 페인트가 탈색되거나 얇게 벗겨지는 현상은 도장면 노후 과정에서 자주 관찰됩니다.",
      "도막의 들뜸과 부스러짐 상태는 건물 외벽 표면에서 눈으로 확인할 수 있는 변화입니다.",
      "새 도색에 앞서 낡은 도장면의 들뜸 상태를 확인하고 필요한 표면 정리 범위를 검토해야 합니다.",
      "가양동 외벽도색 작업은 건물 외벽의 표면 상태를 미리 확인하고 단계적인 작업 범위를 상의합니다."
    ],
    "primaryDynamicUrl": "/?k=%EA%B0%80%EC%96%91%EB%8F%99-%EC%99%B8%EB%B2%BD%EB%8F%84%EC%83%89",
    "anchorText": "가양동 외벽도색 표면 정돈 안내 확인",
    "wave": "WAVE_3",
    "contentStatus": "APPROVED",
    "publishedAt": null
  },
  {
    "id": "seoul-gangseo-magok-window-leak",
    "region": "마곡동",
    "regionScope": "seoul",
    "regionLevel": "dong",
    "parentDistrict": "강서구",
    "districtSlug": "gangseo",
    "dongSlug": "magok",
    "service": "창틀누수",
    "serviceSlug": "window-leak",
    "keyword": "마곡동-창틀누수",
    "path": "/guide/seoul/gangseo/magok/window-leak",
    "title": "마곡동 창틀누수 프레임 외곽 마감 상태와 외부 점검",
    "bodyLines": [
      "비가 내린 뒤 창호 주변 마감재가 젖거나 물기가 흘러내린 자국이 보인다면 외부 틈새를 살펴봅니다.",
      "샷시 외곽과 주변 외벽 사이를 잇는 실리콘의 들뜸이나 미세 갈라짐 상태를 확인합니다.",
      "물이 비치는 자리뿐만 아니라 창호 상단 마감 조인트와 연결 부위도 고르게 점검해보는 것이 좋습니다.",
      "마곡동 창틀누수 확인 시에는 내부 덧칠보다 외부 마감 상태를 먼저 살피고 적절한 보수 범위를 정합니다."
    ],
    "primaryDynamicUrl": "/?k=%EB%A7%88%EA%B3%A1%EB%8F%99-%EC%B0%BD%ED%8B%80%EB%88%84%EC%88%98",
    "anchorText": "마곡동 창틀누수 외부 점검 안내 확인",
    "wave": "WAVE_3",
    "contentStatus": "APPROVED",
    "publishedAt": null
  },
  {
    "id": "seoul-gangseo-magok-rain-leak",
    "region": "마곡동",
    "regionScope": "seoul",
    "regionLevel": "dong",
    "parentDistrict": "강서구",
    "districtSlug": "gangseo",
    "dongSlug": "magok",
    "service": "빗물누수",
    "serviceSlug": "rain-leak",
    "keyword": "마곡동-빗물누수",
    "path": "/guide/seoul/gangseo/magok/rain-leak",
    "title": "마곡동 빗물누수 비 올 때 나타나는 외부 상태 점검",
    "bodyLines": [
      "평상시에는 건조하다가 비바람이 불 때 창틀 주변으로 물 번짐이 나타나는 경우가 관찰됩니다.",
      "외부 조인트와 마감선 주변에 벌어진 틈새가 있는지 눈으로 상태를 확인해볼 필요가 있습니다.",
      "젖은 흔적이 확인되는 위치 주변은 물론 빗물이 닿는 외벽 라인을 다각도로 살펴봅니다.",
      "마곡동 빗물누수 대처는 비가 오는 시점의 증상을 바탕으로 적절한 외부 틈새 보수 범위를 정합니다."
    ],
    "primaryDynamicUrl": "/?k=%EB%A7%88%EA%B3%A1%EB%8F%99-%EB%B9%97%EB%AC%BC%EB%88%84%EC%88%98",
    "anchorText": "마곡동 빗물누수 틈새 점검 안내 확인",
    "wave": "WAVE_3",
    "contentStatus": "APPROVED",
    "publishedAt": null
  },
  {
    "id": "seoul-gangseo-magok-building-waterproof",
    "region": "마곡동",
    "regionScope": "seoul",
    "regionLevel": "dong",
    "parentDistrict": "강서구",
    "districtSlug": "gangseo",
    "dongSlug": "magok",
    "service": "건물방수",
    "serviceSlug": "building-waterproof",
    "keyword": "마곡동-건물방수",
    "path": "/guide/seoul/gangseo/magok/building-waterproof",
    "title": "마곡동 건물방수 외부 복합 누수 부위 점검과 작업 범위",
    "bodyLines": [
      "외벽 이음매와 상부 마감 모서리, 창틀 부근 등 여러 외부 구역에서 수분 흔적이 관찰될 수 있습니다.",
      "건물 외부 표면의 여러 접합부에서 나타나는 균열이나 상태 변화를 차분히 확인합니다.",
      "국소적인 부위만 손보기보다 건물 외벽 전반의 연결 부위와 마감 상태를 함께 점검하는 것이 유익합니다.",
      "마곡동 건물방수 작업 계획은 외부 상태를 확인한 후 필요한 보수 작업 범위를 협의합니다."
    ],
    "primaryDynamicUrl": "/?k=%EB%A7%88%EA%B3%A1%EB%8F%99-%EA%B1%B4%EB%AC%BC%EB%B0%A9%EC%88%98",
    "anchorText": "마곡동 건물방수 종합 점검 안내 확인",
    "wave": "WAVE_3",
    "contentStatus": "APPROVED",
    "publishedAt": null
  },
  {
    "id": "seoul-gangseo-magok-wall-painting",
    "region": "마곡동",
    "regionScope": "seoul",
    "regionLevel": "dong",
    "parentDistrict": "강서구",
    "districtSlug": "gangseo",
    "dongSlug": "magok",
    "service": "외벽도색",
    "serviceSlug": "wall-painting",
    "keyword": "마곡동-외벽도색",
    "path": "/guide/seoul/gangseo/magok/wall-painting",
    "title": "마곡동 외벽도색 페인트 들뜸 상태 확인과 표면 정돈 범위",
    "bodyLines": [
      "외부 페인트가 바래거나 부분적으로 들떠서 부스러지는 현상은 도장면 노후의 모습 중 하나입니다.",
      "도막의 들뜸이나 갈라짐이 진행된 부위는 육안 관찰을 통해 쉽게 상태를 파악할 수 있습니다.",
      "새로 도색을 진행하기 전 낡은 도막의 들뜸 상태를 확인하고 필요한 표면 정리 범위를 판단해야 합니다.",
      "마곡동 외벽도색 작업은 건물 외벽의 전반적인 상태를 확인하며 체계적인 도색 범위를 계획합니다."
    ],
    "primaryDynamicUrl": "/?k=%EB%A7%88%EA%B3%A1%EB%8F%99-%EC%99%B8%EB%B2%BD%EB%8F%84%EC%83%89",
    "anchorText": "마곡동 외벽도색 바탕면 정돈 안내 확인",
    "wave": "WAVE_3",
    "contentStatus": "APPROVED",
    "publishedAt": null
  }
];

/**
 * Registry 조회 헬퍼 함수군
 */
export function getAllArticles(): GuideArticleSSOT[] {
  return ARTICLE_REGISTRY;
}

export function getArticleByPath(path: string): GuideArticleSSOT | undefined {
  return ARTICLE_REGISTRY.find(article => article.path === path);
}

export function getPublishedArticles(): GuideArticleSSOT[] {
  return ARTICLE_REGISTRY.filter(article => article.contentStatus === 'PUBLISHED');
}

export function getPublishedArticleByPath(path: string): GuideArticleSSOT | undefined {
  return ARTICLE_REGISTRY.find(article => article.path === path && article.contentStatus === 'PUBLISHED');
}
