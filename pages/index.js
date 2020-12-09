import NavButton from '@/components/navbutton'
import Meta from '@/components/meta'
import Footer from '@/components/footer'
import Logo from './../public/logo.svg'
import Head from 'next/head'
import Buttonlist from '@/components/buttonlist'
import MoreStories from '@/components/more-stories'
import SocialIcons from '@/components/social-icons'
import { getAllPostsForHome, getAllProjectsForHome } from '@/lib/api'

export default function Index({ allPosts, allWork }) {
  return (
    <>
      <Meta />
      <Head>
        <title>Home</title>
      </Head>
      <div className=" grid lg:grid-cols-2">
        <div className="w-1/2 h-1/2">
          <Logo className="h-20 md:h-24 lg:h-28" />
        </div>
        <div>
          <div
            className="lg:flex hidden flex-row-reverse pt-6"
            id="nav-content"
          >
            {Buttonlist.map((button) => (
              <NavButton
                key={button.path}
                path={button.path}
                label={button.label}
              />
            ))}
          </div>
          <div>
            <div className="text-base md:text-lg lg:text-xl font-regular z-10 p-8">
              Hello Netizen, I’m Shreyas Gupta, a designer with a knack for
              building things.
            </div>
          </div>
        </div>
      </div>

      <div className="home-page-title">SELECTED WORK</div>
      <MoreStories posts={allWork} />
      <div className="home-page-title">MY WRITINGS</div>
      <MoreStories posts={allPosts} />
      <div className="flex flex-col mb-24">
        <div className="text-2xl md:text-5xl lg:text-6xl font-bold mx-auto max-w-2xl text-center">
          For work enquiries, freelancing or just a friendly chat,
        </div>
        <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 m-8 rounded-lg mx-auto justify-center">
          mail me
        </button>
      </div>

      <SocialIcons />
      <Footer />
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
