"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const messageSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères."),
  message: z.string().min(1, "Le message ne peut pas être vide."),
});

export async function submitRSVP(values: { name: string; message: string }) {
  try {
    const validatedFields = messageSchema.parse(values);

    // Vérification deadline — on conserve la logique existante
    const deadline = new Date("2026-05-15");
    if (new Date() > deadline) {
      return {
        success: false,
        message: "Les messages ne sont plus acceptés.",
      };
    }

    // Crée uniquement un Message (nom + voeu) — l'RSVP classique est fermé
    await prisma.message.create({
      data: {
        content: validatedFields.message,
        name: validatedFields.name,
      },
    });

    revalidatePath("/");
    return { success: true, message: "Message envoyé !" };
  } catch (error) {
    console.error("Message Error:", error);

    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: error.issues[0]?.message ?? "Les informations fournies sont invalides.",
      };
    }

    return {
      success: false,
      message: "Une erreur est survenue lors de l'envoi.",
    };
  }
}

export async function getMessages() {
  try {
    return await prisma.message.findMany({
      orderBy: { createdAt: "desc" },
    });
  } catch {
    return [];
  }
}

export async function clearAllData() {
  try {
    await prisma.message.deleteMany({});
    await prisma.guest.deleteMany({});
    revalidatePath("/");
    revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    console.error("Clear data error:", error);
    return { success: false };
  }
}
