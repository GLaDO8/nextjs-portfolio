import Date from './date'
import CoverImage from './cover-image'
import PostExcerpt from './post-excerpt'
import ReadTime from './read-time'
import ProjectTag from './../public/project-tag.svg'

export default function PostHeader({ title, coverImage, date, excerpt }) {
  return (
    <>
      <div className="container m-auto mt-12 lg:mt-16 mx-2 md:mx-4 lg:mx-6">
        <ProjectTag className="inline-block h-5 md:h-6 lg:h-10" />
        <div className="text-3xl font-title md:text-5xl lg:text-7xl max-w-4xl font-bold tracking-tighter leading-tight md:leading-none mb-2 text-left mt-1">
          <h1>{title}</h1>
        </div>
        <div>
          <PostExcerpt>{excerpt}</PostExcerpt>
        </div>
        <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        <div className="mb-6 text-base md:text-xl lg:text-2xl text-gray-700 font-normal">
          <Date dateString={date} />
        </div>
        {/* <div>{post.minutes}</div> */}
      </div>
      <div className="w-auto mb-8 md:mb-12 lg:mb-16">
        <CoverImage title={title} url={coverImage.imgix_url} />
      </div>
    </>
  )
}
