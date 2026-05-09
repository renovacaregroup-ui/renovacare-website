import { Globe } from "lucide-react";
import { localeLabels, localizedHref, type Locale } from "../../lib/locales";

interface LanguageSwitcherProps {
  currentLocale: Locale;
  path?: string;
}

export default function LanguageSwitcher({ currentLocale, path = "/" }: LanguageSwitcherProps) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-[var(--cream-dark)] bg-white px-2 py-1 shadow-sm">
      <Globe size={16} className="text-[var(--primary-gold)]" />
      <div className="flex items-center gap-1 text-xs font-medium">
        {(["en", "zh", "ms"] as const).map((locale) => {
          const isActive = locale === currentLocale;
          return (
            <a
              key={locale}
              href={localizedHref(locale, path)}
              className={`rounded-full px-3 py-1.5 transition-colors ${
                isActive
                  ? "bg-[var(--primary-gold)] text-white"
                  : "text-[var(--text-muted)] hover:bg-[var(--cream)] hover:text-[var(--primary-gold)]"
              }`}
            >
              {localeLabels[locale]}
            </a>
          );
        })}
      </div>
    </div>
  );
}
