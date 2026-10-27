"use client";

import React from "react";
import { CheckCircle, ExternalLink, Shield, Star, Globe, Building } from "lucide-react";

export default function ListingPlatforms() {
  const platforms = [
    {
      name: "Google Business Profile",
      category: "Google Maps Verified Business",
      rating: "5.0 ★ (22 Reviews)",
      status: "Verified & Active",
      badgeColor: "bg-blue-500/10 text-blue-700 border-blue-200",
      description: "Direct owner listing with authentic photos, customer reviews, and GPS directions in Pipra.",
      linkText: "View on Google Maps",
      url: "https://maps.app.goo.gl/qD4B79n1rVwG1j7z6",
    },
    {
      name: "Justdial",
      category: "Certified Civil Contractors",
      rating: "Top Rated in Pipra Bazar",
      status: "Verified Listing",
      badgeColor: "bg-amber-500/10 text-amber-800 border-amber-200",
      description: "Listed under Building Contractors & Civil Engineers, Near Post Office, Pipra - Simariya Road, Bihar.",
      linkText: "Verified Directory Listing",
      url: "https://www.justdial.com",
    },
    {
      name: "IndiaMART & B2B Networks",
      category: "Regional Construction Supplier",
      rating: "Active Profile",
      status: "Trade Verified",
      badgeColor: "bg-emerald-500/10 text-emerald-800 border-emerald-200",
      description: "Registered civil contracting services for residential homes, shopping complexes, and structural RCC work.",
      linkText: "Commercial Network",
      url: "https://www.indiamart.com",
    },
    {
      name: "Instagram & Digital Showcase",
      category: "Architectural Portfolio",
      rating: "3D Elevation Updates",
      status: "Active Media",
      badgeColor: "bg-purple-500/10 text-purple-800 border-purple-200",
      description: "Regular design showcases of 3D elevations, structural column grids, and walkthrough previews.",
      linkText: "Explore Visuals",
      url: "https://www.instagram.com",
    },
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider">
            <Shield className="w-3.5 h-3.5 text-blue-600" />
            <span>Multi-Platform Verification &amp; Trust</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Officially Listed &amp; Verified Across Leading Portals
          </h2>
          <p className="text-slate-600 text-sm">
            Mother&apos;s Design &amp; Construction is recognized across major national business directories, trade databases, and regional consumer portals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((p, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-blue-500 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className={`text-[11px] font-extrabold px-2.5 py-0.5 rounded border ${p.badgeColor}`}>
                    {p.status}
                  </span>
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
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
