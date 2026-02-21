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
  metadataBase: new URL("https://candkwedding.com"),
  icons: {
    icon: "/favicon.jpg",
    apple: "/favicon.jpg",
  },
  openGraph: {
    title: "Cédric & Karelle — Save the Date 💍",
    description:
      "Nous avons la joie de vous inviter à célébrer notre mariage le 2 mai 2026 à Delmenhorst. Réservez la date !",
    url: "https://candkwedding.com",
    siteName: "Cédric & Karelle — Mariage",
    images: [
      {
        url: "/couple.jpg",
        width: 1200,
        height: 630,
        alt: "Cédric & Karelle — Save the Date",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cédric & Karelle — Save the Date 💍",
    description:
      "Nous avons la joie de vous inviter à célébrer notre mariage le 2 mai 2026 à Delmenhorst. Réservez la date !",
    images: ["/couple.jpg"],
  },
};

import { ModalProvider } from "@/components/providers/ModalProvider";
import { LanguageProvider } from "@/components/providers/LanguageContext";
import RSVPModal from "@/components/RSVPModal";
import Loader from "@/components/Loader";

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
            <Loader>{children}</Loader>
            <RSVPModal />
          </ModalProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
