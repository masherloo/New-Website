import React from "react";
import { motion } from "framer-motion";

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
    y: 50,
  },
  animate: {
    opacity: 1,
    scale: [1, 2, 2, 1, 1],
    rotate: [0, 0, 360, 360, 0],
    y: 0,
    transition: {
      duration: 3,
    },
  },
};

const LoadingPageText = ({ text, className = "" }) => {
  const words = ["RESEARCHER", "PROGRAMMER", "GYMRAT", "PIANIST"];

  return (
    <div
      className={`w-full mx-auto justify-between items-center flex py-2 sm:py-0`}
    >
      <motion.h1
        className={`${className} w-full text-8xl inline-block text-dark capitalize font-bold text-center`}
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
