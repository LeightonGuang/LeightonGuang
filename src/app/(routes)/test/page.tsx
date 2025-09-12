"use client";

import { ReactElement } from "react";
import StaggeredText from "@/components/TestPage/StaggeredText";

const TestPage = () => {
  const elementList: ReactElement[] = [<StaggeredText />];

  return (
    <section className="h-dvh w-full p-2">
      <h1 className="text-2xl font-bold">Framer Motion Test</h1>

      <div className="sm:grid-col-2 mt-8 grid w-full place-items-center gap-2 md:grid-cols-3">
        {elementList.map((element, i) => (
          <div
            key={i}
            className="flex h-72 w-72 items-center justify-center rounded-lg bg-[#79eca1]"
          >
            {element}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestPage;
