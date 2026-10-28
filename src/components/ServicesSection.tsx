"use client";

import React from "react";
import {
  Compass,
  Building,
  Store,
  Layers,
  Palette,
  Wrench,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ServicesSection() {
  const { lang } = useLanguage();

  const services = [
    {
      icon: Compass,
      title: lang === "hi" ? "3D फ्रंट एलिवेशन एवं नक्शा निर्माण" : "3D Elevation & Architectural Design",
      subtitle: lang === "hi" ? "आधुनिक 3D वास्तुशिल्प व ड्राइंग" : "3D एलिवेशन एवं नक्शा निर्माण",
      description:
        lang === "hi"
          ? "अत्याधुनिक 3D बाहरी विज़ुअलाइज़ेशन, वास्तु सम्मत लेआउट और नगर पालिका द्वारा अनुमोदित ब्लूप्रिंट - ताकि निर्माण शुरू होने से पहले ही आप हर कोने को 3D में देख सकें।"
          : lang === "Hin"
            ? "Ultra-modern 3D exterior design, Vastu ke anusaar map drawing aur municipal approved blueprints taaki neev khodne se pehle hi aap apna ghar 3D me dekh sakein."
            : "State-of-the-art 3D exterior visualization, Vastu-compliant layout drawings, and municipal-approved blueprints so you can preview every detail before construction begins.",
      features:
        lang === "hi"
          ? ["फोटो-रियलिस्टिक 3D रेंडरिंग", "कॉलम एवं पिलर स्ट्रक्चरल लेआउट", "100% वास्तु शास्त्र सम्मत"]
          : lang === "Hin"
            ? ["Photorealistic 3D Renders", "Pillar & Beam Structural Grid", "100% Vastu Shastra Plan"]
            : ["Photorealistic 3D Renderings", "Structural Column Layouts", "Vastu Shastra Alignment"],
      tag: lang === "hi" ? "सर्वाधिक लोकप्रिय" : "Most Popular",
    },
    {
      icon: Building,
      title: lang === "hi" ? "टर्नकी आवासीय मकान निर्माण" : "Residential Turnkey Construction",
      subtitle: lang === "hi" ? "नींव से लेकर फिनिशिंग तक पूरी जिम्मेदारी" : "आवासीय भवन निर्माण",
      description:
        lang === "hi"
          ? "खुदाई से लेकर रंग-रोगन और चाबी सौंपने तक का संपूर्ण मकान निर्माण। हम लेबर, उच्च कोटि की सामग्री और संरचनात्मक सुरक्षा का पूरा प्रबंधन करते हैं।"
          : lang === "Hin"
            ? "Neev se lekar paint aur chabi saupne tak complete ghar ka nirman. Fe-550 TMT steel aur branded cement ke saath hassle-free construction."
            : "Comprehensive house construction from excavation to finishing. We manage labor, materials, structural safety, and finishing with zero hassle for homeowners.",
      features:
        lang === "hi"
          ? ["प्रमाणित Fe-550 TMT स्टील", "कंक्रीट की सख्त तराई (Curing)", "संपूर्ण चाबी हैंडओवर"]
          : lang === "Hin"
            ? ["Certified Fe-550 TMT Steel", "Proper Water Curing", "Complete House Key Handover"]
            : ["Certified Fe-550 TMT Steel", "Strict Curing Periods", "Complete Key Handover"],
      tag: lang === "hi" ? "टर्नकी प्रोजेक्ट" : "Turnkey",
    },
    {
      icon: Store,
      title: lang === "hi" ? "व्यावसायिक शॉपिंग कॉम्प्लेक्स" : "Commercial & Retail Complexes",
      subtitle: lang === "hi" ? "दुकान, शोरूम व अस्पताल निर्माण" : "व्यावसायिक भवन एवं कॉम्प्लेक्स",
      description:
        lang === "hi"
          ? "बहुमंजिला शॉपिंग कॉम्प्लेक्स, शोरूम, अस्पताल और ऑफिस स्पेस के लिए भारी भार वहन क्षमता युक्त मजबूत संरचनात्मक डिजाइन एवं निर्माण।"
          : lang === "Hin"
            ? "Multi-storey shopping complexes, showrooms aur clinic spaces ke liye heavy load resistant commercial construction."
            : "Robust structural design and execution for multi-storey shopping complexes, showrooms, hospitals, and office spaces with heavy traffic engineering.",
      features:
        lang === "hi"
          ? ["भारी भार वहन क्षमता", "आधुनिक ग्लास एवं ACP फसाड", "अग्नि सुरक्षा एवं पार्किंग मानक"]
          : lang === "Hin"
            ? ["Heavy Load RCC Capacity", "Modern ACP & Glass Facade", "Fire & Parking Norms"]
            : ["Heavy Load Capacities", "Modern Facade Systems", "Fire & Safety Norms"],
      tag: lang === "hi" ? "कमर्शियल" : "Commercial",
    },
    {
      icon: Layers,
      title: lang === "hi" ? "नींव एवं भारी RCC इंजीनियरिंग" : "Foundation & RCC Engineering",
      subtitle: lang === "hi" ? "भूकंप रोधी पिलर व बीम जाल" : "मजबूत नींव एवं पिलर कार्य",
      description:
        lang === "hi"
          ? "बिहार की जलोढ़ मिट्टी के अनुकूल वैज्ञानिक सॉइल टेस्टिंग और रीइन्फोर्स्ड कंक्रीट फाउंडेशन - जो भूकंप और बाढ़ के प्रभावों से मकान को सुरक्षित रखता है।"
          : lang === "Hin"
            ? "Soil testing ke saath deep column footing aur heavy RCC beam grid, jo Bihar ki alluvial mitti me earthquake aur flood se surakshit rakhta hai."
            : "Scientific soil testing and reinforced concrete foundation design engineered for Bihar's alluvial terrain to guarantee seismic and flood resilience.",
      features:
        lang === "hi"
          ? ["गहरी कॉलम फुटिंग नींव", "वाइब्रेटर कॉम्पेक्टेड कंक्रीट", "एंटी-टर्माइट (दीमक) उपचार"]
          : lang === "Hin"
            ? ["Deep Column Foundation", "Vibrator Compacted Concrete", "Anti-Termite Treatment"]
            : ["Deep Column Foundations", "Vibrator Compacted Concrete", "Anti-Termite Treatment"],
      tag: lang === "hi" ? "इंजीनियरिंग" : "Engineering",
    },
    {
      icon: Palette,
      title: lang === "hi" ? "आधुनिक इंटीरियर डिजाइनिंग" : "Interior Design & Fitouts",
      subtitle: lang === "hi" ? "मॉड्यूलर किचन, फॉल्स सीलिंग व लाइटिंग" : "आधुनिक इंटीरियर डिजाइनिंग",
      description:
        lang === "hi"
          ? "मॉड्यूलर किचन, आधुनिक वार्डरोब, आकर्षक POP फॉल्स सीलिंग और लग्जरी एंबियंट लाइटिंग - जो आपके घर को आलीशान और आरामदायक बनाती है।"
          : lang === "Hin"
            ? "Modular kitchen design, designer POP ceiling, aur ambient LED lighting jo aapke ghar ko luxury look deti hai."
            : "Bespoke interior concepts, modular kitchen design, decorative POP ceiling work, and atmospheric lighting solutions that enhance space and luxury.",
      features:
        lang === "hi"
          ? ["मॉड्यूलर किचन व अलमारी", "एंबियंट एलईडी प्रोफाइल लाइट्स", "प्रीमियम वॉल पैनलिंग"]
          : lang === "Hin"
            ? ["Modular Kitchen & Wardrobe", "LED Profile Lighting", "Premium Wall Paneling"]
            : ["Modular Kitchen & Wardrobes", "Ambient LED Lighting", "Premium Wall Paneling"],
      tag: lang === "hi" ? "इंटीरियर" : "Interiors",
    },
    {
      icon: Wrench,
      title: lang === "hi" ? "भवन नवीनीकरण एवं मंजिल विस्तार" : "Renovation & Structural Expansion",
      subtitle: lang === "hi" ? "नई मंजिल जोड़ना व सीलन निवारण" : "भवन नवीनीकरण एवं विस्तार",
      description:
        lang === "hi"
          ? "मौजूदा मकान में नई मंजिलें जोड़ना, पुराने फसाड को नया मॉडर्न रूप देना, सीलन का पक्का इलाज और प्रमाणित सिविल इंजीनियरिंग द्वारा ढांचागत मजबूती।"
          : lang === "Hin"
            ? "Ghar me nayi floor jodna, old front ko modern elevation me badalna aur waterproofing treatment."
            : "Add new floors, modernize aging facades, repair dampness, and structurally reinforce existing properties with certified civil engineering solutions.",
      features:
        lang === "hi"
          ? ["नई मंजिल निर्माण", "100% वाटरप्रूफिंग तकनीक", "आधुनिक फसाड मेकओवर"]
          : lang === "Hin"
            ? ["New Floor Additions", "Permanent Waterproofing", "Modern Facade Makeover"]
            : ["Floor Additions", "Waterproofing Solutions", "Facade Modernization"],
      tag: lang === "hi" ? "नवीनीकरण" : "Renovation",
    },
  ];

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
            {lang === "hi" ? "हमारी मुख्य विशेषज्ञताएं" : "Our Core Specializations"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {lang === "hi"
              ? "संपूर्ण निर्माण एवं वास्तुशिल्प सेवाएं"
              : lang === "Hin"
                ? "Complete Construction & Architectural Services"
                : "Comprehensive Construction & Architectural Services"}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            {lang === "hi"
              ? "प्रारंभिक रेखाचित्र से लेकर अंतिम रंग-रोगन तक, मदर'एस डिज़ाइन एंड कंस्ट्रक्शन हर प्रोजेक्ट में बेजोड़ मजबूती और आधुनिक सुंदरता प्रदान करती है।"
              : lang === "Hin"
                ? "Initial sketch se lekar final coat of paint tak, Mother's Design & Construction benchmark civil engineering aur modern look deliver karti hai."
                : "From initial sketch to the final coat of paint, Mother's Design & Construction delivers benchmark structural engineering and modern aesthetics."}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-slate-50 hover:bg-white rounded-2xl p-8 border border-slate-200/90 hover:border-blue-500/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between corporate-hover-lift"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-900 to-blue-700 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-blue-200" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-slate-200/70 text-slate-700 group-hover:bg-blue-100 group-hover:text-blue-800 transition-colors">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <div className="text-xs font-semibold text-blue-600 mb-4">{service.subtitle}</div>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{service.description}</p>

                  <div className="space-y-2 mb-8 pt-2 border-t border-slate-200/60">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center space-x-2 text-xs font-medium text-slate-700">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={`https://wa.me/918264360443?text=Hello%20Mother's%20Design,%20I%20am%20inquiring%20about%20${encodeURIComponent(
                    service.title
                  )}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl bg-white group-hover:bg-blue-600 text-slate-800 group-hover:text-white border border-slate-300 group-hover:border-blue-600 font-semibold text-xs tracking-wide transition-all shadow-sm"
                >
                  <span>{lang === "hi" ? "इस सेवा की जानकारी लें" : lang === "Hin" ? "Is Service Ki Enquiry Karein" : "Inquire for this Service"}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
