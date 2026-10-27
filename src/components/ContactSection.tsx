"use client";

import React, { useState } from "react";
import { MapPin, Phone, Clock, Mail, Send, CheckCircle2, Building, MessageSquare } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Residential Construction",
    area: "",
    location: "Pipra / Supaul",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Format WhatsApp inquiry text
    const text = `Hello Mother's Design & Construction,%0A%0AMy Name: ${encodeURIComponent(
      formData.name
    )}%0APhone: ${encodeURIComponent(formData.phone)}%0AService Needed: ${encodeURIComponent(
      formData.service
    )}%0APlot / Area: ${encodeURIComponent(formData.area)}%0ALocation: ${encodeURIComponent(
      formData.location
    )}%0ANote: ${encodeURIComponent(formData.message)}`;

    // Open WhatsApp in new tab
    window.open(`https://wa.me/918264360443?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Consult With Our Principal Architect &amp; Engineers
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Visit our office in Pipra or fill in your project requirements for an instant consultation and site visit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Real Business Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#0b192c] text-white p-8 rounded-3xl shadow-xl space-y-6">
              <h3 className="text-2xl font-bold text-white border-b border-slate-800 pb-4">
                Office Information
              </h3>

              <div className="space-y-5 text-sm">
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/30">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Registered Office Address</h4>
                    <p className="text-slate-300 mt-0.5 leading-relaxed">
                      Bazar, Pipra - Simariya Rd, Pipra, Bihar 852218
                    </p>
                    <a
                      href="https://maps.app.goo.gl/qD4B79n1rVwG1j7z6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-1 text-xs text-blue-400 hover:text-blue-300 underline font-semibold"
                    >
                      Open in Google Maps Navigation →
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/30">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Direct Calling &amp; WhatsApp</h4>
                    <p className="text-slate-300 mt-0.5">
                      <a href="tel:+918264360443" className="hover:text-blue-400 transition-colors font-bold text-base">
                        +91 82643 60443
                      </a>
                    </p>
                    <p className="text-xs text-emerald-400 font-semibold mt-0.5">Available for instant WhatsApp inquiries</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/30">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Business Hours</h4>
                    <p className="text-slate-300 mt-0.5">
                      Monday to Sunday (All 7 Days): <strong className="text-white">9:00 AM – 5:00 PM</strong>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/30">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Coverage Districts</h4>
                    <p className="text-slate-300 mt-0.5">
                      Pipra, Supaul, Simariya, Saharsa, Madhepura, and North Bihar.
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="pt-4 border-t border-slate-800">
                <a
                  href="https://wa.me/918264360443?text=Hello%20Mother's%20Design,%20I%20would%20like%20to%20discuss%20a%20construction%20project%20in%20Bihar."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-4 rounded-xl shadow-md transition-all flex items-center justify-center space-x-2 text-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Start Instant WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Maps Container */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-md h-64 bg-slate-200 relative">
              <iframe
                title="Mother's Design & Construction Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14337.892740209217!2d86.78846399999999!3d26.1604125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ee4fa33172c655%3A0x5156ffa13120f800!2sMother&#39;s%20Design%20%26%20Construction!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column: Inquiry & Consultation Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl">
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-2">
                Request a Free Site Inspection &amp; Estimate
              </h3>
              <p className="text-slate-500 text-sm mb-8">
                Share your site details and our civil engineer will connect with you within 2 hours.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>
                    Thank you! Your inquiry was prepared and redirected to our WhatsApp line for immediate attention.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm text-slate-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Required Service *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm text-slate-900 bg-white"
                    >
                      <option value="3D Elevation & Blueprints">3D Elevation &amp; Blueprints</option>
                      <option value="Residential Construction">Residential Villa / House Construction</option>
                      <option value="Commercial Complex">Commercial Shopping Complex</option>
                      <option value="Foundation & Civil Work">Foundation &amp; Civil Framing</option>
                      <option value="Interior Design">Modern Interior Designing</option>
                      <option value="Renovation & Expansion">Building Renovation &amp; Expansion</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Plot Size / Built-up Area
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 1200 sq.ft or 2 Katha"
                      value={formData.area}
                      onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm text-slate-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Plot / Site Location (City or Village)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Bazar Pipra, Simariya Rd, Supaul"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Project Details / Specific Notes
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your vision, budget expectations, timeline, or number of storeys..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm text-slate-900"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-blue-600/40 transition-all flex items-center justify-center space-x-2 text-base"
                >
                  <Send className="w-5 h-5" />
                  <span>Submit Inquiry &amp; Connect on WhatsApp</span>
                </button>

                <p className="text-xs text-center text-slate-400 mt-2">
                  🔒 Your data is confidential. We do not spam. All project estimates follow certified civil codes.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
