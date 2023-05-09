import React from 'react'
import Head from 'next/head'
import TransitionEffect from '@/components/TransitionEffect'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Articles from '@/components/Articles'
import Link from 'next/link'
import { LinkArrow } from '@/components/icons'

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
                  md:text-base"
                >
                  Google Scholar <LinkArrow className="!w-[3rem] !h-auto"/>
                </Link>
                <Articles />
            </Layout>
        </main>
    </>
  )
}

export default Publications