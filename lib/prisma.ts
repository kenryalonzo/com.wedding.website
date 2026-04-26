import { PrismaClient } from "@prisma/client";

// Singleton pattern — évite de créer une nouvelle connexion à chaque hot-reload en dev
// et prévient l'épuisement du pool de connexions en production.
const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
