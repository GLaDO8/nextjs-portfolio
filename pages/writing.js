import Container from "@/components/container";
import MoreStories from "@/components/more-stories";
import Intro from "@/components/intro";
import Layout from "@/components/layout";
import { getAllPostsForHome } from "@/lib/api";
import Head from "next/head";

export default function Index({ allPosts }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Writing</title>
        </Head>
        <Container>
          <Intro />
          {<MoreStories posts={allPosts} />}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview }) {
  const allPosts = (await getAllPostsForHome(preview)) || [];
  return {
    props: { allPosts },
  };
}
