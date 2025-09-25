import { motion, type Variants } from "framer-motion";

const AnimatedReactLogo = ({
  delay,
  logoDuration,
}: {
  delay?: number;
  logoDuration: number;
}) => {
  // #6B4F33
  // #4E5457
  // #4C524B
  // #313131

  const logoColour = "#5AB8D5";

  const reactSvgVariants: Variants = {
    hidden: { pathLength: 0 },
    visible: () => {
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: {
            type: "spring",
            duration: logoDuration,
            bounce: 0,
            delay,
          },
          opacity: { duration: 0.1, delay },
          ease: "easeInOut",
        },
      };
    },
  };

  const Ellipse = ({
    custom,
    transform,
  }: {
    custom: number;
    transform: string;
  }) => (
    <motion.ellipse
      cx="200"
      cy="200"
      rx="180"
      ry="60"
      fill="transparent"
      stroke={logoColour}
      strokeWidth="15"
      strokeLinecap="round"
      variants={reactSvgVariants}
      custom={custom}
      transform={transform}
    />
  );

  return (
    <motion.svg
      width="100%"
      height="100%"
      viewBox="0 0 400 400"
      initial="hidden"
      animate="visible"
    >
      <motion.circle
        cx="200"
        cy="200"
        r="18"
        fill={logoColour}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1, delay } }}
        custom={1}
      />

      {Array.from({ length: 3 }).map((_, i) => (
        <Ellipse
          key={i}
          custom={i + 2}
          transform={`rotate(${i * 60} 200 200)`}
        />
      ))}
    </motion.svg>
  );
};

export default AnimatedReactLogo;
