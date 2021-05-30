import Date from './date'
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
  const { theme } = useTheme()
  const timeLink = `https://s2.svgbox.net/materialui.svg?ic=circle&color=${
    theme === 'light' ? '000' : 'fff'
  }`
  return (
    <>
      <div className="mx-4 md:mx-8 lg:mx-12">
        <div className="max-w-4xl mx-auto mt-6 lg:mt-12">
          <div className="flex flex-row mr-4 text-base font-light text-black dark:text-white">
            <Date dateString={date} />
            <div className="mx-4 mt-2">
              <img src={timeLink} width="6" height="6" aria-hidden="true" />
            </div>
            <div className="mb-2 text-base font-light text-black dark:text-white">
              <ReadingTime content={content} />
            </div>
          </div>
          <div className="mb-2 text-2xl font-bold leading-tight tracking-tighter text-black font-title md:text-5xl lg:text-6xl md:leading-none dark:text-white">
            <h1>{title}</h1>
          </div>
          <p className="mb-2 text-lg font-light leading-relaxed text-black dark:text-white">
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
