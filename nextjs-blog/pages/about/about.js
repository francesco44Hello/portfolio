import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout/layout";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { handleClickGithub, handleClickLinkedin} from '../../components/functions/functions'
export default function About() {
  return (
    <>
      <Layout>
        <Head>
          <title>Who I am</title>
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
          experience building both the front-end and back-end of web apps using 
          <span style={{color: "#00ADB5"}} > React JS, ExpressJS </span>and other frameworks.
        </p>
        <p>
          I am a motivated and enthusiastic individual with a logical mind and a
          pragmatic approach to solving problems. My aim is to draw inspiration
          from new and stimulating experiences. I have great analytical and
          communication skills and a focused approach to working in a
          structured, but creative working environment.
        </p>
          </div>
        <div className="about-img-div">
        <img src="https://i.ibb.co/6885CTY/peep-home2.png" alt="peep-home2" border="0" className="img"/>
      </div>
      </div>
      </div>
      <footer>
     {" "}
      @- 2023 Francesco longo{" "}
        <BsGithub style={{ height: "70%", width: "3%" }}  onClick={handleClickGithub}/>{" "}
        <BsLinkedin style={{ height: "70%", width: "3%" }} type="button"  onClick={handleClickLinkedin}/>{" "}
      </footer>
     

    </>
  );
}
