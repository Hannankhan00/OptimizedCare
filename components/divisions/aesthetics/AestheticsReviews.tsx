"use client";

import React from "react";

export default function AestheticsReviews() {
  const reviews = [
    {
      name: "Lady Eleanor C.",
      title: "Micro-Botox & Subtle Malar Contouring",
      location: "Stockport Clinical Suite",
      quote:
        "I was terrified of looking 'done' or frozen. Dr. Al-Mansoor spent 40 minutes mapping my facial expressions and scanning my facial arteries with ultrasound before administering a drop. The outcome is extraordinarily natural—my colleagues keep telling me I look well-rested.",
      badge: "Verified Patient",
      rating: 5,
    },
    {
      name: "Marcus V.",
      title: "Morpheus8 Subdermal Remodeling",
      location: "Stockport Clinical Suite",
      quote:
        "As an executive in private equity, I needed jawline sharpening without surgical downtime or telltale signs. Two sessions of Morpheus8 with the clinical dermatology team tightened my submental profile significantly. The discreet private clinic suite in Stockport was impeccable.",
      badge: "Verified Patient",
      rating: 5,
    },
    {
      name: "Helena R.",
      title: "Ameela® Polynucleotide Tear Trough",
      location: "Stockport Clinical Suite",
      quote:
        "After an unfortunate experience elsewhere with tear trough filler that caused blue shadows and puffiness, I was referred to OptimizedCare. Their doctors dissolved the old product with ultrasound guidance and rebuilt my delicate under-eye skin with polynucleotides. Truly life-changing.",
      badge: "Verified Patient",
      rating: 5,
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col items-center text-center max-w-[820px] mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8F6F3] border border-[#94D2BD] text-[#2A9D8F] text-[11px] font-semibold uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2A9D8F]" />
            Patient Voices &amp; Case Outcomes
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#1D3557] tracking-tight leading-tight">
            Stories of Discretion &amp; Luminous Rejuvenation
          </h2>
          <p className="text-[16px] text-[#457B9D] mt-2 max-w-xl leading-relaxed">
            Reflecting our commitment to medical ethics, anatomical discretion, and natural aesthetic results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between p-6 md:p-8 bg-white rounded-2xl border border-[#E2E8F0] shadow-xs hover:border-[#94D2BD] transition-all duration-300"
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
                  {review.title}
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
