"use client";

import React from "react";
import { CheckCircle, ExternalLink, Shield } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import {
  GoogleMapsLogo,
  JustdialLogo,
  FacebookLogo,
  InstagramLogo,
} from "@/components/BrandLogos";

export default function ListingPlatforms() {
  const { lang } = useLanguage();

  const platforms = [
    {
      name: lang === "hi" ? "गूगल बिजनेस प्रोफाइल" : "Google Business Profile",
      category: lang === "hi" ? "गूगल मैप्स सत्यापित बिज़नेस" : "Google Maps Verified Business",
      rating: "5.0 ★ (22 Reviews)",
      status: lang === "hi" ? "सत्यापित एवं सक्रिय" : "Verified & Active",
      badgeColor: "bg-blue-500/10 text-blue-700 border-blue-200",
      description:
        lang === "hi"
          ? "पिपरा में वास्तविक तस्वीरें, ग्राहकों की समीक्षाएं और जीपीएस दिशा-निर्देश।"
          : lang === "Hin"
            ? "Pipra me real photos, customer reviews aur live GPS directions."
            : "Direct owner listing with authentic photos, customer reviews, and GPS directions in Pipra.",
      linkText: lang === "hi" ? "गूगल मैप्स पर देखें" : lang === "Hin" ? "Google Maps Par Dekhein" : "View on Google Maps",
      url: "https://maps.app.goo.gl/qD4B79n1rVwG1j7z6",
      logo: <GoogleMapsLogo className="w-6 h-6 shrink-0" />,
    },
    {
      name: "Justdial",
      category: lang === "hi" ? "सर्टिफाइड सिविल कांट्रैक्टर" : "Certified Civil Contractors",
      rating: lang === "hi" ? "पिपरा बाज़ार में टॉप रेटेड" : "Top Rated in Pipra Bazar",
      status: lang === "hi" ? "वेरिफाइड लिस्टिंग" : "Verified Listing",
      badgeColor: "bg-amber-500/10 text-amber-800 border-amber-200",
      description:
        lang === "hi"
          ? "बिल्डिंग कांट्रैक्टर्स एवं सिविल इंजीनियर्स, पोस्ट ऑफिस के निकट, पिपरा-सिमरिया रोड, बिहार।"
          : lang === "Hin"
            ? "Building contractors aur civil engineers, Post office ke paas, Pipra, Bihar."
            : "Listed under Building Contractors & Civil Engineers, Near Post Office, Pipra - Simariya Road, Bihar.",
      linkText: lang === "hi" ? "जस्टडायल पर देखें" : lang === "Hin" ? "Justdial Par Dekhein" : "View on Justdial",
      url: "https://www.justdial.com/Supaul/Mothers-Design-Construction-Near-Post-Office-Pipra-Bazar/9999P6473-6473-220719110021-N9J6_BZDET",
      logo: <JustdialLogo className="w-6 h-6 shrink-0" />,
    },
    {
      name: "Facebook",
      category: lang === "hi" ? "सोशल मीडिया पेज" : "Social Media Presence",
      rating: lang === "hi" ? "सक्रिय प्रोफाइल" : "Active Profile",
      status: lang === "hi" ? "सत्यापित पेज" : "Verified Page",
      badgeColor: "bg-blue-500/10 text-blue-800 border-blue-200",
      description:
        lang === "hi"
          ? "नवीनतम प्रोजेक्ट अपडेट्स, 3D एलिवेशन डिजाइन और निर्माण वीडियो के लिए हमारे फेसबुक पेज को फॉलो करें।"
          : lang === "Hin"
            ? "Latest project updates, 3D elevation designs aur construction videos ke liye follow karein."
            : "Follow our Facebook page for latest project updates, 3D elevation designs, and construction milestones.",
      linkText: lang === "hi" ? "फेसबुक देखें" : lang === "Hin" ? "Facebook Dekhein" : "Visit Facebook",
      url: "https://www.facebook.com/er.saurav.karak",
      logo: <FacebookLogo className="w-6 h-6 shrink-0" />,
    },
    {
      name: "Instagram",
      category: lang === "hi" ? "आर्किटेक्चरल पोर्टफोलियो" : "Architectural Portfolio",
      rating: lang === "hi" ? "3D एलिवेशन अपडेट्स" : "3D Elevation Updates",
      status: lang === "hi" ? "सक्रिय मीडिया" : "Active Media",
      badgeColor: "bg-purple-500/10 text-purple-800 border-purple-200",
      description:
        lang === "hi"
          ? "3D फ्रंट एलिवेशन, स्ट्रक्चरल कॉलम ग्रिड और 3D वॉकथ्रू के नियमित वीडियो।"
          : lang === "Hin"
            ? "3D front elevation, pillar grid aur walkthrough ke regular updates."
            : "Regular design showcases of 3D elevations, structural column grids, and walkthrough previews.",
      linkText: lang === "hi" ? "फोटो व रील्स देखें" : lang === "Hin" ? "Visuals Explore Karein" : "Explore Visuals",
      url: "https://www.instagram.com/saurav_karak_/",
      logo: <InstagramLogo className="w-6 h-6 shrink-0" />,
    },
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider">
            <Shield className="w-3.5 h-3.5 text-blue-600" />
            <span>
              {lang === "hi" ? "बहु-मंच सत्यापन व भरोसा" : lang === "Hin" ? "Multi-Platform Verification & Trust" : "Multi-Platform Verification & Trust"}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {lang === "hi"
              ? "प्रमुख राष्ट्रीय पोर्टल्स पर आधिकारिक रूप से सूचीबद्ध व सत्यापित"
              : lang === "Hin"
                ? "Major National Portals Par Officially Listed & Verified"
                : "Officially Listed & Verified Across Leading Portals"}
          </h2>
          <p className="text-slate-600 text-sm">
            {lang === "hi"
              ? "मदर'एस डिज़ाइन एंड कंस्ट्रक्शन प्रमुख राष्ट्रीय व्यापार निर्देशिकाओं और क्षेत्रीय उपभोक्ता पोर्टल्स पर मान्यता प्राप्त है।"
              : lang === "Hin"
                ? "Mother's Design & Construction sabhi leading national business directories aur consumer portals par recognized hai."
                : "Mother's Design & Construction is recognized across major national business directories, trade databases, and regional consumer portals."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((p, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-blue-500 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="p-1 rounded-lg group-hover:scale-110 transition-transform duration-200">
                    {p.logo}
                  </div>
                  <span className={`text-[11px] font-extrabold px-2.5 py-0.5 rounded border ${p.badgeColor}`}>
                    {p.status}
                  </span>
                </div>

                <h3 className="font-extrabold text-base text-slate-900 mb-0.5">{p.name}</h3>
                <div className="text-xs font-bold text-blue-600 mb-3">{p.category}</div>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">{p.description}</p>
              </div>

              <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-800">{p.rating}</span>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center space-x-1"
                >
                  <span>{p.linkText}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
