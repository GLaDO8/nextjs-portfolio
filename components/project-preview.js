import Link from 'next/link'
import Image from 'next/image'

export default function ProjectPreview({ title, coverImage, excerpt, slug }) {
  return (
    <Link as={`/work/${slug}`} href="/work/[slug]">
      <div className="mb-12">
        <div className="transform hover:shadow-xl duration-500 rounded-xl overflow-hidden cursor-pointer">
          <Image
            src={coverImage.imgix_url}
            alt={`Cover Image for ${title}`}
            width={3840}
            height={2160}
            layout="responsive"
          />
        </div>
        <div className="mt-4">
          <h3 className="hover:underline text-lg lg:text-xl font-semibold leading-snug text-black dark:text-white mb-1 cursor-pointer">
            {title}
          </h3>
          <p className="text-base lg:text-lg leading-relaxed text-black dark:text-white mb-2 cursor-pointer">
            {excerpt}
          </p>
        </div>
      </div>
    </Link>
  )
}
