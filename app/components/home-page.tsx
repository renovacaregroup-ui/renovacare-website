import Image from "next/image";
import { Phone, MapPin, Mail, Globe, Shield, Heart, Leaf, Dna, Stethoscope, Award, Users, Clock, CheckCircle2 } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem, ScaleIn, PulseGlow } from "./animations";
import HeroBackground from "./hero-background";
import ResumeBoundary from "./resume-boundary";
import BookingBar from "./booking-bar";
import LanguageSwitcher from "./language-switcher";
import { localizedHref, type Locale } from "../../lib/locales";
import { siteContent } from "../../lib/site-content";

const serviceIcons = [Stethoscope, Leaf, Dna] as const;
const ecosystemIcons = [Stethoscope, Leaf, Dna] as const;
const positioningIcons = [Heart, Shield, Leaf, Award] as const;
const supportIcons = [Clock, Users, Globe] as const;

export default function HomePage({ locale }: { locale: Locale }) {
  const content = siteContent[locale];

  return (
    <div className="flex flex-col min-h-screen bg-[var(--background)]">
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[var(--cream-dark)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 lg:py-5 flex items-center justify-between gap-3 lg:grid lg:grid-cols-[240px_1fr_240px] lg:gap-8">
          <a href={localizedHref(locale, "/")} className="cursor-pointer shrink-0 lg:w-[220px]">
            <Image
              src="/renovacare logo-01.png"
              alt="RenovaCare Clinic & Wellness Centre"
              width={200}
              height={50}
              priority
              className="w-[170px] sm:w-[190px] lg:w-[220px] h-auto"
            />
          </a>
          <div className="hidden lg:flex items-center justify-center gap-10 text-[15px] text-[var(--text-muted)]">
            <a href="#services" className="hover:text-[var(--primary-gold)] transition-colors">{content.nav.services}</a>
            <a href="#about" className="hover:text-[var(--primary-gold)] transition-colors">{content.nav.about}</a>
            <a href="#doctor" className="hover:text-[var(--primary-gold)] transition-colors">{content.nav.doctor}</a>
            <a href="#contact" className="hover:text-[var(--primary-gold)] transition-colors">{content.nav.contact}</a>
          </div>
          <div className="ml-auto lg:ml-0 lg:flex lg:justify-end">
            <LanguageSwitcher currentLocale={locale} />
          </div>
        </div>
      </nav>

      <section className="relative bg-gradient-to-b from-[var(--cream)] to-[var(--background)] py-24 md:py-32 overflow-hidden">
        <ResumeBoundary>
          <HeroBackground />
        </ResumeBoundary>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <FadeIn delay={0.1}>
            <p className="text-[var(--primary-gold)] text-sm font-medium tracking-widest uppercase mb-4">
              {content.hero.eyebrow}
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-[var(--text-dark)] leading-tight mb-6">
              {content.hero.title[0]}<br />{content.hero.title[1]}
            </h1>
          </FadeIn>
          <FadeIn delay={0.5}>
            <p className="max-w-3xl mx-auto text-lg text-[var(--text-muted)] leading-relaxed mb-4">
              {content.hero.desc}
            </p>
          </FadeIn>
          <FadeIn delay={0.7}>
            <p className="text-[var(--primary-gold)] font-medium text-lg mb-2">
              {content.hero.highlight}
            </p>
            {content.hero.subline ? (
              <p className="text-[var(--text-muted)] text-base">
                {content.hero.subline}
              </p>
            ) : null}
          </FadeIn>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-[var(--text-dark)] mb-4">
              {content.positioning.titleStart}
              <span className="text-[var(--primary-gold)]">{content.positioning.titleHighlight}</span>
              {content.positioning.titleEnd}
            </h2>
            <p className="max-w-3xl mx-auto text-[var(--text-muted)] leading-relaxed">
              {content.positioning.desc}
            </p>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {content.positioning.cards.map((card, index) => {
              const Icon = positioningIcons[index];
              return (
                <StaggerItem key={card.title}>
                  <div className="bg-[var(--cream)] rounded-2xl p-8 hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
                    <Icon className="text-[var(--primary-gold)] mb-4" size={32} />
                    <h3 className="text-xl font-medium text-[var(--text-dark)] mb-3">{card.title}</h3>
                    <p className="text-[var(--text-muted)] leading-relaxed text-sm">{card.desc}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
          <FadeIn delay={0.3} className="mt-12 text-center">
            <p className="text-[var(--text-muted)] mb-4">{content.positioning.supportLabel}</p>
            <div className="flex flex-wrap justify-center gap-4">
              {content.positioning.supportTags.map((tag) => (
                <span key={tag} className="bg-[var(--cream-dark)] text-[var(--brown)] px-6 py-2 rounded-full text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[var(--cream)]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-[var(--text-dark)] mb-4">
              {content.ecosystem.titleStart}
              <span className="text-[var(--primary-gold)]">{content.ecosystem.titleHighlight}</span>
            </h2>
            <p className="max-w-2xl mx-auto text-[var(--text-muted)] leading-relaxed">
              {content.ecosystem.desc}
            </p>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
            {content.ecosystem.cards.map((card, index) => {
              const Icon = ecosystemIcons[index];
              return (
                <StaggerItem key={card.title}>
                  <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-all hover:-translate-y-2 duration-300">
                    <Icon className="text-[var(--primary-gold)] mx-auto mb-4" size={40} />
                    <h3 className="text-lg font-medium text-[var(--text-dark)] mb-3">{card.title}</h3>
                    <p className="text-[var(--text-muted)] text-sm leading-relaxed">{card.desc}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      <section id="services" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-[var(--text-dark)] mb-4">
              {content.services.titleStart}
              <span className="text-[var(--primary-gold)]">{content.services.titleHighlight}</span>
            </h2>
          </FadeIn>
          {content.services.categories.map((category, index) => {
            const Icon = serviceIcons[index];
            return (
              <FadeIn className={index === content.services.categories.length - 1 ? "" : "mb-16"} key={category.title}>
                <h3 className="text-2xl font-medium text-[var(--text-dark)] mb-8 flex items-center gap-3">
                  <Icon className="text-[var(--primary-gold)]" size={28} />
                  {category.title}
                </h3>
                <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
                  {category.items.map((item) => (
                    <StaggerItem key={item}>
                      <div className="flex items-start gap-3 p-4 rounded-xl bg-[var(--cream)] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                        <CheckCircle2 className="text-[var(--primary-gold)] mt-0.5 shrink-0" size={20} />
                        <span className="text-[var(--text-dark)] text-sm">{item}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </FadeIn>
            );
          })}
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[var(--cream)]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-[var(--text-dark)] mb-4">
              {content.oncology.titleStart}
              <span className="text-[var(--primary-gold)]">{content.oncology.titleHighlight}</span>
            </h2>
            <p className="max-w-3xl mx-auto text-[var(--text-muted)] leading-relaxed">
              {content.oncology.desc}
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <FadeIn direction="left">
              <h3 className="text-xl font-medium text-[var(--text-dark)] mb-6">{content.oncology.supportedTitle}</h3>
              <div className="space-y-4">
                {content.oncology.supported.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="text-[var(--primary-gold)] shrink-0" size={20} />
                    <span className="text-[var(--text-dark)]">{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <h3 className="text-xl font-medium text-[var(--text-dark)] mb-6">{content.oncology.aimsTitle}</h3>
              <div className="space-y-4">
                {content.oncology.aims.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="text-[var(--primary-gold)] shrink-0" size={20} />
                    <span className="text-[var(--text-dark)]">{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
          <FadeIn>
            <p className="text-center text-[var(--text-light)] text-sm italic">{content.oncology.disclaimer}</p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-[var(--text-dark)] mb-4">
              {content.wellness.titleStart}
              <span className="text-[var(--primary-gold)]">{content.wellness.titleHighlight}</span>
            </h2>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {content.wellness.programmes.map((item) => (
              <StaggerItem key={item.title}>
                <div className="bg-[var(--cream)] rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                  <h4 className="text-[var(--text-dark)] font-medium mb-2">{item.title}</h4>
                  <p className="text-[var(--text-muted)] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section id="about" className="py-20 md:py-28 bg-[var(--cream)]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-light text-[var(--text-dark)] mb-4">
              {content.experience.titleStart}
              <span className="text-[var(--primary-gold)]">{content.experience.titleHighlight}</span>
              {content.experience.titleEnd}
            </h2>
            <p className="max-w-3xl mx-auto text-[var(--text-muted)] leading-relaxed mb-12">{content.experience.desc}</p>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
            {content.experience.stats.map((item, index) => {
              const Icon = supportIcons[index];
              return (
                <StaggerItem key={item.title}>
                  <div className="bg-white rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="flex justify-center mb-4"><Icon className="text-[var(--primary-gold)]" size={36} /></div>
                    <h3 className="text-xl font-medium text-[var(--text-dark)] mb-2">{item.title}</h3>
                    <p className="text-[var(--text-muted)] text-sm">{item.desc}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-[var(--text-dark)] mb-4">
              {content.partners.titleStart}
              <span className="text-[var(--primary-gold)]">{content.partners.titleHighlight}</span>
            </h2>
            <p className="max-w-2xl mx-auto text-[var(--text-muted)] leading-relaxed">{content.partners.desc}</p>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {content.partners.cards.map((card, index) => (
              <FadeIn key={card.title} direction={index === 0 ? "left" : "right"}>
                <div className="border border-[var(--cream-dark)] rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col items-center text-center">
                  <Image src={card.image} alt={card.alt} width={card.width} height={card.height} className="mb-6 object-contain" />
                  <h3 className="text-lg font-medium text-[var(--text-dark)] mb-3">{card.title}</h3>
                  <p className="text-[var(--text-muted)] text-sm leading-relaxed">{card.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="doctor" className="py-20 md:py-28 bg-[var(--cream)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-[var(--text-dark)] mb-4">
              {content.doctor.titleStart}
              <span className="text-[var(--primary-gold)]">{content.doctor.titleHighlight}</span>
            </h2>
            <p className="text-[var(--primary-gold)] font-medium text-lg">{content.doctor.subtitle}</p>
          </FadeIn>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8 items-center">
              <FadeIn direction="left" className="md:col-span-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary-gold)]/10 to-transparent rounded-3xl" />
                  <Image src="/Dr.yek.png" alt="Dr. Yek Chu Jie" width={400} height={500} className="rounded-3xl mx-auto relative z-10 drop-shadow-xl" />
                </div>
              </FadeIn>
              <FadeIn direction="right" className="md:col-span-3">
                <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg">
                  <h3 className="text-xl font-medium text-[var(--text-dark)] mb-6">{content.doctor.qualificationsTitle}</h3>
                  <div className="space-y-4">
                    {content.doctor.qualifications.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="text-[var(--primary-gold)] mt-0.5 shrink-0" size={20} />
                        <span className="text-[var(--text-dark)] text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 pt-6 border-t border-[var(--cream-dark)]">
                    <p className="text-[var(--text-muted)] italic text-sm">&ldquo;{content.doctor.quote}&rdquo;</p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-light text-[var(--text-dark)] mb-12">
              {content.support.titleStart}
              <span className="text-[var(--primary-gold)]">{content.support.titleHighlight}</span>
            </h2>
          </FadeIn>
          <StaggerContainer className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto" staggerDelay={0.1}>
            {content.support.items.map((item) => (
              <StaggerItem key={item}>
                <div className="bg-[var(--cream)] rounded-xl p-5 flex items-center gap-3 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <Heart className="text-[var(--primary-gold)] shrink-0" size={20} />
                  <span className="text-[var(--text-dark)] text-sm text-left">{item}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gradient-to-b from-[var(--cream)] to-[var(--cream-dark)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScaleIn>
            <div className="bg-white rounded-3xl p-10 md:p-16 shadow-xl">
              <p className="text-[var(--primary-gold)] text-sm font-medium tracking-widest uppercase mb-4">{content.promo.eyebrow}</p>
              <h2 className="text-3xl md:text-4xl font-light text-[var(--text-dark)] mb-6">{content.promo.title}</h2>
              <p className="text-[var(--text-muted)] mb-8">{content.promo.desc}</p>
              <div className="flex flex-col items-center gap-4 mb-10">
                {content.promo.bullets.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="text-[var(--primary-gold)]" size={20} />
                    <span className="text-[var(--text-dark)]">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-[var(--primary-gold)] font-medium text-lg mb-8">{content.promo.highlight}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <PulseGlow className="rounded-full">
                  <a
                    href="https://wa.me/60129397686"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[var(--primary-gold)] text-white px-8 py-3.5 rounded-full font-medium hover:bg-[var(--brown)] transition-colors inline-flex items-center justify-center gap-2"
                  >
                    <Phone size={18} /> {content.promo.whatsapp}
                  </a>
                </PulseGlow>
                <a
                  href="https://app.renovacare.my/booking"
                  className="border-2 border-[var(--primary-gold)] text-[var(--primary-gold)] px-8 py-3.5 rounded-full font-medium hover:bg-[var(--primary-gold)] hover:text-white transition-colors inline-flex items-center justify-center gap-2"
                >
                  {content.promo.book}
                </a>
              </div>
            </div>
          </ScaleIn>
        </div>
      </section>

      <section className="py-12 bg-[var(--cream)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[var(--text-light)] text-sm leading-relaxed">{content.disclaimer}</p>
        </div>
      </section>

      <footer id="contact" className="bg-[var(--text-dark)] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <Image src="/renovacare logo-03.png" alt="RenovaCare" width={180} height={180} className="mb-4 brightness-0 invert" />
              <p className="text-gray-400 text-sm leading-relaxed">{content.footer.brandDesc}</p>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">{content.footer.contactTitle}</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-[var(--primary-gold)] shrink-0 mt-0.5" size={16} />
                  <p className="text-gray-400 text-sm">No 2-G, Jalan Eco Santuari 8/1A,<br />Eco Santuari, Telok Panglima Garang,<br />42500 Selangor</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-[var(--primary-gold)] shrink-0" size={16} />
                  <a href="tel:+60129397686" className="text-gray-400 text-sm hover:text-[var(--primary-gold)] transition-colors">+6012-939 7686</a>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="text-[var(--primary-gold)] shrink-0" size={16} />
                  <a href="https://www.renovacare.my" className="text-gray-400 text-sm hover:text-[var(--primary-gold)] transition-colors">www.renovacare.my</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-[var(--primary-gold)] shrink-0" size={16} />
                  <a href="mailto:enquiry@renovacare.my" className="text-gray-400 text-sm hover:text-[var(--primary-gold)] transition-colors">enquiry@renovacare.my</a>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">{content.footer.quickLinksTitle}</h4>
              <div className="space-y-3">
                <a href="#services" className="block text-gray-400 text-sm hover:text-[var(--primary-gold)] transition-colors">{content.footer.quickLinks.services}</a>
                <a href="#about" className="block text-gray-400 text-sm hover:text-[var(--primary-gold)] transition-colors">{content.footer.quickLinks.about}</a>
                <a href="#doctor" className="block text-gray-400 text-sm hover:text-[var(--primary-gold)] transition-colors">{content.footer.quickLinks.doctor}</a>
                <a href="https://app.renovacare.my/booking" className="block text-gray-400 text-sm hover:text-[var(--primary-gold)] transition-colors">{content.footer.quickLinks.book}</a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">{content.footer.legalTitle}</h4>
              <div className="space-y-3">
                <a href={localizedHref(locale, "/privacy-policy")} className="block text-gray-400 text-sm hover:text-[var(--primary-gold)] transition-colors">{content.footer.legalLinks.privacy}</a>
                <a href={localizedHref(locale, "/refund-policy")} className="block text-gray-400 text-sm hover:text-[var(--primary-gold)] transition-colors">{content.footer.legalLinks.refund}</a>
                <a href={localizedHref(locale, "/terms")} className="block text-gray-400 text-sm hover:text-[var(--primary-gold)] transition-colors">{content.footer.legalLinks.terms}</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} {content.footer.copyright}</p>
          </div>
        </div>
      </footer>

      <ResumeBoundary>
        <BookingBar locale={locale} />
      </ResumeBoundary>
    </div>
  );
}
