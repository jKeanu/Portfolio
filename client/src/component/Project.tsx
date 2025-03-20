import useAOS from "../customHooks/useAOS"
import { ProjectDetails } from "../types/types"

const Projects:React.FC<{projects:ProjectDetails[]}>=({projects})=>{
    useAOS()


    return (
        <section className="projects-section pb-10" id="projects">
            <h2 className="section-header" data-aos="fade-right">Projects</h2>
            <div className="project-list-container py-10">
                <ul className="project-list">
                    {projects.length>0&&
                    projects.map((project, i)=>(
                    <li className="project-container" key={i}>
                        <a className="project cursor-pointer" href={project.projectLink} target="_blank" rel="noopener noreferrer">
                            <div className="shine"></div>
                            <div className="project-image-container flex justify-center items-center">
                                <img className={`project-image h-[125px] ${project.logo.isSymbol?"w-[125px]":"w-[190px]"}`} 
                                src={project.photoUrl} alt={project.logo.photo}/>
                            </div>
                            <div className="project-details">
                                <div className="flex flex-col">
                                    <h3 className="project-header">
                                        {project.name}
                                    </h3>
                                    <p className="project-description">
                                        {project.description}
                                    </p>
                                </div>
                                <div className="made-with flex flex-col w-full mb-auto mt-1">
                                    <div className="text-[14px] text-start">Built with</div>
                                    <div className="project-technologies-list">
                                        {project.technologies.map((tech, i)=>(
                                            <div key={i}>
                                                {tech}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="visit-website-container flex items-center justify-center px-3 
                                py-2 gap-x-[4px] shrink-0">
                                <span className="visit-website-text text-end font-light text-[16px] text-small-default">
                                    {project.status==="deployed"?"Visit Website":"Visit Repository"}
                                </span>
                                <div className="text-[12px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" 
                                stroke="#b3b8c4" stroke-width="2" strokeLinecap="round" strokeLinejoin="round" 
                                className=""><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6">
                                    </path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
                                    </svg>
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