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

  const handleDragEnd = () => {
    // Check if card is within the snap zone when dropped
    if (isHoveringInSnap && !isSnapped) {
      setIsSnapped(true);

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

  useEffect(() => {
    const updateSnap = () => {
      if (!snapRef.current || !constraintRef.current || !cardRef.current)
        return;

      const snapRect = snapRef.current.getBoundingClientRect();
      const constraintRect = constraintRef.current.getBoundingClientRect();

      // constraint center position
      const constraintCenterX = constraintRect.left + constraintRect.width / 2;
      const constraintCenterY = constraintRect.top + constraintRect.height / 2;

      // card center position
      const cardCenterX = constraintCenterX + x.get();
      const cardCenterY = constraintCenterY + y.get();

      // Check if card center is within snap zone
      const isInside =
        cardCenterY >= snapRect.top &&
        cardCenterX >= snapRect.left &&
        cardCenterX <= snapRect.right &&
        cardCenterY <= snapRect.bottom;

      setIsHoveringInSnap((prev) => (prev !== isInside ? isInside : prev));
    };

    const unsubX = x.on("change", updateSnap);
    const unsubY = y.on("change", updateSnap);

    return () => {
      unsubX();
      unsubY();
    };
  }, [x, y]);

  useEffect(() => {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const cardRect = cardRef.current?.getBoundingClientRect();

    if (!cardRect) return;
    // Generate random position for business card
    // -0.5 for getting a random number between -0.5 and 0.5
    const randomX = (Math.random() - 0.5) * (viewportWidth - cardRect.width);
    const randomY = (Math.random() - 0.5) * (viewportHeight - cardRect.height);

    x.set(randomX);
    y.set(randomY);
  }, []);

  return (
    <main className="flex h-dvh w-full">
      <div
        className="bg-light-background relative flex h-full w-full overflow-hidden"
        ref={constraintRef}
      >
        {/* #7696af */}
        <div className="pointer-events-none absolute flex h-full w-full items-center justify-center">
          <motion.div className={`absolute`} ref={snapRef}>
            <HoverOutline
              // 40px for dotSize of 10px * 4
              className={`h-[calc(20rem/1.75+40px)] w-[calc(20rem+40px)] lg:h-[calc(25rem/1.75+40px)] lg:w-[calc(25rem+40px)]`}
              isHoveringInSnap={isHoveringInSnap}
            />
          </motion.div>
        </div>

        <div
          className={`absolute flex h-full w-full items-center justify-center ${isSnapped ? "cursor-default" : "hover:cursor-grab active:cursor-grabbing"}`}
        >
          <motion.div
            className={`absolute flex ${isSnapped ? "cursor-default" : "hover:cursor-grab active:cursor-grabbing"}`}
            ref={cardRef}
            drag={!isSnapped}
            dragElastic={0.5}
            onDragEnd={handleDragEnd}
            dragConstraints={constraintRef}
            whileTap={!isSnapped ? { rotate: 0, scale: 1.1 } : {}}
            style={{ x, y }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            transition={{
              type: "spring",
              stiffness: 1500,
              damping: 150,
              duration: 0.6,
            }}
          >
            <BusinessCard className="w-[20rem] md:w-[24rem] lg:w-[25rem]" />
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default BusinessCardPage;
