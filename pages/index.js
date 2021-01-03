import Head from 'next/head'
import Link from 'next/link'
import ProjectList from '@/components/projectlist'
import WritingList from '@/components/writinglist'
import SocialIcons from '@/components/social-icons'
import { getAllPostsForHome, getAllProjectsForHome } from '@/lib/api'
import { HOME_OG_IMAGE_URL } from '@/lib/constants'
import Layout from '@/components/layout'

export default function Index({ allPosts, allWork }) {
  return (
    <>
      <Layout>
        <Head>
          <meta property="og:image" content={HOME_OG_IMAGE_URL} />
          <title>Home</title>
        </Head>
        <div className="mb-12">
          <p className="text-xl md:text-xl lg:text-2xl font-normal text-left mt-8">
            Hello Netizen, I’m Shreyas Gupta, a designer with a knack for
            building things. Currently I’m studying at IIIT Bangalore and
            working as a research intern at Gothenburg University.
          </p>
          <Link href="/about">
            <button className="underline cursor-pointer mt-4">Know More</button>
          </Link>
        </div>
        <div className="mt-12 lg:mt-36">
          <div className="home-page-title">Selected Work</div>
          <ProjectList posts={allWork} />
        </div>
        <div className="mt-12">
          <div className="home-page-title">Selected Writings</div>
          <WritingList posts={allPosts} />
          <Link href="/writings">
            <button className="underline cursor-pointer -mt-4">
              Read More
            </button>
          </Link>
        </div>
        <SocialIcons />
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview }) {
  const allPosts = await getAllPostsForHome(preview)
  const allWork = await getAllProjectsForHome(preview)
  return {
    props: { allPosts, allWork },
  }
}
