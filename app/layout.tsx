import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gary McCart - Technical Marketer",
  description: "Full-stack engineer and growth marketer based in Raleigh-Durham, NC. Open to full-time roles.",
};

import { DM_Sans } from "next/font/google";
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["300", "400", "500"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased bg-[#0e0e0e]`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
