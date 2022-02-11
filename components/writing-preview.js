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
        <div className="mb-6 cursor-pointer group">
          <div className="overflow-hidden duration-500 transform cursor-pointer group-hover:shadow-2xl rounded-xl">
            <Image
              src={coverImage.imgix_url}
              alt={`Cover Image for ${title}`}
              width={960}
              height={540}
              layout="responsive"
            />
          </div>

          <div className="mt-4">
            <h3 className="mb-2 text-lg font-semibold leading-snug text-black transition duration-500 transform group-hover:underline lg:text-xl dark:text-white">
              {title}
            </h3>
            <p className="mb-2 text-base font-normal leading-snug text-black lg:text-lg dark:text-white">
              {excerpt}
            </p>
            <p className="text-sm font-normal lg:text-base text-inactive-gray">
              {udate}
            </p>
          </div>
        </div>
      </Link>
    </>
  )
}
