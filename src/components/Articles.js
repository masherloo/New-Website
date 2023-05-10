import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useInView } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ authors, title, year, doi }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-4 first:mt-0 last:mb-0 w-[80%] mx-auto md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <span className="font-semibold text-xl text-dark italic xs:text-lg">
        {title}
      </span>
      <h3 className="font-medium text-dark/75 text-lg xs:text-sm">
        {`${authors}`} | {`${year}`}
      </h3>
      <Link
        href={`${doi}`}
        target="_blank"
        className="cursor-pointer rounded-lg lg:w-full hover:underline underline-offset-3 text-primary text-lg xs:text-sm"
      >{`${doi}`}</Link>
    </li>
  );
};

const YearIcon = ({ year }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <>
      <div
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateX(500px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1s ease-in-out"
        }}
        className="w-full text-right mt-0 text-7xl xl:text-7xl md:text-5xl sm:text-3xl font-medium"
      >
        {year}
      </div>
      <span
      ref={ref}
      style={{
        width: isInView ? "89%" : "0",
        opacity: isInView ? 1 : 0,
        transition: "all 1s ease-in-out",
      }}
       className="h-[3px] bg-black ml-24 md:ml-16 sm:ml-8 mb-8 float-right"></span>
    </>
  );
};

const Articles = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  return (
    <div className="mb-64 mt-24">
      <div className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top
          md:w-[2px] md:left-[30px] xs:left-[20px]"
          />

          <Details
            authors="Asherloo et al."
            title={
              "Variant selection in laser powder bed fusion of non-spherical Ti-6Al-4V powder"
            }
            year={"2023"}
            doi="https://doi.org/10.1016/j.jmst.2022.10.045"
          />
          <Details
            authors="Asherloo et al."
            title={
              "Understanding process-microstructure-property relationships in laser powder bed fusion of non-spherical Ti-6Al-4V powder"
            }
            year={"2023"}
            doi="https://doi.org/10.1016/j.matchar.2023.112757"
          />
          <Details
            authors="Babaei-Dehkordi et al."
            title={
              "Understanding Interfacial Reactions in Ti–Ni Diffusion Couple"
            }
            year={"2023"}
            doi="https://doi.org/10.3390/ma16062267"
          />
          <YearIcon year={"2023"} />
          <Details
            authors="Jamalkhani et al."
            title={
              "Deciphering microstructure-defect-property relationships of vacuum-sintered binder jetted fine 316 L austenitic stainless steel powder"
            }
            year={"2022"}
            doi="https://doi.org/10.1016/j.addma.2022.103133"
          />
          <Details
            authors="Asherloo et al."
            title={
              "Fatigue performance of laser powder bed fusion hydride-dehydride Ti-6Al-4V powder"
            }
            year={"2022"}
            doi="https://doi.org/10.1016/j.addma.2022.103117"
          />
          <Details
            authors="Asherloo et al."
            title={
              "Laser-beam powder bed fusion of cost-effective non-spherical hydride-dehydride Ti-6Al-4V alloy"
            }
            year={"2022"}
            doi="https://doi.org/10.1016/j.addma.2022.102875"
          />
          <Details
            authors="Mostafaei et al."
            title={
              "Defects and anomalies in powder bed fusion metal additive manufacturing"
            }
            year={"2022"}
            doi="https://doi.org/10.1016/j.cossms.2021.100974"
          />
          <YearIcon year={"2022"} />
          <Details
            authors="Wu et al."
            title={
              "Study of printability and porosity formation in laser powder bed fusion built hydride-dehydride (HDH) Ti-6Al-4V"
            }
            year={"2021"}
            doi="https://doi.org/10.1016/j.addma.2021.102323"
          />
          <YearIcon year={"2021"} />
        </ul>
      </div>
    </div>
  );
};

export default Articles;
