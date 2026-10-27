"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Clock, Star, Menu, X, Building2, ArrowRight, Zap } from "lucide-react";

interface NavbarProps {
  onOpenUrgent?: () => void;
}

export default function Navbar({ onOpenUrgent }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full shadow-sm">
      {/* Top Corporate & Urgent Alert Bar */}
      <div className="bg-[#0b192c] text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-6 flex-wrap">
            <div className="flex items-center space-x-1.5">
              <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>Bazar, Pipra - Simariya Rd, Pipra, Bihar 852218</span>
            </div>
            <div className="hidden md:flex items-center space-x-1.5">
              <Clock className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>Open 7 Days: 9:00 AM – 5:00 PM</span>
            </div>
          </div>
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Urgent Site Visit Trigger */}
            <button
              onClick={onOpenUrgent}
              className="inline-flex items-center space-x-1 bg-red-600/90 hover:bg-red-600 text-white px-2.5 py-0.5 rounded-full font-bold text-[11px] animate-pulse transition-all shadow-sm"
            >
              <Zap className="w-3 h-3 fill-current" />
              <span>Urgent Consultation</span>
            </button>

            <a
              href="https://maps.app.goo.gl/qD4B79n1rVwG1j7z6"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center space-x-1 bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded border border-amber-500/30 font-medium hover:bg-amber-500/20 transition-colors"
            >
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>5.0 (22 Reviews)</span>
            </a>
            <a
              href="tel:+918264360443"
              className="flex items-center space-x-1 text-white font-semibold hover:text-blue-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>+91 82643 60443</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm flex items-center justify-center p-0.5 group-hover:scale-105 group-hover:shadow-md transition-all shrink-0">
              <Image
                src="/images/logo.jpg"
                alt="Mother's Design & Construction Logo"
                width={48}
                height={48}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div>
              <span className="block text-lg sm:text-xl font-black tracking-tight text-[#0f2444] group-hover:text-blue-700 transition-colors">
                MOTHER&apos;S DESIGN
              </span>
              <span className="block text-[11px] font-bold tracking-wider text-amber-600 uppercase flex items-center gap-1.5">
                <span>&amp; CONSTRUCTION</span>
                <span className="inline-block w-1 h-1 rounded-full bg-slate-300" />
                <span className="text-slate-500 font-medium">मदर&apos;एस निर्माण</span>
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-semibold text-slate-700">
            <Link href="#about" className="hover:text-blue-600 transition-colors">
              About Us
            </Link>
            <Link href="#services" className="hover:text-blue-600 transition-colors">
              Services
            </Link>
            <Link href="#projects" className="hover:text-blue-600 transition-colors">
              Projects (12)
            </Link>
            <Link href="#why-us" className="hover:text-blue-600 transition-colors">
              Why Choose Us
            </Link>
            <Link href="#calculator" className="hover:text-blue-600 transition-colors">
              Cost Estimator
            </Link>
            <Link href="#reviews" className="hover:text-blue-600 transition-colors">
              Reviews
            </Link>
            <Link href="#contact" className="hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={onOpenUrgent}
              className="text-xs font-bold text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 border border-red-200 px-3.5 py-2 rounded-lg transition-colors flex items-center space-x-1"
            >
              <Zap className="w-3.5 h-3.5 fill-current text-red-600" />
              <span>Urgent Visit</span>
            </button>

            <a
              href="https://wa.me/918264360443?text=Hello%20Mother's%20Design%20%26%20Construction,%20I%20am%20interested%20in%20a%20construction%20quotation."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-semibold text-sm shadow-md hover:shadow-lg transition-all flex items-center space-x-2"
            >
              <span>Get Free Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <button
            onClick={() => {
              setIsOpen(false);
              onOpenUrgent?.();
            }}
            className="w-full text-center bg-red-600 text-white py-2.5 rounded-lg font-extrabold text-sm flex items-center justify-center space-x-2 shadow-md mb-2"
          >
            <Zap className="w-4 h-4 fill-current" />
            <span>Request Urgent Site Consultation</span>
          </button>

          <Link
            href="#about"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100"
          >
            About Us
          </Link>
          <Link
            href="#services"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100"
          >
            Services
          </Link>
          <Link
            href="#projects"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100"
          >
            Real Projects (12 Photos)
          </Link>
          <Link
            href="#why-us"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100"
          >
            Why Choose Us
          </Link>
          <Link
            href="#calculator"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100"
          >
            Cost Estimator
          </Link>
          <Link
            href="#reviews"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100"
          >
            Reviews (5.0★)
          </Link>
          <Link
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100"
          >
            Contact &amp; Location
          </Link>
          <div className="pt-2 flex flex-col space-y-2">
            <a
              href="tel:+918264360443"
              className="w-full text-center bg-slate-900 text-white py-2.5 rounded-lg font-semibold text-sm flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call +91 82643 60443</span>
            </a>
            <a
              href="https://wa.me/918264360443"
              className="w-full text-center bg-emerald-600 text-white py-2.5 rounded-lg font-semibold text-sm"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
