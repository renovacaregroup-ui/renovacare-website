import type { Metadata } from "next";
import LegalPage from "../components/legal-page";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for using RenovaCare Clinic & Wellness Centre's services, appointments, payments, and website.",
  alternates: {
    canonical: "https://www.renovacare.my/terms",
    languages: {
      "en": "https://www.renovacare.my/terms",
      "zh": "https://www.renovacare.my/zh/terms",
      "ms": "https://www.renovacare.my/ms/terms",
    },
  },
};

export default function Terms() {
  return <LegalPage locale="en" pageKey="terms" />;
}
