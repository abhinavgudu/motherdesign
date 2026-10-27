"use client";

import React from "react";
import Image from "next/image";
import { Check, Compass, Ruler, Hammer, ShieldAlert } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Real Imagery Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 h-96 sm:h-[450px]">
              <Image
                src="/images/project-site.jpg"
                alt="Mother's Design & Construction Real Project Execution"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="bg-blue-600 text-xs uppercase font-extrabold px-2.5 py-1 rounded tracking-wide">
                  Real Construction Site
                </span>
                <h4 className="text-lg font-bold mt-2">On-Ground Precision &amp; Safety</h4>
                <p className="text-xs text-slate-300">Pipra - Simariya Road, Bihar</p>
              </div>
            </div>

            {/* Experience Card Overlay */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-[#0b192c] text-white p-5 rounded-xl shadow-xl border border-slate-700 max-w-xs">
              <div className="text-2xl font-black text-blue-400">100% Client Satisfaction</div>
              <p className="text-xs text-slate-300 mt-1">
                Zero compromises on structural steel quality, curing duration, and architectural aesthetics.
              </p>
            </div>
          </div>

          {/* Right Column: Company Story & Technical Superiority */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                About Mother&apos;s Design &amp; Construction
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Redefining Bihar&apos;s Skylines with High-Precision Engineering
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed text-base">
              Founded on the pillars of integrity, safety, and modern aesthetics,{" "}
              <strong className="text-slate-900 font-semibold">Mother&apos;s Design &amp; Construction</strong> has evolved into Pipra and Supaul district&apos;s most reputable construction and architectural consulting firm. 
            </p>

            <p className="text-slate-600 leading-relaxed text-sm">
              We bridge the gap between creative architectural visions and rigorous civil engineering. From soil analysis and foundation structural calculations to high-definition 3D elevation renderings and turnkey execution, our team guarantees that every home and commercial facility stands strong for generations.
            </p>

            {/* 4 Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start space-x-3">
                <div className="p-2 bg-blue-50 text-blue-700 rounded-lg shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Vastu-Harmonized Design</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Optimized ventilation, natural daylight, and positive energy alignment.</p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start space-x-3">
                <div className="p-2 bg-blue-50 text-blue-700 rounded-lg shrink-0">
                  <Ruler className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">High-Precision 3D Modeling</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Walk through your dream property in ultra-realistic 3D before digging begins.</p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start space-x-3">
                <div className="p-2 bg-blue-50 text-blue-700 rounded-lg shrink-0">
                  <Hammer className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Grade-A Raw Materials</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Exclusively certified Fe-550D TMT steel and premium Grade 53 cement.</p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start space-x-3">
                <div className="p-2 bg-blue-50 text-blue-700 rounded-lg shrink-0">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Transparent Cost Estimation</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Detailed BOQ without unexpected budget inflation or hidden charges.</p>
                </div>
              </div>
            </div>

            {/* Direct Link */}
            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center space-x-2 text-sm font-bold text-blue-600 hover:text-blue-700"
              >
                <span>Visit our office in Pipra for full architectural plans</span>
                <Check className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
