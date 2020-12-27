import WritingPreview from './writing-preview'

export default function WritingsList({ posts }) {
  return (
    <section className="mb-8 lg:m-8">
      <div className="">
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
