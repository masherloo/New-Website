import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";
import Image from "next/image";
import ProfilePic from "../../public/images/profile/Profile2.jpg";
import { motion } from "framer-motion";
import { useState } from "react";

const about = () => {
  const [boxShadow, setBoxShadow] = useState("");
  return (
    <>
      <Head>
        <title>Mohammadreza Asherloo | About Page</title>
        <meta name="description" content=";lkj;lkj" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Explore, Persist, Transform!" className="mb-16" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
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
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light">
              <motion.div
                className="relative w-full h-max rounded-2xl overflow-hidden p-2"
                style={{ boxShadow: boxShadow }}
                transition={{ duration: 1 }}
                onMouseEnter={() =>
                  setBoxShadow("10px 10px 5px 0px rgba(0, 0, 0, 1)")
                }
                onMouseLeave={() => setBoxShadow("")}
              >
                <Image
                  src={ProfilePic}
                  alt="Mohammadreza"
                  className="w-full h-auto rounded-2xl"
                />
              </motion.div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default about;
