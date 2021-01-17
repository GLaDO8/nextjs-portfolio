import Link from 'next/link'
import Image from 'next/image'
import Layout from '@/components/layout'
import Head from 'next/head'
export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>Playground</title>
          <meta
            rel="og:description"
            content="Miscellaneous visual work and unfinished ideas by Shreyas Gupta"
          />
          <meta
            name="description"
            content="Miscellaneous visual work and unfinished ideas by Shreyas Gupta"
          />
        </Head>
        <h1 className="page-title-design">Playground</h1>
        <div>
          <div>
            <h2 className="section-title-design">Trying out art styles</h2>
            <Image
              src="/images/Instagram-nu.png"
              alt="Neumorphic Concept art for Instagram"
              width={2000}
              height={1748}
              layout="responsive"
            />

            <p className="page-para-design">
              2 years back when Neumorphism was trending, I tried my hand out on
              learning the style by reimagining Instagram in Neumorphic style.
              I'll say it came out pretty well! It's amazing how much difference
              just two sets of shadows can bring in. I have glassmorphism,
              brutalism and minimalism next!
            </p>
          </div>
          <div>
            <h2 className="section-title-design">
              Realism in icons. The Big Sur effect.
            </h2>
            <Image
              src="/images/icons.png"
              alt="Various icons designed with 3D realism in mind"
              width={2500}
              height={1361}
              layout="responsive"
            />

            <p className="page-para-design">
              With the launch of macOS Big Sur and iOS 14, there is a surge in
              demand for custom icons! Big Sur introduced depth and shadows to
              many default icons, but not all. I decided to take this as an
              opportunity to learn shadows, lighting and depth, and created a
              few custom icons!
              <br />I was also asked to create a logo for Canvasbird, an
              open-source organisation building tools for remote learning.
            </p>
          </div>
          <div>
            <h2 className="section-title-design">Blender. Donuts. 3D</h2>
            <Image
              src="/images/donut.png"
              alt="3D Donut made in Blender"
              width={3840}
              height={3840}
              layout="responsive"
            />

            <p className="page-para-design">
              With the launch of macOS Big Sur and iOS 14, there is a surge in
              demand for custom icons! Big Sur introduced depth and shadows to
              many default icons, but not all. I decided to take this as an
              opportunity to learn shadows, lighting and depth, and created a
              few custom icons! Not all of them are perfect and that's fine.
              Hopefully I can master the art soon.
            </p>
          </div>
          <div>
            <h2 className="section-title-design">Vector Art</h2>
            <Image
              src="/images/lowpolyearth.png"
              alt="low ploygon count vector earth"
              width={2500}
              height={2500}
              layout="responsive"
            />

            <p className="page-para-design"></p>
          </div>
        </div>
      </Layout>
    </>
  )
}
