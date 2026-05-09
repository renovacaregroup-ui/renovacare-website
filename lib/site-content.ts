import type { Locale } from "./locales";

type FeatureCard = {
  title: string;
  desc: string;
};

type ProgrammeCard = {
  title: string;
  desc: string;
};

type PartnerCard = {
  title: string;
  desc: string;
  alt: string;
  image: string;
  width: number;
  height: number;
};

type LegalSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  contactCard?: string[];
};

type LegalPageContent = {
  title: string;
  highlight: string;
  updated: string;
  sections: LegalSection[];
};

type SiteContent = {
  nav: {
    services: string;
    about: string;
    doctor: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    title: string[];
    desc: string;
    highlight: string;
    subline: string;
  };
  positioning: {
    titleStart: string;
    titleHighlight: string;
    titleEnd: string;
    desc: string;
    cards: FeatureCard[];
    supportLabel: string;
    supportTags: string[];
  };
  ecosystem: {
    titleStart: string;
    titleHighlight: string;
    desc: string;
    cards: FeatureCard[];
  };
  services: {
    titleStart: string;
    titleHighlight: string;
    categories: {
      title: string;
      items: string[];
    }[];
  };
  oncology: {
    titleStart: string;
    titleHighlight: string;
    desc: string;
    supportedTitle: string;
    supported: string[];
    aimsTitle: string;
    aims: string[];
    disclaimer: string;
  };
  wellness: {
    titleStart: string;
    titleHighlight: string;
    programmes: ProgrammeCard[];
  };
  experience: {
    titleStart: string;
    titleHighlight: string;
    titleEnd: string;
    desc: string;
    stats: { title: string; desc: string }[];
  };
  partners: {
    titleStart: string;
    titleHighlight: string;
    desc: string;
    cards: PartnerCard[];
  };
  doctor: {
    titleStart: string;
    titleHighlight: string;
    subtitle: string;
    qualificationsTitle: string;
    qualifications: string[];
    quote: string;
  };
  support: {
    titleStart: string;
    titleHighlight: string;
    items: string[];
  };
  promo: {
    eyebrow: string;
    title: string;
    desc: string;
    bullets: string[];
    highlight: string;
    whatsapp: string;
    book: string;
  };
  disclaimer: string;
  footer: {
    brandDesc: string;
    contactTitle: string;
    quickLinksTitle: string;
    legalTitle: string;
    quickLinks: {
      services: string;
      about: string;
      doctor: string;
      book: string;
    };
    legalLinks: {
      privacy: string;
      refund: string;
      terms: string;
    };
    copyright: string;
  };
  bookingBar: {
    tabs: {
      appointment: string;
      whatsapp: string;
      screening: string;
    };
    appointmentTitle: string;
    appointmentDesc: string;
    appointmentButton: string;
    whatsappTitle: string;
    whatsappDesc: string;
    whatsappButton: string;
    whatsappClose: string;
    screeningTitle: string;
    screeningDesc: string;
    screeningButton: string;
    popupTitle: string;
    popupSubtitle: string;
    popupPrompt: string;
    quickQuestions: { label: string; message: string }[];
  };
  legal: {
    privacy: LegalPageContent;
    refund: LegalPageContent;
    terms: LegalPageContent;
  };
};

export const siteContent: Record<Locale, SiteContent> = {
  en: {
    nav: {
      services: "Services",
      about: "About",
      doctor: "Our Doctor",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Specialised Cancer Recovery & Immune Support Centre",
      title: ["Doctor-Led Integrative", "Oncology Support Care"],
      desc: "Integrating medical care, immune support, regenerative therapies, and personalised recovery programmes to support your journey after cancer treatment.",
      highlight: "Restore Strength • Rebuild Resilience • Enhance Quality of Life",
      subline: "",
    },
    positioning: {
      titleStart: "Beyond Treatment - ",
      titleHighlight: "Continuity Care",
      titleEnd: " That Matters",
      desc: "RenovaCare Medical & Wellness Centre is a specialised integrative medical and wellness centre focused on supporting patients through every stage of recovery.",
      cards: [
        {
          title: "Cancer Recovery Support",
          desc: "Specialised programmes to help individuals restore their strength, rebuild resilience, and manage side effects after completing cancer treatment.",
        },
        {
          title: "Step-Down Care",
          desc: "Comprehensive transitional care designed to support patients recently discharged from hospital, ensuring a smooth and safe shift from hospital to home.",
        },
        {
          title: "Immune Restoration",
          desc: "Targeted therapies and lifestyle interventions aimed at rebuilding and supporting the immune system weakened after cancer treatments.",
        },
        {
          title: "Long-Term Wellness",
          desc: "Personalised plans focused on sustaining health and enhancing quality of life beyond initial recovery, with ongoing health assessments and preventive screenings.",
        },
      ],
      supportLabel: "We support patients who have completed:",
      supportTags: ["Surgery", "Chemotherapy", "Radiotherapy"],
    },
    ecosystem: {
      titleStart: "A Complete ",
      titleHighlight: "Recovery Ecosystem",
      desc: "We offer a unique and comprehensive recovery ecosystem that integrates multiple disciplines to support patients throughout their healing journey.",
      cards: [
        {
          title: "Clinical Medical Care",
          desc: "Professional general practitioner services focusing on medical guidance and ongoing health management.",
        },
        {
          title: "Recovery & Wellness Therapies",
          desc: "A range of therapies designed to promote physical restoration and emotional well-being, tailored to individual needs.",
        },
        {
          title: "Advanced Regenerative Support",
          desc: "Advanced regenerative approaches to strengthen the recovery process and support long-term health.",
        },
      ],
    },
    services: {
      titleStart: "Our Core ",
      titleHighlight: "Services",
      categories: [
        {
          title: "Medical & Preventive Care",
          items: [
            "General medical consultation",
            "Preventive health screening",
            "Comprehensive health assessment",
            "Blood investigations & diagnostics",
            "Personalised medical evaluation",
          ],
        },
        {
          title: "Recovery & Immune Support Programmes",
          items: [
            "Post-cancer recovery programmes",
            "Immune support therapies",
            "IV nutrient therapy",
            "Heat therapy & Biohito therapy",
            "Integrative TCM therapy",
            "Fatigue & wellness recovery support",
          ],
        },
        {
          title: "Advanced Regenerative & Cellular Therapies",
          items: [
            "MSC Stem Cell Therapy",
            "NK Cell Therapy",
            "Regenerative support programmes",
            "Cellular-based immune enhancement",
            "Anti-aging & rejuvenation support",
          ],
        },
      ],
    },
    oncology: {
      titleStart: "Supporting Recovery ",
      titleHighlight: "Beyond Treatment",
      desc: "We provide integrative oncology support care through medically guided recovery programmes and collaboration with certified healthcare partners.",
      supportedTitle: "Supported Therapies",
      supported: [
        "NK Cell Therapy (Immune Enhancement)",
        "Stem Cell Therapy (Regenerative Support)",
        "IV Nutrient Therapy (Nutritional Support)",
        "Personalised Recovery Programmes",
      ],
      aimsTitle: "Our Programmes Aim To",
      aims: [
        "Strengthen immune system function",
        "Reduce fatigue and improve energy levels",
        "Support recovery after chemotherapy or radiotherapy",
        "Enhance overall quality of life",
        "Support long-term wellness and resilience",
      ],
      disclaimer: "All therapies are designed to support recovery and wellness and do not replace primary oncology treatment.",
    },
    wellness: {
      titleStart: "Holistic Recovery & ",
      titleHighlight: "Wellness Support",
      programmes: [
        { title: "IV Nutrient Therapy", desc: "Essential vitamins and nutrients to promote cellular repair and boost immunity." },
        { title: "Liver Detox Support", desc: "Targeted nutrients and therapies aiding toxin elimination and metabolic health." },
        { title: "Vitamin C Infusion", desc: "High-dose vitamin C to support immune function and accelerate healing." },
        { title: "Immune Booster", desc: "Combination of nutrients to strengthen immune response." },
        { title: "Brain Health Support", desc: "Tailored nutrients to enhance cognitive function and mental clarity." },
        { title: "Metabolic Optimisation", desc: "Targets metabolic health and energy production." },
        { title: "Anti-aging & Rejuvenation", desc: "Therapies to slow aging and promote cellular regeneration." },
        { title: "Functional Wellness", desc: "Personalised care addressing physical, emotional, and lifestyle factors." },
      ],
    },
    experience: {
      titleStart: "Over ",
      titleHighlight: "20 Years",
      titleEnd: " of Healthcare & Wellness Experience",
      desc: "Our leadership and medical team bring together more than 20 years of experience in healthcare operations, wellness and preventive medicine, and patient care.",
      stats: [
        { title: "20+ Years", desc: "Healthcare & wellness experience" },
        { title: "Patient-Focused", desc: "Recovery programme development" },
        { title: "Regional Network", desc: "Healthcare initiatives & collaborations" },
      ],
    },
    partners: {
      titleStart: "Working Alongside ",
      titleHighlight: "Trusted Partners",
      desc: "RenovaCare collaborates with established medical and laboratory partners to provide structured and integrated recovery support.",
      cards: [
        {
          title: "Malaysian Genomics Resource Centre (MGRC)",
          desc: "cGMP-accredited cell processing laboratory supporting quality, safety, and compliance in cellular-based programmes.",
          alt: "Malaysian Genomics Resource Centre",
          image: "/MGRC logo.png",
          width: 180,
          height: 80,
        },
        {
          title: "Modern Cancer Hospital GuangZhou",
          desc: "International JCI-accredited cancer hospital providing advanced oncology care and recovery resources.",
          alt: "Modern Cancer Hospital GuangZhou",
          image: "/GZ Hospital logo.png",
          width: 240,
          height: 80,
        },
      ],
    },
    doctor: {
      titleStart: "Led by ",
      titleHighlight: "Dr. Yek Chu Jie",
      subtitle: "Integrative, Functional & Wellness Medicine",
      qualificationsTitle: "Qualifications & Expertise",
      qualifications: [
        "Experienced in integrative and wellness medicine",
        "Skilled in health screening, IV therapy & nutritional medicine",
        "Certified Occupational Health Doctor (NIOSH)",
        "Joint Injection Practitioner",
      ],
      quote: "Providing structured and personalised patient recovery support, walking alongside every patient in their healing journey.",
    },
    support: {
      titleStart: "Who We ",
      titleHighlight: "Support",
      items: [
        "Post-cancer treatment patients",
        "Individuals in recovery or remission",
        "Patients with weakened immune systems",
        "Individuals seeking wellness optimisation",
        "Preventive health clients",
        "Anti-aging & rejuvenation seekers",
      ],
    },
    promo: {
      eyebrow: "Limited Time Offer",
      title: "FREE Basic Health Screening",
      desc: "Consultation by Appointment • Limited Slots Available",
      bullets: [
        "Basic health assessment",
        "Consultation guidance",
        "Suitable for post-treatment patients",
      ],
      highlight: "Exclusive Opening Privileges Available",
      whatsapp: "WhatsApp Us Now",
      book: "Book Consultation",
    },
    disclaimer: "RenovaCare provides supportive and integrative wellness programmes designed to complement patient recovery and overall well-being. We do not replace oncology treatment, diagnosis, or specialist medical management. Patients are advised to continue follow-up with their primary medical specialists.",
    footer: {
      brandDesc: "Specialised integrative medical and wellness centre focused on cancer recovery support, immune enhancement, and long-term wellness.",
      contactTitle: "Contact Us",
      quickLinksTitle: "Quick Links",
      legalTitle: "Legal",
      quickLinks: {
        services: "Our Services",
        about: "About Us",
        doctor: "Our Doctor",
        book: "Book Appointment",
      },
      legalLinks: {
        privacy: "Privacy Policy",
        refund: "Refund Policy",
        terms: "Terms & Conditions",
      },
      copyright: "RenovaCare Clinic & Wellness Centre. All rights reserved.",
    },
    bookingBar: {
      tabs: {
        appointment: "Make Appointment",
        whatsapp: "WhatsApp Us",
        screening: "Free Health Screening",
      },
      appointmentTitle: "Book Your Consultation",
      appointmentDesc: "Schedule an appointment with Dr. Yek",
      appointmentButton: "Book Now",
      whatsappTitle: "Chat With Us",
      whatsappDesc: "Get instant reply on WhatsApp",
      whatsappButton: "WhatsApp",
      whatsappClose: "Close",
      screeningTitle: "FREE Basic Health Screening",
      screeningDesc: "Limited slots • By appointment only",
      screeningButton: "Claim Now",
      popupTitle: "RenovaCare",
      popupSubtitle: "Typically replies within minutes",
      popupPrompt: "How can we help you today?",
      quickQuestions: [
        { label: "I'd like to book a consultation", message: "Hi RenovaCare, I'd like to book a consultation. Please advise on available slots." },
        { label: "Tell me about cancer recovery programmes", message: "Hi RenovaCare, I'd like to know more about your cancer recovery support programmes." },
        { label: "What is NK Cell / Stem Cell Therapy?", message: "Hi RenovaCare, I'd like to learn more about NK Cell Therapy and Stem Cell Therapy. Can you share more details?" },
        { label: "Free health screening enquiry", message: "Hi RenovaCare, I saw your free basic health screening offer. I'd like to know more and book a slot." },
        { label: "General enquiry", message: "Hi RenovaCare, I have a question and would like some assistance." },
      ],
    },
    legal: {
      privacy: {
        title: "Privacy",
        highlight: "Policy",
        updated: "Last updated: May 2026",
        sections: [
          { heading: "1. Introduction", paragraphs: ["RenovaCare Clinic & Wellness Centre (“we”, “our”, or “us”) is committed to protecting your personal data and privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (www.renovacare.my) or use our services."] },
          { heading: "2. Information We Collect", paragraphs: ["We may collect the following types of information:"], bullets: ["Personal Information: Name, phone number, email address, date of birth, and identification details when you register or book an appointment.", "Medical Information: Health history, treatment records, consultation notes, and related medical data necessary for providing our services.", "Usage Data: Information about how you access and use our website, including IP address, browser type, and pages visited.", "Communication Data: Records of correspondence when you contact us via WhatsApp, email, or phone."] },
          { heading: "3. How We Use Your Information", paragraphs: ["We use your information for the following purposes:"], bullets: ["To provide and manage medical consultations, treatments, and wellness programmes.", "To schedule and manage appointments.", "To communicate with you regarding your health, appointments, and services.", "To process payments and manage billing.", "To improve our services and website experience.", "To comply with legal and regulatory requirements."] },
          { heading: "4. Data Protection", paragraphs: ["We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. Medical records are stored securely and access is restricted to authorised healthcare professionals only."] },
          { heading: "5. Data Sharing", paragraphs: ["We do not sell or rent your personal information to third parties. We may share your information with:"], bullets: ["Healthcare partners and laboratories for the purpose of treatment and diagnostics.", "Legal authorities when required by law.", "Service providers who assist in operating our website and services, under strict confidentiality agreements."] },
          { heading: "6. Your Rights", paragraphs: ["Under the Personal Data Protection Act 2010 (PDPA) of Malaysia, you have the right to:"], bullets: ["Access your personal data held by us.", "Correct any inaccurate or incomplete personal data.", "Withdraw consent for processing your data.", "Request deletion of your personal data, subject to legal obligations."] },
          { heading: "7. Cookies", paragraphs: ["Our website may use cookies to enhance your browsing experience. You can control cookie settings through your browser preferences."] },
          { heading: "8. Contact Us", paragraphs: ["If you have any questions or concerns about this Privacy Policy or your personal data, please contact us:"], contactCard: ["RenovaCare Clinic & Wellness Centre", "No 2-G, Jalan Eco Santuari 8/1A, Eco Santuari, Telok Panglima Garang, 42500 Selangor", "Phone: +6012-939 7686", "Email: enquiry@renovacare.my"] },
        ],
      },
      refund: {
        title: "Refund",
        highlight: "Policy",
        updated: "Last updated: May 2026",
        sections: [
          { heading: "1. General Policy", paragraphs: ["RenovaCare Clinic & Wellness Centre is committed to providing quality healthcare services. We understand that circumstances may require cancellations or changes to your appointments or purchased programmes. This policy outlines our refund terms and conditions."] },
          { heading: "2. Consultation Fees", bullets: ["Consultation fees are non-refundable once the consultation has taken place.", "If you cancel your appointment at least 24 hours before the scheduled time, no charge will be applied.", "Cancellations made less than 24 hours before the appointment may incur a cancellation fee.", "No-shows without prior notice will be charged the full consultation fee."] },
          { heading: "3. Treatment & Therapy Programmes", bullets: ["Programme packages (e.g., IV therapy, recovery programmes) are non-refundable once treatment has commenced.", "If you wish to cancel a programme before the first session, a refund may be issued minus an administrative fee of 10% of the total programme cost.", "Partially completed programmes are not eligible for refund on remaining sessions.", "Programme packages are non-transferable to other individuals unless approved by management."] },
          { heading: "4. Advanced Therapies (Stem Cell / NK Cell)", bullets: ["Due to the specialised nature of cellular therapies, all payments for Stem Cell and NK Cell therapies are non-refundable once the preparation process has begun.", "Cancellations prior to cell preparation may be eligible for a partial refund, subject to assessment.", "Any refund for advanced therapies will be evaluated on a case-by-case basis by our medical team."] },
          { heading: "5. Health Screening Packages", bullets: ["Health screening packages can be rescheduled at no additional cost with at least 48 hours notice.", "Refund requests for unused health screening packages will be processed minus a 15% administrative fee.", "No refunds will be issued after the screening has been conducted."] },
          { heading: "6. Refund Process", bullets: ["All refund requests must be submitted in writing via email to enquiry@renovacare.my.", "Approved refunds will be processed within 14 business days.", "Refunds will be credited back to the original payment method."] },
          { heading: "7. Exceptions", paragraphs: ["RenovaCare reserves the right to make exceptions to this policy on a case-by-case basis, particularly in circumstances involving medical emergencies or unforeseen events. Please speak with our team if you have special circumstances."] },
          { heading: "8. Contact Us", paragraphs: ["For any questions regarding this refund policy, please reach out to us:"], contactCard: ["RenovaCare Clinic & Wellness Centre", "No 2-G, Jalan Eco Santuari 8/1A, Eco Santuari, Telok Panglima Garang, 42500 Selangor", "Phone: +6012-939 7686", "Email: enquiry@renovacare.my"] },
        ],
      },
      terms: {
        title: "Terms &",
        highlight: "Conditions",
        updated: "Last updated: May 2026",
        sections: [
          { heading: "1. Welcome to RenovaCare", paragraphs: ["Thank you for choosing RenovaCare Clinic & Wellness Centre (“RenovaCare”). By accessing our services or visiting our website at www.renovacare.my, you acknowledge and accept these Terms & Conditions. These terms are intended to create a clear and comfortable experience for all patients and visitors."] },
          { heading: "2. Our Services", paragraphs: ["RenovaCare provides integrative healthcare, wellness, and recovery support services, which may include:", "All services are provided by qualified healthcare professionals and are carefully tailored based on individual health needs and medical suitability."], bullets: ["General medical consultation and preventive health screening", "Cancer recovery support programmes", "Immune support and IV nutrient therapies", "Advanced regenerative and cellular therapies, including Stem Cell and NK Cell programmes", "Wellness, recovery, and rejuvenation support"] },
          { heading: "3. Medical Information & Care Approach", paragraphs: ["At RenovaCare, we focus on supportive and integrative wellness care aimed at enhancing overall wellbeing, recovery, and quality of life.", "Our programmes are designed to complement ongoing medical care and should not be considered a substitute for specialist treatment, diagnosis, or emergency medical services. We encourage patients to continue regular follow-ups with their primary doctors and healthcare specialists.", "As each individual’s condition and response may differ, treatment experiences and results can vary from person to person. All therapies and programmes are recommended based on professional medical assessment and suitability."] },
          { heading: "4. Appointments & Scheduling", paragraphs: ["Appointments may be arranged through our online booking platform at app.renovacare.my/booking, WhatsApp, or phone.", "To help us provide a smooth experience for all patients:", "For cancellation or rescheduling details, please refer to our Refund Policy."], bullets: ["We kindly encourage punctual arrival for appointments", "In some situations, late arrival may shorten the available consultation time", "Occasionally, appointments may need to be adjusted or rescheduled due to unforeseen circumstances"] },
          { heading: "5. Payment Information", paragraphs: ["Payment is usually made at the time services are provided unless alternative arrangements have been agreed upon in advance.", "We currently accept:", "Programme packages may be paid in full or according to a mutually agreed payment arrangement prior to commencement.", "While we strive to maintain consistent pricing, service fees may occasionally be updated. Any confirmed bookings or approved quotations will continue to honour the agreed pricing."], bullets: ["Cash", "Credit or debit cards", "Online bank transfers"] },
          { heading: "6. Patient Cooperation", paragraphs: ["To support safe and personalised care, we kindly ask patients to:", "Your cooperation allows us to provide a safer and better experience for everyone."], bullets: ["Provide accurate and complete health information", "Inform our team of any changes in medical condition, medications, or allergies", "Follow the recommended care and post-treatment guidance provided by our healthcare team", "Maintain a respectful and comfortable environment during clinic visits"] },
          { heading: "7. Website & Content Usage", paragraphs: ["All materials and content available on the RenovaCare website, including text, images, branding, logos, and design elements, are owned by RenovaCare Clinic & Wellness Centre unless otherwise stated.", "We kindly ask that any reproduction or distribution of our materials be done only with prior written permission."] },
          { heading: "8. Limitation of Responsibility", paragraphs: ["RenovaCare is committed to delivering professional healthcare and wellness support with care and integrity. However, as with all medical and wellness services, individual outcomes may vary.", "To the extent permitted under applicable laws, RenovaCare will not be responsible for indirect or unforeseen losses arising from the use of our services or website. Where applicable, any responsibility shall be limited to the amount paid for the specific service involved."] },
          { heading: "9. Applicable Law", paragraphs: ["These Terms & Conditions are governed in accordance with the laws of Malaysia. Any matters arising in relation to our services shall be handled under the jurisdiction of the courts of Malaysia."] },
          { heading: "10. Updates to These Terms", paragraphs: ["From time to time, RenovaCare may update these Terms & Conditions to reflect service improvements, operational updates, or regulatory requirements.", "Any revised version will be published on this page together with the updated effective date. Continued use of our services after updates are published indicates acceptance of the revised terms."] },
          { heading: "11. Contact Us", paragraphs: ["If you have any questions or require further clarification regarding these Terms & Conditions, our team will be happy to assist you."], contactCard: ["RenovaCare Clinic & Wellness Centre", "Website: www.renovacare.my", "Booking: app.renovacare.my/booking"] },
        ],
      },
    },
  },
  zh: {
    nav: {
      services: "服务项目",
      about: "关于我们",
      doctor: "医生团队",
      contact: "联络我们",
    },
    hero: {
      eyebrow: "癌后康复与免疫支持专科中心",
      title: ["医生主导的整合式", "肿瘤康复支持护理"],
      desc: "结合医疗照护、免疫支持、再生疗法及个性化康复计划，在癌症治疗后持续陪伴您的恢复旅程。",
      highlight: "重塑健康 • 重建体能 • 提升生活质量",
      subline: "",
    },
    positioning: {
      titleStart: "治疗之后，更需要",
      titleHighlight: "连续性照护",
      titleEnd: "",
      desc: "RenovaCare Medical & Wellness Centre 是一家专注于患者各阶段康复支持的整合式医疗与健康中心。",
      cards: [
        { title: "癌后康复支持", desc: "通过专属康复方案，帮助患者在完成癌症治疗后恢复体力、重建韧性，并更好地管理副作用。" },
        { title: "出院后衔接照护", desc: "为刚出院患者提供过渡性照护，帮助他们更顺畅、更安心地从医院回到居家生活。" },
        { title: "免疫修复", desc: "通过针对性疗法与生活方式干预，帮助修复并支持在癌症治疗后受影响的免疫系统。" },
        { title: "长期健康管理", desc: "制定个性化长期健康计划，关注持续恢复、健康评估、预防筛查与生活质量提升。" },
      ],
      supportLabel: "我们支持已经完成以下治疗的患者：",
      supportTags: ["手术", "化疗", "放疗"],
    },
    ecosystem: {
      titleStart: "完整的",
      titleHighlight: "康复生态体系",
      desc: "我们整合多学科资源，为患者在康复旅程中的每一个阶段提供全面支持。",
      cards: [
        { title: "临床医疗照护", desc: "由专业全科医生提供医疗指导与持续健康管理服务。" },
        { title: "康复与健康疗法", desc: "提供多样化疗法，促进身体修复与情绪健康，并依个体需求调整。" },
        { title: "先进再生支持", desc: "运用先进再生支持方案，强化恢复过程并支持长期健康。" },
      ],
    },
    services: {
      titleStart: "核心",
      titleHighlight: "服务项目",
      categories: [
        {
          title: "医疗与预防照护",
          items: ["一般医疗咨询", "预防性健康筛查", "全面健康评估", "血液检查与诊断", "个性化医疗评估"],
        },
        {
          title: "康复与免疫支持计划",
          items: ["癌后康复计划", "免疫支持疗法", "静脉营养疗法", "热疗与 Biohito 疗法", "整合式中医调理", "疲劳与健康恢复支持"],
        },
        {
          title: "先进再生与细胞疗法",
          items: ["MSC 干细胞疗法", "NK 细胞疗法", "再生支持计划", "细胞型免疫增强", "抗衰老与焕活支持"],
        },
      ],
    },
    oncology: {
      titleStart: "在治疗之后，继续支持",
      titleHighlight: "康复之路",
      desc: "我们通过医疗指导的康复方案，并与认证医疗伙伴合作，为患者提供整合式肿瘤康复支持照护。",
      supportedTitle: "支持疗法",
      supported: ["NK 细胞疗法（免疫增强）", "干细胞疗法（再生支持）", "静脉营养疗法（营养支持）", "个性化康复计划"],
      aimsTitle: "我们的计划旨在",
      aims: ["强化免疫系统功能", "减轻疲劳并提升精力", "支持化疗或放疗后的恢复", "提升整体生活质量", "支持长期健康与身体韧性"],
      disclaimer: "所有疗法均以康复与健康支持为目标，不能取代主要肿瘤治疗。",
    },
    wellness: {
      titleStart: "整体康复与",
      titleHighlight: "健康支持",
      programmes: [
        { title: "静脉营养疗法", desc: "补充必要维生素与营养，促进细胞修复并增强免疫力。" },
        { title: "肝脏排毒支持", desc: "通过针对性营养与疗法，帮助排毒与代谢健康。" },
        { title: "维生素 C 输注", desc: "高剂量维生素 C 支持免疫功能并加快恢复。" },
        { title: "免疫增强疗程", desc: "组合营养支持方案，强化免疫反应。" },
        { title: "脑健康支持", desc: "针对认知功能与思绪清晰度设计的营养支持。" },
        { title: "代谢优化", desc: "帮助提升代谢健康与能量生成。" },
        { title: "抗衰老与焕活", desc: "通过支持疗法促进细胞更新与活力。" },
        { title: "功能性健康管理", desc: "从身体、情绪与生活方式多方面制定个性化照护。" },
      ],
    },
    experience: {
      titleStart: "超过 ",
      titleHighlight: "20 年",
      titleEnd: "医疗与健康经验",
      desc: "我们的领导与医疗团队在医疗运营、预防保健、健康管理及患者照护方面累积了超过二十年的经验。",
      stats: [
        { title: "20+ 年", desc: "医疗与健康经验" },
        { title: "以患者为中心", desc: "康复计划开发" },
        { title: "区域合作网络", desc: "医疗项目与合作资源" },
      ],
    },
    partners: {
      titleStart: "与",
      titleHighlight: "值得信赖的伙伴",
      desc: "RenovaCare 与多家成熟医疗及实验室伙伴合作，提供有结构的整合式康复支持。",
      cards: [
        { title: "Malaysian Genomics Resource Centre (MGRC)", desc: "具 cGMP 认证的细胞处理实验室，为细胞型计划提供质量、安全与合规支持。", alt: "Malaysian Genomics Resource Centre", image: "/MGRC logo.png", width: 180, height: 80 },
        { title: "广州现代肿瘤医院", desc: "具国际 JCI 认证的癌症医院，提供先进肿瘤照护与康复资源。", alt: "广州现代肿瘤医院", image: "/GZ Hospital logo.png", width: 240, height: 80 },
      ],
    },
    doctor: {
      titleStart: "由 ",
      titleHighlight: "Dr. Yek Chu Jie",
      subtitle: "整合医学、功能医学与健康医学",
      qualificationsTitle: "资历与专长",
      qualifications: ["具整合医学与健康医学经验", "擅长健康筛查、静脉治疗与营养医学", "认证职业健康医生（NIOSH）", "关节注射治疗执业者"],
      quote: "以结构化、个性化的患者康复支持，陪伴每一位患者走过恢复旅程。",
    },
    support: {
      titleStart: "我们",
      titleHighlight: "服务的对象",
      items: ["完成癌症治疗的患者", "康复期或缓解期人士", "免疫系统较弱的患者", "希望优化健康状态的人士", "预防保健需求客户", "抗衰老与焕活需求人士"],
    },
    promo: {
      eyebrow: "限时优惠",
      title: "免费基础健康筛查",
      desc: "预约咨询 • 名额有限",
      bullets: ["基础健康评估", "咨询指导", "适合癌后康复患者"],
      highlight: "开业专属礼遇进行中",
      whatsapp: "立即 WhatsApp 咨询",
      book: "预约咨询",
    },
    disclaimer: "RenovaCare 提供的是辅助性与整合式健康计划，旨在配合患者恢复与整体健康管理。我们不能取代肿瘤治疗、诊断或专科医疗管理。建议患者继续与主要专科医生保持后续随访。",
    footer: {
      brandDesc: "专注于癌后康复支持、免疫增强与长期健康管理的整合式医疗与健康中心。",
      contactTitle: "联络我们",
      quickLinksTitle: "快速链接",
      legalTitle: "法律资讯",
      quickLinks: { services: "服务项目", about: "关于我们", doctor: "医生团队", book: "预约咨询" },
      legalLinks: { privacy: "隐私政策", refund: "退款政策", terms: "条款与条件" },
      copyright: "RenovaCare Clinic & Wellness Centre. 版权所有。",
    },
    bookingBar: {
      tabs: { appointment: "预约", whatsapp: "WhatsApp 咨询", screening: "免费筛查" },
      appointmentTitle: "预约您的咨询",
      appointmentDesc: "安排与 Dr. Yek 的看诊时间",
      appointmentButton: "立即预约",
      whatsappTitle: "与我们聊天",
      whatsappDesc: "通过 WhatsApp 快速获得回复",
      whatsappButton: "WhatsApp",
      whatsappClose: "关闭",
      screeningTitle: "免费基础健康筛查",
      screeningDesc: "名额有限 • 仅限预约",
      screeningButton: "立即领取",
      popupTitle: "RenovaCare",
      popupSubtitle: "通常会在几分钟内回复",
      popupPrompt: "今天我们可以如何协助您？",
      quickQuestions: [
        { label: "我想预约咨询", message: "Hi RenovaCare，我想预约咨询，请问近期有哪些时段可预约？" },
        { label: "想了解癌后康复计划", message: "Hi RenovaCare，我想了解你们的癌后康复支持计划，请提供更多资料。" },
        { label: "想了解 NK 细胞 / 干细胞疗法", message: "Hi RenovaCare，我想进一步了解 NK 细胞疗法和干细胞疗法，请提供相关说明。" },
        { label: "免费健康筛查咨询", message: "Hi RenovaCare，我看到你们的免费基础健康筛查活动，想了解详情并预约。" },
        { label: "一般咨询", message: "Hi RenovaCare，我有一些问题想咨询。" },
      ],
    },
    legal: {
      privacy: {
        title: "隐私",
        highlight: "政策",
        updated: "最后更新：2026 年 5 月",
        sections: [
          { heading: "1. 简介", paragraphs: ["RenovaCare Clinic & Wellness Centre（“我们”）致力于保护您的个人资料与隐私。本隐私政策说明当您访问我们的网站（www.renovacare.my）或使用我们的服务时，我们如何收集、使用、披露与保护您的资料。"] },
          { heading: "2. 我们收集的资料", paragraphs: ["我们可能收集以下类型的资料："], bullets: ["个人资料：当您注册或预约时，可能包括姓名、电话号码、电邮地址、出生日期与身份证明资料。", "医疗资料：为提供服务所需的健康病史、治疗记录、咨询记录及相关医疗资料。", "使用资料：包括 IP 地址、浏览器类型与访问页面等网站使用信息。", "沟通资料：通过 WhatsApp、电邮或电话联络我们的往来记录。"] },
          { heading: "3. 我们如何使用您的资料", paragraphs: ["我们可能将您的资料用于以下目的："], bullets: ["提供并管理医疗咨询、治疗与健康计划。", "安排与管理预约。", "就健康、预约与服务相关事项与您沟通。", "处理付款与账务。", "改善我们的服务与网站体验。", "遵守法律与监管要求。"] },
          { heading: "4. 资料保护", paragraphs: ["我们采取适当的技术与组织措施，以防止个人资料遭未经授权的存取、更改、披露或破坏。医疗记录会被安全保存，并仅限授权医疗人员存取。"] },
          { heading: "5. 资料共享", paragraphs: ["我们不会向第三方出售或出租您的个人资料。我们可能在以下情况下共享资料："], bullets: ["基于治疗与诊断需要，与医疗合作伙伴及实验室共享。", "在法律要求下向有关当局提供。", "与协助我们运营网站和服务的服务供应商共享，并受严格保密协议约束。"] },
          { heading: "6. 您的权利", paragraphs: ["根据马来西亚 2010 年个人资料保护法（PDPA），您有权："], bullets: ["查阅我们持有的个人资料。", "更正不准确或不完整的个人资料。", "撤回对资料处理的同意。", "在符合法律义务前提下，要求删除您的个人资料。"] },
          { heading: "7. Cookies", paragraphs: ["我们的网站可能使用 Cookies 以提升浏览体验。您可通过浏览器设置管理 Cookies。"] },
          { heading: "8. 联络我们", paragraphs: ["如您对本隐私政策或个人资料有任何疑问，请联络我们："], contactCard: ["RenovaCare Clinic & Wellness Centre", "No 2-G, Jalan Eco Santuari 8/1A, Eco Santuari, Telok Panglima Garang, 42500 Selangor", "电话：+6012-939 7686", "电邮：enquiry@renovacare.my"] },
        ],
      },
      refund: {
        title: "退款",
        highlight: "政策",
        updated: "最后更新：2026 年 5 月",
        sections: [
          { heading: "1. 一般政策", paragraphs: ["RenovaCare Clinic & Wellness Centre 致力于提供优质医疗服务。我们理解某些情况下您可能需要取消或更改预约及已购买的计划。本政策说明我们的退款条款与条件。"] },
          { heading: "2. 咨询费用", bullets: ["咨询一旦完成，相关费用概不退款。", "若您在预约时间至少 24 小时前取消预约，将不会收取费用。", "若在预约前 24 小时内取消，可能会收取取消费用。", "无事先通知而未到者，将收取全额咨询费。"] },
          { heading: "3. 治疗与疗程计划", bullets: ["疗程配套（如 IV 疗法、康复计划）一经开始，概不退款。", "若在第一次疗程开始前取消，可在扣除总费用 10% 行政费后申请退款。", "已部分完成的计划，剩余疗程不予退款。", "疗程配套不可转让给他人，除非经管理层批准。"] },
          { heading: "4. 先进疗法（干细胞 / NK 细胞）", bullets: ["由于细胞疗法具有特殊性，一旦准备流程开始，相关付款概不退款。", "若在细胞准备前取消，可视情况评估是否提供部分退款。", "先进疗法的任何退款申请将由医疗团队个案评估。"] },
          { heading: "5. 健康筛查配套", bullets: ["若至少提前 48 小时通知，可免费重新安排健康筛查时间。", "未使用的健康筛查配套申请退款时，将扣除 15% 行政费。", "筛查一经完成，概不退款。"] },
          { heading: "6. 退款流程", bullets: ["所有退款申请须通过电邮发送至 enquiry@renovacare.my。", "获批准的退款将在 14 个工作日内处理。", "退款将退回至原付款方式。"] },
          { heading: "7. 例外情况", paragraphs: ["RenovaCare 保留按个案处理例外情况的权利，尤其是在医疗紧急状况或不可预见事件发生时。如您有特殊情况，请与我们的团队联系。"] },
          { heading: "8. 联络我们", paragraphs: ["如您对退款政策有任何疑问，请与我们联系："], contactCard: ["RenovaCare Clinic & Wellness Centre", "No 2-G, Jalan Eco Santuari 8/1A, Eco Santuari, Telok Panglima Garang, 42500 Selangor", "电话：+6012-939 7686", "电邮：enquiry@renovacare.my"] },
        ],
      },
      terms: {
        title: "条款与",
        highlight: "条件",
        updated: "最后更新：2026 年 5 月",
        sections: [
          { heading: "1. 欢迎来到 RenovaCare", paragraphs: ["感谢您选择 RenovaCare Clinic & Wellness Centre（“RenovaCare”）。当您访问我们的网站或使用我们的服务，即表示您理解并接受本条款与条件。此文件旨在为所有患者与访客提供清晰舒适的体验。"] },
          { heading: "2. 我们的服务", paragraphs: ["RenovaCare 提供整合医疗、健康与康复支持服务，可能包括：", "所有服务均由合格的医疗专业人员提供，并依据个人健康需求与医疗适合度作出安排。"], bullets: ["一般医疗咨询与预防健康筛查", "癌后康复支持计划", "免疫支持与静脉营养疗法", "先进再生与细胞疗法，包括干细胞与 NK 细胞计划", "健康、恢复与焕活支持"] },
          { heading: "3. 医疗资料与照护方式", paragraphs: ["RenovaCare 专注于支持性与整合式健康照护，目标在于提升整体健康、恢复与生活质量。", "我们的计划旨在配合现有医疗照护，不能视为专科治疗、诊断或紧急医疗服务的替代方案。我们鼓励患者持续与主要医生及专科医生保持规律跟进。", "由于每位个体的健康状况与反应不同，治疗体验与结果也可能有所差异。所有疗法与计划均依据专业医疗评估与适合度建议。"] },
          { heading: "4. 预约与时间安排", paragraphs: ["预约可通过线上预约平台 app.renovacare.my/booking、WhatsApp 或电话安排。", "为了让所有患者获得更顺畅的体验：", "有关取消或改期详情，请参阅退款政策。"], bullets: ["我们鼓励患者准时到达预约", "部分情况下，迟到可能会缩短可用咨询时间", "若遇不可预见情况，预约时间可能需要调整或改期"] },
          { heading: "5. 付款资料", paragraphs: ["除非事先另有安排，费用通常在提供服务时支付。", "目前我们接受：", "疗程配套可在开始前一次性支付，或按双方同意的付款安排执行。", "虽然我们会尽力维持价格稳定，但服务费用偶尔可能更新。已确认的预约或报价将继续按照既定价格执行。"], bullets: ["现金", "信用卡或扣账卡", "网上银行转账"] },
          { heading: "6. 患者配合事项", paragraphs: ["为支持安全且个性化的照护，我们恳请患者：", "您的配合有助于我们为每个人提供更安全、更良好的体验。"], bullets: ["提供准确完整的健康资料", "主动告知病情、药物或过敏情况的变化", "遵循医疗团队提供的照护与疗后建议", "在诊所内维持尊重与舒适的环境"] },
          { heading: "7. 网站与内容使用", paragraphs: ["RenovaCare 网站上的所有资料与内容，包括文字、图片、品牌、标志与设计元素，除另有说明外，均归 RenovaCare Clinic & Wellness Centre 所有。", "如需复制或传播相关资料，请事先取得书面许可。"] },
          { heading: "8. 责任限制", paragraphs: ["RenovaCare 承诺以专业与诚信提供医疗与健康支持服务。然而，与所有医疗和健康服务一样，个别结果可能不同。", "在适用法律允许的范围内，RenovaCare 对于因使用我们的服务或网站所引起的间接或不可预见损失不承担责任。如适用，任何责任以有关服务的已付金额为限。"] },
          { heading: "9. 适用法律", paragraphs: ["本条款与条件依据马来西亚法律解释与适用。凡与我们的服务有关的事项，均由马来西亚法院管辖。"] },
          { heading: "10. 条款更新", paragraphs: ["RenovaCare 可能不时更新本条款与条件，以反映服务优化、营运更新或监管要求。", "任何修订版本将刊登于本页面，并附上更新生效日期。若您在更新发布后继续使用我们的服务，即表示您接受修订后的条款。"] },
          { heading: "11. 联络我们", paragraphs: ["如您对本条款与条件有任何疑问或需要进一步说明，我们的团队乐意协助。"], contactCard: ["RenovaCare Clinic & Wellness Centre", "网站：www.renovacare.my", "预约：app.renovacare.my/booking"] },
        ],
      },
    },
  },
  ms: {
    nav: {
      services: "Perkhidmatan",
      about: "Tentang Kami",
      doctor: "Doktor Kami",
      contact: "Hubungi Kami",
    },
    hero: {
      eyebrow: "Pusat Sokongan Pemulihan Kanser & Imun Khas",
      title: ["Penjagaan Sokongan Onkologi", "Integratif Dipimpin Doktor"],
      desc: "Menggabungkan rawatan perubatan, sokongan imun, terapi regeneratif, dan program pemulihan yang diperibadikan untuk menyokong perjalanan anda selepas rawatan kanser.",
      highlight: "Pulihkan Kekuatan • Bina Semula Ketahanan • Tingkatkan Kualiti Hidup",
      subline: "",
    },
    positioning: {
      titleStart: "Selepas rawatan, yang paling penting ialah ",
      titleHighlight: "penjagaan berterusan",
      titleEnd: "",
      desc: "RenovaCare Medical & Wellness Centre ialah pusat perubatan dan kesejahteraan integratif yang khusus dalam menyokong pesakit melalui setiap fasa pemulihan.",
      cards: [
        { title: "Sokongan Pemulihan Kanser", desc: "Program khas untuk membantu individu memulihkan kekuatan, membina semula ketahanan, dan mengurus kesan sampingan selepas tamat rawatan kanser." },
        { title: "Penjagaan Selepas Discaj", desc: "Penjagaan peralihan menyeluruh untuk menyokong pesakit yang baru keluar hospital agar proses kembali ke rumah lebih lancar dan selamat." },
        { title: "Pemulihan Imun", desc: "Terapi sasaran dan intervensi gaya hidup untuk membina semula serta menyokong sistem imun yang terjejas selepas rawatan kanser." },
        { title: "Kesejahteraan Jangka Panjang", desc: "Pelan peribadi yang memberi tumpuan kepada mengekalkan kesihatan dan meningkatkan kualiti hidup selepas pemulihan awal." },
      ],
      supportLabel: "Kami menyokong pesakit yang telah menjalani:",
      supportTags: ["Pembedahan", "Kemoterapi", "Radioterapi"],
    },
    ecosystem: {
      titleStart: "Ekosistem Pemulihan yang ",
      titleHighlight: "Lengkap",
      desc: "Kami menawarkan ekosistem pemulihan yang menyeluruh dengan integrasi pelbagai disiplin bagi menyokong pesakit sepanjang perjalanan penyembuhan mereka.",
      cards: [
        { title: "Penjagaan Klinikal", desc: "Perkhidmatan doktor am profesional yang memberi tumpuan kepada panduan perubatan dan pengurusan kesihatan berterusan." },
        { title: "Terapi Pemulihan & Kesejahteraan", desc: "Pelbagai terapi yang direka untuk menyokong pemulihan fizikal dan kesejahteraan emosi mengikut keperluan individu." },
        { title: "Sokongan Regeneratif Lanjutan", desc: "Pendekatan regeneratif lanjutan untuk menguatkan proses pemulihan dan menyokong kesihatan jangka panjang." },
      ],
    },
    services: {
      titleStart: "Teras ",
      titleHighlight: "Perkhidmatan Kami",
      categories: [
        {
          title: "Penjagaan Perubatan & Pencegahan",
          items: ["Konsultasi perubatan am", "Saringan kesihatan pencegahan", "Penilaian kesihatan menyeluruh", "Ujian darah & diagnostik", "Penilaian perubatan yang diperibadikan"],
        },
        {
          title: "Program Pemulihan & Sokongan Imun",
          items: ["Program pemulihan selepas kanser", "Terapi sokongan imun", "Terapi nutrien IV", "Terapi haba & Biohito", "Terapi TCM integratif", "Sokongan pemulihan keletihan & kesejahteraan"],
        },
        {
          title: "Terapi Regeneratif & Selular Lanjutan",
          items: ["Terapi Sel Stem MSC", "Terapi Sel NK", "Program sokongan regeneratif", "Peningkatan imun berasaskan sel", "Sokongan anti-penuaan & peremajaan"],
        },
      ],
    },
    oncology: {
      titleStart: "Menyokong Pemulihan ",
      titleHighlight: "Selepas Rawatan",
      desc: "Kami menyediakan penjagaan sokongan onkologi integratif melalui program pemulihan yang dipandu secara perubatan dan kerjasama dengan rakan penjagaan kesihatan yang diperakui.",
      supportedTitle: "Terapi yang Disokong",
      supported: ["Terapi Sel NK (Peningkatan Imun)", "Terapi Sel Stem (Sokongan Regeneratif)", "Terapi Nutrien IV (Sokongan Nutrisi)", "Program Pemulihan Diperibadikan"],
      aimsTitle: "Matlamat Program Kami",
      aims: ["Menguatkan fungsi sistem imun", "Mengurangkan keletihan dan meningkatkan tenaga", "Menyokong pemulihan selepas kemoterapi atau radioterapi", "Meningkatkan kualiti hidup secara keseluruhan", "Menyokong kesejahteraan dan ketahanan jangka panjang"],
      disclaimer: "Semua terapi direka untuk menyokong pemulihan dan kesejahteraan serta tidak menggantikan rawatan onkologi utama.",
    },
    wellness: {
      titleStart: "Pemulihan Holistik & ",
      titleHighlight: "Sokongan Kesejahteraan",
      programmes: [
        { title: "Terapi Nutrien IV", desc: "Vitamin dan nutrien penting untuk membantu pembaikan sel serta meningkatkan imuniti." },
        { title: "Sokongan Detoks Hati", desc: "Nutrien dan terapi sasaran yang membantu penyingkiran toksin dan kesihatan metabolik." },
        { title: "Infusi Vitamin C", desc: "Vitamin C dos tinggi untuk menyokong fungsi imun dan mempercepatkan pemulihan." },
        { title: "Penguat Imun", desc: "Gabungan nutrien untuk menguatkan tindak balas imun." },
        { title: "Sokongan Kesihatan Otak", desc: "Nutrien yang disesuaikan untuk menyokong fungsi kognitif dan kejelasan mental." },
        { title: "Pengoptimuman Metabolik", desc: "Menyasarkan kesihatan metabolik dan penghasilan tenaga." },
        { title: "Anti-Penuaan & Peremajaan", desc: "Terapi sokongan untuk melambatkan penuaan dan menyokong pembaharuan sel." },
        { title: "Kesejahteraan Fungsional", desc: "Penjagaan peribadi yang merangkumi faktor fizikal, emosi dan gaya hidup." },
      ],
    },
    experience: {
      titleStart: "Lebih ",
      titleHighlight: "20 Tahun",
      titleEnd: " Pengalaman dalam Penjagaan Kesihatan & Kesejahteraan",
      desc: "Pasukan kepimpinan dan perubatan kami membawa lebih daripada 20 tahun pengalaman dalam operasi penjagaan kesihatan, perubatan pencegahan, kesejahteraan, dan penjagaan pesakit.",
      stats: [
        { title: "20+ Tahun", desc: "Pengalaman kesihatan & kesejahteraan" },
        { title: "Berfokuskan Pesakit", desc: "Pembangunan program pemulihan" },
        { title: "Rangkaian Serantau", desc: "Inisiatif dan kolaborasi kesihatan" },
      ],
    },
    partners: {
      titleStart: "Bekerjasama Dengan ",
      titleHighlight: "Rakan Dipercayai",
      desc: "RenovaCare bekerjasama dengan rakan perubatan dan makmal yang mantap untuk menyediakan sokongan pemulihan yang tersusun dan integratif.",
      cards: [
        { title: "Malaysian Genomics Resource Centre (MGRC)", desc: "Makmal pemprosesan sel bertauliah cGMP yang menyokong kualiti, keselamatan, dan pematuhan bagi program berasaskan sel.", alt: "Malaysian Genomics Resource Centre", image: "/MGRC logo.png", width: 180, height: 80 },
        { title: "Modern Cancer Hospital GuangZhou", desc: "Hospital kanser bertaraf antarabangsa dengan akreditasi JCI yang menyediakan rawatan onkologi lanjutan dan sumber pemulihan.", alt: "Modern Cancer Hospital GuangZhou", image: "/GZ Hospital logo.png", width: 240, height: 80 },
      ],
    },
    doctor: {
      titleStart: "Dipimpin oleh ",
      titleHighlight: "Dr. Yek Chu Jie",
      subtitle: "Perubatan Integratif, Fungsional & Kesejahteraan",
      qualificationsTitle: "Kelayakan & Kepakaran",
      qualifications: ["Berpengalaman dalam perubatan integratif dan kesejahteraan", "Mahir dalam saringan kesihatan, terapi IV & perubatan nutrisi", "Doktor Kesihatan Pekerjaan Bertauliah (NIOSH)", "Pengamal Suntikan Sendi"],
      quote: "Menyediakan sokongan pemulihan pesakit yang tersusun dan diperibadikan, sambil menemani setiap pesakit sepanjang perjalanan penyembuhan mereka.",
    },
    support: {
      titleStart: "Siapa Yang Kami ",
      titleHighlight: "Sokong",
      items: ["Pesakit selepas rawatan kanser", "Individu dalam proses pemulihan atau remisi", "Pesakit dengan sistem imun yang lemah", "Individu yang ingin mengoptimumkan kesihatan", "Klien saringan kesihatan pencegahan", "Individu yang mencari anti-penuaan & peremajaan"],
    },
    promo: {
      eyebrow: "Tawaran Masa Terhad",
      title: "Saringan Kesihatan Asas PERCUMA",
      desc: "Konsultasi melalui temujanji • Tempat terhad",
      bullets: ["Penilaian kesihatan asas", "Panduan konsultasi", "Sesuai untuk pesakit pasca rawatan"],
      highlight: "Keistimewaan Pembukaan Eksklusif Tersedia",
      whatsapp: "WhatsApp Kami Sekarang",
      book: "Tempah Konsultasi",
    },
    disclaimer: "RenovaCare menyediakan program kesejahteraan integratif dan sokongan yang direka untuk melengkapkan pemulihan pesakit dan kesejahteraan keseluruhan. Kami tidak menggantikan rawatan onkologi, diagnosis, atau pengurusan perubatan pakar. Pesakit dinasihatkan untuk meneruskan susulan dengan pakar perubatan utama mereka.",
    footer: {
      brandDesc: "Pusat perubatan dan kesejahteraan integratif yang khusus dalam sokongan pemulihan kanser, peningkatan imun, dan kesejahteraan jangka panjang.",
      contactTitle: "Hubungi Kami",
      quickLinksTitle: "Pautan Pantas",
      legalTitle: "Undang-Undang",
      quickLinks: { services: "Perkhidmatan Kami", about: "Tentang Kami", doctor: "Doktor Kami", book: "Tempah Temujanji" },
      legalLinks: { privacy: "Dasar Privasi", refund: "Dasar Pemulangan", terms: "Terma & Syarat" },
      copyright: "RenovaCare Clinic & Wellness Centre. Hak cipta terpelihara.",
    },
    bookingBar: {
      tabs: { appointment: "Buat Temujanji", whatsapp: "WhatsApp Kami", screening: "Saringan Percuma" },
      appointmentTitle: "Tempah Konsultasi Anda",
      appointmentDesc: "Aturkan temujanji dengan Dr. Yek",
      appointmentButton: "Tempah Sekarang",
      whatsappTitle: "Berbual Dengan Kami",
      whatsappDesc: "Dapatkan balasan segera di WhatsApp",
      whatsappButton: "WhatsApp",
      whatsappClose: "Tutup",
      screeningTitle: "Saringan Kesihatan Asas PERCUMA",
      screeningDesc: "Tempat terhad • Melalui temujanji sahaja",
      screeningButton: "Tuntut Sekarang",
      popupTitle: "RenovaCare",
      popupSubtitle: "Biasanya membalas dalam beberapa minit",
      popupPrompt: "Bagaimana kami boleh membantu anda hari ini?",
      quickQuestions: [
        { label: "Saya ingin menempah konsultasi", message: "Hi RenovaCare, saya ingin menempah konsultasi. Boleh kongsikan slot yang tersedia?" },
        { label: "Ingin tahu tentang program pemulihan kanser", message: "Hi RenovaCare, saya ingin mengetahui lebih lanjut tentang program sokongan pemulihan kanser anda." },
        { label: "Apakah Terapi Sel NK / Sel Stem?", message: "Hi RenovaCare, saya ingin mengetahui lebih lanjut tentang Terapi Sel NK dan Terapi Sel Stem. Boleh terangkan?" },
        { label: "Pertanyaan saringan kesihatan percuma", message: "Hi RenovaCare, saya melihat tawaran saringan kesihatan asas percuma anda. Saya ingin tahu lebih lanjut dan membuat tempahan." },
        { label: "Pertanyaan umum", message: "Hi RenovaCare, saya mempunyai beberapa pertanyaan dan ingin mendapatkan bantuan." },
      ],
    },
    legal: {
      privacy: {
        title: "Dasar",
        highlight: "Privasi",
        updated: "Dikemas kini terakhir: Mei 2026",
        sections: [
          { heading: "1. Pengenalan", paragraphs: ["RenovaCare Clinic & Wellness Centre (“kami”) komited untuk melindungi data peribadi dan privasi anda. Dasar Privasi ini menerangkan bagaimana kami mengumpul, menggunakan, mendedahkan, dan melindungi maklumat anda apabila anda melawat laman web kami (www.renovacare.my) atau menggunakan perkhidmatan kami."] },
          { heading: "2. Maklumat Yang Kami Kumpul", paragraphs: ["Kami mungkin mengumpul jenis maklumat berikut:"], bullets: ["Maklumat Peribadi: Nama, nombor telefon, alamat e-mel, tarikh lahir, dan butiran pengenalan apabila anda mendaftar atau membuat temujanji.", "Maklumat Perubatan: Sejarah kesihatan, rekod rawatan, nota konsultasi, dan data perubatan berkaitan yang diperlukan untuk menyediakan perkhidmatan kami.", "Data Penggunaan: Maklumat tentang cara anda mengakses dan menggunakan laman web kami, termasuk alamat IP, jenis pelayar, dan halaman yang dilawati.", "Data Komunikasi: Rekod komunikasi apabila anda menghubungi kami melalui WhatsApp, e-mel, atau telefon."] },
          { heading: "3. Cara Kami Menggunakan Maklumat Anda", paragraphs: ["Kami menggunakan maklumat anda untuk tujuan berikut:"], bullets: ["Menyediakan dan mengurus konsultasi perubatan, rawatan, dan program kesejahteraan.", "Menjadualkan dan mengurus temujanji.", "Berkomunikasi dengan anda berkaitan kesihatan, temujanji, dan perkhidmatan.", "Memproses pembayaran dan pengurusan bil.", "Menambah baik perkhidmatan dan pengalaman laman web kami.", "Mematuhi keperluan undang-undang dan peraturan."] },
          { heading: "4. Perlindungan Data", paragraphs: ["Kami melaksanakan langkah teknikal dan organisasi yang sesuai untuk melindungi data peribadi anda daripada akses, pengubahan, pendedahan, atau pemusnahan tanpa kebenaran. Rekod perubatan disimpan dengan selamat dan hanya boleh diakses oleh profesional kesihatan yang diberi kuasa."] },
          { heading: "5. Perkongsian Data", paragraphs: ["Kami tidak menjual atau menyewakan maklumat peribadi anda kepada pihak ketiga. Kami mungkin berkongsi maklumat anda dengan:"], bullets: ["Rakan penjagaan kesihatan dan makmal bagi tujuan rawatan dan diagnostik.", "Pihak berkuasa undang-undang apabila dikehendaki oleh undang-undang.", "Penyedia perkhidmatan yang membantu mengendalikan laman web dan perkhidmatan kami, tertakluk kepada perjanjian kerahsiaan yang ketat."] },
          { heading: "6. Hak Anda", paragraphs: ["Di bawah Akta Perlindungan Data Peribadi 2010 (PDPA) Malaysia, anda berhak untuk:"], bullets: ["Mengakses data peribadi anda yang disimpan oleh kami.", "Membetulkan data peribadi yang tidak tepat atau tidak lengkap.", "Menarik balik persetujuan untuk pemprosesan data anda.", "Meminta pemadaman data peribadi anda, tertakluk kepada kewajipan undang-undang."] },
          { heading: "7. Cookies", paragraphs: ["Laman web kami mungkin menggunakan cookies untuk meningkatkan pengalaman pelayaran anda. Anda boleh mengawal tetapan cookies melalui pilihan pelayar anda."] },
          { heading: "8. Hubungi Kami", paragraphs: ["Jika anda mempunyai sebarang soalan atau kebimbangan mengenai Dasar Privasi ini atau data peribadi anda, sila hubungi kami:"], contactCard: ["RenovaCare Clinic & Wellness Centre", "No 2-G, Jalan Eco Santuari 8/1A, Eco Santuari, Telok Panglima Garang, 42500 Selangor", "Telefon: +6012-939 7686", "E-mel: enquiry@renovacare.my"] },
        ],
      },
      refund: {
        title: "Dasar",
        highlight: "Pemulangan",
        updated: "Dikemas kini terakhir: Mei 2026",
        sections: [
          { heading: "1. Polisi Umum", paragraphs: ["RenovaCare Clinic & Wellness Centre komited untuk menyediakan perkhidmatan kesihatan berkualiti. Kami memahami bahawa sesetengah keadaan mungkin memerlukan pembatalan atau perubahan pada temujanji atau program yang telah dibeli. Polisi ini menerangkan terma dan syarat pemulangan kami."] },
          { heading: "2. Yuran Konsultasi", bullets: ["Yuran konsultasi tidak boleh dipulangkan selepas konsultasi berlangsung.", "Jika anda membatalkan temujanji sekurang-kurangnya 24 jam sebelum waktu yang dijadualkan, tiada caj akan dikenakan.", "Pembatalan kurang daripada 24 jam sebelum temujanji mungkin dikenakan fi pembatalan.", "Ketidakhadiran tanpa notis awal akan dikenakan yuran konsultasi penuh."] },
          { heading: "3. Program Rawatan & Terapi", bullets: ["Pakej program (contohnya terapi IV, program pemulihan) tidak boleh dipulangkan selepas rawatan dimulakan.", "Jika anda ingin membatalkan program sebelum sesi pertama, pemulangan mungkin diberikan selepas ditolak fi pentadbiran sebanyak 10% daripada jumlah kos program.", "Program yang telah dimulakan sebahagiannya tidak layak untuk pemulangan baki sesi.", "Pakej program tidak boleh dipindahkan kepada individu lain kecuali diluluskan oleh pihak pengurusan."] },
          { heading: "4. Terapi Lanjutan (Sel Stem / Sel NK)", bullets: ["Disebabkan sifat khusus terapi selular, semua bayaran bagi terapi Sel Stem dan Sel NK tidak boleh dipulangkan selepas proses penyediaan bermula.", "Pembatalan sebelum penyediaan sel mungkin layak untuk pemulangan sebahagian, tertakluk kepada penilaian.", "Sebarang pemulangan bagi terapi lanjutan akan dinilai secara kes demi kes oleh pasukan perubatan kami."] },
          { heading: "5. Pakej Saringan Kesihatan", bullets: ["Pakej saringan kesihatan boleh dijadualkan semula tanpa kos tambahan dengan notis sekurang-kurangnya 48 jam.", "Permintaan pemulangan bagi pakej saringan kesihatan yang belum digunakan akan diproses selepas ditolak fi pentadbiran sebanyak 15%.", "Tiada pemulangan akan diberikan selepas saringan dijalankan."] },
          { heading: "6. Proses Pemulangan", bullets: ["Semua permintaan pemulangan mesti dihantar secara bertulis melalui e-mel ke enquiry@renovacare.my.", "Pemulangan yang diluluskan akan diproses dalam tempoh 14 hari bekerja.", "Pemulangan akan dikreditkan semula kepada kaedah pembayaran asal."] },
          { heading: "7. Pengecualian", paragraphs: ["RenovaCare berhak membuat pengecualian terhadap polisi ini secara kes demi kes, terutamanya dalam keadaan kecemasan perubatan atau kejadian luar jangka. Sila berbincang dengan pasukan kami jika anda mempunyai keadaan khas."] },
          { heading: "8. Hubungi Kami", paragraphs: ["Untuk sebarang pertanyaan berkaitan dasar pemulangan ini, sila hubungi kami:"], contactCard: ["RenovaCare Clinic & Wellness Centre", "No 2-G, Jalan Eco Santuari 8/1A, Eco Santuari, Telok Panglima Garang, 42500 Selangor", "Telefon: +6012-939 7686", "E-mel: enquiry@renovacare.my"] },
        ],
      },
      terms: {
        title: "Terma &",
        highlight: "Syarat",
        updated: "Dikemas kini terakhir: Mei 2026",
        sections: [
          { heading: "1. Selamat Datang ke RenovaCare", paragraphs: ["Terima kasih kerana memilih RenovaCare Clinic & Wellness Centre (“RenovaCare”). Dengan mengakses perkhidmatan kami atau melawat laman web kami di www.renovacare.my, anda mengakui dan menerima Terma & Syarat ini. Terma ini diwujudkan untuk memastikan pengalaman yang jelas dan selesa bagi semua pesakit dan pelawat."] },
          { heading: "2. Perkhidmatan Kami", paragraphs: ["RenovaCare menyediakan perkhidmatan penjagaan kesihatan integratif, kesejahteraan, dan sokongan pemulihan yang mungkin termasuk:", "Semua perkhidmatan diberikan oleh profesional penjagaan kesihatan yang berkelayakan dan disesuaikan dengan keperluan kesihatan serta kesesuaian perubatan individu."], bullets: ["Konsultasi perubatan am dan saringan kesihatan pencegahan", "Program sokongan pemulihan kanser", "Sokongan imun dan terapi nutrien IV", "Terapi regeneratif dan selular lanjutan, termasuk program Sel Stem dan Sel NK", "Sokongan kesejahteraan, pemulihan, dan peremajaan"] },
          { heading: "3. Maklumat Perubatan & Pendekatan Penjagaan", paragraphs: ["Di RenovaCare, kami menumpukan kepada penjagaan kesejahteraan yang menyokong dan integratif untuk meningkatkan kesejahteraan keseluruhan, pemulihan, dan kualiti hidup.", "Program kami direka untuk melengkapkan penjagaan perubatan yang sedang berjalan dan tidak boleh dianggap sebagai pengganti rawatan pakar, diagnosis, atau perkhidmatan kecemasan perubatan. Kami menggalakkan pesakit untuk meneruskan susulan berkala dengan doktor utama dan pakar kesihatan masing-masing.", "Oleh kerana keadaan dan tindak balas setiap individu berbeza, pengalaman serta hasil rawatan juga mungkin berbeza. Semua terapi dan program disyorkan berdasarkan penilaian perubatan profesional dan kesesuaian."] },
          { heading: "4. Temujanji & Penjadualan", paragraphs: ["Temujanji boleh diatur melalui platform tempahan dalam talian kami di app.renovacare.my/booking, WhatsApp, atau telefon.", "Untuk membantu kami memberikan pengalaman yang lancar kepada semua pesakit:", "Untuk maklumat pembatalan atau penjadualan semula, sila rujuk Dasar Pemulangan kami."], bullets: ["Kami menggalakkan ketibaan tepat pada masanya untuk temujanji", "Dalam sesetengah situasi, ketibaan lewat boleh memendekkan tempoh konsultasi yang tersedia", "Kadangkala, temujanji mungkin perlu dilaraskan atau dijadualkan semula disebabkan keadaan yang tidak dijangka"] },
          { heading: "5. Maklumat Pembayaran", paragraphs: ["Pembayaran biasanya dibuat pada masa perkhidmatan diberikan kecuali jika terdapat pengaturan lain yang dipersetujui lebih awal.", "Kami kini menerima:", "Pakej program boleh dibayar sepenuhnya atau mengikut pelan pembayaran yang dipersetujui sebelum program bermula.", "Walaupun kami berusaha mengekalkan harga yang konsisten, fi perkhidmatan mungkin dikemas kini dari semasa ke semasa. Sebarang tempahan atau sebut harga yang telah disahkan akan terus menghormati harga yang dipersetujui."], bullets: ["Tunai", "Kad kredit atau debit", "Pindahan bank dalam talian"] },
          { heading: "6. Kerjasama Pesakit", paragraphs: ["Bagi menyokong penjagaan yang selamat dan diperibadikan, kami memohon pesakit untuk:", "Kerjasama anda membantu kami memberikan pengalaman yang lebih selamat dan lebih baik untuk semua orang."], bullets: ["Memberikan maklumat kesihatan yang tepat dan lengkap", "Memaklumkan pasukan kami tentang sebarang perubahan dalam keadaan perubatan, ubat-ubatan, atau alahan", "Mengikuti panduan penjagaan dan arahan selepas rawatan yang diberikan oleh pasukan kesihatan kami", "Mengekalkan suasana yang hormat dan selesa semasa lawatan ke klinik"] },
          { heading: "7. Penggunaan Laman Web & Kandungan", paragraphs: ["Semua bahan dan kandungan di laman web RenovaCare, termasuk teks, imej, penjenamaan, logo, dan elemen reka bentuk, adalah milik RenovaCare Clinic & Wellness Centre melainkan dinyatakan sebaliknya.", "Kami memohon agar sebarang penghasilan semula atau pengedaran bahan kami dibuat hanya dengan kebenaran bertulis terlebih dahulu."] },
          { heading: "8. Had Tanggungjawab", paragraphs: ["RenovaCare komited untuk memberikan sokongan kesihatan dan kesejahteraan secara profesional dengan penuh integriti. Walau bagaimanapun, seperti semua perkhidmatan perubatan dan kesejahteraan, hasil individu mungkin berbeza.", "Setakat yang dibenarkan oleh undang-undang, RenovaCare tidak akan bertanggungjawab ke atas kerugian tidak langsung atau yang tidak dijangka akibat penggunaan perkhidmatan atau laman web kami. Jika terpakai, sebarang tanggungjawab adalah terhad kepada jumlah yang dibayar bagi perkhidmatan tertentu tersebut."] },
          { heading: "9. Undang-Undang Yang Terpakai", paragraphs: ["Terma & Syarat ini ditadbir menurut undang-undang Malaysia. Sebarang perkara yang timbul berkaitan perkhidmatan kami hendaklah diuruskan di bawah bidang kuasa mahkamah Malaysia."] },
          { heading: "10. Kemaskini Terma Ini", paragraphs: ["Dari semasa ke semasa, RenovaCare boleh mengemas kini Terma & Syarat ini untuk mencerminkan penambahbaikan perkhidmatan, perubahan operasi, atau keperluan peraturan.", "Sebarang versi yang disemak akan diterbitkan di halaman ini bersama tarikh berkuat kuasa yang dikemas kini. Penggunaan berterusan terhadap perkhidmatan kami selepas kemas kini diterbitkan menunjukkan penerimaan anda terhadap terma yang disemak semula."] },
          { heading: "11. Hubungi Kami", paragraphs: ["Jika anda mempunyai sebarang pertanyaan atau memerlukan penjelasan lanjut mengenai Terma & Syarat ini, pasukan kami sedia membantu."], contactCard: ["RenovaCare Clinic & Wellness Centre", "Laman web: www.renovacare.my", "Tempahan: app.renovacare.my/booking"] },
        ],
      },
    },
  },
};
