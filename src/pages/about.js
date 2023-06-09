import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";
import Image from "next/image";
import ProfilePic from "../../public/images/profile/Profile2.jpg";
import ProfilePic2 from "../../public/images/profile/Profile3.jpg";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";
import Skills from "@/components/Skills";
import { motion } from "framer-motion";

const about = () => {
  return (
    <>
      <Head>
        <title>Asherloo | About Page</title>
        <meta name="description" content=";lkj;lkj" />
      </Head>
      <TransitionEffect />
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
                Hi, I&apos;m Mohammadreza Asherloo, a materials scientist and
                additive manufacturing expert who is passionate about developing
                cutting-edge, efficient, and sustainable solutions for various
                industries. With over 4 years of academic experience in the
                field, I am constantly exploring new methodologies and
                technologies to revolutionize the manufacturing processes.
              </p>
              <p className="my-4 font-medium">
                I believe that materials science is more than just understanding
                the properties of materials — it&apos;s about addressing complex
                challenges and creating innovative solutions that drive industry
                advancement.
              </p>
              <p className="font-medium">
                Whether I&apos;m working on a metal additive manufacturing project,
                advanced materials research, or other groundbreaking
                initiatives, I bring my commitment to scientific excellence and
                sustainable practices to every endeavor I undertake. I look
                forward to the opportunity to contribute my skills and passion
                to your next project in materials science and additive
                manufacturing.
              </p>
            </div>
            <motion.div
            initial={{ x: -500, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring"}}
            className="col-span-3 items-center justify-between relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-6 2xl:col-span-4 2xl:p-2">
              <Image
                src={ProfilePic}
                alt="Mohammadreza"
                className="w-full h-auto rounded-2xl"
                priority = {true}
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
              />
            </motion.div>
            <motion.div
            initial={{ x: 500, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, type: "spring"}}
            className="col-span-3 items-center justify-between relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-6 2xl:col-span-4 2xl:p-2">
              <Image
                src={ProfilePic2}
                alt="Mohammadreza"
                className="w-full h-auto rounded-2xl"
                priority = {true}
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
              />
            </motion.div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
