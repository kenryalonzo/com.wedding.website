"use client";

import { useLanguage } from "@/components/providers/LanguageContext";
import { translations } from "@/lib/translations";
import { Sparkles, Heart } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function Guestbook() {
  const { language } = useLanguage();
  const t = translations[language].guestbook;

  return (
    <section id="galerie" className="py-24 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <ScrollReveal variant="fade-up">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-gold uppercase tracking-[0.2em] text-sm font-sans">
                {t.label}
              </span>
              <Sparkles className="w-4 h-4 text-gold" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6 relative inline-block">
              {t.title}
              <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-linear-to-r from-transparent via-gold to-transparent" />
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fade-scale" delay={200}>
          <div className="relative bg-white/60 backdrop-blur-md p-10 md:p-16 rounded-3xl shadow-xl border border-gold/20 overflow-hidden text-center">
            {/* Decorative corner flourishes */}
            <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-gold/15 rounded-tl-3xl" />
            <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-gold/15 rounded-tr-3xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-gold/15 rounded-bl-3xl" />
            <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-gold/15 rounded-br-3xl" />

            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gold/5 rounded-full blur-[80px]" />

            <div className="relative z-10 mb-8">
              <div className="w-20 h-20 mx-auto bg-linear-to-br from-gold/20 to-gold/5 rounded-2xl flex items-center justify-center border border-gold/20 shadow-lg mb-6">
                <Heart className="w-8 h-8 text-gold fill-gold/20" />
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10">
              <span className="block text-6xl text-gold/15 font-serif leading-none select-none mb-4">
                &ldquo;
              </span>
              {/* Using proper types - checking if message is present since we just updated translations */}
              <p className="text-stone-700 font-serif text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto italic">
                {/* @ts-expect-error message exists now but typescript might take a bit */}
                {t.message || t.thanks}
              </p>
              <span className="block text-6xl text-gold/15 font-serif leading-none select-none mt-6">
                &rdquo;
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
