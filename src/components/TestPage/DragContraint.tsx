import { useRef, useState } from "react";
import { motion } from "framer-motion";

const DragContraint = () => {
  const constraintRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  return (
    <motion.div
      className="relative flex h-full w-full items-center justify-center"
      ref={constraintRef}
    >
      <motion.div
        className="h-8 w-8 rounded-lg hover:cursor-grab active:cursor-grabbing"
        drag
        dragConstraints={constraintRef}
        dragElastic={0.2}
        initial="initial"
        whileHover="hovered"
        variants={{
          initial: { backgroundColor: "black" },
          hovered: { backgroundColor: "white" },
        }}
        onHoverStart={() => setIsHovering(true)}
        onHoverEnd={() => setIsHovering(false)}
      />
      {!isHovering && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <motion.span className="text-sm text-white">Drag me</motion.span>
        </div>
      )}
    </motion.div>
  );
};

export default DragContraint;
