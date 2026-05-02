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

            <div className="pt-8">
              <a
                href="https://youtube.com/live/ql-uKPU8cis?feature=share"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-4 bg-white hover:bg-stone-50 text-gold border-2 border-gold font-sans uppercase tracking-[0.2em] px-12 py-5 rounded-sm transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-center w-8 h-8 bg-gold text-white rounded-full transition-transform group-hover:scale-110">
                  <svg
                    className="w-4 h-4 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </div>
                <span className="font-bold">{t.button}</span>
              </a>
            </div>

            {/* Decorative YouTube element */}
            <div className="mt-12 opacity-10 grayscale hover:grayscale-0 transition-all duration-700">
               <div className="w-full max-w-md h-48 border-4 border-stone-200 rounded-xl flex items-center justify-center">
                  <svg className="w-20 h-20 text-stone-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
               </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
