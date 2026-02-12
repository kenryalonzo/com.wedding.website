"use client";

import { useLanguage } from "@/components/providers/LanguageContext";
import { translations } from "@/lib/translations";

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-[color:var(--brand-white)] border-t border-[color:var(--brand-gold-soft)]">
      <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <p className="text-sm text-[color:var(--brand-royal-ink)]/70">
            © {new Date().getFullYear()} {t.common.coupleName}
          </p>
          <p className="text-sm text-[color:var(--brand-royal-ink)]/70">
            {t.common.siteBy} :{" "}
            <a href="https://www.linkedin.com/in/nathanael-fotie-fotie-740807324/">
              Nathanaël
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
