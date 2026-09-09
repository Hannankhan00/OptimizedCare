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
    { name: "Home", href: "/" },
    { name: "Supported Living", href: "/care" },
    { name: "Advanced Aesthetics", href: "/aesthetics" },
    { name: "Cosmetic Surgery", href: "/surgery" },
    { name: "Diagnostic Center", href: "/therapy" },
    { name: "About Us", href: "/#about" },
    { name: "Contact", href: "/#consultation" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-surface-container-lowest/80 backdrop-blur-xl border-b border-border-slate/50 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      {/* Main Navigation Bar */}
      <div className="h-16 sm:h-20 w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex items-center justify-between gap-4">
        {/* Brand Logo & Subtitle */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 shrink-0">
            <Image
              src="/assets/logo.png"
              alt="Optimized Care Logo"
              fill
              sizes="(max-width: 640px) 36px, 40px"
              className="object-contain group-hover:scale-105 transition-transform"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-headline-sm text-[17px] sm:text-headline-sm text-on-surface tracking-tight leading-none group-hover:text-secondary transition-colors">
              Optimized Care
            </span>
            <span className="font-label-caps text-[10px] sm:text-label-caps text-secondary uppercase tracking-widest mt-1">
              Clinical Excellence
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav aria-label="Global Navigation" className="hidden xl:flex items-center gap-6 2xl:gap-8">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : link.href.startsWith("/#")
                ? false
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`py-1 transition-colors whitespace-nowrap ${
                  isActive
                    ? "text-secondary font-headline-sm border-b-2 border-secondary"
                    : "font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface hover:border-b-2 hover:border-secondary/30"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action CTA & Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => {
              if (onOpenConsultation) {
                onOpenConsultation();
              } else {
                const el = document.getElementById("consultation-modal-trigger");
                if (el) el.click();
              }
            }}
            className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-secondary text-on-secondary font-label-lg text-[13px] sm:text-label-lg shadow-[0_4px_16px_rgba(0,99,154,0.2)] hover:bg-secondary/95 hover:shadow-[0_6px_24px_rgba(0,99,154,0.32)] hover:text-on-secondary transition-all transform active:scale-95 cursor-pointer whitespace-nowrap"
          >
            Book a Consultation
          </button>

          {/* Mobile / Tablet Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-on-surface hover:bg-surface-container-low rounded-full transition-colors flex items-center justify-center"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-inverse-surface/40 backdrop-blur-xs z-40 xl:hidden top-16 sm:top-20"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          <div className="relative z-50 xl:hidden bg-surface-container-lowest border-b border-border-slate shadow-xl px-5 py-6 max-h-[calc(100vh-64px)] sm:max-h-[calc(100vh-80px)] overflow-y-auto animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-3">
              <div className="pb-3 border-b border-border-slate flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="relative w-8 h-8 shrink-0">
                    <Image
                      src="/assets/logo.png"
                      alt="Optimized Care Logo"
                      fill
                      sizes="32px"
                      className="object-contain"
                    />
                  </div>
                  <span className="font-headline-sm text-on-surface">
                    Optimized Care
                  </span>
                </div>
                <span className="font-label-caps text-secondary">Clinical Excellence</span>
              </div>

              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : link.href.startsWith("/#")
                    ? false
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between py-2.5 px-3 rounded-xl font-label-lg transition-colors ${
                      isActive
                        ? "bg-secondary-fixed text-on-secondary-fixed font-semibold"
                        : "text-on-surface hover:bg-surface-container-low hover:text-secondary"
                    }`}
                  >
                    <span>{link.name}</span>
                    <span className="material-symbols-outlined text-[18px]">
                      chevron_right
                    </span>
                  </Link>
                );
              })}

              <div className="pt-4 border-t border-border-slate flex flex-col gap-3">
                <a
                  href="tel:+447404210566"
                  className="flex items-center justify-center gap-2 py-3 bg-surface-container-low border border-border-slate rounded-full font-label-lg text-on-surface hover:bg-secondary-fixed transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px] text-secondary">call</span>
                  <span className="tnum font-semibold">+44 7404 210566</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenConsultation) onOpenConsultation();
                  }}
                  className="w-full py-3 bg-secondary text-on-secondary font-label-lg rounded-full hover:bg-secondary/95 transition-all shadow-md active:scale-95"
                >
                  Book a Consultation
                </button>

                <div className="pt-2 flex items-center justify-center gap-1.5 text-[11px] text-on-surface-variant text-center px-1">
                  <span className="material-symbols-outlined text-[13px] text-secondary">location_on</span>
                  <span>24 Greek Street, Stockport, England, SK3 8AB</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
