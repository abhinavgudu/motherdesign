"use client";

import React from "react";
import { Check, X, ShieldCheck, Clock, Award, Users } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function WhyChooseUs() {
  const { lang } = useLanguage();

  const comparison = [
    {
      feature: lang === "hi" ? "वास्तुशिल्प 3D पूर्वावलोकन" : "Architectural 3D Preview",
      mothers:
        lang === "hi"
          ? "निर्माण से पहले वास्तु सम्मत संपूर्ण 3D एलिवेशन एवं 2D फ्लोर प्लान"
          : "Full 3D Elevation & 2D Floor Plan with Vastu before construction",
      local:
        lang === "hi"
          ? "हाथ से बने कच्चे स्केच या कोई 3D मॉडल नहीं"
          : "Hand-drawn sketches or no 3D modeling at all",
    },
    {
      feature: lang === "hi" ? "लागत की पूर्ण पारदर्शिता" : "Cost Transparency",
      mothers:
        lang === "hi"
          ? "निश्चित दर अनुबंध व विस्तृत BOQ (बीच में कोई अचानक खर्च नहीं)"
          : "Legally binding BOQ with fixed rate contract (No sudden cost spikes)",
      local:
        lang === "hi"
          ? "मौखिक वादे और ढलाई के समय अप्रत्याशित खर्चे"
          : "Frequent verbal cost revisions & surprise bills during slab casting",
    },
    {
      feature: lang === "hi" ? "इंजीनियरिंग पर्यवेक्षण" : "Structural Supervision",
      mothers:
        lang === "hi"
          ? "साइट पर प्रमाणित सिविल इंजीनियर एवं अनुभवी सुपरवाइजर की मौजूदगी"
          : "Certified Civil Engineers & Site Supervisors on ground",
      local:
        lang === "hi"
          ? "बिना किसी इंजीनियरिंग जांच के केवल स्थानीय राजमिस्त्री के भरोसे"
          : "Managed entirely by local masons (राजमिस्त्री) without engineering checks",
    },
    {
      feature: lang === "hi" ? "सामग्री गुणवत्ता सत्यापन" : "Material Quality Verification",
      mothers:
        lang === "hi"
          ? "प्रमाणित TMT Fe-550D स्टील, टेस्टेड बालू व ग्रेड 53 सीमेंट"
          : "Certified TMT Fe-550D Rebars, tested sand & branded Grade 53 cement",
      local:
        lang === "hi"
          ? "गैर-ब्रांडेड या घटिया सामग्री जिससे जंग और सीलन का खतरा रहता है"
          : "Unbranded or local grade materials prone to rust & dampness",
    },
    {
      feature: lang === "hi" ? "हैंडओवर समय सीमा" : "Delivery Timelines",
      mothers:
        lang === "hi"
          ? "तय समय सीमा की लिखित गारंटी एवं दैनिक व्हाट्सएप फोटो रिपोर्ट"
          : "Guaranteed milestone dates with daily WhatsApp photo progress",
      local:
        lang === "hi"
          ? "महीनों तक बिना कारण के काम में अनावश्यक देरी"
          : "Frequent unexplained delays lasting several months",
    },
    {
      feature: lang === "hi" ? "हैंडओवर के बाद वारंटी" : "Post-Handover Warranty",
      mothers:
        lang === "hi"
          ? "1-वर्षीय स्ट्रक्चरल एवं प्लंबिंग वारंटी तथा त्वरित समाधान"
          : "1-Year structural & plumbing warranty with prompt service",
      local:
        lang === "hi"
          ? "अंतिम भुगतान मिलते ही कोई जिम्मेदारी नहीं"
          : "Zero accountability once the final payment is cleared",
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
            {lang === "hi" ? "पेशेवर अंतर को समझें" : "The Professional Difference"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {lang === "hi"
              ? "जागरूक भवन मालिक मदर'एस डिज़ाइन को क्यों चुनते हैं"
              : lang === "Hin"
                ? "Samajhdar Ghar Malik Mother's Design Ko Kyun Chunte Hain"
                : "Why Discerning Property Owners Choose Mother's Design"}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            {lang === "hi"
              ? "घर या व्यावसायिक भवन का निर्माण जीवन भर का निवेश होता है। जानिए हम आपके पैसे, समय और सुरक्षा की रक्षा कैसे करते हैं।"
              : lang === "Hin"
                ? "Ghar banwana zindagi bhar ki mehnat ka investment hota hai. Janiye hum aapke paise, time aur safety ko kaise protect karte hain."
                : "Constructing a home or commercial building is a once-in-a-lifetime investment. Here is how we protect your money, time, and safety."}
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-lg">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 text-white text-xs sm:text-sm">
                <th className="py-5 px-6 font-bold uppercase tracking-wider w-1/4">
                  {lang === "hi" ? "मानक पैरामीटर" : "Key Standard"}
                </th>
                <th className="py-5 px-6 font-bold uppercase tracking-wider w-5/12 bg-blue-900/80 text-blue-200 border-x border-slate-800">
                  <div className="flex items-center space-x-2">
                    <ShieldCheck className="w-5 h-5 text-blue-400" />
                    <span>{lang === "hi" ? "मदर'एस डिज़ाइन एंड कंस्ट्रक्शन" : "Mother's Design & Construction"}</span>
                  </div>
                </th>
                <th className="py-5 px-6 font-bold uppercase tracking-wider w-1/3 text-slate-400">
                  {lang === "hi" ? "असंगठित स्थानीय ठेकेदार" : "Unorganized Local Contractors (ठेकेदार)"}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
              {comparison.map((item, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/70"}>
                  <td className="py-4 px-6 font-bold text-slate-900">{item.feature}</td>
                  <td className="py-4 px-6 bg-blue-50/50 font-medium text-slate-800 border-x border-slate-200">
                    <div className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item.mothers}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-slate-500">
                    <div className="flex items-start space-x-2">
                      <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <span>{item.local}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 4 Trust Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 mx-auto flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-slate-900 text-base mb-1">
              {lang === "hi" ? "भूकंप रोधी संरचना" : "Seismic Zone Resilient"}
            </h4>
            <p className="text-xs text-slate-600">
              {lang === "hi"
                ? "उत्तर बिहार के सीस्मिक जोन और मिट्टी की प्रकृति के अनुसार विशेष इंजीनियरिंग।"
                : "Engineered specifically to withstand North Bihar's seismic and flood dynamics."}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 mx-auto flex items-center justify-center mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-slate-900 text-base mb-1">
              {lang === "hi" ? "चरणबद्ध भुगतान (Milestone)" : "Milestone Payments"}
            </h4>
            <p className="text-xs text-slate-600">
              {lang === "hi"
                ? "आप केवल तभी भुगतान करते हैं जब प्रत्येक चरण (प्लिंथ, ढलाई, दीवार) का काम पूरा और सत्यापित हो जाए।"
                : "You pay only when physical construction milestones (plinth, slab, walls) are verified."}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 mx-auto flex items-center justify-center mb-4">
              <Award className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-slate-900 text-base mb-1">
              {lang === "hi" ? "ग्रेड-A लैब सर्टिफिकेशन" : "Grade-A Certification"}
            </h4>
            <p className="text-xs text-slate-600">
              {lang === "hi"
                ? "स्टील का मिल टेस्ट सर्टिफिकेट एवं कंक्रीट की मजबूती की क्यूब टेस्टिंग रिपोर्ट।"
                : "Mill test certificates for steel and cube testing for concrete compressive strength."}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 mx-auto flex items-center justify-center mb-4">
              <Users className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-slate-900 text-base mb-1">
              {lang === "hi" ? "समर्पित प्रोजेक्ट लीड" : "Dedicated Project Lead"}
            </h4>
            <p className="text-xs text-slate-600">
              {lang === "hi"
                ? "प्रारंभ से हैंडओवर तक आपके हर सवाल और समन्वय के लिए एक मुख्य प्रोजेक्ट मैनेजर।"
                : "One dedicated project manager as single point of contact throughout the project."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
