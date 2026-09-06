"use client";

import React, { useState } from "react";

interface TherapyDisciplinesGridProps {
  onOpenConsultation?: (dept: string) => void;
}

interface DisciplineDetail {
  id: string;
  name: string;
  category: string;
  tag: string;
  badge: string;
  image: string;
  description: string;
  duration: string;
  delivery: string;
  governingBody: string;
  price: string;
  suitableFor: string;
  clinicianQuote: string;
  interventions: string[];
  protocolSteps: string[];
}

export default function TherapyDisciplinesGrid({
  onOpenConsultation,
}: TherapyDisciplinesGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeModalDiscipline, setActiveModalDiscipline] = useState<DisciplineDetail | null>(null);

  const disciplines: DisciplineDetail[] = [
    {
      id: "physiotherapy",
      name: "Chartered Physiotherapy & Rehabilitation",
      category: "physio",
      tag: "Musculoskeletal, Neurological & Post-Operative",
      badge: "HCPC & CSP Registered",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
      description:
        "Evidence-based manual joint mobilization, soft tissue therapy, neurological gait re-education, and individualized progressive exercise prescription to alleviate pain and rebuild physical function.",
      duration: "45–60 mins",
      delivery: "In-Clinic & Home Visits",
      governingBody: "Chartered Society of Physiotherapy (CSP)",
      price: "From £140",
      suitableFor: "Patients recovering from orthopedic surgery, stroke, spinal injuries, or living with chronic arthritis.",
      clinicianQuote:
        "Restoring biomechanical confidence isn't just about joint angles—it's about empowering patients to walk safely in their gardens and climb their own stairs without fear.",
      interventions: [
        "Post-operative joint replacement & spinal decompression rehabilitation",
        "Neurological neuroplasticity training & Bobath therapy for stroke recovery",
        "Manual joint mobilization, myofascial release & trigger point therapy",
        "Gait, balance & falls prevention protocols with walking aid calibration",
      ],
      protocolSteps: [
        "Comprehensive objective biomechanical assessment & range of motion baseline",
        "Functional goal setting tailored to personal mobility priorities",
        "Hands-on manual therapy combined with targeted corrective exercise",
        "Customized illustrated home exercise plan with digital progress tracking",
      ],
    },
    {
      id: "occupational-therapy",
      name: "Specialist Occupational Therapy (OT)",
      category: "ot",
      tag: "Daily Living Autonomy & Home Adaptations",
      badge: "Royal College of OT (RCOT)",
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
      description:
        "Overcoming physical and cognitive barriers to daily life. Comprehensive home environmental audits, specialized assistive technology prescription, and functional re-training for ultimate self-reliance.",
      duration: "60 mins",
      delivery: "Home Visit Focus & Clinic",
      governingBody: "Royal College of Occupational Therapists (RCOT)",
      price: "From £160",
      suitableFor: "Individuals seeking maximum independence at home following illness, spinal trauma, dementia, or sensory processing differences.",
      clinicianQuote:
        "Occupational therapy bridges the gap between clinical recovery and real-world autonomy—ensuring patients can prepare meals, bathe, and manage their home with dignity.",
      interventions: [
        "Activities of Daily Living (ADL) retraining: bathing, dressing & kitchen tasks",
        "Comprehensive architectural home hazard audits & adaptation recommendations",
        "Specialist seating, posture management & wheelchair prescription",
        "Cognitive fatigue management, memory strategies & sensory integration",
      ],
      protocolSteps: [
        "Holistic assessment of person, environment, and daily occupation (PEO model)",
        "On-site domestic functional capability and safety observation",
        "Prescription and fitting of specialized assistive daily living aids",
        "Formal written adaptation report for Local Authority or grant funding",
      ],
    },
    {
      id: "speech-language",
      name: "Clinical Speech & Language Therapy (SLT)",
      category: "slt",
      tag: "Dysphagia Swallowing, Aphasia & Voice",
      badge: "RCSLT Certified",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
      description:
        "Specialist diagnostic assessment and clinical treatment for speech, language comprehension, and swallowing disorders (dysphagia), ensuring safe nutritional intake and fluid communication.",
      duration: "45–60 mins",
      delivery: "In-Clinic & Bedside Domiciliary",
      governingBody: "Royal College of Speech & Language Therapists (RCSLT)",
      price: "From £150",
      suitableFor: "Stroke survivors, clients with Parkinson's, Motor Neurone Disease, head/neck oncology, or swallowing difficulties.",
      clinicianQuote:
        "Dignified swallowing safety and the ability to express one's thoughts are fundamental human needs. We tailor therapies to preserve voice, connection, and nutritional pleasure.",
      interventions: [
        "Bedside clinical dysphagia evaluations & IDDSI diet/fluid texture modifications",
        "Intensive post-stroke aphasia, dysarthria & apraxia speech re-training",
        "Voice therapy for vocal cord paresis, Parkinson's hypophonia & strain",
        "High-tech Alternative and Augmentative Communication (AAC) tablet setup",
      ],
      protocolSteps: [
        "Cranial nerve examination and oral-motor sensory assessment",
        "Clinical swallow evaluation with hydration/nutrition risk stratifying",
        "Targeted neuromuscular speech and swallowing exercise regimen",
        "Family and care team training on safe swallowing textures and posture",
      ],
    },
    {
      id: "psychotherapy",
      name: "Clinical Psychotherapy & Mental Health",
      category: "psych",
      tag: "Evidence-Based Psychological Support & CBT",
      badge: "BACP & UKCP Registered",
      image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=800&q=80",
      description:
        "Compassionate, confidential clinical psychology addressing medical trauma, anxiety disorders, chronic illness adjustment, depression, and carer burnout using CBT and psychodynamic models.",
      duration: "50 mins",
      delivery: "In-Clinic & Encrypted Video",
      governingBody: "British Association for Counselling & Psychotherapy (BACP)",
      price: "From £130",
      suitableFor: "Anyone navigating emotional distress, chronic diagnosis adjustment, medical PTSD, or family caregivers experiencing exhaustion.",
      clinicianQuote:
        "Physical rehabilitation cannot succeed in isolation from mental well-being. We provide a safe, non-judgmental space to unpack emotional vulnerability and build sustainable resilience.",
      interventions: [
        "Evidence-based Cognitive Behavioural Therapy (CBT) for anxiety & panic",
        "Trauma-informed psychotherapy for post-medical PTSD & life transitions",
        "Acceptance and Commitment Therapy (ACT) for chronic pain management",
        "Compassion-focused support for family caregivers experiencing burnout",
      ],
      protocolSteps: [
        "In-depth psychological intake and mental health history exploration",
        "Collaborative therapeutic formulation and symptom mapping",
        "Weekly 50-minute structured clinical psychotherapy sessions",
        "Mid-point outcome measurement and personalized relapse prevention plan",
      ],
    },
  ];

  const filtered =
    selectedCategory === "all"
      ? disciplines
      : disciplines.filter((d) => d.category === selectedCategory);

  return (
    <div className="w-full py-16 md:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8F6F3] border border-[#94D2BD] text-[#2A9D8F] text-[11px] font-semibold uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2A9D8F]" />
              <span className="text-[#1D3557]">The Four Restorative Disciplines</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1D3557] tracking-tight leading-tight">
              Multidisciplinary Clinical Therapy Portfolio
            </h2>
            <p className="text-[16px] text-[#457B9D] mt-2 max-w-2xl leading-relaxed">
              Fully coordinated rehabilitation delivered by HCPC-registered chartered clinicians across our Stockport clinic suites and direct in-home domiciliary visits.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white rounded-full border border-[#E2E8F0] shadow-2xs">
            {[
              { id: "all", label: "All Disciplines" },
              { id: "physio", label: "Physiotherapy" },
              { id: "ot", label: "Occupational Therapy" },
              { id: "slt", label: "Speech & Language" },
              { id: "psych", label: "Psychotherapy" },
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
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
                <div className="p-5 pt-6">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#2A9D8F] block mb-1">
                    {item.tag}
                  </span>
                  <h3 className="text-[20px] font-semibold text-[#1D3557] leading-snug group-hover:text-[#2A9D8F] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-[14px] text-[#457B9D] mt-2.5 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Interventions Highlight Box */}
                  <div className="mt-5 p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#1D3557] block mb-2">
                      Core Clinical Interventions
                    </span>
                    <ul className="space-y-1.5 text-[12px] text-[#457B9D]">
                      {item.interventions.slice(0, 3).map((inter, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-[15px] text-[#2A9D8F] shrink-0 mt-0.5">
                            check_circle
                          </span>
                          <span>{inter}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Specs Metric Pill Row */}
                  <div className="grid grid-cols-2 gap-3 mt-4 text-center">
                    <div className="bg-[#F8FAFC] p-2.5 rounded-lg border border-[#E2E8F0]">
                      <span className="block text-[9px] font-bold text-[#457B9D] uppercase tracking-wider">Session Time</span>
                      <span className="text-[12px] font-semibold text-[#1D3557] font-mono">{item.duration}</span>
                    </div>
                    <div className="bg-[#F8FAFC] p-2.5 rounded-lg border border-[#E2E8F0]">
                      <span className="block text-[9px] font-bold text-[#457B9D] uppercase tracking-wider">Delivery Mode</span>
                      <span className="text-[12px] font-semibold text-[#1D3557] truncate block">{item.delivery}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-5 pt-2 flex items-center gap-3">
                <button
                  onClick={() => setActiveModalDiscipline(item)}
                  className="flex-1 h-11 px-4 bg-[#F8FAFC] hover:bg-[#E8F6F3] border border-[#E2E8F0] hover:border-[#94D2BD] text-[#1D3557] text-[13px] font-semibold rounded-full transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Therapy Protocol</span>
                  <span className="material-symbols-outlined text-[16px] text-[#2A9D8F]">info</span>
                </button>

                <button
                  onClick={() => onOpenConsultation?.("therapy")}
                  className="flex-1 h-11 px-4 bg-[#2A9D8F] hover:bg-[#21867A] text-white text-[13px] font-semibold rounded-full transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs active:scale-95"
                >
                  <span>Book Assessment</span>
                  <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Clinical Protocol Modal Sheet */}
      {activeModalDiscipline && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1D3557]/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl border border-[#E2E8F0] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            {/* Modal Top Header */}
            <div className="bg-[#F8FAFC] px-6 py-5 border-b border-[#E2E8F0] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#E8F6F3] border border-[#94D2BD] flex items-center justify-center text-[#2A9D8F]">
                  <span className="material-symbols-outlined text-[20px]">healing</span>
                </div>
                <div>
                  <h3 className="text-[17px] font-semibold text-[#1D3557]">
                    {activeModalDiscipline.name}
                  </h3>
                  <p className="text-[11px] text-[#457B9D] font-semibold uppercase tracking-wider">
                    {activeModalDiscipline.tag}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setActiveModalDiscipline(null)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#457B9D] hover:text-[#1D3557] hover:bg-white transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 overflow-y-auto space-y-6">
              {/* Clinician Quote */}
              <div className="p-4 rounded-xl bg-[#E8F6F3] border border-[#94D2BD] flex items-start gap-3">
                <span className="material-symbols-outlined text-[#2A9D8F] text-[22px] shrink-0 mt-0.5">
                  format_quote
                </span>
                <div>
                  <p className="text-[13px] text-[#1D3557] font-medium leading-relaxed italic">
                    “{activeModalDiscipline.clinicianQuote}”
                  </p>
                  <span className="block text-[11px] font-semibold text-[#457B9D] mt-1">
                    — Senior Clinical Lead, {activeModalDiscipline.governingBody}
                  </span>
                </div>
              </div>

              {/* Protocol Spec Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
                  <span className="block text-[10px] uppercase font-bold text-[#457B9D]">Duration</span>
                  <span className="text-[12px] font-semibold text-[#1D3557] mt-0.5 block leading-tight font-mono">
                    {activeModalDiscipline.duration}
                  </span>
                </div>
                <div className="p-3 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
                  <span className="block text-[10px] uppercase font-bold text-[#457B9D]">Delivery</span>
                  <span className="text-[12px] font-semibold text-[#1D3557] mt-0.5 block leading-tight truncate">
                    {activeModalDiscipline.delivery}
                  </span>
                </div>
                <div className="p-3 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
                  <span className="block text-[10px] uppercase font-bold text-[#457B9D]">Governance</span>
                  <span className="text-[12px] font-semibold text-[#1D3557] mt-0.5 block leading-tight truncate">
                    HCPC Registered
                  </span>
                </div>
                <div className="p-3 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
                  <span className="block text-[10px] uppercase font-bold text-[#457B9D]">Pricing</span>
                  <span className="text-[12px] font-semibold text-[#2A9D8F] mt-0.5 block font-mono">
                    {activeModalDiscipline.price}
                  </span>
                </div>
              </div>

              {/* Suitable For */}
              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#457B9D] block mb-1">
                  Clinical Indications &amp; Patient Suitability
                </span>
                <p className="text-[13px] text-[#1D3557] font-medium leading-relaxed">
                  {activeModalDiscipline.suitableFor}
                </p>
              </div>

              {/* Full Clinical Interventions */}
              <div>
                <h4 className="text-[14px] font-semibold text-[#1D3557] mb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#2A9D8F] text-[18px]">verified</span>
                  Clinical Interventions &amp; Modalities
                </h4>
                <div className="space-y-2">
                  {activeModalDiscipline.interventions.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-[13px] text-[#457B9D]">
                      <span className="material-symbols-outlined text-[#2A9D8F] text-[16px] shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step-by-Step Pathway */}
              <div>
                <h4 className="text-[14px] font-semibold text-[#1D3557] mb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#2A9D8F] text-[18px]">timeline</span>
                  4-Step Assessment &amp; Treatment Pathway
                </h4>
                <div className="space-y-2.5">
                  {activeModalDiscipline.protocolSteps.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-[13px] text-[#457B9D]">
                      <span className="w-5 h-5 rounded-full bg-[#E8F6F3] border border-[#94D2BD] text-[#2A9D8F] font-semibold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                        0{idx + 1}
                      </span>
                      <span className="leading-snug">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Action Footer */}
            <div className="bg-[#F8FAFC] px-6 py-4 border-t border-[#E2E8F0] flex items-center justify-between gap-4">
              <button
                onClick={() => setActiveModalDiscipline(null)}
                className="px-5 h-11 bg-white border border-[#E2E8F0] hover:bg-[#F0F9FF] text-[#1D3557] text-[13px] font-semibold rounded-full transition-colors"
              >
                Close Details
              </button>

              <button
                onClick={() => {
                  setActiveModalDiscipline(null);
                  onOpenConsultation?.("therapy");
                }}
                className="px-7 h-11 bg-[#2A9D8F] hover:bg-[#21867A] text-white text-[13px] font-semibold rounded-full transition-all shadow-xs flex items-center gap-2"
              >
                <span>Book This Discipline</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
