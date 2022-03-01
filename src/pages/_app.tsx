import {AppProps} from 'next/app';
import '../styles/globals.css';
import {Header} from '../components/Header';
import { MobileHeader } from '../components/Header/MobileHeader';
function MyApp({ Component, pageProps }:AppProps) {
  return (
  <>
  {/* <Header /> */}
  <MobileHeader />
  <Component {...pageProps} />
  </>
  )
}

export default MyApp