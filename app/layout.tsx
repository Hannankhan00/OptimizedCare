import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#0A192F",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "OptimizedCare | Healthcare Group",
  description:
    "Private Medical Excellence, GMC Specialist Cosmetic Surgery, Doctor-Led Aesthetic Dermatology, and Dignified Residential & Domiciliary Care across London & UK.",
  keywords: [
    "OptimizedCare",
    "OptimizedCare UK",
    "OptimizedCare cosmetic surgery",
    "OptimizedCare aesthetics",
    "OptimizedCare domiciliary care",
    "GMC specialist plastic surgeons",
    "CQC outstanding care",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#F7F5F0] text-[#0A192F]">
        {children}
      </body>
    </html>
  );
}

