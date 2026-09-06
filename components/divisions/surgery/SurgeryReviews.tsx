"use client";

import React from "react";

export default function SurgeryReviews() {
  const reviews = [
    {
      name: "Lady Charlotte H.",
      procedure: "Preservation Rhinoplasty",
      location: "Stockport Surgical Suite",
      quote:
        "My rhinoplasty was subtle, elegant, and completely preserved my natural nasal architecture. The ultrasonic piezo technique meant virtually no black eyes or facial bruising, and having my cast off after only 7 days was astonishing. The consultant surgeon answered every question with genuine clinical transparency.",
      badge: "Verified Surgical Patient",
      rating: 5,
    },
    {
      name: "Marcus K.",
      procedure: "360 VASER® Liposuction & Contouring",
      location: "Stockport Theatre Suite",
      quote:
        "High-definition 360 VASER removed stubborn flanks and abdominal tissue that years of strict nutrition and endurance training couldn't shift. The post-operative lymphatic drainage massages included in the surgical package accelerated my recovery immensely. Outstanding British surgical distinction.",
      badge: "Verified Surgical Patient",
      rating: 5,
    },
    {
      name: "Elena V.",
      procedure: "Dual-Plane Bespoke Breast Augmentation",
      location: "Stockport Hospital Suite",
      quote:
        "From the initial Crisalix 3D sizing consultation to my private en-suite recovery room, the care was world-class. The Motiva ergonomic implants sit naturally with zero visible edges. Knowing I have 2 years of unlimited surgeon aftercare gives total peace of mind.",
      badge: "Verified Surgical Patient",
      rating: 5,
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col items-center text-center max-w-[820px] mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8F6F3] border border-[#94D2BD] text-[#2A9D8F] text-[11px] font-semibold uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2A9D8F]" />
            Patient Outcomes &amp; Case Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#1D3557] tracking-tight leading-tight">
            Stories of Surgical Distinction &amp; Discretion
          </h2>
          <p className="text-[16px] text-[#457B9D] mt-2 max-w-xl leading-relaxed">
            Reflecting our uncompromising commitment to consultant-led practice, patient dignity, and exemplary clinical outcomes.
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
                  {review.procedure}
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
