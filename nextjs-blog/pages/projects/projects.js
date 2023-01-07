import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout/layout";
import {
  snapvoteClick,
  weatherClickRepo,
  snapvoteClickRepo,
  weatherClick,
} from "../../components/functions/functions";
import Footer from "../../components/footer/footer";
import Card from "../../components/card/card";
import { TbBrandJavascript } from "react-icons/tb";
import {
  SiTypescript,
  SiBabel,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiVercel,
} from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { DiCss3 } from "react-icons/di";
import { FiFigma } from "react-icons/fi";

export default function Projects() {
  return (
    <>
      <Layout>
      </Layout>
      <Head>
          <title>Projects</title>
          <meta charset="UTF-8" />
        <meta name="keywords" content="title, meta, nextjs" />
        <meta name="author" content="Francesco Longo" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {/* <h1 className="more-to-come">More to come...</h1> */}
      <div className="card-container">
        <Card
          title="Snap-vote"
          onClick={snapvoteClick}
          handleRepo={snapvoteClickRepo}
          img="https://i.ibb.co/fMG4LG9/91-B83712-E5-A4-4-D72-9784-9-BD17-A9-DB383.jpg"
        ></Card>
        <Card
          title="Weather App"
          onClick={weatherClick}
          handleRepo={weatherClickRepo}
          img="https://i.ibb.co/QkBqBsn/Image-31-12-2022-at-16-21.png"
        />
      </div>
      <h1 className="toolset">My toolset includes: </h1>
            <h1
              style={{
                color: "#77FF04",
                fontSize: "38px",
                padding: "0",
                margin: "0",
                width: '100%'
              }}
              className='toolset'
            >
              <TbBrandJavascript />
              <SiTypescript />
              <AiFillHtml5 />
              <FaReact />
              <TbBrandNextjs />
              <FaNodeJs /> 
              <DiCss3 />
              <SiBabel />
              <SiExpress />
              <SiMysql />
              <SiPostgresql />
              <SiVercel />
              <FiFigma />
            </h1>
      <Footer />
    </>
  );
}
