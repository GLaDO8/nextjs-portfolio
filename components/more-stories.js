import PostPreview from "./post-preview";

export default function MoreStories({ posts }) {
  return (
    <section className="m-16">
      <div className="grid grid-cols-1 md:grid-cols-3 md:col-gap-16 lg:col-gap-20 row-gap-20 md:row-gap-20 mb-20">
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
  );
}
