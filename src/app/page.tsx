import { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import FAQSchema from "@/components/FAQSchema";
import FloatingCallButton from "@/components/FloatingCallButton";
import { getMetadata } from "@/lib/seo";
import { BRAND_HUB_CONTENT } from "@/data/brandHub";

// Modular Section Components
import LocalHero from "@/components/sections/LocalHero";
import LocalDiagnostics from "@/components/sections/LocalDiagnostics";
import LocalEmpathy from "@/components/sections/LocalEmpathy";
import LocalProcess from "@/components/sections/LocalProcess";
import WhyProfessional from "@/components/sections/WhyProfessional";
import LocalFAQ from "@/components/sections/LocalFAQ";
import LocalPortfolio from "@/components/sections/LocalPortfolio";
import { getDynamicHomeData, getHash } from "@/lib/dynamicHome";
import { TEUMSAE_ALLOWED_REGIONS } from "@/data/allowedKeywords";
import { isSeoPilotKeyword, normalizeKeyword } from "@/data/seoPilotConfig";
import { PILOT_SERVICE_CONTENTS } from "@/data/pilotContentConfig";
import { getPilotMetadata } from "@/data/pilotMetadataConfig";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

// 허용된 키워드 및 지역 유효성 안전 검증 헬퍼
function validateKeyword(k: string | undefined): { isValid: boolean; region: string; service: string } {
  if (!k) return { isValid: false, region: "틈새케어", service: "창틀코킹" };

  const decoded = decodeURIComponent(k);
  const parts = decoded.split("-");
  if (parts.length < 2) return { isValid: false, region: "틈새케어", service: "창틀코킹" };

  const [rawRegion, rawService] = parts;
  
  // 화이트리스트 검증 (allowedKeywords 기반)
  // 입력된 지역이 allowedKeywords에 명시되어 있거나 그 일부분인지 체크
  const isRegionAllowed = Object.values(TEUMSAE_ALLOWED_REGIONS).some(
    (r) => r.name === rawRegion || r.slug === rawRegion || rawRegion.includes(r.name)
  );

  const allowedServices = [
    "창틀코킹", "창틀누수", "빗물누수", "창틀실리콘", "샷시실리콘", "외벽누수",
    "외벽방수", "옥상방수", "건물방수", "외벽도색",
    "지붕방수", "지붕보수", "지붕누수"
  ];
  const isServiceAllowed = allowedServices.includes(rawService);

  if (isRegionAllowed && isServiceAllowed) {
    return { isValid: true, region: rawRegion, service: rawService };
  }

  // 매칭 실패 시 기본값 안전 처리
  return { isValid: false, region: "틈새케어", service: "창틀코킹" };
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const unresolvedParams = await searchParams;
  const k = typeof unresolvedParams.k === 'string' ? unresolvedParams.k : undefined;
  console.log('[DEBUG generateMetadata] k =', k);

  if (k !== undefined) {
    const { isValid, region, service } = validateKeyword(k);
    if (!isValid) {
      notFound();
    }

    const hash = getHash(`${region}-${service}`);
    const data = getDynamicHomeData(region, service, hash);
    const isWaterproofing = ["외벽방수", "옥상방수", "건물방수", "외벽도색", "지붕방수", "지붕보수", "지붕누수"].includes(service);
    const cleanK = decodeURIComponent(k);

    const isPilot = isSeoPilotKeyword(cleanK);
    const pilotMeta = isPilot ? getPilotMetadata(normalizeKeyword(cleanK)) : null;

    const baseMeta = getMetadata({
      title: pilotMeta ? pilotMeta.title : data.metaTitle,
      description: pilotMeta ? pilotMeta.description : data.metaDesc,
      path: `/?k=${encodeURIComponent(cleanK)}`,
      ogImage: isWaterproofing ? "/og-image-waterproof.jpg" : undefined,
    });

    return {
      ...baseMeta,
      alternates: undefined,
      openGraph: {
        ...baseMeta.openGraph,
        title: pilotMeta ? pilotMeta.ogTitle : baseMeta.openGraph?.title,
        description: pilotMeta ? pilotMeta.ogDescription : baseMeta.openGraph?.description,
        url: undefined,
      },
    };
  }

  return getMetadata({
    title: BRAND_HUB_CONTENT.subtitle,
    description: BRAND_HUB_CONTENT.intro,
    path: "/",
  });
}

export default async function Home({ searchParams }: Props) {
  const unresolvedParams = await searchParams;
  const k = typeof unresolvedParams.k === 'string' ? unresolvedParams.k : undefined;

  // 1. k 쿼리 파라미터 유입 시 유효성 검증 (무효 키워드는 404 반환)
  if (k !== undefined) {
    const { isValid } = validateKeyword(k);
    if (!isValid) {
      notFound();
    }
  }

  const { isValid, region, service } = validateKeyword(k);

  const isWaterproofing = isValid && ["외벽방수", "옥상방수", "건물방수", "외벽도색", "지붕방수", "지붕보수", "지붕누수"].includes(service);
  const phone = isWaterproofing ? "010-4667-5568" : "010-3951-6831";

  // 기본 브랜드 설정 (Fallback)
  let heroLocation = "틈새케어";
  let heroService = "창틀 틈새 및 누수 원인 진단";
  let heroIntro = `창틀 주변 누수와 빗물 유입 흔적은 방치할수록 손상이 커질 수 있습니다.\n틈새케어는 단순 실리콘 덧방보다 기존 실리콘 상태와 외벽 균열을 확인하고,\n현장 상태에 맞는 보수 작업 범위를 안내해 드립니다.`;
  
  let analysisTitle = "";
  let analysisIntro = BRAND_HUB_CONTENT.empathyDesc;
  let analysisBlocks: any[] | undefined = undefined;
  
  let processTitle = "틈새케어만의 5단계 정석 밀봉 프로세스";
  let processSteps: any[] = BRAND_HUB_CONTENT.workProcess;
  
  let faqTitle = "자주 묻는 질문";
  let faqList = BRAND_HUB_CONTENT.faqs; // 기본 6대 질문 전체 노출
  
  let portfolioTitle = "대표 시공 사례";
  let ctaHeader = BRAND_HUB_CONTENT.ctaHeader;
  let analysisDynamicKeyword = "";
  
  let dynamicBanner = "";
  let dynamicIntro = "";
  let dynamicMethod = "";

  // 2. 유효한 키워드 유입 시 동적 변환 실행
  if (isValid) {
    const hash = getHash(`${region}-${service}`);
    const data = getDynamicHomeData(region, service, hash);

    heroLocation = `${region}`;
    heroService = `${service} 전문 상담 및 시공`;
    heroIntro = data.summary;

    analysisTitle = data.analysisTitle;
    analysisIntro = [
      data.regionText,
      data.analysisDesc || "",
      data.serviceBlock
    ].filter(Boolean).join('\n\n');
    analysisBlocks = data.analysisBlocks;

    processTitle = data.processTitle;
    processSteps = data.processSteps;

    faqTitle = data.faqTitle || "자주 묻는 질문";
    faqList = data.faqs || BRAND_HUB_CONTENT.faqs; // 동적으로 분산 변환된 FAQ 목록 매핑 (유실 시 기본값 백업)

    portfolioTitle = data.portfolioTitle;
    ctaHeader = data.ctaHeader;
    analysisDynamicKeyword = `${region} ${service}`;
    
    // 요구사항 동적 카피 변환 바인딩
    dynamicBanner = data.dynamicBanner;
    dynamicIntro = data.dynamicIntro;
    dynamicMethod = data.dynamicMethod;
  }

  // 3단계 Pilot 키워드 확인 및 콘텐츠 분기
  const isPilot = isValid && k ? isSeoPilotKeyword(k) : false;
  const pilotContent = isPilot ? PILOT_SERVICE_CONTENTS[service] : null;

  const content = BRAND_HUB_CONTENT;

  const canonicalUrl = isValid && k ? `https://www.teumsaecare.co.kr/?k=${encodeURIComponent(k)}` : "https://www.teumsaecare.co.kr/";
  const schemaImage = isWaterproofing 
    ? "https://www.teumsaecare.co.kr/og-image-waterproof.jpg" 
    : "https://www.teumsaecare.co.kr/og-image.png";

  return (
    <div className="flex min-h-screen flex-col font-sans antialiased overflow-x-hidden">
      {/* 동적페이지 전용 canonical 및 og:url 명시적 head 주입 */}
      {isValid && k && (
        <head>
          <link rel="canonical" href={canonicalUrl} />
          <meta property="og:url" content={canonicalUrl} />
        </head>
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": isWaterproofing ? "RoofingContractor" : "HomeAndConstructionBusiness",
            "name": isValid ? `${heroLocation} ${service} - 틈새케어` : "틈새케어",
            "url": canonicalUrl,
            "image": schemaImage,
            "telephone": phone,
            "description": isValid ? heroIntro : BRAND_HUB_CONTENT.intro,
            "address": {
              "@type": "PostalAddress",
              "addressRegion": heroLocation || "수도권",
              "addressCountry": "KR"
            }
          })
        }}
      />

      {/* FAQ 구조화 데이터 자동 주입 (Pilot인 경우 Visible FAQ와 100% 동기화) */}
      <FAQSchema faqs={pilotContent ? pilotContent.faq.faqs : faqList} />

      <Header phone={phone} isWaterproofing={isWaterproofing} />

      <main className="flex-grow bg-white">
        {/* 1. 히어로 섹션 */}
        <LocalHero
          locationName={heroLocation}
          serviceTitle={heroService}
          serviceName={isValid ? service : "창틀코킹"}
          serviceSuffix={isValid && service.startsWith("지붕") ? "전문 상담" : "전문 진단"}
          phone={phone}
          intro={pilotContent ? pilotContent.hero.intro(heroLocation) : heroIntro}
          isWaterproofing={isWaterproofing}
          subCopy={pilotContent?.hero.subCopy}
          badgeText={pilotContent?.hero.badgeText}
          keywords={
            pilotContent
              ? pilotContent.hero.badges
              : isWaterproofing
              ? [
                  "100% 정석 V-컷팅 시공",
                  analysisDynamicKeyword ? `${analysisDynamicKeyword} 정밀 진단` : "건물 균열 정밀 진단",
                  "고탄성 외벽 방수 실런트",
                  "철저한 책임 A/S 보증"
                ]
              : [
                  "100% 전면 철거 원칙",
                  analysisDynamicKeyword ? `${analysisDynamicKeyword} 정밀 검수` : "열화상 틈새 진단",
                  "5단계 밀봉 전용 자재",
                  "철저한 책임 A/S 보증"
                ]
          }
        />

        {/* 1-2. 간이 자가진단 섹션 (Hero 하단으로 이동) */}
        <LocalDiagnostics
          isWaterproofing={isWaterproofing}
          diagnosticsBadge={pilotContent?.diagnostics.badge}
          diagnosticsHeadline={pilotContent?.diagnostics.headline}
          diagnosticsDesc={pilotContent?.diagnostics.description}
          customCards={pilotContent?.diagnostics.cards}
          alertText={pilotContent?.diagnostics.alertText}
        />

        {/* 2. 문제 공감 섹션 */}
        <LocalEmpathy
          locationName={heroLocation}
          dynamicIntro={
            pilotContent
              ? (service === "지붕보수"
                  ? `${heroLocation}에서 지붕 부위 노후나 손상이 의심된다면 상태와 보수 범위를 함께 확인하는 것이 먼저입니다.`
                  : undefined)
              : (dynamicIntro || undefined)
          }
          isWaterproofing={isWaterproofing}
          empathyHeadline={pilotContent?.empathy.headline}
          empathyDesc={pilotContent?.empathy.description}
          customCards={pilotContent?.empathy.cards}
        />

        {/* 4. 진단 중심 작업 방식 섹션 */}
        <div id="process">
          <LocalProcess
            title={pilotContent ? pilotContent.process.title.pc : processTitle}
            process={pilotContent ? [] : processSteps}
            isWaterproofing={isWaterproofing}
            customSteps={pilotContent?.process.steps}
            customTitle={pilotContent?.process.title}
            customSubDesc={pilotContent?.process.subDesc}
            customNote={pilotContent?.process.conclusionNote}
          />
        </div>

        {/* 5. 왜 전문업체가 필요한지 설명하는 섹션 */}
        <WhyProfessional
          locationName={heroLocation}
          dynamicBanner={
            pilotContent
              ? (service === "지붕보수"
                  ? `${heroLocation}에서 지붕 부위 노후나 손상이 의심된다면 상태와 보수 범위를 함께 확인하는 것이 먼저입니다.`
                  : undefined)
              : (dynamicBanner || undefined)
          }
          isWaterproofing={isWaterproofing}
        />

        {/* 7. 시공 레퍼런스 사례 */}
        <div id="cases">
          <LocalPortfolio
            title={portfolioTitle}
            isWaterproofing={isWaterproofing}
          />
        </div>

        {/* 8. FAQ 섹션 */}
        <div id="faq">
          <LocalFAQ
            title={pilotContent ? pilotContent.faq.title : faqTitle}
            faqs={pilotContent ? pilotContent.faq.faqs : faqList}
          />
        </div>

        {/* 마무리 CTA 및 상담 접수 폼 (강조 카드 리디자인) */}
        <section id="contact" className="py-24 bg-teal-50/15 relative overflow-hidden">
          {/* 백그라운드 블러 효과 */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-100/35 rounded-full blur-3xl -z-10"></div>
          
          <div className="max-w-[960px] mx-auto px-4 relative z-10">
            {/* CTA 카드 컨테이너 */}
            <div className="bg-white border border-teal-500/15 shadow-xl shadow-teal-950/[0.03] rounded-[32px] p-7 sm:p-10 md:p-14 text-center space-y-8">
              
              {/* 라벨 */}
              <div className="text-teal-600 text-[13px] font-extrabold tracking-wider uppercase">
                Consultation Request
              </div>
              
              {/* 메인 제목 */}
              <h2 className="text-[26px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-black text-slate-900 tracking-tight leading-[1.25] max-w-3xl mx-auto">
                <span className="block">
                  {isValid ? `${heroLocation} ${service} 상담, ` : "틈새케어 빗물누수 상담, "}
                </span>
                <span className="block mt-1 sm:mt-2">
                  누수 원인부터 <span className="text-teal-600">빠르게 확인하세요</span>
                </span>
              </h2>
              
              {/* 본문 설명 */}
              <p className="text-[14.5px] sm:text-[15.5px] text-slate-500 leading-[1.7] max-w-[620px] mx-auto">
                {isWaterproofing 
                  ? "들뜬 부위만 대충 덮으면 재누수가 반복될 수 있습니다. 외벽 균열, 옥상 우레탄, 조인트 방수 상태를 함께 확인해 필요한 보수 방향을 안내해드립니다."
                  : "젖은 위치만 보고 덧방하면 재누수가 반복될 수 있습니다. 창틀·샷시·외벽 상태를 함께 확인해 필요한 보수 방향을 안내해드립니다."}
              </p>
              
              {/* CTA 버튼 */}
              <div className="pt-2">
                <ContactCTA phone={phone} isWaterproofing={isWaterproofing} />
              </div>
              
              {/* 태그 안내 영역 */}
              <div className="pt-4 border-t border-slate-100 max-w-md mx-auto space-y-3">
                <div className="text-[13px] font-bold text-slate-400">
                  사진 상담 시 확인 항목
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {(isWaterproofing 
                    ? ["외벽 균열", "옥상 우레탄", "방수 코팅", "조인트 균열"]
                    : ["창틀 하부", "실리콘 갈라짐", "외벽 크랙", "샷시 접합부"]
                  ).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-teal-50 text-teal-800 font-extrabold text-[12px] rounded-full border border-teal-500/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* 추가 신뢰 문구 */}
              <div className="pt-2 text-[12.5px] text-slate-400 font-medium leading-relaxed">
                현장 상태에 따라 덧방, 부분 제거, 올제거 여부를 구분해 안내합니다.
              </div>
              
            </div>
          </div>
        </section>
      </main>

      <Footer dynamicKeyword={analysisDynamicKeyword} phone={phone} isWaterproofing={isWaterproofing} />
      <FloatingCallButton phone={phone} />
    </div>
  );
}
