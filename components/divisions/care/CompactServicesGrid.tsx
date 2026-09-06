"use client";

import React, { useState } from "react";

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tag: string;
  icon: string;
  summary: string;
  details: string;
  highlights: string[];
  clinicalFocus: string;
  image: string;
  colSpan?: string;
}

const servicesData: ServiceItem[] = [
  {
    id: "supported-living",
    number: "01",
    title: "Supported Living",
    tag: "Independence & Tenancy",
    icon: "holiday_village",
    summary:
      "Designed to help people with a wide range of support needs retain their independence by being supported in their own home, with their own tenancy and bills.",
    details:
      "Our supported living framework empowers adults with learning disabilities, neurodiversity, and mental health conditions to live fulfilling lives in their own homes. Individuals hold their own tenancy and are supported with managing finances, housing benefits, cooking, vocational pursuits, and community social inclusion.",
    highlights: [
      "Own tenancy agreement & personal key",
      "Support with budgeting, bills & housing benefits",
      "Tailored 1-to-1 or shared support frameworks",
      "Positive risk-taking and community autonomy",
    ],
    clinicalFocus: "Learning Disabilities, Autism & Neurodiversity",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    colSpan: "lg:col-span-8",
  },
  {
    id: "domiciliary-care",
    number: "02",
    title: "Domiciliary Care",
    tag: "Daily In-Home Support",
    icon: "home_health",
    summary:
      "Personalized visits put in place to support day-to-day household tasks, personal care, and activities allowing individuals to maintain quality of life.",
    details:
      "Also known as home care, our domiciliary services adapt around your exact morning, afternoon, or evening routines. From discreet personal hygiene and dressing to medication administration, nutrition, and companionship, we ensure you stay safe and comfortable in your home.",
    highlights: [
      "Flexible visits from 30 mins to full day blocks",
      "Medication prompting and MAR chart management",
      "Nutritious meal preparation & hydration tracking",
      "Gentle mobility assistance & fall prevention",
    ],
    clinicalFocus: "Elderly Care, Mobility Support & Daily Living",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
    colSpan: "lg:col-span-4",
  },
  {
    id: "complex-care",
    number: "03",
    title: "Complex Care",
    tag: "Clinical Continuing Care",
    icon: "vital_signs",
    summary:
      "Dedicated clinical care provided to patients with significant, continuing healthcare issues such as chronic illness, spinal cord injuries, brain damage, and MS.",
    details:
      "Our nurse-led complex care packages cater to individuals requiring high-dependency, long-term intervention. Supported by NHS Continuing Healthcare (CHC) and integrated clinical governance, our trained support workers manage specialized medical protocols with extreme clinical precision.",
    highlights: [
      "Tracheostomy care, enteral feeding (PEG) & suctioning",
      "Acquired brain injury (ABI) & spinal cord rehabilitation",
      "Multiple Sclerosis (MS) & motor neurone disease management",
      "24/7 on-call nurse oversight & clinical risk protocols",
    ],
    clinicalFocus: "Continuing Healthcare (CHC) & High Dependency",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    colSpan: "lg:col-span-4",
  },
  {
    id: "mental-health-support",
    number: "04",
    title: "Mental Health Support",
    tag: "Recovery-Focused Pathways",
    icon: "psychology",
    summary:
      "Empowering individuals to manage their conditions and build a fulfilling life through a recovery-focused approach that rebuilds control and confidence.",
    details:
      "We believe a diagnosis should never define someone’s horizon. Our mental health practitioners employ trauma-informed, recovery-focused methodologies that help clients identify triggers, cultivate emotional regulation, regain vocational confidence, and overcome social isolation.",
    highlights: [
      "Person-centred wellness recovery action plans (WRAP)",
      "Anxiety, depression, bipolar & dual diagnosis support",
      "Support with social integration and vocational pathways",
      "Collaborative work with Community Mental Health Teams (CMHT)",
    ],
    clinicalFocus: "Trauma-Informed Recovery & Psychosocial Health",
    image: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=800&q=80",
    colSpan: "lg:col-span-8",
  },
  {
    id: "live-in-care",
    number: "05",
    title: "Live-In Care",
    tag: "24/7 Full-Time Presence",
    icon: "nest_multi_room",
    summary:
      "A dedicated carer living directly in your home, allowing you to stay in familiar surroundings with your pets and loved ones while receiving full-time support.",
    details:
      "Live-in care provides an unparalleled alternative to residential care homes. A vetted, compassionate care worker resides in a private guest room in your house, offering constant reassurance, domestic upkeep, companionship, and round-the-clock safety whilst preserving all personal routines.",
    highlights: [
      "Round-the-clock companionship and total peace of mind",
      "Keep cherished family pets and familiar domestic routines",
      "Completely bespoke 1-to-1 attention not possible in a care home",
      "Continuity through carefully matched, vetted carers",
    ],
    clinicalFocus: "Dementia, Frailty & Constant Companion Care",
    image: "https://images.unsplash.com/photo-1516307365426-bea591f05011?auto=format&fit=crop&w=800&q=80",
    colSpan: "lg:col-span-6",
  },
  {
    id: "respite-care",
    number: "06",
    title: "Respite Care",
    tag: "Family Caregiver Relief",
    icon: "spa",
    summary:
      "Planned or emergency temporary care providing a vital break for family caregivers to rest, recharge, and maintain their own health and well-being.",
    details:
      "Caring for a loved one is profoundly rewarding, but can also lead to physical and emotional exhaustion. Our respite care team provides scheduled holiday relief, weekend breaks, or immediate emergency cover so family caregivers can recuperate knowing their relative is in safe, empathetic hands.",
    highlights: [
      "Scheduled respite for family holidays or business trips",
      "Emergency short-notice cover during sudden illness",
      "Seamless handover maintaining all personal care plans",
      "Available from several days to multiple weeks",
    ],
    clinicalFocus: "Caregiver Burnout Prevention & Short Stays",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
    colSpan: "lg:col-span-6",
  },
  {
    id: "palliative-care",
    number: "07",
    title: "Palliative & End of Life Care",
    tag: "Dignity & Comfort",
    icon: "favorite",
    summary:
      "Providing compassionate relief from symptoms and stress of serious illness, ensuring dignity and peace for individuals in their final months or years.",
    details:
      "Our end-of-life care team works closely with local hospices, GPs, and district nurses. We prioritize pain management, psychological ease, spiritual peace, and total dignity, allowing clients to spend their precious time at home surrounded by warmth, comfort, and loved ones.",
    highlights: [
      "Advanced symptom, nausea, and pain management",
      "Full partnership with MacMillan nurses, GPs, and hospices",
      "Compassionate emotional and bereavement guidance for families",
      "Dignified personal care maintaining complete privacy and peace",
    ],
    clinicalFocus: "Palliative Symptom Relief & Bereavement Support",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
    colSpan: "lg:col-span-6",
  },
  {
    id: "hospital-to-home",
    number: "08",
    title: "Hospital to Home",
    tag: "Rehabilitation & Step-Down",
    icon: "transfer_within_a_station",
    summary:
      "Enables a smooth, rapid transition from hospital back to home, providing short-term recoup support or ongoing care as needs evolve.",
    details:
      "Delayed hospital discharge can lead to loss of mobility and hospital-acquired complications. Our clinical team coordinates directly with discharge liaison teams to inspect the home environment, install necessary aids, and provide step-down rehabilitation care from the hour of arrival.",
    highlights: [
      "Rapid turnaround discharge packages within 24 to 48 hours",
      "Immediate home risk and occupational mobility assessments",
      "Post-operative wound observation & medication reconciliation",
      "Re-ablement support restoring functional independence",
    ],
    clinicalFocus: "Discharge Coordination & Step-Down Recovery",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=800&q=80",
    colSpan: "lg:col-span-6",
  },
];

export default function CompactServicesGrid() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services-grid" className="w-full py-20 md:py-28 bg-[#FBFBFD]">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Apple Centered Eyebrow & Headline */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-block p-1 rounded-full bg-[#E5E5EA]/60 ring-1 ring-black/5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#0D5C3A]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0D5C3A]">
                Comprehensive Care Catalogue
              </span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#1D1D1F] tracking-tight leading-[1.12] text-balance">
            Every Service Tailored. No Pre-Defined Boxes.
          </h2>

          <p className="text-[17px] sm:text-[18px] text-[#6E6E73] font-normal leading-relaxed text-pretty">
            We do not force individuals into rigid models. Explore our 8 accredited clinical pathways designed to support autonomy, safety, and quality of life.
          </p>
        </div>

        {/* Apple Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {servicesData.map((svc) => (
            <div
              key={svc.id}
              className={`${svc.colSpan || "lg:col-span-6"} group relative flex flex-col justify-between p-2 rounded-[2rem] bg-[#E5E5EA]/40 ring-1 ring-black/5 hover:ring-[#0D5C3A]/20 transition-all duration-500 shadow-sm hover:shadow-md`}
            >
              {/* Inner Double-Bezel Core */}
              <div className="relative flex flex-col h-full bg-white rounded-[calc(2rem-0.5rem)] p-6 sm:p-8 overflow-hidden">
                {/* Background Accent Mesh (Subtle Emerald) */}
                <div className="pointer-events-none absolute -top-16 -right-16 w-48 h-48 bg-gradient-to-bl from-[#ECFDF5] to-transparent rounded-full opacity-60 group-hover:scale-125 transition-transform duration-700" />

                {/* Top Row: Service Number & Tag */}
                <div className="relative flex items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0D5C3A] transition-colors duration-300">
                      <span className="material-symbols-outlined text-[20px] text-[#0D5C3A] group-hover:text-white transition-colors">
                        {svc.icon}
                      </span>
                    </div>
                    <span className="text-[12px] font-bold text-[#86868B] tracking-wider tnum">
                      {svc.number}
                    </span>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-[#F5F5F7] border border-[#E5E5EA] text-[11px] font-semibold text-[#1D1D1F] tracking-wide">
                    {svc.tag}
                  </span>
                </div>

                {/* Title & Summary */}
                <div className="relative space-y-3 mb-6">
                  <h3 className="text-[22px] sm:text-[24px] font-semibold text-[#1D1D1F] tracking-tight group-hover:text-[#0D5C3A] transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-[15px] text-[#6E6E73] leading-relaxed">
                    {svc.summary}
                  </p>
                </div>

                {/* Key Bullet Highlights */}
                <div className="relative space-y-2.5 mb-8 flex-1">
                  {svc.highlights.slice(0, 3).map((hl, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <span className="w-4 h-4 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-[#0D5C3A] text-[11px]">
                          check
                        </span>
                      </span>
                      <span className="text-[13px] text-[#424245] leading-snug">{hl}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom Action Bar */}
                <div className="relative pt-4 border-t border-[#F5F5F7] flex items-center justify-between gap-4">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#0D5C3A] truncate">
                    {svc.clinicalFocus}
                  </div>

                  <button
                    onClick={() => setSelectedService(svc)}
                    className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#1D1D1F] hover:text-[#0D5C3A] transition-colors cursor-pointer group-hover:translate-x-1 duration-300"
                  >
                    <span>View Care Details</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Apple Sheet / Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl p-2 rounded-[2.5rem] bg-white/95 ring-1 ring-black/10 shadow-2xl overflow-hidden animate-scaleUp">
            <div className="bg-white rounded-[2rem] p-6 sm:p-8 max-h-[85vh] overflow-y-auto space-y-6">
              {/* Modal Header */}
              <div className="flex items-start justify-between gap-4 border-b border-[#E5E5EA] pb-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#0D5C3A] text-[24px]">
                      {selectedService.icon}
                    </span>
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0D5C3A]">
                      Pathway {selectedService.number} • {selectedService.tag}
                    </span>
                    <h3 className="text-2xl font-bold text-[#1D1D1F] tracking-tight">
                      {selectedService.title}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedService(null)}
                  className="w-9 h-9 rounded-full bg-[#F5F5F7] hover:bg-[#E5E5EA] flex items-center justify-center text-[#6E6E73] hover:text-[#1D1D1F] transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">close</span>
                </button>
              </div>

              {/* Service Hero Image */}
              <div className="rounded-2xl overflow-hidden border border-[#E5E5EA]">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-52 object-cover"
                />
              </div>

              {/* Deep Narrative Description */}
              <div className="space-y-3">
                <h4 className="text-[14px] font-bold text-[#1D1D1F] uppercase tracking-wider">
                  Care Model &amp; Clinical Delivery
                </h4>
                <p className="text-[15px] text-[#424245] leading-relaxed">
                  {selectedService.details}
                </p>
              </div>

              {/* Full Highlights Checklist */}
              <div className="space-y-3 bg-[#FBFBFD] p-5 rounded-2xl border border-[#E5E5EA]">
                <h4 className="text-[13px] font-bold text-[#1D1D1F] uppercase tracking-wider">
                  Key Service Inclusions
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedService.highlights.map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="w-4 h-4 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-[#0D5C3A] text-[11px]">
                          check
                        </span>
                      </span>
                      <span className="text-[13px] text-[#1D1D1F] font-medium leading-snug">
                        {hl}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#E5E5EA]">
                <div className="text-[13px] text-[#6E6E73]">
                  Direct referral via <span className="font-semibold text-[#0D5C3A]">0161 478 5814</span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="flex-1 sm:flex-none px-4 py-2.5 rounded-full border border-[#E5E5EA] text-[14px] font-medium text-[#1D1D1F] hover:bg-[#F5F5F7] transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                  <a
                    href="#contact-compact"
                    onClick={() => setSelectedService(null)}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#0D5C3A] text-white text-[14px] font-medium hover:bg-[#0A4A2E] transition-colors shadow-sm cursor-pointer"
                  >
                    <span>Enquire for this Service</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
