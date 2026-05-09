"use client";

import { Globe, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { localeLabels, localizedHref, type Locale } from "../../lib/locales";

interface LanguageSwitcherProps {
  currentLocale: Locale;
  path?: string;
}

const localeOrder: Locale[] = ["en", "zh", "ms"];

export default function LanguageSwitcher({ currentLocale, path = "/" }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="inline-flex items-center gap-2 rounded-full border border-[var(--cream-dark)] bg-white px-3 py-2 text-sm font-medium text-[var(--text-dark)] shadow-sm transition-colors hover:border-[var(--primary-gold)] hover:text-[var(--primary-gold)]"
        aria-expanded={isOpen}
        aria-label="Change language"
      >
        <Globe size={16} className="text-[var(--primary-gold)]" />
        <span className="hidden sm:inline">{localeLabels[currentLocale]}</span>
        <span className="sm:hidden">{currentLocale === "en" ? "EN" : currentLocale === "zh" ? "中文" : "BM"}</span>
        <ChevronDown size={16} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen ? (
        <div className="absolute right-0 top-full mt-2 min-w-[11rem] overflow-hidden rounded-2xl border border-[var(--cream-dark)] bg-white shadow-xl">
          {localeOrder.map((locale) => {
            const isActive = locale === currentLocale;
            return (
              <a
                key={locale}
                href={localizedHref(locale, path)}
                className={`block px-4 py-3 text-sm transition-colors ${
                  isActive
                    ? "bg-[var(--cream)] text-[var(--primary-gold)] font-medium"
                    : "text-[var(--text-muted)] hover:bg-[var(--cream)] hover:text-[var(--primary-gold)]"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {localeLabels[locale]}
              </a>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
