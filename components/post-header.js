import Date from './date'
import React, { useState, useEffect } from 'react'
import CoverImage from './cover-image'
import ReadingTime from './read-time'
import { useTheme } from 'next-themes'
export default function PostHeader({
  title,
  coverImage,
  date,
  excerpt,
  content,
}) {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const timeLink = `https://s2.svgbox.net/materialui.svg?ic=circle&color=${
    theme === 'light' ? '000' : 'fff'
  }`
  return (
    <>
      <div className="mx-4 md:mx-8 lg:mx-12">
        <div className="max-w-4xl mx-auto mt-6 lg:mt-12">
          <div className="flex flex-row mr-4 text-sm font-normal text-black sm:text-base dark:text-white">
            <Date dateString={date} />
            <div className="mx-4 mt-2">
              <img src={timeLink} width="6" height="6" aria-hidden="true" />
            </div>
            <div className="mb-2 text-sm font-normal text-black sm:text-base dark:text-white">
              <ReadingTime content={content} />
            </div>
          </div>
          <div className="mb-2 text-2xl font-bold leading-tight tracking-tighter text-black font-title md:text-5xl lg:text-7xl md:leading-none dark:text-white">
            <h1>{title}</h1>
          </div>
          <p className="mb-2 text-lg leading-relaxed text-black font-regular dark:text-white">
            {excerpt}
          </p>
        </div>
      </div>
      <div className="w-auto my-8 mb-24">
        <CoverImage title={title} url={coverImage.imgix_url} />
      </div>
    </>
  )
}
