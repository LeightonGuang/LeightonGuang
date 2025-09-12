import { motion } from "framer-motion";

const StaggeredLetters = () => {
  const name = "Leighton Guang";

  return (
    <motion.div
      className="relative block overflow-hidden text-4xl font-black"
      initial="initial"
      whileHover="hovered"
    >
      <div className="p-2">
        {name.split("").map((letter, i) => (
          <motion.span
            key={i}
            className="inline-block"
            variants={{
              initial: { y: 0 },
              hovered: { y: "-150%" },
            }}
            transition={{ delay: i / 20 }}
          >
            {letter}
          </motion.span>
        ))}
      </div>

      <div className="absolute inset-0 p-2 text-white">
        {name.split("").map((letter, i) => (
          <motion.span
            key={i}
            className="inline-block"
            variants={{ initial: { y: "150%" }, hovered: { y: 0 } }}
            transition={{ delay: i / 20 }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default StaggeredLetters;
