import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Cinzel,
  Playfair_Display,
  Cormorant_Garamond,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["italic"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Cédric & Karelle — Mariage",
  description:
    "Célébrez avec nous le mariage de Cédric et Karelle le 2 mai 2026 à Delmenhorst.",
};

import { ModalProvider } from "@/components/providers/ModalProvider";
import { LanguageProvider } from "@/components/providers/LanguageContext";
import RSVPModal from "@/components/RSVPModal";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cinzel.variable} ${playfair.variable} ${cormorant.variable} antialiased`}
      >
        <LanguageProvider>
          <ModalProvider>
            {children}
            <RSVPModal />
          </ModalProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
