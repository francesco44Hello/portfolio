import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';

const email = process.env.REACT_EMAIL

export default function Contact() {
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
          <h1>Get in touch</h1>
          <div className="form">
          <form action="https://formsubmit.co/${email}" method="POST">
          {/* <form action=`https://formsubmit.co/${email}` method=`POST`> */}
          <input type="text" name="name" required placeholder='Name'/>
          <input type="email" name="email" required placeholder='Email'/>
          <input type='text' name='text' required placeholder='Write here'></input>
          <input type="hidden" name="_subject" value="New submission!"></input>

           <button type="submit">Send</button>
        </form>
          </div>
        </div>
        <div className="contact-right-page">
          <h1>Find Francesco elsewhere</h1>
          <p>icons</p>
        </div>
      </div>
    </>
  )}