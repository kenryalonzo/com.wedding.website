"use client";

import { useLanguage } from "@/components/providers/LanguageContext";
import { translations } from "@/lib/translations";
import ScrollReveal from "@/components/ScrollReveal";

export default function Story() {
  const { language } = useLanguage();
  const t = translations[language].story;

  return (
    <ScrollReveal variant="fade-scale">
      <div className="w-full max-w-sm mx-auto">
        <div className="relative p-7 border border-gold/40 rounded-sm bg-[#e6f0ff]/95 backdrop-blur-sm shadow-2xl">
          <div className="absolute -top-3 -left-3 w-12 h-12 border-t border-l border-gold" />
          <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b border-r border-gold" />

          <h2 className="text-2xl md:text-3xl font-serif text-gold mb-6 tracking-wide text-center">
            {t.title}
          </h2>

          <h3 className="text-lg font-sans font-semibold text-gold mb-4 uppercase tracking-wider text-center">
            {t.subtitle}
          </h3>

          <blockquote className="text-base md:text-lg [font-family:var(--font-playfair)] text-stone-700 italic leading-relaxed mb-4 text-center">
            &quot;{t.verse}&quot;
          </blockquote>

          <cite className="block text-right text-gold font-bold not-italic text-sm">
            {t.verseRef}
          </cite>
        </div>
      </div>
    </ScrollReveal>
  );
}
