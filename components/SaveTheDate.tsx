"use client";

import Image from "next/image";
import { useModal } from "@/components/providers/ModalProvider";
import { useLanguage } from "@/components/providers/LanguageContext";
import { translations } from "@/lib/translations";
import ScrollReveal from "@/components/ScrollReveal";

export default function SaveTheDate() {
  const { openRSVP } = useModal();
  const { language } = useLanguage();
  const t = translations[language].saveTheDate;

  return (
    <section id="date" className="py-16 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image on the left */}
          <ScrollReveal variant="fade-left">
            <div className="relative group">
              <div className="absolute -inset-4 bg-linear-to-br from-gold/20 to-royal-blue/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative h-[320px] md:h-[380px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/couple.jpg"
                  alt="Cédric & Karelle"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
              </div>
              {/* Decorative corner accents */}
              <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-gold" />
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-gold" />
            </div>
          </ScrollReveal>

          {/* Content on the right */}
          <ScrollReveal variant="fade-right" delay={200}>
            <div className="text-center md:text-left space-y-8">
              {/* Decorative line */}
              <div className="flex items-center justify-center md:justify-start gap-4">
                <div className="w-12 h-[2px] bg-linear-to-r from-transparent to-gold" />
                <span className="text-xs uppercase tracking-[0.3em] text-stone-500 font-sans">
                  {t.label}
                </span>
                <div className="w-12 h-[2px] bg-linear-to-l from-transparent to-gold md:hidden" />
              </div>

              <h2 className="text-3xl md:text-4xl font-serif text-gold tracking-tight leading-tight">
                {t.title1}
                <span className="block text-gold italic mt-2">{t.title2}</span>
              </h2>

              <div className="space-y-4 py-6">
                <div className="inline-block px-8 py-4 bg-white rounded-lg shadow-lg border border-gold/20">
                  <p className="text-4xl md:text-5xl font-serif text-gold font-bold tracking-wide">
                    {t.date}
                  </p>
                </div>
                <p className="text-xl text-stone-600 font-sans tracking-wide">
                  {t.location}
                </p>
              </div>

              <div className="pt-4">
                <button
                  onClick={openRSVP}
                  className="group inline-flex items-center gap-3 bg-gold hover:bg-[#e08a00] text-white font-sans uppercase tracking-[0.2em] px-10 py-5 rounded-sm transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 cursor-pointer"
                >
                  <span>{translations[language].nav.rsvp}</span>
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>

              {/* Decorative quote */}
              <div className="pt-8 border-t border-stone-200 mt-8">
                <p className="text-sm text-stone-500 italic font-serif">
                  &quot;{t.quote}&quot;
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
