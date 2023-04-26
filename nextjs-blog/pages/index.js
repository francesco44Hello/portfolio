import Head from "next/head";
import Layout from "../components/layout/layout";
import Footer from "../components/footer/footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Layout></Layout>

      <Head>
        <title>Francesco Longo</title>

        <meta charset="UTF-8" />
        <meta name="keywords" content="Francesco Longo title, meta, nextjs" />
        <meta name="author" content="Francesco Longo" />
        <meta name="viewport" content="Francesco Longo width=device-width, initial-scale=1.0" />
        <meta name="description" content="Francesco Longo Portfolio google-site-verification: googlefcf83ccae9de34f1.html" />
      </Head>

      <div className="main-div">
        <div className="left-page-div">
          <>
            {" "}
            <h1 className="hi-element">Hello.</h1>
          </>
          <>
            <div className="name-title">
              <h1 style={{ fontWeight: "700" }}>
                I'm <br></br>
                Francesco <span>Longo</span>
              </h1>
              <h2 style={{ fontWeight: "300" }}>Full-stack developer</h2>
            </div>
          </>
          <div className="description">
            <p>
              "Everybody in this country should learn how to program a computer,
              because it teaches you how to think."{" "}
            </p>
            <h3>Steve Jobs, co-founder of Apple, Inc.</h3>
          </div>
        </div>
        <div className="img-div">
          <Image src="/peep-home.png" width={1000} height={1000} alt='Francesco Longo profile image'></Image>
        </div>
      </div>
      <Footer />
    </>
  );
}
