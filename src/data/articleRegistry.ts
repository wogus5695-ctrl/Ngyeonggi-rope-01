/**
 * Guide Article Registry SSOT
 * Phase P3-A4 Implementation
 * 
 * 서울 강서구 파일럿 24개 가이드 아티클 공식 레지스트리.
 * Wave 1: 강서구 4개 + 화곡동 4개 = 8개 (PUBLISHED)
 * Wave 2: 등촌동 4개 + 염창동 4개 = 8개 (APPROVED)
 * Wave 3: 가양동 4개 + 마곡동 4개 = 8개 (APPROVED)
 */

export type TargetServiceKey = '창틀누수' | '빗물누수' | '건물방수' | '외벽도색' | '외벽타일보수' | '외벽타일교체';
export type TargetServiceSlug = 'window-leak' | 'rain-leak' | 'building-waterproof' | 'wall-painting' | 'tile-repair' | 'tile-replace';
export type RegionScope = 'seoul';
export type RegionLevel = 'district' | 'dong';
export type PublicationWave = 'WAVE_1' | 'WAVE_2' | 'WAVE_3' | 'PILOT_TILE';
export type ArticleContentStatus = 'DRAFT' | 'APPROVED' | 'PUBLISHED';

export interface GuideArticleSection {
  heading: string;
  paragraphs: string[];
}

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

  bodyLines: string[];

  sections?: GuideArticleSection[];

  primaryDynamicUrl: string;

  anchorText: string;

  wave: PublicationWave;

  contentStatus: ArticleContentStatus;

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
  },
  {
    "id": "seoul-gangnam-district-tile-repair",
    "region": "강남구",
    "regionScope": "seoul",
    "regionLevel": "district",
    "parentDistrict": "강남구",
    "districtSlug": "gangnam",
    "service": "외벽타일보수",
    "serviceSlug": "tile-repair",
    "keyword": "강남구-외벽타일보수",
    "path": "/guide/seoul/gangnam/tile-repair",
    "title": "강남구 외벽타일보수, 들뜬 타일을 그냥 두어도 괜찮을까요?",
    "sections": [
      {
        "heading": "외벽 타일 들뜸, 방치해도 괜찮을까요?",
        "paragraphs": [
          "강남구의 빌라, 다세대주택, 상가 건물 등에서 외벽 타일이 살짝 불룩하게 튀어나오거나 들뜬 모습을 발견하면 언제 떨어질지 몰라 불안감이 커집니다.",
          "외벽 타일은 계절에 따른 온도 변화와 비바람에 지속적으로 노출되므로, 접착 몰탈의 결속력이 약해진 상태에서 방치할 경우 갑작스러운 타일 탈락으로 이어질 수 있습니다."
        ]
      },
      {
        "heading": "손상 부위에서 육안으로 확인해야 할 핵심 요소",
        "paragraphs": [
          "지상이나 안전한 실내에서 의심 부위를 살펴볼 때는 타일 줄눈(메지)의 균열이나 탈락 여부를 먼저 확인하는 것이 좋습니다.",
          "또한 인접한 다른 타일들과 높낮이 차이(단차)가 생겼는지, 비가 온 뒤 타일 틈새에서 수분이 지속적으로 배어 나오는지 살펴보아야 합니다."
        ]
      },
      {
        "heading": "외벽 타일 보수 가능 여부를 가르는 현장 판단 기준",
        "paragraphs": [
          "타일 이상이 발견되었다고 해서 반드시 외벽 전체를 교체해야 하는 것은 아닙니다.",
          "주변 타일의 부착력이 안정적으로 유지되고 있고 문제가 국소적인 구역에 한정되어 있다면, 들뜬 부위만을 선별하여 고정·보강하는 부분 보수가 충분히 가능합니다."
        ]
      },
      {
        "heading": "부분 보수와 전체 공사의 차이점",
        "paragraphs": [
          "전체 공사는 외벽 전체의 마감재를 철거하고 새로 시공하므로 공사 규모와 비용 부담이 매우 큽니다.",
          "반면 부분 보수는 로프 기술자가 접근하여 들뜬 타일 구역을 물리적으로 안전하게 고정하고 방수 줄눈재로 마감하므로 필요한 범위만 합리적으로 조치할 수 있습니다."
        ]
      },
      {
        "heading": "안전 및 현장 확인 시 절대 주의사항",
        "paragraphs": [
          "고소 부위에 있는 타일을 긴 막대 등으로 찌르거나 창밖으로 몸을 내밀어 직접 두드려보는 행위는 2차 낙하 사고를 유발할 수 있어 매우 위험합니다.",
          "반드시 지상의 안전한 거리에서 스마트폰 줌 카메라 등을 활용해 육안으로만 상태를 기록해야 합니다."
        ]
      },
      {
        "heading": "전문가 상담 전 준비하면 좋은 정보",
        "paragraphs": [
          "건물 전체에서 해당 부위가 위치한 층수와 위치를 알 수 있는 원경 사진과 지상에서 확대한 근접 사진을 함께 준비해 주시면 현장 상황 파악에 큰 도움이 됩니다.",
          "또한 건물 하부에 주차장이나 보행로가 있는지 여부를 함께 전달해 주시면 작업 여건을 빠르게 검토할 수 있습니다."
        ]
      }
    ],
    "bodyLines": [
      "강남구의 빌라, 다세대주택, 상가 건물 등에서 외벽 타일이 살짝 불룩하게 튀어나오거나 들뜬 모습을 발견하면 언제 떨어질지 몰라 불안감이 커집니다.",
      "외벽 타일은 계절에 따른 온도 변화와 비바람에 지속적으로 노출되므로, 접착 몰탈의 결속력이 약해진 상태에서 방치할 경우 갑작스러운 타일 탈락으로 이어질 수 있습니다.",
      "지상이나 안전한 실내에서 의심 부위를 살펴볼 때는 타일 줄눈(메지)의 균열이나 탈락 여부를 먼저 확인하는 것이 좋습니다.",
      "주변 타일의 부착력이 안정적으로 유지되고 있고 문제가 국소적인 구역에 한정되어 있다면, 들뜬 부위만을 선별하여 고정·보강하는 부분 보수가 충분히 가능합니다.",
      "고소 부위에 있는 타일을 긴 막대 등으로 찌르거나 창밖으로 몸을 내밀어 직접 두드려보는 행위는 2차 낙하 사고를 유발할 수 있어 매우 위험합니다.",
      "건물 전체에서 해당 부위가 위치한 층수와 위치를 알 수 있는 원경 사진과 근접 사진을 준비하시면 보수 가능 여부를 빠르게 검토할 수 있습니다."
    ],
    "primaryDynamicUrl": "/?k=%EA%B0%95%EB%82%A8%EA%B5%AC-%EC%99%B8%EB%B2%BD%ED%83%80%EC%9D%BC%EB%B3%B4%EC%88%98",
    "anchorText": "강남구 외벽타일보수 현장 점검 안내 확인",
    "wave": "PILOT_TILE",
    "contentStatus": "PUBLISHED",
    "publishedAt": "2026-10-28T16:00:00+09:00"
  },
  {
    "id": "seoul-gangnam-district-tile-replace",
    "region": "강남구",
    "regionScope": "seoul",
    "regionLevel": "district",
    "parentDistrict": "강남구",
    "districtSlug": "gangnam",
    "service": "외벽타일교체",
    "serviceSlug": "tile-replace",
    "keyword": "강남구-외벽타일교체",
    "path": "/guide/seoul/gangnam/tile-replace",
    "title": "강남구 외벽타일교체, 깨진 타일만 바꾸면 될까요?",
    "sections": [
      {
        "heading": "깨진 타일 몇 장, 부분 교체로 해결될 수 있을까요?",
        "paragraphs": [
          "강남구 일대의 건물 외벽에서 타일 몇 장이 깨지거나 떨어져 나간 것을 발견했을 때, 벽 전체를 다시 시공해야 할지 파손된 부위만 바꿀 수 있을지 고민하게 됩니다.",
          "외벽 타일은 전체를 교체하지 않더라도, 파손된 부위와 상태를 정확히 진단하면 필요한 부분만 선별하여 교체하는 것이 합리적인 해결책이 될 수 있습니다."
        ]
      },
      {
        "heading": "깨진 타일과 함께 반드시 살펴봐야 할 바탕면 상태",
        "paragraphs": [
          "타일이 깨지거나 탈락한 자리 뒤편에 드러난 콘크리트 몰탈면의 상태를 확인하는 것이 무엇보다 중요합니다.",
          "바탕면이 부스러지거나 크랙이 가 있다면 새 타일을 붙이기 전에 바탕면을 단단하게 정돈하고 보강하는 기초 작업이 선행되어야 합니다."
        ]
      },
      {
        "heading": "부분 교체가 적합한 경우와 교체 범위 판단 기준",
        "paragraphs": [
          "깨진 타일 주변의 다른 타일들이 흔들림 없이 단단히 고정되어 있다면 국소 부위의 부분 교체가 가장 효율적입니다.",
          "만약 주변 타일까지 두드렸을 때 통통거리는 빈 소리가 나거나 들떠 있다면, 안전을 위해 교체 범위를 인접 구역까지 넓혀야 재탈락을 방지할 수 있습니다."
        ]
      },
      {
        "heading": "외벽 타일 교체 시공의 주요 단계별 공정",
        "paragraphs": [
          "시공은 먼저 파손되거나 들뜬 타일을 안전하게 걷어내고 잔여 접착재를 깨끗이 긁어내는 철거 작업부터 시작됩니다.",
          "이후 외벽 전용 고성능 접착재를 도포하여 수평과 단차를 맞춰 새 타일을 견고하게 부착한 뒤, 방수 줄눈재로 틈새를 꼼꼼히 밀식 마감합니다."
        ]
      },
      {
        "heading": "고소 외벽 작업 시 현장 안전 주의사항",
        "paragraphs": [
          "깨진 타일 파편은 작은 크기라도 높은 곳에서 떨어지면 큰 사고로 이어질 수 있으므로 절대 임의로 잡아당기거나 뜯어내려 해서는 안 됩니다.",
          "작업 반경 아래 안전 통제선 설치와 로프 전문 시공자의 안전 장비 착용이 필수적으로 지켜져야 합니다."
        ]
      },
      {
        "heading": "교체 상담 전 미리 준비하면 유용한 정보",
        "paragraphs": [
          "떨어져 나간 타일의 가로와 세로 규격(cm), 대략적인 파손 타일 수량을 파악해 두시면 자재 조율에 큰 도움이 됩니다.",
          "또한 건물 외벽 전체에서 탈락 부위가 차지하는 위치를 파악할 수 있는 전경 사진을 함께 전달해 주시면 원활한 안내가 가능합니다."
        ]
      }
    ],
    "bodyLines": [
      "강남구 일대의 건물 외벽에서 타일 몇 장이 깨지거나 떨어져 나간 것을 발견했을 때, 벽 전체를 다시 시공해야 할지 파손된 부위만 바꿀 수 있을지 고민하게 됩니다.",
      "외벽 타일은 전체를 교체하지 않더라도, 파손된 부위와 상태를 정확히 진단하면 필요한 부분만 선별하여 교체하는 것이 합리적인 해결책이 될 수 있습니다.",
      "타일이 깨지거나 탈락한 자리 뒤편에 드러난 콘크리트 몰탈면의 상태를 확인하고 단단하게 정돈하는 기초 작업이 필수적입니다.",
      "깨진 타일 주변의 다른 타일들이 안정적이라면 부분 교체가 유리하며, 인접 부위 상태에 따라 교체 범위를 조율합니다.",
      "깨진 타일 파편은 작은 크기라도 높은 곳에서 떨어지면 위험하므로 절대 임의로 잡아당기거나 뜯어내려 해서는 안 됩니다.",
      "떨어져 나간 타일의 규격과 대략적인 수량, 건물 전경 사진을 준비해 주시면 교체 작업 범위를 빠르게 검토할 수 있습니다."
    ],
    "primaryDynamicUrl": "/?k=%EA%B0%95%EB%82%A8%EA%B5%AC-%EC%99%B8%EB%B2%BD%ED%83%80%EC%9D%BC%EA%B5%90%EC%B2%B4",
    "anchorText": "강남구 외벽타일교체 시공 범위 안내 확인",
    "wave": "PILOT_TILE",
    "contentStatus": "PUBLISHED",
    "publishedAt": "2026-10-28T16:00:00+09:00"
  },
  {
    "id": "seoul-mapo-district-tile-repair",
    "region": "마포구",
    "regionScope": "seoul",
    "regionLevel": "district",
    "parentDistrict": "마포구",
    "districtSlug": "mapo",
    "service": "외벽타일보수",
    "serviceSlug": "tile-repair",
    "keyword": "마포구-외벽타일보수",
    "path": "/guide/seoul/mapo/tile-repair",
    "title": "마포구 외벽타일보수, 타일 균열과 들뜸은 어떻게 다를까요?",
    "sections": [
      {
        "heading": "외벽 타일의 표면 실금과 내부 들뜸의 명확한 차이",
        "paragraphs": [
          "마포구의 다세대주택과 상가 건물 외벽을 관찰하다 보면 타일 자체에 금이 간 균열과 타일이 벽체에서 떨어져 나온 들뜸을 접하게 됩니다.",
          "표면 균열은 단순 크랙일 수 있지만, 들뜸은 타일 뒤편 접착층이 콘크리트 바탕면과 분리되어 공극이 생긴 상태이므로 탈락 위험도가 훨씬 높습니다."
        ]
      },
      {
        "heading": "타일 뒤편 접착층이 분리되었을 때 나타나는 징후",
        "paragraphs": [
          "들뜸이 시작된 외벽은 특정 구역의 타일 면이 주변보다 미세하게 불룩 튀어나와 보이는 단차 현상이 생깁니다.",
          "또한 비가 온 뒤 맑은 날씨에도 타일 줄눈 틈 사이로 습기가 계속 배어 나오거나 줄눈재가 가루처럼 부스러져 내리는 모습이 관찰됩니다."
        ]
      },
      {
        "heading": "보수 범위를 결정하는 객관적인 현장 기준",
        "paragraphs": [
          "단순 미세 균열은 외부 수분 침투를 차단하는 방수 줄눈재 및 표면 보강 처리로 충분할 수 있습니다.",
          "하지만 들뜸이 확인된 구간은 물리적인 탈락을 막기 위해 타일을 벽체에 안정적으로 고정 결속시키는 보강 보수가 반드시 필요합니다."
        ]
      },
      {
        "heading": "들뜬 타일을 고정하는 보수 공법의 원리와 효과",
        "paragraphs": [
          "외벽 타일 보수는 섣불리 타일 전체를 뜯어내기보다, 고소 로프를 통해 접근하여 들뜬 타일을 제자리에 안전하게 밀착 고정하는 방식으로 진행됩니다.",
          "이 방식은 건물 외벽의 본래 형태를 유지하면서도 공사 기간과 비용 부담을 대폭 줄일 수 있는 현실적인 대안입니다."
        ]
      },
      {
        "heading": "외벽 타일 점검 시 절대 주의해야 할 안전 원칙",
        "paragraphs": [
          "외벽 타일은 손으로 건드리는 순간 접착력이 끊어져 낙하할 수 있으므로, 창밖이나 옥상 난간에서 임의로 만져보는 행위는 엄격히 금지됩니다.",
          "점검과 진단은 반드시 안전 장비를 갖춘 전문 로프 작업자가 진행해야 하며, 일상적인 확인은 지상에서만 이루어져야 합니다."
        ]
      },
      {
        "heading": "정확한 보수 상담을 위해 준비할 현장 사진",
        "paragraphs": [
          "의심되는 타일 부위의 층수와 건물 모서리 등 위치를 특정할 수 있는 원거리 사진을 준비해 주시는 것이 좋습니다.",
          "여기에 지상에서 줌을 활용해 타일 줄눈 손상이나 돌출 상태를 촬영한 사진이 더해지면 현장 방문 전 신속한 1차 상담이 가능합니다."
        ]
      }
    ],
    "bodyLines": [
      "마포구의 다세대주택과 상가 건물 외벽을 관찰하다 보면 타일 자체에 금이 간 균열과 타일이 벽체에서 떨어져 나온 들뜸을 접하게 됩니다.",
      "표면 균열과 달리 들뜸은 타일 뒤편 접착층이 콘크리트 바탕면과 분리된 상태이므로 탈락 위험도가 훨씬 높습니다.",
      "들뜸이 시작된 외벽은 특정 구역의 타일 면이 살짝 불룩 튀어나와 보이거나 줄눈 틈으로 수분이 배어 나오는 징후를 보입니다.",
      "단순 균열은 줄눈 보강으로 대응하지만, 들뜸 구간은 타일을 벽체에 안전하게 고정 결속시키는 체계적인 보수가 필요합니다.",
      "외벽 타일은 손으로 건드리는 순간 낙하할 수 있으므로, 창밖이나 옥상 난간에서 임의로 만져보지 마시고 안전 거리를 유지해야 합니다.",
      "의심 부위의 층수와 위치를 알 수 있는 전경 사진과 지상 확대 사진을 준비하시면 보수 범위를 빠르게 안내받으실 수 있습니다."
    ],
    "primaryDynamicUrl": "/?k=%EB%A7%88%ED%8F%AC%EA%B5%AC-%EC%99%B8%EB%B2%BD%ED%83%80%EC%9D%BC%EB%B3%B4%EC%88%98",
    "anchorText": "마포구 외벽타일보수 상태 점검 안내 확인",
    "wave": "PILOT_TILE",
    "contentStatus": "PUBLISHED",
    "publishedAt": "2026-10-28T16:00:00+09:00"
  },
  {
    "id": "seoul-mapo-district-tile-replace",
    "region": "마포구",
    "regionScope": "seoul",
    "regionLevel": "district",
    "parentDistrict": "마포구",
    "districtSlug": "mapo",
    "service": "외벽타일교체",
    "serviceSlug": "tile-replace",
    "keyword": "마포구-외벽타일교체",
    "path": "/guide/seoul/mapo/tile-replace",
    "title": "마포구 외벽타일교체, 주변 타일까지 확인해야 할까요?",
    "sections": [
      {
        "heading": "탈락된 타일 1장, 주변 타일까지 확인해야 하는 이유",
        "paragraphs": [
          "마포구 도심 골목의 건물에서 타일 하나가 떨어져 나갔을 때, 떨어진 1장만 붙이면 끝날지 주변도 위험한지 판단이 서지 않는 경우가 많습니다.",
          "타일 1장이 떨어졌다는 것은 그 부위의 접착 몰탈이 수분과 진동에 의해 수명을 다했다는 신호이므로, 인접한 타일들도 부착력이 약해졌을 가능성이 높습니다."
        ]
      },
      {
        "heading": "바탕면 콘크리트와 잔여 몰탈의 고정 상태 점검",
        "paragraphs": [
          "타일이 떨어져 나간 자리를 보면 속 콘크리트가 그대로 보이는 경우와 기존 접착 시멘트가 울퉁불퉁하게 남아 있는 경우가 있습니다.",
          "부실하게 남아 있는 잔여 몰탈을 깨끗하게 정리하지 않고 새 타일을 덧붙이면 접착 불량으로 인해 다시 떨어질 위험이 큽니다."
        ]
      },
      {
        "heading": "부분 교체 범위를 결정하는 현장 기준",
        "paragraphs": [
          "주변 타일을 조심스럽게 타진 검사했을 때 밀착 상태가 단단하다면 떨어진 타일 부위만 깔끔하게 교체하는 부분 작업이 가능합니다.",
          "그러나 주변 3~4장의 타일도 함께 들떠 흔들린다면 그 범위를 한 번에 포함하여 교체해야 장기적인 안전이 유지됩니다."
        ]
      },
      {
        "heading": "단종된 타일과 유사 자재 조율을 통한 이질감 완화",
        "paragraphs": [
          "건물 시공 후 수년이 지난 외벽 타일은 동일한 자재가 단종된 경우가 대부분입니다.",
          "따라서 기존 타일의 가로·세로 두께 규격과 가장 유사하면서 건물 톤과 어울리는 대체 자재를 현장 여건에 맞게 조율하여 시공 이질감을 최소화합니다."
        ]
      },
      {
        "heading": "현장 자가 조치 시의 추락 및 2차 낙하 위험",
        "paragraphs": [
          "사다리를 걸쳐놓고 직접 실리콘을 발라 붙이려 하거나 흔들리는 타일을 억지로 떼어내려는 시도는 극도로 위험합니다.",
          "외벽 타일 교체는 로프 시공 기술과 낙하 방지 안전망 등 철저한 안전 조치 속에서만 전문적으로 이루어져야 합니다."
        ]
      },
      {
        "heading": "신속한 교체 상담을 위한 현장 체크 항목",
        "paragraphs": [
          "떨어진 타일 조각이 바닥에 있다면 가로와 세로 치수를 자로 측정해 두시면 자재 수급 파악이 빨라집니다.",
          "또한 떨어진 외벽 위치가 보이는 전체 사진과 지상 보행 공간 유무를 함께 알려주시면 교체 작업 범위를 정확히 상담해 드립니다."
        ]
      }
    ],
    "bodyLines": [
      "마포구 도심 골목의 건물에서 타일 하나가 떨어져 나갔을 때, 떨어진 1장만 붙이면 끝날지 주변도 위험한지 판단이 서지 않는 경우가 많습니다.",
      "타일 1장이 떨어졌다는 것은 그 부위 접착층에 이상이 생겼다는 뜻이므로 인접한 타일들의 고정 상태도 함께 확인해야 합니다.",
      "타일이 탈락한 자리의 잔여 몰탈을 깨끗하게 정리하지 않고 덧붙이면 재탈락 위험이 커지므로 철저한 바탕면 정돈이 필수입니다.",
      "인접 타일의 고정력이 단단하다면 국소 교체로 진행하며, 들뜸이 번진 경우 교체 범위를 합리적으로 조율합니다.",
      "사다리를 이용한 임의 작업은 추락 및 낙하 사고를 유발하므로 반드시 전문 로프 시공팀의 안전한 작업을 거쳐야 합니다.",
      "탈락한 타일 규격과 건물 외벽 사진을 준비하시면 단종 여부 확인 및 유사 자재 조율 범위를 빠르게 상담받으실 수 있습니다."
    ],
    "primaryDynamicUrl": "/?k=%EB%A7%88%ED%8F%AC%EA%B5%AC-%EC%99%B8%EB%B2%BD%ED%83%80%EC%9D%BC%EA%B5%90%EC%B2%B4",
    "anchorText": "마포구 외벽타일교체 작업 범위 안내 확인",
    "wave": "PILOT_TILE",
    "contentStatus": "PUBLISHED",
    "publishedAt": "2026-10-28T16:00:00+09:00"
  },
  {
    "id": "seoul-songpa-district-tile-repair",
    "region": "송파구",
    "regionScope": "seoul",
    "regionLevel": "district",
    "parentDistrict": "송파구",
    "districtSlug": "songpa",
    "service": "외벽타일보수",
    "serviceSlug": "tile-repair",
    "keyword": "송파구-외벽타일보수",
    "path": "/guide/seoul/songpa/tile-repair",
    "title": "송파구 외벽타일보수, 전체 공사 전에 확인할 것은?",
    "sections": [
      {
        "heading": "외벽 전체 교체 견적을 받기 전 반드시 확인할 점",
        "paragraphs": [
          "송파구의 주거지 및 상가 밀집 지역에서 외벽 타일 이상이 발견되었을 때, 전면 재시공이라는 무거운 공사 견적을 먼저 마주하게 되기도 합니다.",
          "그러나 건물 외벽 전체가 손상된 것이 아니라면, 문제가 발생한 국소 영역을 정확히 짚어내어 부분 보수로 해결할 수 있는 여지가 충분히 있습니다."
        ]
      },
      {
        "heading": "부분 보수가 가능한 현장 여건과 상태",
        "paragraphs": [
          "외벽 타일의 들뜸이나 미세 균열이 특정 층이나 창문 하부 등 국소 구역에 집중되어 있는 경우가 여기에 해당합니다.",
          "건물 골조 균열이 심각하지 않고 주변 타일의 고정력이 양호하게 살아있다면 부분 보수만으로도 건물의 안전성을 크게 회복할 수 있습니다."
        ]
      },
      {
        "heading": "합리적인 보수 범위를 정하는 현장 판단 기준",
        "paragraphs": [
          "들뜬 면적의 크기, 빗물 유입 경로, 로프 접근 가능 여부 등을 현장에서 종합적으로 평가하여 작업 범위를 책정합니다.",
          "불필요하게 정상 부위까지 손대지 않고, 탈락 우려가 있는 취약 구역을 우선순위로 두어 보수하는 것이 경제적으로도 현명한 선택입니다."
        ]
      },
      {
        "heading": "로프 접근 방식을 통한 경제적인 타일 보강 공정",
        "paragraphs": [
          "대형 비계 파이프(가설물)나 크레인 진입이 어려운 송파구의 좁은 진입로 건물에서도 로프 접근 방식은 탁월한 기동성을 발휘합니다.",
          "로프 기술자가 들뜬 부위에 직접 접근하여 타일을 안전하게 결속 보강하고 방수 줄눈으로 마감함으로써 공사 부대비용을 획기적으로 줄입니다."
        ]
      },
      {
        "heading": "점검 중 하부 보행자 및 차량 통행 안전 관리",
        "paragraphs": [
          "외벽 작업 현장에서는 지상 안전 관리가 시공 품질 못지않게 중요한 요소입니다.",
          "점검 중에도 하부 주차 차량 이동 조치나 보행자 통제선 설치 등 안전사고 예방을 위한 철저한 현장 관리가 동반되어야 합니다."
        ]
      },
      {
        "heading": "상담 접수 시 필요한 현장 위치 및 사진 정보",
        "paragraphs": [
          "건물의 도로 접면 여부와 타일 이상 부위의 높이를 가늠할 수 있는 원거리 건물 사진 1~2장이면 충분합니다.",
          "현장 사진을 토대로 부분 보수 적합 여부와 대략적인 작업 방향을 사전에 안내받으실 수 있습니다."
        ]
      }
    ],
    "bodyLines": [
      "송파구의 주거지 및 상가 밀집 지역에서 외벽 타일 이상이 발견되었을 때, 전면 재시공이라는 무거운 공사 견적을 먼저 마주하게 되기도 합니다.",
      "그러나 건물 외벽 전체가 손상된 것이 아니라면, 문제가 발생한 국소 영역을 짚어내어 부분 보수로 해결할 수 있는 여지가 충분히 있습니다.",
      "외벽 타일의 들뜸이나 균열이 특정 구역에 국한되어 있다면 부분 보수만으로도 건물의 외벽 안전을 안정적으로 지킬 수 있습니다.",
      "로프 접근 방식을 활용하면 대형 가설물 설치가 어려운 도심 건물에서도 들뜬 구역을 안전하고 경제적으로 보강할 수 있습니다.",
      "외벽 작업 시에는 하부 주차 차량 이동과 보행자 통제선 설치 등 철저한 지상 안전 관리가 필수적으로 수반됩니다.",
      "건물 전경 사진과 타일 이상 부위 사진을 준비해 주시면 현장 방문 전 부분 보수 가능 여부를 합리적으로 상담해 드립니다."
    ],
    "primaryDynamicUrl": "/?k=%EC%86%A1%ED%8C%8C%EA%B5%AC-%EC%99%B8%EB%B2%BD%ED%83%80%EC%9D%BC%EB%B3%B4%EC%88%98",
    "anchorText": "송파구 외벽타일보수 부분 보수 안내 확인",
    "wave": "PILOT_TILE",
    "contentStatus": "PUBLISHED",
    "publishedAt": "2026-10-28T16:00:00+09:00"
  },
  {
    "id": "seoul-songpa-district-tile-replace",
    "region": "송파구",
    "regionScope": "seoul",
    "regionLevel": "district",
    "parentDistrict": "송파구",
    "districtSlug": "songpa",
    "service": "외벽타일교체",
    "serviceSlug": "tile-replace",
    "keyword": "송파구-외벽타일교체",
    "path": "/guide/seoul/songpa/tile-replace",
    "title": "송파구 외벽타일교체, 부분 교체와 전체 교체는 어떻게 결정할까요?",
    "sections": [
      {
        "heading": "타일 탈락 시 부분 교체와 전면 교체의 선택 기준",
        "paragraphs": [
          "송파구 도심 건물 외벽에서 타일이 떨어져 나갔을 때, 전체 리모델링을 해야 할지 떨어진 곳만 부분 교체할지 결정하기란 쉽지 않습니다.",
          "건물 관리자와 소유자에게 가장 중요한 것은 안전을 확실하게 담보하면서도 불필요한 과잉 공사를 피하는 객관적인 기준입니다."
        ]
      },
      {
        "heading": "손상 부위 안쪽 바탕면의 부착 강도 확인",
        "paragraphs": [
          "타일 교체 결정의 핵심은 타일 자체보다 그 안쪽 콘크리트 바탕면의 건강 상태에 있습니다.",
          "바탕면이 빗물 침투로 푸석푸석하게 삭아 부스러지는지, 아니면 단단한 구조체 상태를 유지하고 있는지에 따라 시공의 범위와 방식이 달라집니다."
        ]
      },
      {
        "heading": "부분 교체를 결정하는 객관적인 조건과 범위",
        "paragraphs": [
          "탈락 면적이 외벽 전체 면적의 일부분에 불과하고 인접 타일들이 바탕면에 단단히 고정되어 있다면 부분 교체가 가장 적절합니다.",
          "단, 탈락 부위 주변으로 물이 스며든 흔적(백화나 얼룩)이 넓게 퍼져 있다면 인접 타일까지 포함해 안전 범위를 설정해야 합니다."
        ]
      },
      {
        "heading": "재탈락 우려를 줄이는 단계별 바탕면 정리와 교체 시공",
        "paragraphs": [
          "성공적인 부분 교체는 낡고 부실한 접착층을 말끔히 긁어내는 바탕면 청소부터 출발합니다.",
          "외벽 전용 내수성 접착재를 고르게 도포하여 단차 없이 새 타일을 압착 시공하고, 방수 줄눈재로 수분 유입로를 차단합니다."
        ]
      },
      {
        "heading": "고소 부위 임의 자가 조작 금지 및 안전 수칙",
        "paragraphs": [
          "외벽 타일 탈락 부위 안쪽을 직접 긴 막대나 뾰족한 도구로 쑤셔보거나 건드리는 행위는 인접 타일의 연쇄 탈락을 부를 수 있습니다.",
          "안전 진단과 탈락 위험 타일 제거는 반드시 전문 로프 작업 기술자가 현장 안전 조치 하에 수행해야 합니다."
        ]
      },
      {
        "heading": "현장 사진 촬영 팁과 사전 상담 체크포인트",
        "paragraphs": [
          "떨어진 타일 구역이 건물 전체 중 어느 층에 있는지 확인할 수 있는 사진과 바닥에서 타일 안쪽 면이 보이도록 찍은 사진을 준비해 주세요.",
          "타일의 가로와 세로 대략적인 크기 정보를 함께 알려주시면 교체 가능한 대체 자재 여부를 사전에 빠르게 검토해 드립니다."
        ]
      }
    ],
    "bodyLines": [
      "송파구 도심 건물 외벽에서 타일이 떨어져 나갔을 때, 전체 리모델링을 해야 할지 떨어진 곳만 부분 교체할지 결정하기란 쉽지 않습니다.",
      "건물 관리자와 소유자에게 가장 중요한 것은 안전을 확보하면서도 불필요한 과잉 공사를 피하는 객관적인 기준입니다.",
      "타일 교체 여부의 핵심은 안쪽 콘크리트 바탕면의 부착 강도와 주변 타일의 고정 상태를 면밀히 확인하는 데 있습니다.",
      "손상 구역이 국소적이고 주변 타일이 안정적이라면 바탕면을 정돈한 후 필요한 부위만 선별 교체하는 것이 가장 합리적입니다.",
      "고소 부위 타일을 임의로 건드리거나 뜯어내려 하면 추가 낙하를 유발하므로 반드시 전문 로프 시공팀에 맡겨야 합니다.",
      "탈락한 타일 규격과 건물 전체 사진을 준비하시면 부분 교체 적합성과 예상 작업 범위를 신속하게 상담받으실 수 있습니다."
    ],
    "primaryDynamicUrl": "/?k=%EC%86%A1%ED%8C%8C%EA%B5%AC-%EC%99%B8%EB%B2%BD%ED%83%80%EC%9D%BC%EA%B5%90%EC%B2%B4",
    "anchorText": "송파구 외벽타일교체 공사 기준 안내 확인",
    "wave": "PILOT_TILE",
    "contentStatus": "PUBLISHED",
    "publishedAt": "2026-10-28T16:00:00+09:00"
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
