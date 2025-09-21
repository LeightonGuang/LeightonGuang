import { useState } from "react";
import { motion } from "framer-motion";

const Translate = () => {
  const [isRight, setIsRight] = useState(false);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-8">
      <motion.div
        className="h-16 w-16 cursor-pointer bg-black"
        initial={{ x: 0, y: 0 }}
        animate={{ x: isRight ? 50 : -50 }}
        onClick={() => setIsRight(!isRight)}
      />

      <button
        className="user-select-none w-14 cursor-pointer rounded-md bg-white px-2 py-1 font-bold hover:bg-gray-100"
        onClick={() => setIsRight(!isRight)}
      >
        {isRight ? "Right" : "Left"}
      </button>
    </div>
  );
};

export default Translate;
