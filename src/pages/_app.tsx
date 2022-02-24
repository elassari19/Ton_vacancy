import 'bootstrap/dist/css/bootstrap.css'
import '../styles/Home.module.scss'
import '../styles/globals.scss'
import { AppProps } from "next/app"
import Layout from '../layout';
import { Provider } from 'react-redux';
import Store from 'store';

function MyApp({Component, pageProps}: AppProps){
  return <Layout>
    <Provider store={Store}>
      <Component {...pageProps} />
    </Provider>
    </Layout>
}

export default MyApp;