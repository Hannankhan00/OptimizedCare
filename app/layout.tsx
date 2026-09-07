import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: "variable",
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
});

export const viewport: Viewport = {
  themeColor: "#2A9D8F",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "OptimizedCare | Healthcare Group",
  description:
    "Private Medical Excellence, GMC Specialist Cosmetic Surgery, Doctor-Led Aesthetic Dermatology, and Dignified Residential & Domiciliary Care across Stockport & UK.",
  keywords: [
    "OptimizedCare",
    "OptimizedCare UK",
    "OptimizedCare cosmetic surgery",
    "OptimizedCare aesthetics",
    "OptimizedCare domiciliary care",
    "GMC specialist plastic surgeons",
    "CQC outstanding care",
  ],
  icons: {
    icon: "/assets/logo/logo.jpeg",
    shortcut: "/assets/logo/logo.jpeg",
    apple: "/assets/logo/logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#F8FAFC] text-[#1D3557]">
        {children}
      </body>
    </html>
  );
}

