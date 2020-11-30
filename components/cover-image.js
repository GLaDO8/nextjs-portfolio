import Link from 'next/link'
import Image from 'next/image'

export default function CoverImage({ title, url, slug }) {
  const image = (
    <Image
      src={url}
      alt={`Cover Image for ${title}`}
      width={1200}
      height={800}
      layout="responsive"
    />
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
