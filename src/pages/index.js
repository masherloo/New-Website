import Head from "next/head";
import Layout from "../components/Layout";
import Image from "next/image";
import profilePic from "../../public/images/profile/Profile1.png";
import AnimatedText from "../components/AnimatedText";
import Link from "next/link";
import TransitionEffect from "../components/TransitionEffect";


export default function Home() {
  return (
    <>
      <Head>
        <title>Mohammadreza Asherloo - PhD Candidate</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex w-full justify-between items-center lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt="ProfileImage"
                className="w-full h-auto lg:hidden md:inline-block md:w-full md:mb-6"
                priority = {true}
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"
              ></Image>
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="THIS IS MOHAMMADREZA, A"
                className="!text-6xl !text-left 2xl:!text-5xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
                swap={true}
              ></AnimatedText>
              <p className="my-4 font-medium text-lg md:text-sm sm:text-xs">
                I am a PhD candidate in Materials Science and Engineering at
                Illinois Institute of Technology, working on 3D printing of
                metals.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/CV - Mohammadreza Asherloo.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6
                  rounded-lg text-lg font-semibold hover:bg-light
                  hover:text-dark border-2 border-solid border-transparent
                  hover:border-dark flex-wrap md:p-2 md:px-4 md:text-base"
                  download={true}
                >
                  Curriculum Vitae
                </Link>
                <Link
                  href="mailto:masherloo@hawk.iit.edu"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark hover:underline underline-offset-4 hover:font-semibold
                  md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
