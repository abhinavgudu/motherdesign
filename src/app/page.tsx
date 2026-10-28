"use client";

import React, { useState } from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import ListingPlatforms from "@/components/ListingPlatforms";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import CostEstimator from "@/components/CostEstimator";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import UrgentContactModal from "@/components/UrgentContactModal";

export default function Home() {
  const [isUrgentOpen, setIsUrgentOpen] = useState(false);

  return (
    <LanguageProvider>
      <main className="min-h-screen flex flex-col bg-slate-50">
      {/* Navigation */}
      <Navbar onOpenUrgent={() => setIsUrgentOpen(true)} />

      {/* Hero Section */}
      <Hero />

      {/* Core Stats Bar */}
      <StatsSection />

      {/* Official Directory & Platform Verification (Google Maps, Justdial, IndiaMART) */}
      <ListingPlatforms />

      {/* About The Firm */}
      <AboutSection />

      {/* Services Grid */}
      <ServicesSection />

      {/* 12-Card Real Projects Showcase from Google Maps */}
      <ProjectsSection />

      {/* Interactive Construction Cost Calculator */}
      <CostEstimator />

      {/* Why Choose Us & Contractor Comparison */}
      <WhyChooseUs />

      {/* Verified Google Maps Testimonials (5.0★) */}
      <TestimonialsSection />

      {/* Contact, Emergency Lines & Map Embed */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Floating Action CTAs (WhatsApp, Call, Urgent Visit) */}
      <FloatingCTA />

      {/* Urgent Site Inspection & Emergency Callback Modal */}
      <UrgentContactModal
        isOpen={isUrgentOpen}
        onClose={() => setIsUrgentOpen(false)}
      />
      </main>
    </LanguageProvider>
  );
}
