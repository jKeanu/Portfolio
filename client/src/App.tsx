import HeroSection from "./component/Hero"
import AboutMe from "./component/AboutMe";
import Projects from "./component/Project";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

function App() {

  return (
    <>
      <HeroSection />
      <main className="w-full " >
        <AboutMe />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
