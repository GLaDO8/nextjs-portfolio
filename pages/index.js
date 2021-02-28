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
  return (
    <>
      <Layout>
        <Head>
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@shreyasjpg" />
          <meta name="twitter:title" content="Shreyas.design" />
          <meta
            name="twitter:description"
            content="Selected Work and Writings by Shreyas Gupta"
          />
          <meta name="twitter:image" content={HOME_OG_IMAGE_URL} />

          <meta property="og:image" content={HOME_OG_IMAGE_URL} />
          <meta
            rel="og:description"
            content="Selected Work and Writings by Shreyas Gupta"
          />
          <meta
            name="description"
            content="Selected Work and Writings by Shreyas Gupta"
          />
          <title>Homepage</title>
        </Head>
        <div className="mb-12 mt-6 lg:mt-16">
          <p className="text-xl md:text-xl lg:text-2xl font-normal text-left mt-8 text-black dark:text-white">
            Hello! I’m Shreyas Gupta, a designer, researcher and writer with a
            knack for building things. I’m currently studying at IIIT Bangalore
            and doing my master's thesis in collaboration with the HCI Division
            of Gothenburg University.
          </p>
          <div className="flex mt-2">
            <div className="mr-4">
              <Link href="/about" passHref={true}>
                <button className="p-4 bg-black dark:bg-white border-black dark:border-white border-2 text-white dark:text-black cursor-pointer rounded-xl mt-4 transform transition duration-300 hover:opacity-80">
                  Know More
                </button>
              </Link>
            </div>
            <div>
              <Link href="https://twitter.com/shreyasjpg" passHref={true}>
                <button className="p-4 border-black dark:border-white text-black dark:text-white border-2 cursor-pointer rounded-xl mt-4 transform transition duration-300 flex items-center hover:opacity-70">
                  <div className="pr-2">
                    <img
                      src={twitterSvgTagLink}
                      width="22"
                      height="22"
                      alt="twitter logo"
                    />
                  </div>
                  <div>Find me on Twitter</div>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 lg:mt-48">
          <div className="home-page-title">Selected Work</div>
          <ProjectList posts={allWork} />
        </div>
        <div>
          <Link href="https://www.behance.net/gallery/94684063/Zomato-A-UX-Review">
            <div className="group">
              <div className="transform group-hover:shadow-xl hover:scale-100 duration-500 rounded-xl overflow-hidden cursor-pointer">
                <Image
                  src="/images/zomato.png"
                  alt="Cover image for playground section"
                  width={1600}
                  height={900}
                  layout="responsive"
                />
              </div>
              <div className="mt-4">
                <h3 className="group-hover:underline text-lg lg:text-xl mb-2 font-semibold leading-snug text-black dark:text-white">
                  Zomato UX Teardown Challenge
                </h3>
                <p className="text-base lg:text-lg leading-relaxed text-black dark:text-white mb-2 cursor-pointer font-preview-desc">
                  A thorough UX review of Zomato's 2019 redesign, conducted as
                  part of their UX Teardown Challenge.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="mt-12 lg:mt-24">
          <div className="home-page-title">Selected Writings</div>
          <WritingList posts={allPosts} />
          <Link href="/writings" passHref={true}>
            <button className="underline cursor-pointer -mt-4 text-black dark:text-white">
              Read More
            </button>
          </Link>
        </div>
        <div className="mt-12 lg:mt-24">
          <div className="home-page-title">Playground</div>
          <Link href="/playground" passHref={true}>
            <div>
              <div className="transform hover:shadow-xl hover:scale-100 duration-500 rounded-xl overflow-hidden cursor-pointer">
                <Image
                  src="/images/playground.png"
                  alt="Cover image for playground section"
                  width={1600}
                  height={900}
                  layout="responsive"
                />
              </div>
              <div className="mt-4">
                <p className="text-base lg:text-lg leading-relaxed text-black dark:text-white mb-2 cursor-pointer font-preview-desc">
                  I tinker around and create visuals on various design tools.
                  From icons, illustrations, concept UI to donuts and unfinished
                  ideas, you will find everything here!
                </p>
              </div>
            </div>
          </Link>
        </div>
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
