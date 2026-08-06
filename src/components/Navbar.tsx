import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav className="flex flex-col gap-2 p-2">
      {isOpen ? (
        <div className="flex flex-col gap-1 text-sm">
          <a href="/home">Home</a>
          <a href="/projects">Projects</a>
          <a href="/test">Test</a>
          <a href="/dragTestPage">Drag Test Page</a>
          <button
            className="cursor-pointer rounded-md bg-amber-200 p-0.5"
            onClick={() => setIsOpen(false)}
          >
            X
          </button>
        </div>
      ) : (
        <button
          className="h-4 w-4 cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          =
        </button>
      )}
    </motion.nav>
  );
};

export default Navbar;
