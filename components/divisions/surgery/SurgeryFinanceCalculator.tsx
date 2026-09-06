"use client";

import React, { useState } from "react";

interface SurgeryFinanceCalculatorProps {
  onOpenConsultation?: (dept: string) => void;
}

export default function SurgeryFinanceCalculator({
  onOpenConsultation,
}: SurgeryFinanceCalculatorProps) {
  const [totalCost, setTotalCost] = useState<number>(6500);
  const [depositPct, setDepositPct] = useState<number>(20);
  const [termMonths, setTermMonths] = useState<number>(12); // 12, 24, 36, 60

  const depositAmount = Math.round((totalCost * depositPct) / 100);
  const loanAmount = totalCost - depositAmount;

  // APR rates (Chrysalis UK standard medical finance)
  const apr = termMonths === 12 ? 0 : termMonths <= 36 ? 0.099 : 0.149;

  // Monthly payment calculation
  const calculateMonthly = () => {
    if (apr === 0) {
      return Math.round(loanAmount / termMonths);
    }
    const monthlyRate = apr / 12;
    const payment =
      (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, termMonths))) /
      (Math.pow(1 + monthlyRate, termMonths) - 1);
    return Math.round(payment);
  };

  const monthlyPayment = calculateMonthly();
  const totalRepayable = depositAmount + monthlyPayment * termMonths;
  const totalInterest = totalRepayable - totalCost;

  return (
    <section id="finance" className="w-full py-16 md:py-24 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-[820px] mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8F6F3] border border-[#94D2BD] text-[#2A9D8F] text-[11px] font-semibold uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2A9D8F]" />
            Chrysalis Medical Finance UK
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#1D3557] tracking-tight leading-tight">
            Flexible 0% APR Cosmetic Surgery Calculator
          </h2>
          <p className="text-[16px] text-[#457B9D] mt-3 leading-relaxed">
            Calculate your transparent monthly repayments with 0% APR interest-free terms over 12 months, or extended plans up to 5 years with Chrysalis Finance UK.
          </p>
        </div>

        {/* Double-Bezel Calculator Container */}
        <div className="max-w-[1000px] mx-auto p-2 rounded-[2rem] bg-[#F8FAFC] border border-[#E2E8F0] shadow-sm">
          <div className="bg-white rounded-[calc(2rem-0.5rem)] p-6 md:p-10 border border-[#E2E8F0]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Interactive Inputs */}
              <div className="lg:col-span-7 space-y-6">
                {/* Procedure Cost Slider */}
                <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-[13px] font-semibold text-[#1D3557]">
                      Estimated Procedure Value
                    </label>
                    <span className="font-mono text-[18px] font-bold text-[#2A9D8F] bg-white px-3.5 py-1 rounded-lg border border-[#E2E8F0] shadow-2xs tnum">
                      £{totalCost.toLocaleString("en-GB")}
                    </span>
                  </div>

                  <input
                    type="range"
                    min={3000}
                    max={15000}
                    step={250}
                    value={totalCost}
                    onChange={(e) => setTotalCost(Number(e.target.value))}
                    className="w-full h-2 bg-[#E2E8F0] rounded-lg appearance-none cursor-pointer accent-[#2A9D8F]"
                  />

                  <div className="flex justify-between text-[11px] text-[#457B9D] font-mono pt-1">
                    <span>£3,000 (Blepharoplasty)</span>
                    <span>£6,500 (Breast / Rhino)</span>
                    <span>£15,000 (Deep Plane)</span>
                  </div>
                </div>

                {/* Deposit Percentage Selector */}
                <div>
                  <label className="block text-[12px] font-bold uppercase tracking-wider text-[#457B9D] mb-2.5">
                    Initial Deposit:{" "}
                    <span className="font-mono text-[#1D3557] font-semibold">
                      {depositPct}% (£{depositAmount.toLocaleString("en-GB")})
                    </span>
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {[10, 20, 30, 50].map((pct) => (
                      <button
                        key={pct}
                        type="button"
                        onClick={() => setDepositPct(pct)}
                        className={`py-2.5 text-[13px] font-medium rounded-xl border transition-all cursor-pointer font-mono ${
                          depositPct === pct
                            ? "bg-[#1D3557] text-white border-[#1D3557] shadow-xs"
                            : "bg-[#F8FAFC] text-[#457B9D] border-[#E2E8F0] hover:border-[#94D2BD] hover:text-[#1D3557]"
                        }`}
                      >
                        {pct}%
                      </button>
                    ))}
                  </div>
                </div>

                {/* Repayment Term Selector */}
                <div>
                  <label className="block text-[12px] font-bold uppercase tracking-wider text-[#457B9D] mb-2.5">
                    Repayment Duration:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { months: 12, label: "12 Months", badge: "0% APR" },
                      { months: 24, label: "24 Months", badge: "9.9% APR" },
                      { months: 36, label: "36 Months", badge: "9.9% APR" },
                      { months: 60, label: "60 Months", badge: "14.9% APR" },
                    ].map((term) => (
                      <button
                        key={term.months}
                        type="button"
                        onClick={() => setTermMonths(term.months)}
                        className={`p-3 text-center rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                          termMonths === term.months
                            ? "bg-[#1D3557] text-white border-[#1D3557] shadow-xs"
                            : "bg-[#F8FAFC] text-[#457B9D] border-[#E2E8F0] hover:border-[#94D2BD] hover:text-[#1D3557]"
                        }`}
                      >
                        <span className="text-[13px] font-semibold">{term.label}</span>
                        <span
                          className={`text-[10px] font-mono mt-1 font-bold ${
                            term.months === 12
                              ? termMonths === term.months
                                ? "text-[#94D2BD]"
                                : "text-[#2A9D8F]"
                              : termMonths === term.months
                              ? "text-white/70"
                              : "text-[#457B9D]"
                          }`}
                        >
                          {term.badge}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Repayment Summary Card */}
              <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#2A9D8F] mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2A9D8F]" />
                    Estimated Monthly Repayment
                  </div>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-4xl sm:text-5xl font-semibold text-[#1D3557] font-mono tnum">
                      £{monthlyPayment.toLocaleString("en-GB")}
                    </span>
                    <span className="text-[15px] text-[#457B9D] font-medium">/ month</span>
                  </div>
                  {termMonths === 12 && (
                    <span className="inline-block mt-2 px-2.5 py-0.5 rounded-full bg-[#E8F6F3] border border-[#94D2BD] text-[#2A9D8F] text-[11px] font-semibold uppercase tracking-wider">
                      Interest-Free • Zero Surcharge
                    </span>
                  )}
                </div>

                {/* Breakdown List */}
                <div className="space-y-2.5 pt-4 border-t border-[#E2E8F0] text-[13px]">
                  <div className="flex justify-between text-[#457B9D]">
                    <span>Total Procedure Value</span>
                    <span className="font-mono text-[#1D3557] font-semibold">£{totalCost.toLocaleString("en-GB")}</span>
                  </div>
                  <div className="flex justify-between text-[#457B9D]">
                    <span>Deposit ({depositPct}%)</span>
                    <span className="font-mono text-[#1D3557] font-semibold">£{depositAmount.toLocaleString("en-GB")}</span>
                  </div>
                  <div className="flex justify-between text-[#457B9D]">
                    <span>Loan Amount Financed</span>
                    <span className="font-mono text-[#1D3557] font-semibold">£{loanAmount.toLocaleString("en-GB")}</span>
                  </div>
                  <div className="flex justify-between text-[#457B9D]">
                    <span>Total Interest Payable</span>
                    <span className="font-mono text-[#2A9D8F] font-semibold">
                      {totalInterest > 0 ? `£${totalInterest.toLocaleString("en-GB")}` : "£0 (0% APR)"}
                    </span>
                  </div>
                  <div className="flex justify-between text-[#1D3557] pt-2 border-t border-[#E2E8F0] font-semibold">
                    <span>Total Amount Repayable</span>
                    <span className="font-mono text-[#1D3557]">£{totalRepayable.toLocaleString("en-GB")}</span>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-2">
                  <button
                    onClick={() => onOpenConsultation?.("surgery")}
                    className="w-full h-12 bg-[#2A9D8F] hover:bg-[#21867A] text-white font-semibold text-[14px] rounded-full transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer active:scale-[0.985]"
                  >
                    <span>Apply With 0% Finance Plan</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Regulatory Footer */}
            <div className="mt-8 pt-6 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#457B9D]">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#2A9D8F] text-[16px]">verified</span>
                <span>
                  Credit subject to status &amp; affordability. Terms and conditions apply. Authorised and regulated by the FCA.
                </span>
              </div>
              <span className="font-mono text-[#1D3557] font-semibold bg-[#F8FAFC] px-3 py-1 rounded-full border border-[#E2E8F0]">
                Chrysalis Finance Partner
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
