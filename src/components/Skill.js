import React from "react";
import { motion } from "framer-motion";

const Skill = ({ directionLeft, source, type, list }) => {
  return (
    <motion.div
      initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
      transition={{ duration: 0.5 }}
      whileInView={{ x: 0, opacity: 1 }}
      className="-z-9 w-full items-center justify-center rounded-br-2xl
      rounded-3xl border border-solid border-dark bg-light shadow-2xl
      p-12 relative lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 lg:w-full"
    >
      <div className="flex flex-row w-full items-center justify-between">
        <motion.img src={source} className="w-32 h-auto mr-8 lg:w-24 md:w-16 sm:mr-2 xs:mr-0 xs:w-8" />
        <span className="text-primary font-medium text-3xl lg:text-xl sm:text-xs md:text-sm ml-8 sm:ml-2 xs:ml-0">
          {type}
        </span>
      </div>
      <div className="mt-8 flex items-start">
        
        <p className="text-xl text-left font-medium text-black lg:text-md lg:text-lg md:text-xs sm:text-[0.6rem] xs:text-[0.5rem]">{list}</p>
      </div>
    </motion.div>
  );
};

export default Skill;
