"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import ConsultationModal from "@/components/common/ConsultationModal";
import CareDivisionSection from "@/components/divisions/CareDivisionSection";

export default function CarePage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <>
      <Header onOpenConsultation={() => setIsConsultationOpen(true)} />

      <main className="w-full pt-28 bg-[#f8f9ff] min-h-screen text-[#0b1c30]">
        {/* Department Hero */}
        <section className="w-full bg-[#f8f9ff] py-14 md:py-20 border-b border-[#E2E8F0]">
          <div className="max-w-[1360px] mx-auto px-4 md:px-8 lg:px-12">
            {/* Back Button */}
            <div className="mb-6">
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#64748B] hover:text-[#0A192F] transition-colors py-1 px-2.5 rounded bg-white border border-[#E2E8F0]"
              >
                <span className="material-symbols-outlined text-[16px] text-[#C5A880]">arrow_back</span>
                <span>Back to Main Home Page (OptimizedCare)</span>
              </Link>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#fedeb2]/40 text-[#725b38] text-[11px] font-semibold uppercase tracking-widest border border-[#C5A880]/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#725b38]"></span>
                  Division 01 • Domiciliary, Supported Living &amp; Private Nursing
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-semibold text-[#0A192F] tracking-tight leading-[1.15]">
                  Dignified Residential &amp; Supported Care Services
                </h1>
                <p className="text-[17px] text-[#44474D] leading-relaxed">
                  Person-centered home care, specialized dementia support, 24/7 live-in nursing, and supported living across London and the UK. Regulated under CQC clinical governance to ensure comfort, safety, and independence.
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    onClick={() => setIsConsultationOpen(true)}
                    className="h-11 px-6 bg-[#0A192F] text-white font-medium text-[14px] rounded-[4px] border border-[#C5A880] hover:bg-[#152542] transition-colors shadow-sm cursor-pointer"
                  >
                    Arrange Care Assessment
                  </button>
                  <a
                    href="tel:03331234567"
                    className="h-11 px-5 bg-white border border-[#E2E8F0] text-[#0A192F] font-semibold text-[14px] rounded-[4px] flex items-center gap-2 hover:bg-[#eff4ff] transition-colors"
                  >
                    <span className="material-symbols-outlined text-[#C5A880] text-[18px]">call</span>
                    <span>0333 123 4567</span>
                  </a>
                </div>
              </div>

              <div className="flex-1 w-full max-w-lg lg:max-w-none">
                <div className="relative rounded-xl overflow-hidden shadow-xl border border-[#E2E8F0]">
                  <img
                    alt="Compassionate Private Nursing and Supported Care"
                    className="w-full aspect-[4/3] object-cover"
                    src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1000&q=80"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur p-4 rounded-lg border border-[#E2E8F0] shadow-sm flex items-center justify-between">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-[#725b38]">
                        CQC Inspection Seal
                      </p>
                      <p className="text-[14px] font-semibold text-[#0A192F]">
                        Rated “Outstanding” in Well-Led &amp; Caring
                      </p>
                    </div>
                    <span className="w-3 h-3 rounded-full bg-[#1E3A2F]"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3 Dedicated Care Division Components */}
        <div className="max-w-[1360px] mx-auto px-4 md:px-8 lg:px-12">
          <CareDivisionSection onOpenConsultation={() => setIsConsultationOpen(true)} />
        </div>
      </main>

      <Footer />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultDepartment="care"
      />
    </>
  );
}
