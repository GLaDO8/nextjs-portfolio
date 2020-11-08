import Intro from "@/components/intro";
import Layout from "@/components/layout";
import Container from "@/components/container";
import Head from "next/head";

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>Projects</title>
        </Head>
        <Container>
          <Intro />
        </Container>
      </Layout>
    </>
  );
}
