import { motion } from "framer-motion";
import { useRef, useState } from "react";

const Magnetic = ({
  children,
  stiffness = 150,
  damping = 15,
  mass = 0.1,
}: {
  children: React.ReactNode;
  stiffness?: number;
  damping?: number;
  mass?: number;
}) => {
  const magnetRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    if (!magnetRef.current) return;

    const { width, height, left, top } =
      magnetRef.current.getBoundingClientRect();

    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);

    setPos({ x, y });
  };

  const handleMouseLeave = () => {
    setPos({ x: 0, y: 0 });
  };

  return (
    <motion.div
      className="cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={magnetRef}
      animate={{
        x: pos.x,
        y: pos.y,
      }}
      transition={{
        type: "spring",
        stiffness,
        damping,
        mass,
      }}
    >
      {children}
    </motion.div>
  );
};

export default Magnetic;
