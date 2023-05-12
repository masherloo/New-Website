import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

const Skills = () => {
  return (
    <motion.div
      className="flex relative flex-col text-center max-w-[2000px] min-h-screen
    justify-center items-center my-32"
    >
      <h2
        className="font-bold text-8xl mb-16 w-full text-center
       lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-4"
      >
        Skills
      </h2>
      <div className="grid grid-cols-2 gap-5 md:grid-cols-1">
        <Skill
          directionLeft={true}
          type={"Materials Science"}
          list={
            <ul>
              <li>DMG-MORI LaserTec 30 SLM machine</li>
              <li>X-Ray Diffraction (XRD)</li>
              <li>Scanning Electron Microscope (SEM)</li>
              <li>Differential Scanning Calorimetry (DSC)</li>
              <li>Energy Dispersion Spectroscopy (EDS)</li>
              <li>Mechanical testing machines</li>
              <li>Metallographic analysis of metals (OM)</li>
              <li>Electrochemical test equipment</li>
              <li>Wire Electro Discharge Machining (EDM)</li>
            </ul>
          }
          source={
            "https://www.nicepng.com/png/full/278-2781253_molecular-lattice-physics-molecules-crystal-science-icon.png"
          }
        />
        <Skill
          directionLeft={false}
          type={"Software"}
          list={
            <ul>
              <li>MTEX EBSD analysis package</li>
              <li>OriginPro</li>
              <li>ImageJ Image Analysis</li>
              <li>MAUD XRD analysis package</li>
              <li>X’pert High Score PANalytical</li>
              <li>GSAS II XRD analysis software</li>
              <li>Oxford AZTec software</li>
              <li>HKL EBSD analysis software</li>
            </ul>
          }
          source={"https://cdn-icons-png.flaticon.com/512/5063/5063917.png"}
        />
        <Skill
          directionLeft={true}
          type={"Computer Programming"}
          list={
            <ul>
              <li>Python</li>
              <li> Matlab</li>
              <li> R</li>
              <li>React Web Development</li>
              <li>LaTex</li>
            </ul>
          }
          source={
            "https://assets.webiconspng.com/uploads/2017/01/Programming-Coding-Icon-Image.png"
          }
        />
        <Skill
          directionLeft={false}
          type={"Arificial Intelligence"}
          list={
            <ul>
              <li>Materials Informatics</li>
              <li>Neural Networks</li>
              <li>Data pre-processing and cleaning</li>
              <li>Computer Vision</li>

            </ul>
          }
          source={"https://cdn-icons-png.flaticon.com/512/3570/3570013.png"}
        />
      </div>
    </motion.div>
  );
};

export default Skills;
