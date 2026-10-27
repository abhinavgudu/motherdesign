"use client";

import React from "react";
import { Check, X, ShieldCheck, Clock, Award, Users } from "lucide-react";

export default function WhyChooseUs() {
  const comparison = [
    {
      feature: "Architectural 3D Preview",
      mothers: "Full 3D Elevation & 2D Floor Plan with Vastu before construction",
      local: "Hand-drawn sketches or no 3D modeling at all",
    },
    {
      feature: "Cost Transparency",
      mothers: "Legally binding BOQ with fixed rate contract (No sudden cost spikes)",
      local: "Frequent verbal cost revisions & surprise bills during slab casting",
    },
    {
      feature: "Structural Supervision",
      mothers: "Certified Civil Engineers & Site Supervisors on ground",
      local: "Managed entirely by local masons (राजमिस्त्री) without engineering checks",
    },
    {
      feature: "Material Quality Verification",
      mothers: "Certified TMT Fe-550D Rebars, tested sand & branded Grade 53 cement",
      local: "Unbranded or local grade materials prone to rust & dampness",
    },
    {
      feature: "Delivery Timelines",
      mothers: "Guaranteed milestone dates with daily WhatsApp photo progress",
      local: "Frequent unexplained delays lasting several months",
    },
    {
      feature: "Post-Handover Warranty",
      mothers: "1-Year structural & plumbing warranty with prompt service",
      local: "Zero accountability once the final payment is cleared",
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
            The Professional Difference
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Discerning Property Owners Choose Mother&apos;s Design
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Constructing a home or commercial building is a once-in-a-lifetime investment. Here is how we protect your money, time, and safety.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-lg">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 text-white text-xs sm:text-sm">
                <th className="py-5 px-6 font-bold uppercase tracking-wider w-1/4">Key Standard</th>
                <th className="py-5 px-6 font-bold uppercase tracking-wider w-5/12 bg-blue-900/80 text-blue-200 border-x border-slate-800">
                  <div className="flex items-center space-x-2">
                    <ShieldCheck className="w-5 h-5 text-blue-400" />
                    <span>Mother&apos;s Design &amp; Construction</span>
                  </div>
                </th>
                <th className="py-5 px-6 font-bold uppercase tracking-wider w-1/3 text-slate-400">
                  Unorganized Local Contractors (ठेकेदार)
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
            <h4 className="font-bold text-slate-900 text-base mb-1">Seismic Zone Resilient</h4>
            <p className="text-xs text-slate-600">Engineered specifically to withstand North Bihar&apos;s seismic and flood dynamics.</p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 mx-auto flex items-center justify-center mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-slate-900 text-base mb-1">Milestone Payments</h4>
            <p className="text-xs text-slate-600">You pay only when physical construction milestones (plinth, slab, walls) are verified.</p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 mx-auto flex items-center justify-center mb-4">
              <Award className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-slate-900 text-base mb-1">Grade-A Certification</h4>
            <p className="text-xs text-slate-600">Mill test certificates for steel and cube testing for concrete compressive strength.</p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 mx-auto flex items-center justify-center mb-4">
              <Users className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-slate-900 text-base mb-1">Dedicated Project Lead</h4>
            <p className="text-xs text-slate-600">One dedicated project manager as single point of contact throughout the project.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
