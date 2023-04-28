import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const refref = useRef(null);
  return (
    <li
      ref={refref}
      className="my-8 first:mt-0 last:mb-0 w-[60%]
    mx-auto flex flex-col items-center justify-between
    md:w-[80%]"
    >
      <LiIcon reference={refref} />

      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full xs:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const refref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: refref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2
        className="font-bold text-8xl mb-32 w-full text-center
       lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
      >
        Experience
      </h2>
      <div ref={refref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top
          md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
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
            position="Teaching Assistant"
            company={"Illinois Institute of Technology"}
            companyLink={"https://www.iit.edu/"}
            time={"2022 - Present"}
            address={"Chicago, IL"}
            work={
              "As a Teaching Assistant, I contributed to various engineering courses such as Advanced Manufacturing Processes, Introduction to Materials Science, Mechanical Lab, and Solid Mechanics. My responsibilities included grading assignments, leading recitations, occasionally delivering lectures, and administering exams. Through this role, I gained valuable hands-on experience working with electrical circuits, oscilloscopes, function generators, solid-state relays, as well as low-pass and high-pass filters."
            }
          />
          <Details
            position="SEM Engineer"
            company={"Illinois Institute of Technology"}
            companyLink={"https://www.iit.edu/"}
            time={"2021 - Present"}
            address={"Chicago, IL"}
            work={
              "I managed and maintained scanning electron microscopes (SEM) in the laboratory, ensuring optimal performance and reliability. My responsibilities included troubleshooting technical issues related to SEM equipment and performing routine maintenance tasks to ensure proper functioning. Additionally, I trained laboratory users on operating and maintaining SEM equipment for accurate and reliable results. To guarantee safety, I developed and implemented safety protocols for SEM equipment operation. Furthermore, I collaborated with laboratory staff to plan and execute experiments requiring SEM imaging and analysis."
            }
          />
          <Details
            position="Graduate Research Assistant"
            company={"Illinois Institute of Technology"}
            companyLink={"https://www.iit.edu/"}
            time={"2020 - Present"}
            address={"Chicago, IL"}
            work={
              "My research experience includes working on titanium alloys, specifically Laser Powder Bed Fusion of Ti-6Al-4V non-spherical powder produced by the hydride-dehydride (HDH) process, encompassing the printing process, post-processing, advanced characterization, and electrochemical and mechanical properties of the printed parts. Additionally, I investigated the effects of various processing parameters on Laser Powder Bed Fusion of nickel alloys, specifically INCO718 alloy, including the printing process, advanced characterization, and mechanical properties of the printed parts. My work on iron alloys involved studying the effect of temperature and dwelling time of the sintering process on the mechanical and physical properties of Binder-Jet 3D Printed ultra-fine 316L Stainless Steel powder. Lastly, I examined the effect of time and temperature on the diffusion process of Ti-Ni alloys by utilizing a Ti-Ni diffusion couple."
            }
          />
          <Details
            position="Graduate Research Assistant"
            company={"Illinois Institute of Technology"}
            companyLink={"https://www.iit.edu/"}
            time={"2020 - Present"}
            address={"Chicago, IL"}
            work={
              "My research experience includes working on titanium alloys, specifically Laser Powder Bed Fusion of Ti-6Al-4V non-spherical powder produced by the hydride-dehydride (HDH) process, encompassing the printing process, post-processing, advanced characterization, and electrochemical and mechanical properties of the printed parts. Additionally, I investigated the effects of various processing parameters on Laser Powder Bed Fusion of nickel alloys, specifically INCO718 alloy, including the printing process, advanced characterization, and mechanical properties of the printed parts. My work on iron alloys involved studying the effect of temperature and dwelling time of the sintering process on the mechanical and physical properties of Binder-Jet 3D Printed ultra-fine 316L Stainless Steel powder. Lastly, I examined the effect of time and temperature on the diffusion process of Ti-Ni alloys by utilizing a Ti-Ni diffusion couple."
            }
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
