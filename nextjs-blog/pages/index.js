import Head from "next/head";
import Layout from "../components/layout/layout";
import Footer from "../components/footer/footer";
import Image from "next/image";
import HamburgerMenu from "../components/burger/burger";
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <HamburgerMenu></HamburgerMenu>

      <Head>
        <title>Francesco Longo</title>

        <meta charset="UTF-8" />
        <meta name="keywords" content="Francesco Longo title, meta, nextjs" />
        <meta name="author" content="Francesco Longo" />
        <meta name="viewport" content="Francesco Longo width=device-width, initial-scale=1.0" />
        <meta name="description" content="Francesco Longo Portfolio google-site-verification: googlefcf83ccae9de34f1.html" />
      </Head>

      <div className={styles.mainDiv}>
        <div className={styles.leftPageDiv}>
          <>
            {" "}
            <h1 className={styles.hiElement}>Hello.</h1>
          </>
          <>
            <div className={styles.nameTitle}>
              <h1 style={{ fontWeight: "700" }}>
                I'm <br></br>
                Francesco <span>Longo</span>
              </h1>
              <h2 style={{ fontWeight: "300" }}>Full-stack developer</h2>
            </div>
          </>
          <div className={styles.description}>
            <p>
              "Everybody in this country should learn how to program a computer,
              because it teaches you how to think."{" "}
            </p>
            <h3>Steve Jobs, co-founder of Apple, Inc.</h3>
          </div>
        </div>
        <div className={styles.imgDiv}>
          <img src="/peep-home.png" width={1000} height={1000} alt='Francesco Longo profile image'></img>
        </div>
      </div>
      <Footer />
    </>
  );
}
