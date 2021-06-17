import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import Fade from 'react-reveal/Fade'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import ProjectList from '@/components/projectlist'
import WritingList from '@/components/writinglist'
import OtherSection from '@/components/othersection'
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
          <meta property="twitter:card" content="summary_large_image"></meta>
          <meta property="twitter:site" content="@shreyasjpg"></meta>
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
        <div className="mt-6 mb-12 lg:mt-16">
          <p className="mt-8 text-3xl font-medium text-left text-black md:text-4xl lg:text-6xl dark:text-white">
            Howdy! I’m Shreyas Gupta.
          </p>{' '}
          <p className="mt-8 text-xl font-normal text-left text-black md:text-xl lg:text-xl dark:text-white">
            I am a <b>Product Designer</b> and <b>Researcher</b> with a knack
            for building things. Currently finishing up my Master's Thesis with
            the HCI Division of Gothenburg University and IIIT Bangalore.
          </p>
          <div className="flex mt-2">
            <Link href="/about" passHref={true}>
              <button className="p-4 mt-4 mr-4 font-medium text-white transition duration-300 transform bg-black border-2 border-black cursor-pointer dark:bg-white dark:border-white dark:text-black rounded-xl hover:opacity-80">
                Know More
              </button>
            </Link>

            <Link href="https://twitter.com/shreyasjpg" passHref={true}>
              <button className="flex items-center p-4 mt-4 text-black transition duration-300 transform border-2 border-black cursor-pointer dark:border-white dark:text-white rounded-xl hover:opacity-70">
                <div className="pr-2">
                  <img
                    src={twitterSvgTagLink}
                    width="22"
                    height="22"
                    alt="twitter logo"
                  />
                </div>
                <div className="font-medium"> Find me on Twitter</div>
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-24 md:mt-36 lg:mt-48">
          <div className="home-page-title">Selected Work</div>
          <div className="mb-12">
            <Link href="https://www.behance.net/gallery/94684063/Zomato-A-UX-Review">
              <div className="group">
                <div className="overflow-hidden duration-500 transform cursor-pointer group-hover:shadow-xl hover:scale-100 rounded-xl">
                  <Image
                    src="/images/zomato.png"
                    alt="Cover image for playground section"
                    width={1600}
                    height={900}
                    placeholder="blur"
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
          </div>
          <ProjectList posts={allWork} />
        </div>
        {/* </Fade> */}
        <div>
          <Link href="https://www.behance.net/gallery/94684063/Zomato-A-UX-Review">
            <div className="group">
              <div className="overflow-hidden duration-500 transform cursor-pointer group-hover:shadow-xl hover:scale-100 rounded-xl">
                <Image
                  src="/images/zomato.png"
                  alt="Cover image for playground section"
                  width={1600}
                  height={900}
                  placeholder="blur"
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
        </div>
        <div className="mt-24 lg:mt-36">
          <div className="home-page-title">Selected Writings</div>
          <WritingList posts={allPosts} />
          <Link href="/writings" passHref={true}>
            <button className="-mt-4 text-black underline cursor-pointer dark:text-white">
              Read More
            </button>
          </Link>
        </div>
        <div className="mt-12 lg:mt-24">
          <div className="home-page-title">Playground</div>
          <Link href="/playground" passHref={true}>
            <div>
              <div className="overflow-hidden duration-500 transform cursor-pointer hover:shadow-xl hover:scale-100 rounded-xl">
                <Image
                  src="/images/playground.png"
                  alt="Cover image for playground section"
                  width={1600}
                  height={900}
                  placeholder="blur"
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
