import { useState } from "react";
import { ThemeContext, useThemeState, useReveal, useSpotlight } from "./hooks";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CommandPalette from "./components/CommandPalette";

export default function App() {
  const themeState = useThemeState();
  const [paletteOpen, setPaletteOpen] = useState(false);
  useReveal();
  useSpotlight();

  return (
    <ThemeContext.Provider value={themeState}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav onOpenPalette={() => setPaletteOpen(true)} />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <CommandPalette open={paletteOpen} setOpen={setPaletteOpen} />
      <div className="grain" aria-hidden="true" />
    </ThemeContext.Provider>
  );
}
