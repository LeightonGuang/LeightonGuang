import { motion } from "framer-motion";

const KeyframeShapeShift = () => {
  return (
    <motion.div
      className="h-20 w-20 rounded-[25%] bg-[#c41616]"
      animate={{
        scale: [1, 2, 1.5, 2, 1],
        rotate: [0, 0, 90, -90, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.25, 0.5, 0.75, 1],
        repeat: Infinity,
        repeatDelay: 1,
      }}
    ></motion.div>
  );
};

export default KeyframeShapeShift;
