"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import ConsultationModal from "@/components/common/ConsultationModal";
import SurgeryDivisionSection from "@/components/divisions/SurgeryDivisionSection";

export default function SurgeryPage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <>
      <Header onOpenConsultation={() => setIsConsultationOpen(true)} />

      <main className="w-full pt-28 bg-[#F7F4EC] min-h-screen text-[#211E1A]">
        {/* Department Hero */}
        <section className="w-full bg-[#F7F4EC] py-14 md:py-20 border-b border-[#DDD3BF]">
          <div className="max-w-[1360px] mx-auto px-4 md:px-8 lg:px-12">
            {/* Back Button */}
            <div className="mb-6">
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#6B6457] hover:text-[#211E1A] transition-colors py-1 px-2.5 rounded bg-white border border-[#DDD3BF]"
              >
                <span className="material-symbols-outlined text-[16px] text-[#A85D3D]">arrow_back</span>
                <span>Back to Main Home Page (OptimizedCare)</span>
              </Link>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#211E1A] text-[#A85D3D] text-[11px] font-semibold uppercase tracking-widest border border-[#A85D3D]/40">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A85D3D]"></span>
                  Division 03 • GMC Specialist Registered Consultant Surgeons
                </div>
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-semibold text-[#211E1A] tracking-tight leading-[1.15]">
                  Consultant Cosmetic &amp; Reconstructive Surgery
                </h1>
                <p className="text-[17px] text-[#5A5347] leading-relaxed">
                  Pioneering surgical distinction in breast augmentation, preservation rhinoplasty, high-definition VASER liposuction, and deep plane facial surgery. Delivered in CQC-registered hospital theatres in central London with BAAPS &amp; BAPRAS consultant surgeons.
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    onClick={() => setIsConsultationOpen(true)}
                    className="h-11 px-6 bg-[#211E1A] text-white font-medium text-[14px] rounded-[4px] border border-[#A85D3D] hover:bg-[#3A342B] transition-colors shadow-sm cursor-pointer"
                  >
                    Book Surgeon Consultation
                  </button>
                  <a
                    href="tel:03331234567"
                    className="h-11 px-5 bg-white border border-[#DDD3BF] text-[#211E1A] font-semibold text-[14px] rounded-[4px] flex items-center gap-2 hover:bg-[#EFEAE0] transition-colors"
                  >
                    <span className="material-symbols-outlined text-[#A85D3D] text-[18px]">call</span>
                    <span>0333 123 4567</span>
                  </a>
                </div>
              </div>

              <div className="flex-1 w-full max-w-lg lg:max-w-none">
                <div className="relative rounded-xl overflow-hidden shadow-xl border border-[#DDD3BF]">
                  <img
                    alt="Consultant Plastic and Reconstructive Surgery"
                    className="w-full aspect-[4/3] object-cover"
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur p-4 rounded-lg border border-[#DDD3BF] shadow-sm flex items-center justify-between">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-[#8A4530]">
                        BAAPS &amp; BAPRAS Fellowships
                      </p>
                      <p className="text-[14px] font-semibold text-[#211E1A]">
                        GMC Specialist Register (Plastic Surgery)
                      </p>
                    </div>
                    <span className="w-3 h-3 rounded-full bg-[#1E3A2F]"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3 Dedicated Surgery Division Components */}
        <div className="max-w-[1360px] mx-auto px-4 md:px-8 lg:px-12">
          <SurgeryDivisionSection onOpenConsultation={() => setIsConsultationOpen(true)} />
        </div>
      </main>

      <Footer />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultDepartment="surgery"
      />
    </>
  );
}
