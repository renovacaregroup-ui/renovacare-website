import type { Metadata } from "next";
import LegalPage from "../../components/legal-page";

export const metadata: Metadata = {
  title: "Dasar Privasi",
  description: "Dasar perlindungan data peribadi RenovaCare Klinik & Pusat Kesihatan.",
  alternates: { canonical: "https://www.renovacare.my/ms/privacy-policy" },
};

export default function MalayPrivacyPolicy() {
  return <LegalPage locale="ms" pageKey="privacy" />;
}
