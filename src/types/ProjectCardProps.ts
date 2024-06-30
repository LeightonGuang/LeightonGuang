import { ImageObj } from "./ImageObj";
import { TechnologyObject } from "./TechnologyObject";

export interface ProjectCardProps {
  projectName: string;
  projectImgUrlList: ImageObj[];
  projectDescription: string;
  projectTechnologyList: Array<TechnologyObject>;
  projectGithubLink: string;
}
