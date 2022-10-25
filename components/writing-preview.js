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
        <div className="mb-4 cursor-pointer group">
          <div className="mt-4">
            <h4 className="mb-2 font-semibold leading-snug text-white transition duration-500 transform group-hover:underline">
              {title}
            </h4>
            <p className="mb-2 leading-snug">{excerpt}</p>
            <p className=" text-grey-secondary">{udate}</p>
          </div>
        </div>
      </Link>
    </>
  )
}
