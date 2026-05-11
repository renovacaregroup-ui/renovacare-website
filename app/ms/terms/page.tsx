import type { Metadata } from "next";
import LegalPage from "../../components/legal-page";

export const metadata: Metadata = {
  title: "Terma & Syarat",
  description: "Terma dan syarat penggunaan perkhidmatan RenovaCare Klinik & Pusat Kesihatan.",
  alternates: { canonical: "https://www.renovacare.my/ms/terms" },
};

export default function MalayTerms() {
  return <LegalPage locale="ms" pageKey="terms" />;
}
