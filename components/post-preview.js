import Date from './date'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}) {
  return (
    <Link as={`/writings/${slug}`} href="/writings/[slug]">
      <div className="cursor-pointer p-5">
        <h3 className="text-xl mb-1 font-semibold leading-snug text-black dark:text-white">
          {title}
        </h3>
        <p className="text-base text-black dark:text-white leading-relaxed mb-2">
          {excerpt}
        </p>
        <div className="text-sm font-normal mb-4 text-black dark:text-white">
          <Date dateString={date} />
        </div>
      </div>
    </Link>
  )
}
