import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FloatingCallButton from "@/components/FloatingCallButton";
import { SEO_CONFIG } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SEO_CONFIG.baseUrl),
  title: SEO_CONFIG.title,
  description: SEO_CONFIG.description,
  keywords: SEO_CONFIG.keywords,
  authors: [{ name: "틈새케어" }],
  creator: "틈새케어",
  publisher: "틈새케어",
  alternates: {
    canonical: SEO_CONFIG.baseUrl,
  },
  openGraph: {
    title: SEO_CONFIG.title.default,
    description: SEO_CONFIG.description,
    url: SEO_CONFIG.baseUrl,
    siteName: "틈새케어",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: SEO_CONFIG.ogImage,
        width: 800,
        height: 600,
        alt: "틈새케어 대표 이미지",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_CONFIG.title.default,
    description: SEO_CONFIG.description,
    images: [SEO_CONFIG.ogImage],
  },
  other: {
    "thumbnail": `${SEO_CONFIG.baseUrl}${SEO_CONFIG.ogImage}`,
  },
  verification: {
    google: "g-xxxxxxxxxxxxxxxxxxxx", // 틈새케어 독자 구글 인증키 (가상)
    other: {
      "naver-site-verification": "n-xxxxxxxxxxxxxxxxxxxx", // 네이버 인증키 (가상)
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=1" },
      { url: "/icon-16x16.png?v=1", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png?v=1", sizes: "32x32", type: "image/png" },
      { url: "/icon.svg?v=1", type: "image/svg+xml" }
    ],
    apple: [
      { url: "/apple-touch-icon.png?v=1", sizes: "180x180", type: "image/png" }
    ]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        {/* Schema.org Organization JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "틈새케어",
              "url": SEO_CONFIG.baseUrl,
              "logo": `${SEO_CONFIG.baseUrl}/icon.svg`,
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "010-1234-5678",
                "contactType": "customer service"
              }
            })
          }}
        />
        {/* Schema.org WebSite JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "틈새케어",
              "url": SEO_CONFIG.baseUrl,
              "potentialAction": {
                "@type": "SearchAction",
                "target": `${SEO_CONFIG.baseUrl}/?k={search_term_string}`,
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <FloatingCallButton />
      </body>
    </html>
  );
}
