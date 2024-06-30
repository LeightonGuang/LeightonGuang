import { TechnologyObject } from "./TechnologyObject";

export interface ProjectCardProps {
  projectName: string;
  projectImgUrlList: Array<string>;
  projectDescription: string;
  projectTechnologyList: Array<TechnologyObject>;
  projectGithubLink: string;
}
