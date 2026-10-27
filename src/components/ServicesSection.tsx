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

export default function ServicesSection() {
  const services = [
    {
      icon: Compass,
      title: "3D Elevation & Architectural Design",
      subtitle: "3D एलिवेशन एवं नक्शा निर्माण",
      description:
        "State-of-the-art 3D exterior visualization, Vastu-compliant layout drawings, and municipal-approved blueprints so you can preview every detail before construction begins.",
      features: ["Photorealistic 3D Renderings", "Structural Column Layouts", "Vastu Shastra Alignment"],
      tag: "Most Popular",
    },
    {
      icon: Building,
      title: "Residential Turnkey Construction",
      subtitle: "आवासीय भवन निर्माण",
      description:
        "Comprehensive house construction from excavation to finishing. We manage labor, materials, structural safety, and finishing with zero hassle for homeowners.",
      features: ["Certified Fe-550 TMT Steel", "Strict Curing Periods", "Complete Key Handover"],
      tag: "Turnkey",
    },
    {
      icon: Store,
      title: "Commercial & Retail Complexes",
      subtitle: "व्यावसायिक भवन एवं कॉम्प्लेक्स",
      description:
        "Robust structural design and execution for multi-storey shopping complexes, showrooms, hospitals, and office spaces with heavy traffic engineering.",
      features: ["Heavy Load Capacities", "Modern Facade Systems", "Fire & Safety Norms"],
      tag: "Commercial",
    },
    {
      icon: Layers,
      title: "Foundation & RCC Engineering",
      subtitle: "मजबूत नींव एवं पिलर कार्य",
      description:
        "Scientific soil testing and reinforced concrete foundation design engineered for Bihar's alluvial terrain to guarantee seismic and flood resilience.",
      features: ["Deep Column Foundations", "Vibrator Compacted Concrete", "Anti-Termite Treatment"],
      tag: "Engineering",
    },
    {
      icon: Palette,
      title: "Interior Design & Fitouts",
      subtitle: "आधुनिक इंटीरियर डिजाइनिंग",
      description:
        "Bespoke interior concepts, modular kitchen design, decorative POP ceiling work, and atmospheric lighting solutions that enhance space and luxury.",
      features: ["Modular Kitchen & Wardrobes", "Ambient LED Lighting", "Premium Wall Paneling"],
      tag: "Interiors",
    },
    {
      icon: Wrench,
      title: "Renovation & Structural Expansion",
      subtitle: "भवन नवीनीकरण एवं विस्तार",
      description:
        "Add new floors, modernize aging facades, repair dampness, and structurally reinforce existing properties with certified civil engineering solutions.",
      features: ["Floor Additions", "Waterproofing Solutions", "Facade Modernization"],
      tag: "Renovation",
    },
  ];

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
            Our Core Specializations
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive Construction &amp; Architectural Services
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            From initial sketch to the final coat of paint, Mother&apos;s Design &amp; Construction delivers benchmark structural engineering and modern aesthetics.
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
                  <span>Inquire for this Service</span>
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
