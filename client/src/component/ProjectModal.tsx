import { ProjectDetails } from "../types/types"

const ProjectModal:React.FC=()=>{

    return(
        <dialog  open={false} className="w-screen h-screen fixed left-0 top-0 bg-[#00000033] z-[100]">
            <div className="project-info-container w-[950px] h-[730px] bg-[#2a324d] left-[50%] absolute top-[50%]
                translate-x-[-50%] translate-y-[-50%] flex-col flex">
                <div className="project-images-container h-[535px] w-full">
                </div>
                <div className="project-more-details h-[50px]">

                </div>
                <div className="project-link-container h-[50px]">
                    <a href="#"></a>
                </div>
            </div>
        </dialog>
    )
}

export default ProjectModal