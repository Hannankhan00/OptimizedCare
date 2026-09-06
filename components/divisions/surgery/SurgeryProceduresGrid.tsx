"use client";

import React, { useState } from "react";

interface SurgeryProceduresGridProps {
  onOpenConsultation?: (dept: string) => void;
}

interface ProcedureDetail {
  id: string;
  name: string;
  category: string;
  tag: string;
  badge: string;
  image: string;
  description: string;
  theatreTime: string;
  anesthesia: string;
  hospitalStay: string;
  recovery: string;
  price: string;
  operativeTechnique: string;
  surgeonQuote: string;
  milestones: { time: string; note: string }[];
  inclusions: string[];
}

export default function SurgeryProceduresGrid({
  onOpenConsultation,
}: SurgeryProceduresGridProps) {
  const [selectedSubspecialty, setSelectedSubspecialty] = useState<string>("all");
  const [activeModalProcedure, setActiveModalProcedure] = useState<ProcedureDetail | null>(null);

  const procedures: ProcedureDetail[] = [
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
      anesthesia: "General Anesthesia (TIVA)",
      hospitalStay: "Day Case / 1 Night",
      recovery: "1–2 Weeks",
      price: "From £5,950",
      operativeTechnique:
        "Dual plane pocket dissection placing the upper portion under the pectoralis major muscle and the lower pole under the gland, delivering a natural slope with no implant edge show.",
      surgeonQuote:
        "Our approach prioritizes anatomical harmony, tissue longevity, and soft-touch natural movement over excessive unnatural volume.",
      milestones: [
        { time: "Day 1–3", note: "Rest in private en-suite suite; initial compression garment fitted." },
        { time: "Week 1", note: "First surgical dressing change & surgeon wound inspection." },
        { time: "Week 6", note: "Return to cardiovascular exercise and non-wired soft lingerie." },
        { time: "Month 6", note: "Implants fully settled into natural anatomical drop and softness." },
      ],
      inclusions: [
        "100% BAAPS/BAPRAS Consultant Surgeon operative lead",
        "Crisalix 3D pre-operative simulation sizing session",
        "Hospital theatre fees, overnight stay & Consultant Anesthetist",
        "Post-operative medical compression garments (2 sets)",
        "2-Year surgical revision warranty and unlimited surgeon reviews",
      ],
    },
    {
      id: "preservation-rhinoplasty",
      name: "Preservation Rhinoplasty",
      category: "face",
      tag: "Ultrasonic Piezo Sculpting",
      badge: "Structural Balance",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
      description:
        "Advanced preservation rhinoplasty utilizing ultrasonic piezo instruments to sculpt nasal bones without hammer trauma, preserving native dorsal cartilages and internal breathing valves.",
      theatreTime: "2.5–3.5 Hours",
      anesthesia: "General Anesthesia",
      hospitalStay: "Day Case / 1 Night",
      recovery: "7–10 Days (Splint)",
      price: "From £6,850",
      operativeTechnique:
        "Preserving the continuous natural dorsal cartilage roof by lowering it from beneath (push-down or let-down), eliminating irregularities and guaranteeing smooth nasal lines.",
      surgeonQuote:
        "Piezo technology acts only on dense bone without cutting soft tissue or blood vessels, dramatically minimizing post-operative bruising and swelling.",
      milestones: [
        { time: "Day 7", note: "Protective thermo-plastic external nasal splint removal." },
        { time: "Week 2", note: "80% of visible edema resolved; return to social & professional life." },
        { time: "Month 3", note: "Refinement of nasal tip definition and cartilage healing." },
        { time: "Month 12", note: "Final structural outcome with permanent airway preservation." },
      ],
      inclusions: [
        "Consultant ENT/Plastic Surgeon with sub-specialist rhinoplasty fellowship",
        "High-definition 3D imaging & computer simulated surgical plan",
        "Internal silastic splints (zero painful nasal packing)",
        "Dedicated post-op nasal hygiene pack & surgeon reviews at 1, 6, 12 weeks",
      ],
    },
    {
      id: "vaser-liposuction",
      name: "360 VASER® Liposuction & Contouring",
      category: "body",
      tag: "High-Definition Ultrasound Emulsification",
      badge: "Atraumatic Sculpting",
      image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80",
      description:
        "Sound energy probes liquefy targeted adipose deposits while preserving delicate blood vessels, nerves, and connective tissue fibers for defined abdominal, flank, and back contours.",
      theatreTime: "2–3 Hours",
      anesthesia: "General or Twilight Sedation",
      hospitalStay: "Day Case",
      recovery: "5–7 Days",
      price: "From £4,800",
      operativeTechnique:
        "Tumescent fluid infiltration followed by multi-frequency ultrasonic emulsification, allowing gentle low-suction aspiration that promotes skin retraction and reveals athletic musculature.",
      surgeonQuote:
        "VASER allows us to sculpt circumferential 360-degree curves with minimal tissue trauma and accelerated post-op recovery.",
      milestones: [
        { time: "Day 2–4", note: "Fluid drainage resolves; tailored medical compression garment worn." },
        { time: "Week 2", note: "Manual lymphatic drainage (MLD) therapy sessions commence." },
        { time: "Week 4", note: "Initial visible muscular definition and waistline reduction." },
        { time: "Month 3", note: "Maximum dermal skin tightening and sculpted contour." },
      ],
      inclusions: [
        "GMC Specialist Consultant Surgeon administration",
        "State-of-the-art Sound Surgical VASER® ultrasound technology",
        "Medical grade 360 body contouring compression suit included",
        "Course of post-operative manual lymphatic drainage therapy included",
      ],
    },
    {
      id: "deep-plane-facelift",
      name: "Deep Plane Facelift & Neck Lift",
      category: "face",
      tag: "True SMAS Ligamentous Release",
      badge: "10–15 Year Longevity",
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
      description:
        "Releasing retaining facial ligaments beneath the SMAS layer to reposition sagging mid-face tissues tension-free, completely avoiding the wind-tunnel stretched look of superficial facelifts.",
      theatreTime: "4–5 Hours",
      anesthesia: "General Anesthesia",
      hospitalStay: "1 Night (Private Room)",
      recovery: "2 Weeks",
      price: "From £9,500",
      operativeTechnique:
        "Entering the sub-SMAS gliding plane to release zygomatic and mandibular retaining ligaments, elevating cheek fat pads and platysma bands as an unbroken anatomical unit.",
      surgeonQuote:
        "Because tension is placed strictly on deep fascial structures rather than the skin, incisions heal almost invisibly and results endure for over a decade.",
      milestones: [
        { time: "Day 1", note: "Overnight hospital monitoring; light head dressing removed." },
        { time: "Day 7", note: "Fine periauricular suture removal by surgeon." },
        { time: "Week 2", note: "Normal social activities resumed with light camouflage makeup." },
        { time: "Month 3", note: "Full sensory recovery, sharpened jawline and youthful neck angle." },
      ],
      inclusions: [
        "Substantive NHS Consultant Plastic Surgeon specializing in facial surgery",
        "Private en-suite overnight room with 24/7 surgical nursing care",
        "Direct surgeon mobile access throughout recovery",
        "Scheduled milestone follow-ups at 1 week, 1 month, 6 months, and 1 year",
      ],
    },
    {
      id: "gynecomastia",
      name: "Gynecomastia (Male Chest Sculpting)",
      category: "male",
      tag: "Glandular Excision + Micro-VASER",
      badge: "Male Surgery Suite",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80",
      description:
        "Direct sub-areolar excision of hyperplastic glandular tissue combined with micro-cannula VASER lipo-sculpting to restore a flat, masculine, and athletic pectoral contour.",
      theatreTime: "90 mins",
      anesthesia: "General Anesthesia",
      hospitalStay: "Day Case",
      recovery: "5–7 Days",
      price: "From £4,200",
      operativeTechnique:
        "A microscopic semi-circular incision along the lower half of the areola (Webster technique) removing the firm fibrous core, followed by feather-edge peripheral contouring.",
      surgeonQuote:
        "Gynecomastia surgery delivers immense psychological liberation, restoring athletic confidence in tight clothing and swimwear.",
      milestones: [
        { time: "Day 3", note: "Resumption of desk work and gentle daily mobility." },
        { time: "Week 2", note: "Surgical chest binder transitioned to lightweight athletic vest." },
        { time: "Week 4", note: "Return to light gym training and upper body fitness." },
        { time: "Month 2", note: "Pectoral muscles settled into permanent masculine contours." },
      ],
      inclusions: [
        "Male cosmetic surgery consultant specialist",
        "Two high-grade post-operative chest compression vests",
        "Complete pathology histological analysis of excised tissue",
        "2-Year aftercare warranty and surgeon reviews",
      ],
    },
    {
      id: "blepharoplasty",
      name: "Upper & Lower Blepharoplasty",
      category: "face",
      tag: "Periorbital Rejuvenation",
      badge: "Alert, Rested Eyes",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
      description:
        "Delicate surgical excision of hooded upper eyelid skin and transconjunctival repositioning of lower orbital fat pads with unnoticeable incision placement.",
      theatreTime: "60–90 mins",
      anesthesia: "Local Anesthesia with Sedation",
      hospitalStay: "Day Case",
      recovery: "7 Days",
      price: "From £3,450",
      operativeTechnique:
        "Hidden incisions within the natural upper eyelid crease, and transconjunctival (inside the eyelid) access for lower fat bags, preventing hollowed or rounded eye shapes.",
      surgeonQuote:
        "Blepharoplasty is one of the most rewarding procedures in aesthetic surgery—taking years off tired eyes while leaving no telltale signs.",
      milestones: [
        { time: "Day 2", note: "Cold compress management; minimal discomfort." },
        { time: "Day 6", note: "Fine microsuture removal at our private clinic suite." },
        { time: "Day 10", note: "Bruising cleared; return to work and full social activities." },
        { time: "Month 1", note: "Scars fade into the eyelid fold becoming virtually invisible." },
      ],
      inclusions: [
        "Ophthalmic plastic surgeon fellowship trained",
        "Specialist eye recovery pack with lubricating drops and eye shields",
        "All post-operative dressing changes and surgeon reviews",
      ],
    },
  ];

  const filtered =
    selectedSubspecialty === "all"
      ? procedures
      : procedures.filter((p) => p.category === selectedSubspecialty);

  return (
    <div className="w-full py-16 md:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8F6F3] border border-[#94D2BD] text-[#2A9D8F] text-[11px] font-semibold uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2A9D8F]" />
              <span className="text-[#1D3557]">Consultant Surgical Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1D3557] tracking-tight leading-tight">
              Pioneering Consultant Plastic Procedures
            </h2>
            <p className="text-[16px] text-[#457B9D] mt-2 max-w-2xl leading-relaxed">
              Every operation is led by BAAPS &amp; BAPRAS consultant surgeons in CQC-registered private hospital theatres with comprehensive 2-year aftercare.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white rounded-full border border-[#E2E8F0] shadow-2xs">
            {[
              { id: "all", label: "All Procedures" },
              { id: "breast", label: "Breast" },
              { id: "face", label: "Facial Surgery" },
              { id: "body", label: "Body Contouring" },
              { id: "male", label: "Male Surgery" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedSubspecialty(cat.id)}
                className={`px-4 py-2 text-[12px] font-medium rounded-full transition-all cursor-pointer ${
                  selectedSubspecialty === cat.id
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
                      <span className="block text-[9px] font-bold text-[#457B9D] uppercase tracking-wider">Theatre</span>
                      <span className="text-[12px] font-semibold text-[#1D3557] font-mono truncate block">{item.theatreTime}</span>
                    </div>
                    <div className="bg-[#F8FAFC] p-2 rounded-lg border border-[#E2E8F0]">
                      <span className="block text-[9px] font-bold text-[#457B9D] uppercase tracking-wider">Hospital</span>
                      <span className="text-[12px] font-semibold text-[#1D3557] font-mono truncate block">{item.hospitalStay}</span>
                    </div>
                    <div className="bg-[#F8FAFC] p-2 rounded-lg border border-[#E2E8F0]">
                      <span className="block text-[9px] font-bold text-[#457B9D] uppercase tracking-wider">Recovery</span>
                      <span className="text-[12px] font-semibold text-[#1D3557] font-mono truncate block">{item.recovery}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-4 pt-2 flex items-center gap-2">
                <button
                  onClick={() => setActiveModalProcedure(item)}
                  className="flex-1 h-10 px-3 bg-[#F8FAFC] hover:bg-[#E8F6F3] border border-[#E2E8F0] hover:border-[#94D2BD] text-[#1D3557] text-[12px] font-semibold rounded-full transition-all flex items-center justify-center gap-1 cursor-pointer"
                >
                  <span>Surgical Protocol</span>
                  <span className="material-symbols-outlined text-[15px] text-[#2A9D8F]">info</span>
                </button>

                <button
                  onClick={() => onOpenConsultation?.("surgery")}
                  className="flex-1 h-10 px-3 bg-[#2A9D8F] hover:bg-[#21867A] text-white text-[12px] font-semibold rounded-full transition-all flex items-center justify-center gap-1 cursor-pointer shadow-xs active:scale-95"
                >
                  <span>Book Surgeon</span>
                  <span className="material-symbols-outlined text-[15px]">calendar_today</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Surgical Protocol Modal Sheet */}
      {activeModalProcedure && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1D3557]/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl border border-[#E2E8F0] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            {/* Modal Top Header */}
            <div className="bg-[#F8FAFC] px-6 py-5 border-b border-[#E2E8F0] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#E8F6F3] border border-[#94D2BD] flex items-center justify-center text-[#2A9D8F]">
                  <span className="material-symbols-outlined text-[20px]">local_hospital</span>
                </div>
                <div>
                  <h3 className="text-[17px] font-semibold text-[#1D3557]">
                    {activeModalProcedure.name}
                  </h3>
                  <p className="text-[11px] text-[#457B9D] font-semibold uppercase tracking-wider">
                    {activeModalProcedure.tag}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setActiveModalProcedure(null)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#457B9D] hover:text-[#1D3557] hover:bg-white transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 overflow-y-auto space-y-6">
              {/* Surgeon Quote */}
              <div className="p-4 rounded-xl bg-[#E8F6F3] border border-[#94D2BD] flex items-start gap-3">
                <span className="material-symbols-outlined text-[#2A9D8F] text-[22px] shrink-0 mt-0.5">
                  format_quote
                </span>
                <div>
                  <p className="text-[13px] text-[#1D3557] font-medium leading-relaxed italic">
                    “{activeModalProcedure.surgeonQuote}”
                  </p>
                  <span className="block text-[11px] font-semibold text-[#457B9D] mt-1">
                    — Consultant Plastic Surgeon, BAAPS &amp; BAPRAS Fellow
                  </span>
                </div>
              </div>

              {/* Protocol Spec Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
                  <span className="block text-[10px] uppercase font-bold text-[#457B9D]">Theatre Time</span>
                  <span className="text-[12px] font-semibold text-[#1D3557] mt-0.5 block leading-tight font-mono">
                    {activeModalProcedure.theatreTime}
                  </span>
                </div>
                <div className="p-3 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
                  <span className="block text-[10px] uppercase font-bold text-[#457B9D]">Anesthesia</span>
                  <span className="text-[12px] font-semibold text-[#1D3557] mt-0.5 block leading-tight truncate">
                    {activeModalProcedure.anesthesia}
                  </span>
                </div>
                <div className="p-3 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
                  <span className="block text-[10px] uppercase font-bold text-[#457B9D]">Hospital Stay</span>
                  <span className="text-[12px] font-semibold text-[#1D3557] mt-0.5 block leading-tight">
                    {activeModalProcedure.hospitalStay}
                  </span>
                </div>
                <div className="p-3 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
                  <span className="block text-[10px] uppercase font-bold text-[#457B9D]">Pricing</span>
                  <span className="text-[12px] font-semibold text-[#2A9D8F] mt-0.5 block font-mono">
                    {activeModalProcedure.price}
                  </span>
                </div>
              </div>

              {/* Operative Technique */}
              <div>
                <h4 className="text-[14px] font-semibold text-[#1D3557] mb-2 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#2A9D8F] text-[18px]">healing</span>
                  Surgical Technique Overview
                </h4>
                <p className="text-[13px] text-[#457B9D] leading-relaxed p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                  {activeModalProcedure.operativeTechnique}
                </p>
              </div>

              {/* Post-Op Recovery Milestones */}
              <div>
                <h4 className="text-[14px] font-semibold text-[#1D3557] mb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#2A9D8F] text-[18px]">timeline</span>
                  Recovery &amp; Healing Milestones
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeModalProcedure.milestones.map((m, idx) => (
                    <div key={idx} className="p-3 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] flex flex-col">
                      <span className="text-[11px] font-bold text-[#2A9D8F] uppercase font-mono">{m.time}</span>
                      <span className="text-[12px] text-[#1D3557] mt-0.5 leading-snug">{m.note}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Package Inclusions */}
              <div>
                <h4 className="text-[14px] font-semibold text-[#1D3557] mb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#2A9D8F] text-[18px]">verified</span>
                  Included in Your Surgical Care Package
                </h4>
                <div className="space-y-2">
                  {activeModalProcedure.inclusions.map((inc, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-[12px] text-[#457B9D]">
                      <span className="material-symbols-outlined text-[#2A9D8F] text-[16px] shrink-0">check_circle</span>
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Action Footer */}
            <div className="bg-[#F8FAFC] px-6 py-4 border-t border-[#E2E8F0] flex items-center justify-between gap-4">
              <button
                onClick={() => setActiveModalProcedure(null)}
                className="px-5 h-11 bg-white border border-[#E2E8F0] hover:bg-[#F0F9FF] text-[#1D3557] text-[13px] font-semibold rounded-full transition-colors"
              >
                Close Details
              </button>

              <button
                onClick={() => {
                  setActiveModalProcedure(null);
                  onOpenConsultation?.("surgery");
                }}
                className="px-7 h-11 bg-[#2A9D8F] hover:bg-[#21867A] text-white text-[13px] font-semibold rounded-full transition-all shadow-xs flex items-center gap-2"
              >
                <span>Book Surgeon Consultation</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
