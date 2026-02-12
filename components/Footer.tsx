import Link from "next/link";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#001f54] text-stone-300 py-12 border-t border-gold/20">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8">
          <h2 className="text-2xl font-serif text-gold font-bold mb-2">
            Cédric & Karelle
          </h2>
          <p className="font-sans text-sm tracking-widest uppercase">
            02 Mai 2026
          </p>
        </div>

        <div className="flex justify-center gap-6 mb-8 text-sm">
          <Link href="#" className="hover:text-white transition-colors">
            Accueil
          </Link>
          <Link href="#story" className="hover:text-white transition-colors">
            Histoire
          </Link>
          <Link href="#details" className="hover:text-white transition-colors">
            Détails
          </Link>
          <Link href="#rsvp" className="hover:text-white transition-colors">
            RSVP
          </Link>
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col items-center gap-2 text-xs">
          <p className="flex items-center gap-1">
            Fait avec <Heart className="w-3 h-3 text-red-500 fill-current" />{" "}
            pour Cédric & Karelle
          </p>
          <p>© 2026 Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
