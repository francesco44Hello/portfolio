import Head from "next/head";
import Layout from "../../components/layout/layout";
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
import Footer from "../../components/footer/footer";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    document.title = "About";
  }, []);
  return (
    <>
      <Layout>
        <Head>
          <title>About me</title>
        </Head>
        <h1>Who I am</h1>
      </Layout>
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
            <h1>My toolset includes: </h1>
            <h1
              style={{
                color: "#77FF04",
                fontSize: "38px",
                padding: "0",
                margin: "0",
                width: '100%'
              }}
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
          </div>
          <div className="about-img-div">
            <img
              src="https://i.ibb.co/6885CTY/peep-home2.png"
              alt="peep-home2"
              border="0"
              className="img"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
