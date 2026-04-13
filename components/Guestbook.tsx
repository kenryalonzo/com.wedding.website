"use client";

import { useLanguage } from "@/components/providers/LanguageContext";
import { translations } from "@/lib/translations";
import { Sparkles } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import GuestbookFlipbook from "./GuestbookFlipbook";

type Message = {
  id: string;
  content: string;
  name: string;
  createdAt: Date | string;
};

export default function Guestbook({ messages }: { messages: Message[] }) {
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
              {t.label}
              <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-linear-to-r from-transparent via-gold to-transparent" />
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fade-scale" delay={200}>
          <div className="relative w-full max-w-4xl mx-auto z-10">
            <GuestbookFlipbook messages={messages || []} />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
