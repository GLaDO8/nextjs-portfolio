import PostPreview from './post-preview'

export default function MoreStories({ posts }) {
  return (
    <section className="mb-8 lg:m-8">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold text-black dark:text-white">
          Read More
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-12 lg:gap-x-20 gap-y-12">
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
