import WritingPreview from './writing-preview'

export default function WritingsList({ posts }) {
  return (
    <section>
      <div>
        {posts.map((post) => (
          <WritingPreview
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
