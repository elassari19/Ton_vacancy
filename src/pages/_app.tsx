<<<<<<< HEAD
import "bootstrap/dist/css/bootstrap.css";
import "../styles/Home.module.scss";
import "../styles/globals.scss";

import { AppProps } from "next/app";
import Layout from "../layout";
import { Provider } from "react-redux";
import Store from "store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={Store}>
=======
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/Home.module.scss'
import '../styles/globals.scss'
import { AppProps } from "next/app"
import Layout from '../layout';
import { Provider } from 'react-redux';
import Store from 'store';

function MyApp({Component, pageProps}: AppProps){
  return <Provider store={Store}>
>>>>>>> f8a607d17099ca218811c66bc43c75a80cbe2df5
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
<<<<<<< HEAD
  );
}

export default MyApp;
=======
}

export default MyApp;
>>>>>>> f8a607d17099ca218811c66bc43c75a80cbe2df5
