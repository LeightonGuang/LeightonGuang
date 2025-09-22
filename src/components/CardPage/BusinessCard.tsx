import Image from "next/image";
import { motion } from "framer-motion";

import {
  GithubIconSvg,
  LocationPinSvg,
  LinkedinIconSvg,
} from "@/assets/icons/businessCardIcons";
import memoji from "../../assets/Leighton-memoji.png";

const BusinessCard = ({ ...props }: React.HTMLAttributes<HTMLDivElement>) => {
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
      className="flex h-[0.875rem] w-min bg-[#dceaff] px-1 text-[0.625rem] font-medium text-[#1e40af] lg:h-[1.125rem] lg:px-2 lg:text-[0.75rem]"
      style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
    >
      {tech}
    </div>
  );

  return (
    <div
      className={`flex aspect-[1.75] rounded-xs bg-[#f0f0f0] p-4 shadow-lg ${props.className}`}
    >
      <div className="flex w-full flex-col justify-between">
        <div className="flex justify-between">
          <div>
            <motion.h1
              className="text-xl font-bold lg:text-2xl"
              initial={{ scale: 2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              Leighton Guang
            </motion.h1>

            <motion.h2
              className="text-sm text-[#2b4b76] lg:text-base"
              initial={{ scale: 2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5, type: "spring" }}
            >
              React Full Stack Developer
            </motion.h2>

            <motion.h3
              className="flex items-center gap-1 overflow-hidden text-xs text-[#6b7280] lg:text-sm"
              initial={{ y: "-5dvh", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5, type: "spring" }}
            >
              <LocationPinSvg className="h-2.5 w-2.5 lg:h-3.5 lg:w-3.5" />{" "}
              London, UK
            </motion.h3>

            <div className="mt-1 flex w-52 flex-wrap gap-0.5 overflow-hidden lg:mt-2 lg:gap-1">
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
              className="h-12 w-12 lg:h-16 lg:w-16"
              src={memoji}
              alt="memoji"
              draggable={false}
            />
          </motion.div>
        </div>

        <div className="flex items-end justify-between">
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
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
