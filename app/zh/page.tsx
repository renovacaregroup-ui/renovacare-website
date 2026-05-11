import type { Metadata } from "next";
import HomePage from "../components/home-page";

export const metadata: Metadata = {
  title: "RenovaCare 诊所与保健中心 | 癌后康复与免疫支持",
  description: "马来西亚雪兰莪专科癌后康复与免疫支持中心。由医生主导的整合式肿瘤康复支持护理，包括干细胞疗法、NK细胞疗法及个性化康复计划。",
  alternates: {
    canonical: "https://www.renovacare.my/zh",
  },
  openGraph: {
    locale: "zh_CN",
  },
};

export default function ChineseHomePage() {
  return <HomePage locale="zh" />;
}
