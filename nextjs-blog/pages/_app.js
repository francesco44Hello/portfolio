import '../styles/globals.css'
import '../components/layout/layout.css'
import '../pages/home/home.css'
import '../pages/projects/first-post.css'
import '../pages/about/about.css'
import '../pages/contact/contact.css'
import '../components/DownloadButton/index.css'

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
  }