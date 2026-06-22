import React from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface BreadcrumbItem {
  label: string;
  href?: string;
  active?: boolean;
}

interface UnifiedSchemaProps {
  title: string;
  description: string;
  url: string;
  faqs?: FAQItem[];
  breadcrumbs?: BreadcrumbItem[];
}

export default function UnifiedSchema({
  title,
  description,
  url,
  faqs,
  breadcrumbs,
}: UnifiedSchemaProps) {
  const schemas: any[] = [];

  // WebPage Schema
  schemas.push({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    "url": url,
    "name": title,
    "description": description,
    "publisher": {
      "@type": "Organization",
      "name": "틈새케어",
      "logo": {
        "@type": "ImageObject",
        "url": "https://teumsaecare.co.kr/web-thumbnail.jpg"
      }
    }
  });

  // FAQ Schema
  if (faqs && faqs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer,
        },
      })),
    });
  }

  // Breadcrumbs Schema
  if (breadcrumbs && breadcrumbs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((crumb, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "name": crumb.label,
        "item": crumb.href ? `https://teumsaecare.co.kr${crumb.href}` : url,
      })),
    });
  }

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
