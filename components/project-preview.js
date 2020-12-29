import Link from 'next/link'

export default function ProjectPreview({ title, coverImage, excerpt, slug }) {
  return (
    <Link as={`/work/${slug}`} href="/work/[slug]">
      <div className="flex mx-24">
        <div className="flex-1 justify-right px-5 max-w-xl">
          <h3 className="text-xl mb-1 font-semibold text-right leading-snug text-gray-800 cursor-pointer">
            {title}
          </h3>
          <p className="text-xl text-inactive-gray text-right leading-relaxed mb-2 cursor-pointer">
            {excerpt}
          </p>
        </div>
        <div className="transform hover:shadow-2xl hover:scale-100 duration-500 rounded-xl overflow-hidden cursor-pointer w-8/12">
          <img className="" src={coverImage.imgix_url} />
        </div>
      </div>
    </Link>
  )
}
