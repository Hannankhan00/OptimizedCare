import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-[#E2E8F0] pt-14 pb-10 text-[#1D3557]">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#E2E8F0]">
          {/* Col 1: Brand & Clinical Governance */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-13 sm:w-11 sm:h-14 shrink-0">
                <Image
                  src="/assets/logo/logo.jpeg"
                  alt="OptimizedCare Logo"
                  fill
                  className="object-contain mix-blend-multiply"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[19px] sm:text-[21px] font-semibold text-[#1D3557] tracking-tight leading-tight">
                  OptimizedCare
                </span>
                <span className="text-[10px] text-[#457B9D] font-semibold tracking-widest uppercase">
                  Healthcare Group • Stockport &amp; UK
                </span>
              </div>
            </div>

            <p className="text-[13px] text-[#457B9D] leading-relaxed">
              OptimizedCare unites British surgical precision, doctor-led aesthetic dermatology, and dignified private residential nursing under centralized Care Quality Commission governance.
            </p>

            {/* CQC, GMC & HCPC Regulatory Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-[#E2E8F0] bg-[#F8FAFC] text-[11px] font-medium text-[#1D3557]">
                <span>CQC Regulated</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-[#E2E8F0] bg-[#F8FAFC] text-[11px] font-medium text-[#1D3557]">
                <span>GMC Specialist</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-[#E2E8F0] bg-[#F8FAFC] text-[11px] font-medium text-[#1D3557]">
                <span>HCPC &amp; CSP Certified</span>
              </div>
            </div>

            <div className="text-[11px] text-[#457B9D] pt-1">
              Official Hub: <span className="font-mono text-[#2A9D8F] font-semibold">OptimizedCare.org.pk</span>
            </div>
          </div>

          {/* Col 2: Divisions & Services */}
          <div className="flex flex-col gap-3">
            <h3 className="text-[11px] text-[#1D3557] font-semibold uppercase tracking-widest">
              Clinical Divisions
            </h3>
            <ul className="space-y-2 text-[13px] text-[#457B9D]">
              <li>
                <Link href="/care" className="hover:text-[#2A9D8F] transition-colors">
                  Supported Living &amp; Domiciliary Care
                </Link>
              </li>
              <li>
                <Link href="/aesthetics" className="hover:text-[#2A9D8F] transition-colors">
                  Advanced Medical Aesthetics
                </Link>
              </li>
              <li>
                <Link href="/surgery" className="hover:text-[#2A9D8F] transition-colors">
                  Cosmetic Surgeries &amp; Theatres
                </Link>
              </li>
              <li>
                <Link href="/therapy" className="hover:text-[#2A9D8F] transition-colors">
                  Diagnostic Center &amp; Clinical Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal & Governance */}
          <div className="flex flex-col gap-3">
            <h3 className="text-[11px] text-[#1D3557] font-semibold uppercase tracking-widest">
              Governance &amp; Trust
            </h3>
            <ul className="space-y-2 text-[13px] text-[#457B9D]">
              <li>
                <a href="#governance" className="hover:text-[#2A9D8F] transition-colors">
                  CQC Inspection Certificate
                </a>
              </li>
              <li>
                <a href="#disclosures" className="hover:text-[#2A9D8F] transition-colors">
                  GMC Register Verification
                </a>
              </li>
              <li>
                <a href="#chaperone" className="hover:text-[#2A9D8F] transition-colors">
                  Clinical Chaperone Policy
                </a>
              </li>
              <li>
                <a href="#gdpr" className="hover:text-[#2A9D8F] transition-colors">
                  GDPR &amp; Medical Record Privacy
                </a>
              </li>
              <li>
                <a href="#complaints" className="hover:text-[#2A9D8F] transition-colors">
                  Patient Advocacy &amp; Complaints
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Central Headquarters & Contact */}
          <div className="flex flex-col gap-3">
            <h3 className="text-[11px] text-[#1D3557] font-semibold uppercase tracking-widest">
              Headquarters &amp; Contact
            </h3>
            <div className="space-y-2.5 text-[13px] text-[#457B9D]">
              <div>
                <p className="font-semibold text-[#1D3557]">Head Office</p>
                <p className="text-[#457B9D]">24 Greek Street, Stockport, England, SK3 8AB</p>
              </div>
              <div className="pt-1 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#2A9D8F] text-[18px]">call</span>
                <a href="tel:+447404210566" className="font-semibold text-[#1D3557] hover:text-[#2A9D8F]">
                  +44 7404 210566
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#2A9D8F] text-[18px]">mail</span>
                <a
                  href="mailto:info@optimizedcare.org.pk"
                  className="text-[12px] text-[#457B9D] hover:text-[#2A9D8F]"
                >
                  info@optimizedcare.org.pk
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Medical Disclaimers */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-[#457B9D]">
          <div>
            &copy; {new Date().getFullYear()} OptimizedCare Healthcare Group Limited. All rights reserved.
          </div>
          <div className="text-center md:text-right max-w-xl text-[11px] leading-relaxed">
            All surgical and medical aesthetic procedures carry clinical risks. Consultations are conducted exclusively by GMC-registered medical practitioners. Care services are regulated by the Care Quality Commission (CQC).
          </div>
        </div>
      </div>
    </footer>
  );
}
