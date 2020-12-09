import MoreStories from '@/components/more-stories'
import Layout from '@/components/layout'
import { getOnlyBlogPosts } from '@/lib/api'
import Head from 'next/head'

export default function Index({ allPosts }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Writings</title>
          <meta rel="og:description" content="Writings by Shreyas Gupta" />
        </Head>
        <MoreStories posts={allPosts} />
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview }) {
  const allPosts = (await getOnlyBlogPosts(preview)) || []
  return {
    props: { allPosts },
  }
}
