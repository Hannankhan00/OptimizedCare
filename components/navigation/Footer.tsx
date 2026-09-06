import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-[#D2D2D7] pt-14 pb-10 text-[#1D1D1F]">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#D2D2D7]">
          {/* Col 1: Brand & Clinical Governance */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#1D1D1F] flex items-center justify-center text-white shrink-0">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                >
                  <path d="M12 2v20M2 12h20" />
                  <circle cx="12" cy="12" r="9" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[18px] font-semibold text-[#1D1D1F] tracking-tight leading-tight">
                  OptimizedCare
                </span>
                <span className="text-[10px] text-[#6E6E73] font-semibold tracking-widest uppercase">
                  Healthcare Group • London &amp; UK
                </span>
              </div>
            </div>

            <p className="text-[13px] text-[#6E6E73] leading-relaxed">
              OptimizedCare unites British surgical precision, doctor-led aesthetic dermatology, and dignified private residential nursing under centralized Care Quality Commission governance.
            </p>

            {/* CQC, GMC & HCPC Regulatory Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-[#D2D2D7] text-[11px] font-medium text-[#1D1D1F]">
                <span>CQC Regulated</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-[#D2D2D7] text-[11px] font-medium text-[#1D1D1F]">
                <span>GMC Specialist</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-[#D2D2D7] text-[11px] font-medium text-[#1D1D1F]">
                <span>HCPC &amp; CSP Certified</span>
              </div>
            </div>

            <div className="text-[11px] text-[#6E6E73] pt-1">
              Official Hub: <span className="font-mono text-[#1D1D1F]">OptimizedCare.org.uk</span>
            </div>
          </div>

          {/* Col 2: Divisions & Services */}
          <div className="flex flex-col gap-3">
            <h3 className="text-[11px] text-[#1D1D1F] font-semibold uppercase tracking-widest">
              Clinical Divisions
            </h3>
            <ul className="space-y-2 text-[13px] text-[#6E6E73]">
              <li>
                <Link href="/care" className="hover:text-[#1D1D1F] transition-colors">
                  Supported &amp; Domiciliary Care
                </Link>
              </li>
              <li>
                <Link href="/aesthetics" className="hover:text-[#1D1D1F] transition-colors">
                  Advanced Medical Aesthetics
                </Link>
              </li>
              <li>
                <Link href="/surgery" className="hover:text-[#1D1D1F] transition-colors">
                  Consultant Cosmetic Surgery
                </Link>
              </li>
              <li>
                <Link href="/therapy" className="hover:text-[#1D1D1F] transition-colors">
                  Therapeutic &amp; Rehab Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal & Governance */}
          <div className="flex flex-col gap-3">
            <h3 className="text-[11px] text-[#1D1D1F] font-semibold uppercase tracking-widest">
              Governance &amp; Trust
            </h3>
            <ul className="space-y-2 text-[13px] text-[#6E6E73]">
              <li>
                <a href="#governance" className="hover:text-[#1D1D1F] transition-colors">
                  CQC Inspection Certificate
                </a>
              </li>
              <li>
                <a href="#disclosures" className="hover:text-[#1D1D1F] transition-colors">
                  GMC Register Verification
                </a>
              </li>
              <li>
                <a href="#chaperone" className="hover:text-[#1D1D1F] transition-colors">
                  Clinical Chaperone Policy
                </a>
              </li>
              <li>
                <a href="#gdpr" className="hover:text-[#1D1D1F] transition-colors">
                  GDPR &amp; Medical Record Privacy
                </a>
              </li>
              <li>
                <a href="#complaints" className="hover:text-[#1D1D1F] transition-colors">
                  Patient Advocacy &amp; Complaints
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Clinical Concierge Locations */}
          <div className="flex flex-col gap-3">
            <h3 className="text-[11px] text-[#1D1D1F] font-semibold uppercase tracking-widest">
              Clinical Concierge
            </h3>
            <div className="space-y-2.5 text-[13px] text-[#6E6E73]">
              <div>
                <p className="font-semibold text-[#1D1D1F]">10 Harley Street</p>
                <p className="text-[#6E6E73]">Marylebone, London W1G 9PF</p>
              </div>
              <div>
                <p className="font-semibold text-[#1D1D1F]">42 Belgrave Square</p>
                <p className="text-[#6E6E73]">Belgravia, London SW1X 8NT</p>
              </div>
              <div className="pt-1 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#1D1D1F] text-[18px]">call</span>
                <a href="tel:03331234567" className="font-semibold text-[#1D1D1F] hover:opacity-60">
                  0333 123 4567
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#1D1D1F] text-[18px]">mail</span>
                <a
                  href="mailto:concierge@optimizedcare.org.uk"
                  className="text-[12px] text-[#6E6E73] hover:text-[#1D1D1F]"
                >
                  concierge@optimizedcare.org.uk
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Medical Disclaimers */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-[#6E6E73]">
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
