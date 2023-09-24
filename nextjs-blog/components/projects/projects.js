import Head from "next/head";
// import Footer from "../components/footer/footer";
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
import React from "react";
import styles from "../../styles/modal.module.css";
import Modal from "../modal/modal";

export default function Projects() {
  return (
    <>
      <main className={styles.projectMainDiv} id="projects">
        <h1 className={styles.projectPageTitle}>
          Portfolio: Examples of My Work as a Developer
        </h1>
        <div className={styles.modalContainer}>
          <div className={styles.modalSubContainer}>
            <Modal
              title="Weather App"
              img="/weather-app.png"
              description="This TypeScript and React-based weather app provides real-time weather data for various cities. Users can conveniently search for cities to access detailed weather forecasts, including temperature, humidity, wind speed, and more. The application uses APIs to efficiently fetch and update weather information. It demonstrates my skills in building TypeScript and React applications for practical use."
              subheader="Description: TypeScript & React weather app
Skills: TypeScript, React, API integration"
              link="https://francesco-weather.vercel.app/"
              repo="https://github.com/francesco44Hello/Weather_project_TypeScript"
            />
            <Modal
              title="SnapVote"
              img="/snapvote.png"
              description="SnapVote is a team project that aims to simplify the decision-making process. The app allows users to input the number of voters and the topic to be voted on. Users can then post pros and cons for each option, and at the end, everyone can vote. SnapVote streamlines the process of organizing a vote, making it easy to collect and count votes from multiple people in a fast and efficient manner. This app is an excellent example of my collaborative skills as a developer and my ability to create intuitive and user-friendly applications."
              subheader="Simplifying Group Decision-Making
Skills: JavaScript, React, CSS"
              link="https://snap-vote.netlify.app/"
              repo="https://github.com/francesco44Hello/snap_vote"
            />
            <Modal
              title="PetBrB"
              img="/petbrb.png"
              description="Petbrb is a mobile app that connects pet owners with trusted pet sitters. The app allows pet owners to easily find and book pet sitters based on location, availability, and other important criteria. Pet sitters can create profiles showcasing their experience, skills, and availability, and set their own rates. Petbrb is a valuable tool for both pet owners and sitters, simplifying the process of finding and booking reliable pet care services."
              subheader="Connecting Pet Owners with Trusted Sitters
Skills: JavaScript, Next.JS, BootStrap, ElephantSQL, NodeJS"
              link="https://petbrb.vercel.app/"
              repo="https://github.com/SchoolOfCode/bc13_final-project_front-end-refactor"
            />
          </div>
        </div>
        <div className={styles.toolset}>
          <h1>My toolset includes: </h1>
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
    </>
  );
}
