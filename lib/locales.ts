export const locales = ["en", "zh", "ms"] as const;

export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, string> = {
  en: "English",
  zh: "中文",
  ms: "Bahasa Malay",
};

export function localizedHref(locale: Locale, path = "") {
  if (locale === "en") {
    return path || "/";
  }

  const normalizedPath = path === "/" ? "" : path;
  return `/${locale}${normalizedPath}`;
}
