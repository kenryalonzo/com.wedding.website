import { Message } from "@prisma/client";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

interface GuestbookProps {
  messages: Message[];
}

export default function Guestbook({ messages }: GuestbookProps) {
  if (messages.length === 0) return null;

  return (
    <section id="guestbook" className="py-20 bg-stone-100">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-serif text-royal-blue mb-12 text-center">
          Livre d'Or
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className="bg-white p-6 rounded-lg shadow-sm border border-stone-200"
            >
              <p className="text-stone-600 italic mb-4">"{msg.content}"</p>
              <div className="flex justify-between items-center text-sm">
                <span className="font-bold text-gold">{msg.name}</span>
                <span className="text-stone-400">
                  {format(new Date(msg.createdAt), "d MMMM yyyy", {
                    locale: fr,
                  })}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
