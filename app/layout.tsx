import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["500", "600", "700"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#29A34A",
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
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#F7F9F8] text-[#102027]">
        {children}
      </body>
    </html>
  );
}

