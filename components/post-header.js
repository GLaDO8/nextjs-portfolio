import Date from './date'
import CoverImage from './cover-image'
import ReadingTime from './read-time'
export default function PostHeader({
  title,
  coverImage,
  date,
  excerpt,
  content,
}) {
  return (
    <>
      <div className="w-auto my-12 md:my-16 lg:my-24">
        <CoverImage title={title} url={coverImage.imgix_url} />
      </div>
      <div className="mx-4 md:mx-8 lg:mx-12">
        <div className="max-w-3xl mx-auto mt-6 lg:mt-12">
          <div className="text-2xl font-title md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none mb-2">
            <h1>{title}</h1>
          </div>
          <p className="text-base md:text-xl lg:text-xl mb-2 leading-relaxed italic font-light">
            {excerpt}
          </p>
          <div className="flex">
            <div className="flex">
              <div className="pr-2">
                <img
                  src="https://s2.svgbox.net/hero-outline.svg?ic=calendar&color=000"
                  width="24"
                  height="24"
                  alt="date posted icon"
                />
              </div>
              <div className="mb-8 text-base md:text-lg lg:text-lg font-light mr-6">
                <Date dateString={date} />
              </div>
            </div>

            <div className="flex">
              <div className="pr-2">
                <img
                  src="https://s2.svgbox.net/materialui.svg?ic=timer&color=000"
                  width="24"
                  height="24"
                  alt="time to read icon"
                />
              </div>
              <div className="mb-8 text-base md:text-lg lg:text-lg font-light">
                <ReadingTime content={content} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
