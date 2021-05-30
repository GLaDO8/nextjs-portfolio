import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import PostBody from '@/components/post-body'
import PostHeader from '@/components/post-header'
// import MoreStories from '@/components/more-stories'
import PageLayout from '@/components/page-layout'
import { getAllProjectsWithSlug, getProjectAndMoreProjects } from '@/lib/api'
import Head from 'next/head'
import markdownToHtml from '@/lib/markdownToHtml'

export default function Post({ post, morePosts, preview }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <PageLayout preview={preview}>
      {router.isFallback ? (
        <h1 className="mb-2 ml-6 mr-24 text-3xl font-bold leading-tight tracking-tighter font-title md:text-5xl lg:text-7xl md:leading-none md:text-left">
          Loading…
        </h1>
      ) : (
        <>
          <article>
            <Head>
              <title>{post.title}</title>
              <meta
                property="og:image"
                content={post.metadata.cover_image.imgix_url}
              />
              <meta property="og:description" content={post.metadata.excerpt} />
              <meta name="description" content={post.metadata.excerpt} />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:site" content="@shreyasjpg" />
              <meta name="twitter:title" content={post.title} />
              <meta
                name="twitter:description"
                content={post.metadata.excerpt}
              />
              <meta
                name="twitter:image"
                content={post.metadata.cover_image.imgix_url}
              />
            </Head>
            <PostHeader
              title={post.title}
              coverImage={post.metadata.cover_image}
              date={post.created_at}
              excerpt={post.metadata.excerpt}
              content={post.markdown}
            />
            <PostBody content={post.content} />
          </article>
          <hr className="mb-24 border-accent-2 mt-28" aria-hidden="true" />
          {/* {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
        </>
      )}
    </PageLayout>
  )
}
export async function getStaticProps({ params, preview = null }) {
  const data = await getProjectAndMoreProjects(params.slug, preview)
  const content = await markdownToHtml(data.post?.metadata?.content || '')
  const markdown = data.post?.metadata?.content || ''
  return {
    props: {
      preview,
      post: {
        ...data.post,
        content,
        markdown,
      },
      morePosts: data.morePosts || [],
    },
  }
}

export async function getStaticPaths() {
  const allPosts = (await getAllProjectsWithSlug()) || []
  return {
    paths: allPosts.map((post) => `/work/${post.slug}`),
    fallback: true,
  }
}
