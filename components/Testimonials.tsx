"use client";

import { Quote, Heart, Calendar, Info } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageContext";
import { translations } from "@/lib/translations";
import React from "react";

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

        {/* Timeline Items */}
        <div className="space-y-16 md:space-y-32 relative">
          {/* Vertical Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-gold/50 to-transparent transform -translate-x-1/2" />

          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={step.id}
                className={`flex flex-col md:flex-row gap-8 md:gap-16 items-center ${
                  isEven ? "" : "md:flex-row-reverse"
                }`}
              >
                {/* Icon Side */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center relative group">
                  <div className="relative z-10 bg-white p-6 rounded-t-[10rem] rounded-b-[10rem] shadow-xl border border-gold/20 flex flex-col items-center justify-center text-center aspect-[3/4] w-full max-w-xs transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl overflow-hidden">
                    {/* Decorative bg inside card */}
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
                        {step.content}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dress Code Section */}
        <div className="mt-24 md:mt-32 max-w-3xl mx-auto">
          <div className="relative bg-linear-to-br from-[#003791] to-[#002a70] text-white p-8 md:p-12 rounded-3xl shadow-2xl overflow-hidden text-center border-4 border-white/10">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-gold/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-6 backdrop-blur-md border border-white/20">
                <Info size={24} className="text-gold" />
              </div>

              <h3 className="text-2xl md:text-3xl font-serif text-gold mb-6">
                {dc.title}
              </h3>

              <p className="text-blue-50/90 mb-8 leading-relaxed font-light text-lg [font-family:var(--font-cormorant)]">
                {dc.intro}{" "}
                <strong className="text-gold font-medium">
                  {dc.royalBlue}
                </strong>{" "}
                {dc.and}{" "}
                <strong className="text-gold font-medium">{dc.gold}</strong>{" "}
                {dc.asColors}
              </p>

              <div className="bg-white/5 p-6 rounded-xl border border-white/10 mb-8 max-w-2xl mx-auto backdrop-blur-sm">
                <p className="italic font-serif text-blue-100 text-base md:text-lg mb-4">
                  &ldquo;{dc.verse}&rdquo;
                </p>
                <cite className="text-sm font-sans uppercase tracking-widest text-gold opacity-80 not-italic">
                  {dc.verseRef}
                </cite>
              </div>

              <p className="text-blue-50/80 text-sm md:text-base leading-relaxed max-w-xl mx-auto [font-family:var(--font-cormorant)]">
                {renderBoldText(dc.closing, "font-bold text-white")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
