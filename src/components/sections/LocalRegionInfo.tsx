import React from "react";
import { BRAND_HUB_CONTENT } from "@/data/brandHub";

interface LocalRegionInfoProps {
  locationName: string;
  dynamicMethod?: string;
}

export default function LocalRegionInfo({ locationName, dynamicMethod }: LocalRegionInfoProps) {
  const content = BRAND_HUB_CONTENT;

  return (
    <section className="section-py bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-teal-500/10 rounded-[36px] bg-gradient-to-r from-teal-50/20 to-emerald-50/20 p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-6">
              <div className="text-teal-600 text-[13px] font-extrabold tracking-wider uppercase">
                Service Region Coverage
              </div>
              
              <h2 className="text-2.5xl sm:text-3.5xl font-black text-slate-800 tracking-tight leading-tight">
                {content.regionInfoTitle}
              </h2>
              
              <div className="text-[14.5px] text-slate-600 space-y-4 leading-relaxed">
                <p>
                  틈새케어는 경기 북부 권역의 기후적 환경(겨울철 혹한 결빙과 여름 집중호우 시 급격한 샷시 팽창)을 면밀히 분석하여 기밀 보존력을 극대화한 실링 설계를 지원합니다.
                </p>

                {/* 3번 동적 문구 삽입: 틈새케어는 {지역명} 현장에서 {작업명}이 필요한 원인을 확인하고 현장 상태에 맞는 보수 방식을 안내합니다. */}
                <p className="bg-white/80 border border-teal-500/10 text-teal-800 p-4.5 rounded-2xl font-bold">
                  {dynamicMethod || `틈새케어는 ${locationName} 현장에서 샷시 틈새 결함 원인을 꼼꼼히 확인하고 적합한 보수 공법을 안내해 드립니다.`}
                </p>

                <p>
                  고양시(덕양·일산), 파주시(운정·교하), 양주시(옥정·회천) 전 권역 행정동에 숙련된 케어 전담 기사를 매칭하여 신속한 현장 분석 상담을 진행하고 있습니다.
                </p>
              </div>
            </div>

            {/* Right Map Graphic Concept */}
            <div className="lg:col-span-4 bg-white/70 border border-teal-500/5 rounded-3xl p-6.5 text-center shadow-3xs space-y-5">
              <div className="text-teal-600 font-extrabold text-[15px]">우선 권역 안내</div>
              
              <div className="space-y-2 text-[13.5px] font-bold text-slate-700">
                <div className="py-2.5 bg-teal-50/50 rounded-xl border border-teal-500/10">고양시 전 지역</div>
                <div className="py-2.5 bg-teal-50/50 rounded-xl border border-teal-500/10">파주시 전 지역</div>
                <div className="py-2.5 bg-teal-50/50 rounded-xl border border-teal-500/10">양주시 전 지역</div>
              </div>

              <div className="text-[12px] text-slate-400 leading-normal">
                * 인근 경기 북부 시/군 단위 지역도 유선 문의 시 담당 엔지니어가 출장 일정 및 실사 협의를 도와드립니다.
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
