import Link from "next/link";
import { MapPin } from "lucide-react";

export default function Location() {
  return (
    <section
      id="details"
      className="py-20 text-center relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-serif text-gold mb-12">
          Le Lieu
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-8 h-8 text-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold font-serif text-stone-800">
                  Rathausplatz 2
                </h3>
                <p className="text-stone-600">27749 Delmenhorst, Allemagne</p>
              </div>
            </div>

            <div className="prose text-stone-600">
              <p>
                Nous avons hâte de célébrer ce moment unique avec vous dans ce
                lieu magnifique.
              </p>
              <Link
                href="https://www.google.com/maps/search/?api=1&query=Rathausplatz+2,27749+Delmenhorst"
                target="_blank"
                className="inline-block mt-4 text-gold hover:text-[#e08a00] underline underline-offset-4 transition-colors"
              >
                Voir sur Google Maps
              </Link>
            </div>
          </div>

          <div className="h-64 md:h-96 bg-stone-200 rounded-lg overflow-hidden relative shadow-lg">
            {/* Placeholder for venue image */}
            <div className="absolute inset-0 flex items-center justify-center text-stone-400">
              [Image du Lieu: Rathausplatz 2]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
