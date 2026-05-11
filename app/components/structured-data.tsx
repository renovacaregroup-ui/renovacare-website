export function MedicalClinicSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: "RenovaCare Clinic & Wellness Centre",
    alternateName: "RenovaCare",
    description:
      "Specialised integrative medical and wellness centre focused on cancer recovery support, immune enhancement, stem cell therapy, NK cell therapy, and long-term wellness in Selangor, Malaysia.",
    url: "https://www.renovacare.my",
    logo: "https://www.renovacare.my/renovacare logo-01.png",
    image: "https://www.renovacare.my/og-image.png",
    telephone: "+60129397686",
    email: "enquiry@renovacare.my",
    address: {
      "@type": "PostalAddress",
      streetAddress: "No 2-G, Jalan Eco Santuari 8/1A, Eco Santuari",
      addressLocality: "Telok Panglima Garang",
      addressRegion: "Selangor",
      postalCode: "42500",
      addressCountry: "MY",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 2.8767,
      longitude: 101.5244,
    },
    medicalSpecialty: [
      "Oncology",
      "Integrative Medicine",
      "Regenerative Medicine",
      "Preventive Medicine",
    ],
    availableService: [
      {
        "@type": "MedicalProcedure",
        name: "NK Cell Therapy",
        description:
          "Advanced immunotherapy harnessing natural killer cells to enhance immune defence and support cancer recovery.",
      },
      {
        "@type": "MedicalProcedure",
        name: "Stem Cell Therapy (MSC)",
        description:
          "Regenerative medicine solutions promoting tissue repair and cellular rejuvenation.",
      },
      {
        "@type": "MedicalProcedure",
        name: "IV Nutrient Therapy",
        description:
          "Essential vitamins and nutrients delivered intravenously to promote cellular repair and boost immunity.",
      },
      {
        "@type": "MedicalProcedure",
        name: "Cancer Recovery Support Programme",
        description:
          "Specialised programmes to help individuals restore strength, rebuild resilience, and manage side effects after completing cancer treatment.",
      },
      {
        "@type": "MedicalProcedure",
        name: "Preventive Health Screening",
        description:
          "Comprehensive health assessment and blood investigations for early detection and preventive care.",
      },
    ],
    hasMap: "https://maps.google.com/?q=RenovaCare+Clinic+Eco+Santuari+Selangor",
    priceRange: "$$",
    currenciesAccepted: "MYR",
    paymentAccepted: "Cash, Credit Card, Debit Card, Bank Transfer",
    sameAs: [
      "https://wa.me/60129397686",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What services does RenovaCare Clinic offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "RenovaCare offers doctor-led integrative oncology support care including cancer recovery programmes, NK cell therapy, stem cell therapy (MSC), IV nutrient therapy, immune support therapies, preventive health screening, and personalised wellness programmes.",
        },
      },
      {
        "@type": "Question",
        name: "What is NK Cell Therapy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "NK (Natural Killer) Cell Therapy is an advanced immunotherapy that harnesses the body's natural killer cells to enhance immune defence. At RenovaCare, it is used as part of integrative oncology support to strengthen immune system function after cancer treatment.",
        },
      },
      {
        "@type": "Question",
        name: "What is Stem Cell Therapy at RenovaCare?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "RenovaCare offers MSC (Mesenchymal Stem Cell) Therapy as a regenerative medicine approach to promote tissue repair, cellular rejuvenation, and support long-term recovery. All therapies are conducted in collaboration with cGMP-accredited laboratory partner MGRC.",
        },
      },
      {
        "@type": "Question",
        name: "Where is RenovaCare located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "RenovaCare Clinic & Wellness Centre is located at No 2-G, Jalan Eco Santuari 8/1A, Eco Santuari, Telok Panglima Garang, 42500 Selangor, Malaysia.",
        },
      },
      {
        "@type": "Question",
        name: "Does RenovaCare offer free health screening?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, RenovaCare currently offers a FREE basic health screening as a limited-time opening promotion. It includes a basic health assessment and consultation guidance, available by appointment only with limited slots.",
        },
      },
      {
        "@type": "Question",
        name: "Who is RenovaCare suitable for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "RenovaCare supports post-cancer treatment patients, individuals in recovery or remission, patients with weakened immune systems, individuals seeking wellness optimisation, preventive health clients, and those interested in anti-aging and rejuvenation therapies.",
        },
      },
      {
        "@type": "Question",
        name: "Who is the doctor at RenovaCare?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "RenovaCare is led by Dr. Yek Chu Jie, who specialises in integrative, functional, and wellness medicine. Dr. Yek is experienced in health screening, IV therapy, nutritional medicine, and is a certified Occupational Health Doctor (NIOSH).",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
