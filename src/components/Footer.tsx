"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Building2, Phone, MapPin, Clock, Star, ShieldCheck, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0b192c] text-slate-300 border-t border-slate-800 text-sm">
      {/* Upper Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-white shadow-md p-0.5 shrink-0 border border-amber-400/30">
                <Image
                  src="/images/logo.jpg"
                  alt="Mother's Design & Construction Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="block text-xl font-extrabold text-white tracking-tight">
                  MOTHER&apos;S DESIGN
                </span>
                <span className="block text-xs font-semibold text-amber-400 uppercase">
                  &amp; CONSTRUCTION • मदर&apos;एस निर्माण
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Bihar&apos;s trusted civil engineering and architectural firm. Delivering 3D elevation designs, residential villas, and commercial complexes with uncompromising structural integrity.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://maps.app.goo.gl/qD4B79n1rVwG1j7z6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 bg-amber-500/10 text-amber-400 px-3 py-1.5 rounded-lg border border-amber-500/30 text-xs font-semibold hover:bg-amber-500/20 transition-colors"
              >
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>5.0 / 5.0 (22 Google Maps Reviews)</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider border-b border-slate-800 pb-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href="#about" className="hover:text-blue-400 transition-colors">
                  About the Firm
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-blue-400 transition-colors">
                  Services &amp; Specializations
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-blue-400 transition-colors">
                  Real Google Maps Projects
                </Link>
              </li>
              <li>
                <Link href="#why-us" className="hover:text-blue-400 transition-colors">
                  Why Choose Mother&apos;s Design
                </Link>
              </li>
              <li>
                <Link href="#calculator" className="hover:text-blue-400 transition-colors">
                  Construction Cost Estimator
                </Link>
              </li>
              <li>
                <Link href="#reviews" className="hover:text-blue-400 transition-colors">
                  Client Reviews &amp; Ratings
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-blue-400 transition-colors">
                  Contact &amp; Site Visit
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider border-b border-slate-800 pb-2">
              Headquarters
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Bazar, Pipra - Simariya Rd, Pipra, Bihar 852218</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:+918264360443" className="hover:text-white font-bold text-slate-200">
                  +91 82643 60443
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Mon – Sun: 9:00 AM – 5:00 PM</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Government Recognized &amp; Registered</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#07111f] py-6 border-t border-slate-800/80 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            © 2026 Mother&apos;s Design &amp; Construction. All rights reserved.
          </div>
          <div className="flex items-center space-x-4">
            <span>Designed for Excellence in Bihar</span>
            <span>•</span>
            <a
              href="https://maps.app.goo.gl/qD4B79n1rVwG1j7z6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Google Maps Listing
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
