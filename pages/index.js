import MoreStories from "@/components/more-stories";
import HeroPost from "@/components/hero-post";
import Intro from "@/components/navbar";
import ButtonList from "@/components/buttonlist";
import Layout from "@/components/layout";
import { getAllPostsForHome } from "@/lib/api";
import Head from "next/head";

export default function Index({ allPosts }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  console.log(allPosts);
  return (
    <>
      <Layout>
        <Head>
          <title>Home</title>
        </Head>
        <Intro navButtons={ButtonList} />
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.metadata.cover_image}
            date={heroPost.created_at}
            author={heroPost.metadata.author}
            slug={heroPost.slug}
            excerpt={heroPost.metadata.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
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
