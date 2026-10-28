"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "hi" | "Hin";

interface LanguageContextType {
  lang: Language;
  setLang: (l: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Top Bar
    "topbar.location": "Bazar, Pipra - Simariya Rd, Pipra, Bihar 852218",
    "topbar.hours": "Open 7 Days: 9:00 AM – 5:00 PM",
    "topbar.urgent": "Urgent Consultation",
    "topbar.reviews": "5.0 (22 Reviews)",

    // Nav
    "nav.about": "About Us",
    "nav.services": "Services",
    "nav.projects": "Projects (12)",
    "nav.whyUs": "Why Choose Us",
    "nav.estimator": "Cost Estimator",
    "nav.reviews": "Reviews",
    "nav.contact": "Contact",
    "nav.urgentVisit": "Urgent Visit",
    "nav.freeEstimate": "Free Estimate",

    // Hero
    "hero.badge": "Bihar's Highest Rated Builders • 5.0 Google Rating",
    "hero.title1": "Engineering Landmarks.",
    "hero.title2": "Crafting Architectural Masterpieces.",
    "hero.sub": "Mother's Design & Construction delivers world-class 3D elevation designs, residential villas, and commercial complexes across Pipra, Supaul & Bihar with turnkey engineering excellence.",
    "hero.p1": "Certified Steel & UltraTech Cement",
    "hero.p2": "Modern 3D Elevation Before Digging",
    "hero.p3": "On-Time Handover Guarantee",
    "hero.p4": "Vastu Compliant Floor Layouts",
    "hero.ctaConsult": "Schedule Free Site Consultation",
    "hero.rating": "5.0 Out of 5.0 Stars • Based on 22 verified Google Maps reviews",
    "hero.projectTag": "Real Completed Design • Pipra",
    "hero.projectTitle": "3D Multi-Storey Elevation",
    "hero.projectSub": "Designed & Engineered by Mother's Design",
    "hero.expBadge": "10+ Years & 150+ Projects in Bihar",

    // Stats
    "stats.projects": "Completed Projects",
    "stats.projectsSub": "Residential homes, commercial plazas & villas",
    "stats.rating": "Google Maps Rating",
    "stats.ratingSub": "100% positive verified client feedback (22 reviews)",
    "stats.exp": "Years of Experience",
    "stats.expSub": "Serving Supaul, Pipra, Saharsa & North Bihar",
    "stats.guarantee": "Structural Guarantee",
    "stats.guaranteeSub": "Tested raw materials & earthquake-resilient design",

    // Contact
    "contact.badge": "Contact & Connect",
    "contact.title": "Connect With Our Engineering Team",
    "contact.sub": "Reach out via WhatsApp, Justdial, Facebook, Instagram, or visit our office in Pipra. We provide instant consultations and site inspections across North Bihar.",
    "contact.officeTitle": "Office Headquarters",
    "contact.openToday": "Open Today",
    "contact.address": "Bazar, Pipra - Simariya Rd, Near Post Office, Pipra, Bihar 852218",
    "contact.phoneSub": "Available for immediate WhatsApp estimates & site calls",
    "contact.hours": "Monday to Sunday (All 7 Days): 9:00 AM – 5:00 PM",
    "contact.coverage": "Pipra, Supaul, Simariya, Saharsa, Madhepura, and surrounding North Bihar.",
    "contact.whatsappBtn": "Start Instant WhatsApp Chat",
    "contact.formTitle": "Request a Free Site Inspection & Estimate",
    "contact.formSub": "Share your plot dimensions and requirements. Our civil engineering team will respond within 2 hours.",
    "contact.nameLabel": "Full Name *",
    "contact.phoneLabel": "Phone Number *",
    "contact.serviceLabel": "Required Service *",
    "contact.areaLabel": "Plot Size / Built-up Area",
    "contact.locationLabel": "Plot / Site Location (City or Village)",
    "contact.notesLabel": "Project Details / Specific Notes",
    "contact.submitBtn": "Submit Inquiry & Connect on WhatsApp",

    // Footer
    "footer.desc": "Bihar's trusted civil engineering and architectural firm. Delivering 3D elevation designs, residential villas, and commercial complexes with uncompromising structural integrity.",
    "footer.quickNav": "Quick Navigation",
    "footer.connect": "Connect With Us",
    "footer.rights": "All rights reserved.",
    "footer.designedBy": "Designed with",
    "footer.by": "by",
  },

  hi: {
    // Top Bar
    "topbar.location": "बाज़ार, पिपरा - सिमरिया रोड, पिपरा, बिहार 852218",
    "topbar.hours": "सातों दिन खुला: सुबह 9:00 बजे – शाम 5:00 बजे",
    "topbar.urgent": "तत्काल परामर्श",
    "topbar.reviews": "5.0 (22 समीक्षाएं)",

    // Nav
    "nav.about": "हमारे बारे में",
    "nav.services": "सेवाएं",
    "nav.projects": "प्रोजेक्ट्स (12)",
    "nav.whyUs": "हमें क्यों चुनें",
    "nav.estimator": "लागत कैलकुलेटर",
    "nav.reviews": "रिव्यूज",
    "nav.contact": "संपर्क करें",
    "nav.urgentVisit": "तत्काल विजिट",
    "nav.freeEstimate": "मुफ़्त एस्टीमेट",

    // Hero
    "hero.badge": "बिहार के सर्वोच्च रेटेड बिल्डर्स • 5.0 गूगल रेटिंग",
    "hero.title1": "मजबूत नींव व निर्माण।",
    "hero.title2": "आधुनिक 3D वास्तुशिल्प का भरोसा।",
    "hero.sub": "मदर'एस डिज़ाइन एंड कंस्ट्रक्शन - पिपरा, सुपौल और पूरे उत्तर बिहार में आधुनिक 3D फ्रंट एलिवेशन, रेजिडेंशियल विला और कमर्शियल कॉम्प्लेक्स निर्माण की विश्वसनीय सिविल इंजीनियरिंग फर्म।",
    "hero.p1": "प्रमाणित टाटा स्टील एवं अल्ट्राटेक सीमेंट",
    "hero.p2": "नींव से पहले आधुनिक 3D नक्शा व एलिवेशन",
    "hero.p3": "तय समय सीमा पर काम पूरा करने की गारंटी",
    "hero.p4": "100% वास्तु शास्त्र सम्मत गृह योजना",
    "hero.ctaConsult": "मुफ़्त साइट विजिट व नक्शा परामर्श लें",
    "hero.rating": "5.0 / 5.0 स्टार रेटिंग • 22 सत्यापित गूगल मैप्स रिव्यूज पर आधारित",
    "hero.projectTag": "वास्तविक पूर्ण प्रोजेक्ट • पिपरा",
    "hero.projectTitle": "3D बहुमंजिला भवन एलिवेशन",
    "hero.projectSub": "मदर'एस डिज़ाइन द्वारा डिज़ाइन एवं निर्मित",
    "hero.expBadge": "10+ वर्ष का अनुभव और 150+ सफल प्रोजेक्ट्स",

    // Stats
    "stats.projects": "सफल प्रोजेक्ट्स",
    "stats.projectsSub": "आवासीय मकान, कमर्शियल प्लाज़ा एवं लग्जरी विला",
    "stats.rating": "गूगल मैप्स रेटिंग",
    "stats.ratingSub": "100% संतुष्ट ग्राहकों का भरोसा (22 समीक्षाएं)",
    "stats.exp": "वर्षों का अनुभव",
    "stats.expSub": "पिपरा, सुपौल, सहरसा व उत्तर बिहार में निरंतर सेवा",
    "stats.guarantee": "संरचनात्मक गारंटी",
    "stats.guaranteeSub": "भूकंप रोधी डिजाइन और लैब टेस्टेड मैटेरियल",

    // Contact
    "contact.badge": "संपर्क सूत्र",
    "contact.title": "हमारे मुख्य सिविल इंजीनियर से सीधा संपर्क करें",
    "contact.sub": "व्हाट्सएप, जस्टडायल, फेसबुक, इंस्टाग्राम पर जुड़ें या पिपरा स्थित हमारे कार्यालय आएं। तुरंत साइट विजिट और एस्टीमेट उपलब्ध है।",
    "contact.officeTitle": "प्रधान कार्यालय",
    "contact.openToday": "आज खुला है",
    "contact.address": "बाज़ार, पिपरा - सिमरिया रोड, पोस्ट ऑफिस के पास, पिपरा, बिहार 852218",
    "contact.phoneSub": "व्हाट्सएप पर नक्शा भेजने व तत्काल बातचीत हेतु उपलब्ध",
    "contact.hours": "सोमवार से रविवार (सातों दिन): सुबह 9:00 से शाम 5:00 तक",
    "contact.coverage": "पिपरा, सुपौल, सिमरिया, सहरसा, मधेपुरा एवं संपूर्ण उत्तर बिहार।",
    "contact.whatsappBtn": "सीधे व्हाट्सएप पर बातचीत शुरू करें",
    "contact.formTitle": "निःशुल्क साइट निरीक्षण व लागत अनुमान प्राप्त करें",
    "contact.formSub": "अपने प्लॉट की लंबाई-चौड़ाई और आवश्यकताएं बताएं। हमारे इंजीनियर 2 घंटे के भीतर संपर्क करेंगे।",
    "contact.nameLabel": "आपका पूरा नाम *",
    "contact.phoneLabel": "मोबाइल नंबर *",
    "contact.serviceLabel": "आवश्यक सेवा *",
    "contact.areaLabel": "प्लॉट का आकार / बिल्ट-अप एरिया",
    "contact.locationLabel": "प्लॉट / साइट का स्थान (शहर या गांव)",
    "contact.notesLabel": "प्रोजेक्ट का विवरण / विशेष जरूरतें",
    "contact.submitBtn": "पूछताछ भेजें और व्हाट्सएप पर जुड़ें",

    // Footer
    "footer.desc": "बिहार की विश्वसनीय सिविल इंजीनियरिंग व आर्किटेक्चर फर्म। 3D एलिवेशन, आवासीय मकान और कमर्शियल कॉम्प्लेक्स का मजबूत एवं टिकाऊ निर्माण।",
    "footer.quickNav": "नेविगेशन लिंक्स",
    "footer.connect": "सोशल मीडिया पर जुड़ें",
    "footer.rights": "सर्वाधिकार सुरक्षित।",
    "footer.designedBy": "डिज़ाइन किया गया",
    "footer.by": "द्वारा",
  },

  Hin: {
    // Top Bar
    "topbar.location": "Bazar, Pipra - Simariya Rd, Near Post Office, Pipra, Bihar",
    "topbar.hours": "7 Din Khula: Subah 9:00 AM – Shaam 5:00 PM",
    "topbar.urgent": "Urgent Consultation",
    "topbar.reviews": "5.0 (22 Verified Reviews)",

    // Nav
    "nav.about": "About Us",
    "nav.services": "Services",
    "nav.projects": "Projects (12)",
    "nav.whyUs": "Why Us",
    "nav.estimator": "Kharcha Calculator",
    "nav.reviews": "Reviews",
    "nav.contact": "Contact Karein",
    "nav.urgentVisit": "Urgent Visit",
    "nav.freeEstimate": "Free Estimate",

    // Hero
    "hero.badge": "Bihar Ka No.1 Rated Builder • 5.0 Google Rating",
    "hero.title1": "Majboot Ghar Ka Nirman.",
    "hero.title2": "Modern 3D Design Ka Bharosa.",
    "hero.sub": "Mother's Design & Construction - Pipra, Supaul aur poore North Bihar me modern 3D elevation naksha, residential villa aur commercial building turnkey contract par deliver karte hain.",
    "hero.p1": "Certified TATA Steel & UltraTech Cement",
    "hero.p2": "Neev Khodne Se Pehle 3D Design Preview",
    "hero.p3": "Time Par House Handover Ki Guarantee",
    "hero.p4": "100% Vastu Ke Anusaar Floor Plans",
    "hero.ctaConsult": "Free Site Visit & Naksha Consultation Paayein",
    "hero.rating": "5.0 / 5.0 Star Rating • 22 Verified Google Reviews",
    "hero.projectTag": "Asli Completed Project • Pipra",
    "hero.projectTitle": "3D Multi-Storey Elevation",
    "hero.projectSub": "Mother's Design Dwara Engineered",
    "hero.expBadge": "10+ Saal Ka Tajurba & 150+ Completed Projects",

    // Stats
    "stats.projects": "Completed Projects",
    "stats.projectsSub": "Apne banwaye huye residential homes & commercial plazas",
    "stats.rating": "Google Maps Rating",
    "stats.ratingSub": "22 verified clients ka 100% 5-star positive feedback",
    "stats.exp": "Saalon Ka Tajurba",
    "stats.expSub": "Pipra, Supaul, Saharsa aur North Bihar me trusted civil team",
    "stats.guarantee": "Structural Guarantee",
    "stats.guaranteeSub": "Earthquake proof structure aur lab tested raw materials",

    // Contact
    "contact.badge": "Contact & Baat Karein",
    "contact.title": "Hamare Principal Civil Engineer Se Seedha Sampark Karein",
    "contact.sub": "WhatsApp, Justdial, Facebook, Instagram par connect karein ya Pipra office aakar miliye. Free site visit aur cost estimate turant mil jayega.",
    "contact.officeTitle": "Main Office",
    "contact.openToday": "Aaj Khula Hai",
    "contact.address": "Bazar, Pipra - Simariya Rd, Post Office Ke Paas, Pipra, Bihar 852218",
    "contact.phoneSub": "WhatsApp par direct naksha aur drawings share karein",
    "contact.hours": "Monday se Sunday (All 7 Days): 9:00 AM – 5:00 PM",
    "contact.coverage": "Pipra, Supaul, Simariya, Saharsa, Madhepura aur aas-paas ka area.",
    "contact.whatsappBtn": "WhatsApp Par Direct Chat Karein",
    "contact.formTitle": "Free Site Inspection & Kharcha Estimate Request Karein",
    "contact.formSub": "Apne plot ki size aur requirement likhiye. Hamare engineer 2 ghante me aapse connect karenge.",
    "contact.nameLabel": "Aapka Poora Naam *",
    "contact.phoneLabel": "Mobile Number *",
    "contact.serviceLabel": "Kaun Si Service Chahiye *",
    "contact.areaLabel": "Plot Ka Size / Area (Katha ya Sq.Ft)",
    "contact.locationLabel": "Site Ka Location (Gaon ya Shahar)",
    "contact.notesLabel": "Project Ki Extra Details / Notes",
    "contact.submitBtn": "Inquiry Submit Karke WhatsApp Par Judein",

    // Footer
    "footer.desc": "Bihar ki sabse trusted civil engineering aur architectural firm. 3D elevation, villas aur shopping complex ka certified nirman.",
    "footer.quickNav": "Quick Navigation",
    "footer.connect": "Social Media Channels",
    "footer.rights": "All rights reserved.",
    "footer.designedBy": "Designed with",
    "footer.by": "by",
  },
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "hi",
  setLang: () => { },
  t: (key: string) => key,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("hi");

  useEffect(() => {
    const saved = localStorage.getItem("preferred_lang") as Language | null;
    if (saved && (saved === "en" || saved === "hi" || saved === "Hin")) {
      setLangState(saved);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem("preferred_lang", newLang);
    } catch {
      // storage disabled
    }
  };

  const t = (key: string): string => {
    return translations[lang]?.[key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
