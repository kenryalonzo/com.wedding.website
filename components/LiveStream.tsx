"use client";

import { useLanguage } from "@/components/providers/LanguageContext";
import { translations } from "@/lib/translations";
import ScrollReveal from "@/components/ScrollReveal";

export default function LiveStream() {
  const { language } = useLanguage();
  const t = (translations[language] as any).liveStream;

  return (
    <section id="live" className="py-20 relative overflow-hidden bg-stone-50">
      {/* Decorative background elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
        <ScrollReveal variant="fade-up">
          <div className="flex flex-col items-center space-y-6">
            {/* Live Indicator */}
            <div className="flex items-center gap-2 px-4 py-1.5 bg-red-50 text-red-600 rounded-full border border-red-100 shadow-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-widest font-sans">
                {t.label}
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-serif text-gold tracking-tight">
              {t.title}
            </h2>

            <p className="text-lg text-stone-600 font-sans max-w-2xl mx-auto leading-relaxed">
              {t.description}
            </p>

            <div className="w-full max-w-5xl mx-auto pt-8">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-gold/20 bg-stone-900 group">
                <iframe
                  src="https://www.youtube.com/embed/ql-uKPU8cis"
                  title="Wedding Live Stream"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                ></iframe>
                
                {/* Decorative overlay for when the stream hasn't started or to add a premium feel */}
                <div className="absolute inset-0 pointer-events-none border border-white/10 rounded-2xl"></div>
              </div>
            </div>

            <div className="pt-10">
              <a
                href="https://youtube.com/live/ql-uKPU8cis?feature=share"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-stone-500 hover:text-gold transition-colors font-sans text-sm uppercase tracking-widest"
              >
                <span>{t.button}</span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
