"use client";

import { useState, useEffect } from "react";

export default function Loader({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Minimum display time for the animation to be appreciated
    const minTime = setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(() => setIsLoading(false), 800); // match fade-out duration
    }, 3200);

    return () => clearTimeout(minTime);
  }, []);

  if (!isLoading) return <>{children}</>;

  return (
    <>
      {/* Loader Overlay */}
      <div
        className={`fixed inset-0 z-200 flex flex-col items-center justify-center bg-[#fffcf5] transition-all duration-800 ${
          isFadingOut ? "opacity-0 scale-105" : "opacity-100 scale-100"
        }`}
      >
        {/* Ambient glow */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-blue-900/5 rounded-full blur-[100px] animate-pulse delay-700" />
        </div>

        {/* Rings Container */}
        <div className="relative w-48 h-48 md:w-56 md:h-56">
          {/* Ring 1 - Left */}
          <div className="loader-ring loader-ring-1">
            <div
              className="absolute inset-0 rounded-full border-[3px] border-transparent"
              style={{
                borderImage:
                  "linear-gradient(135deg, #f39b15, #ffd700, #f39b15) 1",
                borderRadius: "50%",
              }}
            ></div>
          </div>

          {/* Ring 2 - Right */}
          <div className="loader-ring loader-ring-2">
            <div
              className="absolute inset-0 rounded-full border-[3px] border-transparent"
              style={{
                borderImage:
                  "linear-gradient(315deg, #f39b15, #ffd700, #f39b15) 1",
                borderRadius: "50%",
              }}
            ></div>
          </div>

          {/* Sparkle particles */}
          <div className="loader-sparkle loader-sparkle-1" />
          <div className="loader-sparkle loader-sparkle-2" />
          <div className="loader-sparkle loader-sparkle-3" />
          <div className="loader-sparkle loader-sparkle-4" />
          <div className="loader-sparkle loader-sparkle-5" />
          <div className="loader-sparkle loader-sparkle-6" />
        </div>

        {/* Initials */}
        <div className="loader-initials mt-8">
          <span className="text-4xl md:text-5xl font-serif text-transparent bg-clip-text bg-linear-to-r from-gold via-yellow-500 to-gold tracking-[0.3em]">
            C
          </span>
          <span className="loader-ampersand mx-3 text-2xl md:text-3xl text-gold/60 font-serif italic">
            &
          </span>
          <span className="text-4xl md:text-5xl font-serif text-transparent bg-clip-text bg-linear-to-r from-gold via-yellow-500 to-gold tracking-[0.3em]">
            K
          </span>
        </div>

        {/* Tagline */}
        <p className="loader-tagline mt-4 text-stone-400 text-sm tracking-[0.4em] uppercase font-sans">
          02 . 05 . 2026
        </p>

        {/* Bottom shimmer bar */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-40 h-[2px] overflow-hidden rounded-full bg-gold/10">
          <div className="loader-shimmer h-full w-1/3 bg-linear-to-r from-transparent via-gold to-transparent rounded-full" />
        </div>
      </div>

      {/* Content hidden behind loader */}
      <div
        className={`transition-all duration-600 ${isFadingOut ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        {children}
      </div>
    </>
  );
}
