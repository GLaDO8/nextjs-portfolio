import Link from 'next/link'

export default function ProjectPreview({ title, coverImage, excerpt, slug }) {
  return (
    <Link as={`/work/${slug}`} href="/work/[slug]">
      <div>
        <div className="transform hover:shadow-xl hover:scale-100 duration-500 rounded-xl overflow-hidden cursor-pointer">
          <img className="" src={coverImage.imgix_url} />
        </div>
        <div className="mt-4">
          <h3 className="text-lg lg:text-xl font-semibold leading-snug text-black mb-1 cursor-pointer">
            {title}
          </h3>
          <p className="text-base lg:text-lg leading-relaxed text-black mb-2 cursor-pointer">
            {excerpt}
          </p>
        </div>
      </div>
    </Link>
  )
}
