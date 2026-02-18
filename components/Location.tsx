"use client";

import Image from "next/image";
import { MapPin, Car, Navigation } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageContext";
import { translations } from "@/lib/translations";

export default function Location() {
  const { language } = useLanguage();
  const t = translations[language].location;

  return (
    <section id="infos" className="py-24 relative overflow-hidden bg-white/50">
      {/* Subtle background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-900/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-semibold mb-4 block">
            {t.label}
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-4">
            {t.title}{" "}
            <span className="text-gold italic">{t.titleHighlight}</span>
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mt-4 opacity-60" />
        </div>

        {/* Main Grid: Image + Details */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
          {/* Left: Main venue image */}
          <div className="relative group">
            <div className="absolute -inset-3 border border-gold/25 rounded-t-[8rem] rounded-b-xl transform translate-x-2 translate-y-2 transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1" />
            <div className="relative h-[520px] w-full rounded-t-[8rem] rounded-b-xl overflow-hidden shadow-2xl">
              <Image
                src="/lieu.jpg"
                alt={t.label}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <span className="block text-xs uppercase tracking-widest mb-1 font-light opacity-80">
                  Delmenhorst, Deutschland
                </span>
                <span className="block text-2xl font-serif drop-shadow-md">
                  Rathausplatz 2
                </span>
              </div>
            </div>
          </div>

          {/* Right: Info + Map */}
          <div className="flex flex-col gap-8">
            {/* Description */}
            <p className="text-stone-600 leading-relaxed text-lg [font-family:var(--font-cormorant)] pt-2">
              {t.description}
            </p>

            {/* Address card */}
            <div className="flex items-start gap-4 bg-white/70 backdrop-blur-sm border border-stone-100 rounded-2xl p-5 shadow-sm">
              <div className="w-11 h-11 bg-gold/10 rounded-full flex items-center justify-center text-gold shrink-0 mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif font-semibold text-stone-800 text-lg mb-1">
                  {t.addressTitle}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed">
                  Rathausplatz 2<br />
                  27749 Delmenhorst, Deutschland
                </p>
                <a
                  href="https://maps.google.com/?q=Rathausplatz+2,+27749+Delmenhorst"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-3 text-xs text-gold hover:text-yellow-600 transition-colors font-semibold uppercase tracking-wider"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  Itinéraire
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white p-2 rounded-2xl shadow-md border border-stone-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2398.567366367373!2d8.628866976666952!3d53.04618777219896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b7460c04afe91d%3A0xe5427aa2a98e8316!2sRathausplatz%202%2C%2027749%20Delmenhorst%2C%20Germany!5e0!3m2!1sen!2sfr!4v1707750000000!5m2!1sen!2sfr"
                width="100%"
                height="260"
                style={{ border: 0, borderRadius: "1rem" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>

        {/* Parking — Full width card */}
        <div className="relative group rounded-2xl overflow-hidden shadow-lg border border-stone-100">
          <div className="grid md:grid-cols-2 items-center">
            {/* Parking image */}
            <div className="relative h-56 md:h-72 overflow-hidden">
              <Image
                src="/lieu-1.jpg"
                alt="Parking"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-r from-transparent to-black/20 md:bg-linear-to-l" />
            </div>

            {/* Parking info */}
            <div className="bg-white/90 backdrop-blur-sm p-8 md:p-10 flex flex-col justify-center gap-4">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold">
                <Car className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif text-stone-800">Parking</h3>
              <p className="text-stone-500 leading-relaxed [font-family:var(--font-cormorant)] text-lg">
                Un parking est disponible à proximité du lieu de cérémonie pour
                faciliter votre venue.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
