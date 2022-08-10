import '../styles/globals.css'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    setTimeout(()=>{
      const bio = document.querySelector('.Home_bio__C_JdL')
      const sociallinks = document.querySelector('.Home_sociallinks__E78nO')
      bio.style.opacity = 1
      sociallinks.style.opacity = 1
    }, 2000)
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
