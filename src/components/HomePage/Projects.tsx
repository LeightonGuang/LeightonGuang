import Link from "next/link";
import { useRef } from "react";
import data from "@/data/projectsData.json";
import { useRouter } from "next/navigation";
import { ProjectDataType } from "@/types/ProjectDataType";
import { ExternalLinkSvg } from "@/assets/icons/iconsSvg";
import { GithubIconSvg } from "@/assets/icons/businessCardIcons";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";

const Projects = () => {
  const projectsData: ProjectDataType[] = data;
  const sectionRef = useRef(null);
  const router = useRouter();

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
      <div className="sticky top-0 flex h-dvh flex-col p-8">
        <div className="w-full">
          <motion.div
            className="flex w-max cursor-pointer flex-col"
            onClick={() => router.push("/projects")}
            initial="initial"
            whileHover="hover"
          >
            <h2 className="text-5xl font-semibold">PROJECTS</h2>
            <motion.div
              className="h-0.5 w-full bg-black"
              variants={{
                initial: { width: 0 },
                hover: { width: "100%", transition: { duration: 0.25 } },
              }}
            />
          </motion.div>
        </div>

        <div className="h-full overflow-hidden">
          <MotionDesktopProjectList x={x} projectsData={projectsData} />
        </div>
      </div>
    </section>
  );
};

export default Projects;

const MotionDesktopProjectList = ({
  x,
  projectsData,
}: {
  x: MotionValue<string>;
  projectsData: ProjectDataType[];
}) => {
  const router = useRouter();

  return (
    <motion.div className="flex h-full w-full pt-8" style={{ x }}>
      {projectsData.map((project, i) => (
        <div
          key={i}
          className="flex flex-none border-l-2 border-stone-400 p-8 hover:cursor-pointer lg:w-1/5"
          onClick={() => router.push(`/projects/${project.path}`)}
        >
          <div className="flex h-full w-full flex-col justify-between">
            <motion.div className="flex flex-col gap-8">
              <RevealText
                className="text-react text-7xl font-bold"
                text={String(i + 1).padStart(2, "0")}
              />

              <img
                className="aspect-[4/3] w-full bg-stone-300 object-contain"
                src={
                  project.images.length > 0
                    ? project.images[0].url
                    : "https://placehold.co/800x600"
                }
                alt={project.name + " thumbnail"}
              />

              <div>
                <h3 className="text-lg font-bold">{project.name}</h3>

                <p className="pt-2 text-sm leading-none font-medium">
                  {project.description}
                </p>
              </div>
            </motion.div>

            <div className="flex gap-4">
              <Link href={project.githubUrl} target="_blank">
                <GithubIconSvg className="h-5 w-5" />
              </Link>

              {project.siteLink && (
                <Link
                  href={project.siteLink ?? ""}
                  target="_blank"
                  title={project.siteLink}
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLinkSvg className="h-5 w-5" />
                </Link>
              )}
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

const RevealText = ({
  text,
  ...props
}: { text: string } & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props} className={`${props.className} overflow-hidden`}>
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: 0, transition: { duration: 0.2 } }}
        viewport={{ once: true }}
      >
        {text}
      </motion.div>
    </div>
  );
};
