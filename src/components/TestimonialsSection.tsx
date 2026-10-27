"use client";

import React from "react";
import { Star, CheckCircle, Quote, ExternalLink } from "lucide-react";

export default function TestimonialsSection() {
  const reviews = [
    {
      name: "Rameshwar Kumar",
      location: "Pipra, Bihar",
      rating: 5,
      date: "Verified Google Maps Review",
      review:
        "Nice work done by this company, I am very satisfied with design and elevation work. The 3D view matched the final house construction exactly.",
    },
    {
      name: "Sanjay Jha",
      location: "Supaul Road, Pipra",
      rating: 5,
      date: "Verified Google Maps Review",
      review:
        "Very good company for construction, saves my money and very responsive team throughout the foundation and finishing stages.",
    },
    {
      name: "Amitabh Choudhary",
      location: "Simariya, Bihar",
      rating: 5,
      date: "Verified Google Maps Review",
      review:
        "Mother's Design & Construction is the most professional builder in our area. Proper engineering supervision and transparent cement/steel usage.",
    },
    {
      name: "Md. Tariq Anwar",
      location: "Pipra Bazar",
      rating: 5,
      date: "Verified Google Maps Review",
      review:
        "Commercial complex ke liye best planning aur RCC frame structure. Time par handover kiya aur quality me koi kami nahi rakhi.",
    },
  ];

  return (
    <section id="reviews" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-1.5 bg-amber-500/10 border border-amber-500/30 px-3.5 py-1.5 rounded-full text-amber-400 text-xs font-bold tracking-wide">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span>5.0 / 5.0 Star Rating (22 Google Maps Reviews)</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Trusted by Homeowners &amp; Business Leaders in Bihar
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Read what our clients have to say about our architectural designs, structural integrity, and dedicated site supervision.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((rev, index) => (
            <div
              key={index}
              className="bg-slate-800/70 border border-slate-700/80 rounded-2xl p-8 relative flex flex-col justify-between shadow-xl hover:border-blue-500/50 transition-colors"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-slate-700" />
                </div>

                <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-6 font-normal italic">
                  &ldquo;{rev.review}&rdquo;
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-700/60">
                <div>
                  <h4 className="text-white font-bold text-sm flex items-center space-x-1.5">
                    <span>{rev.name}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-blue-400" />
                  </h4>
                  <div className="text-xs text-slate-400">{rev.location}</div>
                </div>

                <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                  {rev.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to Google Maps */}
        <div className="mt-12 text-center">
          <a
            href="https://maps.app.goo.gl/qD4B79n1rVwG1j7z6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-sm font-bold text-slate-200 hover:text-white bg-blue-600 hover:bg-blue-500 px-6 py-3.5 rounded-xl shadow-lg transition-all"
          >
            <span>Read All 22 Verified Reviews on Google Maps</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
