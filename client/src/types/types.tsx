export enum ProjectStatus {
  DEPLOYED = "deployed",
  INPROGRESS = "inProgress",
}

export type ProjectDetails = {
  name: string;
  photoUrl: string;
  logo: {
    isSymbol: boolean;
    photo: string;
  };
  technologies: string[];
  description: string;
  status: string;
};

type DeployedProject = ProjectDetails & {
  status: ProjectStatus.DEPLOYED;
  projectLink: string;
};

type InProgressProject = ProjectDetails & {
  status: ProjectStatus.INPROGRESS;
};

export type ProjectType = DeployedProject | InProgressProject;
