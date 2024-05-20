import React from "react";
import styles from "../../styles/about.module.css";
const About = () => {
  return (
    <div className={styles.firstMainDiv} id="about">
      <div className={styles.mainAboutDiv}>
        <div className={styles.aboutText}>
          <h1>About me</h1>

          <p>
            I am a passionate developer who is always eager to learn and grow in
            the field of technology. Four years ago, I came to the UK with the
            goal of learning English, but I quickly realized that my true
            passion lay in pursuing a{" "}
            <span style={{ color: "#00ADB5" }}>career in tech.</span> After
            gaining foundational skills at a coding bootcamp called School of
            Code, I embarked on a professional journey in software development.
          </p>
          <p>
            Over the past year, I have honed my skills at a startup called UNIS,
            where I worked extensively with{" "}
            <span style={{ color: "#00ADB5" }}>Next.js, React, </span> and
            <span style={{ color: "#00ADB5" }}> Firebase</span> , and also gained
            experience with{" "}
            <span style={{ color: "#00ADB5" }}>React Native</span>. At UNIS, I
            played a key role in developing and maintaining scalable and
            efficient web and mobile applications, contributing significantly to
            various projects and collaborating closely with cross-functional
            teams.
          </p>
          <p>
            Unfortunately, due to redundancy, I am now seeking new
            opportunities. Despite this setback, I remain committed to
            continuous learning and growth. As a developer, I believe that
            learning <span style={{ color: "#00ADB5" }}>never stops.</span> I am
            always eager to stay up-to-date with the latest technologies and
            trends, and I strive to continuously improve my skills and knowledge
            in software development. I am excited to continue growing and
            contributing to the tech community in meaningful ways, and I am open
            to new challenges and opportunities.
          </p>
        </div>
        <div className={styles.aboutImgDiv}>
          <img
            src="/peep-home2.png"
            width={1000}
            height={1000}
            alt="Francesco Longo profile image"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default About;
