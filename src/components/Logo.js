import React from "react";
import Link from "next/link";
import { color, motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      <MotionLink
        href="/"
        className="text-4xl text-dark font-semibold h-16 flex items-center xl:right-0 md:left-auto md:top-0"
        whileHover={{ 
          color: ["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)",
          "rgba(252,176,69,1)"],
          transition: { duration: 0.75, repeat: Infinity, repeatType: "reverse" }
         }}
      >Asherloo</MotionLink>
    </div>
  );
};

export default Logo;
