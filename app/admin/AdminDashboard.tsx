"use client";

import { useState } from "react";
import { Guest, Message } from "@prisma/client";
import {
  Users,
  Mail,
  Copy,
  Check,
  Lock,
  LogIn,
  UserCheck,
  MessageSquare,
  Calendar,
  Download,
  Trash2,
} from "lucide-react";
import { clearAllData } from "@/app/actions";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

const ADMIN_PASSWORD = "CK2026!";

interface AdminDashboardProps {
  guests: Guest[];
  messages: Message[];
}

export default function AdminDashboard({
  guests,
  messages,
}: AdminDashboardProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [clearing, setClearing] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Mot de passe incorrect");
    }
  };

  const copyEmail = (email: string, id: string) => {
    navigator.clipboard.writeText(email);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const copyAllEmails = () => {
    const allEmails = guests.map((g) => g.email).join(", ");
    navigator.clipboard.writeText(allEmails);
    setCopiedId("all");
    setTimeout(() => setCopiedId(null), 2000);
  };

  const exportCSV = () => {
    const header = "Nom,Email,Nombre de personnes,Message,Date d'inscription\n";
    const rows = guests
      .map(
        (g) =>
          `"${g.name}","${g.email}",${g.count},"${g.wishes ?? ""}","${format(new Date(g.createdAt), "dd/MM/yyyy HH:mm", { locale: fr })}"`,
      )
      .join("\n");
    const csv = header + rows;
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute(
      "download",
      `invites_mariage_${format(new Date(), "yyyy-MM-dd")}.csv`,
    );
    link.click();
  };

  const handleClearData = async () => {
    if (
      !confirm(
        "⚠️ Êtes-vous sûr de vouloir supprimer toutes les données ? Cette action est irréversible.",
      )
    )
      return;
    setClearing(true);
    await clearAllData();
    setClearing(false);
    window.location.reload();
  };

  const totalGuests = guests.reduce((sum, g) => sum + g.count, 0);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-linear-to-br from-[#f5f0e8] to-[#e8e0d4] flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-gold/10 p-10 text-center">
            {/* Logo area */}
            <div className="w-20 h-20 mx-auto mb-6 bg-linear-to-br from-gold/20 to-gold/5 rounded-2xl flex items-center justify-center border border-gold/20 shadow-lg">
              <Lock className="w-8 h-8 text-gold" />
            </div>

            <h1 className="text-3xl font-serif text-stone-800 mb-2">
              Administration
            </h1>
            <p className="text-stone-500 text-sm mb-8">
              Cédric & Karelle — Mariage
            </p>

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="relative">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Mot de passe"
                  className="w-full px-5 py-4 bg-stone-50 border border-stone-200 rounded-xl text-stone-700 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold/50 transition-all"
                />
              </div>
              {error && (
                <p className="text-red-500 text-sm animate-pulse">{error}</p>
              )}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-linear-to-r from-gold to-[#e0940a] hover:from-[#e08a00] hover:to-[#d68500] text-white font-sans uppercase tracking-[0.15em] px-6 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-sm cursor-pointer"
              >
                <LogIn className="w-4 h-4" />
                Connexion
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-[#f5f0e8] to-[#e8e0d4]">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gold/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-serif text-stone-800">
              Admin — Mariage C&K
            </h1>
            <p className="text-stone-500 text-sm">Gestion des inscriptions</p>
          </div>
          <a
            href="/"
            className="text-sm text-gold hover:text-gold/80 transition-colors font-sans uppercase tracking-wider"
          >
            ← Retour au site
          </a>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gold/10 p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-gold" />
              </div>
              <div>
                <p className="text-3xl font-serif text-stone-800">
                  {guests.length}
                </p>
                <p className="text-sm text-stone-500">Inscriptions</p>
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gold/10 p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                <UserCheck className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-3xl font-serif text-stone-800">
                  {totalGuests}
                </p>
                <p className="text-sm text-stone-500">Personnes attendues</p>
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gold/10 p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <p className="text-3xl font-serif text-stone-800">
                  {messages.length}
                </p>
                <p className="text-sm text-stone-500">
                  Messages livre d&apos;or
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          <button
            onClick={copyAllEmails}
            disabled={guests.length === 0}
            className="inline-flex items-center gap-2 bg-white/80 border border-gold/20 text-stone-700 hover:bg-gold hover:text-white px-5 py-3 rounded-xl transition-all duration-300 text-sm font-sans disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            {copiedId === "all" ? (
              <Check className="w-4 h-4 text-green-500" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
            {copiedId === "all" ? "Emails copiés !" : "Copier tous les emails"}
          </button>
          <button
            onClick={exportCSV}
            disabled={guests.length === 0}
            className="inline-flex items-center gap-2 bg-white/80 border border-gold/20 text-stone-700 hover:bg-gold hover:text-white px-5 py-3 rounded-xl transition-all duration-300 text-sm font-sans disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            <Download className="w-4 h-4" />
            Exporter CSV
          </button>
          <button
            onClick={handleClearData}
            disabled={
              clearing || (guests.length === 0 && messages.length === 0)
            }
            className="inline-flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 hover:bg-red-600 hover:text-white hover:border-red-600 px-5 py-3 rounded-xl transition-all duration-300 text-sm font-sans disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer ml-auto"
          >
            <Trash2 className="w-4 h-4" />
            {clearing ? "Suppression..." : "Vider la base de données"}
          </button>
        </div>

        {/* Guest Table */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gold/10 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-stone-100">
            <h2 className="text-xl font-serif text-stone-800 flex items-center gap-2">
              <Mail className="w-5 h-5 text-gold" />
              Liste des invités inscrits
            </h2>
          </div>

          {guests.length === 0 ? (
            <div className="p-12 text-center">
              <Users className="w-12 h-12 text-stone-300 mx-auto mb-4" />
              <p className="text-stone-500 font-serif italic text-lg">
                Aucune inscription pour le moment
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-stone-50/80">
                    <th className="text-left px-6 py-4 text-xs uppercase tracking-wider text-stone-500 font-sans">
                      Nom
                    </th>
                    <th className="text-left px-6 py-4 text-xs uppercase tracking-wider text-stone-500 font-sans">
                      Email
                    </th>
                    <th className="text-center px-6 py-4 text-xs uppercase tracking-wider text-stone-500 font-sans">
                      Personnes
                    </th>
                    <th className="text-left px-6 py-4 text-xs uppercase tracking-wider text-stone-500 font-sans">
                      Message
                    </th>
                    <th className="text-left px-6 py-4 text-xs uppercase tracking-wider text-stone-500 font-sans">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100/80">
                  {guests.map((guest) => (
                    <tr
                      key={guest.id}
                      className="hover:bg-gold/5 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-linear-to-br from-gold/20 to-gold/5 flex items-center justify-center text-gold font-serif text-sm font-bold border border-gold/20">
                            {guest.name.charAt(0).toUpperCase()}
                          </div>
                          <span className="font-medium text-stone-700">
                            {guest.name}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => copyEmail(guest.email, guest.id)}
                          className="group flex items-center gap-2 text-stone-600 hover:text-gold transition-colors cursor-pointer"
                        >
                          <span className="font-mono text-sm">
                            {guest.email}
                          </span>
                          {copiedId === guest.id ? (
                            <Check className="w-3.5 h-3.5 text-green-500" />
                          ) : (
                            <Copy className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                          )}
                        </button>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-50 text-blue-700 rounded-lg font-medium text-sm">
                          {guest.count}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-stone-500 text-sm max-w-[200px] truncate block">
                          {guest.wishes || "—"}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-1.5 text-stone-400 text-sm">
                          <Calendar className="w-3.5 h-3.5" />
                          {format(new Date(guest.createdAt), "d MMM yyyy", {
                            locale: fr,
                          })}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Messages Section */}
        {messages.length > 0 && (
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gold/10 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-stone-100">
              <h2 className="text-xl font-serif text-stone-800 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-gold" />
                Messages du Livre d&apos;Or
              </h2>
            </div>
            <div className="divide-y divide-stone-100/80">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className="p-6 hover:bg-gold/5 transition-colors"
                >
                  <p className="text-stone-600 italic font-serif mb-3 leading-relaxed">
                    &ldquo;{msg.content}&rdquo;
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-stone-700">
                      — {msg.name}
                    </span>
                    <span className="text-xs text-stone-400">
                      {format(new Date(msg.createdAt), "d MMM yyyy", {
                        locale: fr,
                      })}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
