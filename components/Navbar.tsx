"use client";

import { Gem, Menu } from "lucide-react";
import { translations } from "@/lib/translations";
import { useEffect, useMemo, useState } from "react";
import { siteConfig } from "@/lib/siteConfig";

import { useLanguage } from "@/components/providers/LanguageContext";
import { useModal } from "@/components/providers/ModalProvider";
import { cn } from "@/lib/utils";

export default function Header() {
  const { language, setLanguage } = useLanguage();
  const { openRSVP } = useModal();
  const t = translations[language];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sections = useMemo(
    () => [
      { id: "accueil", label: t.nav.home, type: "anchor" as const },
      { id: "date", label: t.nav.saveTheDate, type: "anchor" as const },
      { id: "story", label: t.nav.story, type: "anchor" as const },
      { id: "infos", label: t.nav.info, type: "anchor" as const },
      { id: "galerie", label: t.nav.gallery, type: "anchor" as const },
      { id: "remerciements", label: t.nav.thanks, type: "anchor" as const },
      { id: "rsvp", label: t.nav.rsvp, type: "action" as const },
    ],
    [t],
  );

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMobileMenuOpen]);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-[color:var(--brand-royal)] backdrop-blur-lg transition-all">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 lg:px-12">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[color:var(--brand-gold)] bg-[color:var(--brand-royal)]/50 text-[color:var(--brand-gold)]">
            <Gem className="h-4 w-4" />
          </div>
          <div className="flex flex-col">
            <h2 className="font-serif text-lg font-bold leading-none tracking-wider text-white">
              {siteConfig.couple.initials}
            </h2>
            <span className="font-sans text-[8px] font-bold uppercase tracking-[0.2em] text-[color:var(--brand-gold)]">
              {t.headerSubtitle}
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden flex-1 justify-center gap-8 md:flex">
          {sections.map((s) =>
            s.type === "action" ? (
              <button
                key={s.id}
                onClick={openRSVP}
                className="group relative py-2"
              >
                <span className="font-sans text-xs font-medium uppercase tracking-widest text-white transition-colors group-hover:text-[color:var(--brand-gold)]">
                  {s.label}
                </span>
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[color:var(--brand-gold)] transition-all duration-300 group-hover:w-full"></span>
              </button>
            ) : (
              <a key={s.id} href={`#${s.id}`} className="group relative py-2">
                <span className="font-sans text-xs font-medium uppercase tracking-widest text-white transition-colors group-hover:text-[color:var(--brand-gold)]">
                  {s.label}
                </span>
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[color:var(--brand-gold)] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ),
          )}
        </div>

        {/* Language / Actions */}
        <div className="flex items-center gap-4">
          <div className="hidden rounded-full border border-white/10 bg-white/5 p-0.5 sm:flex">
            <button
              onClick={() => setLanguage("en")}
              className={cn(
                "rounded-full px-2.5 py-1 text-[10px] font-bold transition-colors",
                language === "en"
                  ? "bg-[color:var(--brand-gold)] text-[color:var(--brand-royal)] shadow-sm"
                  : "text-white hover:bg-white/10",
              )}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("fr")}
              className={cn(
                "rounded-full px-2.5 py-1 text-[10px] font-bold transition-colors",
                language === "fr"
                  ? "bg-[color:var(--brand-gold)] text-[color:var(--brand-royal)] shadow-sm"
                  : "text-white hover:bg-white/10",
              )}
            >
              FR
            </button>
            <button
              onClick={() => setLanguage("de")}
              className={cn(
                "rounded-full px-2.5 py-1 text-[10px] font-bold transition-colors",
                language === "de"
                  ? "bg-[color:var(--brand-gold)] text-[color:var(--brand-royal)] shadow-sm"
                  : "text-white hover:bg-white/10",
              )}
            >
              DE
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            className="text-white md:hidden"
            type="button"
            aria-haspopup="dialog"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden">
          <div
            className="fixed inset-0 z-[60]"
            style={{ backgroundColor: "#0010b0" }}
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div
            className="fixed right-0 top-0 z-[70] h-auto max-h-screen w-[86%] max-w-sm border-l-2 border-[#d4a017]/40 p-6 shadow-[0_0_30px_rgba(0,0,0,0.8)] overflow-y-auto animate-in slide-in-from-right duration-300"
            style={{ backgroundColor: "#0010b0" }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[color:var(--brand-gold)] bg-[color:var(--brand-royal)]/50 text-[color:var(--brand-gold)]">
                  <Gem className="h-4 w-4" />
                </div>
                <div className="flex flex-col">
                  <p className="font-serif text-base font-bold leading-none tracking-wider text-white">
                    {siteConfig.couple.initials}
                  </p>
                  <span className="font-sans text-[8px] font-bold uppercase tracking-[0.2em] text-[color:var(--brand-gold)]">
                    {t.headerSubtitle}
                  </span>
                </div>
              </div>
              <button
                type="button"
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-white"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label={t.mobileMenuClose}
              >
                {t.mobileMenuClose}
              </button>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-1">
              <div className="grid grid-cols-3 gap-1">
                {(["en", "fr", "de"] as const).map((code) => (
                  <button
                    key={code}
                    type="button"
                    onClick={() => setLanguage(code)}
                    className={cn(
                      "rounded-xl px-3 py-2 text-[10px] font-bold transition-colors",
                      language === code
                        ? "bg-[color:var(--brand-gold)] text-[color:var(--brand-royal)] shadow-sm"
                        : "text-white hover:bg-white/10",
                    )}
                  >
                    {code.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-2">
              {sections.map((s) =>
                s.type === "action" ? (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      openRSVP();
                    }}
                    className="w-full rounded-2xl bg-gradient-gold px-5 py-3 text-left text-xs font-bold uppercase tracking-widest text-[color:var(--brand-royal)]"
                  >
                    {s.label}
                  </button>
                ) : (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-left text-xs font-bold uppercase tracking-widest text-white hover:bg-white/10"
                  >
                    {s.label}
                  </a>
                ),
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
