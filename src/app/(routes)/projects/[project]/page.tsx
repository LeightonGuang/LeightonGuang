"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import data from "../../../../data/projectsData.json";
import { ProjectDataType } from "@/types/ProjectDataType";

const ProjectPage = () => {
  const { project } = useParams();
  const [projectData, setProjectData] = useState<ProjectDataType>();

  useEffect(() => {
    const info = data.find((p) => p.path === project);
    setProjectData(info);
  }, []);

  return (
    <main className="flex h-dvh w-full">
      <div>
        <h1>{projectData?.name}</h1>

        <div>{projectData?.description}</div>
      </div>
    </main>
  );
};

export default ProjectPage;
