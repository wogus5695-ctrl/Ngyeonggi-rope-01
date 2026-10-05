import React from "react";
import { BRAND_HUB_CONTENT } from "@/data/brandHub";

interface LocalRegionInfoProps {
  locationName: string;
  dynamicMethod?: string;
  dynamicMethodOverride?: string;
  isWaterproofing?: boolean;
}

export default function LocalRegionInfo({ locationName, dynamicMethod, dynamicMethodOverride, isWaterproofing }: LocalRegionInfoProps) {
  const content = BRAND_HUB_CONTENT;
  const isDynamic = Boolean(locationName && locationName !== "틈새케어");

  const effectiveMethod = dynamicMethodOverride || dynamicMethod;

  return (
    <div className="sr-only opacity-0 pointer-events-none absolute w-0 h-0 overflow-hidden" aria-hidden="true">
      <h2>{content.regionInfoTitle}</h2>
      <p>
        {isWaterproofing 
          ? "틈새케어는 건물 방수층 결함과 외벽 균열 상태를 면밀히 분석하여 기밀 보존력을 극대화한 방수 설계를 지원합니다."
          : "틈새케어는 창틀 틈새와 샷시 팽창 유격을 면밀히 분석하여 기밀 보존력을 극대화한 실링 설계를 지원합니다."}
      </p>
      <p>
        {effectiveMethod || (isWaterproofing
          ? "노후 아파트와 빌라, 상가 건물이 혼재되어 있어 외벽 균열 보강과 옥상 우레탄 방수층 상태를 함께 진단하는 경우가 많습니다."
          : "노후 아파트와 빌라 창호가 혼재되어 있어 창틀 하부와 외벽 접합부를 함께 확인하는 경우가 많습니다.")}
      </p>
      {isDynamic && (
        <p>현재 페이지 서비스 대상 지역: {locationName}</p>
      )}
    </div>
  );
}
