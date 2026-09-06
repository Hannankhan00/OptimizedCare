"use client";

import React, { useState } from "react";

interface AestheticsTreatmentsGridProps {
  onOpenConsultation?: (dept: string) => void;
}

export default function AestheticsTreatmentsGrid({
  onOpenConsultation,
}: AestheticsTreatmentsGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const treatments = [
    {
      id: "anti-wrinkle",
      name: "Anti-Wrinkle Injections",
      category: "injectables",
      tag: "Botulinum Toxin Type A",
      badge: "GMC Doctor Administered",
      image: "https://images.unsplash.com/photo-1512290900672-1f41d9a26370?auto=format&fit=crop&w=800&q=80",
      description:
        "Precision micro-dosing targeting forehead lines, frown furrows, and crow's feet, preserving natural expression while smoothing dynamic creasing.",
      duration: "30 mins",
      downtime: "None (Zero)",
      longevity: "3–4 Months",
      price: "From £220",
    },
    {
      id: "dermal-fillers",
      name: "Hyaluronic Dermal Contouring",
      category: "injectables",
      tag: "Cheeks, Jawline & Lips",
      badge: "Ultrasound-Guided",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
      description:
        "Subtle structural restoration using premium Juvederm Vycross and Teoxane gels to replace lost bone and fat volume with anatomical precision.",
      duration: "45 mins",
      downtime: "24–48 Hours",
      longevity: "9–18 Months",
      price: "From £350",
    },
    {
      id: "profhilo",
      name: "Profhilo® Bioremodelling",
      category: "skin-boosters",
      tag: "100% Pure Hyaluronic Acid",
      badge: "Award-Winning",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
      description:
        "High-concentration thermal hyaluronic acid delivered via 5 BAP injection points to stimulate 4 types of collagen and elastin, restoring tissue firmness.",
      duration: "30 mins",
      downtime: "Minimal (4–6 hrs)",
      longevity: "6 Months",
      price: "From £395",
    },
    {
      id: "morpheus8",
      name: "Morpheus8 RF Microneedling",
      category: "devices",
      tag: "Subdermal Adipose Remodeling",
      badge: "Gold Standard Tightening",
      image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80",
      description:
        "Medical-grade fractional radiofrequency micro-pins penetrating up to 4mm to contract connective tissue and coagulate subdermal fat for jawline lifting.",
      duration: "60 mins",
      downtime: "2–4 Days",
      longevity: "12–18 Months",
      price: "From £650",
    },
    {
      id: "polynucleotides",
      name: "Polynucleotide Regenerative Therapy",
      category: "skin-boosters",
      tag: "DNA Fragment Cellular Repair",
      badge: "Periorbital Specialist",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
      description:
        "Natural salmon DNA fractions proven to accelerate microcirculation, boost vascularization, and reverse dark eye circles and delicate neck crepiness.",
      duration: "40 mins",
      downtime: "24 Hours",
      longevity: "6–9 Months",
      price: "From £420",
    },
    {
      id: "hydrafacial",
      name: "HydraFacial Syndeo™ & Medical Peels",
      category: "devices",
      tag: "Vortex-Fusion Deep Dermal Infusion",
      badge: "Clinical Clarity",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
      description:
        "Medical-grade 3-step extraction, gentle glycolic/salicylic exfoliation, and targeted peptide antioxidant hydration for luminous, congestion-free skin.",
      duration: "45 mins",
      downtime: "Immediate Glow",
      longevity: "4–6 Weeks",
      price: "From £175",
    },
  ];

  const filtered =
    selectedCategory === "all"
      ? treatments
      : treatments.filter((t) => t.category === selectedCategory);

  return (
    <div className="w-full bg-white rounded-xl border border-[#E2E8F0] shadow-sm p-6 md:p-8 lg:p-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#fedeb2]/40 text-[#725b38] text-[11px] font-semibold uppercase tracking-wider border border-[#C5A880]/30 mb-2">
            <span className="material-symbols-outlined text-[14px]">spa</span>
            Aesthetics Component 01 • Clinical Treatment Suite
          </div>
          <h3 className="text-2xl md:text-3xl font-semibold text-[#0A192F] tracking-tight">
            Doctor-Led Medical Aesthetic Treatments
          </h3>
          <p className="text-[15px] text-[#44474D] mt-1">
            Every procedure is exclusively performed by GMC-registered medical doctors and senior clinical dermatologists.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex items-center gap-1.5 p-1 bg-[#eff4ff] rounded-md border border-[#E2E8F0]">
          {[
            { id: "all", label: "All Treatments" },
            { id: "injectables", label: "Injectables" },
            { id: "skin-boosters", label: "Biostimulators" },
            { id: "devices", label: "Energy & Lasers" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 text-[12px] font-medium rounded transition-colors cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-[#0A192F] text-white shadow-sm"
                  : "text-[#44474D] hover:text-[#0A192F]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Treatments Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="group bg-[#f8f9ff] rounded-lg border border-[#E2E8F0] overflow-hidden flex flex-col justify-between hover:border-[#C5A880]/70 hover:shadow-md transition-all"
          >
            <div>
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-[#0A192F]/85 backdrop-blur-sm text-white px-2.5 py-0.5 rounded text-[11px] font-semibold tracking-wider uppercase border border-[#C5A880]/40">
                  {item.badge}
                </div>
                <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded shadow-sm text-[12px] font-mono font-bold text-[#0A192F] tnum">
                  {item.price}
                </div>
              </div>

              <div className="p-5">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#725b38]">
                  {item.tag}
                </span>
                <h4 className="text-[17px] font-semibold text-[#0A192F] mt-0.5 group-hover:text-[#725b38] transition-colors">
                  {item.name}
                </h4>
                <p className="text-[13px] text-[#44474D] mt-2 leading-relaxed">
                  {item.description}
                </p>

                {/* Treatment Specs Pill Row */}
                <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-[#E2E8F0] text-center">
                  <div className="bg-white p-1.5 rounded border border-[#E2E8F0]">
                    <span className="block text-[10px] text-[#64748B] uppercase">Time</span>
                    <span className="text-[12px] font-semibold text-[#0A192F] font-mono">{item.duration}</span>
                  </div>
                  <div className="bg-white p-1.5 rounded border border-[#E2E8F0]">
                    <span className="block text-[10px] text-[#64748B] uppercase">Downtime</span>
                    <span className="text-[12px] font-semibold text-[#0A192F] font-mono">{item.downtime}</span>
                  </div>
                  <div className="bg-white p-1.5 rounded border border-[#E2E8F0]">
                    <span className="block text-[10px] text-[#64748B] uppercase">Longevity</span>
                    <span className="text-[12px] font-semibold text-[#0A192F] font-mono">{item.longevity}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 pt-0">
              <button
                onClick={() => onOpenConsultation?.("aesthetics")}
                className="w-full h-9 bg-white border border-[#E2E8F0] hover:border-[#0A192F] hover:bg-[#0A192F] hover:text-white text-[#0A192F] text-[12px] font-semibold rounded-[4px] transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
              >
                <span>Book Doctor Consultation</span>
                <span className="material-symbols-outlined text-[15px] text-[#C5A880]">calendar_today</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
