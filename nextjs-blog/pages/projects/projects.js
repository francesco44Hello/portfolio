import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout/layout";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { handleClickGithub, handleClickLinkedin} from '../../components/functions/functions'

export default function Projects() {
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
      <footer>
     {" "}
      @- 2023 Francesco longo{" "}
        <BsGithub style={{ height: "70%", width: "3%" }}  onClick={handleClickGithub}/>{" "}
        <BsLinkedin style={{ height: "70%", width: "3%" }} type="button"  onClick={handleClickLinkedin}/>{" "}
      </footer>
      
    </>
  );
}
