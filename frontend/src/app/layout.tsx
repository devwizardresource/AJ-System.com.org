import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AJ System — Tecnología, operaciones y servicios",
  description:
    "AJ System integra seis áreas corporativas — gerencia, ingeniería, logística, soporte técnico, jurídica y contabilidad — bajo un mismo estándar de ejecución.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-black text-[#ededed]">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
