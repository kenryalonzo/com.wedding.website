"use client";

import { useState, useEffect } from "react";

// Deterministic particle positions to avoid SSR/client hydration mismatch
const DUST_PARTICLES = [
  { left: 8, top: 12, w: 2.1, h: 1.8, delay: 0.2, dur: 4.2 },
  { left: 22, top: 78, w: 1.5, h: 2.3, delay: 1.8, dur: 5.1 },
  { left: 37, top: 35, w: 2.8, h: 1.2, delay: 0.9, dur: 3.8 },
  { left: 52, top: 88, w: 1.3, h: 2.7, delay: 3.1, dur: 4.5 },
  { left: 68, top: 15, w: 3.2, h: 1.5, delay: 2.4, dur: 5.6 },
  { left: 85, top: 55, w: 1.8, h: 3.1, delay: 0.5, dur: 3.4 },
  { left: 14, top: 62, w: 2.5, h: 1.9, delay: 4.0, dur: 5.3 },
  { left: 43, top: 5, w: 1.1, h: 2.4, delay: 1.3, dur: 4.8 },
  { left: 75, top: 42, w: 3.0, h: 1.7, delay: 2.7, dur: 3.6 },
  { left: 92, top: 72, w: 1.6, h: 2.9, delay: 0.8, dur: 5.9 },
  { left: 5, top: 45, w: 2.3, h: 1.4, delay: 3.5, dur: 4.1 },
  { left: 30, top: 92, w: 1.9, h: 3.3, delay: 1.1, dur: 5.7 },
  { left: 58, top: 25, w: 2.7, h: 1.6, delay: 4.3, dur: 3.9 },
  { left: 78, top: 8, w: 1.4, h: 2.1, delay: 2.0, dur: 6.2 },
  { left: 48, top: 68, w: 3.5, h: 1.3, delay: 0.4, dur: 4.7 },
  { left: 17, top: 28, w: 2.0, h: 2.6, delay: 3.8, dur: 5.4 },
  { left: 63, top: 52, w: 1.7, h: 1.8, delay: 1.6, dur: 3.3 },
  { left: 88, top: 38, w: 2.4, h: 3.0, delay: 2.9, dur: 6.0 },
  { left: 33, top: 82, w: 1.2, h: 2.2, delay: 0.7, dur: 4.4 },
  { left: 55, top: 18, w: 3.1, h: 1.1, delay: 4.6, dur: 5.2 },
  { left: 10, top: 95, w: 2.6, h: 2.8, delay: 1.4, dur: 3.7 },
  { left: 72, top: 65, w: 1.8, h: 1.5, delay: 3.2, dur: 4.9 },
  { left: 40, top: 48, w: 2.2, h: 3.4, delay: 0.1, dur: 5.8 },
  { left: 96, top: 22, w: 1.3, h: 1.9, delay: 2.5, dur: 4.0 },
  { left: 25, top: 58, w: 3.3, h: 2.5, delay: 4.1, dur: 3.5 },
];

export default function Loader({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const minTime = setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(() => setIsLoading(false), 1000);
    }, 2200); // Réduit de 3800ms → 2200ms pour un accès plus rapide au contenu

    return () => clearTimeout(minTime);
  }, []);

  if (!isLoading) return <>{children}</>;

  return (
    <>
      {/* Loader Overlay */}
      <div
        className={`fixed inset-0 z-200 flex flex-col items-center justify-center bg-[#fffcf5] transition-all duration-1000 ${
          isFadingOut ? "opacity-0 scale-110" : "opacity-100 scale-100"
        }`}
      >
        {/* Animated ambient background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Deep ambient glow orbs */}
          <div className="loader-glow-orb loader-glow-orb-1" />
          <div className="loader-glow-orb loader-glow-orb-2" />
          <div className="loader-glow-orb loader-glow-orb-3" />

          {/* Floating dust particles — deterministic positions */}
          {DUST_PARTICLES.map((p, i) => (
            <div
              key={i}
              className="loader-dust-particle"
              style={{
                left: `${p.left}%`,
                top: `${p.top}%`,
                width: `${p.w}px`,
                height: `${p.h}px`,
                animationDelay: `${p.delay}s`,
                animationDuration: `${p.dur}s`,
              }}
            />
          ))}
        </div>

        {/* Central Rings System */}
        <div className="relative w-56 h-56 md:w-72 md:h-72 loader-rings-entrance">
          {/* Outer halo ring */}
          <div className="loader-halo-ring" />

          {/* Ring 1 — Main gold orbit */}
          <div className="loader-orbit-ring loader-orbit-1">
            <svg className="w-full h-full" viewBox="0 0 200 200">
              <defs>
                <linearGradient
                  id="goldGrad1"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#f39b15" stopOpacity="1" />
                  <stop offset="50%" stopColor="#ffd700" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#f39b15" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              <circle
                cx="100"
                cy="100"
                r="88"
                fill="none"
                stroke="url(#goldGrad1)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="120 80 40 60"
              />
            </svg>
          </div>

          {/* Ring 2 — Counter-rotating amber ring */}
          <div className="loader-orbit-ring loader-orbit-2">
            <svg className="w-full h-full" viewBox="0 0 200 200">
              <defs>
                <linearGradient
                  id="goldGrad2"
                  x1="100%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#ffd700" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#e8a317" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#ffd700" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <circle
                cx="100"
                cy="100"
                r="78"
                fill="none"
                stroke="url(#goldGrad2)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeDasharray="60 100 30 70"
              />
            </svg>
          </div>

          {/* Ring 3 — Inner fast ring */}
          <div className="loader-orbit-ring loader-orbit-3">
            <svg className="w-full h-full" viewBox="0 0 200 200">
              <defs>
                <linearGradient
                  id="goldGrad3"
                  x1="0%"
                  y1="100%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#e8a317" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#f39b15" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              <circle
                cx="100"
                cy="100"
                r="66"
                fill="none"
                stroke="url(#goldGrad3)"
                strokeWidth="1"
                strokeLinecap="round"
                strokeDasharray="20 40 60 30"
              />
            </svg>
          </div>

          {/* Central diamond emblem */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="loader-diamond-emblem">
              <div className="loader-diamond-glow" />
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                className="loader-diamond-icon"
              >
                <path
                  d="M12 2L2 9l10 13 10-13z"
                  fill="none"
                  stroke="url(#diamondGrad)"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 9h20M7 9l5 13 5-13M7 9l5-7 5 7"
                  fill="none"
                  stroke="url(#diamondGrad)"
                  strokeWidth="1"
                  strokeLinejoin="round"
                  opacity="0.6"
                />
                <defs>
                  <linearGradient
                    id="diamondGrad"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#ffd700" />
                    <stop offset="100%" stopColor="#f39b15" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* Orbital light particles */}
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div
              key={i}
              className="loader-orbital-particle"
              style={{
                animationDelay: `${i * 0.4}s`,
                animationDuration: `${3 + (i % 3)}s`,
              }}
            >
              <div
                className="loader-particle-dot"
                style={{
                  width: `${3 + (i % 3) * 2}px`,
                  height: `${3 + (i % 3) * 2}px`,
                }}
              />
            </div>
          ))}
        </div>

        {/* Initials with luxury reveal */}
        <div className="loader-initials-block mt-10">
          <div className="loader-initials-line" />
          <div className="flex items-center gap-4 my-3">
            <span className="loader-letter loader-letter-1">C</span>
            <span className="loader-ampersand-luxe">&</span>
            <span className="loader-letter loader-letter-2">K</span>
          </div>
          <div className="loader-initials-line" />
        </div>

        {/* Tagline with stagger reveal */}
        <div className="loader-tagline-block mt-5">
          <p className="loader-tagline-text">
            <span
              className="loader-tagline-word"
              style={{ animationDelay: "1.6s" }}
            >
              02
            </span>
            <span
              className="loader-tagline-dot"
              style={{ animationDelay: "1.8s" }}
            >
              ·
            </span>
            <span
              className="loader-tagline-word"
              style={{ animationDelay: "2.0s" }}
            >
              Mai
            </span>
            <span
              className="loader-tagline-dot"
              style={{ animationDelay: "2.2s" }}
            >
              ·
            </span>
            <span
              className="loader-tagline-word"
              style={{ animationDelay: "2.4s" }}
            >
              2026
            </span>
          </p>
        </div>

        {/* Luxe shimmer progress */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-48 md:w-56">
          <div className="loader-progress-track">
            <div className="loader-progress-fill" />
            <div className="loader-progress-glow" />
          </div>
        </div>
      </div>

      {/* Content hidden behind loader */}
      <div
        className={`transition-all duration-800 ${isFadingOut ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        {children}
      </div>
    </>
  );
}
