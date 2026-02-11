import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TechStack } from "@/components/sections/TechStack";
import { Timeline } from "@/components/sections/Timeline";
import { Projects } from "@/components/sections/Projects";
import { GitHub } from "@/components/sections/GitHub";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { getGitHubRepos } from "@/lib/github";

export default async function Home() {
  // Fetch GitHub repos at build time / request time with ISR
  const repos = await getGitHubRepos();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <Timeline />
        <Projects />
        <GitHub repos={repos} />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
