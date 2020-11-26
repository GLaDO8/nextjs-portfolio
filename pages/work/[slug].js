import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import PostBody from '@/components/post-body'
import MoreStories from '@/components/more-stories'
import PostHeader from '@/components/post-header'
import SectionSeparator from '@/components/section-separator'
import PageLayout from '@/components/page-layout'
import { getAllProjectsWithSlug, getProjectAndMoreProjects } from '@/lib/api'
import PostTitle from '@/components/post-title'
import Head from 'next/head'
import markdownToHtml from '@/lib/markdownToHtml'

export default function Post({ post, morePosts, preview }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <PageLayout preview={preview}>
      <Intro navButtons={ButtonList} />
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
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
            </Head>
            <PostHeader
              title={post.title}
              coverImage={post.metadata.cover_image}
              date={post.created_at}
              author={post.metadata.author}
            />
            <PostBody content={post.content} />
          </article>
          <SectionSeparator />
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </>
      )}
    </PageLayout>
  )
}
export async function getStaticProps({ params, preview = null }) {
  const data = await getProjectAndMoreProjects(params.slug, preview)
  const content = await markdownToHtml(data.post?.metadata?.content || '')
  return {
    props: {
      preview,
      post: {
        ...data.post,
        content,
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
