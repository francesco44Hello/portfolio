import Head from "next/head";
import Footer from "../components/footer/footer";
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
import HamburgerMenu from "../components/burger/burger";
import React from "react";
import { useState } from "react";
import Example from "../components/modal/modal.js";
import CardTest from "../components/test/testCard";

export default function Projects() {

  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <HamburgerMenu/>
      <Head>
        <title>Projects</title>
        <meta charset="UTF-8" />
        <meta name="keywords" content="title, meta, nextjs" />
        <meta name="author" content="Francesco Longo" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className="project-main-div">

      
        <h1 className='project-page-title'>Portfolio: Examples of My Work as a Developer</h1>
        {/* <StaticExample/> */}
     {/* <Example /> */}
        {/* <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button> */}

      {/* <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      /> */}
     <div className="projcard-container"> 
      <div className="projcard projcard-blue">
        <CardTest
          title="PetBrB"
          img="/petbrb.png"
          Subtitle="Connecting Pet Owners with Trusted Sitters"
          label1="NextJs"
          label2="JavaScript"
          label3="ElephantSQL"
          label4="NextAuth"
          description="Petbrb is a mobile app that connects pet owners with trusted pet sitters. The app allows pet owners to easily find and book pet sitters based on location, availability, and other important criteria. Pet sitters can create profiles showcasing their experience, skills, and availability, and set their own rates. Petbrb is a valuable tool for both pet owners and sitters, simplifying the process of finding and booking reliable pet care services."
          link="https://petbrb.vercel.app/"
        />
      </div>

      <div className="projcard projcard-green">
        <CardTest
          title="Weather app"
          img="/weather-app.png"
          Subtitle=" Real-Time Forecasts for Any City"
          label1="React"
          label2="TypeScript"
          label3="API"
          label4="CSS"
          description="This weather app is a TypeScript and React-based application designed to provide users with up-to-date weather information for different cities. Users can search for cities to get accurate weather forecasts, including temperature, humidity, wind speed, and more. The app utilizes APIs to pull real-time data and dynamically update the displayed information. This app is a great example of my skills in building scalable and efficient TypeScript and React applications."
          link="https://francesco-weather.vercel.app/"
        />
      </div>
      <div className="projcard projcard-red">
        <CardTest
          title="SnapVote"
          img="/snapvote.png"
          Subtitle="Simplifying Group Decision-Making"
          label1="React"
          label2="JavaScript"
          label3="Figma"
          label4="Custom Hooks"
          description="SnapVote is a team project that aims to simplify the decision-making process. The app allows users to input the number of voters and the topic to be voted on. Users can then post pros and cons for each option, and at the end, everyone can vote. SnapVote streamlines the process of organizing a vote, making it easy to collect and count votes from multiple people in a fast and efficient manner. This app is an excellent example of my collaborative skills as a developer and my ability to create intuitive and user-friendly applications."
          link="https://snap-vote.netlify.app/"
        />
      </div>
    </div> 
  
   
      <div className="toolset">

      
      <h1 >My toolset includes: </h1>
      <h1
        style={{
          color: "#77FF04",
          fontSize: "38px",
          padding: "0",
          margin: "0",
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
      </main>
      <Footer />
    </>
  );
}
