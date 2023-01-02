import '../styles/globals.css'
import '../components/layout/layout.css'
import '../pages/home/home.css'
import '../pages/projects/project.css'
import '../pages/about/about.css'
import '../pages/contact/contact.css'
import '../components/button/index.css'
import '../components/card/card.css'
import '../components/cardbutton/cardbutton.css'
import '../components/footer/footer.css'

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} >
          <meta charset="UTF-8" />
          <meta name="description" content="Portfolio" />
          <meta name="keywords" content="Next.js" />
          <meta name="author" content="Francesco Longo" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Component>;
  }
  //test