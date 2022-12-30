import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout/layout";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { handleClickGithub, handleClickLinkedin} from '../../components/functions/functions'

const email = process.env.REACT_APP_EMAIL;


export default function Contact() {
  function handleClickLinkedin() {
    const link = 'https://www.linkedin.com/in/francesco-longo-27225096/'
    if (typeof window !== "undefined") {
      // browser code
      window.open(link, "_blank");
    }
  }
  function handleClickGithub() {
    const link = 'https://github.com/francesco44Hello'
    if (typeof window !== "undefined") {
      // browser code
      window.open(link, "_blank");
    }
  }
  return (
    <>
      <Layout>
        <Head>
          <title>About page</title>
        </Head>
        <h1>About</h1>
        <h2>
          <Link href="/">Back to home</Link>
        </h2>
      </Layout>
      <div className="contact-main-div">
        <div className="contact-left-page">
          <form action={`https://formsubmit.co/${email}`} method="POST">
            <h1 style={{color: 'wheat'}}>Get in touch</h1>
            {/* <form action=`https://formsubmit.co/${email}` method=`POST`> */}
            <input
              type="text"
              name="name"
              required
              placeholder="Name"
              label="name"
            />
            <input type="email" name="email" required placeholder="Email" />
            <input
              type="text"
              name="text"
              required
              placeholder="Write here..."
              style={{ height: "100px" }}
            ></input>
            <input
              type="hidden"
              name="_subject"
              value="New submission!"
            ></input>

            <button className='button'type="submit">Send</button>
          </form>
        </div>
        <div className="contact-right-page">
          <h1 style={{color: 'wheat'}}>Find me elsewhere</h1>
          <button
            
            className="github-p button"
            onClick={handleClickLinkedin}
            style={{width: '50%', borderRadius: '4px'}}
          >    
              <BsLinkedin
                style={{ height: "100%", width: "100%" }}
                type="button"
              /> 
            @francescolongo
          </button>
          <button className="github-p button" onClick={handleClickGithub}
            style={{width: '50%', borderRadius: '4px'}}>
            <BsGithub style={{ height: "100%", width: "100%" }} />
            @francesco44hello
            
          </button>
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
