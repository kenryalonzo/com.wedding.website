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
} from "lucide-react";
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
            className="inline-flex items-center gap-2 bg-white/80 border border-gold/20 text-stone-700 hover:bg-gold hover:text-white px-5 py-3 rounded-xl transition-all duration-300 text-sm font-sans disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer ml-auto"
          >
            <Download className="w-4 h-4" />
            Exporter CSV
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
            <>
              {/* Desktop Table View */}
              <div className="hidden md:block overflow-x-auto">
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

              {/* Mobile Cards View */}
              <div className="md:hidden divide-y divide-stone-100 border-t border-stone-100">
                {guests.map((guest) => (
                  <div
                    key={guest.id}
                    className="p-5 hover:bg-gold/5 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 shrink-0 rounded-full bg-linear-to-br from-gold/20 to-gold/5 flex items-center justify-center text-gold font-serif text-lg font-bold border border-gold/20">
                          {guest.name.charAt(0).toUpperCase()}
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-medium text-stone-800 truncate">
                            {guest.name}
                          </h3>
                          <div className="flex items-center gap-1.5 text-stone-500 text-sm mt-0.5">
                            <button
                              onClick={() => copyEmail(guest.email, guest.id)}
                              className="group flex items-center gap-1.5 hover:text-gold transition-colors text-left"
                            >
                              <Mail className="w-3.5 h-3.5 shrink-0" />
                              <span className="truncate max-w-[150px]">
                                {guest.email}
                              </span>
                              {copiedId === guest.id ? (
                                <Check className="w-3.5 h-3.5 text-green-500 shrink-0" />
                              ) : (
                                <Copy className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 shrink-0" />
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                      <span className="inline-flex items-center justify-center shrink-0 min-w-8 h-8 px-2 bg-blue-50 text-blue-700 rounded-lg font-medium text-sm mb-auto">
                        {guest.count}{" "}
                        <Users className="w-3.5 h-3.5 ml-1 inline" />
                      </span>
                    </div>
                    {guest.wishes && (
                      <div className="bg-stone-50 rounded-xl p-3 mb-3 border border-stone-100 relative mt-2">
                        <MessageSquare className="w-3 h-3 text-gold/40 absolute top-3 left-3" />
                        <p className="text-stone-600 text-sm italic pl-5">
                          &ldquo;{guest.wishes}&rdquo;
                        </p>
                      </div>
                    )}
                    <div className="flex items-center gap-1.5 text-stone-400 text-xs mt-3 border-t border-stone-100/50 pt-2">
                      <Calendar className="w-3.5 h-3.5" />
                      {format(
                        new Date(guest.createdAt),
                        "d MMM yyyy 'à' HH:mm",
                        {
                          locale: fr,
                        },
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Messages Section */}
        {messages.length > 0 && (
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gold/10 shadow-sm overflow-hidden mt-8">
            <div className="p-6 border-b border-stone-100 bg-white/50">
              <h2 className="text-xl font-serif text-stone-800 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-gold" />
                Messages du Livre d&apos;Or
              </h2>
            </div>
            <div className="p-6 bg-stone-50/30">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className="relative bg-white p-6 rounded-2xl shadow-sm border border-gold/10 hover:shadow-md transition-shadow group flex flex-col"
                  >
                    <div className="absolute -top-3 left-6 bg-gold/10 p-2 rounded-full border border-gold/20">
                      <MessageSquare className="w-3.5 h-3.5 text-gold" />
                    </div>
                    <blockquote className="text-stone-600 italic font-serif mt-2 mb-6 leading-relaxed text-sm flex-1">
                      <span className="text-3xl text-gold/20 font-serif leading-none select-none mr-1 block -mb-2">
                        &ldquo;
                      </span>
                      {msg.content}
                    </blockquote>
                    <div className="flex items-center justify-between border-t border-stone-50 pt-4 mt-auto">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-linear-to-br from-gold/20 to-gold/5 flex items-center justify-center text-gold font-serif text-xs font-bold border border-gold/20">
                          {msg.name.charAt(0).toUpperCase()}
                        </div>
                        <span className="text-sm font-medium text-stone-700">
                          {msg.name}
                        </span>
                      </div>
                      <span className="text-xs text-stone-400 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {format(new Date(msg.createdAt), "d MMM yyyy", {
                          locale: fr,
                        })}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
