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

  var iconNames = ['spotify', 'google-podcasts', 'apple-podcasts']

  var podcastOneLinks = [
    'https://open.spotify.com/episode/6pRsEt0rn9hjpBnDJIm2dX?si=9d19b8903b3c4667&nd=1',
    'https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy80YjlmYWIwMC9wb2RjYXN0L3Jzcw/episode/NmM5ZjI5YTgtYmI2NC00NjgzLTgyZmQtNWM3MTAxNDI3ZTFj?sa=X&ved=0CAUQkfYCahcKEwiIzeSMrIfwAhUAAAAAHQAAAAAQAg',
    'https://podcasts.apple.com/in/podcast/5-empowering-digital-social-innovation/id1552823282?i=1000517570485',
  ]

  var podcastTwoLinks = [
    'https://open.spotify.com/episode/2PgaGerfM6UGynjTYp8wpT?si=tRGI-SJHS_uf5L6qVw738g',
    'https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8yZDA4OWI3MC9wb2RjYXN0L3Jzcw/episode/Zjk5YzFlYWMtZDMxZC00YTc2LThjY2YtNTkzYzc4ZTc1MjJl?sa=X&ved=0CAUQkfYCahcKEwjg_53DiJ_wAhUAAAAAHQAAAAAQAQ',
    'https://podcasts.apple.com/in/podcast/9-shreyas-gupta/id1534358177?i=1000502304469',
  ]

  function iconLinkGenerator(name, theme, link) {
    return (
      <a href={link} target="_blank" rel="noreferrer noopener">
        <img
          src={`https://s2.svgbox.net/social.svg?ic=${name}&color=${
            theme === 'light' ? '000' : 'fff'
          }`}
          className="social-icons"
        />
      </a>
    )
  }

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
          <div className="p-3 bg-gray-100 rounded-xl">
            <div className="overflow-hidden rounded-xl">
              <Image
                src="/images/includepeople.jpeg"
                alt="Neumorphic Concept art for Instagram"
                width={1000}
                height={1000}
                layout="responsive"
              />
            </div>

            <div className="flex flex-row items-center my-4">
              <div className="pr-3 text-lg">Listen on</div>
              {podcastTwoLinks.map((link, index) =>
                iconLinkGenerator(iconNames[index], theme, link),
              )}
            </div>
          </div>
          <div className="p-3 bg-gray-100 rounded-xl">
            <div className="overflow-hidden rounded-xl">
              <Image
                src="/images/technology-together.png"
                alt="Neumorphic Concept art for Instagram"
                width={1000}
                height={1000}
                layout="responsive"
              />
            </div>
            <div className="flex flex-row items-center my-4">
              <div className="pr-3 text-lg">Listen on</div>
              {podcastOneLinks.map((link, index) =>
                iconLinkGenerator(iconNames[index], theme, link),
              )}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}
