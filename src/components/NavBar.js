import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Logo from "./Logo";
import { motion } from "framer-motion";

export const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[3px] inline-block w-0 absolute
       left-0 -bottom-0.5 bg-black group-hover:w-full
        transition-[width] ease duration-300
        ${router.pathname === href ? "w-full" : "w-0"}
        `}
      >
        &nbsp;
      </span>
      <span
        className={`h-0 inline-block w-[3px] absolute
       -left-1 bottom-0 bg-black group-hover:h-full
        transition-[height] ease duration-300
        ${router.pathname === href ? "h-full" : "h-0"}`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

export const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`${className} relative group text-light my-2`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[3px] inline-block w-0 absolute
       left-0 -bottom-0.5 bg-light group-hover:w-full
        transition-[width] ease duration-300
        ${router.pathname === href ? "w-full" : "w-0"}
        `}
      >
        &nbsp;
      </span>
      <span
        className={`h-0 inline-block w-[3px] absolute
       -left-1 bottom-0 bg-light group-hover:h-full
        transition-[height] ease duration-300
        ${router.pathname === href ? "h-full" : "h-0"}`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center
     justify-between relative z-10 lg:px-16 md:px-12 sm:px-8">
      <button
        className="flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4 text-3xl" />
          <CustomLink href="/about" title="About" className="mx-4 text-3xl" />
          <CustomLink href="/projects" title="Projects" className="mx-4 text-3xl" />
        </nav>
      </div>

      {isOpen ? (
        <motion.div
        initial={{ scale:0, opacity: 0, x: "-50%", y: "-50%" }}
        animate={{ scale:1, opacity: 1 }}
          className="min-w-[40vw] flex flex-col justify-between items-center
          fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink
              href="/"
              title="Home"
              className="text-3xl sm:text-xl"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              className="text-3xl sm:text-xl"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              className="text-3xl sm:text-xl"
              toggle={handleClick}
            />
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute right-48 top-2 md:right-32">
        <Logo></Logo>
      </div>
    </header>
  );
};

export default NavBar;
