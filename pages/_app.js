// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
import '../public/css/halpes.css';
import '../public/css/halpes-responsive.css';
import '../public/css/quick-exit.css';
import '../public/css/halpes-fonts.css'
import { useEffect, useState } from 'react';


export default function MyApp({ Component, pageProps }) {

  
  const [passwordProvided, setPasswordProvided] = useState(false);

  const updatePasswordProvided = (value) => {
    typeof window !== undefined  && window.sessionStorage.setItem('pwdProvided', value);
    setPasswordProvided(value);
  }

  const escFunction = (evt) => { 
    if(evt.keyCode === 27) {
      window.location.href = 'https://google.com'
    }
  }
  
  useEffect(() => {
    typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null;
    typeof document !== undefined ? document.addEventListener("keydown", escFunction, false) : null
    typeof window !== undefined ? setPasswordProvided(window.sessionStorage.getItem('pwdProvided') ? true: false) : null;

  }, [])
  return <Component {...pageProps} passwordProvided={passwordProvided} setPasswordProvided={updatePasswordProvided} />
}