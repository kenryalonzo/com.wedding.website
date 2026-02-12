"use client";

import { X, Send, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { submitRSVP } from "@/app/actions";
import { useModal } from "@/components/providers/ModalProvider";
import { cn } from "@/lib/utils";

export default function RSVPModal() {
  const { isRSVPModalOpen: isOpen, closeRSVP: onClose } = useModal();

  const [rsvp, setRsvp] = useState({
    fullName: "",
    email: "",
    count: 1,
    message: "",
  });
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setErrorMessage(null);
    setIsSubmitting(true);

    const formData = {
      name: rsvp.fullName,
      email: rsvp.email,
      count: Number(rsvp.count),
      wishes: rsvp.message,
    };

    try {
      const result = await submitRSVP(formData);

      setIsSubmitting(false);

      if (!result.success) {
        setErrorMessage(result.message || "Une erreur est survenue.");
        return;
      }

      setRsvpSubmitted(true);
    } catch (e) {
      setIsSubmitting(false);
      setErrorMessage("Erreur de connexion.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-xl bg-white shadow-2xl animate-in fade-in zoom-in-95 duration-300 border border-gold/20">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 rounded-full bg-stone-100 p-2 text-stone-500 transition-colors hover:bg-stone-200"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-6 sm:p-8">
          {!rsvpSubmitted ? (
            <>
              {/* Header */}
              <div className="mb-8 text-center">
                <h2 className="font-serif text-3xl font-bold text-gold mb-2">
                  Réservez votre place
                </h2>
                <p className="text-stone-500 text-sm">
                  Confirmez votre présence avant le 30 Mars 2026
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {errorMessage && (
                  <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    {errorMessage}
                  </div>
                )}

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-stone-700">
                    Nom complet
                  </label>
                  <input
                    value={rsvp.fullName}
                    onChange={(e) =>
                      setRsvp((s) => ({ ...s, fullName: e.target.value }))
                    }
                    required
                    className="w-full h-11 rounded-lg border border-stone-300 bg-white px-4 text-sm text-stone-800 outline-none transition-all focus:border-gold focus:ring-1 focus:ring-gold"
                    placeholder="Ex: Jean Dupont"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-stone-700">
                    Email
                  </label>
                  <input
                    type="email"
                    value={rsvp.email}
                    onChange={(e) =>
                      setRsvp((s) => ({ ...s, email: e.target.value }))
                    }
                    required
                    className="w-full h-11 rounded-lg border border-stone-300 bg-white px-4 text-sm text-stone-800 outline-none transition-all focus:border-gold focus:ring-1 focus:ring-gold"
                    placeholder="Ex: jean.dupont@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-stone-700">
                    Nombre de personnes
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={10}
                    value={rsvp.count}
                    onChange={(e) =>
                      setRsvp((s) => ({
                        ...s,
                        count: Number(e.target.value),
                      }))
                    }
                    className="w-full h-11 rounded-lg border border-stone-300 bg-white px-4 text-sm text-stone-800 outline-none transition-all focus:border-gold focus:ring-1 focus:ring-gold"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-stone-700">
                    Un petit mot pour le livre d'or ?
                  </label>
                  <textarea
                    value={rsvp.message}
                    onChange={(e) =>
                      setRsvp((s) => ({ ...s, message: e.target.value }))
                    }
                    rows={4}
                    className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-sm text-stone-800 outline-none transition-all focus:border-gold focus:ring-1 focus:ring-gold resize-none"
                    placeholder="Vos félicitations..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "mt-4 w-full h-12 flex items-center justify-center gap-2 rounded-full bg-gold text-white font-serif font-bold tracking-wide shadow-md transition-all hover:bg-[#e08a00] hover:shadow-lg",
                    isSubmitting ? "opacity-70 cursor-wait" : "",
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Envoi...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Confirmer
                    </>
                  )}
                </button>
              </form>
            </>
          ) : (
            /* Success State */
            <div className="text-center py-12">
              <div className="mx-auto w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6 animate-in zoom-in duration-300">
                <svg
                  className="w-10 h-10 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-3xl text-gold mb-4">
                Merci {rsvp.fullName} !
              </h3>
              <p className="text-stone-600 mb-8 max-w-xs mx-auto">
                Votre présence a bien été confirmée. Nous avons hâte de vous
                voir !
              </p>

              <button
                onClick={onClose}
                className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-8 py-3 text-sm font-semibold text-stone-700 shadow-sm transition-colors hover:bg-stone-50"
              >
                Fermer
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
