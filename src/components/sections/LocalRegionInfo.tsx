import React from "react";
import { BRAND_HUB_CONTENT } from "@/data/brandHub";

interface LocalRegionInfoProps {
  locationName: string;
  dynamicMethod?: string;
}

export default function LocalRegionInfo({ locationName, dynamicMethod }: LocalRegionInfoProps) {
  const content = BRAND_HUB_CONTENT;

  return (
    <div className="sr-only opacity-0 pointer-events-none absolute w-0 h-0 overflow-hidden" aria-hidden="true">
      <h2>{content.regionInfoTitle}</h2>
      <p>
        틈새케어는 경기 북부 권역의 기후적 환경(겨울철 혹한 결빙과 여름 집중호우 시 급격한 샷시 팽창)을 면밀히 분석하여 기밀 보존력을 극대화한 실링 설계를 지원합니다.
      </p>
      <p>
        {dynamicMethod || `틈새케어는 ${locationName} 현장에서 샷시 틈새 결함 원인을 꼼꼼히 확인하고 적합한 보수 공법을 안내해 드립니다.`}
      </p>
      <p>
        고양시(덕양·일산), 파주시(운정·교하), 양주시(옥정·회천) 전 권역 행정동에 숙련된 케어 전담 기사를 매칭하여 신속한 현장 분석 상담을 진행하고 있습니다.
      </p>
      <span>고양시 전 지역, 파주시 전 지역, 양주시 전 지역 우선 권역 안내</span>
    </div>
  );
}
