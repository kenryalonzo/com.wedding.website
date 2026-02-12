export default function Testimonials() {
  return (
    <section className="py-32 bg-[#e6f0ff] relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#e6f0ff] via-[#d4e5ff]/30 to-[#e6f0ff]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-gold" />
              <span className="text-xs uppercase tracking-[0.3em] text-stone-500">
                Nos Témoignages
              </span>
              <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-gold" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-gold">
              Nos Cœurs Parlent
            </h2>
          </div>
        </div>

        {/* Testimonials Cards */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Cédric's Testimonial */}
          <div className="group relative">
            {/* Decorative quote mark */}
            <div className="absolute -top-6 -left-4 text-8xl text-gold/20 font-serif leading-none select-none">
              "
            </div>

            <div className="relative bg-gradient-to-br from-white to-stone-50/50 p-10 md:p-12 rounded-2xl shadow-xl border border-stone-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-gold/30 rounded-tl-2xl" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-gold/30 rounded-br-2xl" />

              <div className="relative z-10">
                <div className="mb-6">
                  <h3 className="text-2xl font-serif text-gold mb-2">Cédric</h3>
                  <div className="w-12 h-1 bg-gold rounded-full" />
                </div>

                <blockquote className="text-base md:text-lg [font-family:var(--font-playfair)] text-stone-700 italic leading-relaxed mb-6">
                  Karelle est la lumière qui illumine mes journées. Son sourire,
                  sa douceur et sa foi inébranlable m'inspirent chaque jour.
                  Avec elle, j'ai trouvé non seulement une partenaire, mais une
                  âme sœur avec qui bâtir un avenir rempli d'amour et de grâce.
                </blockquote>

                <div className="flex items-center gap-2 text-sm text-stone-500">
                  <div className="w-8 h-[1px] bg-gold" />
                  <span className="italic">Le Marié</span>
                </div>
              </div>
            </div>
          </div>

          {/* Karelle's Testimonial */}
          <div className="group relative md:mt-16">
            {/* Decorative quote mark */}
            <div className="absolute -top-6 -left-4 text-8xl text-gold/20 font-serif leading-none select-none">
              "
            </div>

            <div className="relative bg-gradient-to-br from-white to-stone-50/50 p-10 md:p-12 rounded-2xl shadow-xl border border-stone-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-gold/30 rounded-tl-2xl" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-gold/30 rounded-br-2xl" />

              <div className="relative z-10">
                <div className="mb-6">
                  <h3 className="text-2xl font-serif text-gold mb-2">
                    Karelle
                  </h3>
                  <div className="w-12 h-1 bg-gold rounded-full" />
                </div>

                <blockquote className="text-base md:text-lg [font-family:var(--font-playfair)] text-stone-700 italic leading-relaxed mb-6">
                  Cédric est mon roc, mon confident et mon meilleur ami. Sa
                  gentillesse, sa sagesse et son amour inconditionnel me font me
                  sentir bénie chaque jour. Ensemble, nous marchons vers un
                  avenir où l'amour de Dieu guide nos pas.
                </blockquote>

                <div className="flex items-center gap-2 text-sm text-stone-500">
                  <div className="w-8 h-[1px] bg-gold" />
                  <span className="italic">La Mariée</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative center element */}
        <div className="flex justify-center mt-16">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-gold" />
            <div className="w-3 h-3 rounded-full bg-gold" />
            <div className="w-2 h-2 rounded-full bg-gold" />
          </div>
        </div>
      </div>
    </section>
  );
}
