import HeroSection from "./component/Hero"
import AboutMe from "./component/AboutMe";
import Projects from "./component/Project";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import { useEffect, useState } from "react";
import LoadingScreen from "./component/LoadingScreen";

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [loadingDisplay, setLoadingDisplay] = useState('block')
  
  useEffect(()=>{
    if(isLoading){
      document.body.style.overflow = 'hidden';
    }else{
      document.body.style.overflow = 'auto';
    }
  }, [isLoading])

  const handleLoadScreen = (isFetching:boolean):void=>{
    if(!isFetching){
      setTimeout(()=>{
        setIsLoading(false)
        setTimeout(()=>{
          setLoadingDisplay('none') //Once the loading screen disappears we display none
        }, 550)
      }, 5500) //It's 3.5s, so even if the fetching project data takes almost instantly, 
      //the loading screen can last more than 1.5s
    }
  }

  return (
    <>
      <LoadingScreen isLoading={isLoading} loadingDisplay={loadingDisplay}/>
      <HeroSection />
      <main className="w-full">
        <AboutMe />
        <Projects handleLoadScreen={handleLoadScreen}/>
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
