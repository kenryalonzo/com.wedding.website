"use client";

import { useEffect, useState } from "react";
import { differenceInSeconds } from "date-fns";

export default function Countdown() {
  const WEDDING_DATE = new Date("2026-05-02T12:00:00"); // Adjust time as needed
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  useEffect(() => {
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

  if (!timeLeft) return null; // Prevent hydration mismatch

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-black/20 backdrop-blur-sm rounded-lg px-6 py-4 border border-white/10">
        <div className="grid grid-cols-4 gap-3 md:gap-6">
          <div className="flex flex-col items-center">
            <span className="text-2xl md:text-3xl font-serif font-light text-white drop-shadow-lg">
              {timeLeft.days}
            </span>
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.15em] mt-1 text-gold/90">
              Jours
            </span>
          </div>
          <div className="flex flex-col items-center relative">
            <span className="hidden md:block absolute -left-3 top-1 text-lg font-serif text-gold/40">
              :
            </span>
            <span className="text-2xl md:text-3xl font-serif font-light text-white drop-shadow-lg">
              {timeLeft.hours}
            </span>
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.15em] mt-1 text-gold/90">
              Heures
            </span>
          </div>
          <div className="flex flex-col items-center relative">
            <span className="hidden md:block absolute -left-3 top-1 text-lg font-serif text-gold/40">
              :
            </span>
            <span className="text-2xl md:text-3xl font-serif font-light text-white drop-shadow-lg">
              {timeLeft.minutes}
            </span>
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.15em] mt-1 text-gold/90">
              Min
            </span>
          </div>
          <div className="flex flex-col items-center relative">
            <span className="hidden md:block absolute -left-3 top-1 text-lg font-serif text-gold/40">
              :
            </span>
            <span className="text-2xl md:text-3xl font-serif font-light text-white drop-shadow-lg">
              {timeLeft.seconds}
            </span>
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.15em] mt-1 text-gold/90">
              Sec
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
