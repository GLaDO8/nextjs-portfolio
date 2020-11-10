import { useRouter } from "next/router";
import ErrorPage from "next/error";
import PostBody from "@/components/post-body";
import MoreStories from "@/components/more-stories";
import Intro from "@/components/navbar";
import ButtonList from "@/components/buttonlist";
import PostHeader from "@/components/post-header";
import SectionSeparator from "@/components/section-separator";
import Layout from "@/components/layout";
import { getAllPostsWithSlug, getPostAndMorePosts } from "@/lib/api";
import PostTitle from "@/components/post-title";
import Head from "next/head";
import markdownToHtml from "@/lib/markdownToHtml";

export default function Post({ post, morePosts, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      <Intro navButtons={ButtonList} />
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <article>
            <Head>
              <title>{post.title}</title>
              <meta
                property="og:image"
                content={post.metadata.cover_image.imgix_url}
              />
            </Head>
            <PostHeader
              title={post.title}
              coverImage={post.metadata.cover_image}
              date={post.created_at}
              author={post.metadata.author}
            />
            <PostBody content={post.content} />
          </article>
          <SectionSeparator />
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </>
      )}
    </Layout>
  );
}

export async function getStaticProps({ params, preview = null }) {
  const data = await getPostAndMorePosts(params.slug, preview);
  const content = await markdownToHtml(data.post?.metadata?.content || "");

  const WPS = 275 / 60;
  var images = 0;
  const regex = /\w/;
  var readcontent = data.post?.metadata?.content + "";
  console.log(readcontent);

  let words = readcontent.split(" ").filter((word) => {
    if (word.includes("<img")) {
      images += 1;
    }
    return regex.test(word);
  }).length;

  var imageAdjust = images * 4;
  var imageSecs = 0;
  var imageFactor = 12;

  while (images) {
    imageSecs += imageFactor;
    if (imageFactor > 3) {
      imageFactor -= 1;
    }
    images -= 1;
  }
  const minutes = Math.ceil(((words - imageAdjust) / WPS + imageSecs) / 60);

  return {
    props: {
      preview,
      post: {
        ...data.post,
        content,
      },
      morePosts: data.morePosts || [],
    },
  };
}

export async function getStaticPaths() {
  const allPosts = (await getAllPostsWithSlug()) || [];
  return {
    paths: allPosts.map((post) => `/posts/${post.slug}`),
    fallback: true,
  };
}
