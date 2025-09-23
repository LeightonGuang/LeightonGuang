"use client";

import Magnetic from "../Magnetic";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import AnimatedReactLogo from "./AnimatedReactLogo";

import { ArrowRightSvg } from "@/assets/icons/businessCardIcons";

const Hero = () => {
  const delay = 0.5;
  const logoDuration = 4;

  const router = useRouter();

  return (
    <div className="bg-light-background relative flex h-full w-full items-center justify-center overflow-hidden">
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
              animate={{ opacity: 1, transition: { delay: 0.5, duration: 2 } }}
            >
              <AnimatedReactLogo delay={delay} logoDuration={logoDuration} />
            </motion.div>
          </Magnetic>
        </motion.div>

        <div className="absolute top-10 left-10 flex items-center gap-4">
          <button
            className="cursor-pointer"
            onClick={() => {
              router.push("/");
            }}
          >
            <Magnetic damping={25}>
              <ArrowRightSvg
                className="hover:text-react h-12 w-12 text-[#e0e0e0]"
                style={{ rotate: "180deg" }}
              />
            </Magnetic>
          </button>

          <motion.span
            className="flex text-2xl font-medium text-[#fdfdfd] mix-blend-difference select-none"
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

        <div className="absolute bottom-15 left-20 text-9xl font-medium select-none">
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
              <div className="h-8 w-8 rounded-full bg-[#a34528]" />
            </Magnetic>
          </motion.div>
        </div>

        <motion.div
          className="absolute top-4/9 right-10 flex flex-col items-end text-2xl font-medium text-[#e0e0e0] mix-blend-difference select-none"
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
    </div>
  );
};

export default Hero;
