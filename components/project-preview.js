import Link from 'next/link'
import Image from 'next/image'

export default function ProjectPreview({ title, coverImage, excerpt, slug }) {
  return (
    <Link as={`/work/${slug}`} href="/work/[slug]">
      <div className="mb-12 group">
        <div className="overflow-hidden transition duration-500 transform cursor-pointer group-hover:shadow-xl rounded-xl">
          <Image
            src={coverImage.imgix_url}
            alt={`Cover Image for ${title}`}
            width={1600}
            height={900}
            layout="responsive"
          />
        </div>
        <div className="mt-4">
          <h3 className="mb-1 text-lg font-semibold leading-snug text-black transition duration-500 cursor-pointer group-hover:underline lg:text-xl dark:text-white">
            {title}
          </h3>
          <p className="mb-2 text-base font-normal leading-normal text-black cursor-pointer lg:text-lg dark:text-white">
            {excerpt}
          </p>
        </div>
      </div>
    </Link>
  )
}
