import NavButton from '@/components/navbutton'
import Meta from '@/components/meta'
import Footer from '@/components/footer'
import Logo from './../public/logo.svg'
import Head from 'next/head'
import Buttonlist from '@/components/buttonlist'
import MoreStories from '@/components/more-stories'
import WritingList from '@/components/writinglist'
import SocialIcons from '@/components/social-icons'
import { getAllPostsForHome, getAllProjectsForHome } from '@/lib/api'
import { HOME_OG_IMAGE_URL } from '@/lib/constants'

export default function Index({ allPosts, allWork }) {
  return (
    <>
      <Meta />
      <Head>
        <meta property="og:image" content={HOME_OG_IMAGE_URL} />
        <title>Home</title>
      </Head>
      <Logo className="h-48 mx-auto mt-16" />
      <div
        className="flex items-center w-auto"
        id="nav-content"
      >
        <div className="flex justify-center flex-1 items-center">
          {Buttonlist.map((button) => (
            <NavButton
              key={button.path}
              path={button.path}
              label={button.label}
            />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-20 mb-12 my-16 mx-24">
        <div >
          <p className="text-xl font-medium leading-tight md:text-4xl lg:text-5xl mx-16 max-w-sm md:max-w-xl lg:max-w-2xl">
            Hello Netizen, I’m Shreyas Gupta, a designer with a knack for building things.
          </p>
          <SocialIcons/>
        </div>
        <div className="text-base md:text-lg lg:text-xl font-normal sm:mx-auto max-w-md md:max-w-xl lg:max-w-2xl text-left mx-4 lg:mx-8">
          <p>
            Currently I’m studying at <a href="">IIIT Bangalore</a>, India and working as a Research Intern under Prof. Alexandra Weilenmann at the <a href="">HCI Department</a> at Gothenburg University. Previously I interned with GE Healthcare as a Data Scientist in their Services Department. I volunteer for EarthHero as an iOS Developer, an organisation trying to help people track and reduce their carbon emissions. I was also the organiser for TEDxIIITBangalore’s very first TEDx event, along with my colleague Tejas Kotha.
          </p> 
          <br/>
          <p>
            When I’m not working, I tinker around and make art, click photos or write about things at the intersection of Psychology, Design, Tech and Business. I occasionally take up freelance work as a side hustle. 
          </p>
          <br/>
          <p>
            Feel free to get in touch with me for freelance work, questions or a quick chat. I’m active on Twitter and strive to maintain inbox zero :)
          </p>
        </div>
      </div>

      <div className="home-page-title">SELECTED WORK</div>
      <MoreStories posts={allWork} />
      <div className="home-page-title">MY WRITINGS</div>
      <WritingList posts={allPosts} />
      <div className="flex flex-col mb-24">
        <div className="text-2xl md:text-5xl lg:text-6xl font-bold mx-auto max-w-2xl text-center">
          For work enquiries, freelancing or just a friendly chat,
        </div>
        <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 m-8 rounded-lg mx-auto justify-center">
          mail me
        </button>
      </div>
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
