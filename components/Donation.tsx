"use client";

import { CreditCard, Wallet, Copy, Check } from "lucide-react";
import { useState } from "react";

export default function Donation() {
  const [copied, setCopied] = useState(false);
  const iban = "DE34 2905 0101 0083 4930 49";

  const handleCopy = () => {
    navigator.clipboard.writeText(iban);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="donation" className="py-24 relative">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white/40 backdrop-blur-md border border-white/60 p-12 md:p-16 rounded-sm shadow-xl relative overflow-hidden">
          {/* Subtle corner decorations */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t border-l border-gold/30" />
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b border-r border-gold/30" />

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-gold mb-6 tracking-wide">
              Liste de Mariage
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto leading-relaxed italic [font-family:var(--font-playfair)] text-lg">
              "Votre présence est notre plus beau cadeau.{" "}
              <br className="hidden md:block" /> Si vous souhaitez participer à
              notre nouvelle vie..."
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center relative">
            {/* Vertical Separator for Desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent -translate-x-1/2" />

            {/* Horizontal Separator for Mobile */}
            <div className="md:hidden w-full h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent my-4" />

            {/* IBAN Section */}
            <div className="flex flex-col items-center text-center space-y-6">
              <span className="font-serif text-2xl text-stone-700">
                Virement
              </span>
              <div className="flex flex-col space-y-2">
                <span className="text-xs uppercase tracking-[0.2em] text-stone-400">
                  IBAN
                </span>
                <button
                  onClick={handleCopy}
                  className="group relative flex items-center justify-center gap-2 font-mono text-lg md:text-xl text-stone-600 hover:text-gold transition-colors py-2 px-4 rounded hover:bg-white/50"
                >
                  <span>{iban}</span>
                  {copied ? (
                    <Check className="w-4 h-4 text-green-500" />
                  ) : (
                    <Copy className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-stone-400" />
                  )}
                  {copied && (
                    <span className="absolute -bottom-6 text-[10px] text-green-600 font-sans tracking-wide">
                      Copié dans le presse-papier
                    </span>
                  )}
                </button>
                <span className="text-sm text-stone-500">Cedric Kamsi</span>
              </div>
            </div>

            {/* PayPal Section */}
            <div className="flex flex-col items-center text-center space-y-6">
              <span className="font-serif text-2xl text-stone-700">PayPal</span>
              <p className="text-stone-500 text-sm max-w-[200px]">
                Rapide et sécurisé via Kamsicedric@gmail.com
              </p>
              <a
                href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=Kamsicedric@gmail.com&item_name=Mariage+Cedric+et+Karelle&currency_code=EUR"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-gold text-gold hover:bg-gold hover:text-white px-8 py-3 rounded-full transition-all duration-300 font-serif"
              >
                <Wallet className="w-4 h-4" />
                <span>Faire un don</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
