"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Clock,
  Send,
  CheckCircle2,
  Building,
  MessageSquare,
  ExternalLink,
  Navigation,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import {
  WhatsAppLogo,
  FacebookLogo,
  InstagramLogo,
  JustdialLogo,
  GoogleMapsLogo,
} from "@/components/BrandLogos";

export default function ContactSection() {
  const { lang, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Residential Construction",
    area: "",
    location: "Pipra / Supaul",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Format WhatsApp inquiry text
    const text = `Hello Mother's Design & Construction,%0A%0AMy Name: ${encodeURIComponent(
      formData.name
    )}%0APhone: ${encodeURIComponent(formData.phone)}%0AService Needed: ${encodeURIComponent(
      formData.service
    )}%0APlot / Area: ${encodeURIComponent(formData.area)}%0ALocation: ${encodeURIComponent(
      formData.location
    )}%0ANote: ${encodeURIComponent(formData.message)}`;

    // Open WhatsApp in new tab
    window.open(`https://wa.me/918264360443?text=${text}`, "_blank");
  };

  const officialChannels = [
    {
      title: lang === "hi" ? "व्हाट्सएप परामर्श" : lang === "Hin" ? "WhatsApp Direct Chat" : "WhatsApp Direct",
      handle: "+91 82643 60443",
      desc:
        lang === "hi"
          ? "मुख्य सिविल इंजीनियर से सीधी बातचीत, नक्शा और ड्राइंग शेयर करें"
          : lang === "Hin"
            ? "Engineer se direct baat karein, blueprint aur naksha share karein"
            : "Instant chat with principal engineer, share blueprints & ask queries",
      badge: lang === "hi" ? "तुरंत 24/7 जवाब" : lang === "Hin" ? "Instant Reply" : "Instant 24/7 Response",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      cta: lang === "hi" ? "व्हाट्सएप चैट खोलें" : lang === "Hin" ? "WhatsApp Par Judein" : "Open WhatsApp Chat",
      url: "https://wa.me/918264360443?text=Hello%20Mother's%20Design%20%26%20Construction,%20I%20am%20interested%20in%20a%20construction%20quotation.",
      logo: <WhatsAppLogo className="w-8 h-8 shrink-0" />,
      cardHover: "hover:border-[#25D366] hover:shadow-emerald-500/10",
      ctaColor: "text-emerald-700 group-hover:text-emerald-800",
    },
    {
      title: lang === "hi" ? "जस्टडायल सत्यापित" : lang === "Hin" ? "Justdial Listing" : "Justdial Verified",
      handle: lang === "hi" ? "पिपरा बाज़ार प्रोफाइल" : "Pipra Bazar Listing",
      desc:
        lang === "hi"
          ? "सुपौल जिले के प्रमाणित सिविल इंजीनियर एवं बिल्डिंग कॉन्ट्रैक्टर"
          : lang === "Hin"
            ? "Supaul ke certified civil contractor & building engineer"
            : "Certified Building Contractors & Civil Engineers across Supaul",
      badge: lang === "hi" ? "टॉप रेटेड बिल्डर" : "Top Rated Contractor",
      badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
      cta: lang === "hi" ? "जस्टडायल पर देखें" : lang === "Hin" ? "Justdial Par Dekhein" : "View on Justdial",
      url: "https://www.justdial.com/Supaul/Mothers-Design-Construction-Near-Post-Office-Pipra-Bazar/9999P6473-6473-220719110021-N9J6_BZDET",
      logo: <JustdialLogo className="w-8 h-8 shrink-0" />,
      cardHover: "hover:border-amber-400 hover:shadow-amber-500/10",
      ctaColor: "text-amber-800 group-hover:text-amber-900",
    },
    {
      title: lang === "hi" ? "फेसबुक पेज" : "Facebook Official",
      handle: "Er. Saurav Karak",
      desc:
        lang === "hi"
          ? "साइट निर्माण वीडियो, पूर्ण मकानों का हैंडओवर एवं नए अपडेट्स"
          : lang === "Hin"
            ? "Site progress videos, completed house handover & updates"
            : "Site progress videos, completed house handovers & updates",
      badge: lang === "hi" ? "सत्यापित पेज" : "Verified Profile",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      cta: lang === "hi" ? "फेसबुक पर जुड़ें" : lang === "Hin" ? "Facebook Par Judein" : "Connect on Facebook",
      url: "https://www.facebook.com/er.saurav.karak",
      logo: <FacebookLogo className="w-8 h-8 shrink-0" />,
      cardHover: "hover:border-[#1877F2] hover:shadow-blue-500/10",
      ctaColor: "text-blue-700 group-hover:text-blue-800",
    },
    {
      title: lang === "hi" ? "इंस्टाग्राम पोर्टफोलियो" : "Instagram Portfolio",
      handle: "@saurav_karak_",
      desc:
        lang === "hi"
          ? "आधुनिक 3D फ्रंट एलिवेशन, इंटीरियर वॉकथ्रू एवं सिविल निर्माण रील्स"
          : lang === "Hin"
            ? "Modern 3D elevation naksha, interior walkthrough & reels"
            : "Modern 3D elevation designs, interior walkthroughs & civil work",
      badge: lang === "hi" ? "3D गैलरी" : "Design Portfolio",
      badgeColor: "bg-pink-50 text-pink-700 border-pink-200",
      cta: lang === "hi" ? "इंस्टाग्राम पर देखें" : lang === "Hin" ? "Instagram Par Dekhein" : "Follow on Instagram",
      url: "https://www.instagram.com/saurav_karak_/",
      logo: <InstagramLogo className="w-8 h-8 shrink-0" />,
      cardHover: "hover:border-pink-500 hover:shadow-pink-500/10",
      ctaColor: "text-pink-700 group-hover:text-pink-800",
    },
    {
      title: lang === "hi" ? "गूगल मैप्स लोकेशन" : "Google Maps Profile",
      handle: "5.0 ★ (22 Reviews)",
      desc:
        lang === "hi"
          ? "सत्यापित बिजनेस प्रोफाइल, फोटो, लाइव जीपीएस दिशा-निर्देश एवं समीक्षाएं"
          : lang === "Hin"
            ? "Real business profile, photos, live GPS directions & reviews"
            : "Official business profile with photos, live GPS directions & feedback",
      badge: "100% 5-Star Rated",
      badgeColor: "bg-red-50 text-red-700 border-red-200",
      cta: lang === "hi" ? "गूगल मैप्स खोलें" : lang === "Hin" ? "Google Maps Kholein" : "Open in Google Maps",
      url: "https://maps.app.goo.gl/qD4B79n1rVwG1j7z6",
      logo: <GoogleMapsLogo className="w-8 h-8 shrink-0" />,
      cardHover: "hover:border-red-400 hover:shadow-red-500/10",
      ctaColor: "text-red-700 group-hover:text-red-800",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white via-slate-50 to-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200 shadow-sm">
            {t("contact.badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            {t("contact.title")}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {t("contact.sub")}
          </p>
        </div>

        {/* 5-Card Official Channels Showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
          {officialChannels.map((channel, idx) => (
            <a
              key={idx}
              href={channel.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between ${channel.cardHover}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-1 rounded-xl group-hover:scale-110 transition-transform duration-200">
                    {channel.logo}
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${channel.badgeColor}`}>
                    {channel.badge}
                  </span>
                </div>
                <h3 className="font-extrabold text-slate-900 text-sm mb-0.5">{channel.title}</h3>
                <p className="text-xs font-semibold text-slate-700 mb-2">{channel.handle}</p>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">{channel.desc}</p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                <span className={channel.ctaColor}>{channel.cta}</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </a>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Office Information & Interactive Map */}
          <div className="lg:col-span-5 space-y-6">
            {/* Office Info Card */}
            <div className="bg-[#0b192c] text-white p-7 sm:p-8 rounded-3xl shadow-xl space-y-6 border border-slate-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <h3 className="text-2xl font-bold text-white">{t("contact.officeTitle")}</h3>
                <span className="text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2.5 py-1 rounded-full">
                  {t("contact.openToday")}
                </span>
              </div>

              <div className="space-y-5 text-sm">
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/30">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">
                      {lang === "hi" ? "पंजीकृत कार्यालय का पता" : "Registered Office Address"}
                    </h4>
                    <p className="text-slate-300 mt-0.5 leading-relaxed text-xs sm:text-sm">
                      {t("contact.address")}
                    </p>
                    <a
                      href="https://maps.app.goo.gl/qD4B79n1rVwG1j7z6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-1 text-xs text-blue-400 hover:text-blue-300 underline font-semibold"
                    >
                      <span>{lang === "hi" ? "गूगल मैप्स नेविगेशन खोलें" : "Open in Google Maps Navigation"}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/30">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">
                      {lang === "hi" ? "फोन व व्हाट्सएप संपर्क" : "Direct Calling & WhatsApp"}
                    </h4>
                    <p className="text-slate-300 mt-0.5">
                      <a href="tel:+918264360443" className="hover:text-blue-400 transition-colors font-bold text-base text-white">
                        +91 82643 60443
                      </a>
                    </p>
                    <p className="text-xs text-emerald-400 font-semibold mt-0.5">
                      {t("contact.phoneSub")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/30">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">
                      {lang === "hi" ? "कार्य समय" : "Business Hours"}
                    </h4>
                    <p className="text-slate-300 mt-0.5 text-xs sm:text-sm">
                      {t("contact.hours")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/30">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">
                      {lang === "hi" ? "सेवा क्षेत्र (कवरेज एरिया)" : "Coverage Districts"}
                    </h4>
                    <p className="text-slate-300 mt-0.5 text-xs sm:text-sm">
                      {t("contact.coverage")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="pt-4 border-t border-slate-800">
                <a
                  href="https://wa.me/918264360443?text=Hello%20Mother's%20Design,%20I%20would%20like%20to%20discuss%20a%20construction%20project%20in%20Bihar."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold py-3.5 px-4 rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2.5 text-sm"
                >
                  <WhatsAppLogo className="w-5 h-5" />
                  <span>{t("contact.whatsappBtn")}</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Maps Container with Directions Overlay */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-lg bg-white relative">
              <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <GoogleMapsLogo className="w-5 h-5" />
                  <div>
                    <p className="text-xs font-bold text-white leading-tight">
                      {lang === "hi" ? "मदर'एस डिज़ाइन एंड कंस्ट्रक्शन" : "Mother's Design & Construction"}
                    </p>
                    <p className="text-[11px] text-slate-300">
                      {lang === "hi" ? "पिपरा बाज़ार, सुपौल (बिहार)" : "Pipra Bazar, Bihar 852218"}
                    </p>
                  </div>
                </div>
                <a
                  href="https://maps.app.goo.gl/qD4B79n1rVwG1j7z6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded-lg text-xs font-bold transition-colors shadow-sm"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>{lang === "hi" ? "रास्ता देखें (GPS)" : "Get Directions"}</span>
                </a>
              </div>
              <div className="h-64 relative bg-slate-100">
                <iframe
                  title="Mother's Design & Construction Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14337.892740209217!2d86.78846399999999!3d26.1604125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ee4fa33172c655%3A0x5156ffa13120f800!2sMother&#39;s%20Design%20%26%20Construction!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry & Consultation Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/90 shadow-xl relative">
              <div className="mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                  {lang === "hi" ? "ऑनलाइन बुकिंग" : lang === "Hin" ? "Online Inquiry" : "Online Booking"}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-3 mb-2">
                  {t("contact.formTitle")}
                </h3>
                <p className="text-slate-500 text-sm">
                  {t("contact.formSub")}
                </p>
              </div>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>
                    {lang === "hi"
                      ? "धन्यवाद! आपकी जानकारी तैयार करके हमारे व्हाट्सएप पर भेज दी गई है।"
                      : "Thank you! Your inquiry was prepared and redirected to our WhatsApp line for immediate attention."}
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      {t("contact.nameLabel")}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={lang === "hi" ? "उदा. राजेश कुमार" : "e.g. Rajesh Kumar"}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm text-slate-900 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      {t("contact.phoneLabel")}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm text-slate-900 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      {t("contact.serviceLabel")}
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm text-slate-900 bg-white transition-all"
                    >
                      <option value="3D Elevation & Blueprints">
                        {lang === "hi" ? "3D फ्रंट एलिवेशन एवं नक्शा (Blueprints)" : "3D Elevation & Blueprints"}
                      </option>
                      <option value="Residential Construction">
                        {lang === "hi" ? "आवासीय मकान / विला निर्माण" : "Residential Villa / House Construction"}
                      </option>
                      <option value="Commercial Complex">
                        {lang === "hi" ? "व्यावसायिक शॉपिंग कॉम्प्लेक्स निर्माण" : "Commercial Shopping Complex"}
                      </option>
                      <option value="Foundation & Civil Work">
                        {lang === "hi" ? "नींव, बीम एवं सिविल स्ट्रक्चर कार्य" : "Foundation & Civil Framing"}
                      </option>
                      <option value="Interior Design">
                        {lang === "hi" ? "आधुनिक इंटीरियर डिजाइनिंग" : "Modern Interior Designing"}
                      </option>
                      <option value="Renovation & Expansion">
                        {lang === "hi" ? "भवन नवीनीकरण एवं विस्तार कार्य" : "Building Renovation & Expansion"}
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      {t("contact.areaLabel")}
                    </label>
                    <input
                      type="text"
                      placeholder={lang === "hi" ? "उदा. 1200 वर्ग फुट या 2 कट्ठा" : "e.g. 1200 sq.ft or 2 Katha"}
                      value={formData.area}
                      onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm text-slate-900 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    {t("contact.locationLabel")}
                  </label>
                  <input
                    type="text"
                    placeholder={lang === "hi" ? "उदा. पिपरा बाज़ार, सिमरिया रोड, सुपौल" : "e.g. Bazar Pipra, Simariya Rd, Supaul"}
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm text-slate-900 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    {t("contact.notesLabel")}
                  </label>
                  <textarea
                    rows={4}
                    placeholder={
                      lang === "hi"
                        ? "अपने मकान का सपना, बजट, कितने मंजिल का घर बनाना चाहते हैं, आदि लिखें..."
                        : "Describe your vision, budget expectations, timeline, or number of storeys..."
                    }
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm text-slate-900 transition-all"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold py-4 px-6 rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-blue-600/40 transition-all flex items-center justify-center space-x-2 text-base group"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <span>{t("contact.submitBtn")}</span>
                </button>

                <p className="text-xs text-center text-slate-400 mt-2">
                  🔒 {lang === "hi" ? "आपका डेटा पूरी तरह सुरक्षित है। सभी एस्टीमेट प्रमाणित सिविल कोड्स के अनुसार हैं।" : "Your data is confidential. We do not spam. All project estimates follow certified civil codes."}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
