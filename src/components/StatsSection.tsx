"use client";

import React from "react";
import { Building2, Star, Calendar, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function StatsSection() {
  const { t } = useLanguage();

  const stats = [
    {
      icon: Building2,
      value: "150+",
      label: t("stats.projects"),
      detail: t("stats.projectsSub"),
      accent: "from-blue-600 to-sky-500",
      bgLight: "bg-blue-50 text-blue-600 border-blue-200",
    },
    {
      icon: Star,
      value: "5.0 ★",
      label: t("stats.rating"),
      detail: t("stats.ratingSub"),
      accent: "from-amber-500 to-amber-600",
      bgLight: "bg-amber-50 text-amber-600 border-amber-200",
    },
    {
      icon: Calendar,
      value: "10+",
      label: t("stats.exp"),
      detail: t("stats.expSub"),
      accent: "from-indigo-600 to-blue-600",
      bgLight: "bg-indigo-50 text-indigo-600 border-indigo-200",
    },
    {
      icon: ShieldCheck,
      value: "100%",
      label: t("stats.guarantee"),
      detail: t("stats.guaranteeSub"),
      accent: "from-emerald-600 to-teal-500",
      bgLight: "bg-emerald-50 text-emerald-600 border-emerald-200",
    },
  ];

  return (
    <section className="bg-white border-y border-slate-200 py-10 relative z-20 shadow-sm overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group p-5 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 bg-gradient-to-b from-white to-slate-50 flex items-start space-x-4"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${stat.bgLight} flex items-center justify-center shrink-0 border group-hover:scale-110 transition-transform duration-300 shadow-sm`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-3xl font-black text-slate-900 tracking-tight group-hover:text-blue-700 transition-colors">
                    {stat.value}
                  </div>
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
