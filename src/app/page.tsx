import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroCinematic } from "@/components/sections/HeroCinematic";
import { Standings } from "@/components/sections/Standings";
import { Roster } from "@/components/sections/Roster";
import { News } from "@/components/sections/News";
import { TickerBanner } from "@/components/ui/TickerBanner";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroCinematic />
        <TickerBanner />
        <Standings />
        <Roster />
        <News />
      </main>
      <Footer />
    </>
  );
}
