export default function OurStory() {
  return (
    <section id="histoire" className="py-32 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-px bg-linear-to-r from-transparent to-gold" />
              <span className="text-xs uppercase tracking-[0.3em] text-stone-500">
                Notre Histoire
              </span>
              <div className="w-16 h-px bg-linear-to-l from-transparent to-gold" />
            </div>
            <h2 className="text-5xl md:text-6xl font-serif text-gold mb-4">
              Une Histoire d&apos;Amour
            </h2>
            <p className="text-lg text-stone-600 italic [font-family:var(--font-playfair)]">
              Deux cœurs, un chemin, une destinée
            </p>
          </div>
        </div>

        {/* Story Timeline - Vertical with alternating sides */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-linear-to-b from-gold via-[#e08a00] to-gold hidden md:block" />

          <div className="space-y-16 md:space-y-24">
            {/* Chapter 1 - Left side */}
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div className="md:text-right space-y-4 order-2 md:order-1">
                <div className="inline-block md:float-right">
                  <div className="flex items-center gap-3 mb-3 md:flex-row-reverse">
                    <div className="w-3 h-3 rounded-full bg-gold shadow-lg" />
                    <span className="text-sm font-sans uppercase tracking-wider text-gold">
                      Première Rencontre
                    </span>
                  </div>
                  <div className="bg-white p-8 rounded-2xl shadow-xl border border-gold/20 max-w-md hover:shadow-2xl transition-shadow duration-300">
                    <h3 className="text-2xl font-serif text-gold mb-4">
                      Le Début
                    </h3>
                    <p className="text-stone-700 leading-relaxed [font-family:var(--font-playfair)] italic">
                      Nos chemins se sont croisés dans la maison de Dieu, où nos
                      cœurs ont reconnu quelque chose de spécial. Un regard, un
                      sourire, et nous avons su que ce moment changerait nos
                      vies à jamais.
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2" />
            </div>

            {/* Chapter 2 - Right side */}
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div className="order-1" />
              <div className="space-y-4 order-2">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 rounded-full bg-gold shadow-lg" />
                  <span className="text-sm font-sans uppercase tracking-wider text-gold">
                    L&apos;Amour Grandit
                  </span>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-gold/20 max-w-md hover:shadow-2xl transition-shadow duration-300">
                  <h3 className="text-2xl font-serif text-gold mb-4">
                    La Connexion
                  </h3>
                  <p className="text-stone-700 leading-relaxed [font-family:var(--font-playfair)] italic">
                    Jour après jour, notre amitié s&apos;est transformée en
                    quelque chose de plus profond. Nous avons découvert en
                    l&apos;autre un partenaire, un confident, et une âme sœur
                    avec qui partager nos rêves et notre foi.
                  </p>
                </div>
              </div>
            </div>

            {/* Chapter 3 - Left side */}
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div className="md:text-right space-y-4 order-2 md:order-1">
                <div className="inline-block md:float-right">
                  <div className="flex items-center gap-3 mb-3 md:flex-row-reverse">
                    <div className="w-3 h-3 rounded-full bg-gold shadow-lg" />
                    <span className="text-sm font-sans uppercase tracking-wider text-gold">
                      L&apos;Engagement
                    </span>
                  </div>
                  <div className="bg-white p-8 rounded-2xl shadow-xl border border-gold/20 max-w-md hover:shadow-2xl transition-shadow duration-300">
                    <h3 className="text-2xl font-serif text-gold mb-4">
                      La Promesse
                    </h3>
                    <p className="text-stone-700 leading-relaxed [font-family:var(--font-playfair)] italic">
                      Sous le regard de Dieu, nous avons choisi de nous engager
                      l&apos;un envers l&apos;autre. Une promesse d&apos;amour
                      éternel, de soutien mutuel, et de marcher ensemble sur le
                      chemin que le Seigneur a tracé pour nous.
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2" />
            </div>

            {/* Chapter 4 - Right side */}
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div className="order-1" />
              <div className="space-y-4 order-2">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 rounded-full bg-gold shadow-lg" />
                  <span className="text-sm font-sans uppercase tracking-wider text-gold">
                    Notre Avenir
                  </span>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-gold/20 max-w-md hover:shadow-2xl transition-shadow duration-300">
                  <h3 className="text-2xl font-serif text-gold mb-4">
                    Le Mariage
                  </h3>
                  <p className="text-stone-700 leading-relaxed [font-family:var(--font-playfair)] italic">
                    Aujourd&apos;hui, nous célébrons notre union devant Dieu,
                    notre famille et nos amis. C&apos;est le début d&apos;une
                    nouvelle aventure, remplie d'amour, de grâce et de
                    bénédictions. Ensemble, pour toujours.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative heart at the end */}
          <div className="flex justify-center mt-20">
            <div className="relative">
              <div className="absolute inset-0 bg-gold/20 blur-xl rounded-full" />
              <div className="relative bg-linear-to-br from-gold to-[#e08a00] p-6 rounded-full shadow-2xl">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
