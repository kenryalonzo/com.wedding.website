import { Message } from "@prisma/client";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

interface GuestbookProps {
  messages: Message[];
}

export default function Guestbook({ messages }: GuestbookProps) {
  if (messages.length === 0) return null;

  return (
    <section id="galerie" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <span className="text-gold uppercase tracking-[0.2em] text-sm font-sans mb-3 block">
            Vos mots doux
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6 relative inline-block">
            Livre d&apos;Or
            {/* Decorative underline */}
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-gold" />
          </h2>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {messages.map((msg, index) => (
            <div
              key={msg.id}
              className="break-inside-avoid bg-white p-8 rounded-sm shadow-sm border border-stone-100 relative group hover:shadow-md transition-shadow duration-300"
            >
              {/* Pin or Tape effect could go here */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-3 w-2 h-2 rounded-full bg-gold/20" />

              <blockquote className="font-serif italic text-stone-600 leading-relaxed text-lg mb-6 relative">
                <span className="absolute -top-4 -left-2 text-6xl text-gold/10 font-serif">
                  “
                </span>
                {msg.content}
              </blockquote>

              <div className="flex items-center justify-between border-t border-stone-100 pt-4">
                <span className="font-sans font-bold text-sm uppercase tracking-wide text-gold">
                  {msg.name}
                </span>
                <span className="text-xs text-stone-400 font-mono">
                  {format(new Date(msg.createdAt), "d MMM yyyy", {
                    locale: fr,
                  })}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state or invitation to add */}
        <div className="text-center mt-12">
          <p className="text-stone-500 italic font-serif">
            Merci pour vos vœux de bonheur
          </p>
        </div>
      </div>
    </section>
  );
}
