"use client";

import Image from "next/image";
import { MapPin, Car } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageContext";
import { translations } from "@/lib/translations";

export default function Location() {
  const { language } = useLanguage();
  const t = translations[language].location;

  return (
    <section id="infos" className="py-24 relative overflow-hidden bg-white/50">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Artistic Image */}
          <div className="relative group">
            <div className="absolute -inset-4 border border-gold/30 rounded-t-[10rem] rounded-b-lg transform translate-x-2 translate-y-2 transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1" />
            <div className="relative h-[600px] w-full rounded-t-[10rem] rounded-b-lg overflow-hidden shadow-2xl">
              <Image
                src="/lieu.jpg"
                alt={t.label}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <span className="block text-sm uppercase tracking-widest mb-2 font-light">
                  {t.label}
                </span>
                <span className="block text-3xl font-serif">
                  Rathausplatz 2
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Details & Map */}
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6">
                {t.title} <br />{" "}
                <span className="text-gold italic">{t.titleHighlight}</span>
              </h2>
              <p className="text-stone-600 leading-relaxed text-lg [font-family:var(--font-cormorant)]">
                {t.description}
              </p>
            </div>

            <div className="bg-white p-2 rounded-xl shadow-lg border border-stone-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2398.567366367373!2d8.628866976666952!3d53.04618777219896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b7460c04afe91d%3A0xe5427aa2a98e8316!2sRathausplatz%202%2C%2027749%20Delmenhorst%2C%20Germany!5e0!3m2!1sen!2sfr!4v1707750000000!5m2!1sen!2sfr"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: "0.75rem" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-stone-800 text-lg">
                  {t.addressTitle}
                </h3>
                <p className="text-stone-500">
                  Rathausplatz 2, 27749 Delmenhorst
                </p>
              </div>
            </div>

            {/* Parking Section */}
            <div className="relative group mt-8">
              <div className="relative h-[280px] w-full rounded-xl overflow-hidden shadow-lg border border-stone-100">
                <Image
                  src="/lieu-1.jpg"
                  alt="Parking"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-3 text-white">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                    <Car className="w-5 h-5" />
                  </div>
                  <span className="text-lg font-serif">Parking</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
