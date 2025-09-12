"use client";

import { ReactElement } from "react";
import StaggeredText from "@/components/TestPage/StaggeredText";
import StaggeredLetters from "@/components/TestPage/StaggeredLetters";

const TestPage = () => {
  const elementList: {
    title: string;
    colour: string;
    element: ReactElement;
  }[] = [
    { title: "Staggered Text", colour: "#79eca1", element: <StaggeredText /> },
    {
      title: "Staggered Letters",
      colour: "#db79ec",
      element: <StaggeredLetters />,
    },
  ];

  return (
    <section className="h-dvh w-full p-2">
      <h1 className="text-2xl font-bold">Framer Motion Test</h1>

      <div className="sm:grid-col-2 mt-8 grid w-full place-items-center gap-2 md:grid-cols-3">
        {elementList.map((data, i) => (
          <div
            key={i}
            className={`flex h-72 w-72 items-center justify-center rounded-lg`}
            style={{ backgroundColor: data.colour }}
          >
            {data.element}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestPage;
