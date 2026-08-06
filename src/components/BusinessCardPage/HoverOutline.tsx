import { motion, MotionProps } from "framer-motion";

const Dot = ({ dotSize, ...props }: MotionProps & { dotSize: number }) => (
  <motion.div
    className={`border-none bg-[#313131] shadow-none outline-none`}
    initial={{ x: 0, y: 0 }}
    transition={{ duration: 0.5, type: "spring" }}
    style={{ width: dotSize, height: dotSize }}
    {...props}
  />
);

const HoverOutline = ({
  isHoveringInSnap,
  ...props
}: { isHoveringInSnap?: boolean } & React.HTMLAttributes<HTMLDivElement>) => {
  const dotSize = 10;

  const DotPlaceholder = () => (
    <div style={{ height: dotSize, width: dotSize }} />
  );

  return (
    <div className="" {...props}>
      <div className="flex h-full w-full flex-col justify-between">
        <div className="flex justify-between">
          {/* top left corner */}
          <motion.div
            className="grid grid-cols-2 grid-rows-2"
            animate={{
              x: isHoveringInSnap ? -dotSize : [0, -dotSize, 0, -dotSize, 0],
              y: isHoveringInSnap ? -dotSize : [0, -dotSize, 0, -dotSize, 0],
              transition: isHoveringInSnap
                ? {}
                : { delay: 3, repeat: Infinity, duration: 1, repeatDelay: 3 },
            }}
          >
            <Dot dotSize={dotSize} />
            <Dot
              animate={{ x: isHoveringInSnap ? dotSize : 0 }}
              dotSize={dotSize}
            />
            <Dot
              animate={{ y: isHoveringInSnap ? dotSize : 0 }}
              dotSize={dotSize}
            />
            <DotPlaceholder />
          </motion.div>

          {/* top right corner */}
          <motion.div
            className="grid grid-cols-2 grid-rows-2"
            animate={{
              x: isHoveringInSnap ? dotSize : [0, dotSize, 0, dotSize, 0],
              y: isHoveringInSnap ? -dotSize : [0, -dotSize, 0, -dotSize, 0],
              transition: isHoveringInSnap
                ? {}
                : { delay: 3, repeat: Infinity, duration: 1, repeatDelay: 3 },
            }}
          >
            <Dot
              animate={{ x: isHoveringInSnap ? -dotSize : 0 }}
              dotSize={dotSize}
            />
            <Dot dotSize={dotSize} />
            <DotPlaceholder />
            <Dot
              animate={{ y: isHoveringInSnap ? dotSize : 0 }}
              dotSize={dotSize}
            />
          </motion.div>
        </div>

        <div className="flex justify-between">
          {/* bottom left corner */}
          <motion.div
            className="grid grid-cols-2 grid-rows-2"
            animate={{
              x: isHoveringInSnap ? -dotSize : [0, -dotSize, 0, -dotSize, 0],
              y: isHoveringInSnap ? dotSize : [0, dotSize, 0, dotSize, 0],
              transition: isHoveringInSnap
                ? {}
                : { delay: 3, repeat: Infinity, duration: 1, repeatDelay: 3 },
            }}
          >
            <Dot
              animate={{ y: isHoveringInSnap ? -dotSize : 0 }}
              dotSize={dotSize}
            />
            <DotPlaceholder />
            <Dot dotSize={dotSize} />
            <Dot
              animate={{ x: isHoveringInSnap ? dotSize : 0 }}
              dotSize={dotSize}
            />
          </motion.div>

          {/* bottom right corner */}
          <motion.div
            className="grid grid-cols-2 grid-rows-2"
            animate={{
              x: isHoveringInSnap ? dotSize : [0, dotSize, 0, dotSize, 0],
              y: isHoveringInSnap ? dotSize : [0, dotSize, 0, dotSize, 0],
              transition: isHoveringInSnap
                ? {}
                : { delay: 3, repeat: Infinity, duration: 1, repeatDelay: 3 },
            }}
          >
            <DotPlaceholder />
            <Dot
              animate={{ y: isHoveringInSnap ? -dotSize : 0 }}
              dotSize={dotSize}
            />
            <Dot
              animate={{ x: isHoveringInSnap ? -dotSize : 0 }}
              dotSize={dotSize}
            />
            <Dot dotSize={dotSize} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HoverOutline;
