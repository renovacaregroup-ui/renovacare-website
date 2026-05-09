import { FadeIn } from "./animations";
import LanguageSwitcher from "./language-switcher";
import { localizedHref, type Locale } from "../../lib/locales";
import { siteContent } from "../../lib/site-content";

type LegalPageKey = "privacy" | "refund" | "terms";

export default function LegalPage({ locale, pageKey }: { locale: Locale; pageKey: LegalPageKey }) {
  const content = siteContent[locale].legal[pageKey];

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between gap-3 mb-10">
          <a href={localizedHref(locale, "/")} className="text-sm text-[var(--text-muted)] hover:text-[var(--primary-gold)] transition-colors">
            RenovaCare
          </a>
          <div className="ml-auto">
            <LanguageSwitcher currentLocale={locale} path={pageKey === "privacy" ? "/privacy-policy" : pageKey === "refund" ? "/refund-policy" : "/terms"} />
          </div>
        </div>
        <FadeIn>
          <h1 className="text-3xl md:text-4xl font-light text-[var(--text-dark)] mb-8">
            {content.title} <span className="text-[var(--primary-gold)]">{content.highlight}</span>
          </h1>
        </FadeIn>

        <div className="prose prose-sm max-w-none text-[var(--text-muted)] space-y-6">
          <p className="text-sm text-[var(--text-light)]">{content.updated}</p>
          {content.sections.map((section) => (
            <section key={section.heading} className="space-y-3">
              <h2 className="text-xl font-medium text-[var(--text-dark)]">{section.heading}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.bullets && (
                <ul className="list-disc pl-6 space-y-2">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
              {section.contactCard && (
                <div className="bg-[var(--cream)] rounded-xl p-4 mt-2 space-y-1">
                  {section.contactCard.map((line, index) => (
                    <p key={line} className={index === 0 ? "font-semibold text-[var(--text-dark)]" : ""}>
                      {line}
                    </p>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
