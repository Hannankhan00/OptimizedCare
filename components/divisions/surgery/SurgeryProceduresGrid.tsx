"use client";

import React, { useState } from "react";

interface SurgeryProceduresGridProps {
  onOpenConsultation?: (dept: string) => void;
}

export default function SurgeryProceduresGrid({
  onOpenConsultation,
}: SurgeryProceduresGridProps) {
  const [selectedSubspecialty, setSelectedSubspecialty] = useState<string>("all");

  const procedures = [
    {
      id: "breast-augmentation",
      name: "Bespoke Breast Augmentation & Uplift",
      category: "breast",
      tag: "Dual Plane Sub-Muscular Placement",
      badge: "Mentor® & Motiva® Implants",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
      description:
        "Anatomically balanced breast enhancement and mastopexy using ergonomic cohesive silicone implants with minimal-scar inframammary incisions.",
      theatreTime: "90–120 mins",
      anesthesia: "General (TIVA)",
      hospitalStay: "Day Case / 1 Night",
      recovery: "1–2 Weeks",
      price: "From £5,950",
    },
    {
      id: "preservation-rhinoplasty",
      name: "Preservation Rhinoplasty",
      category: "face",
      tag: "Ultrasonic Piezo Sculpting",
      badge: "Natural Structural Balance",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
      description:
        "Advanced preservation surgery using ultrasonic piezo instruments to sculpt nasal bones without trauma, preserving native dorsal cartilages and airway function.",
      theatreTime: "2.5–3.5 Hours",
      anesthesia: "General Anesthesia",
      hospitalStay: "Day Case",
      recovery: "7–10 Days (Splint)",
      price: "From £6,850",
    },
    {
      id: "vaser-liposuction",
      name: "360 VASER® Liposuction & Contouring",
      category: "body",
      tag: "High-Definition Ultrasound Emulsification",
      badge: "Minimally Traumatic",
      image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80",
      description:
        "Sound energy probes liquefy targeted adipose deposits while preserving delicate blood vessels and connective tissues for defined abdominal and flank contours.",
      theatreTime: "2–3 Hours",
      anesthesia: "General or Twilight",
      hospitalStay: "Day Case",
      recovery: "5–7 Days",
      price: "From £4,800",
    },
    {
      id: "deep-plane-facelift",
      name: "Deep Plane Facelift & Neck Lift",
      category: "face",
      tag: "True SMAS Structural Release",
      badge: "10–15 Year Rejuvenation",
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
      description:
        "Releasing retaining facial ligaments beneath the SMAS layer to reposition sagging mid-face tissues tension-free, avoiding the stretched look of traditional facelifts.",
      theatreTime: "4–5 Hours",
      anesthesia: "General Anesthesia",
      hospitalStay: "Overnight Stay",
      recovery: "2 Weeks",
      price: "From £9,500",
    },
    {
      id: "gynecomastia",
      name: "Gynecomastia (Male Chest Reduction)",
      category: "body",
      tag: "Glandular Excision + Micro-VASER",
      badge: "Male Surgery Suite",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80",
      description:
        "Sub-areolar excision of hyperplastic glandular tissue combined with micro-cannula VASER contouring to restore a masculine, athletic chest profile.",
      theatreTime: "90 mins",
      anesthesia: "General Anesthesia",
      hospitalStay: "Day Case",
      recovery: "5–7 Days",
      price: "From £4,200",
    },
    {
      id: "blepharoplasty",
      name: "Upper & Lower Blepharoplasty",
      category: "face",
      tag: "Periorbital Rejuvenation",
      badge: "Refreshed Alert Look",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
      description:
        "Delicate surgical removal of hooded upper eyelid skin and transconjunctival repositioning of lower eyebags with unnoticeable incision placement.",
      theatreTime: "60–90 mins",
      anesthesia: "Local + Sedation",
      hospitalStay: "Day Case",
      recovery: "7 Days",
      price: "From £3,450",
    },
  ];

  const filtered =
    selectedSubspecialty === "all"
      ? procedures
      : procedures.filter((p) => p.category === selectedSubspecialty);

  return (
    <div className="w-full bg-white rounded-xl border border-[#DDD3BF] shadow-sm p-6 md:p-8 lg:p-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#E9C9AC]/40 text-[#8A4530] text-[11px] font-semibold uppercase tracking-wider border border-[#A85D3D]/30 mb-2">
            <span className="material-symbols-outlined text-[14px]">local_hospital</span>
            Surgery Component 01 • Consultant Procedure Directory
          </div>
          <h3 className="font-serif text-2xl md:text-3xl font-semibold text-[#211E1A] tracking-tight">
            Consultant Plastic &amp; Reconstructive Procedures
          </h3>
          <p className="text-[15px] text-[#5A5347] mt-1">
            Exclusively performed in CQC-registered private surgical hospital theatres by BAAPS &amp; BAPRAS consultant plastic surgeons.
          </p>
        </div>

        {/* Subspecialty Filter */}
        <div className="flex items-center gap-1.5 p-1 bg-[#EFEAE0] rounded-md border border-[#DDD3BF]">
          {[
            { id: "all", label: "All Procedures" },
            { id: "breast", label: "Breast" },
            { id: "face", label: "Face & Rhinoplasty" },
            { id: "body", label: "Body & Men's" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedSubspecialty(cat.id)}
              className={`px-3 py-1.5 text-[12px] font-medium rounded transition-colors cursor-pointer ${
                selectedSubspecialty === cat.id
                  ? "bg-[#211E1A] text-white shadow-sm"
                  : "text-[#5A5347] hover:text-[#211E1A]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Procedures Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="group bg-[#F7F4EC] rounded-lg border border-[#DDD3BF] overflow-hidden flex flex-col justify-between hover:border-[#A85D3D]/70 hover:shadow-md transition-all"
          >
            <div>
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-[#211E1A]/85 backdrop-blur-sm text-white px-2.5 py-0.5 rounded text-[11px] font-semibold tracking-wider uppercase border border-[#A85D3D]/40">
                  {item.badge}
                </div>
                <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded shadow-sm text-[12px] font-mono font-bold text-[#211E1A] tnum">
                  {item.price}
                </div>
              </div>

              <div className="p-5">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8A4530]">
                  {item.tag}
                </span>
                <h4 className="text-[17px] font-semibold text-[#211E1A] mt-0.5 group-hover:text-[#8A4530] transition-colors">
                  {item.name}
                </h4>
                <p className="text-[13px] text-[#5A5347] mt-2 leading-relaxed">
                  {item.description}
                </p>

                {/* Surgical Specs Row */}
                <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-[#DDD3BF] text-center">
                  <div className="bg-white p-1.5 rounded border border-[#DDD3BF]">
                    <span className="block text-[10px] text-[#6B6457] uppercase">Theatre</span>
                    <span className="text-[11px] font-semibold text-[#211E1A] font-mono">{item.theatreTime}</span>
                  </div>
                  <div className="bg-white p-1.5 rounded border border-[#DDD3BF]">
                    <span className="block text-[10px] text-[#6B6457] uppercase">Stay</span>
                    <span className="text-[11px] font-semibold text-[#211E1A] font-mono">{item.hospitalStay}</span>
                  </div>
                  <div className="bg-white p-1.5 rounded border border-[#DDD3BF]">
                    <span className="block text-[10px] text-[#6B6457] uppercase">Recovery</span>
                    <span className="text-[11px] font-semibold text-[#211E1A] font-mono">{item.recovery}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 pt-0">
              <button
                onClick={() => onOpenConsultation?.("surgery")}
                className="w-full h-9 bg-white border border-[#DDD3BF] hover:border-[#211E1A] hover:bg-[#211E1A] hover:text-white text-[#211E1A] text-[12px] font-semibold rounded-[4px] transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
              >
                <span>Consult Plastic Surgeon</span>
                <span className="material-symbols-outlined text-[15px] text-[#A85D3D]">arrow_forward</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
