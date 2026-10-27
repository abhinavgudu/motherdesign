"use client";

import React, { useState } from "react";
import { Calculator, ArrowRight, CheckCircle2, FileSpreadsheet, Building2 } from "lucide-react";

export default function CostEstimator() {
  const [area, setArea] = useState<number>(1200);
  const [floors, setFloors] = useState<number>(2);
  const [packageType, setPackageType] = useState<"standard" | "premium" | "luxury">("premium");

  const rates = {
    standard: 1450,
    premium: 1750,
    luxury: 2150,
  };

  const totalArea = area * floors;
  const estimatedCost = totalArea * rates[packageType];
  const steelTons = ((totalArea * 3.5) / 1000).toFixed(1);
  const cementBags = Math.round(totalArea * 0.45);
  const durationMonths = floors === 1 ? "5 - 6" : floors === 2 ? "7 - 9" : "10 - 12";

  const formatINR = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="calculator" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
            Transparent Budgeting Tool
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Interactive Construction Cost Calculator
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Estimate your building expenditure in Bihar with real market rates. Get material estimates and a customized breakdown instantly.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12">
          {/* Controls Column */}
          <div className="lg:col-span-7 p-6 sm:p-10 space-y-8 border-b lg:border-b-0 lg:border-r border-slate-200">
            {/* 1. Plot Area */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-bold text-slate-800 flex items-center space-x-2">
                  <Building2 className="w-4 h-4 text-blue-600" />
                  <span>Plot / Floor Area (Square Feet):</span>
                </label>
                <span className="text-base font-extrabold text-blue-600 bg-blue-50 px-3 py-1 rounded-lg border border-blue-100">
                  {area} sq. ft.
                </span>
              </div>
              <input
                type="range"
                min="500"
                max="5000"
                step="50"
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-semibold">
                <span>500 sq ft</span>
                <span>2,500 sq ft</span>
                <span>5,000 sq ft</span>
              </div>
            </div>

            {/* 2. Number of Floors */}
            <div>
              <label className="block text-sm font-bold text-slate-800 mb-3">
                Number of Floors (Storeys):
              </label>
              <div className="grid grid-cols-4 gap-3">
                {[
                  { count: 1, label: "G (1 Floor)" },
                  { count: 2, label: "G+1 (2 Floors)" },
                  { count: 3, label: "G+2 (3 Floors)" },
                  { count: 4, label: "G+3 (4 Floors)" },
                ].map((f) => (
                  <button
                    key={f.count}
                    type="button"
                    onClick={() => setFloors(f.count)}
                    className={`py-3 px-2 rounded-xl text-xs font-bold transition-all border ${
                      floors === f.count
                        ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/30"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Package Selection */}
            <div>
              <label className="block text-sm font-bold text-slate-800 mb-3">
                Material &amp; Finishing Package:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  {
                    id: "standard",
                    title: "Standard",
                    rate: "₹1,450 / sq.ft",
                    features: "ISI TMT Steel, Grade 43 Cement, Vitrified 2x2 Tiles",
                  },
                  {
                    id: "premium",
                    title: "Premium (Popular)",
                    rate: "₹1,750 / sq.ft",
                    features: "Tata Tiscon / Jindal, UltraTech, Jaquar Sanitaryware",
                  },
                  {
                    id: "luxury",
                    title: "Luxury Turnkey",
                    rate: "₹2,150 / sq.ft",
                    features: "Teak Wood, Italian Marble Accents, False Ceiling, Smart Electricals",
                  },
                ].map((pkg) => (
                  <div
                    key={pkg.id}
                    onClick={() => setPackageType(pkg.id as any)}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      packageType === pkg.id
                        ? "border-blue-600 bg-blue-50/50 shadow-sm"
                        : "border-slate-200 hover:border-slate-300 bg-white"
                    }`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="font-bold text-sm text-slate-900">{pkg.title}</h4>
                      {packageType === pkg.id && (
                        <CheckCircle2 className="w-4 h-4 text-blue-600" />
                      )}
                    </div>
                    <div className="text-xs font-extrabold text-blue-600 mb-2">{pkg.rate}</div>
                    <p className="text-[11px] text-slate-500 leading-tight">{pkg.features}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Results Summary Column */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#0b192c] to-[#0f2444] text-white p-6 sm:p-10 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-blue-400 text-xs font-bold uppercase tracking-wider">
                <Calculator className="w-4 h-4" />
                <span>Instant Construction Estimate</span>
              </div>

              <div>
                <div className="text-xs text-slate-400 uppercase font-bold tracking-wider">
                  Estimated Total Budget:
                </div>
                <div className="text-3xl sm:text-4xl font-black text-white mt-1 text-emerald-400">
                  {formatINR(estimatedCost)}
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  Total Built-up Area: <strong className="text-white">{totalArea.toLocaleString()} sq. ft.</strong> ({floors} Floors)
                </div>
              </div>

              {/* Material Breakdown */}
              <div className="space-y-3 pt-4 border-t border-slate-700">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Material &amp; Timeline Estimations:
                </div>

                <div className="flex justify-between items-center text-sm py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">Approx. TMT Steel:</span>
                  <span className="font-bold text-white">~{steelTons} Metric Tons</span>
                </div>

                <div className="flex justify-between items-center text-sm py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">Approx. Cement:</span>
                  <span className="font-bold text-white">~{cementBags} Bags</span>
                </div>

                <div className="flex justify-between items-center text-sm py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">Construction Timeline:</span>
                  <span className="font-bold text-white">{durationMonths} Months</span>
                </div>
              </div>
            </div>

            {/* Action CTA on WhatsApp */}
            <div className="pt-8 space-y-3">
              <a
                href={`https://wa.me/918264360443?text=Hello%20Mother's%20Design,%20I%20used%20your%20cost%20calculator.%20Details:%20Plot%20Area:%20${area}sqft,%20Floors:%20${floors},%20Package:%20${packageType.toUpperCase()},%20Estimate:%20${encodeURIComponent(
                  formatINR(estimatedCost)
                )}.%20Please%20send%20me%20a%20detailed%20BOQ%20quotation.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2 text-sm"
              >
                <FileSpreadsheet className="w-4 h-4" />
                <span>Get Detailed BOQ on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <p className="text-[11px] text-center text-slate-400 leading-tight">
                *Estimates are indicative based on standard soil conditions in Pipra/Supaul. Exact BOQ provided after site survey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
