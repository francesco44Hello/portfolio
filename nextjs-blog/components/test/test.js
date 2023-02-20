import React from "react";
import { SiTypescript } from "react-icons/si";
import CardTest from "./testCard";
const componentName = () => {
  return (
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

      {/* <div class="projcard projcard-customcolor">
        <CardTest
        title='News App'
        label1='NextJs' 
        label2='JavaScript'
        />
        
      </div> */}
    </div>
  );
};

export default componentName;
