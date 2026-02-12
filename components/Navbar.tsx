import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-100 py-4 px-6 md:px-12 flex justify-between items-center transition-all duration-300">
      <div className="text-2xl font-serif text-royal-blue font-bold tracking-tight">
        <Link href="/">C & K</Link>
      </div>
      <div className="hidden md:flex gap-8 text-stone-600 font-sans text-sm tracking-wide uppercase">
        <Link href="#story" className="hover:text-gold transition-colors">
          Notre Histoire
        </Link>
        <Link href="#details" className="hover:text-gold transition-colors">
          Détails
        </Link>
        <Link href="#rsvp" className="hover:text-gold transition-colors">
          RSVP
        </Link>
        <Link href="#guestbook" className="hover:text-gold transition-colors">
          Livre d'Or
        </Link>
      </div>
      <Link
        href="#rsvp"
        className="bg-gold text-white px-6 py-2 rounded-full font-serif text-sm tracking-wide hover:bg-yellow-600 transition-colors shadow-md"
      >
        Réserver
      </Link>
    </nav>
  );
}
