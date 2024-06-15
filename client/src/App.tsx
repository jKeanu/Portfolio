import { useEffect, useState } from "react";
import HeroSection from "./component/Hero"
import AboutMe from "./component/AboutMe";
import Projects from "./component/Project";
import Contact from "./component/Contact";

function App() {

  return (
    <>
      <HeroSection />
      <main className="w-full " >
        <AboutMe />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default App
