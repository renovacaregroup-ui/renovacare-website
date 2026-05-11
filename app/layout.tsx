import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import BFCacheReload from "./components/bfcache-reload";
import { MedicalClinicSchema, FAQSchema } from "./components/structured-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const siteUrl = "https://www.renovacare.my";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "RenovaCare Clinic & Wellness Centre | Cancer Recovery & Immune Support",
    template: "%s | RenovaCare Clinic & Wellness Centre",
  },
  description: "Specialised Cancer Recovery & Immune Support Centre in Selangor, Malaysia. Doctor-led integrative oncology support care with stem cell therapy, NK cell therapy, IV nutrient therapy, and personalised recovery programmes.",
  keywords: [
    "cancer recovery Malaysia",
    "immune support centre",
    "stem cell therapy Malaysia",
    "NK cell therapy Selangor",
    "integrative oncology Malaysia",
    "post cancer recovery support",
    "IV nutrient therapy",
    "wellness centre Malaysia",
    "cancer rehabilitation Malaysia",
    "regenerative medicine Selangor",
    "free health screening Malaysia",
    "RenovaCare",
  ],
  authors: [{ name: "RenovaCare Clinic & Wellness Centre" }],
  creator: "RenovaCare Clinic & Wellness Centre",
  publisher: "RenovaCare Clinic & Wellness Centre",
  alternates: {
    canonical: siteUrl,
    languages: {
      "en": siteUrl,
      "zh": `${siteUrl}/zh`,
      "ms": `${siteUrl}/ms`,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_MY",
    alternateLocale: ["zh_CN", "ms_MY"],
    url: siteUrl,
    siteName: "RenovaCare Clinic & Wellness Centre",
    title: "RenovaCare Clinic & Wellness Centre | Cancer Recovery & Immune Support",
    description: "Doctor-led integrative oncology support care. Specialising in cancer recovery, immune support, stem cell therapy, NK cell therapy, and personalised wellness programmes in Selangor, Malaysia.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "RenovaCare Clinic & Wellness Centre - Cancer Recovery & Immune Support",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RenovaCare Clinic & Wellness Centre | Cancer Recovery & Immune Support",
    description: "Doctor-led integrative oncology support care in Selangor, Malaysia. Stem cell therapy, NK cell therapy, and personalised recovery programmes.",
    images: ["/og-image.png"],
  },
  other: {
    "geo.region": "MY-10",
    "geo.placename": "Telok Panglima Garang, Selangor",
    "geo.position": "2.8767;101.5244",
    "ICBM": "2.8767, 101.5244",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <MedicalClinicSchema />
        <FAQSchema />
        <BFCacheReload />
        {children}
      </body>
    </html>
  );
}
