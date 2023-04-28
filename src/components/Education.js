import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col
       items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />

      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl xs:text-lg">
          {type}&nbsp;
        </h3>
        <span className="capitalize font-medium text-dark/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full xs:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2
        className="font-bold text-8xl mb-32 w-full text-center
       lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
      >
        Education
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top
          md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            type="Doctor of Philosophy in Materials Science and Engineering"
            place={"Illinois Institute of Technology"}
            time={"2020 - Present"}
            info={
              "Currently pursuing a PhD in Materials Science and Engineering, I am deeply committed to advancing the field through my research on laser powder bed fusion of Ti-6Al-4V alloy, aiming to unlock the potential of additive manufacturing for high-performance applications."
            }
          />
          <Details
            type="Master of Science in Materials Science and Engineering"
            place={"Illinois Institute of Technology"}
            time={"2020 - 2022"}
            info={
              "During my Master's in Materials Science and Engineering, I honed my expertise in materials characterization and processing techniques, with a focus on developing innovative materials for advanced applications, setting the foundation for my continued research in the field."
            }
          />
          <Details
            type="Bachelor of Science in Materials Science and Engineering"
            place={"Illinois Institute of Technology"}
            time={"2015 - 2019"}
            info={
              "Obtaining a Bachelor's degree in Materials Science and Engineering, I gained a solid understanding of fundamental materials concepts, laying the groundwork for my passion in exploring and developing advanced materials to address complex engineering challenges."
            }
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
