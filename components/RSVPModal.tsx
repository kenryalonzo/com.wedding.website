"use client";

import { X, Send, Loader2, Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { submitRSVP } from "@/app/actions";
import { useModal } from "@/components/providers/ModalProvider";
import { useLanguage } from "@/components/providers/LanguageContext";
import { translations } from "@/lib/translations";
import { cn } from "@/lib/utils";

export default function RSVPModal() {
  const { isRSVPModalOpen: isOpen, closeRSVP: onClose } = useModal();
  const { language } = useLanguage();
  const t = translations[language].rsvp;

  const [form, setForm] = useState({ name: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Fermeture au clavier
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  // Bloquer le scroll quand la modale est ouverte
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setErrorMessage(null);
    setIsSubmitting(true);

    try {
      const result = await submitRSVP({
        name: form.name.trim(),
        message: form.message.trim(),
      });

      setIsSubmitting(false);

      if (!result.success) {
        setErrorMessage(result.message ?? t.errorGeneric);
        return;
      }

      setSubmitted(true);
    } catch {
      setIsSubmitting(false);
      setErrorMessage(t.errorConnection);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-md rounded-2xl bg-white shadow-2xl animate-in fade-in zoom-in-95 duration-300 border border-gold/20 overflow-hidden">
        {/* Decorative top band */}
        <div className="h-1.5 w-full bg-gradient-to-r from-gold/60 via-gold to-amber-300" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-5 z-20 rounded-full bg-stone-100 p-1.5 text-stone-400 transition-colors hover:bg-stone-200 hover:text-stone-600"
          aria-label="Fermer"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="px-6 py-7 sm:px-8 sm:py-8">
          {!submitted ? (
            <>
              {/* Header */}
              <div className="mb-7 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold/10 mb-4">
                  <Heart className="w-5 h-5 text-gold fill-gold/30" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-stone-800 mb-1.5">
                  {t.title}
                </h2>
                <p className="text-stone-400 text-sm leading-relaxed max-w-xs mx-auto">
                  {t.subtitle}
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMessage && (
                  <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    {errorMessage}
                  </div>
                )}

                {/* Nom */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                    {t.nameLabel}
                  </label>
                  <input
                    value={form.name}
                    onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                    required
                    minLength={2}
                    className="w-full h-11 rounded-xl border border-stone-200 bg-stone-50 px-4 text-sm text-stone-800 outline-none transition-all focus:border-gold focus:ring-2 focus:ring-gold/20 focus:bg-white"
                    placeholder={t.namePlaceholder}
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                    {t.messageLabel}
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
                    required
                    rows={5}
                    className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-800 outline-none transition-all focus:border-gold focus:ring-2 focus:ring-gold/20 focus:bg-white resize-none leading-relaxed"
                    placeholder={t.messagePlaceholder}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "mt-2 w-full h-12 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold to-amber-400 text-white font-semibold tracking-wide shadow-md transition-all hover:shadow-lg hover:opacity-90 active:scale-[0.98]",
                    isSubmitting && "opacity-60 cursor-wait",
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      {t.sending}
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      {t.confirm}
                    </>
                  )}
                </button>
              </form>
            </>
          ) : (
            /* Success State */
            <div className="text-center py-8">
              <div className="mx-auto w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center mb-5 animate-in zoom-in duration-500">
                <Heart className="w-9 h-9 text-gold fill-gold/40" />
              </div>
              <h3 className="font-serif text-2xl text-stone-800 mb-3">
                {t.successTitle}, {form.name} !
              </h3>
              <p className="text-stone-500 text-sm mb-8 max-w-xs mx-auto leading-relaxed">
                {t.successMessage}
              </p>
              <button
                onClick={onClose}
                className="inline-flex items-center justify-center rounded-full border border-stone-200 bg-white px-8 py-3 text-sm font-semibold text-stone-600 shadow-sm transition-colors hover:bg-stone-50 hover:border-stone-300"
              >
                {t.close}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
