"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Eye, MapPin, Tag, ExternalLink, X, ChevronLeft, ChevronRight, ShieldCheck, MessageCircle } from "lucide-react";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "G+3 Modern Architectural 3D Elevation",
      subtitle: "3D बहुमंजिला आवासीय व कमर्शियल एलिवेशन",
      category: "architecture",
      categoryLabel: "3D Architecture",
      image: "/images/gmap_1.jpg",
      location: "Pipra, Supaul (Bihar)",
      specs: "G+3 Contemporary Elevation • Modern Glass Balconies • Exterior Texture Accents",
      source: "Google Maps Upload",
    },
    {
      id: 2,
      title: "Main Bazar Roadfront Commercial Plaza",
      subtitle: "पिपरा बाज़ार मुख्य मार्ग व्यावसायिक प्रोजेक्ट",
      category: "commercial",
      categoryLabel: "Commercial Site",
      image: "/images/gmap_2.jpg",
      location: "Bazar, Pipra - Simariya Rd",
      specs: "Retail Ground Frontage • High-Density Footfall Civil Design",
      source: "Google Maps Upload",
    },
    {
      id: 3,
      title: "Multi-Storey Commercial Superstructure",
      subtitle: "व्यावसायिक भवन संरचना व फ्रेमिंग",
      category: "commercial",
      categoryLabel: "Commercial Site",
      image: "/images/gmap_3.jpg",
      location: "Pipra Commercial Corridor",
      specs: "RCC Beam Grid • Seismic Zone V Earthquake Resistant Design",
      source: "Google Maps Upload",
    },
    {
      id: 4,
      title: "Heavy RCC Pillar & Foundation Grid",
      subtitle: "मजबूत पिलर एवं बेसमेंट ग्रिड कार्य",
      category: "engineering",
      categoryLabel: "Civil Engineering",
      image: "/images/gmap_4.jpg",
      location: "Pipra Industrial Sector",
      specs: "M25 Grade Ready Mix Concrete • Anti-Moisture Barrier Plinth",
      source: "Google Maps Upload",
    },
    {
      id: 5,
      title: "Luxury Duplex Residence & Villa Facade",
      subtitle: "प्रीमियम डुप्लेक्स विला निर्माण",
      category: "residential",
      categoryLabel: "Residential Villa",
      image: "/images/gmap_5.jpg",
      location: "Pipra Residential Hub",
      specs: "Vastu Shastra Compliant Layout • Integrated Car Porch • High Boundary Walls",
      source: "Google Maps Upload",
    },
    {
      id: 6,
      title: "Architectural Exterior Facade & Louver Details",
      subtitle: "आधुनिक एक्सटीरियर एलिवेशन फिनिशिंग",
      category: "architecture",
      categoryLabel: "3D Architecture",
      image: "/images/gmap_6.jpg",
      location: "Simariya Road, Bihar",
      specs: "Modern Wooden Louvers • Weather-Shield Apex Ultima Coating",
      source: "Google Maps Upload",
    },
    {
      id: 7,
      title: "Active Structural Site Execution",
      subtitle: "लाइव निर्माण कार्य एवं पिलर कास्टिंग",
      category: "engineering",
      categoryLabel: "Civil Engineering",
      image: "/images/gmap_7.jpg",
      location: "Pipra Bazar Perimeter",
      specs: "Certified Fe-550D TMT Rebar Ties • Mechanical Compaction",
      source: "Google Maps Upload",
    },
    {
      id: 8,
      title: "Heavy RCC Slab Shuttering & Reinforcement",
      subtitle: "छत ढ़लाई एवं बीम सुदृढ़ीकरण ग्रिड",
      category: "engineering",
      categoryLabel: "Civil Engineering",
      image: "/images/gmap_8.jpg",
      location: "Near Post Office, Pipra",
      specs: "Dual Layer Steel Mesh • 21-Day Water Ponding Curing Process",
      source: "Google Maps Upload",
    },
    {
      id: 9,
      title: "Completed Contemporary Family Villa",
      subtitle: "पूर्ण आवासीय भवन एवं फिनिशिंग",
      category: "residential",
      categoryLabel: "Residential Villa",
      image: "/images/gmap_9.jpg",
      location: "Pipra Suburban Enclave",
      specs: "Turnkey Handover • Premium Tile Work & Electrical Infrastructure",
      source: "Google Maps Upload",
    },
    {
      id: 10,
      title: "3D Elevation Modern Balcony Design",
      subtitle: "3D बालकनी एलिवेशन व रेलिंग डिजाइन",
      category: "architecture",
      categoryLabel: "3D Architecture",
      image: "/images/gmap_10.jpg",
      location: "Supaul District, Bihar",
      specs: "Tempered Glass Railing • Concealed Accent LED Grooves",
      source: "Google Maps Upload",
    },
    {
      id: 11,
      title: "Commercial Retail Storefront Engineering",
      subtitle: "दुकान एवं शोरूम फ्रंट संरचना",
      category: "commercial",
      categoryLabel: "Commercial Site",
      image: "/images/gmap_11.jpg",
      location: "Pipra Central Market",
      specs: "Wide Span Rolling Shutter Openings • Robust Lintels",
      source: "Google Maps Upload",
    },
    {
      id: 12,
      title: "Engineered Plinth & Moisture Barrier",
      subtitle: "प्लिंथ बीम एवं सीलन-रोधी इंजीनियरिंग",
      category: "engineering",
      categoryLabel: "Civil Engineering",
      image: "/images/gmap_12.jpg",
      location: "Pipra - Simariya Road",
      specs: "DPC Chemical Treatment • High-Grade Earth Compaction",
      source: "Google Maps Upload",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const handleNextPhoto = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((selectedPhotoIndex + 1) % filteredProjects.length);
  };

  const handlePrevPhoto = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex(
      (selectedPhotoIndex - 1 + filteredProjects.length) % filteredProjects.length
    );
  };

  const currentModalProject =
    selectedPhotoIndex !== null ? filteredProjects[selectedPhotoIndex] : null;

  return (
    <section id="projects" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-500/20">
              Authentic Google Maps Portfolio (12 Live Projects)
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Real Work &amp; Ground Deliveries
            </h2>
            <p className="text-slate-400 max-w-xl text-sm sm:text-base">
              Browse through authentic high-definition photographs of our completed 3D architectural elevations, active commercial plazas, and heavy civil foundations.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { key: "all", label: "All Projects (12)" },
              { key: "architecture", label: "3D Architecture" },
              { key: "commercial", label: "Commercial Sites" },
              { key: "residential", label: "Residential Villas" },
              { key: "engineering", label: "Foundations & Civil" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => {
                  setActiveFilter(tab.key);
                  setSelectedPhotoIndex(null);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeFilter === tab.key
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/40"
                    : "bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 12-Card Responsive Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="group bg-slate-800/80 rounded-2xl overflow-hidden border border-slate-700/80 shadow-xl hover:border-blue-500/60 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Frame with Click to Zoom */}
              <div
                onClick={() => setSelectedPhotoIndex(idx)}
                className="relative h-64 w-full overflow-hidden bg-slate-950 cursor-pointer"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                {/* Source Verified Tag */}
                <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-bold text-emerald-400 border border-slate-700 flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>{project.source}</span>
                </div>

                <div className="absolute top-3 right-3 bg-blue-600/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-extrabold text-white flex items-center space-x-1">
                  <Tag className="w-3 h-3" />
                  <span>{project.categoryLabel}</span>
                </div>

                {/* Hover Quick Zoom Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                  <span className="px-4 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs shadow-lg flex items-center space-x-1.5">
                    <Eye className="w-4 h-4" />
                    <span>View High-Res Photo</span>
                  </span>
                </div>

                {/* Bottom Overlay Header */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="flex items-center space-x-1 text-[11px] text-blue-300 font-medium mb-0.5">
                    <MapPin className="w-3 h-3" />
                    <span>{project.location}</span>
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-4 bg-slate-800/50 flex flex-col justify-between flex-grow">
                <div>
                  <div className="text-[11px] text-slate-400 font-medium">{project.subtitle}</div>
                  <p className="text-xs text-slate-300 font-semibold mt-1 line-clamp-2">
                    {project.specs}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-700/60 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedPhotoIndex(idx)}
                    className="text-xs text-blue-400 hover:text-blue-300 font-bold flex items-center space-x-1"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Enlarge</span>
                  </button>

                  <a
                    href={`https://wa.me/918264360443?text=Hello%20Mother's%20Design,%20I%20am%20interested%20in%20a%20construction%20project%20similar%20to:%20${encodeURIComponent(
                      project.title
                    )}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-[11px] font-bold px-3 py-1.5 bg-blue-600/30 hover:bg-blue-600 text-blue-200 hover:text-white rounded-lg border border-blue-500/40 transition-colors"
                  >
                    <span>Inquire</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View on Google Maps Link */}
        <div className="mt-14 text-center">
          <a
            href="https://maps.app.goo.gl/qD4B79n1rVwG1j7z6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-sm font-bold text-blue-400 hover:text-blue-300 bg-slate-800/90 px-6 py-3.5 rounded-xl border border-slate-700 hover:border-blue-500 transition-all shadow-md"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>View All Reviews, Client Posts &amp; Ratings on Google Maps</span>
          </a>
        </div>
      </div>

      {/* High-Resolution Lightbox Modal */}
      {currentModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          <button
            onClick={() => setSelectedPhotoIndex(null)}
            className="absolute top-5 right-5 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white z-50 transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Arrow */}
          <button
            onClick={handlePrevPhoto}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white z-50 transition-colors hidden sm:flex items-center justify-center"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Arrow */}
          <button
            onClick={handleNextPhoto}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white z-50 transition-colors hidden sm:flex items-center justify-center"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Content */}
          <div className="max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl flex flex-col max-h-[90vh]">
            {/* Image Container */}
            <div className="relative w-full h-[55vh] sm:h-[65vh] bg-black">
              <Image
                src={currentModalProject.image}
                alt={currentModalProject.title}
                fill
                priority
                className="object-contain"
              />
            </div>

            {/* Bottom Meta */}
            <div className="p-6 bg-slate-900 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <div className="flex items-center space-x-2 text-xs text-blue-400 font-bold mb-1">
                  <span>{currentModalProject.categoryLabel}</span>
                  <span>•</span>
                  <span>{currentModalProject.location}</span>
                </div>
                <h4 className="text-xl font-extrabold text-white">{currentModalProject.title}</h4>
                <p className="text-xs text-slate-400 mt-1">{currentModalProject.specs}</p>
              </div>

              <div className="flex items-center space-x-3 w-full sm:w-auto">
                <a
                  href={`https://wa.me/918264360443?text=Hello%20Mother's%20Design,%20I%20am%20viewing%20project:%20${encodeURIComponent(
                    currentModalProject.title
                  )}%20and%20want%20to%20know%20the%20cost%20and%20drawings.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs flex items-center justify-center space-x-2 shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Inquire on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
