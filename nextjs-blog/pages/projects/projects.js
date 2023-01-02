import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout/layout";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import {
  handleClickGithub,
  handleClickLinkedin,
  snapvoteClick,
  weatherClickRepo,
  snapvoteClickRepo,
  weatherClick
} from "../../components/functions/functions";
import Footer from "../../components/footer/footer";
import Card from "../../components/card/card";
import { useEffect } from "react";


export default function Projects() {
  useEffect(()=> {
    document.title = 'Projects'
  },[])
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
      <h1 className="more-to-come">More to come...</h1>
      <div className="card-container">
        <Card
          title="Snap-vote"
          onClick={snapvoteClick}
          handleRepo={snapvoteClickRepo}
          img='https://i.ibb.co/fMG4LG9/91-B83712-E5-A4-4-D72-9784-9-BD17-A9-DB383.jpg'
          
        ></Card>
        <Card title="Weather App" onClick={weatherClick} handleRepo={weatherClickRepo}
           img='https://i.ibb.co/QkBqBsn/Image-31-12-2022-at-16-21.png'
        />
        {/* <Card title="project x" /> */}
      </div>

      <Footer />
    </>
  );
}
