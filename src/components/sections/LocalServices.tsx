import React from "react";
import { BRAND_HUB_CONTENT } from "@/data/brandHub";

interface LocalServicesProps {
  locationName: string;
  serviceTitle: string;
}

export default function LocalServices({ locationName, serviceTitle }: LocalServicesProps) {
  const details = BRAND_HUB_CONTENT.serviceDetails;
  
  // 6개 서비스 데이터를 배열 형태로 매핑
  const servicesList = [
    { slug: "window-caulking", ...details["window-caulking"] },
    { slug: "window-leak", ...details["window-leak"] },
    { slug: "rain-leak", ...details["rain-leak"] },
    { slug: "window-silicone", ...details["window-silicone"] },
    { slug: "sash-silicone", ...details["sash-silicone"] },
    { slug: "outer-wall-leak", ...details["outer-wall-leak"] },
  ];

  return (
    <section className="section-py bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="text-teal-600 text-[13px] font-extrabold tracking-wider uppercase">
            Service Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            {locationName} {serviceTitle || "틈새 밀봉 전문 서비스"}
          </h2>
          <p className="text-[14.5px] text-slate-500 max-w-lg mx-auto leading-relaxed">
            건물을 서서히 망가뜨리는 미세 틈을 정확하게 진단하고 올바른 자재로 철저하게 메웁니다.
          </p>
        </div>

        {/* 6-Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, idx) => (
            <div
              key={service.slug}
              className="bg-slate-50/40 border border-slate-100 hover:border-teal-500/10 rounded-[28px] p-7 md:p-8 flex flex-col justify-between hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Icon Circle */}
                <div className="w-11 h-11 bg-teal-50 text-teal-600 border border-teal-500/15 rounded-xl flex items-center justify-center font-bold text-[14px]">
                  0{idx + 1}
                </div>

                <h3 className="text-[17px] font-extrabold text-slate-800 tracking-tight">
                  {service.title}
                </h3>

                <p className="text-[13.5px] text-slate-500 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
