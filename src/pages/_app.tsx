import 'bootstrap/dist/css/bootstrap.css'
import '../styles/Home.module.scss'
import '../styles/globals.scss'
import { AppProps } from "next/app"
import Layout from '../layout';

function MyApp({Component, pageProps}: AppProps){
  return <Layout>
    <Component {...pageProps} />
    </Layout>
}

export default MyApp;