import { motion } from "framer-motion";

const MappedWords = ({
  directions,
  words,
  duration,
}: {
  directions: "left" | "right";
  words: string[];
  duration: number;
}) => (
  <motion.div
    className="flex select-none"
    initial={{
      x: directions === "left" ? 0 : directions === "right" ? "-100%" : 0,
    }}
    animate={{
      x: directions === "left" ? "-100%" : directions === "right" ? 0 : 0,
      transition: { repeat: Infinity, duration, ease: "linear" },
    }}
  >
    {words.map((word, index) => (
      <motion.span
        key={index}
        className="pr-8 text-[25dvh] leading-none font-black text-[#cbd4e1]"
      >
        {word}
      </motion.span>
    ))}
  </motion.div>
);

const ScrollAnimation = ({
  directions,
  words,
  duration,
}: {
  directions: "left" | "right";
  words: string[];
  duration: number;
}) => (
  <div className="flex">
    <MappedWords directions={directions} words={words} duration={duration} />
    <MappedWords directions={directions} words={words} duration={duration} />
  </div>
);

const MarqueeBackground = () => {
  const words = [
    "INNOVATIVE",
    "RESPONSIVE",
    "INTUITIVE",
    "MODERN",
    "OPTIMISED",
    "FLUID",
    "SEAMLESS",
    "ELEGANT",
    "FLEXIBLE",
    "ENGAGING",
    "IMMERSIVE",
    "ADAPTIVE",
  ];

  const duration = 120;

  return (
    <div className="bg-light-background absolute inset-0 h-dvh w-full">
      <div className="flex flex-col overflow-hidden">
        <ScrollAnimation
          directions="left"
          words={words.slice(0, 3)}
          duration={duration}
        />
        <ScrollAnimation
          directions="right"
          words={words.slice(3, 6)}
          duration={duration}
        />
        <ScrollAnimation
          directions="left"
          words={words.slice(6, 9)}
          duration={duration}
        />
        <ScrollAnimation
          directions="right"
          words={words.slice(9, 12)}
          duration={duration}
        />
      </div>
    </div>
  );
};

export default MarqueeBackground;
