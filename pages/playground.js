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
            <div className="overflow-hidden rounded-xl">
              <Image
                src="/images/Instagram-nu.png"
                alt="Neumorphic Concept art for Instagram"
                width={667}
                height={583}
                layout="responsive"
              />
            </div>
          </div>

          <div>
            <div className="overflow-hidden rounded-xl">
              <Image
                src="/images/icons.png"
                alt="Various icons designed with 3D realism in mind"
                width={834}
                height={454}
                layout="responsive"
              />
            </div>
          </div>

          <div>
            <div className="overflow-hidden rounded-xl">
              {' '}
              <Image
                src="/images/donut.png"
                alt="3D Donut made in Blender"
                width={800}
                height={800}
                layout="responsive"
              />
            </div>
          </div>

          <div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="overflow-hidden rounded-xl">
                <Image
                  src="/images/lowpolyearth.png"
                  alt="low ploygon count vector earth"
                  width={600}
                  height={600}
                  layout="responsive"
                />
              </div>
              <div className="overflow-hidden rounded-xl">
                <Image
                  src="/images/logorender1.png"
                  alt=""
                  width={600}
                  height={600}
                  layout="responsive"
                />
              </div>
            </div>

            {/* <p className="page-para-design"></p> */}
          </div>
        </div>
      </Layout>
    </>
  )
}
