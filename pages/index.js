import NavButton from '@/components/navbutton'
import Layout from '@/components/layout'
import Logo from './../public/newlogo.svg'
import Head from 'next/head'
import Buttonlist from '@/components/buttonlist'
import MoreStories from '@/components/more-stories'
import SocialIcons from '@/components/social-icons'
import { getAllPostsForHome, getAllProjectsForHome } from '@/lib/api'

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

        <div className="home-page-title">SELECTED WORK</div>
        <MoreStories posts={allWork} />
        <div className="home-page-title">MY WRITINGS</div>
        <MoreStories posts={allPosts} />
        {/* <TwitterMasonry /> */}
        <div className="flex flex-col mb-24">
          <div className="text-6xl font-bold mx-auto max-w-2xl text-center">
            For work enquiries, freelancing or just a friendly chat,
          </div>
          <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 m-8 rounded-lg mx-auto justify-center">
            mail me
          </button>
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
