"use client";

import { useEffect, useState } from "react";
import { differenceInSeconds } from "date-fns";
import { useLanguage } from "@/components/providers/LanguageContext";
import { translations } from "@/lib/translations";

export default function Countdown() {
  const { language } = useLanguage();
  const t = translations[language].countdown;

  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  useEffect(() => {
    const WEDDING_DATE = new Date("2026-05-02T12:00:00");
    const timer = setInterval(() => {
      const now = new Date();
      const diff = differenceInSeconds(WEDDING_DATE, now);

      if (diff <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (3600 * 24));
      const hours = Math.floor((diff % (3600 * 24)) / 3600);
      const minutes = Math.floor((diff % 3600) / 60);
      const seconds = diff % 60;

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) return null;

  const units = [
    { value: timeLeft.days, label: t.days },
    { value: timeLeft.hours, label: t.hours },
    { value: timeLeft.minutes, label: t.minutes },
    { value: timeLeft.seconds, label: t.seconds },
  ];

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-black/65 backdrop-blur-md rounded-xl px-6 py-5 border border-white/25 shadow-2xl">
        <div className="grid grid-cols-4 gap-2 md:gap-4">
          {units.map((unit, i) => (
            <div key={i} className="flex flex-col items-center relative">
              {i > 0 && (
                <span className="hidden md:block absolute -left-2 top-1 text-xl font-serif text-gold/70 select-none">
                  :
                </span>
              )}
              <span className="text-3xl md:text-4xl font-serif font-semibold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                {String(unit.value).padStart(2, "0")}
              </span>
              <span className="text-[9px] md:text-[11px] uppercase tracking-[0.15em] mt-1.5 text-gold font-semibold">
                {unit.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
