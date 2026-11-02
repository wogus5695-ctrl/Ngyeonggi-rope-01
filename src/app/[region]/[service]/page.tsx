import { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import FAQSchema from "@/components/FAQSchema";
import FloatingCallButton from "@/components/FloatingCallButton";
import LocalHero from "@/components/sections/LocalHero";
import LocalDiagnostics from "@/components/sections/LocalDiagnostics";
import LocalEmpathy from "@/components/sections/LocalEmpathy";
import LocalProcess from "@/components/sections/LocalProcess";
import WhyProfessional from "@/components/sections/WhyProfessional";
import LocalPortfolio from "@/components/sections/LocalPortfolio";
import LocalFAQ from "@/components/sections/LocalFAQ";
import { SERVICE_CONTENT_CONFIG } from "@/data/serviceContentConfig";
import { resolveParentDistrict } from "@/lib/parentDistrictResolver";
import { getDynamicHomeData, getHash } from "@/lib/dynamicHome";
import { SEO_CONFIG } from "@/lib/seo";

const MAPO_COHORT_REGIONS = [
  "마포구",
  "공덕동",
  "아현동",
  "도화동",
  "용강동",
  "대흥동",
  "염리동",
  "신수동",
  "서강동",
  "서교동",
  "합정동",
  "망원동",
  "연남동",
  "성산동",
  "상암동"
] as const;

const MAPO_SET = new Set<string>(MAPO_COHORT_REGIONS);

type Props = {
  params: Promise<{ region: string; service: string }>;
};

/**
 * 마포구 창틀누수 15개 정규 경로 빌드 타임 사전 생성 (SSG)
 */
export function generateStaticParams() {
  return MAPO_COHORT_REGIONS.map((region) => ({
    region,
    service: "창틀누수",
  }));
}

/**
 * 신규 경로형 메타데이터 생성
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { region: rawRegion, service: rawService } = await params;
  const region = decodeURIComponent(rawRegion || "");
  const service = decodeURIComponent(rawService || "");

  if (!MAPO_SET.has(region) || service !== "창틀누수") {
    return {};
  }

  const serviceConf = SERVICE_CONTENT_CONFIG["창틀누수"];
  const parentDistrict = resolveParentDistrict(region);
  const metaTitle = serviceConf.metadata.titleTemplate(region);
  const metaDescription = serviceConf.metadata.descriptionTemplate(region, parentDistrict);
  const canonicalUrl = `https://www.teumsaecare.co.kr/${encodeURIComponent(region)}/${encodeURIComponent(service)}`;

  return {
    metadataBase: new URL(SEO_CONFIG.baseUrl),
    title: {
      absolute: metaTitle,
    },
    description: metaDescription,
    keywords: SEO_CONFIG.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: canonicalUrl,
      siteName: "틈새케어",
      locale: "ko_KR",
      type: "website",
      images: [
        {
          url: SEO_CONFIG.ogImage,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [SEO_CONFIG.ogImage],
    },
    other: {
      thumbnail: `https://www.teumsaecare.co.kr${SEO_CONFIG.ogImage}`,
    },
  };
}

export default async function MapoCohortPathPage({ params }: Props) {
  const { region: rawRegion, service: rawService } = await params;
  const region = decodeURIComponent(rawRegion || "");
  const service = decodeURIComponent(rawService || "");

  // 15개 마포구 지역 및 창틀누수 작업명 외에는 엄격히 404 반환
  if (!MAPO_SET.has(region) || service !== "창틀누수") {
    notFound();
  }

  const phone = "010-3951-6831";
  const p2ServiceContent = SERVICE_CONTENT_CONFIG["창틀누수"];
  const hash = getHash(`${region}-${service}`);
  const dynamicData = getDynamicHomeData(region, service, hash);

  const heroLocation = region;
  const canonicalUrl = `https://www.teumsaecare.co.kr/${encodeURIComponent(region)}/${encodeURIComponent(service)}`;
  const schemaDescription = p2ServiceContent.hero.subCopy;
  const whyProfessionalBanner = `${heroLocation} ${service} 점검 및 보수. 원인 확인부터 마감까지 체계적으로 안내합니다.`;

  const finalFaqs = p2ServiceContent.faq.faqs(heroLocation);

  return (
    <div className="flex min-h-screen flex-col font-sans antialiased overflow-x-hidden">
      {/* 구조화 데이터 JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HomeAndConstructionBusiness",
            "name": `${heroLocation} ${service} - 틈새케어`,
            "url": canonicalUrl,
            "image": "https://www.teumsaecare.co.kr/og-image.png",
            "telephone": phone,
            "description": schemaDescription,
            "address": {
              "@type": "PostalAddress",
              "addressRegion": heroLocation,
              "addressCountry": "KR",
            },
          }),
        }}
      />

      {/* FAQ 구조화 데이터 주입 */}
      <FAQSchema faqs={finalFaqs} />

      <Header phone={phone} isWaterproofing={false} />

      <main className="flex-grow bg-white">
        {/* 1. 히어로 섹션 */}
        <LocalHero
          locationName={heroLocation}
          serviceTitle={p2ServiceContent.hero.headline(heroLocation)}
          serviceName={service}
          serviceSuffix="현장 점검 및 상담"
          phone={phone}
          intro={p2ServiceContent.hero.subCopy}
          isWaterproofing={false}
          subCopy={p2ServiceContent.hero.subCopy}
          badgeText={p2ServiceContent.hero.badgeText}
          keywords={p2ServiceContent.hero.badges}
        />

        {/* 1-2. 간이 자가진단 섹션 */}
        <LocalDiagnostics
          isWaterproofing={false}
          diagnosticsBadge="현장 상태 확인"
          diagnosticsHeadline={p2ServiceContent.diagnostics.headline}
          diagnosticsDesc={p2ServiceContent.diagnostics.description}
          customCards={p2ServiceContent.diagnostics.cards.map((c) => ({
            titlePC: c.title,
            titleMO: c.title,
            description: c.description,
          }))}
          alertText={p2ServiceContent.diagnostics.alertText}
        />

        {/* 2. 문제 공감 섹션 */}
        <LocalEmpathy
          locationName={heroLocation}
          dynamicIntro={p2ServiceContent.empathy.description}
          isWaterproofing={false}
          empathyHeadline={p2ServiceContent.empathy.headline}
          empathyDesc={p2ServiceContent.empathy.description}
          customCards={p2ServiceContent.empathy.cards}
        />

        {/* 4. 진단 중심 작업 방식 섹션 */}
        <div id="process">
          <LocalProcess
            title={p2ServiceContent.process.title}
            process={[]}
            isWaterproofing={false}
            customSteps={p2ServiceContent.process.steps.map((s) => ({
              step: s.step,
              title: s.title,
              description: s.description,
              point: "현장 상태 확인",
            }))}
            customTitle={{
              pc: p2ServiceContent.process.title,
              mo: p2ServiceContent.process.title,
            }}
            customSubDesc={{
              pc: p2ServiceContent.process.subDesc,
              mo: p2ServiceContent.process.subDesc,
            }}
            customNote={{
              pc: p2ServiceContent.process.conclusionNote,
              mo: p2ServiceContent.process.conclusionNote,
            }}
          />
        </div>

        {/* 5. 왜 전문업체가 필요한지 설명하는 섹션 */}
        <WhyProfessional
          locationName={heroLocation}
          dynamicBanner={whyProfessionalBanner}
          isWaterproofing={false}
        />

        {/* 7. 시공 레퍼런스 사례 */}
        <div id="cases">
          <LocalPortfolio
            title={dynamicData.portfolioTitle}
            isWaterproofing={false}
          />
        </div>

        {/* 8. FAQ 섹션 */}
        <div id="faq">
          <LocalFAQ
            title={p2ServiceContent.faq.title}
            faqs={finalFaqs}
          />
        </div>

        {/* 마무리 CTA 및 상담 접수 폼 */}
        <section id="contact" className="py-24 bg-teal-50/15 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-100/35 rounded-full blur-3xl -z-10"></div>

          <div className="max-w-[960px] mx-auto px-4 relative z-10">
            <div className="bg-white border border-teal-500/15 shadow-xl shadow-teal-950/[0.03] rounded-[32px] p-7 sm:p-10 md:p-14 text-center space-y-8">
              <div className="text-teal-600 text-[13px] font-extrabold tracking-wider uppercase">
                Consultation Request
              </div>

              <h2 className="text-[26px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-black text-slate-900 tracking-tight leading-[1.25] max-w-3xl mx-auto">
                <span className="block">{heroLocation} {service} 상담, </span>
                <span className="block mt-1 sm:mt-2">
                  누수 원인부터 <span className="text-teal-600">빠르게 확인하세요</span>
                </span>
              </h2>

              <p className="text-[14.5px] sm:text-[15.5px] text-slate-500 leading-[1.7] max-w-[620px] mx-auto">
                젖은 위치만 보고 덧방하면 재누수가 반복될 수 있습니다. 창틀·샷시·외벽 상태를 함께 확인해 필요한 보수 방향을 안내해드립니다.
              </p>

              <div className="pt-2">
                <ContactCTA phone={phone} isWaterproofing={false} />
              </div>

              <div className="pt-4 border-t border-slate-100 max-w-md mx-auto space-y-3">
                <div className="text-[13px] font-bold text-slate-400">
                  사진 상담 시 확인 항목
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {["창틀 하부", "실리콘 갈라짐", "외벽 크랙", "샷시 접합부"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-teal-50 text-teal-800 font-extrabold text-[12px] rounded-full border border-teal-500/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 text-[12.5px] text-slate-400 font-medium leading-relaxed">
                현장 상태에 따라 덧방, 부분 제거, 올제거 여부를 구분해 안내합니다.
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer
        dynamicKeyword={`${heroLocation} ${service}`}
        phone={phone}
        isWaterproofing={false}
      />
      <FloatingCallButton phone={phone} />
    </div>
  );
}
