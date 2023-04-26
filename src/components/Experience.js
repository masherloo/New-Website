import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
      
      <LiIcon reference={ref}/>
      
      <motion.div
      initial={{y: 50}}
      whileInView={{y: 0}}
      transition={{duration: 0.5, type:"spring"}}
      >
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;<a href={companyLink}
          target="_blank"
          className="text-primary capitalize">@{company}</a>
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    );
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
        style={{scaleY: scrollYProgress}}
        className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"/>
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Failure Analysis Engineer"
            company={"Illinois Institute of Technology"}
            companyLink={"https://www.iit.edu/"}
            time={"2022 - Present"}
            address={"Chicago, IL"}
            work={
              "I conducted failure analysis on various steels, including pipelines, by utilizing metallurgical experiments such as metallography and optical microscopy (OM). To analyze the failure mechanisms of the steels, I employed advanced characterization techniques like energy-dispersive X-ray spectroscopy (EDS), electron backscatter diffraction (EBSD), X-ray diffraction (XRD), and scanning electron microscopy (SEM). Based on the results of these analyses, I suggested potential solutions for preventing future failures in the materials."
            }
          />
          <Details
            position="Failure Analysis Engineer"
            company={"Illinois Institute of Technology"}
            companyLink={"https://www.iit.edu/"}
            time={"2022 - Present"}
            address={"Chicago, IL"}
            work={
              "I conducted failure analysis on various steels, including pipelines, by utilizing metallurgical experiments such as metallography and optical microscopy (OM). To analyze the failure mechanisms of the steels, I employed advanced characterization techniques like energy-dispersive X-ray spectroscopy (EDS), electron backscatter diffraction (EBSD), X-ray diffraction (XRD), and scanning electron microscopy (SEM). Based on the results of these analyses, I suggested potential solutions for preventing future failures in the materials."
            }
          />
          <Details
            position="Failure Analysis Engineer"
            company={"Illinois Institute of Technology"}
            companyLink={"https://www.iit.edu/"}
            time={"2022 - Present"}
            address={"Chicago, IL"}
            work={
              "I conducted failure analysis on various steels, including pipelines, by utilizing metallurgical experiments such as metallography and optical microscopy (OM). To analyze the failure mechanisms of the steels, I employed advanced characterization techniques like energy-dispersive X-ray spectroscopy (EDS), electron backscatter diffraction (EBSD), X-ray diffraction (XRD), and scanning electron microscopy (SEM). Based on the results of these analyses, I suggested potential solutions for preventing future failures in the materials."
            }
          />
          <Details
            position="Failure Analysis Engineer"
            company={"Illinois Institute of Technology"}
            companyLink={"https://www.iit.edu/"}
            time={"2022 - Present"}
            address={"Chicago, IL"}
            work={
              "I conducted failure analysis on various steels, including pipelines, by utilizing metallurgical experiments such as metallography and optical microscopy (OM). To analyze the failure mechanisms of the steels, I employed advanced characterization techniques like energy-dispersive X-ray spectroscopy (EDS), electron backscatter diffraction (EBSD), X-ray diffraction (XRD), and scanning electron microscopy (SEM). Based on the results of these analyses, I suggested potential solutions for preventing future failures in the materials."
            }
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
