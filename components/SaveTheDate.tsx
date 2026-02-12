import Image from "next/image";
import Link from "next/link";

export default function SaveTheDate() {
  return (
    <section className="py-20 bg-stone-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image on the left */}
          <div className="h-64 md:h-96 rounded-lg overflow-hidden relative shadow-xl">
            <Image
              src="/couple.jpg"
              alt="Cédric & Karelle"
              fill
              className="object-cover"
            />
          </div>

          {/* Content on the right */}
          <div className="text-center md:text-left space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif text-royal-blue tracking-wide">
              Save the Date
            </h2>

            <div className="space-y-2">
              <p className="text-3xl md:text-4xl font-serif text-gold font-bold">
                2 Mai 2026
              </p>
              <p className="text-lg text-stone-600">Delmenhorst, Allemagne</p>
            </div>

            <Link
              href="#rsvp"
              className="inline-block bg-royal-blue hover:bg-gold text-white font-sans uppercase tracking-wider px-8 py-4 rounded-sm transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              RSVP
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
