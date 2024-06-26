import Head from 'next/head'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from "next/image"
import ProjectList from '@/components/projectlist'
import WritingList from '@/components/writinglist'
import { getAllPosts, getAllProjectsForHome } from '@/lib/api'
import { HOME_OG_IMAGE_URL } from '@/lib/constants'
import Layout from '@/components/layout'

export default function Index({ allPosts, allWork }) {
  const shortAboutText = (
    <p className="mt-8 text-left">
      Hi, I'm Shrey, a design engineer who loves building tools for
      productivity. Currently helping sales teams with conversational
      intelligence at {darkModeLinkStyleTag('Clari', 'https://clari.com/')},
      also experimenting with LLMs on the side.
      <br />
      <br />
      In the past, I helped build the SQL Editor and establish design processes
      at {darkModeLinkStyleTag('Atlan', 'https://atlan.com/')}. I've also built
      tools to study technology use in families. I have two cats, love talking
      about sustainable lifestyles, a huge fan of{' '}
      {darkModeLinkStyleTag(
        'Khruangbin',
        'https://www.youtube.com/watch?v=q4xKvHANqjk',
      )}{' '}
      and a lifelong stan of the{' '}
      {darkModeLinkStyleTag(
        'Mass Effect universe',
        'https://en.wikipedia.org/wiki/Mass_Effect',
      )}
      .
    </p>
  )

  const longAboutText = (
    <div>
      <p className="mt-8 text-left">
        Hi, I'm Shrey, a design engineer who loves building tools for
        productivity. Currently building design systems and helping sales teams
        with conversational intelligence at{' '}
        {darkModeLinkStyleTag('Clari', 'https://clari.com/')}.
        <br />
        <br />
        At my alma mater{' '}
        {darkModeLinkStyleTag('IIIT Bangalore', 'https://www.iiitb.ac.in/')}, I
        studied electronics, then explored to data science for a while which
        landed me an internship at{' '}
        {darkModeLinkStyleTag('GE Healthcare', 'https://www.gehealthcare.in/')}
        's data team in the services department. The work was great, we were
        building a process for the services team to optimise the sales of
        refurbished equipment, which has high demand in third world countries.
        But I wanted to study human behaviour and learn design.
        <br />
        <br />
        During this time, I also took courses like Human-computer interaction,
        qualitative research methods and the Web and the Mind. These courses
        made me gravitate towards HCI and product design, and I started working
        with the HCI department at the{' '}
        {darkModeLinkStyleTag(
          'University of Gothenburg',
          'https://www.gu.se/en',
        )}
        . There, I built methodologies and tools to better study technology use
        in families as part of my masters thesis under{' '}
        {darkModeLinkStyleTag(
          'Prof. Mattias Rost',
          'https://www.gu.se/en/about/find-staff/mattiasrost',
        )}
        .
        <br />
        <br />
        Before Clari, I helped build processes and the SQL Editor at{' '}
        {darkModeLinkStyleTag('Atlan', 'https://atlan.com/')}. I have two cats,
        Ginger and Loki. I also advocate leading a sustainable lifestyle, love
        composting and mushroom cultivation. I'm a huge fan of{' '}
        {darkModeLinkStyleTag(
          'Khruangbin',
          'https://www.youtube.com/watch?v=q4xKvHANqjk',
        )}{' '}
        and a lifelong stan of the{' '}
        {darkModeLinkStyleTag(
          'Mass Effect universe',
          'https://en.wikipedia.org/wiki/Mass_Effect',
        )}
        .
      </p>
    </div>
  )
  const [aboutType, setAboutType] = useState('short')
  function aboutToggle(aboutType) {
    if (aboutType === 'short') {
      setAboutType('long')
    } else {
      setAboutType('short')
    }
  }
  const twitterSvgTagLink = `https://s2.svgbox.net/social.svg?ic=twitter&color=000`

  //dark mode link styling for links
  function darkModeLinkStyleTag(linkText, link) {
    return (
      <a
        className="font-medium transition duration-300 cursor-pointer border-b-[1px] hover:opacity-70 link-styling-dark"
        href={link}
        rel="noopener"
        target="_blank"
      >
        {linkText}
      </a>
    )
  }
  return <>
    <Layout>
      <Head>
        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta property="twitter:site" content="@wutamelonshrey"></meta>
        <meta property="twitter:title" content="Shreyas.design"></meta>
        <meta property="twitter:url" content="https://shreyas.design" />
        <meta
          property="twitter:description"
          content="Selected Work and Writings by Shreyas Gupta"
        ></meta>
        <meta property="twitter:image" content={HOME_OG_IMAGE_URL}></meta>

        <meta property="og:image" content={HOME_OG_IMAGE_URL}></meta>
        <meta
          property="og:description"
          content="Selected Work and Writings by Shreyas Gupta"
        ></meta>
        <meta
          name="description"
          content="Selected Work and Writings by Shreyas Gupta"
        ></meta>
        <title>shreyas.design</title>
        <meta property="og:title" content="shreyas.design"></meta>
      </Head>

      <div className="max-w-xl mx-auto mt-6 mb-12 lg:mt-24">
        <div>{aboutType === 'short' ? shortAboutText : longAboutText}</div>
        <div className="flex content-center justify-between pr-8 mt-6 md:pr-4">
          <Link href="https://twitter.com/wutamelonshrey" passHref={true}>
            <button className="flex items-center px-3 py-1 text-black transition duration-300 transform bg-white rounded-lg cursor-pointer hover:opacity-70">
              <div>
                <img
                  src={twitterSvgTagLink}
                  width="20"
                  height="20"
                  alt="twitter logo"
                />
              </div>
              <div className="ml-2 font-medium"> Say hi on bird app</div>
            </button>
          </Link>
          <button
            className="underline"
            onClick={() => aboutToggle(aboutType)}
          >
            {aboutType === 'short' ? 'Read long intro' : 'Read short intro'}
          </button>
        </div>
      </div>

      <div className="mt-16">
        <div className="home-page-title">My Work</div>
        <div className="grid grid-cols-8 gap-4">
          <div className="flex flex-col col-span-8 lg:col-span-5 gap-y-4">
            {/* Atlan Casestudy */}
            <div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://jstrieb.github.io/link-lock/#eyJ2IjoiMC4wLjEiLCJlIjoiM040bzdCQm1LZVFUY2IrVVF1ZmFMYzQ0MWFobEhVYU5lU0g4YWhucDlGbVR0Qm9YT3NyM1JyeUljL3hPMHNnQlI2QmdyMXZqQ3RQdW01aHVVMkY3eTcrUmpRVjI0SnlPYzQ2NEp3V0FTSzdHZWdoZ0dkbUpsOFZ0dnkxSExIZjNmcTY4b3V2SHFRPT0iLCJzIjoidk55VytBMFdkMTNmdEJxcWtoanVrUT09IiwiaSI6Imp3TitGWXJ2ZTBsUENObEgifQ=="
              >
                <div className="group">
                  <div className="overflow-hidden duration-500 transform cursor-pointer rounded-xl">
                    <Image
                      className="relative object-cover w-full"
                      src="/images/atlan.png"
                      alt="Cover image for playground section"
                      width={1600}
                      height={900}
                      priority={true}
                      sizes="100vw"
                      style={{
                        width: "100%",
                        height: "auto"
                      }} />
                  </div>
                </div>
              </a>
            </div>
            <a
              href="https://www.raycast.com/GLaDO8/pie-for-pi-hole#install"
              className="block lg:hidden"
            >
              <div className="overflow-hidden rounded-xl bg-slate-800">
                <Image
                  className="relative object-cover"
                  src="/images/pie-long.png"
                  alt="Pie for Pi-hole, a raycast extension"
                  width={620}
                  height={350}
                  priority={true}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto"
                  }} />
              </div>
            </a>
            <div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.raycast.com/michaelschultz/figma-files-raycast-extension"
              >
                <div className="group">
                  <div className="overflow-hidden duration-500 transform cursor-pointer rounded-xl">
                    <Image
                      className="relative object-cover w-full"
                      src="/images/figma-file-search.png"
                      alt="Cover image for playground section"
                      width={1600}
                      height={1100}
                      priority={true}
                      sizes="100vw"
                      style={{
                        width: "100%",
                        height: "auto"
                      }} />
                  </div>
                </div>
              </a>
            </div>
            {/* whistle case study */}
            <ProjectList posts={allWork} />

            {/* Notion Marketplace */}
            <div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://glado8.notion.site/Designing-a-Marketplace-for-Notion-8ba5abea314e4620800d282762fcb024"
              >
                <div className="group">
                  <div className="overflow-hidden duration-500 transform cursor-pointer rounded-xl">
                    <Image
                      className="relative object-cover w-full"
                      src="/images/notion.png"
                      alt="Cover image for playground section"
                      width={1600}
                      height={900}
                      sizes="100vw"
                      style={{
                        width: "100%",
                        height: "auto"
                      }} />
                  </div>
                </div>
              </a>
            </div>

            <a
              href="https://glado8.notion.site/glado8/An-Amateur-s-Guide-to-Leading-a-Sustainable-Lifestyle-in-India-b5b80a9e97c24ee0bf9c660f75ea9fba"
              className="block lg:hidden"
            >
              <div className="overflow-hidden rounded-xl bg-slate-800">
                <Image
                  className="relative object-cover"
                  src="/images/sustain.svg"
                  alt="Guide to leading a sustainable lifestyle in india"
                  width={620}
                  height={350}
                  priority={true}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto"
                  }} />
              </div>
            </a>

            <a
              href="https://shreyas.design/writings/dissecting-my-workflow"
              className="block lg:hidden"
            >
              <div className="overflow-hidden rounded-xl bg-slate-800">
                <Image
                  className="relative object-cover"
                  src="/images/tools-long.png"
                  alt="Article about tools I use"
                  width={620}
                  height={302}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto"
                  }} />
              </div>
            </a>
          </div>
          {/* second column */}
          <div className="hidden col-span-3 gap-4 lg:flex lg:flex-col">
            <a href="https://www.raycast.com/GLaDO8/pie-for-pi-hole#install">
              <div className="overflow-hidden rounded-xl bg-slate-800">
                <Image
                  className="relative object-cover"
                  src="/images/pie.png"
                  alt="Pie for Pi-hole, a raycast extension"
                  width={360}
                  height={493}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto"
                  }} />
              </div>
            </a>

            <a href="https://glado8.notion.site/glado8/An-Amateur-s-Guide-to-Leading-a-Sustainable-Lifestyle-in-India-b5b80a9e97c24ee0bf9c660f75ea9fba">
              <div className="overflow-hidden rounded-xl bg-slate-800">
                <Image
                  className="relative object-cover"
                  src="/images/sustain-long.svg"
                  alt="Guide to leading a sustainable lifestyle in india"
                  width={360}
                  height={493}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto"
                  }} />
              </div>
            </a>

            <a href="https://shreyas.design/writings/dissecting-my-workflow">
              <div className="overflow-hidden rounded-xl bg-slate-800">
                <Image
                  className="relative object-cover"
                  src="/images/tools.png"
                  alt="Article about tools I use"
                  width={360}
                  height={302}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto"
                  }} />
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16 lg:mt-36">
        <div className="home-page-title">Writings</div>
        <WritingList posts={allPosts} />
      </div>
    </Layout>
  </>;
}

export async function getStaticProps() {
  const allPosts = await getAllPosts()
  const allWork = await getAllProjectsForHome()
  return {
    props: { allPosts, allWork },
  }
}
