import React from "react";
import { BRAND_HUB_CONTENT } from "@/data/brandHub";

interface WhyProfessionalProps {
  locationName: string;
  dynamicBanner?: string;
}

export default function WhyProfessional({ locationName, dynamicBanner }: WhyProfessionalProps) {
  const content = BRAND_HUB_CONTENT;

  return (
    <section className="section-py bg-teal-50/10 relative overflow-hidden">
      {/* Background soft light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Icon Block */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="w-48 h-48 rounded-full border border-teal-500/10 bg-white flex items-center justify-center shadow-lg relative pulse-button">
              {/* Droplet SVG */}
              <svg className="w-24 h-24 text-teal-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.5C12 2.5 19 9.5 19 14.5C19 18.366 15.866 21.5 12 21.5C8.13401 21.5 5 18.366 5 14.5C5 9.5 12 2.5 12 2.5Z" fill="currentColor" opacity="0.1" />
                <path d="M12 2.5C12 2.5 19 9.5 19 14.5C19 18.366 15.866 21.5 12 21.5C8.13401 21.5 5 18.366 5 14.5C5 9.5 12 2.5 12 2.5Z" stroke="currentColor" strokeWidth="1.5" />
                <path d="M9.5 12c.5-2.5 2.5-3.5 2.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* Right Text Copy */}
          <div className="lg:col-span-8 space-y-6 text-center lg:text-left">
            <div className="text-teal-600 text-[13px] font-extrabold tracking-wider uppercase">
              Professional Engineering
            </div>
            
            <h2 className="text-2.5xl sm:text-3.5xl font-black text-slate-800 tracking-tight leading-tight">
              {content.whyProfessionalTitle}
            </h2>
            
            <div className="text-[14.5px] text-slate-600 space-y-4 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              <p>
                실내에서 빗물이 새어 도배지를 적시는 출구가 외부에서 빗물이 스며드는 입구와 항상 일치하지는 않습니다. 
                물줄기는 균열이 생긴 콘크리트 슬래브 이음 조인트를 타고 전혀 예상하지 못한 하부 모서리나 몰딩 뒷면에서 뿜어져 나오는 경우가 많습니다.
              </p>

              {/* 1번 동적 템플릿 문구 삽입: {지역명} {작업명} 상담이 필요하다면 틈새케어에서 창틀과 외벽 주변 상태를 먼저 확인합니다. */}
              <p className="bg-white border border-teal-500/10 p-4.5 rounded-2xl font-bold text-teal-800 text-left">
                {dynamicBanner || `${locationName} 주변 창틀 균열 상담이 필요하시다면, 틈새케어의 외벽 크랙 및 샷시 전수 점검을 먼저 권해드립니다.`}
              </p>

              <p>
                단순히 샷시 틈만 실리콘으로 때워서는 누수가 해결되지 않습니다. 외벽의 상태, 샷시의 거동 유격, 인근 크랙을 입체적으로 진단하고 올바른 결합재를 적용하지 못하면 물길이 갇혀 내벽 수분 가둠 하자를 가져옵니다. 틈새케어는 숙련된 엔지니어가 물길의 발원지부터 확실하게 통제합니다.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
