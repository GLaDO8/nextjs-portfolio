import PageLayout from '@/components/page-layout'
import { getAllProjects } from '@/lib/api'
import Head from 'next/head'
import ProjectPreview from '@/components/project-preview'

export default function Index({ allPosts }) {
  return (
    <>
      <PageLayout>
        <Head>
          <title>Work</title>
        </Head>
        <section className="m-16">
          <div className="grid grid-cols-1 md:grid-cols-3 md:col-gap-16 lg:col-gap-20 row-gap-20 md:row-gap-20 mb-20">
            {allPosts.map((post) => (
              <ProjectPreview
                key={post.slug}
                title={post.title}
                coverImage={post.metadata.cover_image}
                date={post.created_at}
                author={post.metadata.author}
                slug={post.slug}
                excerpt={post.metadata.excerpt}
              />
            ))}
          </div>
        </section>
      </PageLayout>
    </>
  )
}

export async function getStaticProps({ preview }) {
  const allPosts = (await getAllProjects(preview)) || []
  return {
    props: { allPosts },
  }
}
