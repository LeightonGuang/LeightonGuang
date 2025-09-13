import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import useMousePosition from "@/utils/useMousePosition";
import { dot } from "node:test/reporters";

const CursorTracker = () => {
  const constraintRef = useRef<HTMLDivElement>(null);
  const globalMousePosition = useMousePosition();
  const [localMousePosition, setLocalMousePosition] = useState({ x: 0, y: 0 });
  const dotSize = 16;

  useEffect(() => {
    if (constraintRef.current) {
      const rect = constraintRef.current.getBoundingClientRect();

      // Convert global coordinates to local coordinates

      //rect.left is how far the container is from the left edge of the viewport
      const relativeX = globalMousePosition.x - rect.left;

      //rect.top is how far the container is from the top edge of the viewport
      const relativeY = globalMousePosition.y - rect.top;

      // Constrain dot within container

      // If the cursor goes beyond the right edge, it stops at rect.width - dotSize/2
      const constrainedX = Math.max(
        dotSize / 2,
        Math.min(rect.width - dotSize / 2, relativeX),
      );
      const constrainedY = Math.max(
        dotSize / 2,
        Math.min(rect.height - dotSize / 2, relativeY),
      );

      // Center the dot on the cursor by offsetting by half the dot size
      setLocalMousePosition({
        x: constrainedX - dotSize / 2,
        y: constrainedY - dotSize / 2,
      });
    }
  }, [globalMousePosition]);

  return (
    <motion.div
      className="relative flex h-full w-full cursor-none items-center justify-center overflow-hidden"
      ref={constraintRef}
      initial="initial"
      whileHover="hovered"
    >
      <motion.div
        dragConstraints={constraintRef}
        className={`absolute rounded-full bg-black`}
        animate={{ x: localMousePosition.x, y: localMousePosition.y }}
        transition={{ type: "tween", ease: "backOut" }}
        style={{ left: 0, top: 0, width: dotSize, height: dotSize }}
        variants={{
          initial: { scale: 1, backgroundColor: "black" },
          hovered: { scale: 4, backgroundColor: "white" },
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.span className="text-sm">Move your mouse around</motion.span>
      </div>
    </motion.div>
  );
};

export default CursorTracker;
