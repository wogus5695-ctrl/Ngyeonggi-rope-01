"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    region: "",
    service: "창틀코킹",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.region) {
      alert("성함, 연락처, 시공 지역은 필수 항목입니다.");
      return;
    }
    // 콘솔 로그 및 제출 완료 처리 (API 연동 대체)
    console.log("Teumsae Care Consultation Request:", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-teal-50/50 border border-teal-500/10 rounded-3xl p-8 md:p-12 text-center">
        <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-slate-800 mb-3">상담 요청이 등록되었습니다</h3>
        <p className="text-slate-600 text-[15px] leading-relaxed max-w-sm mx-auto">
          담당 엔지니어가 접수된 내용을 파악하여 신속히 전화로 시공 가능 일정 및 예상 비용을 상세히 안내해 드리겠습니다.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-md border border-teal-500/10 rounded-3xl p-8 md:p-10 shadow-xl">
      <h3 className="text-xl font-bold text-slate-800 mb-6 tracking-tight text-center sm:text-left">
        전문 엔지니어 1:1 상담 신청
      </h3>
      
      <div className="space-y-5">
        {/* Name */}
        <div>
          <label className="block text-[13.5px] font-bold text-slate-600 mb-2">성함</label>
          <input
            type="text"
            required
            placeholder="홍길동"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-teal-500 focus:bg-white rounded-xl text-[14.5px] text-slate-800 outline-none transition-all"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-[13.5px] font-bold text-slate-600 mb-2">연락처</label>
          <input
            type="tel"
            required
            placeholder="010-3951-6831"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-teal-500 focus:bg-white rounded-xl text-[14.5px] text-slate-800 outline-none transition-all"
          />
        </div>

        {/* Region */}
        <div>
          <label className="block text-[13.5px] font-bold text-slate-600 mb-2">시공 희망 지역 (동/구 단위)</label>
          <input
            type="text"
            required
            placeholder="예: 고양시 화정동, 파주시 운정동 등"
            value={formData.region}
            onChange={(e) => setFormData({ ...formData, region: e.target.value })}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-teal-500 focus:bg-white rounded-xl text-[14.5px] text-slate-800 outline-none transition-all"
          />
        </div>

        {/* Service Type */}
        <div>
          <label className="block text-[13.5px] font-bold text-slate-600 mb-2">원하시는 케어 분야</label>
          <select
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-teal-500 focus:bg-white rounded-xl text-[14.5px] text-slate-800 outline-none transition-all"
          >
            <option value="창틀코킹">창틀코킹</option>
            <option value="창틀누수">창틀누수</option>
            <option value="빗물누수">빗물누수</option>
            <option value="창틀실리콘">창틀실리콘</option>
            <option value="샷시실리콘">샷시실리콘</option>
            <option value="외벽누수">외벽누수</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label className="block text-[13.5px] font-bold text-slate-600 mb-2">누수 증상 또는 세대 정보 (선택)</label>
          <textarea
            placeholder="예: 아파트 평형대, 창문 하부 누수 자국 유무 등 상세 내용을 적어주시면 더 정확한 1차 견적을 받아보실 수 있습니다."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={3}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-teal-500 focus:bg-white rounded-xl text-[14.5px] text-slate-800 outline-none transition-all resize-none"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-4 text-[15px] font-black text-white bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 rounded-xl shadow-md transition-all cursor-pointer"
        >
          현장 실사 및 견적 상담 접수하기
        </button>
      </div>
      
      <p className="mt-4 text-[12px] text-slate-400 text-center leading-normal">
        * 제공해주신 고객 정보는 상담 및 시공 일정 조율 외에 마케팅 용도로 절대 무단 활용하지 않습니다.
      </p>
    </form>
  );
}
