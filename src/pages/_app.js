import { useEffect } from 'react';
import Router from 'next/router';
import { initGA, logPageView } from 'analytics';
import 'assets/css/react-slick.css';
import 'rc-drawer/assets/index.css';

import Head from 'next/head'


export default function CustomApp({ Component, pageProps }) {
  useEffect(() => {
    initGA();
    logPageView();
    Router.events.on('routeChangeComplete', logPageView);
  }, []);

  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Nothing+You+Could+Do:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} /></>
  );
}
