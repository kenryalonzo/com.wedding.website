"use client";

import { Message } from "@prisma/client";
import { format } from "date-fns";
import { fr, enUS, de } from "date-fns/locale";
import { useLanguage } from "@/components/providers/LanguageContext";
import { translations } from "@/lib/translations";
import { useModal } from "@/components/providers/ModalProvider";
import { BookOpen, MessageCircle, Sparkles } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

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
        <ScrollReveal variant="fade-up">
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
              <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-linear-to-r from-transparent via-gold to-transparent" />
            </h2>
          </div>
        </ScrollReveal>

        {messages.length > 0 ? (
          <>
            {/* Messages Masonry Grid */}
            <ScrollReveal variant="fade-up" delay={200}>
              <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                {messages.map((msg, index) => (
                  <div
                    key={msg.id}
                    className="break-inside-avoid group relative"
                  >
                    {/* Card */}
                    <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-gold/10 transition-all duration-500 hover:shadow-xl hover:shadow-gold/5 hover:border-gold/25 hover:-translate-y-1">
                      {/* Decorative gold accent top */}
                      <div className="absolute top-0 left-8 right-8 h-[2px] bg-linear-to-r from-transparent via-gold/30 to-transparent rounded-full" />

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
                          <div className="w-8 h-8 rounded-full bg-linear-to-br from-gold/20 to-gold/5 flex items-center justify-center text-gold font-serif text-sm font-bold border border-gold/20">
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
            </ScrollReveal>

            {/* Bottom thanks */}
            <div className="text-center mt-16">
              <p className="text-stone-500 italic font-serif text-lg">
                {t.thanks}
              </p>
            </div>
          </>
        ) : (
          /* Premium Empty State */
          <ScrollReveal variant="fade-scale">
            <div className="max-w-2xl mx-auto text-center">
              <div className="relative bg-white/50 backdrop-blur-md border border-gold/10 rounded-3xl p-10 md:p-16 shadow-xl overflow-hidden">
                {/* Decorative corner flourishes */}
                <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-gold/15 rounded-tl-3xl" />
                <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-gold/15 rounded-tr-3xl" />
                <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-gold/15 rounded-bl-3xl" />
                <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-gold/15 rounded-br-3xl" />

                {/* Background glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gold/5 rounded-full blur-[80px]" />

                {/* Animated floating sparkles */}
                <div className="absolute top-6 left-12 text-gold/20 animate-pulse">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="absolute top-10 right-16 text-gold/15 animate-pulse delay-700">
                  <Sparkles className="w-3 h-3" />
                </div>
                <div className="absolute bottom-12 left-20 text-gold/15 animate-pulse delay-1000">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div className="absolute bottom-8 right-12 text-gold/20 animate-pulse delay-500">
                  <Sparkles className="w-4 h-4" />
                </div>

                {/* Book illustration */}
                <div className="relative z-10 mb-8">
                  <div className="w-24 h-24 mx-auto relative">
                    {/* Book base shadow */}
                    <div className="absolute inset-0 bg-gold/10 rounded-2xl blur-xl scale-110" />
                    {/* Open book icon with golden glow */}
                    <div className="relative w-full h-full bg-linear-to-br from-white to-stone-50 rounded-2xl border border-gold/20 flex items-center justify-center shadow-lg">
                      <BookOpen
                        className="w-10 h-10 text-gold"
                        strokeWidth={1.5}
                      />
                    </div>
                    {/* Subtle ring around the icon */}
                    <div className="absolute -inset-2 border border-gold/10 rounded-3xl" />
                  </div>
                </div>

                {/* Decorative divider */}
                <div className="flex items-center justify-center gap-3 mb-8">
                  <div className="w-16 h-px bg-linear-to-r from-transparent to-gold/30" />
                  <div className="w-1.5 h-1.5 bg-gold/30 rotate-45" />
                  <div className="w-16 h-px bg-linear-to-l from-transparent to-gold/30" />
                </div>

                {/* Opening quote */}
                <div className="relative z-10 mb-8">
                  <span className="block text-5xl text-gold/15 font-serif leading-none select-none mb-2">
                    &ldquo;
                  </span>
                  <p className="text-stone-600 font-serif italic text-xl md:text-2xl leading-relaxed max-w-md mx-auto">
                    {t.emptyState}
                  </p>
                  <span className="block text-5xl text-gold/15 font-serif leading-none select-none mt-2">
                    &rdquo;
                  </span>
                </div>

                {/* CTA Button */}
                <div className="relative z-10">
                  <button
                    onClick={openRSVP}
                    className="group inline-flex items-center gap-3 bg-linear-to-r from-gold to-[#e0940a] hover:from-[#e08a00] hover:to-[#d68500] text-white font-sans uppercase tracking-[0.15em] px-10 py-4 rounded-full transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-gold/20 transform hover:-translate-y-1 cursor-pointer text-sm"
                  >
                    <MessageCircle className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                    {t.leaveMessage}
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
