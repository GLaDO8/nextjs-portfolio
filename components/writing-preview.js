import Link from 'next/link'
import Image from 'next/image'
export default function writingPreview({
  coverImage,
  title,
  udate,
  excerpt,
  slug,
}) {
  return (
    <>
      <Link as={`/writings/${slug}`} href="/writings/[slug]">
        <div className="cursor-pointer mb-6 group">
          <div className="transform group-hover:shadow-2xl duration-500 rounded-xl overflow-hidden cursor-pointer">
            <Image
              src={coverImage.imgix_url}
              alt={`Cover Image for ${title}`}
              width={960}
              height={540}
              layout="responsive"
            />
          </div>
          <div className="mt-4">
            <h3 className="group-hover:underline text-lg lg:text-xl mb-2 font-semibold leading-snug text-black dark:text-white duration-500 transition transform">
              {title}
            </h3>
            <p className="text-base lg:text-lg text-black dark:text-white leading-tight mb-2">
              {excerpt}
            </p>
            <p className="text-sm lg:text-base font-normal text-inactive-gray">
              {udate}
            </p>
          </div>
        </div>
      </Link>
    </>
  )
}
