import React from "react";
import Link from "next/link";

interface LinkItem {
  label: string;
  path: string;
}

interface LocalNearbyLinksProps {
  links: LinkItem[];
}

export default function LocalNearbyLinks({
  links,
}: LocalNearbyLinksProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
      {links.map((link, idx) => {
        // 기존 레인가드의 URL 매핑 구조와 유사하게 URL을 동적 설계하되, 틈새케어의 URL 형식을 따른다.
        // /?k=지역명-작업명 쿼리 파라미터를 메인으로 가므로, targetUrl을 /?k=링크명-서비스명 형태로 치환한다.
        const targetUrl = `/?k=${encodeURIComponent(link.label)}`;

        return (
          <Link
            key={idx}
            href={targetUrl}
            className="block px-4 py-3 bg-white border border-slate-100 text-slate-600 text-[13.5px] font-bold text-center hover:bg-teal-50 hover:text-teal-700 hover:border-teal-200/50 rounded-xl transition-all shadow-3xs"
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}
