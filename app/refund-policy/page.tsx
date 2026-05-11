import type { Metadata } from "next";
import LegalPage from "../components/legal-page";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "RenovaCare Clinic's refund policy for consultations, treatment programmes, advanced therapies, and health screening packages.",
  alternates: {
    canonical: "https://www.renovacare.my/refund-policy",
    languages: {
      "en": "https://www.renovacare.my/refund-policy",
      "zh": "https://www.renovacare.my/zh/refund-policy",
      "ms": "https://www.renovacare.my/ms/refund-policy",
    },
  },
};

export default function RefundPolicy() {
  return <LegalPage locale="en" pageKey="refund" />;
}
