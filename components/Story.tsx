export default function Story() {
  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="relative p-10 border border-gold/40 rounded-sm bg-white/95 backdrop-blur-sm shadow-2xl">
        <div className="absolute -top-3 -left-3 w-12 h-12 border-t border-l border-gold" />
        <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b border-r border-gold" />

        <h2 className="text-2xl md:text-3xl font-serif text-royal-blue mb-6 tracking-wide text-center">
          Notre Thème
        </h2>

        <h3 className="text-lg font-sans font-semibold text-gold mb-4 uppercase tracking-wider text-center">
          Vase d'Or
        </h3>

        <blockquote className="text-base md:text-lg font-serif text-stone-700 italic leading-relaxed mb-4 text-center">
          "Si donc quelqu'un se conserve pur, en s'abstenant de ces choses, il
          sera un vase d'honneur, sanctifié, utile à son maître, propre à toute
          bonne œuvre."
        </blockquote>

        <cite className="block text-right text-royal-blue font-bold not-italic text-sm">
          — 2 Timothée 2:21
        </cite>
      </div>
    </div>
  );
}
