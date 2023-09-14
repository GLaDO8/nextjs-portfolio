import Link from 'next/link'
export default function writingPreview({ title, udate, excerpt, slug }) {
  return (
    <>
      <Link as={`/writings/${slug}`} href="/writings/[slug]">
        <div className="gap-4 my-4 cursor-pointer">
          <div>
            <h4 className="mb-2 font-medium leading-snug text-white underline transition duration-500 transform md:text-lg group-hover:opacity-70">
              {title}
            </h4>
            <p className="mb-2 leading-snug md:text-base">{excerpt}</p>
            <p className=" text-grey-secondary md:text-base">{udate}</p>
          </div>
        </div>
      </Link>
    </>
  )
}
