import { useState } from "react";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import background2 from "./assets/portfolio_background2.jpg";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <>
      <section className="overflow-x-hidden">
        <Navbar />
        <section id="Home" className="min-h-screen">
          <Introduction />
        </section>
        <section id="About">
          <div
            className="relative mt-2 min-h-screen bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${background2})` }}
          >
            <div className="relative z-10 flex flex-row w-full">
              <Skills />
              <About />
            </div>
          </div>
        </section>
        <section id="Projects">
          <Projects />
        </section>
        <section id="Contact">
          <Contact />
        </section>
      </section>
      <footer className=" py-4 text-center text-sm font-bold tracking-widest font-lg bg-[#050505] text-amber-700">
        © 2026 Vipin Soni · Built with React
      </footer>
    </>
  );
}

export default App;
