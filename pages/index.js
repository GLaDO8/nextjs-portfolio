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
      <Logo className="h-20 md:h-40 lg:h-56 mx-auto mt-16" />
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
      <div className="my-24">
        <div className=" text-base md:text-lg lg:text-xl font-normal mx-auto max-w-md sm:mx-8 md:max-w-xl lg:max-w-2xl text-left">
          <p>
            Hello netizens, I’m Shreyas Gupta, a design researcher and developer studying at IIIT Bangalore, India. I’m currently working as a Research Intern under Prof. Alexandra Weilenmann at the HCI department at Gothenburg University. Previously I interned with GE Healthcare as a Data Scientist in their services department. I volunteer for EarthHero as an iOS developer, an organisation trying to help people track and reduce their carbon emissions. I was also the organiser for TEDxIIITBangalore’s very first TEDx event, along with my colleague Tejas Kotha.
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
