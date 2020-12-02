import PostPreview from './post-preview'

export default function MoreStories({ posts }) {
  return (
    <section className="mb-8 lg:m-8">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-12 lg:gap-x-20 gap-y-12 md:gap-y-20 mb-20">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.metadata.cover_image}
            date={post.created_at}
            author={post.metadata.author}
            slug={post.slug}
            excerpt={post.metadata.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
