import { Navbar } from "./components/Navbar";
import { HeroSect } from "./components/HeroSect";
import { ExperienceSect } from "./components/exprience";
import { ProjectSection } from "./components/ProjectSection";
import { AboutMe } from "./components/AboutMe";
import { ContactUs } from "./components/contactUs";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-deepBlue font-sora">
        <Navbar />
        <HeroSect />
        <ExperienceSect />
        <ProjectSection />
        <AboutMe />
        <ContactUs />
      </div>
      <Analytics />
    </>
  );
}

export default App;