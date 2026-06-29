import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col font-sans antialiased bg-slate-50">
      <Header hideKakao={true} />
      
      <main className="flex-grow flex items-center justify-center pt-32 pb-24 px-4">
        <div className="max-w-md w-full bg-white border border-teal-500/10 rounded-[32px] p-8 md:p-12 text-center shadow-xl relative overflow-hidden">
          {/* Background Blurred droplet */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-teal-500/5 rounded-full blur-2xl"></div>

          {/* Droplet icon with 404 */}
          <div className="w-20 h-20 bg-teal-50 border border-teal-500/15 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
            <svg className="w-10 h-10 text-teal-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.5C12 2.5 19 9.5 19 14.5C19 18.366 15.866 21.5 12 21.5C8.13401 21.5 5 18.366 5 14.5C5 9.5 12 2.5 12 2.5Z" fill="currentColor" opacity="0.1" />
              <path d="M12 2.5C12 2.5 19 9.5 19 14.5C19 18.366 15.866 21.5 12 21.5C8.13401 21.5 5 18.366 5 14.5C5 9.5 12 2.5 12 2.5Z" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="12" cy="14" r="1.5" fill="currentColor" />
              <path d="M12 8v3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>

          <h2 className="text-3xl font-black text-slate-800 mb-4 tracking-tight">
            요청하신 틈새를<br />찾을 수 없습니다
          </h2>
          
          <p className="text-[14px] text-slate-500 leading-relaxed mb-8">
            존재하지 않거나 만료된 시공 페이지 경로입니다. 
            주소가 올바른지 확인하시거나 아래 홈 버튼을 통해 틈새케어 정밀 검수를 다시 이용해 주세요.
          </p>

          <Link
            href="/"
            className="inline-flex items-center justify-center w-full py-4 text-[14.5px] font-black text-white bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 rounded-xl shadow-md transition-all"
          >
            메인 홈으로 돌아가기
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
