"use client";

import React, { useState } from "react";
import { PhoneCall, AlertCircle, X, Clock, CheckCircle2, Send, Zap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface UrgentContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function UrgentContactModal({ isOpen, onClose }: UrgentContactModalProps) {
  const { lang } = useLanguage();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [issue, setIssue] = useState("Immediate Site Inspection / Emergency Visit");
  const [submitted, setSubmitted] = useState(false);

  const tContent = {
    hi: {
      badge: "प्राथमिकता फास्ट-ट्रैक सेवा",
      title: "तत्काल साइट निरीक्षण एवं आपातकालीन परामर्श",
      desc: "क्या आपको पिपरा या सुपौल में आपातकालीन नींव जांच, छत ढलाई में तकनीकी मार्गदर्शन, या तुरंत साइट विजिट की आवश्यकता है?",
      directCall: "सीधी आपातकालीन हेल्पलाइन",
      callBtn: "अभी कॉल करें",
      callbackPrompt: "या 15 मिनट में गारंटीड कॉलबैक का अनुरोध करें",
      redirecting: "प्राथमिकता व्हाट्सएप डेस्क पर भेजा जा रहा है... हमारे सिविल इंजीनियर आपकी समस्या की समीक्षा कर रहे हैं।",
      nameLabel: "आपका नाम *",
      namePlaceholder: "अपना नाम दर्ज करें",
      phoneLabel: "मोबाइल नंबर *",
      phonePlaceholder: "+91 98765 43210",
      urgencyLabel: "समस्या का प्रकार *",
      options: [
        { val: "Immediate Site Inspection / Emergency Visit", label: "तत्काल साइट निरीक्षण / इमरजेंसी विजिट" },
        { val: "Ongoing Foundation or Slab Casting Issue", label: "चल रही नींव या छत ढलाई में समस्या" },
        { val: "Urgent 3D Architectural Drawing Needed", label: "तत्काल 3D आर्किटेक्चरल नक्शे की जरूरत" },
        { val: "Dispute / Contractor Replacement on Active Site", label: "चालू साइट पर ठेकेदार बदलाव / विवाद समाधान" },
      ],
      submitBtn: "व्हाट्सएप पर तत्काल कॉलबैक का अनुरोध करें",
    },
    Hin: {
      badge: "Priority Fast-Track Line",
      title: "Urgent Site Consultation & Support",
      desc: "Kya aapko Pipra ya Supaul me emergency foundation test, slab casting guidance, ya turant site visit chahiye?",
      directCall: "Direct Emergency Line",
      callBtn: "Abhi Call Karein",
      callbackPrompt: "Ya 15 Minute Me Guaranteed Callback Request Karein",
      redirecting: "Priority WhatsApp Desk par bhej rahe hain... Hamare engineer review kar rahe hain.",
      nameLabel: "Aapka Naam *",
      namePlaceholder: "Apna naam likhiye",
      phoneLabel: "Mobile Number *",
      phonePlaceholder: "+91 98765 43210",
      urgencyLabel: "Problem Ka Type *",
      options: [
        { val: "Immediate Site Inspection / Emergency Visit", label: "Immediate Site Inspection / Emergency Visit" },
        { val: "Ongoing Foundation or Slab Casting Issue", label: "Foundation ya Slab Casting me samasya" },
        { val: "Urgent 3D Architectural Drawing Needed", label: "Urgent 3D Architectural Drawing Chahiye" },
        { val: "Dispute / Contractor Replacement on Active Site", label: "Site Par Contractor Replacement / Dispute" },
      ],
      submitBtn: "WhatsApp Par Urgent Callback Request Karein",
    },
    en: {
      badge: "Priority Fast-Track Line",
      title: "Urgent Site Consultation & Support",
      desc: "Need emergency foundation assessment, ongoing slab casting guidance, or an immediate site visit in Pipra / Supaul?",
      directCall: "Direct Emergency Line",
      callBtn: "Call Now",
      callbackPrompt: "Or Request Guaranteed 15-Minute Callback",
      redirecting: "Redirecting to Priority WhatsApp Desk... Our civil engineer is reviewing now.",
      nameLabel: "Your Name *",
      namePlaceholder: "Enter your name",
      phoneLabel: "Mobile Number *",
      phonePlaceholder: "+91 98765 43210",
      urgencyLabel: "Nature of Urgency *",
      options: [
        { val: "Immediate Site Inspection / Emergency Visit", label: "Immediate Site Inspection / Emergency Visit" },
        { val: "Ongoing Foundation or Slab Casting Issue", label: "Ongoing Foundation or Slab Casting Issue" },
        { val: "Urgent 3D Architectural Drawing Needed", label: "Urgent 3D Architectural Drawing Needed" },
        { val: "Dispute / Contractor Replacement on Active Site", label: "Dispute / Contractor Replacement on Active Site" },
      ],
      submitBtn: "Request Urgent Callback via WhatsApp",
    },
  };

  if (!isOpen) return null;

  const current = tContent[lang] || tContent.hi;

  const handleUrgentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = `🚨 *URGENT ASSISTANCE REQUEST* 🚨%0A%0A*Name:* ${encodeURIComponent(
      name
    )}%0A*Phone:* ${encodeURIComponent(
      phone
    )}%0A*Urgent Need:* ${encodeURIComponent(
      issue
    )}%0A%0A*Please connect immediately within 15 minutes.*`;

    window.open(`https://wa.me/918264360443?text=${message}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-red-200 overflow-hidden">
        {/* Urgent Header */}
        <div className="bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center space-x-2 text-amber-200 text-xs font-black uppercase tracking-wider mb-2">
            <Zap className="w-4 h-4 fill-current animate-bounce" />
            <span>{current.badge}</span>
          </div>

          <h3 className="text-2xl font-black tracking-tight text-white">
            {current.title}
          </h3>
          <p className="text-xs sm:text-sm text-red-100 mt-1">
            {current.desc}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Quick Direct Call Box */}
          <div className="p-4 rounded-2xl bg-red-50 border border-red-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl bg-red-600 text-white flex items-center justify-center shrink-0 shadow-md">
                <PhoneCall className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <div className="text-xs font-bold text-red-800 uppercase tracking-wide">
                  {current.directCall}
                </div>
                <a
                  href="tel:+918264360443"
                  className="text-lg font-black text-slate-900 hover:text-red-600 transition-colors"
                >
                  +91 82643 60443
                </a>
              </div>
            </div>

            <a
              href="tel:+918264360443"
              className="w-full sm:w-auto px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-extrabold shadow-md transition-all text-center"
            >
              {current.callBtn}
            </a>
          </div>

          {/* 15-Minute Callback Form */}
          <div>
            <div className="flex items-center space-x-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
              <Clock className="w-4 h-4 text-blue-600" />
              <span>{current.callbackPrompt}</span>
            </div>

            {submitted ? (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>{current.redirecting}</span>
              </div>
            ) : (
              <form onSubmit={handleUrgentSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    {current.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={current.namePlaceholder}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-600 text-sm text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    {current.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder={current.phonePlaceholder}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-600 text-sm text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    {current.urgencyLabel}
                  </label>
                  <select
                    value={issue}
                    onChange={(e) => setIssue(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-600 text-sm text-slate-900 bg-white"
                  >
                    {current.options.map((opt, idx) => (
                      <option key={idx} value={opt.val}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-extrabold py-3.5 px-4 rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2 text-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>{current.submitBtn}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
