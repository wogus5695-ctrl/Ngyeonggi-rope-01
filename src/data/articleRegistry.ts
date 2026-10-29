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
export type PublicationWave = 'WAVE_1' | 'WAVE_2' | 'WAVE_3' | 'PILOT_TILE' | 'EXPANSION_TILE_2';
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
  },
  {
    "id": "seoul-seocho-district-tile-repair",
    "region": "서초구",
    "regionScope": "seoul",
    "regionLevel": "district",
    "parentDistrict": "서초구",
    "districtSlug": "seocho",
    "service": "외벽타일보수",
    "serviceSlug": "tile-repair",
    "keyword": "서초구-외벽타일보수",
    "path": "/guide/seoul/seocho/tile-repair",
    "title": "서초구 외벽타일보수, 외벽 타일 들뜸을 발견했다면 어떤 상태부터 확인해야 할까요?",
    "sections": [
      {
        "heading": "서초구 빌딩과 주거지 외벽 타일 들뜸 현상의 초기 징후",
        "paragraphs": [
          "서초구의 오피스 빌딩이나 서초·반포·방배동 일대 주거용 건물 외벽에서 타일이 불룩하게 솟아오르는 배부름 현상이나 미세한 이격을 발견하는 경우가 있습니다.",
          "외벽 타일 들뜸은 표면의 마감재와 골조 콘크리트 사이 접착층이 박리되면서 시작되며, 방치할 경우 갑작스러운 낙하 사고로 이어질 수 있어 초기 진단이 중요합니다."
        ]
      },
      {
        "heading": "타격음과 육안 관찰을 통한 들뜸 상태 1차 점검 원리",
        "paragraphs": [
          "타일의 건전성을 판단하는 가장 기초적인 진단 방법은 전문 타음봉으로 표면을 가볍게 굴리거나 두드려 공명음을 확인하는 타격음 검사입니다.",
          "바탕면에 단단히 밀착된 타일은 맑고 경쾌한 금속성 소리가 나지만, 속이 비어 있는 들뜬 타일은 둔탁하고 텅 빈 울림(공명음)이 발생하여 육안으로 보이지 않는 박리 구역을 찾아낼 수 있습니다."
        ]
      },
      {
        "heading": "들뜸 발생 면적과 인접 줄눈 탈락 범위 파악",
        "paragraphs": [
          "보수 범위를 결정하려면 한두 장의 국소적 들뜸인지, 아니면 주변 줄눈(메지) 탈락과 균열을 동반하며 사방으로 번지고 있는 상태인지 경계를 명확히 구분해야 합니다.",
          "인접 줄눈이 이미 탈락하여 틈이 벌어져 있다면 빗물이 계속해서 유입되어 하부 타일까지 연쇄적으로 박리될 위험이 매우 높습니다."
        ]
      },
      {
        "heading": "주입식 에폭시 고정 등 비파괴 부분 보수 적용 조건",
        "paragraphs": [
          "타일 자체에 균열이나 파손이 없고 콘크리트 골조와 모르타르 접착층 사이만 부분적으로 들뜬 상태라면 굳이 타일을 뜯어내지 않고도 보수가 가능합니다.",
          "줄눈 틈새를 통해 고강도 외벽 전용 에폭시 수지를 정밀 주입하고 앵커 핀으로 압착 고정하는 주입식 공법을 적용하면 외관 손상 없이 안전성을 회복할 수 있습니다."
        ]
      },
      {
        "heading": "고소 부위 임의 자가 조작 금지 및 안전 수칙",
        "paragraphs": [
          "2층 이상의 고소 부위에 들뜬 타일이 보인다고 해서 창밖으로 몸을 내밀거나 사다리에 올라 긴 막대로 건드려보는 행위는 극도로 위험합니다.",
          "약해진 타일은 작은 자극에도 한꺼번에 쏟아져 내릴 수 있으므로, 하부에 보행자 통행을 제한하는 안전 라인을 먼저 치고 전문 로프 기술자에게 점검을 맡겨야 합니다."
        ]
      },
      {
        "heading": "서초구 현장 상태 전달 팁과 사전 진단 준비",
        "paragraphs": [
          "지상의 안전한 거리에서 건물 전체 층수와 타일 들뜸 부위가 한눈에 들어오는 원경 사진을 촬영해 주시면 작업 환경 분석에 큰 도움이 됩니다.",
          "건물 하부에 주차장이나 보행자 인도, 차도가 인접해 있는지 현장 여건을 함께 공유해 주시면 안전 조치 계획과 로프 진단 일정을 신속히 수립해 드립니다."
        ]
      }
    ],
    "bodyLines": [
      "서초구 빌딩과 주거 건물 외벽에서 타일 들뜸이나 배부름이 보인다면 낙하 사고를 예방하기 위한 초기 진단이 필요합니다.",
      "타음봉을 활용한 타격음 점검을 통해 표면 뒤쪽 빈 공간의 유무와 정확한 박리 위치를 판별합니다.",
      "단순 국소 들뜸인지 인접 줄눈 탈락을 동반한 광범위한 박리인지 확인하여 공사 범위를 획정합니다.",
      "타일 표면이 온전한 경우 특수 에폭시 주입과 핀닝 공법을 통해 타일 철거 없이 견고하게 고정할 수 있습니다.",
      "고소 부위 들뜬 타일을 임의로 건드리면 연쇄 낙하를 유발하므로 즉시 하부 안전을 확보하고 전문가에게 의뢰해야 합니다.",
      "건물 전체 전경 사진과 하부 통행 여건 정보를 준비하시면 서초구 현장에 최적화된 로프 진단을 신속히 받아보실 수 있습니다."
    ],
    "primaryDynamicUrl": "/?k=%EC%84%9C%EC%B4%88%EA%B5%AC-%EC%99%B8%EB%B2%BD%ED%83%80%EC%9D%BC%EB%B3%B4%EC%88%98",
    "anchorText": "서초구 외벽타일보수 전문 점검 및 보수 안내 확인",
    "wave": "EXPANSION_TILE_2",
    "contentStatus": "PUBLISHED",
    "publishedAt": "2026-10-28T17:00:00+09:00"
  },
  {
    "id": "seoul-seocho-district-tile-replace",
    "region": "서초구",
    "regionScope": "seoul",
    "regionLevel": "district",
    "parentDistrict": "서초구",
    "districtSlug": "seocho",
    "service": "외벽타일교체",
    "serviceSlug": "tile-replace",
    "keyword": "서초구-외벽타일교체",
    "path": "/guide/seoul/seocho/tile-replace",
    "title": "서초구 외벽타일교체, 깨진 외벽 타일을 부분 교체할 때 주변 타일까지 확인해야 하는 이유",
    "sections": [
      {
        "heading": "깨진 타일 한 장 뒤에 숨어있는 바탕면 손상과 충격 전파",
        "paragraphs": [
          "서초구 상가나 빌딩 외벽에서 깨진 타일 한 장을 발견했을 때, 단순히 그 타일 하나만 충격을 받아 파손되었다고 단정하기는 어렵습니다.",
          "외부 충격이나 건물의 미세 거동, 바탕 콘크리트 수축으로 타일이 깨질 때는 이미 인접한 주변 타일의 접착면까지 진동과 응력이 전파되어 함께 분리되었을 가능성이 큽니다."
        ]
      },
      {
        "heading": "줄눈 틈새 빗물 유입으로 인한 인접 부착력 약화",
        "paragraphs": [
          "깨진 타일 틈새와 벌어진 줄눈 사이로는 강우 시마다 빗물이 스며들어 타일 뒤편 붙임 모르타르를 적시게 됩니다.",
          "지속적인 수분 유입은 접착층을 중성화시키고 백화 현상을 일으키며, 겉보기에 멀쩡해 보이는 주변 타일까지 바탕면에서 완전히 떨어져 나가게 만드는 원인이 됩니다."
        ]
      },
      {
        "heading": "안전 반경 확보를 위한 인접 타일 건전성 진단",
        "paragraphs": [
          "파손된 타일만 무리하게 떼어내려 하면 철거 시 발생하는 충격과 진동으로 인해 바로 옆에 붙어 있던 헐거운 타일이 갑자기 쏟아질 수 있습니다.",
          "따라서 교체 작업을 시작하기 전에 파손 부위를 중심으로 최소 1~2열 이상의 인접 타일을 전수 타음 점검하여 안전 반경을 확보하는 것이 필수적입니다."
        ]
      },
      {
        "heading": "손상 부위 철거와 바탕면 강화 후 맞춤형 교체 시공",
        "paragraphs": [
          "안전 진단 후 탈락 위험이 확인된 타일과 깨진 타일을 안전하게 걷어내고, 부실해진 모르타르 잔재를 말끔히 연마하여 단단한 골조 바탕면을 드러냅니다.",
          "외벽 전용 방수 접착재를 고르게 도포한 후 규격에 맞는 새 타일을 정밀 압착 시공하고, 탄성 방수 줄눈재로 빗물 재유입을 차단합니다."
        ]
      },
      {
        "heading": "깨진 타일 방치 시 보행자 안전사고 위험과 관리 책임",
        "paragraphs": [
          "서초구처럼 유동 인구와 차량 통행이 많은 도심에서는 고소 부위 타일 파편 하나가 떨어져도 심각한 인명 및 대물 피해를 초래합니다.",
          "건물 관리자와 소유자는 외벽 파손 인지 즉시 하부 안전 통제를 실시하고, 신속하게 전문 교체 시공을 진행하여 2차 안전사고를 방지해야 합니다."
        ]
      },
      {
        "heading": "현장 사진 촬영 및 타일 치수 실측 사전 접수 안내",
        "paragraphs": [
          "깨진 타일의 근접 사진과 함께 주변 1~2미터 반경이 함께 나오는 사진을 준비해 주시면 교체 범위 산정에 큰 도움이 됩니다.",
          "바닥에 떨어진 파편이나 여분의 타일이 있다면 가로, 세로 치수를 자로 측정해 알려주실 경우 유사한 대체 규격 자재를 미리 확인해 드립니다."
        ]
      }
    ],
    "bodyLines": [
      "깨진 타일 한 장의 파손은 인접 타일의 접착면까지 균열과 충격이 전달되었을 가능성을 내포합니다.",
      "균열 틈으로 스며든 빗물은 주변 모르타르를 약화시켜 인접 타일까지 연쇄 탈락 위험에 노출시킵니다.",
      "철거 전 파손 구역 주변 타일을 정밀 타음 점검하여 함께 교체해야 할 안전 범위를 정확히 판정합니다.",
      "취약해진 하지 모르타르를 깨끗이 정리하고 외벽 전용 고성능 접착재와 방수 줄눈재로 부분 교체를 시공합니다.",
      "도심지 보행로 인접 건물은 파편 낙하 위험이 크므로 발견 즉시 안전 구역을 설정하고 신속히 교체해야 합니다.",
      "파손 부위 전경 사진과 타일 실측 규격을 전달해 주시면 서초구 현장에 적합한 자재와 시공 일정을 즉시 안내해 드립니다."
    ],
    "primaryDynamicUrl": "/?k=%EC%84%9C%EC%B4%88%EA%B5%AC-%EC%99%B8%EB%B2%BD%ED%83%80%EC%9D%BC%EA%B5%90%EC%B2%B4",
    "anchorText": "서초구 외벽타일교체 시공 절차 및 견적 안내 확인",
    "wave": "EXPANSION_TILE_2",
    "contentStatus": "PUBLISHED",
    "publishedAt": "2026-10-28T17:00:00+09:00"
  },
  {
    "id": "seoul-yeongdeungpo-district-tile-repair",
    "region": "영등포구",
    "regionScope": "seoul",
    "regionLevel": "district",
    "parentDistrict": "영등포구",
    "districtSlug": "yeongdeungpo",
    "service": "외벽타일보수",
    "serviceSlug": "tile-repair",
    "keyword": "영등포구-외벽타일보수",
    "path": "/guide/seoul/yeongdeungpo/tile-repair",
    "title": "영등포구 외벽타일보수, 상가 건물 외벽 타일의 균열과 들뜸, 부분 보수 가능성 판단 기준",
    "sections": [
      {
        "heading": "영등포 상권 상가 건물의 환경적 특성과 타일 균열 원인",
        "paragraphs": [
          "영등포역, 문래동, 당산동 일대의 상가 건물들은 도로변 차량 통행에 따른 지속적인 미세 진동과 빈번한 실내외 온도 변화를 겪습니다.",
          "이러한 도심 환경에서는 외벽 마감 타일과 모르타르 층 사이에 피로 하중이 누적되어 미세 균열과 부분 들뜸이 상대적으로 쉽게 진행될 수 있습니다."
        ]
      },
      {
        "heading": "보행자 통행 구간의 외벽 타일 안전성 평가 기준",
        "paragraphs": [
          "상가 1층 점포 출입구 상부나 보행로와 직접 맞닿은 외벽은 작은 타일 한 조각의 탈락도 매우 위험한 사고로 이어집니다.",
          "따라서 외벽 타일에 균열이나 들뜸 징후가 보인다면 단순 외관상의 문제를 넘어 지상 보행자 안전을 최우선으로 두고 위험도를 즉각 평가해야 합니다."
        ]
      },
      {
        "heading": "전체 철거 대신 부분 보수가 적합한 기술적 조건",
        "paragraphs": [
          "타일 표면 자체의 파손이 심하지 않고 들뜸 구역이 특정 층이나 국소 부위에 한정되어 있다면 전체 리모델링 대신 부분 보수가 경제적입니다.",
          "단, 타일 뒤편 콘크리트 골조 바탕면이 부스러지지 않고 견고한 상태를 유지하고 있어야 수지 주입식 부분 보수의 접착 강도를 기대할 수 있습니다."
        ]
      },
      {
        "heading": "부분 핀닝 앵커 공법과 특수 수지 주입을 통한 보강 원리",
        "paragraphs": [
          "부분 보수는 타일 줄눈부에 미세 천공을 실시한 후 내후성과 접착력이 뛰어난 에폭시 수지를 배면에 가압 주입하는 방식으로 진행됩니다.",
          "필요에 따라 스테인리스 핀을 함께 매립하여 물리적인 결합력을 높여줌으로써 타일이 구조체에 영구적으로 일체화되도록 보강합니다."
        ]
      },
      {
        "heading": "상가 영업 중 임의 터치 금지 및 보행자 안전 통제선 설치",
        "paragraphs": [
          "상가 영업 중 손님이나 관리자가 들뜬 타일을 직접 손으로 밀어보거나 뾰족한 도구로 찔러보는 행동은 절대 삼가야 합니다.",
          "진동으로 인해 타일이 갑자기 쏟아질 수 있으므로, 전문가가 도착하기 전까지 하부에 안전 꼬깔이나 통제 테이프를 설치해 통행을 우회시켜야 합니다."
        ]
      },
      {
        "heading": "영등포 상가 외벽 진단 요청 시 필요한 사전 정보",
        "paragraphs": [
          "상가 건물 전경과 함께 타일 균열이나 들뜸이 관찰되는 층수의 위치를 원경 사진으로 남겨두시면 견적 산정에 매우 유리합니다.",
          "상가 간판이나 어닝(차양), 전선 등이 외벽에 복잡하게 얽혀 있는 경우 이를 사진에 함께 담아 공유해 주시면 최적의 로프 시공 계획을 수립해 드립니다."
        ]
      }
    ],
    "bodyLines": [
      "영등포 상가 밀집 지역 외벽 타일은 도로 진동과 기후 요인으로 인해 미세 균열과 접착층 들뜸이 진행될 수 있습니다.",
      "보행자 출입이 잦은 상가 외벽의 특성상 타일 들뜸은 즉각적인 안전 조치와 상태 점검이 필요한 사안입니다.",
      "골조 바탕면이 단단하고 파손이 국소 부위에 집중되어 있다면 전체 교체 없이 부분 보수로 안전성을 확보할 수 있습니다.",
      "에폭시 수지 가압 주입과 스테인리스 핀 고정 공법을 결합하여 타일과 콘크리트 벽체를 견고하게 일체화합니다.",
      "상가 관리자나 임차인이 들뜬 타일을 임의로 건드리지 말고 하부 보행자 안전 라인을 우선 설치해야 합니다.",
      "건물 전경 및 간판·어닝 주변 외벽 사진을 준비하시면 영등포 상가 현장에 맞춘 전문 로프 진단을 신속히 진행해 드립니다."
    ],
    "primaryDynamicUrl": "/?k=%EC%98%81%EB%93%B1%ED%8F%AC%EA%B5%AC-%EC%99%B8%EB%B2%BD%ED%83%80%EC%9D%BC%EB%B3%B4%EC%88%98",
    "anchorText": "영등포구 외벽타일보수 상가 외벽 진단 및 보수 안내 확인",
    "wave": "EXPANSION_TILE_2",
    "contentStatus": "PUBLISHED",
    "publishedAt": "2026-10-28T17:00:00+09:00"
  },
  {
    "id": "seoul-yeongdeungpo-district-tile-replace",
    "region": "영등포구",
    "regionScope": "seoul",
    "regionLevel": "district",
    "parentDistrict": "영등포구",
    "districtSlug": "yeongdeungpo",
    "service": "외벽타일교체",
    "serviceSlug": "tile-replace",
    "keyword": "영등포구-외벽타일교체",
    "path": "/guide/seoul/yeongdeungpo/tile-replace",
    "title": "영등포구 외벽타일교체, 외벽 타일 교체 공사의 범위를 결정하기 전에 확인할 사항",
    "sections": [
      {
        "heading": "상가 및 근린생활시설의 외벽 타일 교체 범위 설정의 중요성",
        "paragraphs": [
          "영등포구의 상가 및 근린생활시설 건물에서 타일 교체를 검토할 때, 공사 범위를 과도하게 잡으면 영업 중단과 공사비 부담이 급증하게 됩니다.",
          "따라서 실제 탈락 위험이 있는 부위와 건전한 부위를 명확히 구분하여 불필요한 공사를 줄이고 안전성을 극대화하는 정밀 진단이 선행되어야 합니다."
        ]
      },
      {
        "heading": "외벽 구조체 콘크리트 바탕면의 풍화 및 균열 상태 확인",
        "paragraphs": [
          "교체 범위를 확정하기 전, 타일이 떨어진 자리 안쪽 콘크리트 골조의 부식 상태를 반드시 점검해야 합니다.",
          "바탕면 모르타르가 모래처럼 부스러지거나 내부 철근이 녹슬어 팽창한 상태라면 단순 타일 교체에 앞서 콘크리트 중성화 방지 및 단면 복구 작업이 선행되어야 합니다."
        ]
      },
      {
        "heading": "상부 누수 경로와 외벽 줄눈 노후화 상관관계 진단",
        "paragraphs": [
          "외벽 타일 탈락의 대다수는 옥상 난간(두겁)이나 창호 주변 실리콘 코킹 불량으로 인해 스며든 빗물이 타일 배면을 적시면서 일어납니다.",
          "상부 누수로를 그대로 둔 채 타일만 새로 붙이면 수개월 내 다시 들뜨거나 떨어지므로 누수 유입 구간까지 공사 범위에 포함하여 확인해야 합니다."
        ]
      },
      {
        "heading": "부분 교체 범위의 구획 설정과 안전 마감 공정",
        "paragraphs": [
          "교체 대상 구역이 정해지면 그라인더 커팅으로 주변 정상 타일과의 경계를 분리하여 철거 충격이 전파되지 않도록 조치합니다.",
          "외벽 전용 프라이머 도포와 방수 접착재 시공을 통해 새 타일을 평탄하게 부착하고, 발수성 줄눈재로 마감하여 기밀성을 완성합니다."
        ]
      },
      {
        "heading": "고소 로프 교체 작업 시 인도 보행자 낙하물 방호 조치",
        "paragraphs": [
          "영등포 상가 거리에서 외벽 타일 교체 작업을 진행할 때는 타일 잔재나 공구가 지상으로 떨어지지 않도록 철저한 방호망을 설치해야 합니다.",
          "로프 시공 기술자의 작업 구간 하부에 신호수를 배치하고 보행자 안전 통로를 확보하여 일체의 안전사고를 원천 차단합니다."
        ]
      },
      {
        "heading": "외벽 타일 교체 견적 산정을 위한 사진 촬영 체크포인트",
        "paragraphs": [
          "건물 전경 사진과 함께 타일이 탈락하거나 손상된 부위를 2~3미터 거리에서 촬영한 사진을 확보해 주시면 빠른 범위 산정이 가능합니다.",
          "바탕면의 노출 상태와 주변 줄눈 균열 여부가 잘 드러나도록 촬영해 전달해 주시면 합리적이고 정확한 교체 견적을 안내해 드립니다."
        ]
      }
    ],
    "bodyLines": [
      "영등포 상가 건물의 타일 교체는 영업 손실과 비용을 줄이기 위해 정확한 위험 범위를 획정하는 것이 핵심입니다.",
      "타일 뒤편 콘크리트 골조의 풍화와 철근 부식 여부를 확인하여 하지 보강의 필요성을 사전에 판단합니다.",
      "옥상 두겁 및 창틀 주변의 누수로를 함께 점검하지 않으면 새 타일 또한 빗물 침투로 재탈락할 수 있습니다.",
      "안전 커팅으로 인접 타일 손상을 막고 외벽 전용 접착재와 방수 줄눈으로 견고한 부분 교체를 완성합니다.",
      "유동 인구가 많은 도심 현장 특성에 맞춰 낙하물 방호망과 하부 신호수 배치를 철저히 준수합니다.",
      "건물 전경 및 손상 부위 근접 사진을 준비하시면 영등포구 현장에 적합한 최적의 공사 범위를 즉시 제안해 드립니다."
    ],
    "primaryDynamicUrl": "/?k=%EC%98%81%EB%93%B1%ED%8F%AC%EA%B5%AC-%EC%99%B8%EB%B2%BD%ED%83%80%EC%9D%BC%EA%B5%90%EC%B2%B4",
    "anchorText": "영등포구 외벽타일교체 범위 진단 및 교체 공사 안내 확인",
    "wave": "EXPANSION_TILE_2",
    "contentStatus": "PUBLISHED",
    "publishedAt": "2026-10-28T17:00:00+09:00"
  },
  {
    "id": "seoul-seongdong-district-tile-repair",
    "region": "성동구",
    "regionScope": "seoul",
    "regionLevel": "district",
    "parentDistrict": "성동구",
    "districtSlug": "seongdong",
    "service": "외벽타일보수",
    "serviceSlug": "tile-repair",
    "keyword": "성동구-외벽타일보수",
    "path": "/guide/seoul/seongdong/tile-repair",
    "title": "성동구 외벽타일보수, 노후 외벽 타일의 들뜸과 탈락 우려, 점검 시 알아야 할 사항",
    "sections": [
      {
        "heading": "성수·성동 구도심 붉은벽돌 및 타일 외벽의 노후화 양상",
        "paragraphs": [
          "성수동, 옥수동, 금호동 일대의 노후 상가나 다세대 주택은 준공 후 수십 년이 경과하면서 외벽 타일 마감재가 노후화된 경우가 흔합니다.",
          "사계절 온도 변화에 따른 수축·팽창과 외벽 줄눈의 균열로 빗물이 침투하면서 타일을 잡아주던 모르타르 접착력이 서서히 약화되는 특징을 보입니다."
        ]
      },
      {
        "heading": "외벽 타일 들뜸이 탈락으로 이어지는 진행 단계",
        "paragraphs": [
          "타일 들뜸은 처음에는 눈에 띄지 않다가 겨울철 한파에 스며든 수분이 얼어붙으며 부피가 팽창할 때 급격히 진행됩니다.",
          "얼음이 녹는 봄철 해빙기가 되면 접착력이 상실된 타일이 껍질처럼 불룩 솟아오르는 배부름 현상이 나타나며 작은 바람이나 진동에도 갑자기 떨어져 내립니다."
        ]
      },
      {
        "heading": "전문 로프 타상 점검의 필요성과 일반 육안 검사의 한계",
        "paragraphs": [
          "지상에서 망원경이나 육안으로 외벽을 올려다보는 것만으로는 타일 뒷면의 박리 여부를 결코 정확하게 확인할 수 없습니다.",
          "전문 로프 기술자가 외벽에 직접 하강하여 타음봉으로 타일 하나하나를 두드려보고 흔들림을 확인하는 타상 점검을 거쳐야만 실제 탈락 위험 부위를 누락 없이 찾아냅니다."
        ]
      },
      {
        "heading": "에폭시 수지 주입 핀닝을 통한 노후 타일 보존 보수",
        "paragraphs": [
          "특유의 붉은 타일 질감이나 건축물의 외관 분위기를 보존해야 하는 경우, 타일을 전부 깨지 않고 보존하는 공법이 선호됩니다.",
          "타일 줄눈부에 정밀하게 천공을 내고 저점도 에폭시 수지를 가압 주입한 후 스테인리스 앵커 핀을 삽입하면 기존 외관을 유지하면서도 완벽에 가까운 고정력을 회복합니다."
        ]
      },
      {
        "heading": "들뜬 타일을 건물주가 직접 떼어내려 할 때의 치명적 위험",
        "paragraphs": [
          "외벽에 들뜬 타일이 위태롭게 붙어 있다고 해서 창문 밖으로 손을 뻗어 직접 떼어내려 하거나 쇠막대로 긁어내는 것은 극도로 위험한 행동입니다.",
          "한 장을 건드리는 순간 그 압력으로 인해 주변 타일 수십 장이 한꺼번에 쏟아져 내려 작업자 추락이나 하부 행인 압사 사고를 유발할 수 있습니다."
        ]
      },
      {
        "heading": "성동구 외벽 점검 의뢰를 위한 현장 정보 기록 방법",
        "paragraphs": [
          "대략적인 건물 준공 연도와 외벽 타일 형태(붉은 타일, 자기질 타일 등), 실내 누수 발생 이력을 미리 파악해 두시면 현장 진단이 훨씬 수월합니다.",
          "건물 전경 사진과 골목길 주차 환경을 촬영하여 보내주시면 성동구 도심 환경에 최적화된 로프 진단 일정을 신속히 확정해 드립니다."
        ]
      }
    ],
    "bodyLines": [
      "성동구 구도심 노후 건축물 외벽 타일은 기후 변화와 접착층 열화로 인해 들뜸과 탈락 위험이 상존합니다.",
      "겨울철 동결융해를 거치며 박리된 타일은 해빙기에 접어들며 갑작스럽게 낙하할 가능성이 높아집니다.",
      "지상 육안 관찰의 한계를 극복하기 위해 전문 로프 하강을 통한 정밀 타상 진단이 필수적입니다.",
      "외관을 보존해야 하는 노후 타일은 에폭시 수지 주입과 앵커 핀 고정을 통해 철거 없이 구조적 일체화를 이룹니다.",
      "고소 부위 들뜬 타일을 임의로 떼어내려 하면 연쇄 낙하 사고가 발생하므로 반드시 전문 로프팀에 위임해야 합니다.",
      "건물 연식과 외벽 전경 사진을 준비하시면 성동구 특성에 맞춘 신속하고 안전한 방문 점검을 지원합니다."
    ],
    "primaryDynamicUrl": "/?k=%EC%84%B1%EB%8F%99%EA%B5%AC-%EC%99%B8%EB%B2%BD%ED%83%80%EC%9D%BC%EB%B3%B4%EC%88%98",
    "anchorText": "성동구 외벽타일보수 노후 외벽 안전 점검 안내 확인",
    "wave": "EXPANSION_TILE_2",
    "contentStatus": "PUBLISHED",
    "publishedAt": "2026-10-28T17:00:00+09:00"
  },
  {
    "id": "seoul-seongdong-district-tile-replace",
    "region": "성동구",
    "regionScope": "seoul",
    "regionLevel": "district",
    "parentDistrict": "성동구",
    "districtSlug": "seongdong",
    "service": "외벽타일교체",
    "serviceSlug": "tile-replace",
    "keyword": "성동구-외벽타일교체",
    "path": "/guide/seoul/seongdong/tile-replace",
    "title": "성동구 외벽타일교체, 기존 타일과 같은 자재가 없다면 어떤 기준으로 교체할까요?",
    "sections": [
      {
        "heading": "단종된 외벽 타일 문제와 부분 교체의 현실적 고민",
        "paragraphs": [
          "성동구의 오래된 건물 외벽 타일이 탈락했을 때 가장 큰 난관은 수십 년 전 생산된 동일 규격과 색상의 타일이 대부분 단종되었다는 점입니다.",
          "똑같은 자재가 없다고 해서 외벽 전체를 교체하기에는 비용 부담이 막대하므로, 유사 자재를 활용한 합리적인 부분 교체 기준을 마련해야 합니다."
        ]
      },
      {
        "heading": "치수(규격) 일치와 두께 맞춤의 최우선 원칙",
        "paragraphs": [
          "대체 타일을 선정할 때 색상보다 훨씬 더 중요한 기술적 기준은 가로, 세로 치수와 두께의 정확한 일치입니다.",
          "기존 타일과 두께가 맞지 않아 단차가 발생하면 비가 올 때 튀어나온 모서리에 빗물이 고여 침투하므로, 단차 없는 규격 매칭이 장기 내구성을 좌우합니다."
        ]
      },
      {
        "heading": "주변 타일과의 색상 톤 매칭 및 패턴형 배치 전략",
        "paragraphs": [
          "단종된 자재를 대체할 때는 기존 벽체와 채도 및 명도가 유사한 무광 매트 타일을 선별하여 이질감을 최소화합니다.",
          "어설프게 한두 장만 덧대기보다 손상 구역을 사각형 블록 형태로 정돈하여 시공하면 자연스러운 포인트 마감처럼 보이도록 완성도를 높일 수 있습니다."
        ]
      },
      {
        "heading": "노후 바탕면 제거 및 신구 접착 계면 방수 보강",
        "paragraphs": [
          "타일 교체 시 기존의 풍화된 모르타르 잔재를 깨끗이 제거하지 않고 새 본드를 덧바르면 조기 박리의 원인이 됩니다.",
          "콘크리트 면까지 정밀 치핑 후 방수 프라이머를 도포하고 내수성이 뛰어난 고탄성 에폭시 접착재를 사용하여 구벽체와 새 타일을 견고하게 결합합니다."
        ]
      },
      {
        "heading": "사다리차 진입 불가 골목길의 로프 교체 시공 안전",
        "paragraphs": [
          "성동구 주택가나 좁은 상가 골목길은 고소작업차나 비계 설치가 불가능한 입지 여건이 많습니다.",
          "전문 로프 접근 기술을 활용하면 좁은 골목길에서도 민원이나 통행 방해 없이 안전망을 갖추고 정밀한 타일 교체 작업을 수행할 수 있습니다."
        ]
      },
      {
        "heading": "대체 타일 사전 검토를 위한 타일 크기 실측 팁",
        "paragraphs": [
          "탈락한 타일 조각을 수거하여 가로, 세로, 두께(mm 단위)를 자와 함께 사진 찍어 전송해 주시면 자재 수급 가능 여부를 빠르게 검토해 드립니다.",
          "자연광 아래에서 촬영한 건물 외벽 전체 사진을 함께 공유해 주실 경우 이색감을 최소화할 수 있는 대체 자재 샘플을 사전 제안해 드립니다."
        ]
      }
    ],
    "bodyLines": [
      "성동구 노후 타일 단종 시 전체 교체 대신 규격과 내구성을 고려한 부분 교체 기준을 세우는 것이 실용적입니다.",
      "색상보다 타일의 치수와 두께를 우선 맞춰 단차로 인한 빗물 고임 하자를 방지해야 합니다.",
      "유사한 톤의 자재 선정과 구획별 정돈 시공을 통해 외관의 이질감을 최소화합니다.",
      "풍화된 바탕면 모르타르를 완전히 제거하고 고기능 방수 접착재로 신구 접착 계면을 보강합니다.",
      "중장비 진입이 어려운 좁은 골목길 환경에서도 전문 로프 시공을 통해 안전하고 정밀하게 교체합니다.",
      "탈락 타일의 치수 실측 사진과 외벽 전경을 전달하시면 성동구 현장에 맞는 대체 자재와 교체 방안을 안내해 드립니다."
    ],
    "primaryDynamicUrl": "/?k=%EC%84%B1%EB%8F%99%EA%B5%AC-%EC%99%B8%EB%B2%BD%ED%83%80%EC%9D%BC%EA%B5%90%EC%B2%B4",
    "anchorText": "성동구 외벽타일교체 자재 매칭 및 부분 교체 안내 확인",
    "wave": "EXPANSION_TILE_2",
    "contentStatus": "PUBLISHED",
    "publishedAt": "2026-10-28T17:00:00+09:00"
  },
  {
    "id": "seoul-nowon-district-tile-repair",
    "region": "노원구",
    "regionScope": "seoul",
    "regionLevel": "district",
    "parentDistrict": "노원구",
    "districtSlug": "nowon",
    "service": "외벽타일보수",
    "serviceSlug": "tile-repair",
    "keyword": "노원구-외벽타일보수",
    "path": "/guide/seoul/nowon/tile-repair",
    "title": "노원구 외벽타일보수, 전체 교체가 부담될 때 외벽 타일 부분 보수를 검토하는 기준",
    "sections": [
      {
        "heading": "노원구 주거지 및 근생 건물의 외벽 타일 노후 관리 부담",
        "paragraphs": [
          "상계동, 중계동, 공릉동 등 노원구 일대의 구축 상가 및 복합 주거 건물은 연식이 쌓이면서 외벽 타일 유지보수 시기가 도래하고 있습니다.",
          "하지만 건물 전체 외벽 타일을 전면 교체하거나 리모델링하는 것은 막대한 비용과 장기적인 공사 일정으로 인해 관리단과 소유자에게 큰 부담이 됩니다."
        ]
      },
      {
        "heading": "전면 교체 대신 부분 보수로 해결할 수 있는 객관적 상태",
        "paragraphs": [
          "외벽 타일의 들뜸이 벽면 전체로 퍼지지 않고 옥상 난간 하부나 창호 주위, 특정 층 일부에만 국소적으로 머물러 있다면 부분 보수가 훨씬 합리적입니다.",
          "구조체 콘크리트에 관통 크랙이 없고 타일 표면이 깨지지 않은 상태라면 선별적인 부분 보수만으로도 충분한 구조적 안전성을 확보할 수 있습니다."
        ]
      },
      {
        "heading": "타일 에폭시 주입 공법의 구조적 안정성과 경제성",
        "paragraphs": [
          "외벽 타일 부분 보수의 대표적인 공법은 멀쩡한 타일을 뜯어내지 않고 줄눈 틈새로 고점도 구조용 에폭시 수지를 주입하는 방식입니다.",
          "골조와 마감재 사이의 빈 공간을 수지로 가득 채워 단단한 한 덩어리로 경화시키므로 공사 비용과 기간을 대폭 절감하면서도 강력한 부착력을 발휘합니다."
        ]
      },
      {
        "heading": "탈락 우려 부위의 선별 제거 및 2차 방수 줄눈 시공",
        "paragraphs": [
          "타음 점검 결과 완전히 헐거워져 주입으로 살릴 수 없는 극소수 타일은 로프 작업 시 선별적으로 안전하게 떼어내고 바탕면을 평탄화합니다.",
          "이후 타일 사이 줄눈 전체를 고내후성 탄성 실링재로 꼼꼼히 충진하여 향후 빗물이 스며들어 재들뜸이 발생하는 경로를 차단합니다."
        ]
      },
      {
        "heading": "방치된 들뜸 타일이 겨울철 한파에 미치는 영향과 주의점",
        "paragraphs": [
          "들뜸 징후를 발견하고도 비용 문제로 방치할 경우, 겨울철 영하의 날씨에 틈새 수분이 얼면서 타일을 바깥으로 밀어내게 됩니다.",
          "이로 인해 봄철 해빙기에 타일이 한꺼번에 쏟아져 내리는 대형 사고가 발생할 수 있으므로, 국소 들뜸 단계에서 선제적으로 보수하는 것이 최선입니다."
        ]
      },
      {
        "heading": "노원구 지역 외벽 타일 보수 견적 문의 시 체크리스트",
        "paragraphs": [
          "들뜸이 의심되는 건물 외벽 전체의 원경 사진과 함께 지상 보행로 및 주차장과의 인접 거리를 사진으로 남겨두시면 큰 도움이 됩니다.",
          "과거 외벽 누수 이력이나 실내 결로 발생 위치를 함께 알려주시면 노원구 현장에 맞춤형 보수 공법과 정확한 견적을 안내해 드립니다."
        ]
      }
    ],
    "bodyLines": [
      "노원구 구축 건물 외벽 타일 보수는 전면 교체의 비용 부담을 덜기 위해 부분 보수 타당성을 먼저 검토해야 합니다.",
      "구조 균열 없이 국소 부위에 들뜸이 국한된 경우 선별적인 부분 보수만으로도 충분한 안전을 확보할 수 있습니다.",
      "고점도 구조용 에폭시 수지 주입 공법은 타일 파손 없이 공사비와 기간을 획기적으로 줄여주는 경제적 대안입니다.",
      "위험 타일은 선별 제거하고 줄눈 전체를 방수 실링하여 수분 재유입으로 인한 2차 들뜸을 방지합니다.",
      "겨울철 동결팽창으로 인한 해빙기 대량 탈락을 막기 위해 초기 국소 징후 발견 시 즉각 보수해야 합니다.",
      "건물 전경 사진과 하부 환경 정보를 제공해 주시면 노원구 현장에 최적화된 로프 보수 솔루션을 신속히 제공해 드립니다."
    ],
    "primaryDynamicUrl": "/?k=%EB%85%B8%EC%9B%90%EA%B5%AC-%EC%99%B8%EB%B2%BD%ED%83%80%EC%9D%BC%EB%B3%B4%EC%88%98",
    "anchorText": "노원구 외벽타일보수 부분 보수 적합성 진단 안내 확인",
    "wave": "EXPANSION_TILE_2",
    "contentStatus": "PUBLISHED",
    "publishedAt": "2026-10-28T17:00:00+09:00"
  },
  {
    "id": "seoul-nowon-district-tile-replace",
    "region": "노원구",
    "regionScope": "seoul",
    "regionLevel": "district",
    "parentDistrict": "노원구",
    "districtSlug": "nowon",
    "service": "외벽타일교체",
    "serviceSlug": "tile-replace",
    "keyword": "노원구-외벽타일교체",
    "path": "/guide/seoul/nowon/tile-replace",
    "title": "노원구 외벽타일교체, 외벽 타일의 일부가 떨어졌다면 부분 교체가 가능한 상태는?",
    "sections": [
      {
        "heading": "타일 탈락 사고 발생 직후 현장 확인과 긴급 조치",
        "paragraphs": [
          "노원구 주택가나 상가 건물에서 외벽 타일이 바닥으로 떨어졌을 때, 관리자가 가장 먼저 해야 할 일은 추가 낙하에 대비한 하부 안전선 설치입니다.",
          "바닥에 떨어진 파편을 치우는 것에 급급하기보다 머리 위 외벽에 매달려 있는 헐거운 타일이 없는지 안전한 거리에서 확인하고 통행을 통제해야 합니다."
        ]
      },
      {
        "heading": "부분 교체로 마감할 수 있는 외벽 바탕면의 건전성 조건",
        "paragraphs": [
          "타일이 탈락한 부위 안쪽의 콘크리트 구조체가 깨지지 않고 단단하게 유지되어 있다면 부분 교체로 완벽히 복구할 수 있습니다.",
          "또한 탈락 부위 주변 타일들을 타음봉으로 두드렸을 때 둔탁한 빈 소리가 나지 않고 바탕면에 단단히 밀착되어 있어야 부분 교체 시공이 유효합니다."
        ]
      },
      {
        "heading": "외벽 침하 및 구조 균열 동반 시의 시공 구분",
        "paragraphs": [
          "타일 탈락 부위 뒤편으로 콘크리트 골조가 사선이나 가로로 길게 갈라진 구조 균열이 보인다면 이는 단순 타일 접착 불량이 아닙니다.",
          "건물의 부등 침하나 구조적 변위가 원인일 수 있으므로 이 경우에는 타일만 새로 붙여서는 안 되며 구조 균열 에폭시 그라우팅 보강을 병행해야 합니다."
        ]
      },
      {
        "heading": "기존 타일과 밀착을 위한 하지 정리와 단차 교정",
        "paragraphs": [
          "떨어진 자리에 남아있는 울퉁불퉁한 옛날 시멘트 모르타르 잔재를 전용 공구로 정밀하게 깎아내어 균일한 깊이를 만들어 주어야 합니다.",
          "하지 정리가 제대로 되지 않으면 새로 붙인 타일이 기존 타일보다 튀어나와 빗물받이 역할을 하게 되므로 평탄성을 정밀하게 교정하며 압착 시공합니다."
        ]
      },
      {
        "heading": "사다리나 옥상 난간에 매달려 직접 교체하려는 위험 행동 금지",
        "paragraphs": [
          "건물 관리자가 비용을 아끼고자 옥상 난간에 엎드리거나 위험한 사다리에 올라 외벽 타일을 직접 실리콘으로 붙이려는 시도는 매우 위험합니다.",
          "고소 외벽 작업은 로프 접근 자격을 갖춘 전문 시공자가 안전 로프와 하네스를 착용하고 표준 작업 절차를 준수하여 시공해야 안전을 보장할 수 있습니다."
        ]
      },
      {
        "heading": "교체용 타일 수급 및 일정 조율을 위한 현장 사진 전송 안내",
        "paragraphs": [
          "타일이 떨어진 자리의 내부 바탕면이 보이도록 촬영한 사진과 건물 전체 전경 사진을 함께 준비해 주시면 신속한 상태 진단이 가능합니다.",
          "바닥에 떨어진 타일 조각의 크기와 두께를 측정해 알려주시면 노원구 현장에 최적화된 자재 수급 계획과 교체 일정을 빠르게 안내해 드립니다."
        ]
      }
    ],
    "bodyLines": [
      "외벽 타일 탈락 사고 발생 시 하부 보행자 안전 라인을 최우선 설치하여 2차 낙하 피해를 예방해야 합니다.",
      "바탕 골조가 건전하고 주변 타일의 부착력이 유지되고 있다면 경제적이고 신속한 부분 교체가 가능합니다.",
      "콘크리트 골조의 관통 균열이나 구조적 변위가 동반된 경우 구조 보강을 반드시 병행해야 합니다.",
      "탈락 부위의 낡은 모르타르를 정밀하게 정리하여 단차 없는 평탄한 압착 교체 시공을 진행합니다.",
      "고소 부위 타일을 비전문가가 임의로 보수하려다 추락 사고가 발생할 수 있으므로 전문 로프팀에 맡겨야 합니다.",
      "탈락 부위 바탕면 사진과 타일 실측 정보를 제공해 주시면 노원구 현장에 맞춘 신속한 교체 공사를 지원합니다."
    ],
    "primaryDynamicUrl": "/?k=%EB%85%B8%EC%9B%90%EA%B5%AC-%EC%99%B8%EB%B2%BD%ED%83%80%EC%9D%BC%EA%B5%90%EC%B2%B4",
    "anchorText": "노원구 외벽타일교체 부분 교체 가능 상태 점검 안내 확인",
    "wave": "EXPANSION_TILE_2",
    "contentStatus": "PUBLISHED",
    "publishedAt": "2026-10-28T17:00:00+09:00"
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
