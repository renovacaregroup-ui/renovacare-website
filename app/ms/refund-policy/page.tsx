import type { Metadata } from "next";
import LegalPage from "../../components/legal-page";

export const metadata: Metadata = {
  title: "Dasar Bayaran Balik",
  description: "Dasar bayaran balik RenovaCare Klinik untuk perundingan, program rawatan, dan pakej saringan kesihatan.",
  alternates: { canonical: "https://www.renovacare.my/ms/refund-policy" },
};

export default function MalayRefundPolicy() {
  return <LegalPage locale="ms" pageKey="refund" />;
}
