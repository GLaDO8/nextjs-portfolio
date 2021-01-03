import Link from 'next/link'
export default function writingPreview({ title, udate, excerpt, slug }) {
  return (
    <>
      <Link as={`/writings/${slug}`} href="/writings/[slug]">
        <div className="flex cursor-pointer mb-6">
          <div className="flex-initial">
            <h3 className="text-lg lg:text-xl mb-2 font-semibold leading-snug text-black">
              {title}
            </h3>
            <p className="text-base lg:text-lg text-black leading-tight mb-2">
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
