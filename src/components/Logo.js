import React from "react";
import Link from "next/link";
import { color, motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="text-4xl text-dark font-bold w-16 h-16
        flex items-center justify-center"
        whileHover={{ 
          color: ["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)",
          "rgba(252,176,69,1)"],
          transition: { duration: 0.5, repeat: Infinity, repeatType: "reverse" }
         }}
      >MA</MotionLink>
    </div>
  );
};

export default Logo;
