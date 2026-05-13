import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Showcase } from "@/components/sections/showcase";
import { Footer } from "@/components/sections/footer";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <Projects />
        <Showcase />
      </main>
      <Footer />
    </>
  );
}
