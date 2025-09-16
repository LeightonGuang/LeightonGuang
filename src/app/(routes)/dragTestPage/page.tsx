"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const DragTestPage = () => {
  const [isCentered, setIsCentered] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);
  const snapRef = useRef<HTMLDivElement>(null);
  const constraintRef = useRef<HTMLDivElement>(null);

  const boxPos = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  // used only for display
  const [displayPos, setDisplayPos] = useState({ x: 0, y: 0 });
  const boxSize = 64;

  useEffect(() => {
    const checkCenter = (boxX: number, boxY: number): boolean => {
      if (!snapRef.current || !constraintRef.current) return false;

      // Box center position
      const boxCenterX = boxX + boxSize / 2;
      const boxCenterY = boxY + boxSize / 2;

      const snapRect = snapRef.current.getBoundingClientRect();
      const constraintRect = constraintRef.current.getBoundingClientRect();

      // Center position relative to constraint container
      const centerX = snapRect.left - constraintRect.left + snapRect.width / 2;
      const centerY = snapRect.top - constraintRect.top + snapRect.height / 2;

      // Check overlap
      const isOverX = Math.abs(boxCenterX - centerX) < snapRect.width / 2;
      const isOverY = Math.abs(boxCenterY - centerY) < snapRect.height / 2;

      const isHovering = isOverX && isOverY;

      if (isHovering) {
        boxPos.x.set(centerX - boxSize / 2);
        boxPos.y.set(centerY - boxSize / 2);
      }

      return isHovering;
    };

    const updatePos = () => {
      const x = boxPos.x.get();
      const y = boxPos.y.get();

      // update display position
      setDisplayPos({ x, y });

      // check if draggable box is centered
      setIsCentered(checkCenter(x, y));
    };

    const unsubX = boxPos.x.on("change", updatePos);
    const unsubY = boxPos.y.on("change", updatePos);

    return () => {
      unsubX();
      unsubY();
    };
  }, []);

  return (
    <main className="flex h-full w-full">
      <motion.div className="relative flex h-full w-full overflow-hidden bg-blue-400">
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center bg-orange-300"
          ref={constraintRef}
        >
          <motion.div
            className={`pointer-events-auto flex items-center justify-center rounded-lg outline-1 outline-offset-8 ${isCentered ? "outline-green-500" : "outline-black"}`}
            initial={{ height: boxSize, width: boxSize }}
            animate={{
              height: isCentered ? boxSize + 16 : boxSize,
              width: isCentered ? boxSize + 16 : boxSize,
            }}
            ref={snapRef}
          >
            +
          </motion.div>
        </div>

        <motion.div
          className="absolute inset-0 rounded-xl bg-black hover:cursor-grab active:cursor-grabbing"
          style={{
            x: boxPos.x,
            y: boxPos.y,
            height: boxSize,
            width: boxSize,
          }}
          drag
          dragConstraints={constraintRef}
          dragElastic={0.8}
          dragTransition={{ power: 0.1 }}
          // onDragEnd={() => {
          //   if (!snapRef.current || !constraintRef.current) return false;

          //   const boxCenterX = boxPos.x.get() + boxSize / 2;
          //   const boxCenterY = boxPos.y.get() + boxSize / 2;

          //   const snapRect = snapRef.current.getBoundingClientRect();
          //   const constraintRect =
          //     constraintRef.current.getBoundingClientRect();

          //   // Center position relative to constraint container
          //   const centerX =
          //     snapRect.left - constraintRect.left + snapRect.width / 2;
          //   const centerY =
          //     snapRect.top - constraintRect.top + snapRect.height / 2;

          //   // Check overlap
          //   const isOverX = Math.abs(boxCenterX - centerX) < snapRect.width / 2;
          //   const isOverY =
          //     Math.abs(boxCenterY - centerY) < snapRect.height / 2;

          //   const isHovering = isOverX && isOverY;

          //   if (isHovering) {
          //     boxPos.x.set(centerX - boxSize / 2);
          //     boxPos.y.set(centerY - boxSize / 2);
          //   }
          // }}
          ref={boxRef}
          whileTap={{ scale: 1.1, rotate: -2 }}
        />
      </motion.div>

      <div className="pointer-events-none absolute flex gap-2 rounded bg-black/70 p-2 font-medium text-white">
        <span>x: {displayPos.x.toFixed(1)}</span>
        <span>y: {displayPos.y.toFixed(1)}</span>
        <span>center x: {(displayPos.x + boxSize / 2).toFixed(1)}</span>
        <span>center y: {(displayPos.y + boxSize / 2).toFixed(1)}</span>
      </div>
    </main>
  );
};

export default DragTestPage;
