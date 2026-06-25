import React from "react";
import Link from "next/link";

interface FooterProps {
  dynamicKeyword?: string;
  phone?: string;
  isWaterproofing?: boolean;
}

export default function Footer({ dynamicKeyword, phone = "010-9419-6832", isWaterproofing }: FooterProps) {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16 px-4 md:px-8 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-3.5 mb-5">
              <div className="flex items-center justify-center w-9 h-9 rounded-full bg-teal-500/10 border border-teal-500/20">
                <svg
                  className="w-5 h-5 text-teal-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2.5C12 2.5 19 9.5 19 14.5C19 18.366 15.866 21.5 12 21.5C8.13401 21.5 5 18.366 5 14.5C5 9.5 12 2.5 12 2.5Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <span className="text-[17px] font-extrabold tracking-tight text-white">
                틈새케어
              </span>
            </div>
            <p className="text-[14px] leading-relaxed text-slate-400 mb-6">
              {isWaterproofing 
                ? "건물 외벽 균열과 옥상 방수층 결함을 정밀 분석하여 건물의 내구성을 보존하고 누수 문제를 확실하게 해결합니다. 경기 북부 전용 케어 시스템을 운영합니다."
                : "미세한 틈새와 외벽 균열을 추적 진단하여 누수의 고통에서 해방시켜 드립니다. 경기 북부(고양·파주·양주) 전용 케어 시스템을 운영하고 있습니다."}
            </p>

          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-[15px] font-bold mb-5 tracking-tight">서비스 안내</h3>
            <ul className="space-y-3.5 text-[14px]">
              <li>
                <Link href="#process" className="hover:text-teal-400 transition-colors">
                  {isWaterproofing ? "4단계 책임 방수 프로세스" : "5단계 창틀코킹 프로세스"}
                </Link>
              </li>
              <li>
                <Link href="#costs" className="hover:text-teal-400 transition-colors">
                  {isWaterproofing ? "방수 견적 구성 요인" : "코킹 견적 단가 구성 요인"}
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-teal-400 transition-colors">
                  자주 묻는 질문 (FAQ)
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white text-[15px] font-bold mb-5 tracking-tight">엔지니어 상담 센터</h3>
            <p className="text-[20px] font-black text-teal-400 mb-3 hover:text-teal-300 transition-colors">
              <a href={`tel:${phone}`}>{phone}</a>
            </p>
            <ul className="space-y-2 text-[13px] text-slate-500">
              <li>상담 가능 시간: 오전 8시 ~ 오후 8시 (일요일 휴무)</li>
              <li>주요 시공 지역: 경기도 고양시, 파주시, 양주시 및 인접 동 지역</li>
              {dynamicKeyword ? (
                <li>상호명: 레인픽스 | 사업자 명: 최형화 | 사업자 번호: 877-09-03230</li>
              ) : (
                <li>상호명: 올케어서비스 | 사업자 명: 김재현 | 사업자 번호: 405-15-02677</li>
              )}
            </ul>
          </div>
        </div>

        {/* Footer Bottom / Dynamic SEO Hook */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] text-slate-600">
          <p>© {new Date().getFullYear()} 틈새케어. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
