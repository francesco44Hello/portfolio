import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";

export default function Home() {
  return (
    <>
      <Layout>
        <Head>
          <title>About page</title>
        </Head>
      </Layout>
      <div className="main-div">
      <div className="left-page-div">
      <>
        {" "}
        <h1 className="hi-element">Hi.</h1>
      </>
      <>
        <div className="name-title">
          <h1>
            I'm <br></br>
            Francesco <span>Longo</span>
          </h1>
          <h2>Full-stack developer</h2>
        </div>
      </>
      <div className="description">
        
        <p>
          "Everybody in this country should learn how to program a
          computer, because it teaches you how to think."{" "}
        </p>
        <h3>Steve Jobs, co-founder of Apple, Inc.</h3>
        </div>
      </div>
      <div className="img-div">
      <img src="https://i.ibb.co/BfGHzfw/peep-home.png" alt="peep-home" border="0"/>
      </div>
      </div>
    </>
  );
}
// style={{color: #ff0000}}
//className="hi-element-div"
