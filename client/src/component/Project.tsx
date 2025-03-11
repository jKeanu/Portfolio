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
                            <div className="project-image flex justify-center items-center">
                                <img src={project.photoUrl} alt={project.photo}/>
                            </div>
                            <div className="project-details">
                                <div className="flex flex-col">
                                    <h3 className="project-header">
                                        {project.name}
                                    </h3>
                                    <p>
                                        {project.description}
                                    </p>
                                </div>
                                <div className="made-with flex flex-col w-full">
                                    <h4 className="lg:text-[14px] text-[13px] text-start">Built with</h4>
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
                                    {project.status==="deployed"?"Visit Website":"Visit Repository"}
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