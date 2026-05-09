import { Globe } from "lucide-react";
import { localeLabels, localizedHref, type Locale } from "../../lib/locales";

interface LanguageSwitcherProps {
  currentLocale: Locale;
  path?: string;
}

export default function LanguageSwitcher({ currentLocale, path = "/" }: LanguageSwitcherProps) {
  const shortLabels: Record<Locale, string> = {
    en: "EN",
    zh: "中文",
    ms: "BM",
  };

  return (
    <div className="flex w-full sm:w-auto items-center justify-between gap-2 rounded-2xl sm:rounded-full border border-[var(--cream-dark)] bg-white px-2 py-1 shadow-sm">
      <Globe size={16} className="text-[var(--primary-gold)] shrink-0" />
      <div className="flex flex-1 sm:flex-none items-center gap-1 text-[11px] sm:text-xs font-medium">
        {(["en", "zh", "ms"] as const).map((locale) => {
          const isActive = locale === currentLocale;
          return (
            <a
              key={locale}
              href={localizedHref(locale, path)}
              className={`flex-1 sm:flex-none text-center rounded-full px-2.5 sm:px-3 py-1.5 transition-colors ${
                isActive
                  ? "bg-[var(--primary-gold)] text-white"
                  : "text-[var(--text-muted)] hover:bg-[var(--cream)] hover:text-[var(--primary-gold)]"
              }`}
            >
              <span className="sm:hidden">{shortLabels[locale]}</span>
              <span className="hidden sm:inline">{localeLabels[locale]}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
