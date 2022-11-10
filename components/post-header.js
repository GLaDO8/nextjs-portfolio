import Date from './date'
import React from 'react'
import CoverImage from './cover-image'
import ReadingTime from './read-time'
export default function PostHeader({
  title,
  coverImage,
  date,
  excerpt,
  content,
}) {
  const timeLink = `https://s2.svgbox.net/materialui.svg?ic=circle&color=fff`

  return (
    <>
      <div className="mx-4 md:mx-12">
        <div className="max-w-3xl mx-auto mt-8 lg:mt-12">
          <div className="flex flex-row mr-4 text-sm font-normal sm:text-base ">
            <Date dateString={date} />
            <div className="mx-2 mt-2">
              <img src={timeLink} width="6" height="6" aria-hidden="true" />
            </div>
            <div className="mb-2 text-sm font-normal sm:text-base ">
              <ReadingTime content={content} />
            </div>
          </div>
          <div className="mb-2 text-2xl font-bold leading-tight tracking-tighter font-title md:text-5xl lg:text-7xl md:leading-none ">
            <h1>{title}</h1>
          </div>
          <p className="mb-2 leading-relaxed md:text-lg font-regular ">
            {excerpt}
          </p>
        </div>
      </div>
      <div className="w-auto my-8 mb-8 md:mb-16 lg:mb-24">
        <CoverImage title={title} url={coverImage.imgix_url} />
      </div>
    </>
  )
}
