"use client";

import { useRouter } from "next/navigation";
import { motion, useMotionValue } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import BusinessCard from "@/components/CardPage/BusinessCard";

const BusinessCardPage = () => {
  const router = useRouter();
  const [isCentered, setIsCentered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const snapRef = useRef<HTMLDivElement>(null);
  const constraintRef = useRef<HTMLDivElement>(null);

  const cardPos = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  useEffect(() => {
    const checkCenter = (boxX: number, boxY: number): boolean => {
      if (!snapRef.current || !constraintRef.current) return false;

      const cardWidth = 400;
      const cardHeight = 228.56;

      // Box center position
      const boxCenterX = boxX + cardWidth / 2;
      const boxCenterY = boxY + cardHeight / 2;

      const snapRect = snapRef.current.getBoundingClientRect();
      const constraintRect = constraintRef.current.getBoundingClientRect();

      // Center position relative to constraint container
      const centerX = snapRect.left - constraintRect.left + snapRect.width / 2;
      const centerY = snapRect.top - constraintRect.top + snapRect.height / 2;

      // Check overlap
      const isOverX = Math.abs(boxCenterX - centerX) < snapRect.width / 2;
      const isOverY = Math.abs(boxCenterY - centerY) < snapRect.height / 2;

      const isHovering = isOverX && isOverY;

      // snaps card to center if hovering
      if (isHovering) {
        cardPos.x.set(centerX - cardWidth / 2);
        cardPos.y.set(centerY - cardHeight / 2);
      }

      return isHovering;
    };

    const updatePos = () => {
      const x = cardPos.x.get();
      const y = cardPos.y.get();

      setIsCentered(checkCenter(x, y));
    };

    const unsubX = cardPos.x.on("change", updatePos);
    const unsubY = cardPos.y.on("change", updatePos);

    return () => {
      unsubX();
      unsubY();
    };
  }, []);

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isCentered && !isDragging) {
      setTimeout(() => router.push("/home"), 800);
    }
  }, [isCentered, isDragging]);

  return (
    <main className="flex h-dvh w-full">
      <div className="relative flex h-full w-full overflow-hidden bg-[#1b1b1d]">
        {/* #7696af */}
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
          ref={constraintRef}
        >
          <motion.div
            className={`flex aspect-[1.75] w-[25rem] items-center justify-center rounded-md outline-1 outline-offset-8 ${isCentered ? "outline-green-400" : "outline-white"}`}
            ref={snapRef}
            animate={{ scale: isCentered ? 1.05 : 1 }}
          ></motion.div>
        </div>
        <motion.div
          className="absolute hover:cursor-grab active:cursor-grabbing"
          ref={cardRef}
          drag
          dragElastic={0.5}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={handleDragEnd}
          dragConstraints={constraintRef}
          whileTap={{ rotate: -2, scale: 1.1 }}
          style={{ x: cardPos.x, y: cardPos.y }}
          animate={
            isCentered && { x: cardPos.x.get(), y: cardPos.y.get(), rotate: 0 }
          }
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 25,
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
