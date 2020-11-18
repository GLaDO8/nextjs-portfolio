import NavButton from '@/components/navbutton'
import Layout from '@/components/layout'
import Logo from './../public/newlogo.svg'
import Head from 'next/head'
import Buttonlist from '@/components/buttonlist'
import MoreStories from '@/components/more-stories'
import { getAllPostsForHome, getAllProjectsWithSlug } from '@/lib/api'
export default function Index({ allPosts, allWork }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Home</title>
        </Head>
        <Logo className="h-24 md:h-32 lg:h-40 mx-auto mt-24" />
        <div
          className="w-full lg:flex lg:items-center lg:w-auto hidden pt-6 lg:pt-6"
          id="nav-content"
        >
          <div className="lg:flex justify-center flex-1 items-center">
            {Buttonlist.map((button) => (
              <NavButton
                key={button.path}
                path={button.path}
                label={button.label}
              />
            ))}
          </div>
        </div>
        <div className="">
          <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 mt-24 mx-auto max-w-lg text-center">
            Hello, netizen.
          </div>
          <div className="text-lg md:text-xl lg:text-2xl font-regular mx-auto max-w-xl text-center">
            I’m Shreyas Gupta, a designer with a knack for building things.
            Scroll down to view my work.
          </div>
        </div>
        <div>Work</div>
        {/* <MoreStories posts={allWork} /> */}
        <div>Writings</div>
        <MoreStories posts={allPosts} />
        <div>
          <div className="text-6xl font-bold mx-auto max-w-2xl text-center">
            For work enquiries, freelancing or just a friendly chat,
          </div>
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview }) {
  const allPosts = (await getAllPostsForHome(preview)) || []
  return {
    props: { allPosts },
  }
}

// export async function getStaticProps({ preview }) {
//   const allWork = (await getAllProjectsWithSlug(preview)) || []
//   return {
//     props: { allWork },
//   }
// }
