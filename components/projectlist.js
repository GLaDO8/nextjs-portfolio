import ProjectPreview from './project-preview'
export default function MoreStories({ posts }) {
  return (
    <section className="">
      <div>
        {posts.map((post) => (
          <ProjectPreview
            key={post.slug}
            title={post.title}
            coverImage={post.metadata.cover_image}
            date={post.created_at}
            slug={post.slug}
            excerpt={post.metadata.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
