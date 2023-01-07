import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout/layout";
import utilStyles from "../styles/utils.module.css";


export default function Home() {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta charset="UTF-8" />
        <meta name="keywords" content="title, meta, nextjs" />
        <meta name="author" content="Francesco Longo" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
     <Layout></Layout>

      <section className={utilStyles.headingMd}></section>
    </>

    
  );
}
