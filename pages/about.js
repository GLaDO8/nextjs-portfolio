import PageLayout from "@/components/page-layout";
import Head from "next/head";
import About from "@/components/about-content";

export default function Index() {
  return (
    <>
      <PageLayout>
        <Head>
          <title>About Me</title>
        </Head>
        <About />
      </PageLayout>
    </>
  );
}
