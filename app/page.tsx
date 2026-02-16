import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Countdown from "@/components/Countdown";
import SaveTheDate from "@/components/SaveTheDate";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import Donation from "@/components/Donation";
import Guestbook from "@/components/Guestbook";
import Footer from "@/components/Footer";
import { getMessages } from "@/app/actions";

export const dynamic = "force-dynamic";

export default async function Home() {
  const messages = await getMessages();

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

      <Guestbook messages={messages} />

      <Location />

      <Footer />
    </main>
  );
}
