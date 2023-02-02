import Head from "next/head";
import Layout from "../components/layout/layout";
import Footer from "../components/footer/footer";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Layout></Layout>
      <Head>
        <title>About me</title>
        <meta charset="UTF-8" />
        <meta name="keywords" content="title, meta, nextjs" />
        <meta name="author" content="Francesco Longo" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="first-main-div">
        <div className="main-about-div">
          <div className="about-text">
            <h1>About me</h1>
            <p>
              Ex-Barista transitioned into a Software Development role after
              completing School of Code Bootcamp.<br></br> Hands-on project
              experience building both the front-end and back-end of web apps
              using
              <span style={{ color: "#00ADB5" }}> React JS, ExpressJS </span>and
              other frameworks.
            </p>
            <p>
              I am a motivated and enthusiastic individual with a logical mind
              and a pragmatic approach to solving problems. My aim is to draw
              inspiration from new and stimulating experiences. I have great
              analytical and communication skills and a focused approach to
              working in a structured, but creative working environment.
            </p>
          </div>
          <div className="about-img-div">
            <Image src="/peep-home2.png" width={1000} height={1000}></Image>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
