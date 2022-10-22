import Link from 'next/link'
import Layout from '@/components/layout'
import Head from 'next/head'
export default function Index() {
  const { theme } = useTheme()
  const rightArrowLink = `https://s.svgbox.net/hero-solid.svg?ic=arrow-right&fill=fff`

  return (
    <>
      <Layout>
        <Head>
          <title>About</title>
          <meta rel="og:description" content="About Me | Shreyas Gupta" />
          <meta name="description" content="About Me | Shreyas Gupta" />
        </Head>
        <h1 className="page-title-design">About</h1>
        <div className="mt-6 text-lg font-normal text-black lg:mt-16">
          <p>
            I am a <b>Product Designer</b> and <b>Researcher</b> with a knack
            for building things. Currently finishing up my Master's Thesis with
            the HCI Division of Gothenburg University and IIIT Bangalore. I’m
            currently studying at{' '}
            <a
              className="cursor-pointer general-link"
              href="https://www.iiitb.ac.in"
              rel="noopener"
              target="_blank"
            >
              IIIT Bangalore
            </a>{' '}
            , India and doing my master's thesis under the supervision of{' '}
            <a
              className="cursor-pointer general-link"
              href="https://www.gu.se/en/about/find-staff/mattiasrost"
              rel="noopener"
              target="_blank"
            >
              Dr. Mattias Rost
            </a>{' '}
            from the{' '}
            <a
              className="cursor-pointer general-link"
              href="https://www.gu.se/en/applied-information-technology/division-of-human-computer-interaction#Research"
              rel="noopener"
              target="_blank"
            >
              HCI Division
            </a>{' '}
            of Gothenburg University and{' '}
            <a
              className="cursor-pointer general-link"
              href="https://www.iiitb.ac.in/faculty/bidisha-chaudhuri"
              rel="noopener"
              target="_blank"
            >
              Dr. Bidisha Chaudhuri
            </a>
            . Previously I interned with GE Healthcare as a Data Scientist in
            their services department to optimise the recovery and refurbishment
            of CT and MRI machines. I was also the Organiser for
            TEDxIIITBangalore’s very first TEDx event, along with my colleague
            Tejas Kotha.
          </p>
          <br />
          <p>
            When I’m not working, I tinker around and make art, click photos or
            write about things at the intersection of Psychology, Design, Tech
            and Business. You will usually find me in the kitchen trying out all
            those youtube recipes. I occasionally take up freelance work as a
            side hustle.
          </p>
          <br />
          <p>
            Feel free to get in touch with me for freelance work, questions or a
            quick chat. I’m active on Twitter and strive to maintain inbox zero
            :)
          </p>
        </div>
        <div className="mt-6">
          <Link
            href="/Shreyas_Gupta_Design_Resume-compressed.pdf"
            passHref={true}
          >
            <button className="flex items-center p-4 mt-4 font-medium text-white transition duration-300 bg-black border-2 border-black cursor-pointer dark:bg-white dark:text-black rounded-xl hover:opacity-80">
              <div className="pr-2">My Resume</div>
              <div>
                <img
                  src={rightArrowLink}
                  width="20"
                  height="20"
                  alt="right arrow icon"
                />
              </div>
            </button>
          </Link>
        </div>
      </Layout>
    </>
  )
}
