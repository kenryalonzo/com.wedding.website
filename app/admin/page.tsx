import { PrismaClient } from "@prisma/client";
import AdminDashboard from "./AdminDashboard";

const prisma = new PrismaClient();

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const guests = await prisma.guest.findMany({
    orderBy: { createdAt: "desc" },
  });
  const messages = await prisma.message.findMany({
    orderBy: { createdAt: "desc" },
  });

  return <AdminDashboard guests={guests} messages={messages} />;
}
