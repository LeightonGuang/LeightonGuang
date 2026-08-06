import { useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";

const Introduction = ({
  scrollYProgress: mainScrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  const backgroundRef = useRef(null);
  const { scrollYProgress: sectionScrollYProgress } = useScroll({
    target: backgroundRef,
    offset: ["start end", "end start"],
  });

  const filterOpacity = useTransform(
    sectionScrollYProgress,
    [0, 0.4, 0.6, 1],
    [1, 0.25, 0.25, 1],
  );

  return (
    <motion.section
      className="bg-light-background relative flex h-dvh w-full justify-center overflow-hidden px-24 py-8"
      ref={backgroundRef}
    >
      <img
        className="absolute top-0 left-0 h-full w-full object-cover bg-blend-difference"
        src="https://images.pexels.com/photos/430207/pexels-photo-430207.jpeg"
        alt="background image"
      />
      {/* TODO: scroll up to turn up the opacity to show the image from balck to image */}
      <motion.div
        className="absolute top-0 left-0 h-full w-full gap-4 bg-black"
        style={{ opacity: filterOpacity }}
      />
      <div className="z-10 flex w-full flex-col items-center justify-center gap-2 text-center text-5xl text-white lg:w-3/5 lg:text-6xl">
        <p className="font-semibold">
          <span className="font-extrabold">Hi I'm Leighton,</span> I bring ideas
          to life through interactive web apps, designing solutions that solves
          problems and engages users.
        </p>
      </div>
    </motion.section>
  );
};

export default Introduction;
