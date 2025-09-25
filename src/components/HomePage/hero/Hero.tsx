"use client";

import Magnetic from "../../Magnetic";
import { useRouter } from "next/navigation";
import AnimatedReactLogo from "./AnimatedReactLogo";
import MarqueeBackground from "./MarqueeBackground";
import { motion, MotionValue, useTransform } from "framer-motion";

import { ArrowRightSvg } from "@/assets/icons/businessCardIcons";

const Hero = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  const delay = 0.5;
  const logoDuration = 4;

  const router = useRouter();

  const sectionScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <motion.section
      className="sticky top-0 flex h-dvh w-full items-center justify-center overflow-hidden"
      style={{ scale: sectionScale }}
    >
      <MarqueeBackground />
      <div className="flex h-full w-full justify-center">
        <motion.div
          className="flex"
          animate={{
            scale: [1, 1.1, 1],
            transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <Magnetic damping={50}>
            <motion.div
              className="h-full w-full"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 0.5, duration: 2 },
              }}
            >
              <AnimatedReactLogo delay={delay} logoDuration={logoDuration} />
            </motion.div>
          </Magnetic>
        </motion.div>

        <div className="absolute top-8 left-8 flex flex-col items-start gap-4 lg:top-10 lg:left-10 lg:flex-row lg:items-center">
          <button
            className="cursor-pointer"
            onClick={() => {
              router.push("/");
            }}
          >
            <Magnetic damping={25}>
              <ArrowRightSvg
                className="hover:text-react h-8 w-8 text-[#e0e0e0]"
                style={{ rotate: "180deg" }}
              />
            </Magnetic>
          </button>

          <motion.span
            className="flex text-6xl font-medium text-[#fdfdfd] mix-blend-difference select-none"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 1, delay: logoDuration },
            }}
          >
            {"React Full Stack Developer".split("").map((char, i) => (
              <Magnetic key={i}>{char === " " ? "\u00A0" : char}</Magnetic>
            ))}
          </motion.span>
        </div>

        <div className="absolute bottom-[6rem] left-4 text-5xl font-extrabold select-none lg:bottom-15 lg:left-15 lg:text-9xl">
          <motion.div
            className="flex items-end text-[#fdfdfd] mix-blend-difference"
            initial="initial"
            animate="animate"
            variants={{
              initial: { opacity: 0 },
              animate: {
                opacity: 1,
                transition: {
                  duration: 1,
                  ease: "easeInOut",
                  delay: logoDuration - 1.25,
                },
              },
            }}
            whileHover={{ scale: 1.1, transition: { duration: 1 } }}
          >
            {"Leighton Guang".split("").map((char, i) => (
              <Magnetic key={i} damping={25}>
                {char === " " ? "\u00A0" : char}
              </Magnetic>
            ))}

            <Magnetic>
              <div className="h-4 w-4 rounded-full bg-[#a34528] lg:h-6 lg:w-6" />
            </Magnetic>
          </motion.div>
        </div>

        <motion.div
          className="absolute right-4 bottom-1/3 flex flex-col items-end font-normal text-[#e0e0e0] mix-blend-difference select-none lg:top-4/9 lg:right-[2rem] lg:text-4xl"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 1, delay: logoDuration + 1 },
          }}
        >
          <span className="flex">
            {"I build web applications that ".split("").map((char, i) => (
              <Magnetic key={i}>{char === " " ? "\u00A0" : char}</Magnetic>
            ))}
          </span>
          <span className="flex">
            {"solves real world problems.".split("").map((char, i) => (
              <Magnetic key={i}>{char === " " ? "\u00A0" : char}</Magnetic>
            ))}
          </span>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
