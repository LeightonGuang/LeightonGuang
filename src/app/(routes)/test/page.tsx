"use client";

import { ReactElement } from "react";
import StaggeredText from "@/components/TestPage/StaggeredText";
import StaggeredLetters from "@/components/TestPage/StaggeredLetters";
import StaggeredRightArrow from "@/components/TestPage/StaggeredRightArrow";
import CursorTracker from "@/components/TestPage/CursorTracker";
import CardFlip from "@/components/TestPage/CardFlip";
import DragContraint from "@/components/TestPage/DragContraint";
import KeyframeShapeShift from "@/components/TestPage/KeyframeShapeShift";
import BurgerSnap from "@/components/TestPage/BurgerSnap";
import Translate from "@/components/TestPage/Translate";
import MagneticEffect from "@/components/TestPage/MagneticEffect";

const TestPage = () => {
  const backgroundColours = ["#79eca1", "#db79ec", "#ec798b", "#45a0e6"];

  const elementList: {
    title: string;
    element: ReactElement;
  }[] = [
    { title: "Staggered Text", element: <StaggeredText /> },
    {
      title: "Staggered Letters",
      element: <StaggeredLetters />,
    },
    {
      title: "Staggered Right Arrow",
      element: <StaggeredRightArrow />,
    },
    {
      title: "Cursor Tracker",
      element: <CursorTracker />,
    },
    { title: "Card Flip", element: <CardFlip /> },
    { title: "Drag Constraint", element: <DragContraint /> },
    {
      title: "Keyframe Shape Shift",
      element: <KeyframeShapeShift />,
    },
    { title: "Burger Snap", element: <BurgerSnap /> },
    { title: "Translate", element: <Translate /> },
    { title: "Magnetic Effect", element: <MagneticEffect /> },
  ];

  return (
    <section className="h-dvh w-full p-2">
      <h1 className="text-2xl font-bold">Framer Motion Testing Ground</h1>

      <div className="flex w-full justify-center">
        <div className="sm:grid-col-2 my-8 grid w-max place-items-center gap-4 md:grid-cols-3">
          {elementList.map((data, i) => (
            <div key={i} className="flex flex-col gap-2">
              <div
                className="rounded-lg bg-[#f0f0f0] p-2 text-center text-lg font-bold"
                style={{
                  color: backgroundColours[i % backgroundColours.length],
                }}
              >
                {data.title}
              </div>

              <div
                className={`flex h-72 w-72 items-center justify-center rounded-lg`}
                style={{
                  backgroundColor:
                    backgroundColours[i % backgroundColours.length],
                }}
              >
                {data.element}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestPage;
