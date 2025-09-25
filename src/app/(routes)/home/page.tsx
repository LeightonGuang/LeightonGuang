"use client";

import Lenis from "lenis";
import { useScroll } from "motion/react";
import { useEffect, useRef } from "react";
import Hero from "@/components/HomePage/Hero";
import Introduction from "@/components/HomePage/Introduction";

const HomePage = () => {
  const mainRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: mainRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1 });

    const raf = (time: any) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="relative h-[200dvh] w-full bg-black" ref={mainRef}>
      <Hero scrollYProgress={scrollYProgress} />
      <Introduction scrollYProgress={scrollYProgress} />
      <div className="h-dvh">some projects</div>
    </main>
  );
};

export default HomePage;
