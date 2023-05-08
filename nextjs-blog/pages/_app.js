import "../styles/globals.css";
import "../components/layout/layout.css";
import "../pages/home/home.css";
import "../pages/projects/project.css";
import "../pages/about/about.css";
import "../pages/contact/contact.css";
import "../components/button/index.css";
import "../components/card/card.css";
import "../components/cardbutton/cardbutton.css";
import "../components/footer/footer.css";
import "../styles/test.css"
import '../components/test/test.css'
import '../styles/burger.css'
import '../styles/Footer.module.css'


export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps}></Component>
    </>
  );
}
