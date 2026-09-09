import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-inverse-surface text-inverse-on-surface relative overflow-hidden">
      {/* Ambient Glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-secondary/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-primary/15 blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1440px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop pt-unit-4xl pb-unit-2xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-gutter-desktop mb-unit-3xl">
          {/* Brand & Contact */}
          <div className="lg:col-span-4 flex flex-col gap-unit-md">
            <div className="flex items-center gap-unit-sm">
              <div className="relative w-9 h-9 rounded-full bg-white/95 p-1 flex items-center justify-center shrink-0 shadow-sm">
                <Image
                  src="/assets/logo.png"
                  alt="Optimized Care Logo"
                  fill
                  sizes="36px"
                  className="object-contain p-0.5"
                />
              </div>
              <span className="font-headline-md text-headline-md text-inverse-on-surface tracking-tight">
                Optimized Care
              </span>
            </div>
            <p className="font-body-md text-body-md text-tertiary-fixed-dim max-w-sm leading-relaxed">
              Care, beauty and clinical expertise, optimized around you. Uniting British surgical precision, doctor-led aesthetics, diagnostic imaging, and compassionate supported living.
            </p>
            <div className="flex flex-col gap-unit-2xs mt-unit-sm font-body-md text-body-md text-tertiary-fixed-dim">
              <div className="flex items-center gap-unit-xs">
                <span className="material-symbols-outlined text-base text-secondary-fixed">call</span>
                <a href="tel:+447404210566" className="hover:text-inverse-on-surface transition-colors tnum">
                  +44 7404 210566
                </a>
              </div>
              <div className="flex items-center gap-unit-xs">
                <span className="material-symbols-outlined text-base text-secondary-fixed">mail</span>
                <a href="mailto:contact@optimizedcare.org.uk" className="hover:text-inverse-on-surface transition-colors">
                  contact@optimizedcare.org.uk
                </a>
              </div>
              <div className="flex items-center gap-unit-xs">
                <span className="material-symbols-outlined text-base text-secondary-fixed">location_on</span>
                <span>24 Greek Street, Stockport, England, SK3 8AB</span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 flex flex-col gap-unit-sm">
            <span className="font-headline-sm text-headline-sm text-inverse-on-surface tracking-wide">
              Services
            </span>
            <div className="flex flex-col gap-unit-xs">
              <Link
                href="/care"
                className="font-body-md text-body-md text-tertiary-fixed-dim hover:text-inverse-on-surface transition-colors py-1"
              >
                Supported Living
              </Link>
              <Link
                href="/aesthetics"
                className="font-body-md text-body-md text-tertiary-fixed-dim hover:text-inverse-on-surface transition-colors py-1"
              >
                Advanced Aesthetics
              </Link>
              <Link
                href="/surgery"
                className="font-body-md text-body-md text-tertiary-fixed-dim hover:text-inverse-on-surface transition-colors py-1"
              >
                Cosmetic Surgery
              </Link>
              <Link
                href="/therapy"
                className="font-body-md text-body-md text-tertiary-fixed-dim hover:text-inverse-on-surface transition-colors py-1"
              >
                Diagnostic Center
              </Link>
            </div>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-3 flex flex-col gap-unit-sm">
            <span className="font-headline-sm text-headline-sm text-inverse-on-surface tracking-wide">
              Company
            </span>
            <div className="flex flex-col gap-unit-xs">
              <Link
                href="/#about"
                className="font-body-md text-body-md text-tertiary-fixed-dim hover:text-inverse-on-surface transition-colors py-1"
              >
                About Us
              </Link>
              <Link
                href="/#philosophy"
                className="font-body-md text-body-md text-tertiary-fixed-dim hover:text-inverse-on-surface transition-colors py-1"
              >
                Clinical Governance
              </Link>
              <Link
                href="/#about"
                className="font-body-md text-body-md text-tertiary-fixed-dim hover:text-inverse-on-surface transition-colors py-1"
              >
                CQC Compliance
              </Link>
              <Link
                href="/#consultation"
                className="font-body-md text-body-md text-tertiary-fixed-dim hover:text-inverse-on-surface transition-colors py-1"
              >
                Book Priority Consultation
              </Link>
            </div>
          </div>

          {/* Accreditation Column */}
          <div className="lg:col-span-2 flex flex-col gap-unit-sm">
            <span className="font-headline-sm text-headline-sm text-inverse-on-surface tracking-wide">
              Accreditation
            </span>
            <p className="font-body-md text-body-md text-tertiary-fixed-dim leading-relaxed">
              Care Quality Commission (CQC) registered provider adhering strictly to British clinical benchmarks.
            </p>
            <div className="mt-unit-xs inline-flex items-center gap-unit-xs px-unit-sm py-1.5 rounded-full bg-surface-container-high/10 text-primary-fixed font-label-caps text-label-caps tracking-wider uppercase border border-primary-fixed/20 w-fit">
              <span className="w-2 h-2 rounded-full bg-primary-fixed animate-pulse" />
              <span>Regulated Care</span>
            </div>
          </div>
        </div>

        {/* Sub-footer Legal Bar */}
        <div className="pt-unit-xl border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-unit-md text-tertiary-fixed-dim font-body-md text-body-md">
          <p>© 2026 Optimized Care Ltd. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-unit-md">
            <a href="#" className="hover:text-inverse-on-surface transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-inverse-on-surface transition-colors text-sm">
              Terms &amp; Conditions
            </a>
            <a href="#" className="hover:text-inverse-on-surface transition-colors text-sm">
              Cookie Policy
            </a>
            <a href="#" className="hover:text-inverse-on-surface transition-colors text-sm">
              Modern Slavery Statement
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
