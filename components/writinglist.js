import WritingPreview from './writing-preview'

export default function WritingsList({ posts }) {
  return (
    <section>
      <div className="flex flex-col">
        {posts.map((post) => (
          <WritingPreview
            coverImage={post.metadata.cover_image}
            key={post.slug}
            title={post.title}
            udate={post.metadata.udate}
            slug={post.slug}
            excerpt={post.metadata.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
