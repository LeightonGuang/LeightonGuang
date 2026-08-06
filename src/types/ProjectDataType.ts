export interface ProjectDataType {
  name: string;
  path: string;
  images: { url: string; alt: string }[];
  description: string;
  technologies: { name: string; url: string }[];
  githubUrl: string;
  siteLink?: string;
}
