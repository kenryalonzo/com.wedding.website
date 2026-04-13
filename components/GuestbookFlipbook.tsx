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

  // Adaptive data structure based on platform
  const faces = useMemo(() => {
    if (!isClient) return [];
    
    const faceList: any[] = [];
    
    // Page 0: Cover (Always Front of Leaf 0)
    faceList.push({ type: "cover" });

    if (isMobile) {
      // Mobile: 1 face = 1 message (Stacked Info + Content)
      messages.forEach((msg, idx) => {
        faceList.push({ type: "message-stacked", message: msg, index: idx });
      });
      // Final Thank You face
      faceList.push({ type: "thanks" });
    } else {
      // Desktop: 1 message per spread (Left: Info, Right: Msg)
      messages.forEach((msg, idx) => {
        // Back face (Left)
        faceList.push({ type: "message-info", message: msg, index: idx });
        // Front face of next leaf (Right)
        faceList.push({ type: "message-content", message: msg, index: idx });
      });
      // Final Thank You (Left page of last spread)
      faceList.push({ type: "thanks" });
    }

    return faceList;
  }, [messages, isMobile, isClient]);

  const totalLeaves = useMemo(() => Math.ceil(faces.length / 2), [faces.length]);

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
        className="relative w-full max-w-[320px] md:max-w-[900px] h-[520px] md:h-[600px] perspective-[3000px]"
        style={{ perspective: "3000px" }}
      >
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[85%] h-12 bg-black/15 blur-3xl rounded-full pointer-events-none" />

        {Array.from({ length: totalLeaves }).map((_, i) => {
          const isFlipped = currentPage > i;
          const isCurrent = currentPage === i;
          const zIndex = isFlipped ? i + 10 : totalLeaves - i + 10;
          
          const frontFace = faces[i * 2];
          const backFace = faces[i * 2 + 1];

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
              {/* === FRONT FACE (Right side when open) === */}
              <div
                className="absolute inset-0 w-full h-full bg-[#fdfcfb] rounded-lg md:rounded-l-none md:rounded-r-xl border border-stone-200/40 flex flex-col overflow-hidden"
                style={{
                  backfaceVisibility: "hidden",
                  boxShadow: isCurrent && !isFlipped
                    ? "inset 10px 0 30px -10px rgba(0,0,0,0.05), 5px 5px 20px rgba(0,0,0,0.1)"
                    : "inset 10px 0 20px -10px rgba(0,0,0,0.03)",
                }}
              >
                <div className="absolute top-0 left-0 w-16 h-full bg-linear-to-r from-stone-400/20 via-stone-200/5 to-transparent pointer-events-none z-20" />
                {frontFace && renderFace(frontFace, language, t, false, i * 2)}
              </div>

              {/* === BACK FACE (Left side when open) === */}
              <div
                className="absolute inset-0 w-full h-full bg-[#fdfcfb] rounded-lg md:rounded-l-xl md:rounded-r-none border border-stone-200/40 flex flex-col overflow-hidden"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                  boxShadow: isFlipped && isCurrent
                    ? "inset -10px 0 30px -10px rgba(0,0,0,0.05), -5px 5px 20px rgba(0,0,0,0.1)"
                    : "inset -10px 0 20px -10px rgba(0,0,0,0.03)",
                }}
              >
                <div className="absolute top-0 right-0 w-16 h-full bg-linear-to-l from-stone-400/20 via-stone-200/5 to-transparent pointer-events-none z-20" />
                {backFace && renderFace(backFace, language, t, true, i * 2 + 1)}
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

function renderFace(face: any, language: string, t: any, isBack: boolean, pageIdx: number) {
  const commonNames = translations[language as keyof typeof translations].common.coupleName;

  switch (face.type) {
    case "cover":
      return (
        <div className="relative w-full h-full flex flex-col group">
          <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
            <Image src="/couple.jpg" alt="Cover" fill className="object-cover object-[center_30%] scale-105 transition-transform duration-2000" quality={90} priority />
            <div className="absolute inset-0 bg-white/75 backdrop-blur-[1px]" />
            <div className="absolute inset-0 bg-linear-to-t from-white via-white/40 to-transparent" />
          </div>
          <div className="relative z-10 flex flex-col justify-end items-center h-full p-8 md:p-12 text-center pb-20 md:pb-24">
            <div className="inline-block border border-gold/40 rounded-full px-6 py-2 mb-6 backdrop-blur-sm bg-white/60 shadow-xs">
              <p className="text-[10px] md:text-xs tracking-[0.3em] text-blue-900 font-bold uppercase">{t.coverLabel}</p>
            </div>
            <h1 className="text-3xl md:text-5xl font-serif text-blue-950 mb-4 tracking-wider leading-tight">{t.coverTitle}</h1>
            <div className="w-12 md:w-20 h-px bg-gold mx-auto my-6" />
            <p className="font-serif italic text-stone-600 text-lg md:text-2xl tracking-wide">{commonNames}</p>
          </div>
        </div>
      );

    case "message-stacked": // MOBILE SPECIAL
      return (
        <div className="relative w-full h-full p-6 flex flex-col animate-fadeIn">
          <div className="absolute inset-3 border border-gold/10 rounded-md pointer-events-none" />
          <div className="mb-4 pt-4 border-b border-stone-100 pb-4">
            <p className="text-gold uppercase tracking-widest text-[9px] font-bold mb-1">{t.from}</p>
            <h3 className="text-xl font-serif text-blue-950 font-medium">{face.message.name}</h3>
            <p className="text-stone-400 text-[10px] italic">{new Date(face.message.createdAt).toLocaleDateString(language === "fr" ? "fr-FR" : "en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
          </div>
          <div className="flex-1 overflow-y-auto custom-scrollbar pr-1">
             <Quote size={24} className="text-gold/20 mb-3" />
             <p className="text-stone-700 font-serif text-sm leading-relaxed text-justify italic">{face.message.content}</p>
          </div>
          <div className="mt-4 pt-3 flex items-center justify-between opacity-30 text-[9px] font-serif italic tracking-widest text-stone-400">
             <Heart size={14} fill="currentColor" />
             <span>{t.pageLabel} {pageIdx + 1}</span>
          </div>
        </div>
      );

    case "message-info": // DESKTOP LEFT
      return (
        <div className="relative w-full h-full p-12 flex flex-col justify-center items-center text-center animate-fadeIn">
          <div className="space-y-8 w-full">
            <div className="w-20 h-px bg-linear-to-r from-transparent via-gold/40 to-transparent mx-auto" />
            <div className="space-y-4">
              <p className="text-gold uppercase tracking-[0.3em] text-xs font-bold">{t.from}</p>
              <h3 className="text-3xl font-serif text-blue-950 font-medium px-4">{face.message.name}</h3>
            </div>
            <div className="relative inline-block py-2">
              <p className="font-serif italic text-stone-400 text-base">{t.dateLabel} {new Date(face.message.createdAt).toLocaleDateString(language === "fr" ? "fr-FR" : "en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
            </div>
            <div className="w-20 h-px bg-linear-to-r from-transparent via-gold/40 to-transparent mx-auto" />
            <div className="opacity-15 flex justify-center gap-4">
              <Heart size={16} fill="#C5A059" className="text-gold" />
              <Heart size={16} fill="#C5A059" className="text-gold" />
              <Heart size={16} fill="#C5A059" className="text-gold" />
            </div>
          </div>
          <div className="absolute bottom-8 left-12 text-stone-300 font-serif text-xs italic opacity-50">{t.pageLabel} {pageIdx + 1}</div>
        </div>
      );

    case "message-content": // DESKTOP RIGHT
      return (
        <div className="relative w-full h-full p-14 flex flex-col animate-fadeIn">
          <div className="absolute inset-6 border border-gold/15 rounded-md pointer-events-none" />
          <Quote size={48} className="text-gold/20 mb-8 shrink-0" />
          <div className="flex-1 overflow-y-auto pr-4 custom-scrollbar">
            <p className="text-stone-700 font-serif text-lg leading-relaxed text-justify italic">{face.message.content}</p>
          </div>
          <div className="mt-8 flex justify-between items-end border-t border-stone-100 pt-8">
            <Heart className="text-blue-900 opacity-5" fill="currentColor" size={56} />
            <div className="text-stone-300 font-serif text-xs italic tracking-widest opacity-50">{t.pageLabel} {pageIdx + 1}</div>
          </div>
        </div>
      );

    case "thanks":
      return (
        <div className="relative w-full h-full flex flex-col justify-center items-center p-8 md:p-14 text-center animate-fadeIn">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
            <div className="grid grid-cols-6 h-full w-full">
               {Array.from({length: 24}).map((_, idx) => <Heart key={idx} className="m-auto" />)}
            </div>
          </div>
          <Quote className="text-gold/30 mb-8" size={48} fill="currentColor" />
          <h2 className="text-3xl font-serif text-blue-950 mb-6 tracking-wide">{t.message ? "Karelle & Cédric" : "Merci"}</h2>
          <p className="font-serif italic text-stone-600 text-base md:text-lg leading-relaxed max-w-sm mx-auto mb-10">{t.message}</p>
          <div className="w-16 h-px bg-gold mb-8" />
          <p className="font-serif text-xl md:text-2xl text-stone-800 tracking-wide font-medium">{commonNames}</p>
          <div className={`absolute bottom-8 text-stone-300 font-serif text-xs italic opacity-50 ${isBack ? 'left-12' : 'right-12'}`}>{t.pageLabel} {pageIdx + 1}</div>
        </div>
      );
    default:
      return null;
  }
}
