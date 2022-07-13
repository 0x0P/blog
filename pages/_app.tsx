import "aos/dist/aos.css";
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Container  from '../components/container'
import { useEffect } from 'react'
import AOS from "aos";
import '../styles/code.min.css';


function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      console.log(localStorage.theme)
      document.body.setAttribute( 'theme', 'dark' )
    } else {
      console.log(localStorage.theme)
      document.body.setAttribute( 'theme', 'light' )
    }
  }, [])
  return (
  <>
    <Container>
     <Component {...pageProps} />
     </Container>
  </>
  )
}

export default MyApp
