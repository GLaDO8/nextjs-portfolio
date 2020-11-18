import MoreStories from "@/components/more-stories";
import PageLayout from "@/components/page-layout";
import { getOnlyBlogPosts } from "@/lib/api";
import Head from "next/head";

export default function Index({ allPosts }) {
  return (
    <>
      <PageLayout>
        <Head>
          <title>Writings</title>
          <meta rel="og:description" content="Writings by Shreyas Gupta" />
        </Head>
        <MoreStories posts={allPosts} />
      </PageLayout>
    </>
  );
}

export async function getStaticProps({ preview }) {
  const allPosts = (await getOnlyBlogPosts(preview)) || [];
  return {
    props: { allPosts },
  };
}
