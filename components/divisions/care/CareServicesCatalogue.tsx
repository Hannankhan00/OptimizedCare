"use client";

import React, { useState } from "react";

interface CareServicesCatalogueProps {
  onOpenConsultation?: (dept: string) => void;
}

export default function CareServicesCatalogue({ onOpenConsultation }: CareServicesCatalogueProps) {
  const [activeTab, setActiveTab] = useState<number>(0);

  const services = [
    {
      id: "supported-living",
      title: "Supported Living Services",
      subtitle: "Autonomy, Tenancy & Community Empowerment",
      icon: "apartment",
      badge: "Adults 18–65 & Neurodiverse",
      image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1000&q=80",
      description:
        "Specialist supported living enabling young adults and individuals with autism, learning disabilities, or brain injuries to live securely in private or shared tenancies with structured support.",
      provisions: [
        "Positive Risk-Taking frameworks promoting independent cooking, budgeting & life skills",
        "Tenancy preservation, utility management and direct welfare liaison",
        "Community inclusion, educational course enrollment and vocational training pathways",
        "24/7 waking-night or sleep-in support teams supervised by Registered Care Managers",
      ],
      suitableFor: "Adults transitioning to independent tenancy requiring 1:1 or 2:1 structured care.",
      cqcCategory: "Supported Living Regulated Activity",
    },
    {
      id: "domiciliary",
      title: "Domiciliary Visiting Home Care",
      subtitle: "Structured Daily Visits & Medication Governance",
      icon: "home",
      badge: "Flexible Visits from 1 to 12 Hours",
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80",
      description:
        "Compassionate daily or weekly visits tailored around routine, nutrition, hygiene, and clinical medication administration in the comfort of your existing home.",
      provisions: [
        "Morning, midday, and bedtime personal hygiene, bathing, and dressing support",
        "MAR-chart verified medication administration, prescription collection & pharmacy sync",
        "Nutritionally balanced meal preparation adhering to diabetic, renal, or swallowing plans",
        "Household upkeep, clinical errands, and proactive companion wellbeing checks",
      ],
      suitableFor: "Elderly seniors and recovering patients wanting regular companionship and clinical safety.",
      cqcCategory: "Personal Care in Domestic Dwellings",
    },
    {
      id: "live-in",
      title: "24/7 Dedicated Live-in Care",
      subtitle: "Constant One-to-One Home Continuity",
      icon: "healing",
      badge: "Full-Time Residence Carer",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80",
      description:
        "A highly qualified, rigorously vetted carer resides in the patient's home, ensuring round-the-clock safety, immediate assistance, and genuine one-to-one companionship without the stress of care homes.",
      provisions: [
        "Continuous 24-hour presence with optional waking-night or sleep-in coverage",
        "Full preservation of daily habits, family visits, garden routines, and pet companionship",
        "Fall prevention protocols and immediate emergency medical coordination",
        "Seamless carer handovers every 2 to 3 weeks for guaranteed zero disruption in service",
      ],
      suitableFor: "Patients with advanced age, high dependency, or couples wishing to remain together at home.",
      cqcCategory: "Continuous Residential Accommodation Care",
    },
    {
      id: "complex-care",
      title: "Specialist Dementia & Complex Care",
      subtitle: "Nurse-Led Clinical Interventions",
      icon: "medical_services",
      badge: "Nurse-Led & Palliative",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=1000&q=80",
      description:
        "Specialist healthcare protocols supervised by clinical nurse specialists for advanced dementia, post-stroke rehabilitation, Parkinson's disease, PEG feeding, and catheter care.",
      provisions: [
        "Advanced dementia care using validated Montessori and reminiscence therapy techniques",
        "Stoma, catheter, bowel management, and clinical enteral feeding (PEG/JEJ)",
        "Post-stroke physical mobility therapy and speech liaison under multidisciplinary guidance",
        "Compassionate end-of-life palliative comfort care alongside NHS hospice teams",
      ],
      suitableFor: "Individuals with acute medical diagnoses, palliative requirements, or complex neuro conditions.",
      cqcCategory: "Nursing & Complex Regulated Intervention",
    },
  ];

  const current = services[activeTab];

  return (
    <div className="w-full bg-white rounded-xl border border-[#E2E8F0] shadow-sm overflow-hidden">
      {/* Header Banner */}
      <div className="p-6 md:p-8 border-b border-[#E2E8F0] bg-[#eff4ff]/40">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#fedeb2]/40 text-[#725b38] text-[11px] font-semibold uppercase tracking-wider border border-[#C5A880]/30 mb-2">
              <span className="material-symbols-outlined text-[14px]">verified</span>
              Care Component 01 • Regulated Service Catalogue
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold text-[#0A192F] tracking-tight">
              Supported Living, Domiciliary &amp; Live-In Provisions
            </h3>
            <p className="text-[15px] text-[#44474D] mt-1">
              Select a specialized care discipline to review service specifics, clinical staffing, and CQC registration categories.
            </p>
          </div>
          <div className="flex-shrink-0">
            <span className="inline-flex items-center gap-1 text-[12px] font-medium text-[#725b38] bg-white px-3 py-1.5 rounded border border-[#E2E8F0]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Accepting Private &amp; Direct Payment Referrals
            </span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pt-6 scrollbar-none">
          {services.map((svc, idx) => (
            <button
              key={svc.id}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-[4px] text-[13px] font-medium whitespace-nowrap transition-all cursor-pointer border ${
                activeTab === idx
                  ? "bg-[#0A192F] text-white border-[#0A192F] shadow-sm"
                  : "bg-white text-[#44474D] border-[#E2E8F0] hover:bg-[#f8f9ff] hover:text-[#0A192F]"
              }`}
            >
              <span className="material-symbols-outlined text-[18px] text-[#C5A880]">
                {svc.icon}
              </span>
              <span>{svc.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tab Detail Body */}
      <div className="p-6 md:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Image & Badging */}
        <div className="lg:col-span-5">
          <div className="relative rounded-lg overflow-hidden border border-[#E2E8F0] shadow-md group">
            <img
              src={current.image}
              alt={current.title}
              className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="inline-block px-2.5 py-1 rounded bg-[#C5A880] text-[#0A192F] text-[11px] font-bold uppercase tracking-wider mb-1">
                {current.badge}
              </span>
              <p className="text-[13px] text-white/90 font-medium">
                {current.cqcCategory}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Provisions & Details */}
        <div className="lg:col-span-7 space-y-5">
          <div>
            <span className="text-[12px] font-semibold text-[#725b38] uppercase tracking-wider">
              {current.subtitle}
            </span>
            <h4 className="text-2xl font-semibold text-[#0A192F] tracking-tight mt-0.5">
              {current.title}
            </h4>
            <p className="text-[15px] text-[#44474D] mt-2 leading-relaxed">
              {current.description}
            </p>
          </div>

          <div className="bg-[#f8f9ff] p-4 rounded-lg border border-[#E2E8F0]">
            <p className="text-[12px] font-semibold text-[#0A192F] uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-[#725b38]">clinical_notes</span>
              Core Regulated Provisions
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[13px] text-[#44474D]">
              {current.provisions.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[15px] text-[#2D5A46] flex-shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-between gap-4 pt-2 border-t border-[#E2E8F0]">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#64748B] block">Best Suited For</span>
              <p className="text-[13px] font-medium text-[#0A192F]">{current.suitableFor}</p>
            </div>
            <button
              onClick={() => onOpenConsultation?.("care")}
              className="h-10 px-5 bg-[#0A192F] text-white font-medium text-[13px] rounded-[4px] border border-[#C5A880] hover:bg-[#152542] transition-colors shadow-sm flex items-center gap-2 flex-shrink-0 cursor-pointer"
            >
              <span>Enquire for Service</span>
              <span className="material-symbols-outlined text-[16px] text-[#C5A880]">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
