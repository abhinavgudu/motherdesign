"use client";

import React, { useState } from "react";
import { Phone, MessageCircle, Zap } from "lucide-react";
import UrgentContactModal from "./UrgentContactModal";
import { useLanguage } from "@/context/LanguageContext";

export default function FloatingCTA() {
  const [isUrgentOpen, setIsUrgentOpen] = useState(false);
  const { lang } = useLanguage();

  const labels = {
    hi: {
      urgent: "तत्काल साइट विजिट",
      urgentAria: "तत्काल साइट निरीक्षण का अनुरोध करें",
      whatsapp: "व्हाट्सएप करें",
      whatsappAria: "व्हाट्सएप पर चैट करें",
      callAria: "मदर'एस डिज़ाइन को कॉल करें",
    },
    Hin: {
      urgent: "Urgent Site Visit",
      urgentAria: "Urgent Site Inspection Request Karein",
      whatsapp: "WhatsApp Karein",
      whatsappAria: "WhatsApp Par Chat Karein",
      callAria: "Mother's Design Ko Call Karein",
    },
    en: {
      urgent: "Urgent Site Visit",
      urgentAria: "Request Urgent Site Inspection",
      whatsapp: "WhatsApp Us",
      whatsappAria: "Chat on WhatsApp",
      callAria: "Call Mother's Design",
    },
  };

  const current = labels[lang] || labels.hi;

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3">
        {/* Urgent Site Visit Trigger */}
        <button
          onClick={() => setIsUrgentOpen(true)}
          aria-label={current.urgentAria}
          className="group flex items-center bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white p-3.5 sm:px-4 sm:py-2.5 rounded-full shadow-2xl hover:shadow-red-500/40 transition-all duration-300 hover:scale-105 border border-red-300/40"
        >
          <Zap className="w-5 h-5 shrink-0 fill-current animate-bounce text-amber-200" />
          <span className="hidden sm:inline-block ml-2 text-xs font-black tracking-wide">
            {current.urgent}
          </span>
        </button>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/918264360443?text=Hello%20Mother's%20Design%20%26%20Construction,%20I%20would%20like%20to%20get%20a%20construction%20estimate."
          target="_blank"
          rel="noopener noreferrer"
          aria-label={current.whatsappAria}
          className="group flex items-center bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-2xl hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-105"
        >
          <MessageCircle className="w-6 h-6 shrink-0 fill-current" />
          <span className="hidden sm:inline-block ml-2 text-xs font-bold tracking-wide">
            {current.whatsapp}
          </span>
        </a>

        {/* Direct Call Button */}
        <a
          href="tel:+918264360443"
          aria-label={current.callAria}
          className="group flex items-center bg-blue-600 hover:bg-blue-500 text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-2xl hover:shadow-blue-600/40 transition-all duration-300 hover:scale-105"
        >
          <Phone className="w-6 h-6 shrink-0" />
          <span className="hidden sm:inline-block ml-2 text-xs font-bold tracking-wide">
            +91 82643 60443
          </span>
        </a>
      </div>

      <UrgentContactModal
        isOpen={isUrgentOpen}
        onClose={() => setIsUrgentOpen(false)}
      />
    </>
  );
}
