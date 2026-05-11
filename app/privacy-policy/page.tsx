import type { Metadata } from "next";
import LegalPage from "../components/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how RenovaCare Clinic & Wellness Centre collects, uses, and protects your personal data and medical information under Malaysia's PDPA.",
  alternates: {
    canonical: "https://www.renovacare.my/privacy-policy",
    languages: {
      "en": "https://www.renovacare.my/privacy-policy",
      "zh": "https://www.renovacare.my/zh/privacy-policy",
      "ms": "https://www.renovacare.my/ms/privacy-policy",
    },
  },
};

export default function PrivacyPolicy() {
  return <LegalPage locale="en" pageKey="privacy" />;
}
