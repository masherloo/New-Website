import React from "react";
import { motion } from "framer-motion";
import WordSwapper from './WordSwapper';

const quote = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.1,
        }
    }
}

const character = {
    initial: {
        opacity: 0,
        y: 50,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
        }
    }
}

const AnimatedText = ({ text, className = '', swap = false }) => {
    const words = ['RESEARCHER', 'PROGRAMMER', 'GYMRAT', 'PIANIST'];
  
    return (
      <div className={`w-full mx-auto justify-center items-center flex py-2`}>
        <motion.h1
          className={`${className} w-full text-8xl inline-block text-dark capitalize font-bold`}
          variants={quote}
          initial="initial"
          animate="animate"
        >
          {text.split(' ').map((word, index) => (
            <motion.span
              key={word + '-' + index}
              className="inline-block"
              variants={character}
            >
              {word}&nbsp;
            </motion.span>
          ))}
          {swap && (
            <motion.span className="inline-block" variants={character}>
              <WordSwapper words={words} interval={3000} delayBetweenWords={1000} />
            </motion.span>
          )}
        </motion.h1>
        <motion.h1></motion.h1>
      </div>
    );
  };
  
  export default AnimatedText;
