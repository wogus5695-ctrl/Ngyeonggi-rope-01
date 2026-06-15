import { TEUMSAE_ALLOWED_REGIONS } from "@/data/allowedKeywords";

export const getHash = (str: string) => {
  return str.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
};

export interface DynamicHomeConfig {
  h1: string;
  summary: string;
  regionText: string;
  analysisTitle: string;
  analysisDesc: string;
  analysisBlocks: Array<{
    title: string;
    description: string;
    checkpoints: string[];
  }>;
  processTitle: string;
  processSteps: Array<{
    title: string;
    description: string;
  }>;
  faqTitle: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export const getDynamicHomeData = (region: string, service: string, hash: number) => {
  const keyword = `${region} ${service}`;

  // 지역별 고유 특성 추출 (Solid 스팸 필터 회피용)
  const regionKey = Object.keys(TEUMSAE_ALLOWED_REGIONS).find(
    (key) => TEUMSAE_ALLOWED_REGIONS[key].name === region || TEUMSAE_ALLOWED_REGIONS[key].slug === region || region.includes(TEUMSAE_ALLOWED_REGIONS[key].name)
  );
  
  const regionInfo = regionKey ? TEUMSAE_ALLOWED_REGIONS[regionKey] : null;
  const parent = regionInfo?.parentDistrict || "";
  
  let localFeature = "";
  if (parent.includes("고양시") || region.includes("고양") || region.includes("일산") || region.includes("덕양")) {
    localFeature = "특히 고양시 권역은 일산신도시 아파트단지 및 덕양구 내 빌라와 연립주택이 고루 밀집해 있어, 세대별로 알루미늄/하이샤시 창호 노후 결함 상태와 외벽 크랙이 동시에 노출되어 누수가 복합적으로 유발되는 케이스가 많습니다.";
  } else if (parent.includes("파주시") || region.includes("파주") || region.includes("운정") || region.includes("금촌") || region.includes("야당")) {
    localFeature = "특히 파주시 권역은 운정신도시를 포함하여 대단지 아파트가 활발하게 조성된 한편, 인근 평야지대 및 지형 특성상 강한 바람을 동반한 폭우가 들이치면서 창틀 상하부 실리콘 이격과 외벽 조인트 틈새의 누수 유입이 두드러집니다.";
  } else if (parent.includes("양주시") || region.includes("양주") || region.includes("옥정") || region.includes("고읍") || region.includes("덕정")) {
    localFeature = "특히 양주시 권역은 옥정신도시 등 신축 대단지의 창틀 몰딩 프레임 수축 팽창에 따른 틈새 발생과 기존 구도심 아파트/빌라의 콘크리트 옹벽 미세 균열이 복합 작용하여 물길을 형성하는 경향이 있습니다.";
  } else if (parent.includes("구리시") || region.includes("구리") || region.includes("인창") || region.includes("교문") || region.includes("수택")) {
    localFeature = "특히 구리시 권역은 서울 인접 배후도시로서 노후 아파트 단지와 상가 주택이 밀집하여, 창틀 주변 코킹재의 부식 경화와 외벽 몰딩 접합부 균열로 인한 누수 발생 비중이 높습니다.";
  } else if (parent.includes("의정부시") || region.includes("의정부") || region.includes("호원") || region.includes("신곡") || region.includes("민락")) {
    localFeature = "특히 의정부시 권역은 신곡동, 호원동 등의 구축 단지 및 민락지구 등의 신축 아파트가 혼재되어 있어, 옹벽 선상 균열과 샷시 조인트 이음새 결함 상태를 종합 진단하는 것이 효과적입니다.";
  } else if (parent.includes("동두천시") || region.includes("동두천") || region.includes("지행") || region.includes("생연") || region.includes("송내")) {
    localFeature = "특히 동두천시 권역은 지행역 인근 아파트 및 생연동 구도심 빌라 주택 등에서 연식 노후화에 의한 외부 실리콘 박리 및 프레임 흔들림 틈새 누수 현상이 흔히 확인됩니다.";
  } else if (parent.includes("남양주시") || region.includes("남양주") || region.includes("다산") || region.includes("와부") || region.includes("별내") || region.includes("진접")) {
    localFeature = "특히 남양주시 권역은 와부읍 등의 한강 인근 구축 아파트와 다산·별내지구 등 신도시 신축 창호 마감재 수축 결함이 겹쳐, 창틀 하부 빗물 배출 드레인과 크랙 상태를 면밀히 점검해야 합니다.";
  } else if (parent.includes("광주시") || region.includes("광주") || region.includes("경안") || region.includes("태전") || region.includes("오포") || region.includes("신현")) {
    localFeature = "특히 경기도 광주시 권역은 오포, 신현동 등의 대규모 빌라·연립 밀집 단지와 경안동 일대 구축 창호가 많아, 외벽 조인트 틈새 방수와 샤시 실링 두께 마감을 꼼꼼하게 다뤄야 합니다.";
  } else {
    localFeature = "특히 경기 북부 권역은 노후 아파트와 빌라가 복합적으로 혼재되어 있어, 단순 실리콘 덧방 방식보다는 외벽 이음새와 창틀 프레임의 결함 강도를 입체적으로 진단하고 보수해야 재누수를 방지할 수 있습니다.";
  }

  // 6개 서비스 세분화 분류

  let serviceType = '창틀코킹';
  if (service.includes('빗물')) {
    serviceType = '빗물누수';
  } else if (service.includes('창틀') && service.includes('누수')) {
    serviceType = '창틀누수';
  } else if (service.includes('창틀') && service.includes('실리콘')) {
    serviceType = '창틀실리콘';
  } else if (service.includes('샷시') && service.includes('실리콘')) {
    serviceType = '샷시실리콘';
  } else if (service.includes('외벽')) {
    serviceType = '외벽누수';
  }

  const configs: Record<string, DynamicHomeConfig> = {
    '창틀코킹': {
      h1: `${region} ${service} 전문 진단`,
      summary: `${region} ${service} 문제는 단순 실리콘 보수보다 창틀, 샷시, 외벽 주변 상태를 함께 확인하는 것이 중요합니다.`,
      regionText: `${region} 지역의 경우 사계절 온도 변화에 따라 샷시의 수축이 반복되므로, 외부에 메워진 실리콘이 신축 변형 범위를 견디지 못하고 터지는 틈새 누수가 빈번합니다. ${localFeature}`,
      analysisTitle: `${service} 노후 균열 및 흡착성 정밀 진단`,
      analysisDesc: `${region} 지역의 ${service} 시공은 단순히 실리콘을 메우기보다, 이전 코킹재의 부식 강도와 벽 단면의 습도 분포를 정밀 분석하는 것으로 시작됩니다.`,
      analysisBlocks: [
        {
          title: "01. 마감재 들뜸 및 계면 박리 점검",
          description: "샤시 모서리의 기존 실리콘이 단단하게 굳어 부서지거나 콘크리트 벽에서 탈락된 결함 범위를 전수 파악합니다.",
          checkpoints: ["탄성 소실도 및 경화 상태 체크", "창틀 하부 조인트 밀접 이탈 진단", "물길이 이어지는 틈 유입로 조사"]
        },
        {
          title: "02. 창틀 프레임 처짐 및 구조 균열 실사",
          description: "샤시 자체의 수평 처짐 현상과 주변 옹벽의 선상 균열이 외부 누수에 결합되어 작용하고 있는지 검사합니다.",
          checkpoints: ["콘크리트 미세 실크랙 분포 체크", "샤시 프레임 장력 및 휨 계측", "코너 접합 틈 균열 점검"]
        },
        {
          title: "03. 고부착 기밀 결속 약제 처방",
          description: "피착 단면의 습기를 방조하고 분자 간 결착성을 낼 수 있는 프라이머 흡착 공정 약품을 선별합니다.",
          checkpoints: ["고내후성 창호 실런트 도포 준비", "화학적 오염 유분 전용 스크래핑", "결착력 보강 계면 프라이머 처방"]
        }
      ],
      processTitle: `재누수를 줄이는 5단계 창틀코킹 프로세스`,
      processSteps: [
        { title: "누수 원인 진단", description: "창틀 하부, 샷시 틈, 외벽 크랙을 함께 확인해 물이 들어오는 지점을 먼저 파악합니다." },
        { title: "기존 실리콘 정리", description: "들뜬 실리콘과 오염물을 제거해 새 실리콘이 붙을 수 있는 바탕을 만듭니다." },
        { title: "접착면 세척·건조", description: "먼지, 이물질, 습기를 정리해 접착 불량과 들뜸 가능성을 줄입니다." },
        { title: "상태별 코킹 시공", description: "현장 상태에 따라 덧방, 부분 제거, 올제거 방식을 구분해 시공합니다." },
        { title: "마감 검수·안내", description: "마감 상태와 취약 부위를 확인하고, 이후 관리 방법을 안내합니다." }
      ],
      faqTitle: `${service} 관련 정밀 FAQ`,
      faqs: [
        { 
          question: `${region} 아파트 베란다 창틀에서 빗물이 샐 때 점검은 어떻게 해야 하나요?`, 
          answer: `외부 창틀 실리콘이 갈라지거나 들뜨고, 비가 온 뒤 창틀 하부나 벽지 주변에 물기가 남는다면 점검이 필요합니다. 특히 ${region}처럼 아파트, 빌라, 상가 창호가 함께 분포한 지역은 창틀뿐 아니라 외벽 크랙과 샷시 접합부까지 함께 확인하는 것이 좋습니다.` 
        },
        { 
          question: `${region} ${service} 공사 시 실리콘 덧방과 전체 제거 시공의 구체적인 차이는 무엇인가요?`, 
          answer: `덧방은 기존 실리콘 상태가 비교적 양호할 때 제한적으로 적용할 수 있는 방식입니다. 반대로 기존 실리콘이 경화되었거나 들뜸, 균열, 재누수가 있다면 부분 제거 또는 올제거 후 시공이 더 적합합니다. 중요한 것은 현장 상태에 맞는 방식을 구분하는 것입니다.` 
        },
        { 
          question: `${region} 지역 아파트 및 빌라 창문 실리콘 노후화로 인한 빗물 누수 원인 파악 방법은?`, 
          answer: `실내 벽지의 젖음 위치와 얼룩 번짐을 확인하고, 외부에서는 외벽 크랙, 샷시 상단 모서리, 창틀 주변 틈을 함께 살펴봅니다. 물이 보이는 위치와 실제 유입 지점이 다를 수 있어 유입 경로 확인이 중요합니다.` 
        },
        { 
          question: `노후된 창틀 실리콘 균열로 발생할 수 있는 내부 벽지 및 몰딩 누수 피해는 어느 정도인가요?`, 
          answer: `실리콘이 갈라지거나 들뜨면 샷시와 외벽 사이에 틈이 생길 수 있습니다. 이 틈으로 빗물이 스며들면 창틀 하부, 벽지, 몰딩 주변에 젖음이나 곰팡이 문제가 생길 수 있습니다.` 
        },
        { 
          question: `${region} 지역 외벽 크랙 및 샷시 주변 콘크리트 균열도 동시에 무상 점검이 가능한가요?`, 
          answer: `네, 가능합니다. 창틀 주변뿐 아니라 외벽 크랙, 샷시 접합부, 창틀 상부 틈까지 함께 확인합니다. 균열이 확인되면 현장 상태에 맞는 보수 방식으로 빗물 유입 가능성을 줄이는 방향으로 안내합니다.` 
        },
        { 
          question: `방문 출장 진단 전에 창틀 누수 부위 사진 전송만으로도 예상 견적 확인이 가능할까요?`, 
          answer: "가능합니다. 창틀 하부, 실리콘 갈라짐, 외벽 크랙, 샷시 접합부가 보이는 사진을 보내주시면 기본 상태를 먼저 확인할 수 있습니다. 다만 실제 누수 원인과 필요한 보수 범위는 현장 상태에 따라 달라질 수 있습니다." 
        }
      ]
    },
    '빗물누수': {
      h1: `${region} ${service} 전문 진단`,
      summary: `${region} ${service} 문제는 단순 실리콘 보수보다 창틀, 샷시, 외벽 주변 상태를 함께 확인하는 것이 중요합니다.`,
      regionText: `${region} 지역은 습도가 높은 여름철이나 태풍이 올 때 강한 횡풍으로 샤시 틈에 직접 비바람이 주입되어 반복적인 누수가 발생합니다. ${localFeature}`,
      analysisTitle: `${service} 물길 흔적 추적 진단`,
      analysisDesc: `${region}의 ${service} 차단 핵심은 겉에만 실리콘을 바르는 것이 아니라, 외벽 상단과 위층 조인트 틈새로부터 유입되는 모든 물줄기 경로를 역추적하는 것입니다.`,
      analysisBlocks: [
        {
          title: "01. 실내 번짐 궤적 및 벽체 수분 검사",
          description: "물자국이 시작된 중심과 함습 상태를 정밀 계측하여 외부의 어느 좌표에서 물이 번졌는지 유추합니다.",
          checkpoints: ["습도 검사기를 통한 함습율 분석", "도배지 훼손 상태 및 변색 궤적 계측", "실내 결로 현상과의 연관 관계 진단"]
        },
        {
          title: "02. 외부 샷시 상단부 이음새 전수 검사",
          description: "외부 옹벽 조인트의 들뜸, 상부 세대로부터 들이치는 물받이 균열 상태를 꼼꼼하게 점검합니다.",
          checkpoints: ["상층부 세대 코킹 노후도 영향 여부 판단", "외벽 드라이비트 이음 조인트 들뜸 확인", "창틀 외부 몰딩 실링 균열 점검"]
        },
        {
          title: "03. 빗물 튕김 구배 및 드레인 배수 보완",
          description: "창틀 하부로 들어온 빗물이 배수구로 원활히 배출되고 외부 물은 벽을 타고 그냥 흘러내리도록 유도 성형합니다.",
          checkpoints: ["구배 유도 코킹 성형 설계", "하부 물구멍 드레인 청소 및 배수 보조", "외벽 방수 보강 크랙 충진 설계"]
        }
      ],
      processTitle: `재누수를 줄이는 5단계 창틀코킹 프로세스`,
      processSteps: [
        { title: "누수 원인 진단", description: "창틀 하부, 샷시 틈, 외벽 크랙을 함께 확인해 물이 들어오는 지점을 먼저 파악합니다." },
        { title: "기존 실리콘 정리", description: "들뜬 실리콘과 오염물을 제거해 새 실리콘이 붙을 수 있는 바탕을 만듭니다." },
        { title: "접착면 세척·건조", description: "먼지, 이물질, 습기를 정리해 접착 불량과 들뜸 가능성을 줄입니다." },
        { title: "상태별 코킹 시공", description: "현장 상태에 따라 덧방, 부분 제거, 올제거 방식을 구분해 시공합니다." },
        { title: "마감 검수·안내", description: "마감 상태와 취약 부위를 확인하고, 이후 관리 방법을 안내합니다." }
      ],
      faqTitle: `${service} 관련 정밀 FAQ`,
      faqs: [
        { 
          question: `${region} 아파트 베란다 창틀에서 빗물이 샐 때 점검은 어떻게 해야 하나요?`, 
          answer: `외부 창틀 실리콘이 갈라지거나 들뜨고, 비가 온 뒤 창틀 하부나 벽지 주변에 물기가 남는다면 점검이 필요합니다. 특히 ${region}처럼 아파트, 빌라, 상가 창호가 함께 분포한 지역은 창틀뿐 아니라 외벽 크랙과 샷시 접합부까지 함께 확인하는 것이 좋습니다.` 
        },
        { 
          question: `${region} ${service} 공사 시 실리콘 덧방과 전체 제거 시공의 구체적인 차이는 무엇인가요?`, 
          answer: `덧방은 기존 실리콘 상태가 비교적 양호할 때 제한적으로 적용할 수 있는 방식입니다. 반대로 기존 실리콘이 경화되었거나 들뜸, 균열, 재누수가 있다면 부분 제거 또는 올제거 후 시공이 더 적합합니다. 중요한 것은 현장 상태에 맞는 방식을 구분하는 것입니다.` 
        },
        { 
          question: `${region} 지역 아파트 및 빌라 창문 실리콘 노후화로 인한 빗물 누수 원인 파악 방법은?`, 
          answer: `실내 벽지의 젖음 위치와 얼룩 번짐을 확인하고, 외부에서는 외벽 크랙, 샷시 상단 모서리, 창틀 주변 틈을 함께 살펴봅니다. 물이 보이는 위치와 실제 유입 지점이 다를 수 있어 유입 경로 확인이 중요합니다.` 
        },
        { 
          question: `노후된 창틀 실리콘 균열로 발생할 수 있는 내부 벽지 및 몰딩 누수 피해는 어느 정도인가요?`, 
          answer: `실리콘이 갈라지거나 들뜨면 샷시와 외벽 사이에 틈이 생길 수 있습니다. 이 틈으로 빗물이 스며들면 창틀 하부, 벽지, 몰딩 주변에 젖음이나 곰팡이 문제가 생길 수 있습니다.` 
        },
        { 
          question: `${region} 지역 외벽 크랙 및 샷시 주변 콘크리트 균열도 동시에 무상 점검이 가능한가요?`, 
          answer: `네, 가능합니다. 창틀 주변뿐 아니라 외벽 크랙, 샷시 접합부, 창틀 상부 틈까지 함께 확인합니다. 균열이 확인되면 현장 상태에 맞는 보수 방식으로 빗물 유입 가능성을 줄이는 방향으로 안내합니다.` 
        },
        { 
          question: `방문 출장 진단 전에 창틀 누수 부위 사진 전송만으로도 예상 견적 확인이 가능할까요?`, 
          answer: "가능합니다. 창틀 하부, 실리콘 갈라짐, 외벽 크랙, 샷시 접합부가 보이는 사진을 보내주시면 기본 상태를 먼저 확인할 수 있습니다. 다만 실제 누수 원인과 필요한 보수 범위는 현장 상태에 따라 달라질 수 있습니다." 
        }
      ]
    },
    '창틀누수': {
      h1: `${region} ${service} 전문 진단`,
      summary: `${region} ${service} 문제는 단순 실리콘 보수보다 창틀, 샷시, 외벽 주변 상태를 함께 확인하는 것이 중요합니다.`,
      regionText: `${region} 지역은 연식이 오래된 구축 아파트 비율이 높아, 샷시를 감싸 지탱하던 우레탄폼과 실리콘이 열화되어 누수로 전이되는 사례가 대부분입니다. ${localFeature}`,
      analysisTitle: `${service} 이격 틈 정교 분석`,
      analysisDesc: `${region}의 ${service} 해결은 샤시의 변형과 옹벽 사이의 벌어진 틈을 메워주는 기밀 충진이 핵심입니다. 얇게 덮기만 해서는 하자가 납니다.`,
      analysisBlocks: [
        {
          title: "01. 샤시 프레임 이격 및 변동치 계측",
          description: "태풍이나 강풍 발생 시 창호가 흔들리며 실리콘 모서리를 찢어발기는 거동 틈새 폭을 확인합니다.",
          checkpoints: ["샤시 하부 프레임 이격 확인", "강풍 대비 진동 대응 마감 설계", "코너 접합 틈 균열 점검"]
        },
        {
          title: "02. 레일 물배수 통로 이물질 상태 실사",
          description: "샷시 창틀 자체의 물구멍 배수 밸브가 먼지로 막혀 고인 빗물이 넘쳐 실내로 넘어들어오는지 점검합니다.",
          checkpoints: ["물구멍 레일 배출 원활도 확인", "창틀 샷시 하단 물 고임 현상 제거", "노후 실리콘 하단 침식 징후 조사"]
        },
        {
          title: "03. 압착 헤라 두께 마감 및 조색 매칭",
          description: "창호 자재의 질감과 컬러에 맞춰 인테리어 미관을 살릴 수 있는 실런트 조색 및 최적 시공 두께를 협의합니다.",
          checkpoints: ["알루미늄/하이샤시 최적 컬러 조색", "광폭 시공 범위 및 압착 두께 계산", "헤라 성형 각도 최적화 설계"]
        }
      ],
      processTitle: `재누수를 줄이는 5단계 창틀코킹 프로세스`,
      processSteps: [
        { title: "누수 원인 진단", description: "창틀 하부, 샷시 틈, 외벽 크랙을 함께 확인해 물이 들어오는 지점을 먼저 파악합니다." },
        { title: "기존 실리콘 정리", description: "들뜬 실리콘과 오염물을 제거해 새 실리콘이 붙을 수 있는 바탕을 만듭니다." },
        { title: "접착면 세척·건조", description: "먼지, 이물질, 습기를 정리해 접착 불량과 들뜸 가능성을 줄입니다." },
        { title: "상태별 코킹 시공", description: "현장 상태에 따라 덧방, 부분 제거, 올제거 방식을 구분해 시공합니다." },
        { title: "마감 검수·안내", description: "마감 상태와 취약 부위를 확인하고, 이후 관리 방법을 안내합니다." }
      ],
      faqTitle: `${service} 관련 정밀 FAQ`,
      faqs: [
        { 
          question: `${region} 아파트 베란다 창틀에서 빗물이 샐 때 점검은 어떻게 해야 하나요?`, 
          answer: `외부 창틀 실리콘이 갈라지거나 들뜨고, 비가 온 뒤 창틀 하부나 벽지 주변에 물기가 남는다면 점검이 필요합니다. 특히 ${region}처럼 아파트, 빌라, 상가 창호가 함께 분포한 지역은 창틀뿐 아니라 외벽 크랙과 샷시 접합부까지 함께 확인하는 것이 좋습니다.` 
        },
        { 
          question: `${region} ${service} 공사 시 실리콘 덧방과 전체 제거 시공의 구체적인 차이는 무엇인가요?`, 
          answer: `덧방은 기존 실리콘 상태가 비교적 양호할 때 제한적으로 적용할 수 있는 방식입니다. 반대로 기존 실리콘이 경화되었거나 들뜸, 균열, 재누수가 있다면 부분 제거 또는 올제거 후 시공이 더 적합합니다. 중요한 것은 현장 상태에 맞는 방식을 구분하는 것입니다.` 
        },
        { 
          question: `${region} 지역 아파트 및 빌라 창문 실리콘 노후화로 인한 빗물 누수 원인 파악 방법은?`, 
          answer: `실내 벽지의 젖음 위치와 얼룩 번짐을 확인하고, 외부에서는 외벽 크랙, 샷시 상단 모서리, 창틀 주변 틈을 함께 살펴봅니다. 물이 보이는 위치와 실제 유입 지점이 다를 수 있어 유입 경로 확인이 중요합니다.` 
        },
        { 
          question: `노후된 창틀 실리콘 균열로 발생할 수 있는 내부 벽지 및 몰딩 누수 피해는 어느 정도인가요?`, 
          answer: `실리콘이 갈라지거나 들뜨면 샷시와 외벽 사이에 틈이 생길 수 있습니다. 이 틈으로 빗물이 스며들면 창틀 하부, 벽지, 몰딩 주변에 젖음이나 곰팡이 문제가 생길 수 있습니다.` 
        },
        { 
          question: `${region} 지역 외벽 크랙 및 샷시 주변 콘크리트 균열도 동시에 무상 점검이 가능한가요?`, 
          answer: `네, 가능합니다. 창틀 주변뿐 아니라 외벽 크랙, 샷시 접합부, 창틀 상부 틈까지 함께 확인합니다. 균열이 확인되면 현장 상태에 맞는 보수 방식으로 빗물 유입 가능성을 줄이는 방향으로 안내합니다.` 
        },
        { 
          question: `방문 출장 진단 전에 창틀 누수 부위 사진 전송만으로도 예상 견적 확인이 가능할까요?`, 
          answer: "가능합니다. 창틀 하부, 실리콘 갈라짐, 외벽 크랙, 샷시 접합부가 보이는 사진을 보내주시면 기본 상태를 먼저 확인할 수 있습니다. 다만 실제 누수 원인과 필요한 보수 범위는 현장 상태에 따라 달라질 수 있습니다." 
        }
      ]
    }
  };

  const config = configs[serviceType] || configs['창틀코킹'];

  // 1. {지역명}에서 누수나 실리콘 노후가 의심된다면 창틀과 외벽 주변 상태를 함께 확인하는 것이 먼저입니다.
  const dynamicBanner = `${region}에서 누수나 실리콘 노후가 의심된다면 창틀과 외벽 주변 상태를 함께 확인하는 것이 먼저입니다.`;
  
  // 2. {지역명} {작업명}은 단순 실리콘 보수보다 창틀, 샷시, 외벽 주변 상태를 함께 확인하는 것이 중요합니다.
  const dynamicIntro = `${region} ${service} 현장에서는 보이는 틈만 막기보다 외벽 크랙, 샷시 접합부, 기존 실리콘 상태까지 함께 확인해야 재누수 가능성을 줄일 수 있습니다.`;

  // 3. {지역명} 현장은 아파트, 빌라, 상가 창호가 혼재되어 있어 창틀 하부와 외벽 접합부를 함께 확인하는 경우가 많습니다.
  const dynamicMethod = `${region} 현장은 아파트, 빌라, 상가 창호가 혼재되어 있어 창틀 하부와 외벽 접합부를 함께 확인하는 경우가 많습니다.`;

  const ctaPatterns = [`${region} ${service} 상담, 누수 원인부터 빠르게 확인하세요`];

  // 작업명별 보조문구 동적 정의
  let summary = `${region} ${service} 문제는 단순 실리콘 보수보다 창틀, 샷시, 외벽 주변 상태를 함께 확인하는 것이 중요합니다.`;
  if (service.includes('창틀누수')) {
    summary = `${region} ${service} 현장에서 비 온 뒤 창틀 하부나 벽지 주변이 젖는다면 창틀, 샷시, 외벽 크랙을 함께 확인해야 합니다.`;
  } else if (service.includes('빗물누수')) {
    summary = `${region} ${service} 발생 시, 젖은 위치와 실제 물이 들어오는 지점은 다를 수 있습니다. 사진 상담으로 유입 경로를 먼저 확인해보세요.`;
  } else if (service.includes('실리콘') || service.includes('코킹')) {
    summary = `${region} ${service} 시공 시, 갈라진 실리콘을 덮기 전에\n기존 접착 상태와 샷시 주변 틈을 먼저 확인해야 합니다.`;
  } else if (service.includes('외벽')) {
    summary = `${region} ${service} 발생 시, 외벽 균열을 타고 빗물이 이동하면 실내 창틀 하부에서 뒤늦게 나타날 수 있습니다.`;
  }

  const serviceBlocks: Record<string, string[]> = {
    '창틀코킹': [
      `창틀 실리콘은 햇빛과 바람에 노후화되는 소모성 구조물입니다. 틈새케어의 100% 철거 공정으로 다가오는 태풍에도 끄떡없는 견고함을 약속하십시오.`,
      `틈새 누수를 방치하면 외벽 크랙이 심해지고 도배지가 모두 상합니다. 틈새케어 엔지니어의 꼼꼼한 마감으로 소중한 우리 집 가치를 오래 지키세요.`
    ],
    '빗물누수': [
      `어떠한 태풍 and 비바람에도 흔들림 없는 완벽한 실링! 틈새케어만의 고기밀 압착 마감 기술로 들이치는 빗물을 단호히 막습니다.`,
      `반복되는 베란다 누수로 고민이신가요? 수많은 경기 북부 시공 경험을 가진 전문가가 빗물이 지나는 미세 물길을 정확히 메워드립니다.`
    ],
    '창틀누수': [
      `오래된 샷시의 교체 비용이 부담되실 때, 틈새케어 실리콘 코킹으로 외풍과 누수 걱정을 한 번에 깔끔하게 해결해 보십시오.`,
      `갈라지고 부스러진 샷시 마감재, 틈새케어 엔지니어의 손길로 정성스럽게 밀착 복원해 드립니다. 깨끗하고 기밀한 신축급 마감을 경험해보세요.`
    ]
  };

  const blocks = serviceBlocks[serviceType] || serviceBlocks['창틀코킹'];

  return {
    metaTitle: `${region} ${service} | 창틀·샷시·외벽 누수 보수 전문 틈새케어`,
    metaDesc: `${region} ${service} 문제는 창틀, 샷시, 외벽 크랙 상태를 함께 확인해야 합니다. 사진 상담으로 기본 상태를 확인하고 필요한 보수 방향을 안내드립니다.`,
    h1: config.h1,
    summary: summary,
    regionText: config.regionText,
    analysisTitle: config.analysisTitle,
    analysisDesc: config.analysisDesc,
    analysisBlocks: config.analysisBlocks,
    processTitle: config.processTitle,
    processSteps: config.processSteps,
    faqTitle: config.faqTitle,
    faqs: config.faqs,
    portfolioTitle: `${region} ${service} 시공 사례`,
    serviceBlock: blocks[hash % blocks.length],
    ctaHeader: ctaPatterns[0],
    
    // 요구사항 동적 문구
    dynamicBanner,
    dynamicIntro,
    dynamicMethod
  };
};
export type DynamicHomeData = ReturnType<typeof getDynamicHomeData>;
