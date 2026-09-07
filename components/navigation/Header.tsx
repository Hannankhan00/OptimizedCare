"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header({
  onOpenConsultation,
}: {
  onOpenConsultation?: () => void;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu whenever pathname changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent background body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "The Trust", href: "/" },
    { name: "Supported Living", href: "/care" },
    { name: "Advanced Aesthetics", href: "/aesthetics" },
    { name: "Cosmetic Surgeries", href: "/surgery" },
    { name: "Diagnostic Center", href: "/therapy" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all">
      {/* 1. Top Utility / Trust Ribbon */}
      <div className="w-full bg-white text-[#1D3557] border-b border-[#E2E8F0] text-[11px] font-medium tracking-wide">
        <div className="max-w-[1360px] mx-auto px-3 sm:px-6 md:px-8 lg:px-12 h-7 sm:h-8 flex items-center justify-between">
          {/* Left: Location */}
          <div className="flex items-center gap-1.5 min-w-0">
            <span className="material-symbols-outlined text-[14px] text-[#2A9D8F] shrink-0">location_on</span>
            <span className="text-[#457B9D] truncate">
              24 Greek Street, Stockport SK3 8AB
            </span>
          </div>

          {/* Right: Direct Telephone & Operating Hours */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            <a
              href="tel:+447404210566"
              className="flex items-center gap-1 text-[#1D3557] hover:text-[#2A9D8F] transition-colors whitespace-nowrap text-[10px] sm:text-[11px]"
              aria-label="Direct Phone Line +44 7404 210566"
            >
              <span className="material-symbols-outlined text-[13px] sm:text-[15px] text-[#2A9D8F]">call</span>
              <span className="tnum font-semibold">+44 7404 210566</span>
            </a>
            <span className="text-[#E2E8F0] hidden sm:inline">|</span>
            <span className="text-[#457B9D] hidden sm:inline whitespace-nowrap">
              Mon–Sat: 08:00 – 20:00
            </span>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="w-full bg-white/95 backdrop-blur-md border-b border-[#E2E8F0]">
        <div className="h-16 sm:h-20 max-w-[1360px] mx-auto px-3 sm:px-6 md:px-8 lg:px-12 flex items-center justify-between gap-3 sm:gap-6">
          {/* Brand Logo & Title */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 shrink-0 group">
            <div className="relative w-8 h-10 sm:w-10 sm:h-12 shrink-0">
              <Image
                src="/assets/logo/logo.jpeg"
                alt="OptimizedCare Logo"
                fill
                className="object-contain mix-blend-multiply group-hover:scale-105 transition-transform"
                priority
              />
            </div>
            <span className="text-[18px] sm:text-[21px] font-semibold text-[#1D3557] tracking-tight leading-tight whitespace-nowrap group-hover:text-[#2A9D8F] transition-colors">
              OptimizedCare
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 whitespace-nowrap">
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

          {/* Primary Action Button & Mobile Menu Trigger */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={() => {
                if (onOpenConsultation) {
                  onOpenConsultation();
                } else {
                  const el = document.getElementById("consultation-modal-trigger");
                  if (el) el.click();
                }
              }}
              className="inline-flex items-center justify-center h-9 sm:h-11 px-3 sm:px-5 md:px-6 bg-[#2A9D8F] text-white text-[12px] sm:text-[14px] font-medium rounded-full hover:bg-[#21867A] active:scale-[0.985] transition-all shadow-xs cursor-pointer whitespace-nowrap"
            >
              <span className="hidden xs:inline">Book Consultation</span>
              <span className="xs:hidden">Consult</span>
            </button>

            {/* Mobile / Tablet Drawer Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#1D3557] hover:bg-[#F0F9FF] rounded-full transition-colors flex items-center justify-center"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              <span className="material-symbols-outlined text-[24px] sm:text-[26px]">
                {mobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile / Tablet Drawer */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 bg-[#1D3557]/40 backdrop-blur-xs z-40 lg:hidden top-[92px] sm:top-[112px]"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          <div className="relative z-50 lg:hidden bg-white border-b border-[#E2E8F0] shadow-xl px-4 sm:px-6 py-5 max-h-[calc(100vh-95px)] sm:max-h-[calc(100vh-115px)] overflow-y-auto animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-3">
              <div className="pb-3 border-b border-[#E2E8F0] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="relative w-7 h-9 shrink-0">
                    <Image
                      src="/assets/logo/logo.jpeg"
                      alt="OptimizedCare Logo"
                      fill
                      className="object-contain mix-blend-multiply"
                    />
                  </div>
                  <span className="text-[15px] text-[#1D3557] font-semibold tracking-tight">
                    OptimizedCare
                  </span>
                </div>
              </div>

              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between py-2.5 px-3 rounded-lg text-[15px] font-medium transition-colors ${
                      isActive
                        ? "bg-[#E8F6F3] text-[#2A9D8F] font-semibold"
                        : "text-[#1D3557] hover:bg-[#F8FAFC] hover:text-[#2A9D8F]"
                    }`}
                  >
                    <span>{link.name}</span>
                    <span
                      className={`material-symbols-outlined text-[18px] ${
                        isActive ? "text-[#2A9D8F]" : "text-[#457B9D]"
                      }`}
                    >
                      chevron_right
                    </span>
                  </Link>
                );
              })}

              <div className="pt-3 border-t border-[#E2E8F0] flex flex-col gap-2.5">
                <a
                  href="tel:+447404210566"
                  className="flex items-center justify-center gap-2 py-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-full text-[14px] font-semibold text-[#1D3557] hover:bg-[#E8F6F3] hover:text-[#2A9D8F] transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#2A9D8F]">call</span>
                  <span className="tnum">+44 7404 210566</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenConsultation) onOpenConsultation();
                  }}
                  className="w-full py-3 bg-[#2A9D8F] text-white text-[14px] font-medium rounded-full hover:bg-[#21867A] transition-colors shadow-xs"
                >
                  Book Priority Consultation
                </button>

                <div className="pt-2 flex items-center justify-center text-[11px] text-[#457B9D] px-1">
                  <span>24 Greek St, Stockport SK3 8AB</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
