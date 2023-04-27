import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";
import Image from "next/image";
import ProfilePic from "../../public/images/profile/Profile2.jpg";
import ProfilePic2 from "../../public/images/profile/Profile3.jpg";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

const about = () => {
  return (
    <>
      <Head>
        <title>Mohammadreza Asherloo | About Page</title>
        <meta name="description" content=";lkj;lkj" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Explore, Persist, Transform!" 
          className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8" />
          <div className="grid w-full grid-cols-9 gap-12 sm:gap-8 xl:grid-cols-8">
            <div className="col-span-3 flex flex-col items-start justify-start 2xl:col-span-9 md:order-1">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                Biography
              </h2>
              <p className="font-medium">
                Hi, I'm Mohammadreza Asherloo, a materials scientist and
                additive manufacturing expert who is passionate about developing
                cutting-edge, efficient, and sustainable solutions for various
                industries. With over 4 years of academic experience in the
                field, I am constantly exploring new methodologies and
                technologies to revolutionize the manufacturing processes.
              </p>
              <p className="my-4 font-medium">
                I believe that materials science is more than just understanding
                the properties of materials — it's about addressing complex
                challenges and creating innovative solutions that drive industry
                advancement.
              </p>
              <p className="font-medium">
                Whether I'm working on a metal additive manufacturing project,
                advanced materials research, or other groundbreaking
                initiatives, I bring my commitment to scientific excellence and
                sustainable practices to every endeavor I undertake. I look
                forward to the opportunity to contribute my skills and passion
                to your next project in materials science and additive
                manufacturing.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-6 2xl:col-span-4 2xl:p-2">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
              <Image
                src={ProfilePic}
                alt="Mohammadreza"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-6 2xl:col-span-4 2xl:p-2">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
              <Image
                src={ProfilePic2}
                alt="Mohammadreza"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
