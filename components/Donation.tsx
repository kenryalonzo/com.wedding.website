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
    <section id="donation" className="py-32 relative overflow-hidden">
      {/* Decorative ornaments */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -ml-32 -mb-32" />

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold" />
            <span className="text-xs uppercase tracking-[0.3em] text-stone-500">
              Contributions
            </span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-gold mb-6">
            Liste de Mariage
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto leading-relaxed italic [font-family:var(--font-playfair)]">
            Votre présence est notre plus beau cadeau. Si vous souhaitez
            néanmoins participer à notre nouvelle vie, voici comment vous pouvez
            contribuer :
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* PayPal Card */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-gold/20 to-gold/10 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
            <div className="relative bg-white p-10 rounded-2xl shadow-xl border border-gold/10 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#0070BA]/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Wallet className="w-8 h-8 text-[#0070BA]" />
              </div>
              <h3 className="text-2xl font-serif text-stone-800 mb-4">
                PayPal
              </h3>
              <p className="text-stone-500 mb-8 text-sm">
                Une solution simple et sécurisée pour vos dons en quelques
                clics.
              </p>
              <a
                href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=Kamsicedric@gmail.com&item_name=Mariage+Cedric+et+Karelle&currency_code=EUR"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#0070BA] hover:bg-[#005ea6] text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                Contribuer via PayPal
              </a>
              <span className="mt-4 text-[10px] text-stone-400 font-mono tracking-tight">
                Kamsicedric@gmail.com
              </span>
            </div>
          </div>

          {/* IBAN Card */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-gold/20 to-gold/10 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
            <div className="relative bg-white p-10 rounded-2xl shadow-xl border border-gold/10 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <CreditCard className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-2xl font-serif text-stone-800 mb-4">
                Virement
              </h3>
              <p className="text-stone-500 mb-8 text-sm">
                Vous pouvez également effectuer un virement direct sur notre
                compte.
              </p>

              <div className="w-full bg-stone-50 p-6 rounded-xl border border-stone-100 relative group/iban">
                <div className="flex flex-col gap-1 items-start text-left mb-4">
                  <span className="text-[10px] uppercase tracking-widest text-stone-400">
                    IBAN
                  </span>
                  <span className="font-mono text-sm md:text-base font-bold text-stone-700 break-all">
                    {iban}
                  </span>
                </div>
                <div className="flex justify-between items-center text-left">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] uppercase tracking-widest text-stone-400">
                      Titulaire
                    </span>
                    <span className="text-sm font-semibold text-stone-700">
                      Cedric Kamsi
                    </span>
                  </div>
                  <button
                    onClick={handleCopy}
                    className="p-3 bg-white rounded-lg shadow-sm border border-stone-200 hover:border-gold hover:text-gold transition-colors flex items-center gap-2 text-xs font-bold"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-green-500" />
                        <span>Copié !</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copier</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
