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
      <div className="w-full bg-white text-[#1D1D1F] border-b border-[#D2D2D7] text-[11px] font-medium tracking-wide">
        <div className="max-w-[1360px] mx-auto px-4 md:px-8 lg:px-12 h-8 flex items-center justify-between">
          {/* Left: Trust & CQC Seal */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1D1D1F]" />
              <span className="text-[#1D1D1F] font-semibold uppercase tracking-wider text-[10px]">
                CQC Outstanding
              </span>
            </div>
            <span className="text-[#D2D2D7] hidden sm:inline">•</span>
            <span className="text-[#6E6E73] hidden sm:inline">
              Harley Street &amp; Belgravia Enclaves
            </span>
          </div>

          {/* Right: Direct Telephone & Governance */}
          <div className="flex items-center gap-4 whitespace-nowrap">
            <a
              href="tel:03331234567"
              className="flex items-center gap-1.5 text-[#1D1D1F] hover:opacity-60 transition-opacity"
            >
              <span className="material-symbols-outlined text-[15px] text-[#1D1D1F]">call</span>
              <span className="tnum font-semibold">0333 123 4567</span>
            </a>
            <span className="text-[#D2D2D7] hidden md:inline">|</span>
            <div className="flex items-center gap-1.5 text-[#6E6E73]">
              <span className="material-symbols-outlined text-[15px] text-[#1D1D1F]">verified</span>
              <span>GMC Specialist Regulated</span>
            </div>
            <span className="text-[#D2D2D7] hidden sm:inline">|</span>
            <span className="text-[#6E6E73] hidden sm:inline">
              Mon–Sat: 08:00 – 20:00
            </span>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="w-full bg-white/95 backdrop-blur-md border-b border-[#D2D2D7]">
        <div className="h-20 max-w-[1360px] mx-auto px-4 md:px-8 lg:px-12 flex items-center justify-between gap-6">
          {/* Brand Crest & Title */}
          <Link href="/" className="flex items-center gap-3.5 shrink-0 group">
            <div className="w-10 h-10 rounded-full bg-[#1D1D1F] flex items-center justify-center text-white group-hover:opacity-80 transition-opacity">
              <svg
                className="w-5 h-5"
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
            <span className="text-[20px] font-semibold text-[#1D1D1F] tracking-tight leading-tight whitespace-nowrap">
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
                      ? "text-[#1D1D1F] border-[#1D1D1F] font-semibold"
                      : "text-[#6E6E73] border-transparent hover:text-[#1D1D1F] hover:border-[#D2D2D7] font-medium"
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
              className="inline-flex items-center justify-center h-11 px-6 bg-[#1D1D1F] text-white text-[14px] font-medium rounded-full hover:opacity-85 transition-opacity cursor-pointer whitespace-nowrap"
            >
              <span>Book Consultation</span>
            </button>

            {/* Mobile Drawer Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#1D1D1F] hover:bg-[#F5F5F7] rounded-full transition-colors"
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
        <div className="md:hidden bg-white border-b border-[#D2D2D7] px-6 py-5 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-3">
            <div className="pb-3 border-b border-[#D2D2D7] flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-widest text-[#6E6E73] font-semibold">
                Healthcare Divisions
              </span>
              <span className="text-[11px] font-semibold text-[#1D1D1F] border border-[#D2D2D7] px-2 py-0.5 rounded-full">
                CQC Outstanding
              </span>
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 text-[15px] font-medium text-[#1D1D1F] hover:opacity-60"
              >
                <span>{link.name}</span>
                <span className="material-symbols-outlined text-[16px] text-[#6E6E73]">
                  chevron_right
                </span>
              </Link>
            ))}
            <div className="pt-3 border-t border-[#D2D2D7] flex flex-col gap-2.5">
              <a
                href="tel:03331234567"
                className="flex items-center justify-center gap-2 py-2.5 bg-[#F5F5F7] rounded-full text-[14px] font-semibold text-[#1D1D1F]"
              >
                <span className="material-symbols-outlined text-[18px] text-[#1D1D1F]">call</span>
                <span>0333 123 4567</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenConsultation) onOpenConsultation();
                }}
                className="w-full py-2.5 bg-[#1D1D1F] text-white text-[14px] font-medium rounded-full"
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
