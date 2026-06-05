"use client";

import React, { useState } from "react";
import { BRAND_HUB_CONTENT } from "@/data/brandHub";

interface FAQItem {
  question: string;
  answer: string;
}

interface LocalFAQProps {
  title: string;
  faqs: FAQItem[];
}

export default function LocalFAQ({ title, faqs }: LocalFAQProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const displayFaqs = faqs && Array.isArray(faqs) && faqs.length > 0 ? faqs : BRAND_HUB_CONTENT.faqs;

  const toggleAccordion = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className="section-py bg-teal-50/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 space-y-3.5">
          <div className="text-teal-600 text-[13px] font-extrabold tracking-wider uppercase">
            Questions & Answers
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {title}
          </h2>
          <p className="text-[14.5px] text-slate-500 max-w-sm mx-auto leading-relaxed">
            시공 의뢰 전 확인해 두시면 도움이 되는 필수 질문 모음입니다.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {displayFaqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;

            return (
              <div
                key={idx}
                className={`bg-white border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-teal-500/25 shadow-sm"
                    : "border-slate-100 hover:border-slate-200"
                }`}
              >
                {/* Accordion Header Trigger */}
                <button
                  onClick={() => toggleAccordion(idx)}
                  type="button"
                  className="w-full flex items-center justify-between gap-4 p-5.5 text-left font-bold text-[14.5px] sm:text-[15.5px] text-slate-800 focus:outline-hidden cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <div
                    className={`w-6 h-6 flex items-center justify-center rounded-full bg-slate-50 text-slate-500 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-teal-50 text-teal-600" : ""
                    }`}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {/* Accordion Body Content */}
                <div
                  className={`transition-all duration-300 ${
                    isOpen ? "max-h-80 border-t border-slate-50" : "max-h-0"
                  }`}
                >
                  <p className="p-5.5 text-[14px] text-slate-600 leading-relaxed whitespace-pre-line bg-slate-50/50">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
