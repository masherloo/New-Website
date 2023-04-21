import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="rounded-full text-2xl text-light font-bold w-16 h-16
        bg-dark flex items-center justify-center"
        whileHover={{ 
          backgroundColor: ["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)",
          "rgba(252,176,69,1)"],
          transition: { duration: 0.5, repeat: Infinity, repeatType: "reverse" }
         }}
      >MA</MotionLink>
    </div>
  );
};

export default Logo;
