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
  const dateLink = `https://s2.svgbox.net/hero-outline.svg?ic=calendar&color=${
    theme === 'light' ? '000' : 'fff'
  }`
  const timeLink = `https://s2.svgbox.net/materialui.svg?ic=timer&color=${
    theme === 'light' ? '000' : 'fff'
  }`
  return (
    <>
      <div className="w-auto my-12 md:my-16 lg:my-24">
        <CoverImage title={title} url={coverImage.imgix_url} />
      </div>
      <div className="mx-4 md:mx-8 lg:mx-12">
        <div className="max-w-4xl mx-auto mt-6 lg:mt-12">
          <div className="mb-2 text-2xl font-bold leading-tight tracking-tighter text-black font-title md:text-5xl lg:text-6xl md:leading-none dark:text-white">
            <h1>{title}</h1>
          </div>
          <p className="mb-2 text-base italic font-light leading-relaxed text-black md:text-xl lg:text-xl dark:text-white">
            {excerpt}
          </p>
          <div className="flex">
            <div className="flex">
              <div className="pr-2">
                <img
                  src={dateLink}
                  width="24"
                  height="24"
                  alt="date posted icon"
                />
              </div>
              <div className="mb-8 mr-6 text-base font-light text-black md:text-lg lg:text-lg dark:text-white">
                <Date dateString={date} />
              </div>
            </div>

            <div className="flex">
              <div className="pr-2">
                <img
                  src={timeLink}
                  width="24"
                  height="24"
                  alt="time to read icon"
                />
              </div>
              <div className="mb-8 text-base font-light text-black md:text-lg lg:text-lg dark:text-white">
                <ReadingTime content={content} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
