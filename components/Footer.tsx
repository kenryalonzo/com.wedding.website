"use client";

import { useLanguage } from "@/components/providers/LanguageContext";
import { translations } from "@/lib/translations";

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer
      className="border-t border-gold/30"
      style={{ backgroundColor: "#001f54" }}
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <p className="text-sm text-white/80">
            © {new Date().getFullYear()}{" "}
            <span className="text-gold font-semibold">
              {t.common.coupleName}
            </span>
          </p>
          <p className="text-sm text-white/80">
            {t.common.siteBy} :{" "}
            <a
              href="https://www.linkedin.com/in/nathanael-fotie-fotie-740807324/"
              className="text-gold hover:underline transition-colors"
            >
              Nathanaël
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
