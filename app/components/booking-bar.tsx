"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Calendar, Phone, Gift, ChevronRight, X } from "lucide-react";
import { siteContent } from "../../lib/site-content";
import type { Locale } from "../../lib/locales";

export default function BookingBar({ locale = "en" }: { locale?: Locale }) {
  const content = siteContent[locale].bookingBar;
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("appointment");
  const [showWhatsAppQuestions, setShowWhatsAppQuestions] = useState(false);

  const tabs = [
    { id: "appointment", label: content.tabs.appointment, icon: <Calendar size={16} /> },
    { id: "whatsapp", label: content.tabs.whatsapp, icon: <Phone size={16} /> },
    { id: "screening", label: content.tabs.screening, icon: <Gift size={16} /> },
  ];

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 400);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="fixed bottom-0 left-0 right-0 z-50"
    >
      <div className="max-w-3xl mx-auto px-4 pb-4 relative">
        {/* Quick Questions Popup */}
        <AnimatePresence>
          {showWhatsAppQuestions && activeTab === "whatsapp" && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="absolute bottom-full right-0 mb-2 w-72 bg-white rounded-2xl shadow-2xl border border-[var(--cream-dark)] overflow-hidden"
            >
              <div className="bg-[#25D366] px-4 py-3 flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">{content.popupTitle}</p>
                  <p className="text-white/80 text-xs">{content.popupSubtitle}</p>
                </div>
              </div>
              <div className="p-3">
                <p className="text-[var(--text-muted)] text-xs mb-2">{content.popupPrompt}</p>
                <div className="space-y-1.5">
                  {content.quickQuestions.map((q) => (
                    <button
                      key={q.label}
                      onClick={() => {
                        const encodedMessage = encodeURIComponent(q.message);
                        window.open(`https://wa.me/60129397686?text=${encodedMessage}`, "_blank");
                        setShowWhatsAppQuestions(false);
                      }}
                      className="w-full text-left px-3 py-2.5 rounded-xl bg-[var(--cream)] hover:bg-[var(--cream-dark)] text-[var(--text-dark)] text-xs transition-colors duration-200"
                    >
                      {q.label}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="bg-white rounded-2xl shadow-2xl border border-[var(--cream-dark)] overflow-hidden">
          {/* Tabs */}
          <div className="flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-[var(--primary-gold)] text-white"
                    : "bg-[var(--cream)] text-[var(--text-muted)] hover:bg-[var(--cream-dark)]"
                }`}
              >
                {tab.icon}
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
          {/* Content */}
          <div className="p-4 flex items-center justify-between gap-4">
            {activeTab === "appointment" && (
              <>
                <div className="flex-1">
                  <p className="text-[var(--text-dark)] text-sm font-medium">{content.appointmentTitle}</p>
                  <p className="text-[var(--text-light)] text-xs">{content.appointmentDesc}</p>
                </div>
                <a
                  href="https://app.renovacare.my/booking"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[var(--primary-gold)] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[var(--brown)] transition-colors whitespace-nowrap inline-flex items-center gap-2"
                >
                  {content.appointmentButton} <ChevronRight size={18} />
                </a>
              </>
            )}
            {activeTab === "whatsapp" && (
              <>
                <div className="flex-1">
                  <p className="text-[var(--text-dark)] text-sm font-medium">{content.whatsappTitle}</p>
                  <p className="text-[var(--text-light)] text-xs">{content.whatsappDesc}</p>
                </div>
                <button
                  onClick={() => setShowWhatsAppQuestions(!showWhatsAppQuestions)}
                  className="bg-[#25D366] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#1da851] transition-colors whitespace-nowrap inline-flex items-center gap-2"
                >
                  {showWhatsAppQuestions ? <><X size={18} /> {content.whatsappClose}</> : <>{content.whatsappButton} <ChevronRight size={18} /></>}
                </button>
              </>
            )}
            {activeTab === "screening" && (
              <>
                <div className="flex-1">
                  <p className="text-[var(--text-dark)] text-sm font-medium">{content.screeningTitle}</p>
                  <p className="text-[var(--text-light)] text-xs">{content.screeningDesc}</p>
                </div>
                <a
                  href="https://wa.me/60129397686?text=Hi%20RenovaCare%2C%20I%27d%20like%20to%20book%20the%20free%20basic%20health%20screening."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[var(--primary-gold)] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[var(--brown)] transition-colors whitespace-nowrap inline-flex items-center gap-2"
                >
                  {content.screeningButton} <ChevronRight size={18} />
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
