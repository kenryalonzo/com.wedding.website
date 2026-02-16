"use client";

import { Message } from "@prisma/client";
import { format } from "date-fns";
import { fr, enUS, de } from "date-fns/locale";
import { useLanguage } from "@/components/providers/LanguageContext";
import { translations } from "@/lib/translations";
import { useModal } from "@/components/providers/ModalProvider";
import { BookOpen, MessageCircle, Sparkles } from "lucide-react";

interface GuestbookProps {
  messages: Message[];
}

const dateLocales = { fr, en: enUS, de };

export default function Guestbook({ messages }: GuestbookProps) {
  const { language } = useLanguage();
  const t = translations[language].guestbook;
  const { openRSVP } = useModal();
  const locale = dateLocales[language];

  return (
    <section id="galerie" className="py-24 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-gold uppercase tracking-[0.2em] text-sm font-sans">
              {t.label}
            </span>
            <Sparkles className="w-4 h-4 text-gold" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6 relative inline-block">
            {t.title}
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
          </h2>
        </div>

        {messages.length > 0 ? (
          <>
            {/* Messages Masonry Grid */}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {messages.map((msg, index) => (
                <div key={msg.id} className="break-inside-avoid group relative">
                  {/* Card */}
                  <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-gold/10 transition-all duration-500 hover:shadow-xl hover:shadow-gold/5 hover:border-gold/25 hover:-translate-y-1">
                    {/* Decorative gold accent top */}
                    <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-gold/30 to-transparent rounded-full" />

                    {/* Quote Icon */}
                    <div className="absolute -top-3 left-6 bg-gold/10 p-2 rounded-full border border-gold/20">
                      <MessageCircle className="w-3.5 h-3.5 text-gold" />
                    </div>

                    {/* Content */}
                    <blockquote className="font-serif italic text-stone-600 leading-relaxed text-base md:text-lg mt-2 mb-6">
                      <span className="text-4xl text-gold/15 font-serif leading-none select-none mr-1">
                        &ldquo;
                      </span>
                      {msg.content}
                    </blockquote>

                    {/* Footer */}
                    <div className="flex items-center justify-between border-t border-stone-100/80 pt-4">
                      <div className="flex items-center gap-3">
                        {/* Avatar placeholder */}
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center text-gold font-serif text-sm font-bold border border-gold/20">
                          {msg.name.charAt(0).toUpperCase()}
                        </div>
                        <span className="font-sans font-semibold text-sm text-stone-700">
                          {msg.name}
                        </span>
                      </div>
                      <span className="text-xs text-stone-400 font-mono">
                        {format(new Date(msg.createdAt), "d MMM yyyy", {
                          locale,
                        })}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom thanks */}
            <div className="text-center mt-16">
              <p className="text-stone-500 italic font-serif text-lg">
                {t.thanks}
              </p>
            </div>
          </>
        ) : (
          /* Elegant Empty State */
          <div className="max-w-md mx-auto text-center">
            <div className="bg-white/60 backdrop-blur-sm border border-gold/15 rounded-3xl p-12 shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 bg-gold/10 rounded-full flex items-center justify-center border border-gold/20">
                <BookOpen className="w-7 h-7 text-gold" />
              </div>
              <p className="text-stone-500 font-serif italic text-lg mb-8 leading-relaxed">
                {t.emptyState}
              </p>
              <button
                onClick={openRSVP}
                className="inline-flex items-center gap-2 bg-gold hover:bg-[#e08a00] text-white font-sans uppercase tracking-[0.15em] px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                {t.leaveMessage}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
