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
    <div className="w-full max-w-2xl mx-auto text-white">
      <div className="grid grid-cols-4 gap-6 md:gap-12">
        <div className="flex flex-col items-center">
          <span className="text-3xl md:text-5xl font-serif font-light drop-shadow-md">
            {timeLeft.days}
          </span>
          <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] mt-2 text-white/90">
            Jours
          </span>
        </div>
        <div className="flex flex-col items-center relative">
          <span className="hidden md:block absolute -left-6 top-2 text-2xl font-serif text-gold/50">
            :
          </span>
          <span className="text-3xl md:text-5xl font-serif font-light drop-shadow-md">
            {timeLeft.hours}
          </span>
          <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] mt-2 text-white/90">
            Heures
          </span>
        </div>
        <div className="flex flex-col items-center relative">
          <span className="hidden md:block absolute -left-6 top-2 text-2xl font-serif text-gold/50">
            :
          </span>
          <span className="text-3xl md:text-5xl font-serif font-light drop-shadow-md">
            {timeLeft.minutes}
          </span>
          <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] mt-2 text-white/90">
            Minutes
          </span>
        </div>
        <div className="flex flex-col items-center relative">
          <span className="hidden md:block absolute -left-6 top-2 text-2xl font-serif text-gold/50">
            :
          </span>
          <span className="text-3xl md:text-5xl font-serif font-light drop-shadow-md">
            {timeLeft.seconds}
          </span>
          <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] mt-2 text-white/90">
            Secondes
          </span>
        </div>
      </div>
    </div>
  );
}
