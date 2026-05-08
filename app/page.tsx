import Image from "next/image";
import { Phone, MapPin, Mail, Globe, Shield, Heart, Leaf, Dna, Stethoscope, Award, Users, Clock, CheckCircle2 } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem, ScaleIn, PulseGlow } from "./components/animations";
import HeroBackground from "./components/hero-background";
import BookingBar from "./components/booking-bar";
import ResumeBoundary from "./components/resume-boundary";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--background)]">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[var(--cream-dark)]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="cursor-pointer">
            <Image
              src="/renovacare logo-01.png"
              alt="RenovaCare Clinic & Wellness Centre"
              width={200}
              height={50}
              priority
            />
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-[var(--text-muted)]">
            <a href="#services" className="hover:text-[var(--primary-gold)] transition-colors">Services</a>
            <a href="#about" className="hover:text-[var(--primary-gold)] transition-colors">About</a>
            <a href="#doctor" className="hover:text-[var(--primary-gold)] transition-colors">Our Doctor</a>
            <a href="#contact" className="hover:text-[var(--primary-gold)] transition-colors">Contact</a>
          </div>
          <a
            href="https://app.renovacare.my/booking"
            className="bg-[var(--primary-gold)] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[var(--brown)] transition-colors"
          >
            Book Consultation
          </a>
        </div>
      </nav>

      {/* SECTION 1 - HERO BANNER */}
      <section className="relative bg-gradient-to-b from-[var(--cream)] to-[var(--background)] py-24 md:py-32 overflow-hidden">
        <ResumeBoundary>
          <HeroBackground />
        </ResumeBoundary>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <FadeIn delay={0.1}>
            <p className="text-[var(--primary-gold)] text-sm font-medium tracking-widest uppercase mb-4">
              Specialised Cancer Recovery & Immune Support Centre
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-[var(--text-dark)] leading-tight mb-6">
              Doctor-Led Integrative<br />Oncology Support Care
            </h1>
          </FadeIn>
          <FadeIn delay={0.5}>
            <p className="max-w-3xl mx-auto text-lg text-[var(--text-muted)] leading-relaxed mb-4">
              Integrating medical care, immune support, regenerative therapies, and personalised recovery programmes to support your journey after cancer treatment.
            </p>
          </FadeIn>
          <FadeIn delay={0.7}>
            <p className="text-[var(--primary-gold)] font-medium text-lg mb-2">
              Restore Strength &bull; Rebuild Resilience &bull; Enhance Quality of Life
            </p>
            <p className="text-[var(--text-muted)] text-base">
              &#37325;&#22609;&#20581;&#24247; &middot; &#37325;&#24314;&#20307;&#33021; &middot; &#24247;&#22797;&#35843;&#20859;
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 2 - OUR POSITIONING */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-[var(--text-dark)] mb-4">
              Beyond Treatment - <span className="text-[var(--primary-gold)]">Continuity Care</span> That Matters
            </h2>
            <p className="max-w-3xl mx-auto text-[var(--text-muted)] leading-relaxed">
              RenovaCare Medical & Wellness Centre is a specialised integrative medical and wellness centre focused on supporting patients through every stage of recovery.
            </p>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            <StaggerItem>
              <div className="bg-[var(--cream)] rounded-2xl p-8 hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
                <Heart className="text-[var(--primary-gold)] mb-4" size={32} />
                <h3 className="text-xl font-medium text-[var(--text-dark)] mb-3">Cancer Recovery Support</h3>
                <p className="text-[var(--text-muted)] leading-relaxed text-sm">
                  Specialised programmes to help individuals restore their strength, rebuild resilience, and manage side effects after completing cancer treatment.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-[var(--cream)] rounded-2xl p-8 hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
                <Shield className="text-[var(--primary-gold)] mb-4" size={32} />
                <h3 className="text-xl font-medium text-[var(--text-dark)] mb-3">Step-Down Care</h3>
                <p className="text-[var(--text-muted)] leading-relaxed text-sm">
                  Comprehensive transitional care designed to support patients recently discharged from hospital, ensuring a smooth and safe shift from hospital to home.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-[var(--cream)] rounded-2xl p-8 hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
                <Leaf className="text-[var(--primary-gold)] mb-4" size={32} />
                <h3 className="text-xl font-medium text-[var(--text-dark)] mb-3">Immune Restoration</h3>
                <p className="text-[var(--text-muted)] leading-relaxed text-sm">
                  Targeted therapies and lifestyle interventions aimed at rebuilding and supporting the immune system weakened after cancer treatments.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-[var(--cream)] rounded-2xl p-8 hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
                <Award className="text-[var(--primary-gold)] mb-4" size={32} />
                <h3 className="text-xl font-medium text-[var(--text-dark)] mb-3">Long-Term Wellness</h3>
                <p className="text-[var(--text-muted)] leading-relaxed text-sm">
                  Personalised plans focused on sustaining health and enhancing quality of life beyond initial recovery, with ongoing health assessments and preventive screenings.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
          <FadeIn delay={0.3} className="mt-12 text-center">
            <p className="text-[var(--text-muted)] mb-4">We support patients who have completed:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-[var(--cream-dark)] text-[var(--brown)] px-6 py-2 rounded-full text-sm font-medium">Surgery</span>
              <span className="bg-[var(--cream-dark)] text-[var(--brown)] px-6 py-2 rounded-full text-sm font-medium">Chemotherapy</span>
              <span className="bg-[var(--cream-dark)] text-[var(--brown)] px-6 py-2 rounded-full text-sm font-medium">Radiotherapy</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 3 - WHAT MAKES US DIFFERENT */}
      <section className="py-20 md:py-28 bg-[var(--cream)]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-[var(--text-dark)] mb-4">
              A Complete <span className="text-[var(--primary-gold)]">Recovery Ecosystem</span>
            </h2>
            <p className="max-w-2xl mx-auto text-[var(--text-muted)] leading-relaxed">
              We offer a unique and comprehensive recovery ecosystem that integrates multiple disciplines to support patients throughout their healing journey.
            </p>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
            <StaggerItem>
              <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-all hover:-translate-y-2 duration-300">
                <Stethoscope className="text-[var(--primary-gold)] mx-auto mb-4" size={40} />
                <h3 className="text-lg font-medium text-[var(--text-dark)] mb-3">Clinical Medical Care</h3>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                  Professional general practitioner services focusing on medical guidance and ongoing health management.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-all hover:-translate-y-2 duration-300">
                <Leaf className="text-[var(--primary-gold)] mx-auto mb-4" size={40} />
                <h3 className="text-lg font-medium text-[var(--text-dark)] mb-3">Recovery & Wellness Therapies</h3>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                  A range of therapies designed to promote physical restoration and emotional well-being, tailored to individual needs.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-all hover:-translate-y-2 duration-300">
                <Dna className="text-[var(--primary-gold)] mx-auto mb-4" size={40} />
                <h3 className="text-lg font-medium text-[var(--text-dark)] mb-3">Advanced Regenerative Support</h3>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                  Advanced regenerative approaches to strengthen the recovery process and support long-term health.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* SECTION 4 - OUR CORE SERVICES */}
      <section id="services" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-[var(--text-dark)] mb-4">
              Our Core <span className="text-[var(--primary-gold)]">Services</span>
            </h2>
          </FadeIn>

          {/* Medical & Preventive Care */}
          <FadeIn className="mb-16">
            <h3 className="text-2xl font-medium text-[var(--text-dark)] mb-8 flex items-center gap-3">
              <Stethoscope className="text-[var(--primary-gold)]" size={28} />
              Medical & Preventive Care
            </h3>
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
              {[
                "General medical consultation",
                "Preventive health screening",
                "Comprehensive health assessment",
                "Blood investigations & diagnostics",
                "Personalised medical evaluation",
              ].map((service) => (
                <StaggerItem key={service}>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-[var(--cream)] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                    <CheckCircle2 className="text-[var(--primary-gold)] mt-0.5 shrink-0" size={20} />
                    <span className="text-[var(--text-dark)] text-sm">{service}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeIn>

          {/* Recovery & Immune Support */}
          <FadeIn className="mb-16">
            <h3 className="text-2xl font-medium text-[var(--text-dark)] mb-8 flex items-center gap-3">
              <Leaf className="text-[var(--primary-gold)]" size={28} />
              Recovery & Immune Support Programmes
            </h3>
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
              {[
                "Post-cancer recovery programmes",
                "Immune support therapies",
                "IV nutrient therapy",
                "Heat therapy & Biohito therapy",
                "Integrative TCM therapy",
                "Fatigue & wellness recovery support",
              ].map((service) => (
                <StaggerItem key={service}>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-[var(--cream)] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                    <CheckCircle2 className="text-[var(--primary-gold)] mt-0.5 shrink-0" size={20} />
                    <span className="text-[var(--text-dark)] text-sm">{service}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeIn>

          {/* Advanced Regenerative */}
          <FadeIn>
            <h3 className="text-2xl font-medium text-[var(--text-dark)] mb-8 flex items-center gap-3">
              <Dna className="text-[var(--primary-gold)]" size={28} />
              Advanced Regenerative & Cellular Therapies
            </h3>
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
              {[
                "MSC Stem Cell Therapy",
                "NK Cell Therapy",
                "Regenerative support programmes",
                "Cellular-based immune enhancement",
                "Anti-aging & rejuvenation support",
              ].map((service) => (
                <StaggerItem key={service}>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-[var(--cream)] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                    <CheckCircle2 className="text-[var(--primary-gold)] mt-0.5 shrink-0" size={20} />
                    <span className="text-[var(--text-dark)] text-sm">{service}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 5 - INTEGRATIVE ONCOLOGY SUPPORT */}
      <section className="py-20 md:py-28 bg-[var(--cream)]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-[var(--text-dark)] mb-4">
              Supporting Recovery <span className="text-[var(--primary-gold)]">Beyond Treatment</span>
            </h2>
            <p className="max-w-3xl mx-auto text-[var(--text-muted)] leading-relaxed">
              We provide integrative oncology support care through medically guided recovery programmes and collaboration with certified healthcare partners.
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <FadeIn direction="left">
              <h3 className="text-xl font-medium text-[var(--text-dark)] mb-6">Supported Therapies</h3>
              <div className="space-y-4">
                {[
                  "NK Cell Therapy (Immune Enhancement)",
                  "Stem Cell Therapy (Regenerative Support)",
                  "IV Nutrient Therapy (Nutritional Support)",
                  "Personalised Recovery Programmes",
                ].map((therapy) => (
                  <div key={therapy} className="flex items-center gap-3">
                    <CheckCircle2 className="text-[var(--primary-gold)] shrink-0" size={20} />
                    <span className="text-[var(--text-dark)]">{therapy}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <h3 className="text-xl font-medium text-[var(--text-dark)] mb-6">Our Programmes Aim To</h3>
              <div className="space-y-4">
                {[
                  "Strengthen immune system function",
                  "Reduce fatigue and improve energy levels",
                  "Support recovery after chemotherapy or radiotherapy",
                  "Enhance overall quality of life",
                  "Support long-term wellness and resilience",
                ].map((aim) => (
                  <div key={aim} className="flex items-center gap-3">
                    <CheckCircle2 className="text-[var(--primary-gold)] shrink-0" size={20} />
                    <span className="text-[var(--text-dark)]">{aim}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
          <FadeIn>
            <p className="text-center text-[var(--text-light)] text-sm italic">
              All therapies are designed to support recovery and wellness and do not replace primary oncology treatment.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 6 - HEALTH & WELLNESS PROGRAMMES */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-[var(--text-dark)] mb-4">
              Holistic Recovery & <span className="text-[var(--primary-gold)]">Wellness Support</span>
            </h2>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {[
              { title: "IV Nutrient Therapy", desc: "Essential vitamins and nutrients to promote cellular repair and boost immunity." },
              { title: "Liver Detox Support", desc: "Targeted nutrients and therapies aiding toxin elimination and metabolic health." },
              { title: "Vitamin C Infusion", desc: "High-dose vitamin C to support immune function and accelerate healing." },
              { title: "Immune Booster", desc: "Combination of nutrients to strengthen immune response." },
              { title: "Brain Health Support", desc: "Tailored nutrients to enhance cognitive function and mental clarity." },
              { title: "Metabolic Optimisation", desc: "Targets metabolic health and energy production." },
              { title: "Anti-aging & Rejuvenation", desc: "Therapies to slow aging and promote cellular regeneration." },
              { title: "Functional Wellness", desc: "Personalised care addressing physical, emotional, and lifestyle factors." },
            ].map((programme) => (
              <StaggerItem key={programme.title}>
                <div className="bg-[var(--cream)] rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                  <h4 className="text-[var(--text-dark)] font-medium mb-2">{programme.title}</h4>
                  <p className="text-[var(--text-muted)] text-sm leading-relaxed">{programme.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* SECTION 7 - EXPERIENCE */}
      <section id="about" className="py-20 md:py-28 bg-[var(--cream)]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-light text-[var(--text-dark)] mb-4">
              Over <span className="text-[var(--primary-gold)]">20 Years</span> of Healthcare & Wellness Experience
            </h2>
            <p className="max-w-3xl mx-auto text-[var(--text-muted)] leading-relaxed mb-12">
              Our leadership and medical team bring together more than 20 years of experience in healthcare operations, wellness and preventive medicine, and patient care.
            </p>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
            {[
              { icon: <Clock className="text-[var(--primary-gold)]" size={36} />, title: "20+ Years", desc: "Healthcare & wellness experience" },
              { icon: <Users className="text-[var(--primary-gold)]" size={36} />, title: "Patient-Focused", desc: "Recovery programme development" },
              { icon: <Globe className="text-[var(--primary-gold)]" size={36} />, title: "Regional Network", desc: "Healthcare initiatives & collaborations" },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="bg-white rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="flex justify-center mb-4">{item.icon}</div>
                  <h3 className="text-xl font-medium text-[var(--text-dark)] mb-2">{item.title}</h3>
                  <p className="text-[var(--text-muted)] text-sm">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* SECTION 8 - COLLABORATION */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-[var(--text-dark)] mb-4">
              Working Alongside <span className="text-[var(--primary-gold)]">Trusted Partners</span>
            </h2>
            <p className="max-w-2xl mx-auto text-[var(--text-muted)] leading-relaxed">
              RenovaCare collaborates with established medical and laboratory partners to provide structured and integrated recovery support.
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <FadeIn direction="left">
              <div className="border border-[var(--cream-dark)] rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col items-center text-center">
                <Image
                  src="/MGRC logo.png"
                  alt="Malaysian Genomics Resource Centre"
                  width={180}
                  height={80}
                  className="mb-6 object-contain"
                />
                <h3 className="text-lg font-medium text-[var(--text-dark)] mb-3">Malaysian Genomics Resource Centre (MGRC)</h3>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                  cGMP-accredited cell processing laboratory supporting quality, safety, and compliance in cellular-based programmes.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="border border-[var(--cream-dark)] rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col items-center text-center">
                <Image
                  src="/GZ Hospital logo.png"
                  alt="Guangzhou Modern Cancer Hospital"
                  width={240}
                  height={80}
                  className="mb-6 object-contain"
                />
                <h3 className="text-lg font-medium text-[var(--text-dark)] mb-3">Guangzhou Modern Cancer Hospital</h3>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                  International JCI-accredited cancer hospital providing advanced oncology care and recovery resources.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 9 - DOCTOR PROFILE */}
      <section id="doctor" className="py-20 md:py-28 bg-[var(--cream)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-[var(--text-dark)] mb-4">
              Led by <span className="text-[var(--primary-gold)]">Dr. Yek Chu Jie</span>
            </h2>
            <p className="text-[var(--primary-gold)] font-medium text-lg">
              Integrative, Functional & Wellness Medicine
            </p>
          </FadeIn>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8 items-center">
              <FadeIn direction="left" className="md:col-span-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary-gold)]/10 to-transparent rounded-3xl" />
                  <Image
                    src="/Dr.yek.png"
                    alt="Dr. Yek Chu Jie"
                    width={400}
                    height={500}
                    className="rounded-3xl mx-auto relative z-10 drop-shadow-xl"
                  />
                </div>
              </FadeIn>
              <FadeIn direction="right" className="md:col-span-3">
                <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg">
                  <h3 className="text-xl font-medium text-[var(--text-dark)] mb-6">Qualifications & Expertise</h3>
                  <div className="space-y-4">
                    {[
                      "Experienced in integrative and wellness medicine",
                      "Skilled in health screening, IV therapy & nutritional medicine",
                      "Certified Occupational Health Doctor (NIOSH)",
                      "Joint Injection Practitioner",
                    ].map((qual) => (
                      <div key={qual} className="flex items-start gap-3">
                        <CheckCircle2 className="text-[var(--primary-gold)] mt-0.5 shrink-0" size={20} />
                        <span className="text-[var(--text-dark)] text-sm">{qual}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 pt-6 border-t border-[var(--cream-dark)]">
                    <p className="text-[var(--text-muted)] italic text-sm">
                      &ldquo;Providing structured and personalised patient recovery support, walking alongside every patient in their healing journey.&rdquo;
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10 - WHO WE SUPPORT */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-light text-[var(--text-dark)] mb-12">
              Who We <span className="text-[var(--primary-gold)]">Support</span>
            </h2>
          </FadeIn>
          <StaggerContainer className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto" staggerDelay={0.1}>
            {[
              "Post-cancer treatment patients",
              "Individuals in recovery or remission",
              "Patients with weakened immune systems",
              "Individuals seeking wellness optimisation",
              "Preventive health clients",
              "Anti-aging & rejuvenation seekers",
            ].map((who) => (
              <StaggerItem key={who}>
                <div className="bg-[var(--cream)] rounded-xl p-5 flex items-center gap-3 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <Heart className="text-[var(--primary-gold)] shrink-0" size={20} />
                  <span className="text-[var(--text-dark)] text-sm text-left">{who}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* SECTION 11 - PROMOTION / CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-[var(--cream)] to-[var(--cream-dark)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScaleIn>
            <div className="bg-white rounded-3xl p-10 md:p-16 shadow-xl">
              <p className="text-[var(--primary-gold)] text-sm font-medium tracking-widest uppercase mb-4">
                Limited Time Offer
              </p>
              <h2 className="text-3xl md:text-4xl font-light text-[var(--text-dark)] mb-6">
                FREE Basic Health Screening
              </h2>
              <p className="text-[var(--text-muted)] mb-8">
                Consultation by Appointment &bull; Limited Slots Available
              </p>
              <div className="flex flex-col items-center gap-4 mb-10">
                {[
                  "Basic health assessment",
                  "Consultation guidance",
                  "Suitable for post-treatment patients",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="text-[var(--primary-gold)]" size={20} />
                    <span className="text-[var(--text-dark)]">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-[var(--primary-gold)] font-medium text-lg mb-8">
                Exclusive Opening Privileges Available
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <PulseGlow className="rounded-full">
                  <a
                    href="https://wa.me/60129397686"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[var(--primary-gold)] text-white px-8 py-3.5 rounded-full font-medium hover:bg-[var(--brown)] transition-colors inline-flex items-center justify-center gap-2"
                  >
                    <Phone size={18} /> WhatsApp Us Now
                  </a>
                </PulseGlow>
                <a
                  href="https://app.renovacare.my/booking"
                  className="border-2 border-[var(--primary-gold)] text-[var(--primary-gold)] px-8 py-3.5 rounded-full font-medium hover:bg-[var(--primary-gold)] hover:text-white transition-colors inline-flex items-center justify-center gap-2"
                >
                  Book Consultation
                </a>
              </div>
            </div>
          </ScaleIn>
        </div>
      </section>


      {/* SECTION 13 - DISCLAIMER */}
      <section className="py-12 bg-[var(--cream)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[var(--text-light)] text-sm leading-relaxed">
            RenovaCare provides supportive and integrative wellness programmes designed to complement patient recovery and overall well-being.
            We do not replace oncology treatment, diagnosis, or specialist medical management. Patients are advised to continue follow-up with their primary medical specialists.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-[var(--text-dark)] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <Image
                src="/renovacare logo-03.png"
                alt="RenovaCare"
                width={180}
                height={180}
                className="mb-4 brightness-0 invert"
              />
              <p className="text-gray-400 text-sm leading-relaxed">
                Specialised integrative medical and wellness centre focused on cancer recovery support, immune enhancement, and long-term wellness.
              </p>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-[var(--primary-gold)] shrink-0 mt-0.5" size={16} />
                  <p className="text-gray-400 text-sm">
                    No 2-G, Jalan Eco Santuari 8/1A,<br />
                    Eco Santuari, Telok Panglima Garang,<br />
                    42500 Selangor
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-[var(--primary-gold)] shrink-0" size={16} />
                  <a href="tel:+60129397686" className="text-gray-400 text-sm hover:text-[var(--primary-gold)] transition-colors">
                    +6012-939 7686
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="text-[var(--primary-gold)] shrink-0" size={16} />
                  <a href="https://www.renovacare.my" className="text-gray-400 text-sm hover:text-[var(--primary-gold)] transition-colors">
                    www.renovacare.my
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-[var(--primary-gold)] shrink-0" size={16} />
                  <a href="mailto:enquiry@renovacare.my" className="text-gray-400 text-sm hover:text-[var(--primary-gold)] transition-colors">
                    enquiry@renovacare.my
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Quick Links</h4>
              <div className="space-y-3">
                <a href="#services" className="block text-gray-400 text-sm hover:text-[var(--primary-gold)] transition-colors">Our Services</a>
                <a href="#about" className="block text-gray-400 text-sm hover:text-[var(--primary-gold)] transition-colors">About Us</a>
                <a href="#doctor" className="block text-gray-400 text-sm hover:text-[var(--primary-gold)] transition-colors">Our Doctor</a>
                <a href="https://app.renovacare.my/booking" className="block text-gray-400 text-sm hover:text-[var(--primary-gold)] transition-colors">Book Appointment</a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Legal</h4>
              <div className="space-y-3">
                <a href="/privacy-policy" className="block text-gray-400 text-sm hover:text-[var(--primary-gold)] transition-colors">Privacy Policy</a>
                <a href="/refund-policy" className="block text-gray-400 text-sm hover:text-[var(--primary-gold)] transition-colors">Refund Policy</a>
                <a href="/terms" className="block text-gray-400 text-sm hover:text-[var(--primary-gold)] transition-colors">Terms & Conditions</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} RenovaCare Clinic & Wellness Centre. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Booking Bar */}
      <ResumeBoundary>
        <BookingBar />
      </ResumeBoundary>
    </div>
  );
}
