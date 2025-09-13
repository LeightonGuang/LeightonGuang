import { ArrowRightSvg } from "@/assets/icons/businessCardIcons";
import { motion } from "framer-motion";

const StaggeredRightArrow = () => {
  return (
    <motion.div
      className="relative block h-16 w-16 overflow-hidden"
      initial={"initial"}
      whileHover={"hovered"}
    >
      <motion.div variants={{ initial: { x: 0 }, hovered: { x: "100%" } }}>
        <ArrowRightSvg className="h-16 w-16" />
      </motion.div>

      <motion.div
        className="absolute inset-0"
        variants={{ initial: { x: "-100%" }, hovered: { x: 0 } }}
      >
        <ArrowRightSvg className="h-16 w-16 text-white" />
      </motion.div>
    </motion.div>
  );
};

export default StaggeredRightArrow;
