import React from "react";

interface LocalRegionInfoProps {
  locationName?: string;
  dynamicMethod?: string;
  dynamicMethodOverride?: string;
  isWaterproofing?: boolean;
}

export default function LocalRegionInfo(_props: LocalRegionInfoProps) {
  // P0 Hidden SEO Text 제거: 검색봇 전용 숨김 블록을 완전히 렌더링하지 않음
  return null;
}

