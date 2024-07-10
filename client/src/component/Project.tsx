import useAOS from "../customHooks/useAOS"
import { ProjectDetails } from "../types/types"

export const API_URL = import.meta.env.MODE === 'production'? import.meta.env.VITE_API_URL_PROD : import.meta.env.VITE_API_URL_DEV;


const Projects:React.FC<{projects:ProjectDetails[]}>=({projects})=>{
    useAOS()


    return (
        <section className="projects-section pb-10" id="projects">
            <h1 className="font-bold font-raleway text-center text-3xl lg:text-4xl" data-aos="fade-right">Projects</h1>
            <div className="project-list-container py-10">
                <ul className="project-list">
                    {projects.length>0&&
                    projects.map((project, i)=>(
                    <li className="project-container" key={i}>
                        <a className="project cursor-pointer" href={project.projectLink}>
                            <div className="project-image flex justify-center items-center">
                                <img src={project.photoUrl}/>
                            </div>
                            <div className="project-details">
                                <div className="flex flex-col">
                                    <h2 className="project-header">
                                        {project.name}
                                    </h2>
                                    <p>
                                        {project.description}
                                    </p>
                                </div>
                                <div className="made-with flex flex-col w-full">
                                    <h3>Built With</h3>
                                    <div className="project-technologies-list">
                                        {project.technologies.map((tech, i)=>(
                                            <div key={i}>
                                                {tech}
                                            </div>
                                        ))}
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
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Projects