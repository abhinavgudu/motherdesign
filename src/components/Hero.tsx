"use client";

import React from "react";
import Image from "next/image";
import { Star, ShieldCheck, Award, ArrowUpRight, CheckCircle2, PhoneCall, Compass, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import HeroCarousel from "./HeroCarousel";

export default function Hero() {
  const { lang, t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#071322] via-[#0b1d36] to-[#0f2444] text-white pt-12 pb-20 lg:pt-16 lg:pb-28">
      {/* Dynamic Animated Architectural Blueprint Grid */}
      <div className="absolute inset-0 architectural-grid opacity-25 pointer-events-none" />

      {/* Cyber/Architectural Laser Scanline Animation */}
      <div className="animate-blueprint-scan pointer-events-none" />

      {/* Background Architectural Geometry (Rotating Drafting Ring) */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full border border-blue-500/10 pointer-events-none animate-spin-slow flex items-center justify-center">
        <div className="w-72 h-72 rounded-full border border-sky-400/15 border-dashed" />
        <div className="w-48 h-48 rounded-full border border-indigo-400/10" />
      </div>

      {/* Ambient Radial Gradient Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Corporate Pitch */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Trust Pill with subtle float and pulse */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/40 text-blue-200 text-xs sm:text-sm font-semibold tracking-wide shadow-inner backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping mr-0.5" />
              <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
              <span>{t("hero.badge")}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.18] text-white">
              {t("hero.title1")}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-amber-300">
                {t("hero.title2")}
              </span>
            </h1>

            {/* Hindi & English Value Proposition */}
            <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed max-w-2xl">
              {t("hero.sub")}
            </p>

            {/* Core Pillars Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-200">
              <div className="flex items-center space-x-2 bg-slate-900/40 p-2 rounded-lg border border-slate-800/60 backdrop-blur-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t("hero.p1")}</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-900/40 p-2 rounded-lg border border-slate-800/60 backdrop-blur-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t("hero.p2")}</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-900/40 p-2 rounded-lg border border-slate-800/60 backdrop-blur-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t("hero.p3")}</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-900/40 p-2 rounded-lg border border-slate-800/60 backdrop-blur-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t("hero.p4")}</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#contact"
                className="animate-shimmer bg-blue-600 hover:bg-blue-500 text-white font-extrabold px-7 py-3.5 rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 transition-all flex items-center space-x-2 group"
              >
                <span>{t("hero.ctaConsult")}</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="tel:+918264360443"
                className="bg-slate-800/80 hover:bg-slate-700/80 text-slate-100 border border-slate-700 font-semibold px-6 py-3.5 rounded-xl transition-all flex items-center space-x-2.5 hover:border-blue-400"
              >
                <PhoneCall className="w-4 h-4 text-emerald-400" />
                <span>+91 82643 60443</span>
              </a>
            </div>

            {/* Google Rating Showcase */}
            <div className="pt-4 flex items-center gap-4 border-t border-slate-800/80">
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-sm">
                <span className="font-bold text-white">5.0 / 5.0</span>
                <span className="text-slate-400"> • {t("hero.rating")}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Real Project Showcase Frame with Floating Animations */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Floating Top Badge */}
              <div className="absolute -top-5 -right-3 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black px-3.5 py-1.5 rounded-xl shadow-xl z-20 flex items-center gap-1.5 text-xs animate-float-delayed border border-amber-300">
                <Sparkles className="w-3.5 h-3.5 fill-current" />
                <span>
                  {lang === "hi"
                    ? "100% वास्तविक गूगल मैप्स प्रोजेक्ट"
                    : lang === "Hin"
                      ? "100% Real Google Maps Project"
                      : "100% Real Google Maps Project"}
                </span>
              </div>

              {/* Decorative Pulsing Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 rounded-2xl blur-lg opacity-40 animate-pulse-glow"></div>

              {/* Real Project Card */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-700/80 shadow-2xl">
                <div className="relative h-80 sm:h-96 w-full group">
                  <HeroCarousel />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                  {/* Project Tag Overlay */}
                  <div className="absolute top-4 left-4 bg-[#0b192c]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700 text-xs font-semibold text-slate-200 flex items-center space-x-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>{t("hero.projectTag")}</span>
                  </div>

                  {/* Bottom Image Info */}
                  <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-slate-700/60">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="text-white font-bold text-sm">{t("hero.projectTitle")}</h4>
                        <p className="text-xs text-slate-400">{t("hero.projectSub")}</p>
                      </div>
                      <span className="px-2.5 py-1 bg-blue-500/20 text-blue-300 text-xs font-bold rounded">
                        {lang === "hi" ? "100% वास्तविक" : "100% Real"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Verified Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 p-4 rounded-xl shadow-2xl border border-slate-200 hidden sm:flex items-center space-x-3 z-20 animate-float-slow">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shadow-sm">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-semibold uppercase">
                    {lang === "hi" ? "बिहार में उत्कृष्टता" : lang === "Hin" ? "Bihar Me Excellence" : "Excellence In Bihar"}
                  </div>
                  <div className="text-sm font-extrabold text-slate-900">{t("hero.expBadge")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
