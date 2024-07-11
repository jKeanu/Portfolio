import HeroSection from "../component/Hero"
import AboutMe from "../component/AboutMe";
import Projects from "../component/Project";
import Contact from "../component/Contact";
import Footer from "../component/Footer";
import { useEffect, useState } from "react";
import LoadingScreen from "../component/LoadingScreen";
import axios, { AxiosResponse } from "axios";
import { ProjectDetails } from "../types/types";

export const API_URL = import.meta.env.MODE === 'production'? import.meta.env.VITE_API_URL_PROD : import.meta.env.VITE_API_URL_DEV;

const Page = ()=>{
    const [isLoading, setIsLoading] = useState(true)
    const [loadingDisplay, setLoadingDisplay] = useState('block')
    const [projects, setProjects] = useState<ProjectDetails[]>([])
    
  
    const handleLoadScreen = (isFetching:boolean):void=>{
      if(!isFetching){
        setTimeout(()=>{
          setIsLoading(false)
          setTimeout(()=>{
            setLoadingDisplay('none') //Once the loading screen disappears we display none
          }, 550)
        }, 1500) //It's 5.5s, so even if the fetching project data takes almost instantly, 
        //the loading screen can last more than 5.5s
      }
  }
  
  
    useEffect(()=>{
      const fetchLatestProjects = async ()=>{
          try{
              const res:AxiosResponse<{status:string, data:ProjectDetails[]}> = await axios.get(`${API_URL}/my/projects/latest`)
              if(res.data.status==='success'){
                  setProjects(res.data.data)
                  handleLoadScreen(false)
              }
          }catch(err){
            handleLoadScreen(true)
          }
      }
      fetchLatestProjects()
  }, [])

    
    return(
        <>
        <LoadingScreen isLoading={isLoading} loadingDisplay={loadingDisplay}/>
          {!isLoading&&
          <>
            <HeroSection isLoading={isLoading}/>
            <main className="w-full">
              <AboutMe />
              <Projects projects={projects}/>
              <Contact />
            </main>
            <Footer />
          </>
        }
      </>
    )
}

export default Page

