"use client";

import React, { useState } from "react";

interface AestheticsTreatmentsGridProps {
  onOpenConsultation?: (dept: string) => void;
}

interface TreatmentDetail {
  id: string;
  name: string;
  category: string;
  tag: string;
  badge: string;
  image: string;
  description: string;
  duration: string;
  downtime: string;
  longevity: string;
  price: string;
  clinicalDepth: string;
  anesthetic: string;
  doctorQuote: string;
  protocolSteps: string[];
}

export default function AestheticsTreatmentsGrid({
  onOpenConsultation,
}: AestheticsTreatmentsGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeModalTreatment, setActiveModalTreatment] = useState<TreatmentDetail | null>(null);

  const treatments: TreatmentDetail[] = [
    {
      id: "anti-wrinkle",
      name: "Anti-Wrinkle Precision Injections",
      category: "injectables",
      tag: "Botulinum Toxin Type A • Bocouture / Botox",
      badge: "GMC Doctor Administered",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
      description:
        "Precision micro-dosing targeting forehead lines, glabellar frown lines, and crow's feet. Strictly preserves authentic facial mobility while preventing deep static creasing.",
      duration: "30 mins",
      downtime: "Zero (Immediate return)",
      longevity: "3–4 Months",
      price: "From £220",
      clinicalDepth: "Intramuscular & Superficial Intradermal",
      anesthetic: "Topical ice numbing (virtually painless)",
      doctorQuote: "Our micro-dosing technique softens tension without ever producing an immobile or 'frozen' appearance.",
      protocolSteps: [
        "Comprehensive facial dynamic animation mapping",
        "Individualised micro-unit dosage calculation",
        "Precision administration using ultra-fine 33G needles",
        "Complimentary 14-day follow-up review with adjustment if indicated",
      ],
    },
    {
      id: "dermal-fillers",
      name: "Ultrasound-Guided Dermal Contouring",
      category: "injectables",
      tag: "Juvederm® Vycross & Teoxane® Hyaluronic Gels",
      badge: "Ultrasound Scanned",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
      description:
        "Subtle, anatomical volume replacement for cheek projection, jawline definition, temples, and subtle lip contouring. Performed exclusively under ultrasonic guidance.",
      duration: "45 mins",
      downtime: "24–48 Hours",
      longevity: "9–18 Months",
      price: "From £350",
      clinicalDepth: "Deep Supra-Periosteal & Subcutaneous",
      anesthetic: "Lidocaine-infused filler plus topical numbing",
      doctorQuote: "High-frequency ultrasound allows us to see every facial artery in real time, setting an unprecedented standard for patient safety.",
      protocolSteps: [
        "Pre-injection Clarius ultrasound vascular mapping",
        "Blunt micro-cannula technique to minimize bruising",
        "Supra-periosteal placement to support native bone loss",
        "Strict medical follow-up with 24/7 physician on-call support",
      ],
    },
    {
      id: "profhilo",
      name: "Profhilo® Bioremodelling",
      category: "skin-boosters",
      tag: "100% High & Low Molecular Weight Hyaluronic Acid",
      badge: "Collagen & Elastin Stimulator",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
      description:
        "Multi-award-winning biostimulator delivering pure hyaluronic acid across 5 Bio-Aesthetic Points (BAP). Clinically proven to stimulate 4 distinct types of collagen and elastin.",
      duration: "30 mins",
      downtime: "4–6 Hours (micro-papules settle)",
      longevity: "6 Months",
      price: "From £395",
      clinicalDepth: "Subdermal Interstitial Tissue",
      anesthetic: "Topical anesthetic cream",
      doctorQuote: "Unlike traditional fillers, Profhilo remodels tissue from within, producing radiant, springy, and tightened skin texture.",
      protocolSteps: [
        "Bio-Aesthetic Point (BAP) anatomical mapping",
        "Controlled slow-bolus delivery across 5 facial vectors",
        "Diffusion throughout dermal and subdermal compartments",
        "Recommended course: 2 treatments spaced 4 weeks apart",
      ],
    },
    {
      id: "morpheus8",
      name: "Morpheus8 RF Subdermal Remodeling",
      category: "devices",
      tag: "Fractional Radiofrequency Microneedling",
      badge: "Deep Tissue Tightening",
      image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80",
      description:
        "Medical-grade RF energy delivered up to 4mm deep into subdermal adipose tissue to coagulate fat, contract the fibroseptal network, and tighten the lower face and jawline.",
      duration: "60 mins",
      downtime: "2–3 Days (mild erythema)",
      longevity: "12–18 Months",
      price: "From £650",
      clinicalDepth: "Subdermal Adipose Plane (up to 4mm)",
      anesthetic: "Prescription compound topical anesthetic",
      doctorQuote: "Morpheus8 is the closest non-surgical alternative to a mini-lift for tightening jawline laxity and submental fullness.",
      protocolSteps: [
        "Full face and submental clinical skin priming",
        "Depth calibration tailored to skin thickness and subcutaneous fat",
        "Multi-pass treatment targeting both deep fat and superficial dermis",
        "Medical calming post-procedure peptide serum application",
      ],
    },
    {
      id: "polynucleotides",
      name: "Polynucleotide Cellular Repair",
      category: "skin-boosters",
      tag: "Purified Salmon DNA Polymer Fractions (Ameela®)",
      badge: "Tear Trough & Periorbital",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
      description:
        "Regenerative DNA fragments that boost microcirculation, promote fibroblast proliferation, and scavenge free radicals. Ideal for thinning under-eyes without puffiness.",
      duration: "40 mins",
      downtime: "24 Hours (mild redness)",
      longevity: "6–9 Months",
      price: "From £420",
      clinicalDepth: "Superficial Dermis & Periorbital Sub-SMAS",
      anesthetic: "Topical anesthetic cream",
      doctorQuote: "Polynucleotides revolutionize tear-trough rejuvenation by truly thickening fragile skin rather than just packing it with water-binding gel.",
      protocolSteps: [
        "Periorbital vascular and lymphatic mapping",
        "Micro-droplet intradermal delivery with delicate cannula",
        "Stimulation of VEGF and microvascular proliferation",
        "Course protocol: 2 to 3 sessions spaced 2 to 3 weeks apart",
      ],
    },
    {
      id: "hydrafacial",
      name: "HydraFacial Syndeo™ & Medical Peels",
      category: "peels",
      tag: "Vortex Dermal Extraction & Medical Acid Peels",
      badge: "Immediate Radiance",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
      description:
        "Medical-grade 3-step extraction, gentle glycolic/salicylic exfoliation, and custom antioxidant infusion followed by LED light therapy for clean, illuminated skin.",
      duration: "45 mins",
      downtime: "Zero (Instant luminous glow)",
      longevity: "4–6 Weeks",
      price: "From £175",
      clinicalDepth: "Stratum Corneum & Papillary Dermis",
      anesthetic: "Non-invasive, relaxing protocol",
      doctorQuote: "The ideal foundational treatment to maintain pore purity, cellular hydration, and optimal dermal turnover between injectables.",
      protocolSteps: [
        "Deep lymphatic drainage suction massage",
        "Gentle chemical acid peel brightening",
        "Painless vortex extraction of sebum and congestion",
        "Intensive saturation with targeted peptides and hyaluronic serums",
      ],
    },
  ];

  const filtered =
    selectedCategory === "all"
      ? treatments
      : treatments.filter((t) => t.category === selectedCategory);

  return (
    <div className="w-full py-16 md:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8F6F3] border border-[#94D2BD] text-[#2A9D8F] text-[11px] font-semibold uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2A9D8F]" />
              <span className="text-[#1D3557]">Comprehensive Aesthetics Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1D3557] tracking-tight leading-tight">
              Doctor-Led Clinical Treatment Suite
            </h2>
            <p className="text-[16px] text-[#457B9D] mt-2 max-w-2xl leading-relaxed">
              Every procedure is exclusively performed by GMC-registered medical doctors, utilizing ultrasound vascular mapping and hospital-grade sterility.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white rounded-full border border-[#E2E8F0] shadow-2xs">
            {[
              { id: "all", label: "All Treatments" },
              { id: "injectables", label: "Injectables" },
              { id: "skin-boosters", label: "Biostimulators" },
              { id: "devices", label: "Morpheus8 RF" },
              { id: "peels", label: "Medical Peels" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-[12px] font-medium rounded-full transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-[#2A9D8F] text-white shadow-xs"
                    : "text-[#457B9D] hover:text-[#1D3557] hover:bg-[#F0F9FF]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group p-2 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#94D2BD] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Header */}
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-[#1D3557]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-[#1D3557]/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase border border-[#94D2BD]/40 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2A9D8F]" />
                    <span>{item.badge}</span>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm text-[12px] font-mono font-bold text-[#1D3557] tnum border border-[#E2E8F0]">
                    {item.price}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-4 pt-5">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#2A9D8F] block mb-1">
                    {item.tag}
                  </span>
                  <h3 className="text-[18px] font-semibold text-[#1D3557] leading-snug group-hover:text-[#2A9D8F] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-[13px] text-[#457B9D] mt-2 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Specs Metric Pill Row */}
                  <div className="grid grid-cols-3 gap-2 mt-5 pt-4 border-t border-[#E2E8F0] text-center">
                    <div className="bg-[#F8FAFC] p-2 rounded-lg border border-[#E2E8F0]">
                      <span className="block text-[9px] font-bold text-[#457B9D] uppercase tracking-wider">Time</span>
                      <span className="text-[12px] font-semibold text-[#1D3557] font-mono">{item.duration}</span>
                    </div>
                    <div className="bg-[#F8FAFC] p-2 rounded-lg border border-[#E2E8F0]">
                      <span className="block text-[9px] font-bold text-[#457B9D] uppercase tracking-wider">Downtime</span>
                      <span className="text-[12px] font-semibold text-[#1D3557] font-mono truncate block">{item.downtime}</span>
                    </div>
                    <div className="bg-[#F8FAFC] p-2 rounded-lg border border-[#E2E8F0]">
                      <span className="block text-[9px] font-bold text-[#457B9D] uppercase tracking-wider">Longevity</span>
                      <span className="text-[12px] font-semibold text-[#1D3557] font-mono">{item.longevity}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-4 pt-2 flex items-center gap-2">
                <button
                  onClick={() => setActiveModalTreatment(item)}
                  className="flex-1 h-10 px-3 bg-[#F8FAFC] hover:bg-[#E8F6F3] border border-[#E2E8F0] hover:border-[#94D2BD] text-[#1D3557] text-[12px] font-semibold rounded-full transition-all flex items-center justify-center gap-1 cursor-pointer"
                >
                  <span>Protocol Details</span>
                  <span className="material-symbols-outlined text-[15px] text-[#2A9D8F]">info</span>
                </button>

                <button
                  onClick={() => onOpenConsultation?.("aesthetics")}
                  className="flex-1 h-10 px-3 bg-[#2A9D8F] hover:bg-[#21867A] text-white text-[12px] font-semibold rounded-full transition-all flex items-center justify-center gap-1 cursor-pointer shadow-xs active:scale-95"
                >
                  <span>Book Consultation</span>
                  <span className="material-symbols-outlined text-[15px]">calendar_today</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Treatment Protocol Modal Sheet */}
      {activeModalTreatment && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1D3557]/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl border border-[#E2E8F0] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            {/* Modal Top Header */}
            <div className="bg-[#F8FAFC] px-6 py-5 border-b border-[#E2E8F0] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#E8F6F3] border border-[#94D2BD] flex items-center justify-center text-[#2A9D8F]">
                  <span className="material-symbols-outlined text-[20px]">medical_services</span>
                </div>
                <div>
                  <h3 className="text-[17px] font-semibold text-[#1D3557]">
                    {activeModalTreatment.name}
                  </h3>
                  <p className="text-[11px] text-[#457B9D] font-semibold uppercase tracking-wider">
                    {activeModalTreatment.tag}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setActiveModalTreatment(null)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#457B9D] hover:text-[#1D3557] hover:bg-white transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 overflow-y-auto space-y-6">
              {/* Doctor Rationale Quote */}
              <div className="p-4 rounded-xl bg-[#E8F6F3] border border-[#94D2BD] flex items-start gap-3">
                <span className="material-symbols-outlined text-[#2A9D8F] text-[22px] shrink-0 mt-0.5">
                  format_quote
                </span>
                <div>
                  <p className="text-[13px] text-[#1D3557] font-medium leading-relaxed italic">
                    “{activeModalTreatment.doctorQuote}”
                  </p>
                  <span className="block text-[11px] font-semibold text-[#457B9D] mt-1">
                    — Senior Aesthetic Physician
                  </span>
                </div>
              </div>

              {/* Protocol Spec Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
                  <span className="block text-[10px] uppercase font-bold text-[#457B9D]">Depth</span>
                  <span className="text-[12px] font-semibold text-[#1D3557] mt-0.5 block leading-tight">
                    {activeModalTreatment.clinicalDepth}
                  </span>
                </div>
                <div className="p-3 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
                  <span className="block text-[10px] uppercase font-bold text-[#457B9D]">Anesthesia</span>
                  <span className="text-[12px] font-semibold text-[#1D3557] mt-0.5 block leading-tight">
                    {activeModalTreatment.anesthetic}
                  </span>
                </div>
                <div className="p-3 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
                  <span className="block text-[10px] uppercase font-bold text-[#457B9D]">Longevity</span>
                  <span className="text-[12px] font-semibold text-[#1D3557] mt-0.5 block leading-tight">
                    {activeModalTreatment.longevity}
                  </span>
                </div>
                <div className="p-3 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
                  <span className="block text-[10px] uppercase font-bold text-[#457B9D]">Pricing</span>
                  <span className="text-[12px] font-semibold text-[#2A9D8F] mt-0.5 block font-mono">
                    {activeModalTreatment.price}
                  </span>
                </div>
              </div>

              {/* Step-by-Step Clinical Procedure */}
              <div>
                <h4 className="text-[14px] font-semibold text-[#1D3557] mb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#2A9D8F] text-[18px]">verified</span>
                  Clinical Procedure &amp; Safety Workflow
                </h4>
                <div className="space-y-2.5">
                  {activeModalTreatment.protocolSteps.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-[13px] text-[#457B9D]">
                      <span className="w-5 h-5 rounded-full bg-[#E8F6F3] border border-[#94D2BD] text-[#2A9D8F] font-semibold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                        0{idx + 1}
                      </span>
                      <span className="leading-snug">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Safety Tag */}
              <div className="p-3 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-between text-[11px] text-[#457B9D]">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#2A9D8F] text-[16px]">shield</span>
                  Protected under 100% GMC Doctor Practice &amp; Save Face Clinical Accreditation
                </span>
                <span className="font-mono text-[#1D3557] font-semibold">CQC Verified</span>
              </div>
            </div>

            {/* Modal Action Footer */}
            <div className="bg-[#F8FAFC] px-6 py-4 border-t border-[#E2E8F0] flex items-center justify-between gap-4">
              <button
                onClick={() => setActiveModalTreatment(null)}
                className="px-5 h-11 bg-white border border-[#E2E8F0] hover:bg-[#F0F9FF] text-[#1D3557] text-[13px] font-semibold rounded-full transition-colors"
              >
                Close Protocol
              </button>

              <button
                onClick={() => {
                  setActiveModalTreatment(null);
                  onOpenConsultation?.("aesthetics");
                }}
                className="px-7 h-11 bg-[#2A9D8F] hover:bg-[#21867A] text-white text-[13px] font-semibold rounded-full transition-all shadow-xs flex items-center gap-2"
              >
                <span>Book This Treatment</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
