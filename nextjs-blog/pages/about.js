import Head from "next/head";
import HamburgerMenu from "../components/burger/burger";
import Footer from "../components/footer/footer";
import Image from "next/image";
import styles from '../styles/about.module.css'
export default function About() {
  return (
    <>
      <HamburgerMenu></HamburgerMenu>
      <Head>
        <title>About me</title>
        <meta charset="UTF-8" />
        <meta name="keywords" content="title, meta, nextjs" />
        <meta name="author" content="Francesco Longo" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className={styles.firstMainDiv}>
        <div className={styles.mainAboutDiv}>
          <div className={styles.aboutText}>
            <h1>About me</h1>
            <p>
              I am a passionate developer who is always eager to learn and grow
              in the field of technology. Four years ago, I came to the UK with
              the goal of learning English, but I quickly realized that my true
              passion lay in pursuing a <span style={{color: '#00ADB5'}}>career in tech. </span>After moving to
              Liverpool, I enrolled in a coding bootcamp called School of Code,
              where I gained hands-on experience in coding and software
              development. 
             
            </p>
            <p>
              The bootcamp not only helped me acquire technical
              skills in <span style={{color: '#00ADB5'}}>front-end and back-end</span> development, but also equipped me
              with the essential soft skills required to work collaboratively in
              teams and communicate effectively with clients. Since then, I have
              worked on a range of web and mobile applications, both as a solo
              developer and as part of a team. Through these projects, I have
              gained invaluable experience in building <span style={{color: '#00ADB5'}}>scalable and efficient </span>
               web and mobile applications that meet the needs of clients and
              end-users. 
              </p>
            <p>
            As a developer, I believe that learning <span style={{color: '#00ADB5'}}>never stops.</span> I
              am always eager to stay up-to-date with the latest technologies
              and trends, and I strive to continuously improve my skills and
              knowledge in software development. I am excited to continue
              growing and contributing to the tech community in meaningful ways,
              and I am open to new challenges and opportunities.
            </p>
          </div>
          <div className={styles.aboutImgDiv}>
            <img src="/peep-home2.png" width={1000} height={1000} alt='Francesco Longo profile image'></img>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
