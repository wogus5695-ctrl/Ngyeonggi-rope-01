import React from "react";

interface LocalEmpathyProps {
  locationName: string;
  dynamicIntro?: string;
}

export default function LocalEmpathy({ locationName, dynamicIntro }: LocalEmpathyProps) {
  return (
    <section className="section-py bg-slate-50/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Description */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-teal-600 text-[13px] font-extrabold tracking-wider uppercase">
              Rain Damage & Warning
            </div>
            
            <h2 className="text-2.5xl sm:text-3.5xl font-black text-slate-800 tracking-tight leading-tight">
              비가 내린 뒤 젖어드는 창호 주변,<br className="hidden sm:block" />
              단순히 실리콘을 위에 덧바르는 것만으로는 해결되지 않습니다.
            </h2>
            
            <div className="text-[14.5px] text-slate-600 space-y-4 leading-relaxed">
              <p>
                집안 내부 벽지가 물에 젖어 누렇게 얼룩지고 곰팡이가 피어오르는 것은 샷시 주변의 코킹 마감재가 노화되어 이미 방수 기능을 상실했다는 위험 신호입니다.
              </p>
              
              {/* 동적 키워드 문구 삽입 (2번: {지역명} 지역의 {작업명}은 단순 실리콘 보수보다 누수 원인 확인이 중요합니다.) */}
              <p className="bg-teal-50 border border-teal-500/10 text-teal-800 p-4.5 rounded-2xl font-bold">
                {dynamicIntro || `${locationName} 지역의 외부 코킹 보수는 단순한 실리콘 처방보다 정확한 누수 지점 실사가 먼저입니다.`}
              </p>

              <p>
                외부에서 비바람에 그대로 노출되어 삭고 갈라진 노후 실리콘을 걷어내지 않은 채, 그 위에 새로운 코킹을 덧바르는 덧방 시공은 접착 계면이 금방 다시 찢어집니다. 벌어진 틈으로 유입된 물이 내부에 갇혀 벽 내부 콘크리트를 부식시키고 누수 재발 하자를 일으키는 원인이 됩니다.
              </p>
            </div>
          </div>

          {/* Right Warning Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white border border-slate-100 rounded-3xl p-6.5 shadow-3xs space-y-3">
              <h3 className="text-[15.5px] font-extrabold text-slate-800 flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-rose-500 rounded-full flex-shrink-0"></span>
                실리콘 들뜸 및 경화 현상
              </h3>
              <p className="text-[13px] text-slate-500 leading-normal">
                강한 여름 자외선과 겨울 혹한에 수축 팽창을 겪으며 마감재가 푸석하게 경질화되어 벽체로부터 떨어져 나갑니다.
              </p>
            </div>

            <div className="bg-white border border-slate-100 rounded-3xl p-6.5 shadow-3xs space-y-3">
              <h3 className="text-[15.5px] font-extrabold text-slate-800 flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-rose-500 rounded-full flex-shrink-0"></span>
                샷시 프레임과 옹벽 간의 틈새
              </h3>
              <p className="text-[13px] text-slate-500 leading-normal">
                창호 프레임이 미세하게 흔들리거나 자리를 이탈하며 콘크리트 계면 사이에 유격이 발생해 다량의 빗물이 침투합니다.
              </p>
            </div>

            <div className="bg-white border border-slate-100 rounded-3xl p-6.5 shadow-3xs space-y-3">
              <h3 className="text-[15.5px] font-extrabold text-slate-800 flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-rose-500 rounded-full flex-shrink-0"></span>
                외벽 조인트 및 미세 균열
              </h3>
              <p className="text-[13px] text-slate-500 leading-normal">
                창틀 상부 주변 옹벽의 균열선이 누설로 이어져 빗물이 벽을 타고 세대 내부 몰딩으로 직접 흘러드는 고질적 하자가 발생합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
