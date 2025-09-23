"use client";

import Hero from "@/components/HomePage/Hero";
import Lenis from "lenis";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: any) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="h-full w-full">
      <Hero />
      <div className="h-dvh">some projects</div>
    </main>
  );
};

export default HomePage;
