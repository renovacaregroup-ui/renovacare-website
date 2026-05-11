import type { Metadata } from "next";
import LegalPage from "../../components/legal-page";

export const metadata: Metadata = {
  title: "条款与条件",
  description: "RenovaCare 诊所与保健中心的服务条款与条件。",
  alternates: { canonical: "https://www.renovacare.my/zh/terms" },
};

export default function ChineseTerms() {
  return <LegalPage locale="zh" pageKey="terms" />;
}
