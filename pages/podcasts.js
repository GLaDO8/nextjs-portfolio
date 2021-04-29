import Image from 'next/image'
import Layout from '@/components/layout'
import Head from 'next/head'
import { useTheme } from 'next-themes'
import React, { useState, useEffect } from 'react'

export default function Podcasts() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const SpotifyLink = `https://s2.svgbox.net/social.svg?ic=spotify&color=${
    theme === 'light' ? '000' : 'fff'
  }`
  const AppleLink = `https://s2.svgbox.net/social.svg?ic=apple-podcasts&color=${
    theme === 'light' ? '000' : 'fff'
  }`
  const GoogleLink = `https://s2.svgbox.net/social.svg?ic=google-podcasts&color=${
    theme === 'light' ? '000' : 'fff'
  }`
  return (
    <div>
      <Layout>
        <Head>
          <title>Podcasts</title>
          <meta
            rel="og:description"
            content="Podcasts featuring Shreyas Gupta"
          />
          <meta name="description" content="Podcasts featuring Shreyas Gupta" />
        </Head>
        <h1 className="page-title-design">Podcasts</h1>
        <div className="mb-8 page-para-design">
          Podcasts I have been invited to talk on.
        </div>

        <div className="grid grid-cols-2 gap-12">
          <div>
            <div className="overflow-hidden rounded-xl">
              <Image
                src="/images/includepeople.jpeg"
                alt="Neumorphic Concept art for Instagram"
                width={1000}
                height={1000}
                layout="responsive"
              />
            </div>
            <h2 className="mt-4 page-para-design">
              #include people.h's Season 1 focused on giving a voice to students
              of IIIT Bangalore. I was invited to talk about my research work
              and career endeavors on the penultimate episode.
            </h2>
            <div className="flex flex-row items-center mt-2">
              <a
                href="https://github.com/GLaDO8"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={AppleLink} className="social-icons" />
              </a>
              <a
                href="https://github.com/GLaDO8"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={SpotifyLink} className="social-icons" />
              </a>
              <a
                href="https://github.com/GLaDO8"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={GoogleLink} className="social-icons" />
              </a>
            </div>
          </div>
          <div>
            <div className="overflow-hidden rounded-xl">
              <Image
                src="/images/technology-together.png"
                alt="Neumorphic Concept art for Instagram"
                width={1000}
                height={1000}
                layout="responsive"
              />
            </div>
            <h2 className="mt-4 page-para-design">Technology, Together.</h2>
            <div className="flex flex-row items-center mt-2">
              <a
                href="https://github.com/GLaDO8"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={AppleLink} className="social-icons" />
              </a>
              <a
                href="https://github.com/GLaDO8"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={SpotifyLink} className="social-icons" />
              </a>
              <a
                href="https://github.com/GLaDO8"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={GoogleLink} className="social-icons" />
              </a>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}
