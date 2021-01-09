import Link from 'next/link'
import Layout from '@/components/layout'
import Head from 'next/head'
export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>Writings</title>
          <meta rel="og:description" content="About Me | Shreyas Gupta" />
          <meta name="description" content="About Me | Shreyas Gupta" />
        </Head>
        <div className="text-lg mt-6 lg:mt-16">
          <p>
            Currently I’m Shreyas Gupta, a designer with a knack for building
            things. Currently I’m studying at{' '}
            <a
              className="link-styling cursor-pointer"
              href="https://www.iiitb.ac.in"
              rel="noopener"
              target="_blank"
            >
              IIIT Bangalore
            </a>{' '}
            , India and working as a Research Intern under Prof. Alexandra
            Weilenmann at the{' '}
            <a
              className="link-styling cursor-pointer"
              href="https://www.gu.se/en/applied-information-technology/division-of-human-computer-interaction#Research"
              rel="noopener"
              target="_blank"
            >
              HCI Department
            </a>{' '}
            of Gothenburg University. Previously I interned with GE Healthcare
            as a Data Scientist in their services department. I volunteer for{' '}
            <a
              className="link-styling cursor-pointer"
              href="https://www.earthhero.org/team"
              rel="noopener"
              target="_blank"
            >
              EarthHero
            </a>{' '}
            as an iOS developer, an organisation trying to help people track and
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
            quick chat. I’m active on Twitter and strive to maintain inbox zero
            :)
          </p>
        </div>
        <div className="mt-2">
          <Link href="/Shreyas_Gupta_Resume.pdf">
            <button className="flex p-4 bg-black border-black border-2 text-white cursor-pointer rounded-md mt-4">
              <div className="pr-2">My Resume</div>
              <div>
                <img
                  src="https://s.svgbox.net/hero-solid.svg?ic=arrow-right&fill=fff"
                  width="22"
                  height="22"
                />
              </div>
            </button>
          </Link>
        </div>
      </Layout>
    </>
  )
}
