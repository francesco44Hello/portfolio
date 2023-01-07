import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout/layout"
import Footer from "../components/footer/footer";

 
export default function Home() {
  
  return (
    <>
      
      <Layout></Layout>
      
      <Head>
        <title>Home page</title>
        <meta charset="UTF-8" />
        <meta name="keywords" content="title, meta, nextjs" />
        <meta name="author" content="Francesco Longo" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      
     
      <div className="main-div">
        <div className="left-page-div">
          <>
            {" "}
            <h1 className="hi-element">Hello.</h1>
          </>
          <>
            <div className="name-title">
              <h1 style={{ fontWeight: "900" }}>
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
          <img
            src="https://i.ibb.co/BfGHzfw/peep-home.png"
            alt="peep-home"
            border="0"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
