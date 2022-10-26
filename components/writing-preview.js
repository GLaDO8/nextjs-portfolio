import Link from 'next/link'
export default function writingPreview({ title, udate, excerpt, slug }) {
  return (
    <>
      <Link as={`/writings/${slug}`} href="/writings/[slug]">
        <div className="">
          <div className="hidden gap-4 my-4 cursor-pointer md:flex-row md:flex group">
            <p className="w-24 text-right text-grey-secondary">{udate}</p>
            <div>
              <h4 className="mb-2 font-semibold leading-snug text-white transition duration-500 transform group-hover:underline">
                {title}
              </h4>
              <p className="mb-2 leading-snug">{excerpt}</p>
            </div>
          </div>
          <div className="gap-4 my-4 cursor-pointer md:hidden group">
            <div>
              <h4 className="mb-2 font-semibold leading-snug text-white transition duration-500 transform group-hover:underline">
                {title}
              </h4>
              <p className="mb-2 leading-snug">{excerpt}</p>
              <p className=" text-grey-secondary">{udate}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}
