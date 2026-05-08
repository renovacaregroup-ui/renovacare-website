import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import BFCacheReload from "./components/bfcache-reload";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RenovaCare Clinic & Wellness Centre | Cancer Recovery & Immune Support",
  description: "Specialised Cancer Recovery & Immune Support Centre. Doctor-led integrative oncology support care with stem cell therapy, NK cell therapy, and personalised recovery programmes.",
  keywords: "cancer recovery, immune support, stem cell therapy, NK cell therapy, wellness centre, Malaysia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <BFCacheReload />
        {children}
      </body>
    </html>
  );
}
