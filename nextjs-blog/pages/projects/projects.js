import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout/layout";

export default function Projects() {
  return (
    <>
      <Layout>
        <Head>
          <title>About page</title>
        </Head>
        <h1>About</h1>
        <h2>
          <Link href="/">Back to home</Link>
        </h2>
      </Layout>
      
    </>
  );
}
