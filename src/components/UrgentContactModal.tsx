"use client";

import React, { useState } from "react";
import { PhoneCall, AlertCircle, X, Clock, CheckCircle2, Send, Zap } from "lucide-react";

interface UrgentContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function UrgentContactModal({ isOpen, onClose }: UrgentContactModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [issue, setIssue] = useState("Immediate Site Inspection / Emergency Visit");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

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
            <span>Priority Fast-Track Line</span>
          </div>

          <h3 className="text-2xl font-black tracking-tight text-white">
            Urgent Site Consultation &amp; Support
          </h3>
          <p className="text-xs sm:text-sm text-red-100 mt-1">
            Need emergency foundation assessment, ongoing slab casting guidance, or an immediate site visit in Pipra / Supaul?
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
                  Direct Emergency Line
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
              Call Now
            </a>
          </div>

          {/* 15-Minute Callback Form */}
          <div>
            <div className="flex items-center space-x-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
              <Clock className="w-4 h-4 text-blue-600" />
              <span>Or Request Guaranteed 15-Minute Callback</span>
            </div>

            {submitted ? (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Redirecting to Priority WhatsApp Desk... Our civil engineer is reviewing now.</span>
              </div>
            ) : (
              <form onSubmit={handleUrgentSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-600 text-sm text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-600 text-sm text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Nature of Urgency *
                  </label>
                  <select
                    value={issue}
                    onChange={(e) => setIssue(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-600 text-sm text-slate-900 bg-white"
                  >
                    <option value="Immediate Site Inspection / Emergency Visit">
                      Immediate Site Inspection / Emergency Visit
                    </option>
                    <option value="Ongoing Foundation or Slab Casting Issue">
                      Ongoing Foundation or Slab Casting Issue
                    </option>
                    <option value="Urgent 3D Architectural Drawing Needed">
                      Urgent 3D Architectural Drawing Needed
                    </option>
                    <option value="Dispute / Contractor Replacement on Active Site">
                      Dispute / Contractor Replacement on Active Site
                    </option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-extrabold py-3.5 px-4 rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2 text-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Request Urgent Callback via WhatsApp</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
