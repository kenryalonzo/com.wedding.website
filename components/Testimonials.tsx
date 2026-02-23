"use client";

import { Quote, Heart, Calendar, Info } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageContext";
import { translations } from "@/lib/translations";
import React from "react";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

/**
 * Renders text with **bold** markers as <strong> elements.
 */
function renderBoldText(text: string, className?: string) {
  const parts = text.split(/\*\*([^*]+)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className={className ?? "font-bold"}>
        {part}
      </strong>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    ),
  );
}

const imageMap: Record<string, string> = {
  debut: "/le debut.png",
  cedric: "/cedrick.jpg",
  karelle: "/karelle.jpg",
  croissance: "/croissance.png",
  "doigt-de-dieu": "/main.png",
  mariage: "/mariage.png",
};

export default function Testimonials() {
  const { language } = useLanguage();
  const t = translations[language].testimonials;
  const steps = t.steps;
  const dc = t.dressCode;

  return (
    <section
      id="story"
      className="py-20 md:py-32 bg-[#fffcf5] relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent opacity-70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/5 via-transparent to-transparent opacity-70" />

      {/* Animated Particles/Blur */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-gold/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-blue-900/5 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        {/* Section Header */}
        <ScrollReveal variant="fade-up">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-transparent bg-clip-text bg-linear-to-r from-gold to-yellow-600 mb-6 relative inline-block">
              <span className="relative z-10">{t.sectionTitle}</span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-linear-to-r from-transparent via-gold to-transparent opacity-50" />
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto rounded-full mb-6 opacity-80" />
            <p className="text-stone-500 italic font-serif text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              {t.verse}
              <span className="block mt-2 text-sm not-italic uppercase tracking-widest text-gold font-sans">
                {t.verseRef}
              </span>
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline Items */}
        <div className="space-y-16 md:space-y-32 relative">
          {/* Vertical Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-gold/50 to-transparent transform -translate-x-1/2" />

          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            const hasImage = step.id in imageMap;
            return (
              <ScrollReveal
                key={step.id}
                variant={isEven ? "fade-left" : "fade-right"}
                delay={100}
              >
                <div
                  className={`flex flex-col md:flex-row gap-8 md:gap-16 items-center ${
                    isEven ? "" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Icon / Image Side */}
                  <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center relative group">
                    <div
                      className={`relative z-10 ${hasImage ? "bg-stone-100" : "bg-white"} rounded-t-[10rem] rounded-b-[10rem] shadow-xl border border-gold/20 flex flex-col items-center justify-center text-center aspect-[3/4] w-full max-w-xs transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl overflow-hidden`}
                    >
                      {hasImage ? (
                        /* Image card */
                        <>
                          <Image
                            src={imageMap[step.id]}
                            alt={step.title}
                            fill
                            className="object-cover"
                            style={{ objectPosition: "30% center" }}
                            sizes="(max-width: 768px) 80vw, 320px"
                          />
                          {/* Overlay with title */}
                          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent z-10" />
                          <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-center">
                            <h3 className="text-2xl font-serif text-white mb-1 drop-shadow-lg">
                              {step.title}
                            </h3>
                            {step.date && (
                              <div className="text-sm font-sans uppercase tracking-widest text-gold/90">
                                {step.date}
                              </div>
                            )}
                          </div>
                        </>
                      ) : (
                        /* Icon card (for Cédric & Karelle) */
                        <>
                          <div className="absolute inset-0 bg-linear-to-br from-stone-50 to-white z-0" />
                          <div className="absolute top-0 inset-x-0 h-32 bg-gold/5 rounded-b-full z-0" />
                          <div className="absolute bottom-0 inset-x-0 h-32 bg-blue-900/5 rounded-t-full z-0" />

                          <div className="relative z-10 flex flex-col items-center">
                            <div className="mb-6 p-4 bg-white/80 backdrop-blur-sm rounded-full shadow-sm text-gold border border-gold/10">
                              {step.type === "testimony" && (
                                <Quote size={32} className="opacity-80" />
                              )}
                              {step.type === "narrative" && (
                                <Heart size={32} className="opacity-80" />
                              )}
                              {step.type === "event" && (
                                <Calendar size={32} className="opacity-80" />
                              )}
                            </div>

                            <h3 className="text-2xl font-serif text-gold mb-2 px-4 leading-tight">
                              {step.title}
                            </h3>

                            {step.date && (
                              <div className="text-sm font-sans uppercase tracking-widest text-blue-900/60 mb-4 border-b border-gold/20 pb-1">
                                {step.date}
                              </div>
                            )}

                            {"speaker" in step && step.speaker && (
                              <div className="text-sm font-sans uppercase tracking-widest text-stone-400 mt-2">
                                - {step.speaker} -
                              </div>
                            )}
                          </div>
                        </>
                      )}
                    </div>

                    {/* Timeline Dot (Desktop only) */}
                    <div
                      className={`hidden md:block absolute top-1/2 ${isEven ? "-right-8 translate-x-1/2" : "-left-8 -translate-x-1/2"} w-4 h-4 rounded-full bg-white border-4 border-gold z-20 shadow-md`}
                    />
                  </div>

                  {/* Content Side */}
                  <div
                    className={`w-full md:w-1/2 ${isEven ? "md:text-left" : "md:text-right"}`}
                  >
                    <div className="relative">
                      {/* Quote mark for testimonies */}
                      {step.type === "testimony" && (
                        <span
                          className={`absolute -top-6 text-6xl text-gold/10 font-serif leading-none select-none ${isEven ? "-left-4" : "-right-4"}`}
                        >
                          &ldquo;
                        </span>
                      )}

                      <div className="prose prose-stone prose-lg max-w-none">
                        <p className="whitespace-pre-line text-stone-600 leading-loose font-light text-lg [font-family:var(--font-cormorant)]">
                          {renderBoldText(
                            step.content,
                            "font-semibold text-stone-800",
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Dress Code Section — Redesigned */}
        <ScrollReveal variant="fade-up">
          <div className="mt-24 md:mt-40 max-w-4xl mx-auto">
            <div className="relative bg-linear-to-br from-[#003791] via-[#002a70] to-[#001d50] text-white rounded-4xl shadow-[0_25px_60px_-12px_rgba(0,55,145,0.4)] border border-white/10 shimmer-wrapper">
              <div className="shimmer-effect" />
              {/* Decorative Background Elements */}
              <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/15 rounded-full blur-3xl translate-x-1/4 translate-y-1/4" />
              <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

              <div className="relative z-10">
                {/* Header Section */}
                <div className="text-center pt-12 md:pt-16 px-8 md:px-16">
                  <div className="inline-flex items-center justify-center p-4 bg-white/10 rounded-full mb-8 backdrop-blur-md border border-white/20 shadow-lg shadow-black/10">
                    <Info size={28} className="text-gold" />
                  </div>

                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gold mb-4 tracking-wide">
                    {dc.title}
                  </h3>
                  <div className="w-20 h-0.5 bg-linear-to-r from-transparent via-gold to-transparent mx-auto mb-10 opacity-60" />
                </div>

                {/* Colors Section */}
                <div className="px-8 md:px-16 pb-10">
                  <p className="text-blue-50/90 leading-relaxed font-light text-xl md:text-2xl text-center [font-family:var(--font-cormorant)] mb-8">
                    {dc.intro}
                  </p>

                  {/* Color Swatches */}
                  <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-4">
                    <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2.5 border border-white/15">
                      <span className="w-5 h-5 rounded-full bg-royal-blue border-2 border-white/40 shadow-inner" />
                      <span className="text-blue-100 font-medium text-base [font-family:var(--font-cormorant)]">
                        {dc.royalBlue}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2.5 border border-white/15">
                      <span className="w-5 h-5 rounded-full bg-white border-2 border-white/40 shadow-inner" />
                      <span className="text-blue-100 font-medium text-base [font-family:var(--font-cormorant)]">
                        {dc.gold}
                      </span>
                    </div>
                    {"andGold" in dc && (
                      <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2.5 border border-white/15">
                        <span className="w-5 h-5 rounded-full bg-linear-to-br from-gold to-[#ffd700] border-2 border-white/40 shadow-inner" />
                        <span className="text-blue-100 font-medium text-base [font-family:var(--font-cormorant)]">
                          {dc.goldColor}
                        </span>
                      </div>
                    )}
                  </div>
                  <p className="text-blue-200/60 text-sm text-center [font-family:var(--font-cormorant)]">
                    {dc.asColors}
                  </p>
                </div>

                {/* Divider */}
                <div className="flex items-center justify-center gap-4 px-8 md:px-16">
                  <div className="flex-1 h-px bg-linear-to-r from-transparent to-white/15" />
                  <div className="w-2 h-2 rotate-45 bg-gold/40 border border-gold/30" />
                  <div className="flex-1 h-px bg-linear-to-l from-transparent to-white/15" />
                </div>

                {/* Verse Section */}
                <div className="px-8 md:px-16 py-10">
                  <div className="bg-white/5 p-8 md:p-10 rounded-2xl border border-white/10 max-w-2xl mx-auto backdrop-blur-sm">
                    <div className="text-gold/30 text-5xl font-serif leading-none mb-4 select-none">
                      &ldquo;
                    </div>
                    <p className="italic font-serif text-blue-100 text-lg md:text-xl leading-relaxed mb-6 -mt-6">
                      {dc.verse}
                    </p>
                    <cite className="text-sm font-sans uppercase tracking-[0.2em] text-gold opacity-80 not-italic block text-center">
                      {dc.verseRef}
                    </cite>
                  </div>
                </div>

                {/* Divider */}
                <div className="flex items-center justify-center gap-4 px-8 md:px-16">
                  <div className="flex-1 h-px bg-linear-to-r from-transparent to-white/15" />
                  <div className="w-2 h-2 rotate-45 bg-gold/40 border border-gold/30" />
                  <div className="flex-1 h-px bg-linear-to-l from-transparent to-white/15" />
                </div>

                {/* Closing / Important Guidelines — PROMINENT */}
                <div className="px-8 md:px-16 pt-10 pb-14 md:pb-16">
                  <div className="max-w-2xl mx-auto text-center">
                    <div className="bg-white/8 rounded-2xl p-8 md:p-10 border border-gold/20 shadow-inner">
                      <p className="text-blue-50 text-xl md:text-2xl lg:text-[1.6rem] leading-relaxed [font-family:var(--font-cormorant)] font-light">
                        {renderBoldText(dc.closing, "font-bold text-white")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
