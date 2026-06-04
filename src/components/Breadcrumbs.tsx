import React from "react";
import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
  active?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex text-sm text-slate-500 my-4" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link href="/" className="inline-flex items-center hover:text-teal-600 transition-colors">
            홈
          </Link>
        </li>
        {items.map((item, idx) => (
          <li key={idx}>
            <div className="flex items-center">
              <span className="mx-2 text-slate-400">/</span>
              {item.href && !item.active ? (
                <Link href={item.href} className="hover:text-teal-600 transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className={item.active ? "text-slate-800 font-extrabold" : ""}>
                  {item.label}
                </span>
              )}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
