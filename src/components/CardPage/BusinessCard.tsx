import Link from "next/link";
import Image from "next/image";
import { motion, MotionValue } from "framer-motion";

import {
  ArrowRightSvg,
  GithubIconSvg,
  LocationPinSvg,
  LinkedinIconSvg,
} from "@/assets/icons/businessCardIcons";
import memoji from "../../assets/Leighton-memoji.png";

const BusinessCard = ({
  lagX,
  lagY,
  ...props
}: {
  lagX: MotionValue;
  lagY: MotionValue;
} & React.HTMLAttributes<HTMLDivElement>) => {
  const tech = [
    "React",
    "Typescript",
    "Next.js",
    "MySQL",
    "Express.js",
    "Tailwind",
  ];

  const Techlabel = ({ tech }: { tech: string }) => (
    <div
      className="flex h-[1.125rem] w-min bg-[#dceaff] px-2 text-[0.75rem] font-medium text-[#1e40af]"
      style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
    >
      {tech}
    </div>
  );

  return (
    <div
      {...props}
      className="flex aspect-[1.75] w-[25rem] rounded-xs border-b-[0.2rem] border-[#48c7f1] bg-[#f0f0f0] p-4 shadow-lg hover:cursor-grab active:cursor-grabbing"
    >
      <div className="flex w-full flex-col justify-between">
        <div className="flex justify-between">
          <div>
            <motion.h1
              className="text-2xl font-bold"
              initial={{ scale: 2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              style={{
                x: lagX ? lagX.get() * 0.2 : 0,
                y: lagY ? lagY.get() * 0.2 : 0,
              }}
            >
              Leighton Guang
            </motion.h1>

            <motion.h2
              className="text-md text-[#2b4b76]"
              initial={{ scale: 2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5, type: "spring" }}
            >
              React Full Stack Developer
            </motion.h2>

            <motion.h3
              className="flex items-center gap-1 overflow-hidden text-sm text-[#6b7280]"
              initial={{ y: "-5dvh", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5, type: "spring" }}
            >
              <LocationPinSvg className="h-3.5 w-3.5" /> London, UK
            </motion.h3>

            <div className="mt-2 flex w-52 flex-wrap gap-1 overflow-hidden">
              {tech.map((tech, i) => (
                <motion.div
                  key={tech}
                  initial={{
                    opacity: 0,
                    scale: 0,
                    x: "-10rem",
                    transition: {
                      duration: 0.5,
                      type: "spring",
                    },
                  }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Techlabel tech={tech} />
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="flex h-min items-center justify-center"
            initial={{ scale: 1 }}
            whileHover={{ rotate: 10, scale: 2 }}
          >
            <Image
              className="h-16 w-16"
              src={memoji}
              alt="memoji"
              draggable={false}
            />
          </motion.div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <a
              className="cursor-pointer"
              href="https://www.linkedin.com/in/leighton-guang/"
              target="_blank"
            >
              <LinkedinIconSvg className="h-5 w-5 text-[#2563eb]" />
            </a>
            <a
              className="cursor-pointer"
              href="https://github.com/LeightonGuang"
              target="_blank"
            >
              <GithubIconSvg className="h-5 w-5 text-[#1f2937]" />
            </a>
            <a
              className="text-sm text-[#4b5563]"
              href="mailto:leighton.guang@icloud.com"
            >
              leighton.guang@icloud.com
            </a>
          </div>

          <motion.a
            className="flex cursor-pointer items-center justify-center rounded-full bg-[#2563eb] p-3 text-white"
            href={"/home"}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, bounce: 0.5, type: "spring" }}
            whileHover={{
              scale: 1.2,
              transition: {
                duration: 0.5,
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="h-4 w-4 overflow-hidden">
              <motion.div whileHover={{ x: "1rem" }}>
                <ArrowRightSvg className="h-4 w-4 text-white" />
              </motion.div>
            </div>
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
