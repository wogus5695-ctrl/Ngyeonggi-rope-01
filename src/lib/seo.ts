import { Metadata } from 'next';
import { TEUMSAE_ALLOWED_REGIONS } from '@/data/allowedKeywords';

export const SEO_CONFIG = {
  title: {
    default: "서울·인천·경기 빗물누수·창틀코킹 전문 진단 | 틈새케어",
    template: "%s | 틈새케어"
  },
  description: "창틀 주변 틈과 외벽 균열 등 누수 원인이 의심되는 부위를 확인합니다. 틈새케어는 서울·인천·경기 지역을 대상으로 기존 실리콘 100% 제거 및 필요한 코킹·보수 작업 범위를 안내합니다.",
  keywords: [
    "틈새케어",
    "창틀코킹",
    "창틀누수",
    "빗물누수",
    "창틀실리콘",
    "샷시실리콘",
    "외벽누수",
    "베란다빗물누수",
    "수도권코킹"
  ],
  baseUrl: "https://www.teumsaecare.co.kr",
  ogImage: "/og-image.png",
};

export function getMetadata(options: {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
}): Metadata {
  const { title, description, path, ogImage, noIndex } = options;
  const targetPath = path || '';
  const url = `${SEO_CONFIG.baseUrl}${targetPath}`;
  const finalOgImage = ogImage || SEO_CONFIG.ogImage;
  const isWaterproofImage = finalOgImage.includes('waterproof');
  const imageWidth = isWaterproofImage ? 1024 : 1200;
  const imageHeight = isWaterproofImage ? 768 : 630;

  const isDynamicQuery = Boolean(path && path.includes('?k='));

  return {
    metadataBase: new URL(SEO_CONFIG.baseUrl),
    title: title,
    description: description || SEO_CONFIG.description,
    keywords: SEO_CONFIG.keywords,
    alternates: isDynamicQuery ? undefined : {
      canonical: targetPath || '/',
    },
    openGraph: {
      title: title ? `${title} | 틈새케어` : SEO_CONFIG.title.default,
      description: description || SEO_CONFIG.description,
      url: isDynamicQuery ? undefined : (targetPath || '/'),
      siteName: "틈새케어",
      locale: "ko_KR",
      type: "website",
      images: [
        {
          url: finalOgImage,
          width: imageWidth,
          height: imageHeight,
          alt: title || "틈새케어",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title ? `${title} | 틈새케어` : SEO_CONFIG.title.default,
      description: description || SEO_CONFIG.description,
      images: [finalOgImage],
    },
    robots: noIndex ? { index: false, follow: true } : undefined,
    other: {
      "thumbnail": `${SEO_CONFIG.baseUrl}${finalOgImage}`,
    }
  };
}

export function getMetadataByLocation(options: {
  serviceSlug: string;
  serviceTitle: string;
  provinceName: string;
  cityName: string;
  path: string;
  metaTitle?: string;
  metaDescription?: string;
  benefit?: string;
  ogImage?: string;
}): Metadata & { h1: string } {
  const { serviceSlug, serviceTitle, provinceName, cityName, path, metaTitle, metaDescription, benefit, ogImage } = options;
  
  const isWindowCaulking = serviceSlug.includes('window');

  const allowedRegion = TEUMSAE_ALLOWED_REGIONS[cityName] || TEUMSAE_ALLOWED_REGIONS[cityName.toLowerCase()] || null;
  
  const displayName = allowedRegion 
    ? (allowedRegion.parentDistrict ? `${allowedRegion.parentDistrict} ${allowedRegion.name}` : allowedRegion.name)
    : cityName;

  // Title & Description 다변화 템플릿 (사용자 메타 예시 반영 및 유사문서 필터링 회피)
  const titleTemplates = [
    `${displayName} ${serviceTitle} | 창틀·샷시·외벽 누수 진단 틈새케어`,
    `${displayName} ${serviceTitle} 방수 | 샷시·창틀·외벽 틈새 보수 전문 틈새케어`,
    `${displayName} ${serviceTitle} 코킹 | 창틀·샷시·외벽 누수 차단 전문 틈새케어`,
    `${displayName} ${serviceTitle} 보수 | 샷시·외벽·창틀 실리콘 전문 틈새케어`
  ];

  const descTemplates = [
    `${displayName} ${serviceTitle} 상담이 필요하다면 틈새케어에서 창틀 실리콘, 샷시 틈새, 외벽 크랙 상태를 확인하고 현장에 맞는 보수 방법을 안내합니다.`,
    `${displayName} 지역의 ${serviceTitle} 고민은 틈새케어와 상의하세요. 창틀 실리콘, 샷시 유격, 외벽 미세 크랙을 면밀히 실사하고 올바른 밀봉 처방을 제안합니다.`,
    `반복되는 ${displayName} ${serviceTitle} 문제, 틈새케어가 샷시 틈새와 외벽 크랙, 노후 실리콘 상태를 확인하여 현장에 맞는 보수 작업을 안내합니다.`,
    `${displayName} 전역 아파트 및 빌라 ${serviceTitle} 진단. 샷시 주변 외벽 균열과 들뜬 실리콘 마감 상태를 확인하여 누수 원인을 꼼꼼히 점검합니다.`
  ];

  // 해시 연산
  const idx = cityName ? cityName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % 4 : 0;

  const generatedTitle = titleTemplates[idx];
  const finalTitle = metaTitle || generatedTitle;

  const defaultDesc = descTemplates[idx];
  const finalDescription = metaDescription || defaultDesc;

  const h1 = `${displayName} ${serviceTitle} 전문 케어`;

  return {
    ...getMetadata({
      title: finalTitle,
      description: finalDescription,
      path,
      ogImage,
    }),
    h1,
  };
}
