// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
import '../public/css/halpes.css';
import '../public/css/halpes-responsive.css';
import '../public/css/quick-exit.css';
import { useEffect } from 'react';

export default function MyApp({ Component, pageProps }) {
  const escFunction = (evt) => { 
    if(evt.keyCode === 27) {
      window.location.href = 'https://google.com'
    }
  }
  
  useEffect(() => {
    typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null;
    typeof document !== undefined ? document.addEventListener("keydown", escFunction, false) : null
  }, [])
  return <Component {...pageProps} />
}