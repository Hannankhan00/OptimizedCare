"use client";

import React from "react";

export default function TherapyReviews() {
  const reviews = [
    {
      name: "Arthur M., KC",
      discipline: "Neurological Physiotherapy (Post-Stroke)",
      location: "In-Home Domiciliary Visit • Greater Manchester",
      quote:
        "Following a severe ischemic stroke, NHS community rehabilitation was limited to a few weeks. OptimizedCare’s chartered neuro-physiotherapist came to my home three times weekly. Their neuroplasticity drills and balance coaching enabled me to walk unaided in my garden within four months. Immensely competent and dignified.",
      badge: "Verified Rehabilitation Case",
      rating: 5,
    },
    {
      name: "Margaret S.",
      discipline: "Clinical Dysphagia & Speech Therapy",
      location: "Stockport Clinic Suite & Bedside Assessment",
      quote:
        "After a hospitalization episode, my mother was choking on thin liquids and losing weight rapidly. The specialist speech therapist evaluated her bedside within 48 hours, established an IDDSI Level 2 diet, and trained our carers on safe swallow postures. She has had zero chest infections since.",
      badge: "Family Advocate",
      rating: 5,
    },
    {
      name: "David L.",
      discipline: "Occupational Therapy & Home Adaptation",
      location: "Belgravia Residence",
      quote:
        "Living with advanced osteoarthritis, my stairs and bathroom had become terrifying hazards. The Occupational Therapist performed a masterly ergonomic audit, designed a level-access wet room, and liaised directly with our builders. I have reclaimed total self-reliance in my own home.",
      badge: "Verified Patient",
      rating: 5,
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col items-center text-center max-w-[820px] mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8F6F3] border border-[#94D2BD] text-[#2A9D8F] text-[11px] font-semibold uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2A9D8F]" />
            Clinical Outcomes &amp; Patient Voices
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#1D3557] tracking-tight leading-tight">
            Stories of Restored Movement, Voice &amp; Dignity
          </h2>
          <p className="text-[16px] text-[#457B9D] mt-2 max-w-xl leading-relaxed">
            Reflecting our commitment to evidence-based practice, patient independence, and exemplary multidisciplinary care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between p-6 md:p-8 bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] shadow-xs hover:border-[#94D2BD] transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-0.5 text-[#2A9D8F]">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-[18px]">
                        star
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full border border-[#94D2BD] bg-[#E8F6F3] text-[#2A9D8F] text-[10px] font-semibold uppercase tracking-wider">
                    <span className="material-symbols-outlined text-[13px]">verified</span>
                    {review.badge}
                  </span>
                </div>

                <p className="text-[14px] text-[#1D3557] leading-relaxed mb-6 italic">
                  “{review.quote}”
                </p>
              </div>

              <div className="pt-4 border-t border-[#E2E8F0] flex flex-col gap-0.5">
                <span className="text-[15px] font-semibold text-[#1D3557]">
                  {review.name}
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#2A9D8F]">
                  {review.discipline}
                </span>
                <span className="text-[11px] text-[#457B9D]">
                  {review.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
