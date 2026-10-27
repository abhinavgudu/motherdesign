"use client";

import React from "react";
import Image from "next/image";
import { Star, ShieldCheck, Award, ArrowUpRight, CheckCircle2, PhoneCall } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0b192c] via-[#0f2444] to-[#122b52] text-white pt-12 pb-20 lg:pt-16 lg:pb-28">
      {/* Subtle Background Architectural Grid */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.4) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Corporate Pitch */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs sm:text-sm font-semibold tracking-wide">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>Bihar&apos;s Highest Rated Builders • 5.0 Google Rating</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white">
              Engineering Landmarks.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-200">
                Crafting Architectural Masterpieces.
              </span>
            </h1>

            {/* Hindi & English Value Proposition */}
            <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed max-w-2xl">
              Mother&apos;s Design &amp; Construction delivers world-class 3D elevation designs, residential villas, and commercial complexes across Pipra, Supaul &amp; Bihar with turnkey engineering excellence.
            </p>

            {/* Core Pillars Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-200">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Certified Steel &amp; UltraTech Cement</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Modern 3D Elevation Before Digging</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>On-Time Handover Guarantee</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Vastu Compliant Floor Layouts</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#contact"
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 transition-all flex items-center space-x-2"
              >
                <span>Schedule Free Site Consultation</span>
                <ArrowUpRight className="w-5 h-5" />
              </a>

              <a
                href="tel:+918264360443"
                className="bg-slate-800/80 hover:bg-slate-700/80 text-slate-100 border border-slate-700 font-semibold px-6 py-3.5 rounded-xl transition-all flex items-center space-x-2.5"
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
                <span className="font-bold text-white">5.0 Out of 5.0 Stars</span>
                <span className="text-slate-400"> • Based on 22 verified Google Maps reviews</span>
              </div>
            </div>
          </div>

          {/* Right Column: Real Project Showcase Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-2xl blur-lg opacity-30"></div>

              {/* Real Project Card */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-700/80 shadow-2xl">
                <div className="relative h-80 sm:h-96 w-full">
                  <Image
                    src="/images/hero-building.jpg"
                    alt="Mother's Design & Construction Real 3D Elevation Project"
                    fill
                    priority
                    className="object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                  {/* Project Tag Overlay */}
                  <div className="absolute top-4 left-4 bg-[#0b192c]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700 text-xs font-semibold text-slate-200 flex items-center space-x-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Real Completed Design • Pipra</span>
                  </div>

                  {/* Bottom Image Info */}
                  <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-slate-700/60">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="text-white font-bold text-sm">3D Multi-Storey Elevation</h4>
                        <p className="text-xs text-slate-400">Designed &amp; Engineered by Mother&apos;s Design</p>
                      </div>
                      <span className="px-2.5 py-1 bg-blue-500/20 text-blue-300 text-xs font-bold rounded">
                        100% Real Project
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Verified Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 p-4 rounded-xl shadow-xl border border-slate-200 hidden sm:flex items-center space-x-3 z-20">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-semibold uppercase">Excellence In Bihar</div>
                  <div className="text-sm font-extrabold text-slate-900">10+ Years &amp; 150+ Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
