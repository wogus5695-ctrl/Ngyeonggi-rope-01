"use client";

import React from "react";
import Link from "next/link";
import { DeterministicNavResult } from "@/lib/deterministicNavResolver";

interface TierLocalNavigationProps {
  navData: DeterministicNavResult;
  serviceName: string;
}

export default function TierLocalNavigation({
  navData,
  serviceName
}: TierLocalNavigationProps) {
  const isChildDirectory = navData.navType === 'CHILD_DIRECTORY';

  return (
    <section className="py-14 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Navigation Block */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <div>
              <div className="text-teal-600 text-[12px] font-black tracking-widest uppercase">
                {isChildDirectory ? "지역 서비스 안내" : "지역 내 서비스 안내"}
              </div>
              <h3 className="text-xl font-black text-slate-900 tracking-tight mt-1">
                {isChildDirectory
                  ? `${navData.municipalityName} 관할 주요 지역 ${serviceName}`
                  : `${navData.municipalityName} 내 다른 지역 ${serviceName}`}
              </h3>
            </div>

            {/* Parent Hub Link Button */}
            <div>
              <Link
                href={navData.municipalityHubUrl}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-[13px] font-bold text-teal-700 bg-teal-50 hover:bg-teal-100 rounded-xl border border-teal-200/70 transition-colors"
              >
                <span>{navData.municipalityName} 전체 지역 보기</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Links Grid: Deterministic min(6, N) links */}
          {navData.links.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {navData.links.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.url}
                  className="group flex items-center justify-between p-3.5 rounded-xl bg-slate-50 hover:bg-teal-50/70 border border-slate-100 hover:border-teal-200 transition-all text-left"
                >
                  <span className="text-[14px] font-bold text-slate-700 group-hover:text-teal-800 transition-colors">
                    {item.anchorText}
                  </span>
                  <svg className="w-4 h-4 text-slate-300 group-hover:text-teal-600 transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-[13.5px] text-slate-500">
              {navData.municipalityName} 전체 서비스 안내는 상단의 지자체 안내 페이지에서 확인하실 수 있습니다.
            </p>
          )}

        </div>

      </div>
    </section>
  );
}
