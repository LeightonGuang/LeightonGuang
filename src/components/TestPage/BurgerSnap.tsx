"use client";

import React, { useRef, useState, useLayoutEffect, useEffect } from "react";
import { motion, scale, useMotionValue, useSpring } from "framer-motion";

const StickyCursor = ({
  burgerRef,
  constraintRef,
}: {
  burgerRef: React.RefObject<HTMLDivElement | null>;
  constraintRef: React.RefObject<HTMLDivElement | null>;
}) => {
  const [isHovering, setIsHovering] = useState(false);

  const cursorSize = isHovering ? 60 : 20;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.3 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const manageMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;

    // get the center of the container using its bounding rect
    const {
      left: burgerLeft,
      top: burgerTop,
      width: burgerWidth,
      height: burgerHeight,
    } = (burgerRef.current as HTMLDivElement)?.getBoundingClientRect();

    const {
      left: constraintLeft,
      top: constraintTop,
      width: constraintWidth,
      height: constraintHeight,
    } = (constraintRef.current as HTMLDivElement)?.getBoundingClientRect();

    const center = {
      x: burgerLeft + burgerWidth / 2,
      y: burgerTop + burgerHeight / 2,
    };

    // calculates the distance between the client cursor and the center
    const distance = { x: clientX - center.x, y: clientY - center.y };

    if (isHovering) {
      // adding distance * 0.1 adds the effect of the sticky cursor black dot moveing to that direction slightly
      mouse.x.set(center.x - cursorSize / 2 + distance.x * 0.1);
      mouse.y.set(center.y - cursorSize / 2 + distance.y * 0.1);
    } else if (clientX < constraintLeft) {
      // if the cursor goes beyond the left edge, it stops at constraintLeft
      mouse.x.set(constraintLeft);
    } else if (clientX > constraintLeft + constraintWidth) {
      // if the cursor goes beyond the right edge, it stops at constraintLeft + constraintWidth
      mouse.x.set(constraintLeft + constraintWidth - cursorSize);
    } else if (clientY < constraintTop) {
      // if the cursor goes beyond the top edge, it stops at constraintTop
      mouse.y.set(constraintTop);
    } else if (clientY > constraintTop + constraintHeight) {
      // if the cursor goes beyond the bottom edge, it stops at constraintTop + constraintHeight
      mouse.y.set(constraintTop + constraintHeight - cursorSize);
    } else {
      mouse.x.set(clientX - cursorSize / 2);
      mouse.y.set(clientY - cursorSize / 2);
    }
  };

  const manageMouseOver = () => {
    setIsHovering(true);
  };

  const manageMouseLeave = () => {
    setIsHovering(false);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    burgerRef.current?.addEventListener("mouseover", manageMouseOver);
    burgerRef.current?.addEventListener("mouseleave", manageMouseLeave);

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  });

  return (
    <motion.div
      className="pointer-events-none fixed rounded-full bg-black"
      style={{
        left: smoothMouse.x,
        top: smoothMouse.y,
        width: 20,
        height: 20,
      }}
      animate={{ width: cursorSize, height: cursorSize }}
    />
  );
};

const BurgerSnap = () => {
  const burgerRef = useRef<HTMLDivElement>(null);
  const contraintRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="flex h-full w-full items-center justify-center overflow-hidden"
      ref={contraintRef}
    >
      <StickyCursor burgerRef={burgerRef} constraintRef={contraintRef} />
      <div className="pointer-events-none relative flex h-12 w-12 items-center justify-center text-4xl text-white mix-blend-difference">
        ={/* this is the bounding box for the cursor */}
        <div
          className="pointer-events-auto absolute inset-0 h-full w-full transform-[scale(1)] border-white hover:transform-[scale(3)]"
          ref={burgerRef}
        />
      </div>
    </div>
  );
};

export default BurgerSnap;
