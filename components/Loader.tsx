"use client";

import { useState, useEffect } from "react";

export default function Loader({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const minTime = setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(() => setIsLoading(false), 1000);
    }, 3800);

    return () => clearTimeout(minTime);
  }, []);

  if (!isLoading) return <>{children}</>;

  return (
    <>
      {/* Loader Overlay */}
      <div
        className={`fixed inset-0 z-200 flex flex-col items-center justify-center transition-all duration-1000 ${
          isFadingOut ? "opacity-0 scale-110" : "opacity-100 scale-100"
        }`}
        style={{
          background:
            "linear-gradient(160deg, #0a0a14 0%, #0d0b1a 30%, #12101f 60%, #0a0a14 100%)",
        }}
      >
        {/* Animated starfield background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Deep ambient glow orbs */}
          <div className="loader-glow-orb loader-glow-orb-1" />
          <div className="loader-glow-orb loader-glow-orb-2" />
          <div className="loader-glow-orb loader-glow-orb-3" />

          {/* Floating dust particles */}
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="loader-dust-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${1 + Math.random() * 3}px`,
                height: `${1 + Math.random() * 3}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
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
                  <stop offset="0%" stopColor="#ffeaa7" stopOpacity="0.7" />
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
          {Array.from({ length: 8 }).map((_, i) => (
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
