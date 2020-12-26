import Date from './date'
import CoverImage from './cover-image'
import ReadTime from './read-time'

export default function PostHeader({ title, coverImage, date, excerpt }) {
  return (
    <>
      <div className="w-auto mb-8 mt-8 md:mb-12 md:mt-12 lg:mb-16 lg:mt-16">
        <CoverImage title={title} url={coverImage.imgix_url} />
      </div>
      <div className="lg:max-w-2xl max-w-lg mx-auto my-24">
        <div className="text-2xl font-title md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none sm:mb-0 lg:mb-2">
          <h1>{title}</h1>
        </div>
        <p className="text-base md:text-xl lg:text-xl mb-4 leading-relaxed lg:leading-relaxed mt-4">
          {excerpt}
        </p>
        <div className="mb-6 text-base md:text-lg lg:text-xl text-grey-secondary font-light">
          <Date dateString={date} />
        </div>
        {/* <div>{post.minutes}</div> */}
      </div>
    </>
  )
}
