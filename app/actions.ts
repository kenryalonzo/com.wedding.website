"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const prisma = new PrismaClient();

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  count: z.number().min(1).max(10),
  wishes: z.string().optional(),
});

export async function submitRSVP(values: z.infer<typeof formSchema>) {
  try {
    const validatedFields = formSchema.parse(values);

    // Check deadlines (March 30, 2026)
    const deadline = new Date("2026-03-30");
    if (new Date() > deadline) {
      return {
        success: false,
        message: "Les inscriptions sont fermées depuis le 30 mars 2026.",
      };
    }

    // Create Guest
    await prisma.guest.create({
      data: {
        name: validatedFields.name,
        email: validatedFields.email,
        count: validatedFields.count,
        wishes: validatedFields.wishes,
      },
    });

    // Create Message if wishes exist
    if (validatedFields.wishes) {
      await prisma.message.create({
        data: {
          content: validatedFields.wishes,
          name: validatedFields.name,
        },
      });
    }

    revalidatePath("/");
    return { success: true, message: "Inscription réussie !" };
  } catch (error) {
    console.error("RSVP Error:", error);
    return {
      success: false,
      message: "Une erreur est survenue lors de l'enregistrement.",
    };
  }
}

export async function getMessages() {
  try {
    return await prisma.message.findMany({
      orderBy: { createdAt: "desc" },
    });
  } catch (_error) {
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
