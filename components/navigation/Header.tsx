"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header({
  onOpenConsultation,
}: {
  onOpenConsultation?: () => void;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "The Trust", href: "/" },
    { name: "Supported Care", href: "/care" },
    { name: "Advanced Aesthetics", href: "/aesthetics" },
    { name: "Cosmetic Surgery", href: "/surgery" },
    { name: "Therapeutic Services", href: "/therapy" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all">
      {/* 1. Top Utility / Trust Ribbon */}
      <div className="w-full bg-white text-[#1D3557] border-b border-[#E2E8F0] text-[11px] font-medium tracking-wide">
        <div className="max-w-[1360px] mx-auto px-4 md:px-8 lg:px-12 h-8 flex items-center justify-between">
          {/* Left: Trust & CQC Seal */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2A9D8F]" />
              <span className="text-[#1D3557] font-semibold uppercase tracking-wider text-[10px]">
                CQC Outstanding
              </span>
            </div>
            <span className="text-[#E2E8F0] hidden sm:inline">•</span>
            <span className="text-[#457B9D] hidden sm:inline">
              24 Greek Street, Stockport
            </span>
          </div>

          {/* Right: Direct Telephone & Governance */}
          <div className="flex items-center gap-4 whitespace-nowrap">
            <a
              href="tel:+447404210566"
              className="flex items-center gap-1.5 text-[#1D3557] hover:text-[#2A9D8F] transition-colors"
            >
              <span className="material-symbols-outlined text-[15px] text-[#2A9D8F]">call</span>
              <span className="tnum font-semibold">+44 7404 210566</span>
            </a>
            <span className="text-[#E2E8F0] hidden md:inline">|</span>
            <div className="flex items-center gap-1.5 text-[#457B9D]">
              <span className="material-symbols-outlined text-[15px] text-[#2A9D8F]">verified</span>
              <span>GMC Specialist Regulated</span>
            </div>
            <span className="text-[#E2E8F0] hidden sm:inline">|</span>
            <span className="text-[#457B9D] hidden sm:inline">
              Mon–Sat: 08:00 – 20:00
            </span>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="w-full bg-white/95 backdrop-blur-md border-b border-[#E2E8F0]">
        <div className="h-20 max-w-[1360px] mx-auto px-4 md:px-8 lg:px-12 flex items-center justify-between gap-6">
          {/* Brand Crest & Title */}
          <Link href="/" className="flex items-center gap-3.5 shrink-0 group">
            <div className="w-10 h-10 rounded-full bg-[#1D3557] flex items-center justify-center text-white group-hover:bg-[#2A9D8F] transition-colors shadow-xs">
              <svg
                className="w-5 h-5 text-[#94D2BD]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2v20M2 12h20" />
                <circle cx="12" cy="12" r="9" />
              </svg>
            </div>
            <span className="text-[20px] font-semibold text-[#1D3557] tracking-tight leading-tight whitespace-nowrap">
              OptimizedCare
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 whitespace-nowrap">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[14px] transition-all py-1 border-b-2 whitespace-nowrap ${
                    isActive
                      ? "text-[#1D3557] border-[#2A9D8F] font-semibold"
                      : "text-[#457B9D] border-transparent hover:text-[#1D3557] hover:border-[#94D2BD] font-medium"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Primary Action Button */}
          <div className="flex items-center gap-3 shrink-0 whitespace-nowrap">
            <button
              onClick={() => {
                if (onOpenConsultation) {
                  onOpenConsultation();
                } else {
                  const el = document.getElementById("consultation-modal-trigger");
                  if (el) el.click();
                }
              }}
              className="inline-flex items-center justify-center h-11 px-6 bg-[#2A9D8F] text-white text-[14px] font-medium rounded-full hover:bg-[#21867A] active:scale-[0.985] transition-all shadow-xs cursor-pointer whitespace-nowrap"
            >
              <span>Book Consultation</span>
            </button>

            {/* Mobile Drawer Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#1D3557] hover:bg-[#F0F9FF] rounded-full transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              <span className="material-symbols-outlined text-[26px]">
                {mobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#E2E8F0] px-6 py-5 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-3">
            <div className="pb-3 border-b border-[#E2E8F0] flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-widest text-[#457B9D] font-semibold">
                Healthcare Divisions
              </span>
              <span className="text-[11px] font-semibold text-[#2A9D8F] bg-[#E8F6F3] border border-[#94D2BD] px-2 py-0.5 rounded-full">
                CQC Outstanding
              </span>
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 text-[15px] font-medium text-[#1D3557] hover:text-[#2A9D8F]"
              >
                <span>{link.name}</span>
                <span className="material-symbols-outlined text-[16px] text-[#457B9D]">
                  chevron_right
                </span>
              </Link>
            ))}
            <div className="pt-3 border-t border-[#E2E8F0] flex flex-col gap-2.5">
              <a
                href="tel:+447404210566"
                className="flex items-center justify-center gap-2 py-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-full text-[14px] font-semibold text-[#1D3557]"
              >
                <span className="material-symbols-outlined text-[18px] text-[#2A9D8F]">call</span>
                <span>+44 7404 210566</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenConsultation) onOpenConsultation();
                }}
                className="w-full py-2.5 bg-[#2A9D8F] text-white text-[14px] font-medium rounded-full hover:bg-[#21867A] transition-colors"
              >
                Book Priority Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
