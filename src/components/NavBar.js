import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Logo from "./Logo";
import {
  GithubIcon,
  LinkedInIcon,
  TwitterIcon,
  InstagramIcon,
  ScholarIcon,
} from "./icons";

import { motion } from "framer-motion";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block w-0 absolute
       left-0 -bottom-0.5 bg-black group-hover:w-full
        transition-[width] ease duration-300
        ${router.pathname === href ? "w-full" : "w-0"}
        `}
      >
        &nbsp;
      </span>
      <span
        className={`h-0 inline-block w-[1px] absolute
       -left-0.5 bottom-0 bg-black group-hover:h-full
        transition-[height] ease duration-300
        ${router.pathname === href ? "h-full" : "h-0"}`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
        <CustomLink
          href="/publications"
          title="Publications"
          className="ml-4"
        />
      </nav>

      <nav className="flex items-center justify-between flex-wrap">
        <motion.a
          href="https://twitter.com/MRAsherloo"
          target={"_blank"}
          whileHover={{
            y: -2,
            transition: {
              duration: 0.25,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mr-3"
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          href="https://github.com/masherloo"
          target={"_blank"}
          whileHover={{
            y: -2,
            transition: {
              duration: 0.25,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/mrasherloo/"
          target={"_blank"}
          whileHover={{
            y: -2,
            transition: {
              duration: 0.25,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href="https://scholar.google.com/citations?hl=en&user=6pqd4fAAAAAJ"
          target={"_blank"}
          whileHover={{
            y: -2,
            transition: {
              duration: 0.25,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <ScholarIcon />
        </motion.a>
        <motion.a
          href="https://www.instagram.com/m.r.asherloo/"
          target={"_blank"}
          whileHover={{
            y: -2,
            transition: {
              duration: 0.25,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
          className="w-6 ml-3"
        >
          <InstagramIcon />
        </motion.a>
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo></Logo>
      </div>
    </header>
  );
};

export default NavBar;
