"use client";

import React from "react";
import { Building2, Star, Calendar, ShieldCheck } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      icon: Building2,
      value: "150+",
      label: "Completed Projects",
      detail: "Residential homes, commercial plazas & villas",
    },
    {
      icon: Star,
      value: "5.0 ★",
      label: "Google Maps Rating",
      detail: "100% positive verified client feedback (22 reviews)",
    },
    {
      icon: Calendar,
      value: "10+",
      label: "Years of Experience",
      detail: "Serving Supaul, Pipra, Saharsa & North Bihar",
    },
    {
      icon: ShieldCheck,
      value: "100%",
      label: "Structural Guarantee",
      detail: "Tested raw materials & earthquake-resilient design",
    },
  ];

  return (
    <section className="bg-white border-y border-slate-200 py-10 relative z-20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className={`flex items-start space-x-4 ${index !== 0 ? "sm:pl-6 pt-6 sm:pt-0" : ""}`}>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 border border-blue-100">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-3xl font-black text-slate-900 tracking-tight">{stat.value}</div>
                  <div className="text-sm font-bold text-slate-800 mt-0.5">{stat.label}</div>
                  <div className="text-xs text-slate-500 mt-1 leading-normal">{stat.detail}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
