import { motion } from "framer-motion";

const CardFlip = () => {
  return (
    <motion.div
      className="relative block text-4xl font-black"
      initial="initial"
      whileHover="hovered"
    >
      <motion.div
        className="z-0 w-30 rounded-lg bg-white p-2 text-center text-black"
        variants={{ initial: { rotateX: 0 }, hovered: { rotateX: 180 } }}
        style={{ backfaceVisibility: "hidden" }}
      >
        Front
      </motion.div>

      <motion.div
        className="absolute inset-0 z-10 w-30 rounded-lg bg-black p-2 text-center text-white"
        variants={{ initial: { rotateX: -180 }, hovered: { rotateX: 0 } }}
        style={{ backfaceVisibility: "hidden" }}
      >
        Back
      </motion.div>
    </motion.div>
  );
};

export default CardFlip;
