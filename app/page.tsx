import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Countdown from "@/components/Countdown";
import SaveTheDate from "@/components/SaveTheDate";
import OurStory from "@/components/OurStory";
import Location from "@/components/Location";
import Donation from "@/components/Donation";
import RSVPForm from "@/components/RSVPForm";
import Guestbook from "@/components/Guestbook";
import Footer from "@/components/Footer";
import GoldenHalos from "@/components/GoldenHalos";
import { getMessages } from "@/app/actions";

export const dynamic = "force-dynamic";

export default async function Home() {
  const messages = await getMessages();

  return (
    <main className="min-h-screen bg-transparent text-stone-800 font-sans selection:bg-gold selection:text-white relative">
      <GoldenHalos />
      <Navbar />
      <Hero>
        <Countdown />
        <Story />
      </Hero>
      <SaveTheDate />
      <OurStory />

      <Donation />

      <Location />

      <section id="rsvp" className="py-20 relative">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-gold mb-4">
            Répondez S'il Vous Plaît
          </h2>
          <p className="text-stone-600 mb-12 max-w-2xl mx-auto">
            Nous serions honorés de votre présence. Veuillez confirmer votre
            venue avant le <strong className="text-gold">30 Mars 2026</strong>.
          </p>
          <RSVPForm />
        </div>
      </section>

      <Guestbook messages={messages} />
      <Footer />
    </main>
  );
}
