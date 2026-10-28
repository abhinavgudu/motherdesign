"use client";

import React from "react";
import Image from "next/image";
import { Check, Compass, Ruler, Hammer, ShieldAlert } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutSection() {
  const { lang } = useLanguage();

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
                  {lang === "hi" ? "वास्तविक निर्माण स्थल" : "Real Construction Site"}
                </span>
                <h4 className="text-lg font-bold mt-2">
                  {lang === "hi" ? "सटीक इंजीनियरिंग और सुरक्षा" : "On-Ground Precision & Safety"}
                </h4>
                <p className="text-xs text-slate-300">
                  {lang === "hi" ? "पिपरा - सिमरिया रोड, सुपौल (बिहार)" : "Pipra - Simariya Road, Bihar"}
                </p>
              </div>
            </div>

            {/* Experience Card Overlay */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-[#0b192c] text-white p-5 rounded-xl shadow-xl border border-slate-700 max-w-xs">
              <div className="text-2xl font-black text-blue-400">
                {lang === "hi" ? "100% संतुष्ट ग्राहक" : "100% Client Satisfaction"}
              </div>
              <p className="text-xs text-slate-300 mt-1">
                {lang === "hi"
                  ? "स्टील की गुणवत्ता, कंक्रीट की तराई और आधुनिक वास्तुशिल्प पर शून्य समझौता।"
                  : "Zero compromises on structural steel quality, curing duration, and architectural aesthetics."}
              </p>
            </div>
          </div>

          {/* Right Column: Company Story & Technical Superiority */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                {lang === "hi"
                  ? "मदर'एस डिज़ाइन एंड कंस्ट्रक्शन का परिचय"
                  : "About Mother's Design & Construction"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {lang === "hi"
                  ? "सटीक सिविल इंजीनियरिंग के साथ बिहार के निर्माण को नई ऊंचाई देना"
                  : lang === "Hin"
                    ? "High-Precision Engineering Ke Saath Bihar Me Nirman Ki Nayi Pehchaan"
                    : "Redefining Bihar's Skylines with High-Precision Engineering"}
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed text-base">
              {lang === "hi" ? (
                <>
                  ईमानदारी, सुरक्षा और आधुनिक वास्तुशिल्प के सिद्धांतों पर आधारित,{" "}
                  <strong className="text-slate-900 font-semibold">मदर&apos;एस डिज़ाइन एंड कंस्ट्रक्शन</strong> पिपरा और
                  सुपौल जिले की सबसे विश्वसनीय कंस्ट्रक्शन एवं आर्किटेक्चरल परामर्श फर्म है।
                </>
              ) : lang === "Hin" ? (
                <>
                  Safety, modern design aur 100% quality materials ke saath,{" "}
                  <strong className="text-slate-900 font-semibold">Mother&apos;s Design &amp; Construction</strong> Pipra aur
                  Supaul district ki sabse bharosemand civil engineering firm ban chuki hai.
                </>
              ) : (
                <>
                  Founded on the pillars of integrity, safety, and modern aesthetics,{" "}
                  <strong className="text-slate-900 font-semibold">Mother&apos;s Design &amp; Construction</strong> has evolved into Pipra and Supaul district&apos;s most reputable construction and architectural consulting firm.
                </>
              )}
            </p>

            <p className="text-slate-600 leading-relaxed text-sm">
              {lang === "hi"
                ? "हम रचनात्मक वास्तुकला और तकनीकी सिविल इंजीनियरिंग को एक साथ जोड़ते हैं। मिट्टी की जांच (Soil Test) और नींव की संरचना से लेकर अत्याधुनिक 3D फ्रंट एलिवेशन रेंडरिंग और टर्नकी निर्माण तक - हमारी टीम हर घर और व्यावसायिक भवन को पीढ़ियों तक मजबूती की गारंटी देती है।"
                : lang === "Hin"
                  ? "Mitti test aur foundation structural design se lekar ultra-modern 3D elevation naksha aur complete turnkey building handover tak - hamari certified engineer team har ghar ko saalon tak earthquake-proof majboot banati hai."
                  : "We bridge the gap between creative architectural visions and rigorous civil engineering. From soil analysis and foundation structural calculations to high-definition 3D elevation renderings and turnkey execution, our team guarantees that every home and commercial facility stands strong for generations."}
            </p>

            {/* 4 Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start space-x-3">
                <div className="p-2 bg-blue-50 text-blue-700 rounded-lg shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    {lang === "hi" ? "वास्तु सम्मत गृह योजना" : "Vastu-Harmonized Design"}
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {lang === "hi"
                      ? "उचित वेंटिलेशन, प्राकृतिक रोशनी और सकारात्मक ऊर्जा का पूर्ण संतुलन।"
                      : "Optimized ventilation, natural daylight, and positive energy alignment."}
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start space-x-3">
                <div className="p-2 bg-blue-50 text-blue-700 rounded-lg shrink-0">
                  <Ruler className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    {lang === "hi" ? "अति-सटीक 3D मॉडलिंग" : "High-Precision 3D Modeling"}
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {lang === "hi"
                      ? "नींव की खुदाई से पहले ही अपने सपनों के घर का हूबहू 3D मॉडल व वॉकथ्रू देखें।"
                      : "Walk through your dream property in ultra-realistic 3D before digging begins."}
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start space-x-3">
                <div className="p-2 bg-blue-50 text-blue-700 rounded-lg shrink-0">
                  <Hammer className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    {lang === "hi" ? "ग्रेड-A निर्माण सामग्री" : "Grade-A Raw Materials"}
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {lang === "hi"
                      ? "केवल प्रमाणित Fe-550D TMT स्टील एवं अल्ट्राटेक / ACC ग्रेड 53 सीमेंट।"
                      : "Exclusively certified Fe-550D TMT steel and premium Grade 53 cement."}
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start space-x-3">
                <div className="p-2 bg-blue-50 text-blue-700 rounded-lg shrink-0">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    {lang === "hi" ? "पारदर्शी लागत एस्टीमेट" : "Transparent Cost Estimation"}
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {lang === "hi"
                      ? "बिना किसी छुपे हुए शुल्क के सामग्री व लेबर की विस्तृत बिलिंग सूची (BOQ)।"
                      : "Detailed BOQ without unexpected budget inflation or hidden charges."}
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Link */}
            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center space-x-2 text-sm font-bold text-blue-600 hover:text-blue-700"
              >
                <span>
                  {lang === "hi"
                    ? "पूरे आर्किटेक्चरल प्लान व नक्शे के लिए पिपरा स्थित कार्यालय आएं"
                    : "Visit our office in Pipra for full architectural plans"}
                </span>
                <Check className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
