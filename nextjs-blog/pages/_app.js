import "../styles/globals.css";
import '../styles/Footer.module.css'
import '../components/modal/modal.css'


export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps}></Component>
    </>
  );
}
