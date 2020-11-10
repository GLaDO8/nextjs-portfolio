import MoreStories from "@/components/more-stories";
import PageLayout from "@/components/page-layout";
import { getAllPostsForHome } from "@/lib/api";
import Head from "next/head";

export default function Index({ allPosts }) {
  return (
    <>
      <PageLayout>
        <Head>
          <title>Writing</title>
        </Head>
        <MoreStories posts={allPosts} />
      </PageLayout>
    </>
  );
}

export async function getStaticProps({ preview }) {
  const allPosts = (await getAllPostsForHome(preview)) || [];
  return {
    props: { allPosts },
  };
}
