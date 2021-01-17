import Link from 'next/link'
import Image from 'next/image'

export default function ProjectPreview({ title, coverImage, excerpt, slug }) {
  return (
    <Link as={`/work/${slug}`} href="/work/[slug]">
      <div>
        <div className="transform hover:shadow-xl hover:scale-100 duration-500 rounded-xl overflow-hidden cursor-pointer">
          <Image
            src={coverImage.imgix_url}
            alt={`Cover Image for ${title}`}
            width={3840}
            height={2160}
            layout="responsive"
          />
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
