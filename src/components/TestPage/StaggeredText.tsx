import { motion } from "framer-motion";

const StaggeredText = () => {
  const name = "Leighton Guang";

  return (
    <motion.div
      className="relative block overflow-hidden text-4xl font-black"
      initial="initial"
      whileHover="hovered"
    >
      <motion.div
        className="p-2"
        variants={{
          initial: { y: 0 },
          hovered: { y: "-100%" },
        }}
      >
        {name}
      </motion.div>

      <motion.div
        className="absolute inset-0 p-2"
        variants={{ initial: { y: "100%" }, hovered: { y: 0 } }}
      >
        {name}
      </motion.div>
    </motion.div>
  );
};

export default StaggeredText;
