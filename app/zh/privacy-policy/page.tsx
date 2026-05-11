import type { Metadata } from "next";
import LegalPage from "../../components/legal-page";

export const metadata: Metadata = {
  title: "隐私政策",
  description: "RenovaCare 诊所与保健中心的个人数据保护政策。",
  alternates: { canonical: "https://www.renovacare.my/zh/privacy-policy" },
};

export default function ChinesePrivacyPolicy() {
  return <LegalPage locale="zh" pageKey="privacy" />;
}
