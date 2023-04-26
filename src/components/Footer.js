import React from "react";
import Layout from "./Layout";
import { motion } from "framer-motion";
import {
    GithubIcon,
    LinkedInIcon,
    TwitterIcon,
    InstagramIcon,
    ScholarIcon,
  } from "./icons";

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark
      font-medium text-lg justify-between flex items-center px-32
      sm:text-base lg:flex-col"
    >
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; Mohammadreza Asherloo</span>
      </Layout>

      <div className="py-8 flex items-center justify-between col-auto lg:py-2">
        <motion.a
          href="https://twitter.com/MRAsherloo"
          target={"_blank"}
          whileHover={{
            y: -4,
            transition: {
              duration: 0.25,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mr-3 sm:mx-1"
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          href="https://github.com/masherloo"
          target={"_blank"}
          whileHover={{
            y: -4,
            transition: {
              duration: 0.25,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3 sm:mx-1"
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/mrasherloo/"
          target={"_blank"}
          whileHover={{
            y: -4,
            transition: {
              duration: 0.25,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3 sm:mx-1"
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href="https://scholar.google.com/citations?hl=en&user=6pqd4fAAAAAJ"
          target={"_blank"}
          whileHover={{
            y: -4,
            transition: {
              duration: 0.25,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3 sm:mx-1"
        >
          <ScholarIcon />
        </motion.a>
        <motion.a
          href="https://www.instagram.com/m.r.asherloo/"
          target={"_blank"}
          whileHover={{
            y: -4,
            transition: {
              duration: 0.25,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
          className="w-6 ml-3 sm:mx-1"
        >
          <InstagramIcon />
        </motion.a>
      </div>
    </footer>
  );
};

export default Footer;
