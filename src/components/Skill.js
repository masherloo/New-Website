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
        <motion.img src={source} className="w-32 h-auto mr-8 lg:w-24" />
        <span className="text-primary font-medium text-3xl lg:text-xl ml-8">
          {type}
        </span>
      </div>
      <div className="mt-8 flex items-start">
        
        <p className="text-xl text-left font-medium text-black lg:text-md lg:text-lg">{list}</p>
      </div>
    </motion.div>
  );
};

export default Skill;
