import Link from "next/link";
import { useRef } from "react";
import data from "@/data/projectsData.json";
import { ExternalLinkSvg } from "@/assets/icons/iconsSvg";
import { motion, useScroll, useTransform } from "framer-motion";

interface ProjectDataType {
  name: string;
  images: { url: string; alt: string }[];
  description: string;
  technologies: { name: string; url: string }[];
  githubUrl: string;
  siteLink?: string;
}

const Projects = () => {
  const projectsData: ProjectDataType[] = data;
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef });

  const x = useTransform(
    scrollYProgress,
    [0.1, 0.9],
    [
      "0%",
      `${projectsData.length <= 5 ? "0%" : `-${projectsData.length * 20 - 100}%`}`,
    ],
  );

  return (
    <section
      className="relative h-[300dvh] w-full bg-[#f5f5f5]"
      ref={sectionRef}
    >
      <div className="sticky top-0 mx-8 flex h-dvh items-center overflow-hidden">
        <motion.div className="flex h-dvh w-full py-8" style={{ x }}>
          {projectsData.map((project, i) => (
            <div
              key={i}
              className="flex h-full flex-none items-center border-l-2 border-stone-400 lg:w-1/5"
            >
              <div className="flex flex-col gap-8 p-8">
                <h2 className="text-react text-7xl font-bold">
                  {String(i + 1).padStart(2, "0")}
                </h2>

                <img
                  className="h-40 w-full bg-stone-600 object-contain"
                  src={project.images[0].url}
                  alt={project.name + " thumbnail"}
                />

                <div className="h-44">
                  <h3 className="text-lg font-bold">{project.name}</h3>
                  <p className="pt-2 text-sm leading-none">
                    {project.description}
                  </p>
                </div>

                <Link href={project.githubUrl}>
                  <ExternalLinkSvg className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
