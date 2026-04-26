import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Countdown from "@/components/Countdown";
import SaveTheDate from "@/components/SaveTheDate";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import Donation from "@/components/Donation";
// import Guestbook from "@/components/Guestbook"; // 🔇 Temporairement désactivé (perf)
import Footer from "@/components/Footer";

// 🚀 Page statique (ISR) — le livre d'or étant désactivé, plus besoin de force-dynamic.
// Réactiver avec : export const revalidate = 60; quand le guestbook reviendra.
export const revalidate = false; // cache statique indéfini (rebuild only)

export default async function Home() {
  return (
    <main className="min-h-screen bg-transparent text-stone-800 font-sans selection:bg-gold selection:text-white relative">
      <Navbar />
      <Hero>
        <Countdown />
        <Story />
      </Hero>
      <SaveTheDate />
      <Testimonials />

      <Donation />

      {/* <Guestbook messages={[]} /> */}
      {/* 🔇 Livre d'or temporairement désactivé pour les performances */}
      {/* Pour réactiver : décommenter l'import Guestbook, cette ligne,  */}
      {/* supprimer revalidate=false et remettre export const dynamic = 'force-dynamic' */}

      <Location />

      <Footer />
    </main>
  );
}
