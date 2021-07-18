// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
import '../public/css/halpes.css';
import '../public/css/halpes-responsive.css';
import { useEffect } from 'react';

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
}, [])
  return <Component {...pageProps} />
}