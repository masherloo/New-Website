import React, { useRef, useEffect } from 'react'
import Head from 'next/head'
import TransitionEffect from '@/components/TransitionEffect'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Articles from '@/components/Articles'
import Link from 'next/link'
import { LinkArrow } from '@/components/icons'
import { useMotionValue, useSpring, useInView } from 'framer-motion'

const Numbers = ({value}) => {
  const ref = useRef(null)
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {duration: 3000});
  const isInView = useInView(ref, {once: true});

useEffect(() => {
  if(isInView){
    motionValue.set(value)
  }
},[isInView, value, motionValue])

useEffect(() => {
  springValue.on("change", (latest) => {
    if(ref.current && latest.toFixed(0) <= value){
      ref.current.textContent = latest.toFixed(0)
    }
  })
},[springValue, value])

  return (
    <span ref={ref}>

    </span>
  )
}

const Publications = () => {
  return (
    <>
        <Head>
            <title>Asherloo | Publications Page</title>
            <meta name="description" content=";lkj;lkj" />
        </Head>
        <TransitionEffect />
        <main className="flex w-full flex-col items-center justify-center">
            <Layout>
                <AnimatedText text="Well ..., Publications!" className="mb-8 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"/>
                <Link
                  href="https://scholar.google.com/citations?hl=en&user=6pqd4fAAAAAJ"
                  target={"_blank"}
                  className="flex w-full items-center justify-center mb-4 text-4xl font-light capitalize text-primary hover:underline underline-offset-4 hover:font-semibold
                  md:text-2xl"
                >
                  Google Scholar <LinkArrow className="!w-[3rem] !h-auto md:!w-[2rem]"/>
                </Link>
                <div className='mt-16 flex items-center justify-between'>
                  <div className='flex flex-col items-center justify-center ml-64 lg:ml-32 md:ml-16 sm:ml-8'>
                    <span className='inline-block text-9xl font-semibold xl:text-7xl md:text-5xl'>
                      <Numbers value={9} />+
                    </span>
                    <h2 className='text-xl font-medium capitalize text-dark/75'>Publications</h2>
                  </div>
                  <div className='flex flex-col items-center justify-center mr-64 lg:mr-32 md:mr-16 sm:mr-8'>
                    <span className='inline-block text-9xl font-semibold xl:text-7xl md:text-5xl'>
                    <Numbers value={120} />+
                    </span>
                    <h2 className='text-xl font-medium capitalize text-dark/75'>Citations</h2>
                  </div>
                </div>
                <Articles />
            </Layout>
        </main>
    </>
  )
}

export default Publications