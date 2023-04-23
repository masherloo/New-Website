import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Logo from "./Logo";

export const CustomLink = ({ href, title, className = "" }) => {
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

      <div className="absolute right-48 top-2">
        <Logo></Logo>
      </div>
    </header>
  );
};

export default NavBar;
