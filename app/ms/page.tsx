import type { Metadata } from "next";
import HomePage from "../components/home-page";

export const metadata: Metadata = {
  title: "RenovaCare Klinik & Pusat Kesihatan | Pemulihan Kanser & Sokongan Imun",
  description: "Pusat pemulihan kanser dan sokongan imun pakar di Selangor, Malaysia. Penjagaan sokongan onkologi integratif termasuk terapi sel stem, terapi sel NK, dan program pemulihan peribadi.",
  alternates: {
    canonical: "https://www.renovacare.my/ms",
  },
  openGraph: {
    locale: "ms_MY",
  },
};

export default function MalayHomePage() {
  return <HomePage locale="ms" />;
}
