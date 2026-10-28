"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Building2, Phone, MapPin, Clock, Star, ShieldCheck, Heart } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import {
  WhatsAppLogo,
  FacebookLogo,
  InstagramLogo,
  JustdialLogo,
  GoogleMapsLogo,
} from "@/components/BrandLogos";

export default function Footer() {
  const { lang, t } = useLanguage();

  return (
    <footer className="bg-[#0b192c] text-slate-300 border-t border-slate-800 text-sm">
      {/* Upper Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-white shadow-md p-0.5 shrink-0 border border-amber-400/30">
                <Image
                  src="/images/logo.jpg"
                  alt="Mother's Design & Construction Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="block text-xl font-extrabold text-white tracking-tight">
                  {lang === "hi" ? "मदर'एस डिज़ाइन" : "MOTHER'S DESIGN"}
                </span>
                <span className="block text-xs font-semibold text-amber-400 uppercase">
                  {lang === "hi" ? "& कंस्ट्रक्शन • मदर'एस निर्माण" : "& CONSTRUCTION • मदर'एस निर्माण"}
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              {t("footer.desc")}
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://maps.app.goo.gl/qD4B79n1rVwG1j7z6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 bg-amber-500/10 text-amber-400 px-3 py-1.5 rounded-lg border border-amber-500/30 text-xs font-semibold hover:bg-amber-500/20 transition-colors"
              >
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>5.0 / 5.0 (22 Google Maps Reviews)</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider border-b border-slate-800 pb-2">
              {t("footer.quickNav")}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href="#about" className="hover:text-blue-400 transition-colors">
                  About the Firm
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-blue-400 transition-colors">
                  Services &amp; Specializations
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-blue-400 transition-colors">
                  Real Google Maps Projects
                </Link>
              </li>
              <li>
                <Link href="#why-us" className="hover:text-blue-400 transition-colors">
                  Why Choose Mother&apos;s Design
                </Link>
              </li>
              <li>
                <Link href="#calculator" className="hover:text-blue-400 transition-colors">
                  Construction Cost Estimator
                </Link>
              </li>
              <li>
                <Link href="#reviews" className="hover:text-blue-400 transition-colors">
                  Client Reviews &amp; Ratings
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-blue-400 transition-colors">
                  Contact &amp; Site Visit
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider border-b border-slate-800 pb-2">
              Headquarters
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Bazar, Pipra - Simariya Rd, Pipra, Bihar 852218</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:+918264360443" className="hover:text-white font-bold text-slate-200">
                  +91 82643 60443
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Mon – Sun: 9:00 AM – 5:00 PM</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Government Recognized &amp; Registered</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Platform Links with Original Brand Logos */}
        <div className="mt-12 pt-8 border-t border-slate-800/60">
          <h4 className="text-white font-bold text-sm uppercase tracking-wider text-center mb-6">
            {t("footer.connect")}
          </h4>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {/* WhatsApp */}
            <a
              href="https://wa.me/918264360443?text=Hello%20Mother's%20Design%20%26%20Construction,%20I%20am%20interested%20in%20a%20construction%20quotation."
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 bg-slate-800/60 hover:bg-[#25D366]/15 border border-slate-700 hover:border-[#25D366]/40 rounded-xl px-4 py-2.5 transition-all duration-200"
              title="Chat on WhatsApp"
            >
              <WhatsAppLogo className="w-5 h-5 shrink-0" />
              <span className="text-xs font-semibold text-slate-300 group-hover:text-[#25D366] transition-colors">WhatsApp</span>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/er.saurav.karak"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 bg-slate-800/60 hover:bg-[#1877F2]/15 border border-slate-700 hover:border-[#1877F2]/40 rounded-xl px-4 py-2.5 transition-all duration-200"
              title="Follow on Facebook"
            >
              <FacebookLogo className="w-5 h-5 shrink-0" />
              <span className="text-xs font-semibold text-slate-300 group-hover:text-[#1877F2] transition-colors">Facebook</span>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/saurav_karak_/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 bg-slate-800/60 hover:bg-pink-500/15 border border-slate-700 hover:border-pink-500/40 rounded-xl px-4 py-2.5 transition-all duration-200"
              title="Follow on Instagram"
            >
              <InstagramLogo className="w-5 h-5 shrink-0" />
              <span className="text-xs font-semibold text-slate-300 group-hover:text-pink-400 transition-colors">Instagram</span>
            </a>

            {/* JustDial */}
            <a
              href="https://www.justdial.com/Supaul/Mothers-Design-Construction-Near-Post-Office-Pipra-Bazar/9999P6473-6473-220719110021-N9J6_BZDET"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 bg-slate-800/60 hover:bg-amber-500/15 border border-slate-700 hover:border-amber-500/40 rounded-xl px-4 py-2.5 transition-all duration-200"
              title="View on JustDial"
            >
              <JustdialLogo className="w-5 h-5 shrink-0" />
              <span className="text-xs font-semibold text-slate-300 group-hover:text-amber-400 transition-colors">JustDial</span>
            </a>

            {/* Google Maps */}
            <a
              href="https://maps.app.goo.gl/qD4B79n1rVwG1j7z6"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 bg-slate-800/60 hover:bg-red-500/15 border border-slate-700 hover:border-red-500/40 rounded-xl px-4 py-2.5 transition-all duration-200"
              title="View on Google Maps"
            >
              <GoogleMapsLogo className="w-5 h-5 shrink-0" />
              <span className="text-xs font-semibold text-slate-300 group-hover:text-red-400 transition-colors">Google Maps</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#07111f] py-6 border-t border-slate-800/80 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            © 2026 <strong className="text-slate-300">Mother&apos;s Design &amp; Construction</strong>. {t("footer.rights")}
          </div>

          {/* Designed by bllinto.in & WhatsApp 7461080144 */}
          <div className="flex items-center flex-wrap justify-center gap-3 py-1 px-4 rounded-full bg-slate-900/90 border border-slate-800 shadow-inner">
            <span className="text-slate-400 flex items-center gap-1">
              <span>{t("footer.designedBy")}</span>
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline animate-pulse" />
              <span>{t("footer.by")}</span>
              <a
                href="https://bllinto.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 font-extrabold hover:underline transition-colors tracking-wide"
              >
                bllinto.in
              </a>
            </span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <a
              href="https://wa.me/917461080144?text=Hello%20bllinto.in,%20I%20came%20from%20Mother's%20Design%20%26%20Construction%20website."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-bold transition-colors bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20"
              title="Chat with bllinto.in on WhatsApp"
            >
              <WhatsAppLogo className="w-3.5 h-3.5" />
              <span>WhatsApp: 7461080144</span>
            </a>
          </div>

          <div className="flex items-center space-x-3 text-slate-500">
            <span>Pipra, Supaul (Bihar)</span>
            <span>•</span>
            <a
              href="https://maps.app.goo.gl/qD4B79n1rVwG1j7z6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline flex items-center gap-1"
            >
              <span>Google Maps Verified</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
