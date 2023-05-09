import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const character = {
  initial: {
    opacity: 0,
    scale: 1,
    y: 150,
  },
  animate: {
    opacity: [0, 0.5, 1, 1, 1, 1, 0],
    scale: [1, 1.25, 1.75, 1, 0.5],
    rotate: [0, 0, 0, 0, 360],
    y: 0,
    transition: {
      duration: 4,
    },
  },
};

const LoadingPageText = ({ text, className = "" }) => {
  return (
    <div
      className={`w-full mx-auto justify-between items-center flex py-2 sm:py-0`}
    >
      <motion.h1
        className={`${className} w-full text-8xl inline-block text-dark capitalize text-center`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {text.split(" ").map((word, index) => (
            <motion.span
              key={word + "-" + index}
              className="inline-block"
              variants={character}
            >
              {word}&nbsp;
            </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default LoadingPageText;
