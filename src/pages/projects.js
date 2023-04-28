import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout.js";
import AmimatedText from "@/components/AnimatedText.js";
import Link from "next/link";
import Image from "next/image";
import { ScholarIcon } from "@/components/icons.js";
import project1 from "../../public/images/projects/project-1.jpg";
import project2 from "../../public/images/projects/project-2.jpg";
import project3 from "../../public/images/projects/project-3.jpg";
import project4 from "../../public/images/projects/project-4.jpg";
import TransitionEffect from "@/components/TransitionEffect.js";

const FeaturedProject = ({ type, title, summary, img, lnk, scholar }) => {
  return (
    <article
      className="w-full flex items-center justify-between rounded-br-2xl
    rounded-3xl border border-solid border-dark bg-light shadow-2xl
    p-12 relative lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 lg:w-full"
    >
      <Link
        href={lnk}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <div className="absolute top-0 -right-3
         -z-10 w-[100%] h-[102%] rounded-[2.5rem]
         bg-dark rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-[100%] xs:rounded-[1.5rem]" />
          <Image
          src={img}
          alt={title}
          className="w-full h-auto border rounded-lg shadow-2xl"
        />
        
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl xs:text-base">{type}</span>
        <Link
          href={lnk}
          target="_blank"
          className="hover:underline underline-offset-3"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-sm">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark sm:text-sm">{summary}</p>
        <div className="mt-2 flex itmes-center">
          <Link href={scholar} target="_blank" className="w-10">
            
            <ScholarIcon />
          </Link>
          <Link
            href={lnk}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light border border-solid border-dark
          p-2 px-6 text-lg font-semibold hover:bg-light hover:text-dark sm:px-4 sm:text-base"
          >
            
            Read More
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, img, lnk, scholar }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl
    border border-solid border-dark bg-light p-6 relative shadow-2xl xs:p-4
    ">
      <Link
        href={lnk}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <div className="absolute top-0 -right-3
         -z-10 w-[100%] h-[102%] rounded-[2rem]
         bg-dark rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
        <Image
          src={img}
          alt={title}
          className="w-full h-auto border rounded-lg"
          priority = {true}
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          50vw"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl lg:text-lg md:text-base">{type}</span>
        <Link
          href={lnk}
          target="_blank"
          className="hover:underline underline-offset-3"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">{title}</h2>
        </Link>
        <div className="w-full mt-2 flex itmes-center justify-between">
          <Link
            href={lnk}
            target="_blank"
            className="rounded-lg bg-dark text-light border border-solid border-dark
          p-2 px-6 text-lg font-semibold hover:bg-light hover:text-dark md:text-base"
          >
            Read More
          </Link>
          <Link href={scholar} target="_blank" className="w-8 md:w-6">
            <ScholarIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Mohammadreza Asherloo | Project Page</title>
        <meta name="description" content=";lkj;lkj" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AmimatedText text="Creativity conquers wisdom!" className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8" />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="LPBF of Cost-Effective Non-Spherical Ti-6Al-4V"
                summary="Optimization of LPBF process for the cost-efficient non-spherical Ti-6Al-4V powder to produce >99.9% dense parts."
                lnk="https://www.sciencedirect.com/science/article/abs/pii/S2214860422002743"
                scholar="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=6pqd4fAAAAAJ&citation_for_view=6pqd4fAAAAAJ:d1gkVwhDpl0C"
                type="Journal Article"
                img={project1}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
            <Project
                title="Fatigue of Ti-6Al-4V"
                lnk="https://www.sciencedirect.com/science/article/abs/pii/S2214860422005061"
                scholar="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=6pqd4fAAAAAJ&citation_for_view=6pqd4fAAAAAJ:9yKSN-GCB0IC"
                type="Journal Article"
                img={project2}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
            <Project
                title="Microstructure of Ti-6Al-4V"
                lnk="https://www.sciencedirect.com/science/article/abs/pii/S1044580323001146"
                scholar="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=6pqd4fAAAAAJ&citation_for_view=6pqd4fAAAAAJ:UeHWp8X0CEIC"
                type="Journal Article"
                img={project3}
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Binder Jetting of Ultra-fine SS316L"
                summary="Optimization of BJP process for the ultra-fine SS316L powder to produce >99% dense parts."
                lnk="https://www.sciencedirect.com/science/article/abs/pii/S221486042200522X"
                scholar="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=6pqd4fAAAAAJ&citation_for_view=6pqd4fAAAAAJ:2osOgNQ5qMEC"
                type="Journal Article"
                img={project4}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
