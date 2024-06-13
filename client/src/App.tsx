import { useEffect, useState } from "react";
import HeroSection from "./component/Hero"
import AboutMe from "./component/AboutMe";

function App() {

  return (
    <>
      <HeroSection />
      <main className="w-full " >
        <AboutMe />
        <div className="aaa h-[150vh]">

        </div>
      </main>
    </>
  )
}

export default App
