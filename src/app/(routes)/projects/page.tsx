"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import data from "../../../data/projectsData.json";
import { ProjectDataType } from "@/types/ProjectDataType";

const ProjectsPage = () => {
  const projectsData: ProjectDataType[] = data;
  const router = useRouter();

  return (
    <main className="bg-light-background flex h-dvh w-full">
      <div className="p-8">
        <h1 className="text-5xl font-semibold">PROJECTS</h1>

        <div className="mt-2 flex flex-col gap-2">
          {projectsData.map((project, i) => (
            <motion.div
              key={i}
              className="flex w-max cursor-pointer flex-col"
              onClick={() => router.push(`/projects/${project.path}`)}
              initial="initial"
              whileHover="hover"
            >
              <span className="text-2xl font-medium text-white mix-blend-difference">
                {project.name}
              </span>
              <motion.div
                className="h-0.5 w-full bg-black"
                variants={{
                  initial: { width: 0 },
                  hover: { width: "100%", transition: { duration: 0.5 } },
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProjectsPage;
