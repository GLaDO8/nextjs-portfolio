import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import ProjectList from '@/components/projectlist'
import WritingList from '@/components/writinglist'
import { getAllPostsForHome, getAllProjectsForHome } from '@/lib/api'
import { HOME_OG_IMAGE_URL } from '@/lib/constants'
import Layout from '@/components/layout'
export default function Index({ allPosts, allWork }) {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  if (!mounted) return null
  const twitterSvgTagLink = `https://s2.svgbox.net/social.svg?ic=twitter&color=${
    theme === 'light' ? '000' : 'fff'
  }`

  //dark mode link styling for links
  function darkModeLinkStyleTag(linkText, link) {
    return (
      <a
        className={`cursor-pointer hover:opacity-70 font-medium transition duration-300 ${
          theme === 'dark' ? 'link-styling-dark' : 'link-styling'
        }`}
        href={link}
        rel="noopener"
        target="_blank"
      >
        {linkText}
      </a>
    )
  }
  return (
    <>
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
        {/* <Fade bottom> */}
        <div className="mt-6 mb-12 lg:mt-24">
          <p className="mb-12 text-3xl font-semibold text-left text-black md:text-4xl lg:text-6xl dark:text-white">
            Hey, I'm Shrey.
          </p>{' '}
          <p className="mt-8 text-xl font-normal text-left text-black md:text-xl lg:text-xl dark:text-white">
            I'm a design engineer who loved building tools for productivity.
            Currently building design systems, processes and a home for data
            teams at {darkModeLinkStyleTag('Atlan', 'https://atlan.com/')}.
            <br />
            <br />
            In the past, I've built tools to study technology use in families. I
            have two cats, love talking about sustainable lifestyles, a huge fan
            of{' '}
            {darkModeLinkStyleTag(
              'Khruangbin',
              'https://www.youtube.com/watch?v=q4xKvHANqjk',
            )}{' '}
            and a lifelong stan of the{' '}
            {darkModeLinkStyleTag(
              'Mass Effect universe',
              'https://en.wikipedia.org/wiki/Mass_Effect',
            )}{' '}
            .
          </p>
          <div className="flex mt-2">
            {/* <Link href="/about" passHref={true}>
              <button className="px-4 py-2 mt-4 mr-4 font-normal text-white transition duration-300 transform bg-black border-2 border-black cursor-pointer dark:bg-white dark:border-white dark:text-black rounded-xl hover:opacity-80">
                Know More
              </button>
            </Link> */}

            <Link href="https://twitter.com/wutamelonshrey" passHref={true}>
              <button className="flex items-center px-4 py-2 mt-4 text-black transition duration-300 transform border-2 border-black cursor-pointer dark:border-white dark:text-white rounded-xl hover:opacity-70">
                <div className="pr-2">
                  <img
                    src={twitterSvgTagLink}
                    width="22"
                    height="22"
                    alt="twitter logo"
                  />
                </div>
                <div className="font-normal"> Say hi on bird app.</div>
              </button>
            </Link>
          </div>
        </div>
        <div class="flex flex-col md:flex-row items-center p-4 border-gray-200 dark:border-white border-2 rounded-xl mt-24 md:mt-36 lg:mt-48">
          <div>
            <p class="font-semibold">New extension!</p>
            <p>
              Control your Pi-hole from Raycast. From viewing query logs, and
              Pi-hole health to updating blocklists and remotely disabling it.{' '}
            </p>
          </div>
          <div class="mt-4 md:mt-0 md:ml-12 cursor-pointer flex items-center">
            <Link
              title="Install Pie for Pi-hole Raycast Extension"
              href="https://www.raycast.com/GLaDO8/pie-for-pi-hole#install"
            >
              <Image
                width={256}
                height={64}
                src="/images/install_button@2x.png"
                layout="fixed"
              />
            </Link>
          </div>
        </div>
        <div className="mt-16">
          <div className="home-page-title">My Work</div>
          <div>
            <a
              target="_blank"
              href="https://glado8.notion.site/Designing-a-Marketplace-for-Notion-8ba5abea314e4620800d282762fcb024"
            >
              <div className="mb-12 group">
                <div className="overflow-hidden duration-500 transform cursor-pointer group-hover:shadow-xl hover:scale-100 rounded-xl">
                  <Image
                    src="/images/notion-marketplace.png"
                    alt="Cover image for playground section"
                    width={1600}
                    height={900}
                    layout="responsive"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="mb-2 text-lg font-semibold leading-snug text-black group-hover:underline lg:text-xl dark:text-white">
                    Designing a Marketplace for Notion
                  </h3>
                  <p className="mb-2 text-base font-normal leading-snug text-black cursor-pointer lg:text-lg dark:text-white">
                    A case study on how would one go about building a
                    marketplace for Notion, made in Notion! Created as part of
                    Atlan's design assignment.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <ProjectList posts={allWork} />
        </div>

        {/* <div>
          <Link href="https://www.behance.net/gallery/94684063/Zomato-A-UX-Review">
            <div className="group">
              <div className="overflow-hidden duration-500 transform cursor-pointer group-hover:shadow-xl hover:scale-100 rounded-xl">
                <Image
                  src="/images/zomato.png"
                  alt="Cover image for playground section"
                  width={1600}
                  height={900}
                  layout="responsive"
                />
              </div>
              <div className="mt-4">
                <h3 className="mb-2 text-lg font-semibold leading-snug text-black group-hover:underline lg:text-xl dark:text-white">
                  Zomato UX Teardown Challenge
                </h3>
                <p className="mb-2 text-base font-normal leading-snug text-black cursor-pointer lg:text-lg dark:text-white">
                  A thorough UX review of Zomato's 2019 redesign, conducted as
                  part of their UX Teardown Challenge.
                </p>
              </div>
            </div>
          </Link>
        </div> */}
        <div className="mt-24 lg:mt-36">
          <div className="home-page-title">Selected Writings</div>
          <WritingList posts={allPosts} />
          <Link href="/writings" passHref={true}>
            <button className="mt-4 text-black underline cursor-pointer dark:text-white">
              Read More
            </button>
          </Link>
        </div>
        {/* <div className="mt-12 lg:mt-24">
          <div className="home-page-title">Playground</div>
          <Link href="/playground" passHref={true}>
            <div>
              <div className="overflow-hidden duration-500 transform cursor-pointer hover:shadow-xl hover:scale-100 rounded-xl">
                <Image
                  src="/images/playground.png"
                  alt="Cover image for playground section"
                  width={1600}
                  height={900}
                  layout="responsive"
                />
              </div>
              <div className="mt-4">
                <p className="mb-2 text-base font-normal leading-snug text-black cursor-pointer lg:text-lg dark:text-white">
                  I tinker around and create visuals on various design tools.
                  From icons, illustrations, concept UI to donuts and unfinished
                  ideas, you will find everything here!
                </p>
              </div>
            </div>
          </Link>
        </div> */}
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview }) {
  const allPosts = await getAllPostsForHome(preview)
  const allWork = await getAllProjectsForHome(preview)
  return {
    props: { allPosts, allWork },
  }
}
