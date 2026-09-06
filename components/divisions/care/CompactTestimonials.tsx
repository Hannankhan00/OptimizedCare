"use client";

import React from "react";

const testimonials = [
  {
    quote:
      "Amazing communicators — the regular updates and pictures we receive mean so much to our family. You promote real family relationships and we are always warmly welcomed into our loved one's home.",
    author: "Family of Supported Living Resident",
    location: "Stockport, Greater Manchester",
    tag: "Supported Living",
  },
  {
    quote:
      "We feel so confident in your approach. Everything you have implemented, especially positive risk taking such as outdoor hiking and bouldering, has worked so well to build his self-esteem.",
    author: "Parent of Neurodiverse Adult Client",
    location: "Cheshire",
    tag: "Positive Risk Taking",
  },
  {
    quote:
      "Before our loved one received your care, our family was in a state of sheer despair. The team goes above and beyond every single day. We have seen a remarkable positive change in behaviour and overall happiness.",
    author: "Guardian of Complex Care Client",
    location: "High Peak",
    tag: "Positive Behaviour Support",
  },
  {
    quote:
      "Professional, caring, and truly dedicated. It is extraordinarily rare to find a committed group of support workers who genuinely care and communicate so transparently with us.",
    author: "Family Member",
    location: "Manchester",
    tag: "Domiciliary Care",
  },
];

export default function CompactTestimonials() {
  return (
    <section className="w-full py-20 md:py-28 bg-white border-b border-[#E5E5EA]">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-block p-1 rounded-full bg-[#E5E5EA]/60 ring-1 ring-black/5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#0D5C3A]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0D5C3A]">
                Family Testimonials
              </span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#1D1D1F] tracking-tight leading-[1.12] text-balance">
            Don’t Just Take It From Us.
          </h2>

          <p className="text-[17px] sm:text-[18px] text-[#6E6E73] font-normal leading-relaxed text-pretty">
            Voices of the families and individuals whose lives have been transformed through compassionate partnership with our Supported Care Services.
          </p>
        </div>

        {/* Testimonials 4-Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-2 rounded-[2rem] bg-[#E5E5EA]/40 ring-1 ring-black/5 flex flex-col justify-between"
            >
              <div className="bg-white rounded-[calc(2rem-0.5rem)] p-7 sm:p-8 flex flex-col justify-between h-full space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[#0D5C3A]">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="material-symbols-outlined text-[18px] fill-current">
                          star
                        </span>
                      ))}
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] text-[#0D5C3A] text-[11px] font-semibold">
                      {t.tag}
                    </span>
                  </div>

                  <p className="text-[16px] text-[#1D1D1F] leading-relaxed italic">
                    “{t.quote}”
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F5F5F7] flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] flex items-center justify-center font-bold text-[#0D5C3A] text-[13px]">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-[13px] font-semibold text-[#1D1D1F]">{t.author}</h4>
                    <p className="text-[11px] text-[#86868B]">{t.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
