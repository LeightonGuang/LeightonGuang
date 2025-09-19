"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import BusinessCard from "@/components/CardPage/BusinessCard";
import { motion, useMotionValue, animate } from "framer-motion";
import HoverOutline from "@/components/BusinessCardPage/HoverOutline";

const BusinessCardPage = () => {
  const router = useRouter();
  const [isHoveringInSnap, setIsHoveringInSnap] = useState(false);
  const [isSnapped, setIsSnapped] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const snapRef = useRef<HTMLDivElement>(null);
  const constraintRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const updateSnap = () => {
      if (!snapRef.current || !constraintRef.current || !cardRef.current)
        return;

      const snapRect = snapRef.current.getBoundingClientRect();
      const constraintRect = constraintRef.current.getBoundingClientRect();
      const cardRect = cardRef.current.getBoundingClientRect();

      const cardCenterX = cardRect.left + cardRect.width / 2;
      const cardCenterY = cardRect.top + cardRect.height / 2;

      // Calculate snap zone boundaries relative to constraint container
      const snapTop = snapRect.top - constraintRect.top;
      const snapLeft = snapRect.left - constraintRect.left;
      const snapRight = snapRect.right - constraintRect.left;
      const snapBottom = snapRect.bottom - constraintRect.top;

      // Check if card center is within snap zone
      const isInside =
        cardCenterY >= snapTop &&
        cardCenterX >= snapLeft &&
        cardCenterX <= snapRight &&
        cardCenterY <= snapBottom;

      setIsHoveringInSnap((prev) => (prev !== isInside ? isInside : prev));
    };

    const unsubX = x.on("change", updateSnap);
    const unsubY = y.on("change", updateSnap);

    return () => {
      unsubX();
      unsubY();
    };
  }, [x, y]);

  const handleDragEnd = () => {
    // Check if card is within the snap zone when dropped
    if (isHoveringInSnap && !isSnapped) {
      setIsSnapped(true);

      const cardRect = cardRef.current?.getBoundingClientRect();
      const constraintRect = constraintRef.current?.getBoundingClientRect();

      if (!constraintRect || !cardRect) return;
      // Animate to center position
      animate(x, 0, {
        type: "spring",
        stiffness: 300,
        damping: 30,
      });

      animate(y, 0, {
        type: "spring",
        stiffness: 300,
        damping: 30,
      });

      setTimeout(() => {
        router.push("/home");
      }, 1000);
    }
  };

  return (
    <main className="flex h-dvh w-full">
      <div
        className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[#1b1b1d]"
        ref={constraintRef}
      >
        {/* #7696af */}
        <motion.div className={`absolute`} ref={snapRef}>
          <HoverOutline
            // 40px for dotSize of 10px * 4
            className={`h-[calc(25rem/1.75+40px)] w-[calc(25rem+40px)]`}
            isHoveringInSnap={isHoveringInSnap}
          />
        </motion.div>

        <motion.div
          className={`absolute flex ${isSnapped ? "cursor-default" : "hover:cursor-grab active:cursor-grabbing"}`}
          ref={cardRef}
          drag={!isSnapped}
          dragElastic={0.5}
          onDragEnd={handleDragEnd}
          dragConstraints={constraintRef}
          whileTap={!isSnapped ? { rotate: 0, scale: 1.1 } : {}}
          style={{ x, y }}
          transition={{
            type: "spring",
            stiffness: 1500,
            damping: 150,
            duration: 0.6,
          }}
        >
          <BusinessCard />
        </motion.div>
      </div>
    </main>
  );
};

export default BusinessCardPage;
