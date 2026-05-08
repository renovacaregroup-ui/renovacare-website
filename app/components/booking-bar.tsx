"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Calendar, Phone, Gift, ChevronRight } from "lucide-react";

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

export default function BookingBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("appointment");

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
          <div className="p-4 flex items-center justify-between gap-4">
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
                <a
                  href="https://wa.me/60129397686?text=Hi%20RenovaCare%2C%20I%27d%20like%20to%20make%20an%20enquiry."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#1da851] transition-colors whitespace-nowrap inline-flex items-center gap-2"
                >
                  WhatsApp
                  <ChevronRight size={18} />
                </a>
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
        </div>
      </div>
    </motion.div>
  );
}
