import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import ContactForm from "@/components/ContactForm";
import FAQSchema from "@/components/FAQSchema";
import { getMetadata } from "@/lib/seo";
import { BRAND_HUB_CONTENT } from "@/data/brandHub";
import { portfolioCases } from "@/data/portfolio";

// Modular Section Components
import LocalHero from "@/components/sections/LocalHero";
import LocalDiagnostics from "@/components/sections/LocalDiagnostics";
import LocalEmpathy from "@/components/sections/LocalEmpathy";
import LocalServices from "@/components/sections/LocalServices";
import LocalProcess from "@/components/sections/LocalProcess";
import WhyProfessional from "@/components/sections/WhyProfessional";
import LocalRegionInfo from "@/components/sections/LocalRegionInfo";
import LocalFAQ from "@/components/sections/LocalFAQ";
import LocalPortfolio from "@/components/sections/LocalPortfolio";
import { getDynamicHomeData, getHash } from "@/lib/dynamicHome";
import { TEUMSAE_ALLOWED_REGIONS } from "@/data/allowedKeywords";

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
  
  // 경기 북부 화이트리스트 검증 (allowedKeywords 기반)
  // 입력된 지역이 allowedKeywords에 명시되어 있거나 그 일부분인지 체크
  const isRegionAllowed = Object.values(TEUMSAE_ALLOWED_REGIONS).some(
    (r) => r.name === rawRegion || r.slug === rawRegion || rawRegion.includes(r.name)
  );

  const allowedServices = ["창틀코킹", "창틀누수", "빗물누수", "창틀실리콘", "샷시실리콘", "외벽누수"];
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

  const { isValid, region, service } = validateKeyword(k);

  if (!isValid) {
    return getMetadata({
      title: BRAND_HUB_CONTENT.subtitle,
      description: BRAND_HUB_CONTENT.intro,
      path: "/",
    });
  }

  const hash = getHash(`${region}-${service}`);
  const data = getDynamicHomeData(region, service, hash);

  return getMetadata({
    title: data.metaTitle,
    description: data.metaDesc,
    path: `/?k=${k}`,
  });
}

export default async function Home({ searchParams }: Props) {
  const unresolvedParams = await searchParams;
  const k = typeof unresolvedParams.k === 'string' ? unresolvedParams.k : undefined;

  // 1. 키워드 검증 및 기본값 분기
  const { isValid, region, service } = validateKeyword(k);

  // 기본 브랜드 설정 (Fallback)
  let heroLocation = "틈새케어";
  let heroService = "프리미엄 틈새 누수 정밀 차단";
  let heroIntro = `창틀 누수와 빗물 유입은 시간이 지날수록 건물을 망가뜨리는 위험 신호입니다.\n틈새케어는 타성에 젖은 실리콘 덧방 시공을 배제하고,\n기존 마감재 전면 탈거 후 강력 접합 시공을 수행합니다.\n한 방울의 빗물도 새지 않게 틈새와 외벽 균열을 철저하게 진단하여 메워드립니다.`;
  
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
    heroService = `${service} 전문 엔지니어 케어`;
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

    faqTitle = data.faqTitle;
    faqList = data.faqs; // 동적으로 분산 변환된 FAQ 목록 매핑

    portfolioTitle = data.portfolioTitle;
    ctaHeader = data.ctaHeader;
    analysisDynamicKeyword = `${region} ${service}`;
    
    // 요구사항 동적 카피 변환 바인딩
    dynamicBanner = data.dynamicBanner;
    dynamicIntro = data.dynamicIntro;
    dynamicMethod = data.dynamicMethod;
  }

  const content = BRAND_HUB_CONTENT;
  const representativePortfolio = portfolioCases.slice(0, 3);

  return (
    <div className="flex min-h-screen flex-col font-sans antialiased overflow-x-hidden">
      {/* FAQ 구조화 데이터 자동 주입 */}
      <FAQSchema faqs={faqList} />

      <Header />

      <main className="flex-grow bg-white">
        {/* 1. 히어로 섹션 */}
        <LocalHero
          locationName={heroLocation}
          serviceTitle={heroService}
          serviceName={isValid ? service : "창틀코킹"}
          intro={heroIntro}
          keywords={[
            "100% 전면 철거 원칙",
            analysisDynamicKeyword ? `${analysisDynamicKeyword} 정밀 검수` : "열화상 틈새 진단",
            "5단계 밀봉 전용 자재",
            "책임 무상 A/S 보증"
          ]}
        />

        {/* 1-2. 간이 자가진단 섹션 (Hero 하단으로 이동) */}
        <LocalDiagnostics />

        {/* 2. 문제 공감 섹션 */}
        <LocalEmpathy
          locationName={heroLocation}
          dynamicIntro={dynamicIntro || undefined}
        />

        {/* 3. 서비스 안내 섹션 */}
        <div id="services">
          <LocalServices
            locationName={heroLocation}
            serviceTitle={isValid ? `${service} 솔루션` : "틈새 밀봉 전문 서비스"}
          />
        </div>

        {/* 4. 진단 중심 작업 방식 섹션 */}
        <div id="process">
          <LocalProcess
            title={processTitle}
            process={processSteps}
          />
        </div>

        {/* 5. 왜 전문업체가 필요한지 설명하는 섹션 */}
        <WhyProfessional
          locationName={heroLocation}
          dynamicBanner={dynamicBanner || undefined}
        />

        {/* 6. 경기 북부 권역 안내 섹션 */}
        <LocalRegionInfo
          locationName={heroLocation}
          dynamicMethod={dynamicMethod || undefined}
        />

        {/* 7. 시공 레퍼런스 사례 */}
        <div id="cases">
          <LocalPortfolio
            title={portfolioTitle}
            portfolio={representativePortfolio}
          />
        </div>

        {/* 8. FAQ 섹션 */}
        <div id="faq">
          <LocalFAQ
            title={faqTitle}
            faqs={faqList}
          />
        </div>

        {/* 마무리 CTA 및 상담 접수 폼 */}
        <section id="contact" className="py-24 bg-teal-50/15 relative">
          <div className="absolute top-1/3 left-0 w-72 h-72 bg-emerald-100/30 rounded-full blur-3xl -z-10"></div>
          
          <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* CTA Copy */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <div className="text-teal-600 text-[13px] font-extrabold tracking-wider uppercase">
                Consultation Request
              </div>
              <h2 className="text-3xl sm:text-4.5xl font-black text-slate-900 tracking-tight leading-tight">
                {ctaHeader}
              </h2>
              <p className="text-[14.5px] text-slate-500 leading-relaxed max-w-sm mx-auto lg:mx-0">
                {content.ctaSummary} 실내외에서 스마트폰으로 누수 흔적을 찍어 전송해 주시면 더 신속한 1차 상세 가견적 설계가 가능합니다.
              </p>
              
              <div className="pt-4">
                <ContactCTA />
              </div>
            </div>

            {/* CTA Form */}
            <div className="lg:col-span-6">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer dynamicKeyword={analysisDynamicKeyword} />
    </div>
  );
}
