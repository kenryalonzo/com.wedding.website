"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Check, Loader2, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { submitRSVP } from "@/app/actions";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Le nom doit contenir au moins 2 caractères.",
  }),
  email: z.string().email({
    message: "Email invalide.",
  }),
  count: z
    .number()
    .min(1, {
      message: "Minimum 1 personne.",
    })
    .max(10, {
      message: "Maximum 10 personnes.",
    }),
  wishes: z.string().optional(),
});

export default function RSVPForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      count: 1,
      wishes: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setError(null);
    try {
      const result = await submitRSVP(values);
      if (result.success) {
        setIsSuccess(true);
        form.reset();
      } else {
        setError(result.message || "Une erreur est survenue.");
      }
    } catch (e) {
      setError("Erreur de connexion.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSuccess) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center animate-fade-in">
        <div className="flex justify-center mb-4">
          <div className="bg-green-100 p-3 rounded-full">
            <Check className="w-8 h-8 text-green-600" />
          </div>
        </div>
        <h3 className="text-2xl font-serif text-green-800 mb-2">Merci !</h3>
        <p className="text-green-700">Votre réponse a bien été enregistrée.</p>
        <button
          onClick={() => setIsSuccess(false)}
          className="mt-6 text-sm text-green-600 hover:text-green-800 underline"
        >
          Envoyer une autre réponse
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-xl border-t-4 border-gold">
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1">
            Nom complet
          </label>
          <input
            {...form.register("name")}
            className={cn(
              "w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-royal-blue focus:border-royal-blue outline-none transition-all",
              form.formState.errors.name
                ? "border-red-500"
                : "border-stone-300",
            )}
            placeholder="Votre nom"
          />
          {form.formState.errors.name && (
            <p className="text-red-500 text-xs mt-1">
              {form.formState.errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1">
            Email
          </label>
          <input
            {...form.register("email")}
            type="email"
            className={cn(
              "w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-royal-blue focus:border-royal-blue outline-none transition-all",
              form.formState.errors.email
                ? "border-red-500"
                : "border-stone-300",
            )}
            placeholder="votre@email.com"
          />
          {form.formState.errors.email && (
            <p className="text-red-500 text-xs mt-1">
              {form.formState.errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1">
            Nombre de personnes
          </label>
          <input
            {...form.register("count", { valueAsNumber: true })}
            type="number"
            min="1"
            max="10"
            className={cn(
              "w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-royal-blue focus:border-royal-blue outline-none transition-all",
              form.formState.errors.count
                ? "border-red-500"
                : "border-stone-300",
            )}
          />
          {form.formState.errors.count && (
            <p className="text-red-500 text-xs mt-1">
              {form.formState.errors.count.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1">
            Vœux (Livre d'or)
          </label>
          <textarea
            {...form.register("wishes")}
            rows={4}
            className="w-full px-4 py-2 border border-stone-300 rounded-md focus:ring-2 focus:ring-royal-blue focus:border-royal-blue outline-none transition-all"
            placeholder="Laissez un message aux mariés..."
          />
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm flex items-center gap-2">
            <X className="w-4 h-4" />
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-royal-blue text-white py-3 rounded-md font-serif font-bold tracking-wide hover:bg-[#002a70] transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Envoi en cours...
            </>
          ) : (
            "Confirmer ma présence"
          )}
        </button>
      </form>
    </div>
  );
}
