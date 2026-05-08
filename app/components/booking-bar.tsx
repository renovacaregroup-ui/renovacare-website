"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Calendar, Phone, Gift, ChevronRight, X } from "lucide-react";

const tabs = [
  {
    id: "appointment",
    label: "Make Appointment",
    icon: <Calendar size={16} />,
    href: "https://app.renovacare.my/booking",
  },
  {
    id: "whatsapp",
    label: "WhatsApp Us",
    icon: <Phone size={16} />,
    href: "https://wa.me/60129397686?text=Hi%20RenovaCare%2C%20I%27d%20like%20to%20make%20an%20enquiry.",
  },
  {
    id: "screening",
    label: "Free Health Screening",
    icon: <Gift size={16} />,
    href: "https://wa.me/60129397686?text=Hi%20RenovaCare%2C%20I%27d%20like%20to%20book%20the%20free%20basic%20health%20screening.",
  },
];

const quickQuestions = [
  {
    label: "I'd like to book a consultation",
    message: "Hi RenovaCare, I'd like to book a consultation. Please advise on available slots.",
  },
  {
    label: "Tell me about cancer recovery programmes",
    message: "Hi RenovaCare, I'd like to know more about your cancer recovery support programmes.",
  },
  {
    label: "What is NK Cell / Stem Cell Therapy?",
    message: "Hi RenovaCare, I'd like to learn more about NK Cell Therapy and Stem Cell Therapy. Can you share more details?",
  },
  {
    label: "Free health screening enquiry",
    message: "Hi RenovaCare, I saw your free basic health screening offer. I'd like to know more and book a slot.",
  },
  {
    label: "General enquiry",
    message: "Hi RenovaCare, I have a question and would like some assistance.",
  },
];

export default function BookingBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("appointment");
  const [showWhatsAppQuestions, setShowWhatsAppQuestions] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

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
      <div className="max-w-3xl mx-auto px-4 pb-4">
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
          <div className="p-4 flex items-center justify-between gap-4 relative">
            {activeTab === "appointment" && (
              <>
                <div className="flex-1">
                  <p className="text-[var(--text-dark)] text-sm font-medium">Book Your Consultation</p>
                  <p className="text-[var(--text-light)] text-xs">Schedule an appointment with Dr. Yek</p>
                </div>
                <a
                  href="https://app.renovacare.my/booking"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[var(--primary-gold)] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[var(--brown)] transition-colors whitespace-nowrap inline-flex items-center gap-2"
                >
                  Book Now
                  <ChevronRight size={18} />
                </a>
              </>
            )}
            {activeTab === "whatsapp" && (
              <>
                <div className="flex-1">
                  <p className="text-[var(--text-dark)] text-sm font-medium">Chat With Us</p>
                  <p className="text-[var(--text-light)] text-xs">Get instant reply on WhatsApp</p>
                </div>
                <button
                  onClick={() => setShowWhatsAppQuestions(!showWhatsAppQuestions)}
                  className="bg-[#25D366] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#1da851] transition-colors whitespace-nowrap inline-flex items-center gap-2"
                >
                  {showWhatsAppQuestions ? <X size={18} /> : <ChevronRight size={18} />}
                  {showWhatsAppQuestions ? "Close" : "WhatsApp"}
                </button>
              </>
            )}
            {activeTab === "screening" && (
              <>
                <div className="flex-1">
                  <p className="text-[var(--text-dark)] text-sm font-medium">FREE Basic Health Screening</p>
                  <p className="text-[var(--text-light)] text-xs">Limited slots &middot; By appointment only</p>
                </div>
                <a
                  href="https://wa.me/60129397686?text=Hi%20RenovaCare%2C%20I%27d%20like%20to%20book%20the%20free%20basic%20health%20screening."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[var(--primary-gold)] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[var(--brown)] transition-colors whitespace-nowrap inline-flex items-center gap-2"
                >
                  Claim Now
                  <ChevronRight size={18} />
                </a>
              </>
            )}
          </div>

          {/* Quick Questions Panel for WhatsApp */}
          <AnimatePresence>
            {showWhatsAppQuestions && activeTab === "whatsapp" && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="absolute bottom-full left-0 right-0 mb-3 bg-white rounded-2xl shadow-2xl border border-[var(--cream-dark)] overflow-hidden"
              >
                <div className="p-4">
                  <p className="text-[var(--text-muted)] text-xs mb-3">How can we help you today?</p>
                  <div className="space-y-2">
                    {quickQuestions.map((q) => (
                      <button
                        key={q.label}
                        onClick={() => {
                          const encodedMessage = encodeURIComponent(q.message);
                          window.open(`https://wa.me/60129397686?text=${encodedMessage}`, "_blank");
                          setShowWhatsAppQuestions(false);
                        }}
                        className="w-full text-left px-4 py-3 rounded-xl bg-[var(--cream)] hover:bg-[var(--cream-dark)] text-[var(--text-dark)] text-sm transition-colors duration-200 hover:shadow-sm"
                      >
                        {q.label}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
