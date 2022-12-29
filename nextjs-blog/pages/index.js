import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";


export default function Home() {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
     <Layout></Layout>

      <section className={utilStyles.headingMd}></section>
    </>

    
  );
}
