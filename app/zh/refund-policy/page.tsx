import type { Metadata } from "next";
import LegalPage from "../../components/legal-page";

export const metadata: Metadata = {
  title: "退款政策",
  description: "RenovaCare 诊所的咨询、治疗计划及健康筛查套餐退款政策。",
  alternates: { canonical: "https://www.renovacare.my/zh/refund-policy" },
};

export default function ChineseRefundPolicy() {
  return <LegalPage locale="zh" pageKey="refund" />;
}
