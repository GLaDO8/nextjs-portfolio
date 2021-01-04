import WritingList from '@/components/writinglist'
import Layout from '@/components/layout'
import { getOnlyBlogPosts } from '@/lib/api'
import { WRITING_OG_IMAGE_URL } from '@/lib/constants'
import Head from 'next/head'

export default function Index({ allPosts }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Writings</title>
          <meta rel="og:description" content="Writings by Shreyas Gupta" />
          <meta property="og:image" content={WRITING_OG_IMAGE_URL} />
        </Head>
        <WritingList className="mt-6 lg:mt-16" posts={allPosts} />
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
