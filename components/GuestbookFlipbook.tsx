"use client";

import React, { useState, useEffect, useMemo } from "react";
import { ChevronLeft, ChevronRight, Quote, Heart } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageContext";
import { translations } from "@/lib/translations";
import Image from "next/image";

type Message = {
  id: string;
  content: string;
  name: string;
  createdAt: Date | string;
};

interface GuestbookFlipbookProps {
  messages: Message[];
}

export default function GuestbookFlipbook({
  messages,
}: GuestbookFlipbookProps) {
  const { language } = useLanguage();
  const t = translations[language].guestbook;

  const [currentPage, setCurrentPage] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // One message per spread: 
  // Leaf 0: Front = Cover, Back = Message 1 Info
  // Leaf i: Front = Message i Content, Back = Message i+1 Info
  // Last Leaf: Front = Last Message Content, Back = Thank You Page
  const totalLeaves = useMemo(() => messages.length + 1, [messages.length]);

  const turnNext = () => {
    if (currentPage < totalLeaves - 1) setCurrentPage((p) => p + 1);
  };

  const turnPrev = () => {
    if (currentPage > 0) setCurrentPage((p) => p - 1);
  };

  if (!isClient) return null;

  return (
    <div className="relative w-full max-w-6xl mx-auto py-8 md:py-12 flex items-center justify-center min-h-[550px] md:min-h-[750px] overflow-visible select-none">
      {/* Navigation Controls */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-2 md:-px-16 pointer-events-none z-[100]">
        <button
          onClick={turnPrev}
          disabled={currentPage === 0}
          aria-label="Page précédente"
          className="pointer-events-auto p-3 md:p-4 bg-white/95 backdrop-blur-md rounded-full shadow-xl text-blue-900 focus:outline-hidden disabled:opacity-0 transition-all duration-300 hover:bg-white hover:scale-110 active:scale-95 border border-stone-100/50 group"
        >
          <ChevronLeft size={24} className="md:w-7 md:h-7 group-hover:-translate-x-0.5 transition-transform" />
        </button>

        <button
          onClick={turnNext}
          disabled={currentPage === totalLeaves - 1}
          aria-label="Page suivante"
          className="pointer-events-auto p-3 md:p-4 bg-white/95 backdrop-blur-md rounded-full shadow-xl text-blue-900 focus:outline-hidden disabled:opacity-0 transition-all duration-300 hover:bg-white hover:scale-110 active:scale-95 border border-stone-100/50 group"
        >
          <ChevronRight size={24} className="md:w-7 md:h-7 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* 3D Scene Container */}
      <div
        className="relative w-full max-w-[320px] md:max-w-[900px] h-[480px] md:h-[600px] perspective-[3000px]"
        style={{ perspective: "3000px" }}
      >
        {/* Soft realistic shadow base */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[85%] h-12 bg-black/15 blur-3xl rounded-full pointer-events-none" />

        {Array.from({ length: totalLeaves }).map((_, i) => {
          const isFlipped = currentPage > i;
          const isCurrent = currentPage === i;
          const isPrev = currentPage === i + 1;
          
          // High-performance depth management
          const zIndex = isFlipped ? i + 10 : totalLeaves - i + 10;
          
          return (
            <div
              key={i}
              className="absolute top-0 right-0 w-full md:w-1/2 h-full transition-transform duration-1000 ease-[cubic-bezier(0.645,0.045,0.355,1)] will-change-transform"
              style={{
                transformOrigin: isMobile ? "center" : "left center",
                transformStyle: "preserve-3d",
                transform: isFlipped ? "rotateY(-180deg) translateZ(0)" : "rotateY(0deg) translateZ(0)",
                zIndex,
              }}
            >
              {/* === FRONT FACE (Right Page) === */}
              <div
                className="absolute inset-0 w-full h-full bg-[#fdfcfb] rounded-lg md:rounded-l-none md:rounded-r-xl border border-stone-200/40 flex flex-col overflow-hidden"
                style={{
                  backfaceVisibility: "hidden",
                  boxShadow: isCurrent && !isFlipped
                    ? "inset 10px 0 30px -10px rgba(0,0,0,0.05), 5px 5px 20px rgba(0,0,0,0.08)"
                    : "inset 10px 0 20px -10px rgba(0,0,0,0.03)",
                }}
              >
                {/* Spine Shadow */}
                <div className="absolute top-0 left-0 w-16 h-full bg-linear-to-r from-stone-400/20 via-stone-200/5 to-transparent pointer-events-none z-20" />

                {i === 0 ? (
                  // COVER PAGE
                  <div className="relative w-full h-full flex flex-col group">
                    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
                      <Image
                        src="/couple.jpg"
                        alt="Karelle et Cédric"
                        fill
                        className="object-cover object-[center_30%] scale-105 transition-transform duration-2000 group-hover:scale-100"
                        quality={90}
                        priority
                      />
                      <div className="absolute inset-0 bg-white/75 backdrop-blur-[1px]" />
                      <div className="absolute inset-0 bg-linear-to-t from-white via-white/40 to-transparent" />
                    </div>

                    <div className="relative z-10 flex flex-col justify-end items-center h-full p-8 md:p-12 text-center pb-16 md:pb-24">
                      <div className="inline-block border border-gold/40 rounded-full px-6 py-2 mb-6 backdrop-blur-sm bg-white/60 shadow-xs">
                        <p className="text-[10px] md:text-xs tracking-[0.3em] text-blue-900 font-bold uppercase">
                          {t.coverLabel}
                        </p>
                      </div>

                      <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-blue-950 mb-4 tracking-wider leading-tight">
                        {t.coverTitle}
                      </h1>

                      <div className="w-12 md:w-20 h-px bg-gold mx-auto my-6" />

                      <p className="font-serif italic text-stone-600 text-lg md:text-2xl font-medium tracking-wide">
                        {translations[language].common.coupleName}
                      </p>
                    </div>
                  </div>
                ) : (
                  // MESSAGE CONTENT (RIGHT)
                  <div className="relative w-full h-full p-8 md:p-14 flex flex-col">
                    <div className="absolute inset-4 md:inset-6 border border-gold/15 rounded-md pointer-events-none" />
                    <Quote size={40} className="text-gold/20 mb-6 shrink-0" />
                    
                    <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar relative z-10">
                      <p className="text-stone-700 font-serif text-base md:text-lg leading-relaxed text-justify italic">
                        {messages[i - 1]?.content}
                      </p>
                    </div>
                    
                    <div className="mt-8 flex justify-between items-end border-t border-stone-100 pt-6">
                      <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center opacity-10">
                        <Heart className="text-blue-900" fill="currentColor" size={48} />
                      </div>
                      <div className="text-right text-stone-300 font-serif text-xs italic tracking-widest">
                        Page {i * 2 + 1}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* === BACK FACE (Left Page) === */}
              <div
                className="absolute inset-0 w-full h-full bg-[#fdfcfb] rounded-lg md:rounded-l-xl md:rounded-r-none border border-stone-200/40 flex flex-col overflow-hidden"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                  boxShadow: isFlipped && isCurrent
                    ? "inset -10px 0 30px -10px rgba(0,0,0,0.05), -5px 5px 20px rgba(0,0,0,0.08)"
                    : "inset -10px 0 20px -10px rgba(0,0,0,0.03)",
                }}
              >
                {/* Spine Shadow Back */}
                <div className="absolute top-0 right-0 w-16 h-full bg-linear-to-l from-stone-400/20 via-stone-200/5 to-transparent pointer-events-none z-20" />

                <div className="relative w-full h-full p-8 md:p-14 flex flex-col justify-center text-center items-center">
                  {i < messages.length ? (
                    // SENDER INFO (LEFT)
                    <div className="space-y-8 md:space-y-12 w-full animate-fadeIn">
                      <div className="w-20 md:w-28 h-px bg-linear-to-r from-transparent via-gold/40 to-transparent mx-auto" />
                      
                      <div className="space-y-4">
                        <p className="text-gold uppercase tracking-[0.25em] text-[10px] md:text-xs font-bold">
                          {t.from}
                        </p>
                        <h3 className="text-2xl md:text-4xl font-serif text-blue-950 font-medium px-4 breaking-words">
                          {messages[i]?.name}
                        </h3>
                      </div>

                      <div className="relative inline-block py-2">
                        <p className="font-serif italic text-stone-400 text-sm md:text-base">
                          {t.dateLabel} {new Date(messages[i]?.createdAt).toLocaleDateString(
                            language === "fr" ? "fr-FR" : "en-US",
                            { year: "numeric", month: "long", day: "numeric" }
                          )}
                        </p>
                      </div>

                      <div className="w-20 md:w-28 h-px bg-linear-to-r from-transparent via-gold/40 to-transparent mx-auto" />
                      
                      <div className="opacity-20 flex justify-center gap-4">
                        <Heart size={16} fill="#C5A059" className="text-gold" />
                        <Heart size={16} fill="#C5A059" className="text-gold" />
                        <Heart size={16} fill="#C5A059" className="text-gold" />
                      </div>
                    </div>
                  ) : (
                    // THANK YOU PAGE (LAST BACK)
                    <div className="relative w-full h-full flex flex-col justify-center items-center p-6 text-center animate-fadeIn">
                      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                        <div className="grid grid-cols-6 h-full w-full">
                           {Array.from({length: 24}).map((_, idx) => (
                             <Heart key={idx} className="m-auto" />
                           ))}
                        </div>
                      </div>

                      <Quote className="text-gold/30 mb-8" size={48} fill="currentColor" />
                      
                      <h2 className="text-3xl md:text-4xl font-serif text-blue-950 mb-6">
                        {t.title}
                      </h2>
                      
                      <p className="font-serif italic text-stone-600 text-base md:text-lg leading-relaxed max-w-sm mx-auto mb-10">
                        {t.message}
                      </p>

                      <div className="w-16 h-px bg-gold mb-8" />
                      
                      <p className="font-serif text-xl md:text-2xl text-stone-800 tracking-wide font-medium">
                        Karelle & Cédric
                      </p>
                    </div>
                  )}

                  {/* Page Number (Left) */}
                  <div className="absolute bottom-6 left-12 text-stone-300 font-serif text-xs italic">
                    Page {i * 2 + 2}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(197, 160, 89, 0.05);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(197, 160, 89, 0.3);
          border-radius: 10px;
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
