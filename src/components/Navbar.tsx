"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Clock, Star, Menu, X, ArrowRight, Zap, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import {
  WhatsAppLogo,
  FacebookLogo,
  InstagramLogo,
  JustdialLogo,
  GoogleMapsLogo,
} from "@/components/BrandLogos";

interface NavbarProps {
  onOpenUrgent?: () => void;
}

export default function Navbar({ onOpenUrgent }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  return (
    <header className="sticky top-0 z-40 w-full shadow-sm">
      {/* Top Corporate & Urgent Alert Bar */}
      <div className="bg-[#0b192c] text-slate-300 text-xs py-2 px-4 border-b border-slate-800 overflow-x-auto scrollbar-none">
        <div className="max-w-7xl mx-auto flex flex-row justify-between items-center gap-4 flex-nowrap min-w-max">
          {/* Location & Hours - Strictly 1 Line */}
          <div className="flex items-center space-x-3 flex-nowrap shrink-0 text-slate-300">
            <div className="flex items-center space-x-1.5 whitespace-nowrap">
              <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>{t("topbar.location")}</span>
            </div>
            <span className="text-slate-600">•</span>
            <div className="flex items-center space-x-1.5 whitespace-nowrap">
              <Clock className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>{t("topbar.hours")}</span>
            </div>
          </div>

          {/* Social Icons + Language Switcher + Ratings + Actions - Strictly 1 Line */}
          <div className="flex items-center space-x-2 sm:space-x-3 flex-nowrap shrink-0">
            {/* Language Switcher Pill */}
            <div className="flex items-center bg-slate-800/90 p-0.5 rounded-full border border-slate-700/80 text-[11px] font-bold shadow-inner">
              <button
                type="button"
                onClick={() => setLang("hi")}
                className={`px-2 py-0.5 rounded-full transition-all ${lang === "hi"
                    ? "bg-amber-500 text-slate-950 font-black shadow-sm"
                    : "text-slate-300 hover:text-white"
                  }`}
                title="हिंदी में देखें"
              >
                हिन्दी
              </button>
              <button
                type="button"
                onClick={() => setLang("Hin")}
                className={`px-2 py-0.5 rounded-full transition-all ${lang === "Hin"
                    ? "bg-amber-500 text-slate-950 font-black shadow-sm"
                    : "text-slate-300 hover:text-white"
                  }`}
                title="Hin me dekhein"
              >
                Hin
              </button>
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`px-2 py-0.5 rounded-full transition-all ${lang === "en"
                    ? "bg-amber-500 text-slate-950 font-black shadow-sm"
                    : "text-slate-300 hover:text-white"
                  }`}
                title="View in English"
              >
                EN
              </button>
            </div>

            {/* Original Brand Social / Platform Icons */}
            <div className="hidden sm:flex items-center space-x-2 bg-slate-800/80 px-2 py-1 rounded-full border border-slate-700/60 shadow-inner">
              <a
                href="https://wa.me/918264360443?text=Hello%20Mother's%20Design%20%26%20Construction,%20I%20am%20interested%20in%20a%20construction%20quotation."
                target="_blank"
                rel="noopener noreferrer"
                title="Chat on WhatsApp"
                className="hover:scale-115 transition-transform duration-150 inline-flex items-center justify-center"
              >
                <WhatsAppLogo className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/er.saurav.karak"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow on Facebook"
                className="hover:scale-115 transition-transform duration-150 inline-flex items-center justify-center"
              >
                <FacebookLogo className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/saurav_karak_/"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow on Instagram"
                className="hover:scale-115 transition-transform duration-150 inline-flex items-center justify-center"
              >
                <InstagramLogo className="w-4 h-4" />
              </a>
              <a
                href="https://www.justdial.com/Supaul/Mothers-Design-Construction-Near-Post-Office-Pipra-Bazar/9999P6473-6473-220719110021-N9J6_BZDET"
                target="_blank"
                rel="noopener noreferrer"
                title="View on Justdial"
                className="hover:scale-115 transition-transform duration-150 inline-flex items-center justify-center"
              >
                <JustdialLogo className="w-4 h-4" />
              </a>
              <a
                href="https://maps.app.goo.gl/qD4B79n1rVwG1j7z6"
                target="_blank"
                rel="noopener noreferrer"
                title="View on Google Maps"
                className="hover:scale-115 transition-transform duration-150 inline-flex items-center justify-center"
              >
                <GoogleMapsLogo className="w-4 h-4" />
              </a>
            </div>

            {/* Urgent Site Visit Trigger */}
            <button
              onClick={onOpenUrgent}
              className="inline-flex items-center space-x-1 bg-red-600/90 hover:bg-red-600 text-white px-2.5 py-0.5 rounded-full font-bold text-[11px] animate-pulse transition-all shadow-sm"
            >
              <Zap className="w-3 h-3 fill-current" />
              <span>{t("topbar.urgent")}</span>
            </button>

            <a
              href="https://maps.app.goo.gl/qD4B79n1rVwG1j7z6"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center space-x-1 bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded border border-amber-500/30 font-medium hover:bg-amber-500/20 transition-colors"
            >
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{t("topbar.reviews")}</span>
            </a>
            <a
              href="tel:+918264360443"
              className="flex items-center space-x-1 text-white font-semibold hover:text-blue-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>+91 82643 60443</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
          {/* Logo + Company Name */}
          <Link href="/" className="group flex items-center gap-3 shrink-0 min-w-0">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden border-2 border-slate-100 bg-white shadow-md group-hover:scale-105 group-hover:border-amber-400 transition-all duration-200 shrink-0">
              <Image
                src="/images/logo.jpg"
                alt="Mother's Design & Construction"
                width={48}
                height={48}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-[15px] font-black tracking-tight text-[#0f2444] group-hover:text-blue-700 transition-colors whitespace-nowrap">
                {lang === "hi" ? "मदर'एस डिज़ाइन" : "MOTHER'S DESIGN"}
              </span>
              <span className="text-[11px] font-semibold text-amber-600 tracking-wide whitespace-nowrap">
                {lang === "hi" ? "& कंस्ट्रक्शन • पिपरा" : "& CONSTRUCTION"}
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-0.5 text-[12.5px] font-semibold text-slate-600">
            {[
              { href: "#about", label: t("nav.about") },
              { href: "#services", label: t("nav.services") },
              { href: "#projects", label: t("nav.projects") },
              { href: "#why-us", label: t("nav.whyUs") },
              { href: "#calculator", label: t("nav.estimator") },
              { href: "#reviews", label: t("nav.reviews") },
              { href: "#contact", label: t("nav.contact") },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="px-2.5 py-1.5 rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-all duration-150 whitespace-nowrap"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <button
              onClick={onOpenUrgent}
              className="text-xs font-bold text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 border border-red-200 px-3 py-2 rounded-lg transition-colors flex items-center gap-1 whitespace-nowrap"
            >
              <Zap className="w-3.5 h-3.5 fill-current text-red-600 shrink-0" />
              <span>{t("nav.urgentVisit")}</span>
            </button>

            <a
              href="https://wa.me/918264360443?text=Hello%20Mother's%20Design%20%26%20Construction,%20I%20am%20interested%20in%20a%20construction%20quotation."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-1.5 whitespace-nowrap"
            >
              <span>{t("nav.freeEstimate")}</span>
              <ArrowRight className="w-3.5 h-3.5 shrink-0" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          {/* Mobile Language Switcher */}
          <div className="flex items-center justify-between p-2 rounded-xl bg-slate-100 border border-slate-200 mb-2">
            <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-blue-600" />
              <span>Language / भाषा:</span>
            </span>
            <div className="flex items-center bg-white p-0.5 rounded-lg border border-slate-300 text-xs font-bold">
              <button
                type="button"
                onClick={() => setLang("hi")}
                className={`px-2.5 py-1 rounded-md transition-all ${lang === "hi"
                    ? "bg-amber-500 text-slate-950 font-black shadow-sm"
                    : "text-slate-600"
                  }`}
              >
                हिन्दी
              </button>
              <button
                type="button"
                onClick={() => setLang("Hin")}
                className={`px-2.5 py-1 rounded-md transition-all ${lang === "Hin"
                    ? "bg-amber-500 text-slate-950 font-black shadow-sm"
                    : "text-slate-600"
                  }`}
              >
                Hin
              </button>
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`px-2.5 py-1 rounded-md transition-all ${lang === "en"
                    ? "bg-amber-500 text-slate-950 font-black shadow-sm"
                    : "text-slate-600"
                  }`}
              >
                EN
              </button>
            </div>
          </div>

          <button
            onClick={() => {
              setIsOpen(false);
              onOpenUrgent?.();
            }}
            className="w-full text-center bg-red-600 text-white py-2.5 rounded-lg font-extrabold text-sm flex items-center justify-center space-x-2 shadow-md mb-2"
          >
            <Zap className="w-4 h-4 fill-current" />
            <span>{t("nav.urgentVisit")}</span>
          </button>

          {[
            { href: "#about", label: t("nav.about") },
            { href: "#services", label: t("nav.services") },
            { href: "#projects", label: t("nav.projects") },
            { href: "#why-us", label: t("nav.whyUs") },
            { href: "#calculator", label: t("nav.estimator") },
            { href: "#reviews", label: t("nav.reviews") },
            { href: "#contact", label: t("nav.contact") },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100"
            >
              {label}
            </Link>
          ))}
          <div className="pt-2 flex flex-col space-y-2">
            <a
              href="tel:+918264360443"
              className="w-full text-center bg-slate-900 text-white py-2.5 rounded-lg font-semibold text-sm flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call +91 82643 60443</span>
            </a>
            <a
              href="https://wa.me/918264360443"
              className="w-full text-center bg-emerald-600 text-white py-2.5 rounded-lg font-semibold text-sm"
            >
              Chat on WhatsApp
            </a>

            {/* Social Icons in Mobile Drawer */}
            <div className="pt-3 border-t border-slate-200">
              <p className="text-xs font-semibold text-slate-500 mb-2 text-center uppercase tracking-wider">
                Official Channels
              </p>
              <div className="flex justify-center items-center gap-3">
                <a
                  href="https://wa.me/918264360443"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-100 hover:bg-emerald-50 rounded-xl transition-colors"
                  title="WhatsApp"
                >
                  <WhatsAppLogo className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/er.saurav.karak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-100 hover:bg-blue-50 rounded-xl transition-colors"
                  title="Facebook"
                >
                  <FacebookLogo className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/saurav_karak_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-100 hover:bg-pink-50 rounded-xl transition-colors"
                  title="Instagram"
                >
                  <InstagramLogo className="w-5 h-5" />
                </a>
                <a
                  href="https://www.justdial.com/Supaul/Mothers-Design-Construction-Near-Post-Office-Pipra-Bazar/9999P6473-6473-220719110021-N9J6_BZDET"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-100 hover:bg-amber-50 rounded-xl transition-colors"
                  title="Justdial"
                >
                  <JustdialLogo className="w-5 h-5" />
                </a>
                <a
                  href="https://maps.app.goo.gl/qD4B79n1rVwG1j7z6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-100 hover:bg-red-50 rounded-xl transition-colors"
                  title="Google Maps"
                >
                  <GoogleMapsLogo className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
