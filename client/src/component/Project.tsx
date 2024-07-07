import { useEffect, useState } from "react"
import useAOS from "../customHooks/useAOS"
import axios, { AxiosResponse } from "axios"
import { ProjectDetails } from "../types/types"
import ProjectModal from "./ProjectModal";

export const API_URL = import.meta.env.MODE === 'production'? import.meta.env.VITE_API_URL_PROD : import.meta.env.VITE_API_URL_DEV;


const Projects:React.FC<{handleLoadScreen:(isFetching:boolean)=>void}>=({handleLoadScreen})=>{
    const [projects, setProjects] = useState<ProjectDetails[]>()
    const [isFetching, setIsFetching] = useState<boolean>(true)
    useAOS()

    useEffect(()=>{
        handleLoadScreen(isFetching)
    }, [isFetching])

    useEffect(()=>{
        const fetchLatestProjects = async ()=>{
            console.log('asdfasdf')
            try{
                const res:AxiosResponse<{status:string, data:ProjectDetails[]}> = await axios.get(`${API_URL}/my/projects/latest`)
                if(res.data.status==='success'){
                    setProjects(res.data.data)
                    setIsFetching(false)
                }
            }catch(err){
                setIsFetching(true)
            }
        }
        fetchLatestProjects()
    }, [])



    return (
        <section className="projects-section pb-10" id="projects">
            <h1 className="font-bold font-raleway text-center text-3xl lg:text-4xl" data-aos="fade-right">Projects</h1>
            <div className="project-list-container py-10">
                <ul className="project-list">
                    <li className="project-container">
                        <a className="project cursor-pointer">
                            <div className="project-image">
                                
                            </div>
                            <div className="project-details">
                                <div className="flex flex-col">
                                    <h2 className="project-header">
                                        Kaiwa
                                    </h2>
                                    <p>
                                        A chat application that uses modern web technologies, 
                                        aimed at providing seamless communication and collaboration among users.
                                    </p>
                                </div>
                                <div className="made-with flex flex-col w-full">
                                    <h3>Built With</h3>
                                    <div className="project-technologies-list">
                                        <div>React</div>
                                        <div>TypeScript</div>
                                        <div>Sass</div>
                                        <div>Socket.io</div>
                                        <div>Express</div>
                                        <div>MongoDB</div>
                                        <div>Redis</div>
                                        <div>S3</div>
                                        <div>JWT</div>
                                        <div>Responsive Design</div>
                                        <div>Mailjet</div>
                                    </div>
                                </div>
                            </div>
                            <div className="visit-website-container flex items-center justify-end px-3 py-2 gap-x-[4px]">
                                <span className="visit-website-text text-end font-light text-[12px]">
                                    Visit Website
                                </span>
                                <div className="chain text-[12px] text-default">
                                    &#128279;
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className="project-container">
                        <a className="project cursor-pointer">
                            <div className="project-image">

                            </div>
                            <div className="project-details">
                                <div className="flex flex-col">
                                    <h2 className="project-header">
                                        Kaiwa
                                    </h2>
                                    <p>
                                        A chat application that uses modern web technologies, 
                                    </p>
                                </div>
                                <div className="made-with flex flex-col w-full">
                                    <h3>Built With</h3>
                                    <div className="project-technologies-list">
                                        <div>React</div>
                                        <div>TypeScript</div>
                                        <div>Sass</div>
                                        <div>Socket.io</div>
                                        <div>Express</div>
                                        <div>MongoDB</div>
                                        <div>Redis</div>
                                        <div>S3</div>
                                        <div>JWT</div>
                                        <div>Responsive Design</div>
                                        <div>Mailjet</div>
                                    </div>
                                </div>
                            </div>
                            <div className="visit-website-container flex items-center justify-end px-3 py-2 gap-x-[4px]">
                                <span className="visit-website-text text-end font-light text-[12px]">
                                    Visit Website
                                </span>
                                <div className="chain text-[12px] text-default">
                                    &#128279;
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className="project-container">
                        <a className="project cursor-pointer">
                            <div className="project-image flex justify-center items-center">
                                <img src="/img/kaiwa_logo_portfolio.svg"/>
                            </div>
                            <div className="project-details">
                                <div className="flex flex-col">
                                    <h2 className="project-header">
                                        Kaiwa
                                    </h2>
                                    <p>
                                        A chat application that uses modern web technologies, 
                                        aimed at providing seamless communication and collaboration among users.
                                    </p>
                                </div>
                                <div className="made-with flex flex-col w-full">
                                    <h3>Built With</h3>
                                    <div className="project-technologies-list">
                                        <div>React</div>
                                        <div>TypeScript</div>
                                        <div>Sass</div>
                                        <div>Socket.io</div>
                                        <div>Express</div>
                                        <div>MongoDB</div>
                                        <div>Redis</div>
                                        <div>S3</div>
                                        <div>JWT</div>
                                        <div>Responsive Design</div>
                                        <div>Mailjet</div>
                                    </div>
                                </div>
                            </div>
                            <div className="visit-website-container flex items-center justify-end px-3 py-2 gap-x-[4px]">
                                <span className="visit-website-text text-end font-light text-[12px]">
                                    Visit Website
                                </span>
                                <div className="chain text-[12px] text-default">
                                    &#128279;
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className="project-container">
                        <a className="project cursor-pointer">
                            <div className="project-image">

                            </div>
                            <div className="project-details">
                                <div className="flex flex-col">
                                    <h2 className="project-header">
                                        Kaiwa
                                    </h2>
                                    <p>
                                        A chat application that uses modern web technologies, 
                                        aimed at providing seamless communication and collaboration among users.
                                    </p>
                                </div>
                                <div className="made-with flex flex-col w-full">
                                    <h3>Built With</h3>
                                    <div className="project-technologies-list">
                                        <div>React</div>
                                        <div>TypeScript</div>
                                        <div>Sass</div>
                                        <div>Socket.io</div>
                                        <div>Express</div>
                                        <div>MongoDB</div>
                                        <div>Redis</div>
                                        <div>S3</div>
                                        <div>JWT</div>
                                        <div>Responsive Design</div>
                                        <div>Mailjet</div>
                                    </div>
                                </div>
                            </div>
                            <div className="visit-website-container flex items-center justify-end px-3 py-2 gap-x-[4px]">
                                <span className="visit-website-text text-end font-light text-[12px]">
                                    Visit Website
                                </span>
                                <div className="chain text-[12px] text-default">
                                   &#128279;
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className="project-container">
                        <a className="project cursor-pointer">
                            <div className="project-image">

                            </div>
                            <div className="project-details">
                                <div className="flex flex-col">
                                    <h2 className="project-header">
                                        Kaiwa
                                    </h2>
                                    <p>
                                        A chat application that uses modern web technologies, 
                                        aimed at providing seamless communication and collaboration among users.
                                    </p>
                                </div>
                                <div className="made-with flex flex-col w-full">
                                    <h3>Built With</h3>
                                    <div className="project-technologies-list">
                                        <div>React</div>
                                        <div>TypeScript</div>
                                        <div>Sass</div>
                                        <div>Socket.io</div>
                                        <div>Express</div>
                                        <div>MongoDB</div>
                                        <div>Redis</div>
                                        <div>S3</div>
                                        <div>JWT</div>
                                        <div>Responsive Design</div>
                                        <div>Mailjet</div>
                                    </div>
                                </div>
                            </div>
                            <div className="visit-website-container flex items-center justify-end px-3 py-2 gap-x-[4px]">
                                <span className="visit-website-text text-end font-light text-[12px]">
                                    Visit Website
                                </span>
                                <div className="chain text-[12px] text-default">
                                    &#128279;
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className="project-container">
                        <a className="project cursor-pointer">
                            <div className="project-image">

                            </div>
                            <div className="project-details">
                                <div className="flex flex-col">
                                    <h2 className="project-header">
                                        Kaiwa
                                    </h2>
                                    <p>
                                        A chat application that uses modern web technologies, 
                                        aimed at providing seamless communication and collaboration among users.
                                    </p>
                                </div>
                                <div className="made-with flex flex-col w-full">
                                    <h3>Built With</h3>
                                    <div className="project-technologies-list">
                                        <div>React</div>
                                        <div>TypeScript</div>
                                        <div>Sass</div>
                                        <div>Socket.io</div>
                                        <div>Express</div>
                                        <div>MongoDB</div>
                                        <div>Redis</div>
                                        <div>S3</div>
                                        <div>JWT</div>
                                        <div>Responsive Design</div>
                                        <div>Mailjet</div>
                                    </div>
                                </div>
                            </div>
                            <div className="visit-website-container flex items-center justify-end px-3 py-2 gap-x-[4px]">
                                <span className="visit-website-text text-end font-light text-[12px]">
                                    Visit Website
                                </span>
                                <div className="chain text-[12px] text-default">
                                    &#128279;
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Projects