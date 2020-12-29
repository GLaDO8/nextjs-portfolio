import NavButton from '@/components/navbutton'
import Meta from '@/components/meta'
import Footer from '@/components/footer'
import Logo from './../public/logo.svg'
import Head from 'next/head'
import Buttonlist from '@/components/buttonlist'
import ProjectList from '@/components/projectlist'
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
      <Logo className="h-24 w-24 md:h-36 md:w-36 lg:h-52 lg:w-52 mx-auto mt-16 cursor-pointer" />
      <div className="flex items-center w-auto" id="nav-content">
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
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-12 lg:gap-x-16 mb-12 my-16 md:mx-12 lg:mx-24">
        <div className="lg:bg-gray-200 lg:rounded-xl">
          <p className="text-xl md:text-3xl lg:text-5xl font-medium leading-relaxed my-8 mx-auto text-center md:text-left md:mx-8 lg:mx-16 max-w-lg md:max-w-xl lg:max-w-2xl">
            Hello Netizen, I’m Shreyas Gupta, a designer with a knack for
            building things.
          </p>
          <SocialIcons />
        </div>
        <div className="text-base md:text-lg lg:text-xl font-normal mx-auto max-w-lg md:max-w-xl lg:max-w-2xl text-left md:mx-8 lg:mx-16">
          <p>
            Currently I’m studying at{' '}
            <a className="reg-links" href="https://www.iiitb.ac.in">
              IIIT Bangalore
            </a>
            , India and working as a Research Intern under Prof. Alexandra
            Weilenmann at the <a href="">HCI Department</a> at Gothenburg
            University. Previously I interned with GE Healthcare as a Data
            Scientist in their Services Department. I volunteer for EarthHero as
            an iOS Developer, an organisation trying to help people track and
            reduce their carbon emissions. I was also the organiser for
            TEDxIIITBangalore’s very first TEDx event, along with my colleague
            Tejas Kotha.
          </p>
          <br />
          <p>
            When I’m not working, I tinker around and make art, click photos or
            write about things at the intersection of Psychology, Design, Tech
            and Business. I occasionally take up freelance work as a side
            hustle.
          </p>
          <br />
          <p>
            Feel free to get in touch with me for freelance work, questions or a
            quick chat! I’m active on Twitter and strive to maintain inbox zero.
          </p>
        </div>
      </div>
      <div className="home-page-title">SELECTED WORK</div>
      <ProjectList posts={allWork} />
      <WritingList posts={allPosts} />
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
