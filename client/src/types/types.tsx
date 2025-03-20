export type ProjectDetails={
    name:string,
    photoUrl:string,
    logo:{
        isSymbol:boolean,
        photo:string
    }
    technologies: string[],
    description: string,
    projectLink: string,
    status: string
}